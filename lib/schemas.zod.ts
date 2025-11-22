import {z} from "zod";

export const signUpSchema = z.object({
    fullName: z
        .string()
        .min(2, "Full Name must be at least 2 characters")
        .max(50, "Full Name must be less than 50 characters"),
    email: z
        .string()
        .email("Please enter a valid email address")
        .min(1, "Email is required"),
    password: z
        .string()
        .min(8, "At least 8 characters"),
    country: z
        .string()
        .min(1, "Please select a country"),
    investmentGoals: z.enum(['Growth', 'Income', 'Balanced', 'Conservative']),
    riskTolerance: z.enum(['Low', 'Medium', 'High']),
    preferredIndustry: z.enum(['Technology', 'Healthcare', 'Finance', 'Energy', 'Consumer Goods']),
});

export const signInSchema = z.object({
    email: z
        .string()
        .email("Please enter a valid email address")
        .min(1, "Email is required"),
    password: z
        .string()
        .min(1, "Password is required")
});