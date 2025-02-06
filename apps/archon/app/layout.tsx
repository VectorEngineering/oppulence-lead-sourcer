import "./globals.css";

import { BusinessConfig } from "@dub/platform-config";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { PostHogProvider } from "@/components/providers/post-hog/post-hog-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { WorkspaceProvider } from "@/components/providers/workspace-provider";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: BusinessConfig.name,
  description: BusinessConfig.description,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isProd = process.env.NODE_ENV === "production";

  return (
    <html lang="en">
      <head>
        {!isProd && (
          <script
            src="https://unpkg.com/react-scan/dist/auto.global.js"
            async
          />
        )}
      </head>
      <ClerkProvider>
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <PostHogProvider>
              <WorkspaceProvider>
                <div className="bg-background flex h-screen overflow-hidden">
                  {children}
                </div>
                <Toaster />
              </WorkspaceProvider>
            </PostHogProvider>
          </ThemeProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
