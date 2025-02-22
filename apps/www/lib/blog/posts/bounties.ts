import { blogPostSchema } from "../types";

export const post = blogPostSchema.parse({
  title: "Open-Source Bounties at PearAI",
  url: "https://pearai.com/blog/open-source-bounties",
  excerpt:
    "PearAI introduces monetary bounties for significant open-source contributions. Solve big issues, get paid, and help build the best AI code editor in the world.",
  date: "2024-09-28T00:00:00Z",
  author: "PearAI Team",
  readingTime: "2 min",
  thumbnail: "https://pearai.com/images/og-image.png",
  tags: [
    "announcement",
    "featured",
    "open-source",
    "bounties",
    "contributions",
  ],
  content: `<div>...existing content...</div>`,
});
