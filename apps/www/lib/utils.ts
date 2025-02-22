import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type MetadataProps = {
  title?: string;
  description?: string;
  canonical: string;
  ogImage?: string;
};

const defaultMetadata = {
  title: "Oppulence - The Open Source Financial Workspace",
  description:
    "Oppulence - The Open Source Financial Workspace purpose-build for the unique demans of cyclical businesses.",
};

export const normalizeDate = (dateString: string) => {
  const [year, month, day] = dateString.split("-");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const constructMetadata = ({
  title,
  description = defaultMetadata.description,
  canonical = "/",
  ogImage = "/images/og-image.png",
}: MetadataProps) => {
  return {
    metadataBase: new URL("https://oppulence.app/"),
    title: title ? `${title} - Oppullence` : defaultMetadata.title,
    description,
    keywords: [
      "ai",
      "code editor",
      "coding",
      "Oppullence",
      "development",
      "programming",
      "artificial intelligence",
    ],
    alternates: {
      canonical,
    },
    authors: [
      {
        name: "Oppullence Team",
        url: "https://github.com/oppulence",
      },
    ],
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title || "Oppullence",
        },
      ],
    },

    // --- will add this once we get the logo ---
    // icons: {
    //   icon: "/icon.png",
    //   shortcut: "/icon.png",
    //   apple: "/icon.png",
    // },

    // --- need a twitter handle for this ---
    // twitter: {
    //   title,
    //   description,
    //   creator: "@trypearai",
    //   site: "trypear.ai",
    //   card: "summary_large_image",
    // },
  };
};

export const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ??
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    "http://localhost:3000";

  // Include `https://` when not localhost.
  url = url.startsWith("http") ? url : `https://${url}`;
  // Remove trailing slash if present
  url = url.endsWith("/") ? url.slice(0, -1) : url;
  return url;
};

export function capitalizeInital(input: unknown): string | undefined {
  if (typeof input !== "string") {
    return "";
  }
  if (input.length === 0) {
    return "";
  } else if (input.length === 1) {
    return input.toUpperCase();
  }
  return input.charAt(0).toUpperCase() + input.slice(1);
}
