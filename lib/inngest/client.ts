import {Inngest} from 'inngest';

const geminiApiKey = process.env.GEMINI_API_KEY;
if (!geminiApiKey) throw new Error("GEMINI_API_KEY is required to initialize Inngest AI integration.");

export const inngest = new Inngest({
    id: 'signalist',
    ai: { gemini: geminiApiKey },
});