// @ts-nocheck
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import React from "react";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import updates from "../changelog";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const update = updates.find((update) => {
    const updateSlug = `${update.date.replace(/\s/g, "-").toLowerCase()}-${update.title
      .toLowerCase()
      .replace(/\s+/g, "-")}`;
    return updateSlug === slug;
  });

  if (!update) {
    return {
      title: "Not Found | Vector Lead Management",
      description: "The requested changelog entry could not be found.",
    };
  }

  return {
    title: `${update.title} | Vector Lead Management Changelog`,
    description: update.description?.toString() || "",
  };
}

export default async function ChangelogEntry({ params }: Props) {
  const { slug } = await params;
  const update = updates.find((update) => {
    const updateSlug = `${update.date.replace(/\s/g, "-").toLowerCase()}-${update.title
      .toLowerCase()
      .replace(/\s+/g, "-")}`;
    return updateSlug === slug;
  });

  if (!update) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <Link
        href="/changelog"
        className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
      >
        ← Back to Changelog
      </Link>

      <article className="space-y-8">
        {update.screenshot ? (
          <div className="overflow-hidden rounded-2xl border bg-gray-50 shadow-lg">
            <Image
              src={update.screenshot.src}
              alt={update.screenshot.alt}
              width={update.screenshot.width}
              height={update.screenshot.height}
              className="w-full"
            />
          </div>
        ) : (
          <div className="bg-white relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border shadow-lg">
            <div className="absolute inset-0">
              <svg width="100%" height="100%" className="text-gray-100">
                <pattern
                  id="swirl-pattern"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 30c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z"
                    fill="currentColor"
                  />
                </pattern>
                <rect width="100%" height="100%" fill="url(#swirl-pattern)" />
              </svg>
            </div>
            <div className="text-sm font-medium text-gray-400">
              No preview available
            </div>
          </div>
        )}

        <div className="space-y-4">
          <time className="text-gray-500">
            {format(new Date(update.date), "MMMM d, yyyy")}
          </time>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            {update.title}
          </h1>
          <div className="prose prose-gray max-w-none">
            {update.description}
          </div>
        </div>

        <div className="flex items-center gap-6 border-t pt-6">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <Image
                src="/team/yoan.jpg"
                alt="Yoan Yomba"
                width={40}
                height={40}
                className="ring-white relative z-10 inline-block h-10 w-10 rounded-full ring-2"
              />
            </div>
            <div className="text-sm">
              <p className="font-medium text-gray-900">Yoan Yomba</p>
              <p className="text-gray-500">Founder & CEO</p>
            </div>
          </div>

          <div className="ml-auto flex gap-4">
            <Link
              href="https://twitter.com/share"
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Share on Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>

            <Link
              href="https://www.linkedin.com/sharing/share-offsite/"
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Share on LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </Link>

            <Link
              href="https://www.facebook.com/sharer/sharer.php"
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Share on Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
