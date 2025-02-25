"use client";

import { BookOpen, ChevronDown, ChevronUp } from "lucide-react";

import TableOfContents from "./TableOfContents";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface MobileTableOfContentsProps {
    content: string;
    className?: string;
}

export default function MobileTableOfContents({
    content,
    className,
}: MobileTableOfContentsProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={cn("relative w-full", className)}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between rounded-xl border-2 border-gray-200 bg-white p-4 shadow-document transition-all hover:border-black hover:bg-black/5 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-white dark:hover:bg-white/5"
            >
                <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-black dark:text-white" />
                    <span className="text-lg font-medium text-black dark:text-white">
                        Table of Contents
                    </span>
                </div>
                {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                )}
            </button>

            {isOpen && (
                <div className="mt-3 overflow-hidden rounded-xl border-2 border-gray-200 bg-white shadow-document dark:border-gray-800 dark:bg-gray-900">
                    <div className="p-4">
                        <div className="mb-4 h-1 w-20 bg-gradient-to-r from-black to-gray-500 dark:from-white dark:to-gray-500"></div>
                        <TableOfContents content={content} className="max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700" />
                    </div>
                    <div className="border-t border-gray-200 bg-gray-50 p-3 text-xs text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
                        <p>Click on a heading to navigate to that section</p>
                    </div>
                </div>
            )}
        </div>
    );
} 