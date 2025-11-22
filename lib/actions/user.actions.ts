'use server'

import { connectToDatabase } from "@/database/db";

export const getAllUsersForNewsEmail = async () => {
    try {
        const mongoose = await connectToDatabase();
        const db = mongoose.connection.db;
        if (!db) throw new Error('Database connection failed');
        const users = await db.collection('user').find(
            { email: { $exists: true, $ne: null } },
            { projection: { _id: 1, email: 1, name: 1 } }
        ).toArray();
        return users.filter(user => user.email && user.name).map(user => ({
            id: user._id.toString() || "",
            email: user.email,
            name: user.name,
        }));
    } catch (e: any) {
        console.error("❌ Error fetching users: ", e.message);
        return [];
    }
}