import {Inngest} from 'inngest';

export const inngest = new Inngest({
    id: 'signalist',
    ai: {gemini: process.env.GEMINI_API_KEY!}
});