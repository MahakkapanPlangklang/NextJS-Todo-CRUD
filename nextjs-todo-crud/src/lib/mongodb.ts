import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI || ''; // นำเข้า URI จากไฟล์ .env
const client = new MongoClient(uri);

let clientPromise: Promise<MongoClient>;

if (!uri) {
    throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === 'development') {
    // ใช้ global._mongoClientPromise อย่างปลอดภัย
    if (!global._mongoClientPromise) {
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    clientPromise = client.connect();
}

export default clientPromise;
