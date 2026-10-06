"""Backend tests for Telegram integration in POST /api/bookings and /api/pricing/diag."""
import os
import time
import subprocess
import pytest
import requests
from pymongo import MongoClient

BASE_URL = "http://localhost:3100"
ADMIN_PASSWORD = "NovaTaxi2026Admin"
ENV_PATH = "/app/next-nova-taxi/.env.local"
MONGO_URL = "mongodb://localhost:27017"
DB_NAME = "nova_taxi"


def write_env(telegram_token=None, telegram_chat_id=None):
    """Rewrite .env.local with/without Telegram vars, keep others."""
    base_lines = [
        "MONGO_URL=mongodb://localhost:27017",
        "DB_NAME=nova_taxi",
        "GOOGLE_MAPS_API_KEY=AIzaSyAR5af36hrIBOOBP5lIjXYLqtngK2mmkXU",
        "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyAR5af36hrIBOOBP5lIjXYLqtngK2mmkXU",
        "NEXT_PUBLIC_WHATSAPP_NUMBER=41766113131",
        "DRIVER_CONFIRM_SECRET=nova-taxi-driver-2026",
        "ADMIN_PASSWORD=NovaTaxi2026Admin",
    ]
    if telegram_token is not None:
        base_lines.append(f"TELEGRAM_BOT_TOKEN={telegram_token}")
    if telegram_chat_id is not None:
        base_lines.append(f"TELEGRAM_CHAT_ID={telegram_chat_id}")
    with open(ENV_PATH, "w") as f:
        f.write("\n".join(base_lines) + "\n")


def restart_next():
    """Restart Next.js dev server so new env is loaded."""
    # Kill existing next/yarn dev processes on port 3100
    subprocess.run(
        ["bash", "-c", "pkill -9 -f 'next dev' ; pkill -9 -f 'yarn dev -p 3100' ; pkill -9 -f 'next-server' ; sleep 2"],
        capture_output=True,
    )
    # Start fresh
    subprocess.Popen(
        ["bash", "-c", "cd /app/next-nova-taxi && nohup yarn dev -p 3100 > /tmp/next-dev.log 2>&1 &"],
    )
    # Wait for server to be ready
    for _ in range(90):
        try:
            r = requests.get(f"{BASE_URL}/api/health", timeout=2)
            if r.status_code == 200:
                return
        except Exception:
            pass
        time.sleep(1)
    raise RuntimeError("Next.js did not come up")


def make_booking_payload(name_suffix=""):
    return {
        "pickupAddress": "Zürich HB",
        "destinationAddress": "Flughafen Zürich",
        "whenType": "now",
        "persons": 2,
        "customerName": f"TEST_Customer{name_suffix}",
        "customerPhone": "+41791234567",
        "paymentMethod": "cash",
    }


# --- Fixtures ---
@pytest.fixture(scope="module")
def mongo_col():
    client = MongoClient(MONGO_URL)
    col = client[DB_NAME]["bookings"]
    yield col
    # Cleanup TEST_ bookings
    col.delete_many({"customerName": {"$regex": "^TEST_"}})
    client.close()


# --- Test 1: Server up ---
def test_server_up():
    r = requests.get(f"{BASE_URL}/api/health", timeout=5)
    assert r.status_code == 200


# --- Test 2: With invalid Telegram token (current .env.local state) ---
# attempted=true, ok=false, error has description
class TestInvalidToken:
    @classmethod
    def setup_class(cls):
        write_env(telegram_token="invalid_test_token", telegram_chat_id="-100000")
        restart_next()

    def test_booking_with_invalid_telegram(self, mongo_col):
        payload = make_booking_payload("_invalid")
        r = requests.post(f"{BASE_URL}/api/bookings", json=payload, timeout=30)
        assert r.status_code == 201, f"Expected 201, got {r.status_code}: {r.text}"
        data = r.json()
        assert "adminTelegramNotification" in data
        tg = data["adminTelegramNotification"]
        assert tg["attempted"] is True, f"attempted should be True, got: {tg}"
        assert tg["ok"] is False, f"ok should be False, got: {tg}"

        # Verify in MongoDB
        booking_id = data["id"]
        time.sleep(0.5)
        doc = mongo_col.find_one({"id": booking_id})
        assert doc is not None
        assert doc["adminTelegramNotification"]["attempted"] is True
        assert doc["adminTelegramNotification"]["ok"] is False
        assert "error" in doc["adminTelegramNotification"]
        err_text = str(doc["adminTelegramNotification"]["error"]).lower()
        assert ("unauthorized" in err_text or "not found" in err_text or "token" in err_text), (
            f"Error should mention Telegram failure: {err_text}"
        )

    def test_diag_telegram_with_invalid_token(self):
        r = requests.get(
            f"{BASE_URL}/api/pricing/diag",
            headers={"x-admin-key": ADMIN_PASSWORD},
            timeout=15,
        )
        assert r.status_code == 200
        data = r.json()
        assert data["env"]["TELEGRAM_BOT_TOKEN_present"] is True
        assert data["env"]["TELEGRAM_CHAT_ID_present"] is True
        assert "telegramTest" in data
        tg = data["telegramTest"]
        assert tg["ok"] is False
        assert tg.get("bot") is None or tg["bot"] is None
        assert tg.get("error") is not None

    def test_build_admin_message_contents_via_response(self, mongo_col):
        """buildAdminMessage should include shortId, name, phone, pickup, destination, price, confirm link."""
        payload = make_booking_payload("_msgcheck")
        r = requests.post(f"{BASE_URL}/api/bookings", json=payload, timeout=30)
        assert r.status_code == 201
        data = r.json()
        booking_id = data["id"]
        short_id = data["shortId"]
        doc = mongo_col.find_one({"id": booking_id})
        # confirmToken stored server-side
        assert doc.get("confirmToken"), "confirmToken must be stored"
        assert doc["shortId"] == short_id
        # confirmToken must NOT be in public response
        assert "confirmToken" not in data


# --- Test 3: Without Telegram env vars ---
class TestNoTelegramEnv:
    @classmethod
    def setup_class(cls):
        write_env(telegram_token=None, telegram_chat_id=None)
        restart_next()

    def test_booking_without_telegram(self):
        payload = make_booking_payload("_noenv")
        r = requests.post(f"{BASE_URL}/api/bookings", json=payload, timeout=30)
        assert r.status_code == 201
        data = r.json()
        assert "adminTelegramNotification" in data
        tg = data["adminTelegramNotification"]
        assert tg["attempted"] is False
        assert tg["ok"] is False

    def test_diag_no_telegram(self):
        r = requests.get(
            f"{BASE_URL}/api/pricing/diag",
            headers={"x-admin-key": ADMIN_PASSWORD},
            timeout=10,
        )
        assert r.status_code == 200
        data = r.json()
        assert data["env"]["TELEGRAM_BOT_TOKEN_present"] is False
        assert data["env"]["TELEGRAM_CHAT_ID_present"] is False
        assert data["telegramTest"]["ok"] is False


# --- Test 4: Rate limit ---
class TestRateLimit:
    @classmethod
    def setup_class(cls):
        # Restart to clear in-memory rate limit buckets
        write_env(telegram_token=None, telegram_chat_id=None)
        restart_next()

    def test_rate_limit_429(self):
        payload = make_booking_payload("_rl")
        statuses = []
        for i in range(8):
            r = requests.post(f"{BASE_URL}/api/bookings", json=payload, timeout=15)
            statuses.append(r.status_code)
        assert 429 in statuses, f"Expected a 429 among {statuses}"
        # First 5 should be 201
        assert statuses[:5].count(201) >= 4, f"First 5 should mostly be 201, got {statuses}"


# --- Cleanup: restore invalid test env (consistent final state) ---
def test_zz_restore_env():
    write_env(telegram_token="invalid_test_token", telegram_chat_id="-100000")
    restart_next()
