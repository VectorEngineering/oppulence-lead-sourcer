import { z } from "zod";

const helpArticleSchema = z.object({
    title: z.string().min(1),
    summary: z.string().min(1),
    searchableSummary: z.string().min(1),
    slug: z.string().min(1),
});

const newsArticleSchema = z.object({
    title: z.string().min(1),
    summary: z.string().min(1),
    href: z.string().url(),
    image: z.string().min(1),
    publishedAt: z.string().datetime(),
});

const popularHelpArticleSchema = z.object({
    slug: z.string().min(1),
    title: z.string().min(1),
    summary: z.string().min(1),
    searchableSummary: z.string().min(1),
});

const responseSchema = z.object({
    allHelpArticles: z.array(helpArticleSchema),
    latestNewsArticles: z.array(newsArticleSchema),
    popularHelpArticles: z.array(popularHelpArticleSchema),
});

// Type inference
type HelpArticle = z.infer<typeof helpArticleSchema>;
type NewsArticle = z.infer<typeof newsArticleSchema>;
type PopularHelpArticle = z.infer<typeof popularHelpArticleSchema>;
type ResponseSchema = z.infer<typeof responseSchema>;

// Validation function using Zod
const validateSchema = (data: unknown): ResponseSchema => {
    return responseSchema.parse(data);
};

export {
    helpArticleSchema,
    newsArticleSchema,
    popularHelpArticleSchema,
    responseSchema,
    validateSchema,
    type HelpArticle,
    type NewsArticle,
    type PopularHelpArticle,
    type ResponseSchema,
};