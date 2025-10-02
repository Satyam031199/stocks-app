import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

declare global {
    var mongooseCache: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
    }
}

let cached = global.mongooseCache;
if(!cached) cached=global.mongooseCache = { conn: null, promise: null };

export const connectToDB = async () => {
    if(!MONGO_URI) throw new Error('MONGO_URI is not defined');
    if(cached.conn) return cached.conn;
    if(!cached.promise) {
        const opts = {
            bufferCommands: false,
        };
        cached.promise = mongoose.connect(MONGO_URI, opts);
    }
    try {
        cached.conn = await cached.promise;
    } catch (error) {
        cached.promise = null;
        throw error;
    }
    console.log(`Connected to database in ${process.env.NODE_ENV} mode`);
    return cached.conn;
}