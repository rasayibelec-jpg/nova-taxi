"""Backend tests for Nova Taxi driver-confirm flow."""
import os
import urllib.parse
import pytest
import requests

BASE_URL = os.environ.get("NEXT_TEST_BASE_URL", "http://localhost:3001").rstrip("/")

BOOKING_PAYLOAD = {
    "pickupAddress": "Bahnhof Luzern",
    "destinationAddress": "Flughafen Zürich",
    "whenType": "now",
    "persons": 2,
    "customerName": "TEST_Driver Confirm",
    "customerPhone": "0761234567",
    "paymentMethod": "cash",
    "priceCHF": 123.45,
    "distanceKm": 55.5,
    "lang": "de",
}


@pytest.fixture(scope="module")
def created_booking():
    r = requests.post(f"{BASE_URL}/api/bookings", json=BOOKING_PAYLOAD, timeout=15)
    assert r.status_code == 201, r.text
    data = r.json()
    return data


# --- POST /api/bookings ---
class TestBookingCreate:
    def test_returns_201_with_required_fields(self, created_booking):
        d = created_booking
        assert "id" in d and isinstance(d["id"], str)
        assert "shortId" in d
        assert d["shortId"] == d["id"][:8].upper()
        assert len(d["shortId"]) == 8
        assert "confirmToken" in d and len(d["confirmToken"]) > 0
        assert d["status"] == "requested"


# --- Legacy GET /api/bookings/{id}/confirm ---
class TestLegacyConfirm:
    def test_no_redirect_json(self, created_booking):
        # Create a fresh booking for this test to keep isolation
        r = requests.post(f"{BASE_URL}/api/bookings", json=BOOKING_PAYLOAD, timeout=15)
        b = r.json()
        r2 = requests.get(
            f"{BASE_URL}/api/bookings/{b['id']}/confirm",
            params={"token": b["confirmToken"], "noRedirect": "1"},
            timeout=15,
        )
        assert r2.status_code == 200
        data = r2.json()
        assert "customerWhatsappUrl" in data
        assert data["customerWhatsappUrl"].startswith("https://wa.me/")
        assert data["booking"]["shortId"] == b["shortId"]
        assert data["booking"]["status"] == "confirmed"

    def test_redirect_302(self):
        r = requests.post(f"{BASE_URL}/api/bookings", json=BOOKING_PAYLOAD, timeout=15)
        b = r.json()
        r2 = requests.get(
            f"{BASE_URL}/api/bookings/{b['id']}/confirm",
            params={"token": b["confirmToken"]},
            allow_redirects=False,
            timeout=15,
        )
        assert r2.status_code in (302, 307, 308)
        loc = r2.headers.get("location", "")
        assert loc.startswith("https://wa.me/")

    def test_invalid_token_401(self, created_booking):
        r = requests.get(
            f"{BASE_URL}/api/bookings/{created_booking['id']}/confirm",
            params={"token": "invalid_bad_token", "noRedirect": "1"},
            timeout=15,
        )
        assert r.status_code == 401


# --- GET /api/bookings/{id} status ---
class TestBookingStatus:
    def test_status_confirmed_after_confirm(self):
        r = requests.post(f"{BASE_URL}/api/bookings", json=BOOKING_PAYLOAD, timeout=15)
        b = r.json()
        # confirm via noRedirect
        requests.get(
            f"{BASE_URL}/api/bookings/{b['id']}/confirm",
            params={"token": b["confirmToken"], "noRedirect": "1"},
            timeout=15,
        )
        r2 = requests.get(f"{BASE_URL}/api/bookings/{b['id']}", timeout=15)
        assert r2.status_code == 200
        data = r2.json()
        assert data.get("status") == "confirmed"

    def test_status_requested_initially(self):
        r = requests.post(f"{BASE_URL}/api/bookings", json=BOOKING_PAYLOAD, timeout=15)
        b = r.json()
        r2 = requests.get(f"{BASE_URL}/api/bookings/{b['id']}", timeout=15)
        assert r2.status_code == 200
        assert r2.json().get("status") == "requested"


# --- Driver landing page HTML ---
class TestDriverLandingPage:
    def test_valid_token_page_html(self):
        r = requests.post(f"{BASE_URL}/api/bookings", json=BOOKING_PAYLOAD, timeout=15)
        b = r.json()
        r2 = requests.get(
            f"{BASE_URL}/bestellung/{b['id']}/bestaetigen",
            params={"token": b["confirmToken"]},
            timeout=15,
        )
        assert r2.status_code == 200
        # Client-side rendered; verify testid marker exists in HTML at least
        assert "driver-confirm-page" in r2.text
