import { MongoClient } from 'mongodb';

declare global {
    let _mongoClientPromise: Promise<MongoClient> | undefined;  // เปลี่ยนจาก var เป็น let
}

export {};
