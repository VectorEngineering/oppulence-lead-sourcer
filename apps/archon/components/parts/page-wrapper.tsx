import type React from "react";

export function PageWrapper({
  children,
  developmentMode = false,
}: {
  children: React.ReactNode;
  developmentMode?: boolean;
}) {
  if (developmentMode) {
    return (
      <div className="no-scrollbar flex h-full w-full items-center justify-center overflow-y-scroll p-6 sm:max-w-[calc(100vw-272px)]">
        <div className="absolute inset-0 backdrop-blur-md" />
        <div className="relative max-w-2xl text-center">
          <div className="text-primary mb-4 flex items-center justify-center gap-2 dark:text-white">
            <div className="h-3 w-3 animate-ping rounded-full bg-black dark:bg-white" />
            <span className="font-semibold uppercase tracking-wider">
              Development Mode
            </span>
            <div className="h-3 w-3 animate-ping rounded-full bg-black dark:bg-white" />
          </div>
          <h1 className="text-primary mb-6 text-5xl font-bold md:text-7xl dark:text-white">
            Coming Soon
          </h1>
          <p className="text-primary text-xl md:text-2xl dark:text-white">
            🚧 Under Construction 🚧
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="no-scrollbar mb-[5%] h-full w-full overflow-y-scroll p-6 sm:max-w-[calc(100vw-272px)]">
      {children}
    </div>
  );
}
