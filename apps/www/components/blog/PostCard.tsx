import { Card, CardContent } from "@/components/ui/card";
import { format, parseISO } from "date-fns";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { normalizeDate } from "@/lib/utils";

interface PostCardProps {
  title: string;
  date: string;
  excerpt: string;
  thumbnail: string;
  url: string;
  slug: string;
  className?: string;
  tags?: string[];
}

const PostCard = ({
  title,
  date,
  excerpt,
  thumbnail,
  slug,
  className,
  tags = [],
}: PostCardProps) => (
  <Card
    className={cn(
      "flex h-full flex-col overflow-hidden border-2 border-gray-200 shadow-md dark:border-gray-800 bg-white dark:bg-gray-900 rounded-xl transition-all duration-300 hover:shadow-document hover:border-black dark:hover:border-white",
      className,
    )}
  >
    <Link href={`/blog/${slug}`} className="flex flex-col h-full group">
      <div className="relative aspect-video w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
        <Image
          fill
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="flex-grow p-6 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <time dateTime={date} className="text-xs font-medium text-gray-500 dark:text-gray-400">
            {format(parseISO(normalizeDate(date)), "LLLL d, yyyy")}
          </time>
          {tags.includes("featured") && (
            <span className="inline-flex items-center rounded-full bg-black/10 dark:bg-white/10 px-2.5 py-0.5 text-xs font-medium text-black dark:text-white">
              Featured
            </span>
          )}
        </div>
        <h2 className="mb-3 text-xl font-semibold group-hover:text-black dark:group-hover:text-white transition-colors">{title}</h2>
        <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-400 mb-4">{excerpt}</p>
        <div className="mt-auto flex flex-wrap gap-2">
          {tags.filter(tag => tag !== "featured").slice(0, 3).map(tag => (
            <span key={tag} className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:text-gray-200">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 text-sm font-medium text-black dark:text-white group-hover:underline">
          Read article →
        </div>
      </CardContent>
    </Link>
  </Card>
);

export default PostCard;
