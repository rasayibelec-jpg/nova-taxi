import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URL;
const dbName = process.env.DB_NAME;

if (!uri) throw new Error("MONGO_URL missing");
if (!dbName) throw new Error("DB_NAME missing");

let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = new MongoClient(uri).connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = new MongoClient(uri).connect();
}

export async function getDb() {
  const client = await clientPromise;
  return client.db(dbName);
}

export async function getBookingsCollection() {
  const db = await getDb();
  return db.collection("bookings");
}
