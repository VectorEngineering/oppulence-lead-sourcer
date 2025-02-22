"use client";

import { BlogPost } from "@/lib/blog/types";
import PostCard from "@/components/blog/PostCard";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { compareDesc } from "date-fns";
import { useState } from "react";

// Helper to get unique tags from posts
const getUniqueTags = (posts: BlogPost[]) => {
  const tags = posts.flatMap((post) => post.tags);
  return Array.from(new Set(tags));
};

interface BlogContentProps {
  initialPosts: BlogPost[];
}

export default function BlogContent({ initialPosts }: BlogContentProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = initialPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  // Filter posts based on search and tags
  const filterPosts = (posts: BlogPost[]) => {
    return posts.filter((post) => {
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => post.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  };

  // Get featured and regular posts after filtering
  const filteredPosts = filterPosts(sortedPosts);
  const featuredPosts = filteredPosts.filter((post) =>
    post.tags.includes("featured"),
  );
  const regularPosts = filteredPosts.filter(
    (post) => !post.tags.includes("featured"),
  );

  // Get all unique tags
  const allTags = getUniqueTags(sortedPosts);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Search and Filter Section */}
      <div className="mb-12 space-y-6">
        {/* Search Bar */}
        <div className="mx-auto max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setSelectedTags((prev) =>
                    prev.includes(tag)
                      ? prev.filter((t) => t !== tag)
                      : [...prev, tag],
                  );
                }}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
                  selectedTags.includes(tag)
                    ? "text-white bg-primary-500 dark:bg-primary-600"
                    : "bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary-900/50 dark:hover:text-primary-300",
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Active Filters */}
        {(selectedTags.length > 0 || searchQuery) && (
          <div className="flex items-center justify-center gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {selectedTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-900/50 dark:text-primary-300"
                >
                  {tag}
                  <button
                    onClick={() =>
                      setSelectedTags((prev) => prev.filter((t) => t !== tag))
                    }
                    className="ml-1 text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200"
                  >
                    ×
                  </button>
                </span>
              ))}
              {(selectedTags.length > 0 || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedTags([]);
                    setSearchQuery("");
                  }}
                  className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="mb-24">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Featured Articles
            </h2>
            <div className="ml-8 h-px flex-1 bg-gradient-to-r from-primary-500/20 to-transparent" />
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {featuredPosts.slice(0, 2).map((post) => (
              <PostCard
                key={post.url}
                {...post}
                thumbnail={post.thumbnail || ""}
                className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              />
            ))}
          </div>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Latest Articles
          </h2>
          <div className="ml-8 h-px flex-1 bg-gradient-to-r from-primary-500/20 to-transparent" />
        </div>
        {regularPosts.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <PostCard
                key={post.url}
                {...post}
                thumbnail={post.thumbnail || ""}
                className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              No articles found matching your criteria.
            </p>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="relative mt-32">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-600/5 to-primary-400/5" />
        <div className="bg-white/40 relative rounded-3xl p-12 backdrop-blur-sm dark:bg-gray-900/40">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-3 inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 dark:bg-primary-900/50 dark:text-primary-300">
              Newsletter
            </span>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
              Stay in the Loop
            </h2>
            <p className="mb-8 text-gray-600 dark:text-gray-400">
              Get the latest Oppullence updates, tutorials, and insights delivered
              directly to your inbox. No spam, unsubscribe at any time.
            </p>
            <form className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-gray-300 px-6 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800"
              />
              <button
                type="submit"
                className="text-white group relative overflow-hidden rounded-xl bg-primary-600 px-8 py-3 font-semibold transition-all hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:bg-primary-500 dark:hover:bg-primary-400"
              >
                <span className="relative z-10">Subscribe</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary-400 to-primary-600 transition-transform group-hover:translate-x-0" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
