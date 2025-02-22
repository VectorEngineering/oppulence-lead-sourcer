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
}

const PostCard = ({
  title,
  date,
  excerpt,
  thumbnail,
  slug,
  className,
}: PostCardProps) => (
  <Card
    className={cn(
      "flex h-full flex-col overflow-hidden hover:bg-secondary-300/10",
      className,
    )}
  >
    <Link href={`/blog/${slug}`}>
      <div className="relative aspect-video w-full">
        <Image
          fill
          src={thumbnail}
          alt={title}
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <CardContent className="flex-grow p-4">
        <time dateTime={date} className="mb-2 block text-xs text-gray-500">
          {format(parseISO(normalizeDate(date)), "LLLL d, yyyy")}
        </time>
        <h2 className="mb-2 text-xl font-semibold">{title}</h2>
        <p className="line-clamp-3 text-sm text-gray-500">{excerpt}</p>
      </CardContent>
    </Link>
  </Card>
);

export default PostCard;
