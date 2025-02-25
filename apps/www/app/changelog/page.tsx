import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { format } from "date-fns";
import updates from "./changelog";

export const metadata: Metadata = {
  title: "Changelog | Vector Lead Management",
  description:
    "All the latest updates, improvements, and fixes to Vector Lead Management",
};

export default function ChangelogPage() {
  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Changelog</h1>
        <p className="text-lg text-gray-600">
          All the latest updates, improvements, and fixes to Vector Lead
          Management
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://twitter.com/vectorleadmgmt"
            target="_blank"
            className="text-gray-600 hover:text-gray-900"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>
          <Link href="/feed.xml" className="text-gray-600 hover:text-gray-900">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.5 21.5c-5.247 0-9.5-4.253-9.5-9.5s4.253-9.5 9.5-9.5 9.5 4.253 9.5 9.5-4.253 9.5-9.5 9.5zm0-18c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5z" />
              <path d="M7.5 15.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2c-.275 0-.5.225-.5.5s.225.5.5.5.5-.225.5-.5-.225-.5-.5-.5z" />
              <path d="M7.5 11.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5z" />
              <path d="M11.5 15.5h-2v-1h2v1zm4 0h-2v-1h2v1z" />
            </svg>
          </Link>
          <span className="text-sm text-gray-500">Subscribe to updates</span>
        </div>
      </div>

      <div className="relative">
        {/* Timeline */}
        <div className="absolute right-0 top-0 h-full w-px bg-gray-200">
          <div className="sticky top-8 flex -translate-x-1/2 flex-col items-center">
            {updates.map((update, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`h-16 w-px ${index === 0 ? "bg-blue-500" : "bg-gray-200"}`}
                />
                <div className="group relative">
                  <div
                    className={`h-4 w-4 rounded-full border-2 ${index === 0
                      ? "bg-white border-blue-500"
                      : "border-gray-200 bg-gray-50"
                      }`}
                  />
                  <div className="absolute left-full ml-4 hidden whitespace-nowrap group-hover:block">
                    <div className="flex items-center gap-2">
                      <time className="text-sm text-gray-500">
                        {format(new Date(update.date), "MMM d, yyyy")}
                      </time>
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
                        {update.version}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={`h-full w-px ${index === updates.length - 1
                    ? "bg-transparent"
                    : "bg-gray-200"
                    }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Changelog entries */}
        <div className="divide-y divide-gray-100 pr-24">
          {updates.map((update, index) => (
            <div key={index} className="py-8">
              <Link
                href={`/changelog/${update.date.replace(/\s/g, "-").toLowerCase()}-${update.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="block transition-colors hover:bg-gray-50"
              >
                <article className="space-y-4">
                  {update.screenshot ? (
                    <div className="overflow-hidden rounded-lg border bg-gray-50">
                      <Image
                        src={update.screenshot.src}
                        alt={update.screenshot.alt}
                        width={update.screenshot.width}
                        height={update.screenshot.height}
                        className="w-full"
                      />
                    </div>
                  ) : (
                    <div className="bg-white relative flex h-[200px] w-full items-center justify-center overflow-hidden rounded-lg border shadow-lg">
                      <div className="absolute inset-0">
                        <svg
                          width="100%"
                          height="100%"
                          className="text-gray-100"
                        >
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
                          <rect
                            width="100%"
                            height="100%"
                            fill="url(#swirl-pattern)"
                          />
                        </svg>
                      </div>
                      <div className="text-sm font-medium text-gray-400">
                        No preview available
                      </div>
                    </div>
                  )}

                  <div>
                    <div className="flex items-center gap-4">
                      <time className="text-sm text-gray-500">
                        {format(new Date(update.date), "MMMM d, yyyy")}
                      </time>
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
                        {update.version}
                      </span>
                    </div>
                    <h2 className="mt-2 text-xl font-semibold text-gray-900">
                      {update.title}
                    </h2>
                    <div className="mt-2 line-clamp-2 text-gray-600">
                      {update.description}
                    </div>
                  </div>
                </article>
              </Link>
              {update.documentationUrl && (
                <div className="mt-4">
                  <Link
                    href={update.documentationUrl}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    View Documentation →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
