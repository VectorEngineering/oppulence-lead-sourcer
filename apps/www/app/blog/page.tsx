import BlogContent from "../../components/blog/BlogContent";
import { BlogPost } from "@/lib/blog/types";
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
    <div className="to-white min-h-screen bg-gradient-to-b from-gray-50 dark:from-gray-950 dark:to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-primary-400/10" />
        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="relative mb-6 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-6xl font-bold text-transparent sm:text-7xl">
              Oppulence Blog
              <span className="absolute -right-4 top-0 h-3 w-3 animate-ping rounded-full bg-primary-400" />
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Discover the latest in AI-powered development, tutorials, and
              insights from the Oppulence team
            </p>
          </div>
        </div>
      </div>

      <BlogContent initialPosts={posts as BlogPost[]} />
    </div>
  );
}
