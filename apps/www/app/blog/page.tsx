import { BlogPost } from "@/lib/blog/types";
import EnhancedBlogContent from "../../components/blog/enhanced-blog-content";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/utils";
import { posts } from "@/lib/blog/posts";

export const metadata: Metadata = constructMetadata({
  title: "Blog",
  description:
    "Discover insightful articles and the latest updates on Oppulence. Stay informed, inspired, and ahead with expert tips, trends, and guides.",
  canonical: "/blog",
});

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Hero Section with enhanced animations */}
      <div className="relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-document-pattern opacity-5 dark:opacity-10" />

        {/* Gradient overlay with improved colors */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-transparent to-primary-400/10" />

        {/* Enhanced floating elements */}
        <div className="absolute top-20 left-10 h-24 w-24 rounded-full bg-primary/5 dark:bg-primary/10 blur-xl animate-pulse" />
        <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-primary/5 dark:bg-primary/10 blur-xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-40 right-20 h-16 w-16 rounded-full bg-primary/5 dark:bg-primary/10 blur-xl animate-pulse" style={{ animationDelay: "2s" }} />

        <div className="relative mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Our Knowledge Base
            </div>
            <h1 className="relative mb-6 bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl md:text-7xl">
              Oppulence Blog
              <span className="absolute -right-4 top-0 h-3 w-3 animate-ping rounded-full bg-primary" />
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Discover the latest in AI-powered development, tutorials, and
              insights from the Oppulence team
            </p>

            {/* Enhanced decorative line with animation */}
            <div className="mx-auto mt-8 h-px max-w-md bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse" />
          </div>
        </div>
      </div>

      {/* Content with subtle background */}
      <div className="relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] dark:bg-grid-pattern-dark dark:opacity-[0.03]" />

        {/* Blog content with enhanced component */}
        <div className="relative mx-auto max-w-7xl pb-24">
          <EnhancedBlogContent initialPosts={posts as BlogPost[]} />
        </div>
      </div>
    </div>
  );
}
