import { MongoClient } from 'mongodb';

declare global {
    // ประกาศประเภทสำหรับ global._mongoClientPromise
    var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// ทำให้ TypeScript รู้ว่านี่เป็นโมดูล
export {};
