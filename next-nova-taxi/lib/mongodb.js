import { MongoClient } from "mongodb";

let clientPromise;

function connect() {
  const uri = process.env.MONGO_URL;
  const dbName = process.env.DB_NAME;
  if (!uri) throw new Error("MONGO_URL environment variable is not set");
  if (!dbName) throw new Error("DB_NAME environment variable is not set");

  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = new MongoClient(uri).connect();
    }
    return global._mongoClientPromise;
  }
  return new MongoClient(uri).connect();
}

export async function getDb() {
  if (!clientPromise) clientPromise = connect();
  const client = await clientPromise;
  const dbName = process.env.DB_NAME;
  return client.db(dbName);
}

export async function getBookingsCollection() {
  const db = await getDb();
  return db.collection("bookings");
}
