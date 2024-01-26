import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDataase = async () => {
    if (cached.conn) return cached.connect;

    if (!MONGODB_URI) throw new Error('MongoDB_URI is missing');

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'Event-easy',
        bufferCommands: false
    })

    cached.conn = await cached.conn;
    await cached.conn;
}