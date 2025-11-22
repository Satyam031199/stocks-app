import { inngest } from "@/lib/inngest/client";
import { NEWS_SUMMARY_EMAIL_PROMPT, PERSONALIZED_WELCOME_EMAIL_PROMPT } from "@/lib/inngest/prompts";
import { sendNewsSummaryEmail, sendWelcomeEmail } from "@/lib/nodemailer";
import { getAllUsersForNewsEmail } from "@/lib/actions/user.actions";
import { getWatchlistSymbolsByEmail } from "@/lib/actions/watchlist.actions";
import { getNews } from "@/lib/actions/finnhub.actions";
import { getFormattedTodayDate } from "../utils";

export const sendSignUpEmail = inngest.createFunction(
    { id: 'sign-up-email' },
    { event: 'app/user.created' },
    async ({ event, step }) => {
        const userProfile = `
            - Country: ${event.data.country}
            - Investment goals: ${event.data.investmentGoals}
            - Risk tolerance: ${event.data.riskTolerance}
            - Preferred industry: ${event.data.preferredIndustry}
        `
        const prompt = PERSONALIZED_WELCOME_EMAIL_PROMPT.replace('{{userProfile}}', userProfile);
        const response = await step.ai.infer('generate-welcome-intro', {
            model: step.ai.models.gemini({ model: 'gemini-2.5-flash-lite' }),
            body: {
                contents: [
                    {
                        role: 'user',
                        parts: [
                            { text: prompt }
                        ]
                    }]
            }
        });
        await step.run('send-welcome-email', async () => {
            const part = response.candidates?.[0]?.content?.parts?.[0];
            const introText = (part && 'text' in part ? part.text : null) || 'Thanks for joining Signalist. You now have the tools to track markets and make smarter moves.'
            const { data: { email, name } } = event;
            return await sendWelcomeEmail({ email, name, intro: introText });
        });
        return {
            success: true,
            message: 'Welcome email sent successfully'
        }
    }
);

export const sendDailyNewsSummary = inngest.createFunction(
    { id: 'daily-news-summary' },
    [{ event: 'app/send.daily.news' }, { cron: '0 11 * * *' }],
    async ({ event, step }) => {
        // Step 1: Get all users for news delivery
        const users = await step.run('get-all-users', getAllUsersForNewsEmail);
        if (!users || users.length === 0) return { success: false, message: 'No users found for news delivery.' }
        // Step 2: Fetch personalized news summary for each user
        const results = await step.run('fetch-personalized-user-news', async () => {
            const perUser: Array<{ user: User, articles: MarketNewsArticle[] }> = [];
            for (const user of users) {
                try {
                    const symbols = await getWatchlistSymbolsByEmail(user.email);
                    let articles = await getNews(symbols);
                    articles = (articles || []).slice(0, 6);
                    if (!articles || articles.length === 0) {
                        articles = await getNews();
                        articles = (articles || []).slice(0, 6);
                    }
                    perUser.push({ user, articles });
                } catch (error: any) {
                    console.error("❌ Error fetching personalized news for user: ", error.message);
                    perUser.push({ user, articles: [] });
                }
            }
            return perUser;
        });
        // Step 3: Summarize news content via AI
        const userNewsSummaries: Array<{ user: User, newsContent: string | null }> = [];
        for (const { user, articles } of results) {
            try {
                const prompt = NEWS_SUMMARY_EMAIL_PROMPT.replace('{{newsData}}', JSON.stringify(articles, null, 2));
                const response = await step.ai.infer(`generate-news-summary-${user.email}`, {
                    model: step.ai.models.gemini({ model: 'gemini-2.5-flash-lite' }),
                    body: {
                        contents: [
                            {
                                role: 'user',
                                parts: [
                                    { text: prompt }
                                ]
                            }
                        ]
                    }
                });
                const part = response.candidates?.[0]?.content?.parts?.[0];
                const summaryText = (part && 'text' in part ? part.text : null) || 'No news summary available.';
                userNewsSummaries.push({ user, newsContent: summaryText });
            } catch (error: any) {
                console.error(`❌ Error summarizing news for user ${user.email}: `, error.message);
                userNewsSummaries.push({ user, newsContent: null });
            }
        };
        // Step 4: Send news summary emails
        await step.run('send-news-emails', async () => {
            await Promise.all(userNewsSummaries.map(async ({ user, newsContent }) => {
                if (!newsContent) return;
                try {
                    await sendNewsSummaryEmail({ email: user.email, date: getFormattedTodayDate(), newsContent });
                } catch (error: any) {
                    console.error(`❌ Error sending news summary email to user ${user.email}: `, error.message);
                }
            }))
        });
        return {
            success: true,
            message: 'News summary emails sent successfully'
        }
    }
)