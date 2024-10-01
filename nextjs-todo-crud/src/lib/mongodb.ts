const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI || '';  // นำเข้า URI จาก .env
const client = new MongoClient(uri);

let clientPromise: Promise<any> = Promise.resolve();  // กำหนดค่าเริ่มต้นให้เป็น Promise.resolve()

if (!uri) {
    throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === 'development') {
    // ตรวจสอบว่ามีการกำหนด _mongoClientPromise ใน global หรือไม่
    if (!global._mongoClientPromise) {
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise || Promise.resolve();  // กำหนดให้ clientPromise เป็น Promise เสมอ
} else {
    clientPromise = client.connect();
}

module.exports = clientPromise;
