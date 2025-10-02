import { betterAuth } from "better-auth";
import {mongodbAdapter} from 'better-auth/adapters/mongodb';
import {connectToDB} from '@/database/mongoose';
import {nextCookies} from 'better-auth/next-js';

let authInstance: ReturnType<typeof betterAuth> | null = null;

export const getAuth = async () => {
    if(authInstance) return authInstance;
    const mongoose = await connectToDB();
    const db = mongoose.connection.db;
    if(!db) throw new Error('Database connection failed');
    const secret = process.env.BETTER_AUTH_SECRET;
    if (!secret) throw new Error('BETTER_AUTH_SECRET environment variable is required');
    const baseURL = process.env.BETTER_AUTH_URL;
    if (!baseURL) throw new Error('BETTER_AUTH_URL environment variable is required');
    authInstance = betterAuth({
        database: mongodbAdapter(db as any),
        secret,
        baseURL,
        emailAndPassword: {
            enabled: true,
            disableSignUp: false,
            requireEmailVerification: false,
            minPasswordLength: 8,
            maxPasswordLength: 128,
            autoSignIn: true,
        },
        plugins: [nextCookies()],
    });
    return authInstance;
};

export const auth = await getAuth();