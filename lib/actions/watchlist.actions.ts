'use server';

import { Watchlist } from '@/database/models/watchlist.model';
import {connectToDatabase} from "@/database/db";

export async function getWatchlistSymbolsByEmail(email: string): Promise<string[]> {
    if (!email) return [];
    try {
        const mongoose = await connectToDatabase();
        const db = mongoose.connection.db;
        if (!db) throw new Error('MongoDB connection not found');
        const user = await db.collection('user').findOne<{ _id?: unknown; email?: string }>({ email });
        if (!user) return [];
        const userId = String(user._id || '');
        if (!userId) return [];
        const items = await Watchlist.find({ userId }, { symbol: 1 }).lean();
        return items.map((i) => String(i.symbol));
    } catch (err) {
        console.error('getWatchlistSymbolsByEmail error:', err);
        return [];
    }
}