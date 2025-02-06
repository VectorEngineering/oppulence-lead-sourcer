"use client";

import { RoadmapItem, RoadmapStatus } from "./types";

import React from "react";
import { cn } from "@/lib/utils";

interface RoadmapTimelineProps {
  items: RoadmapItem[];
}

const statusColors = {
  planned: "bg-yellow-500",
  "in-progress": "bg-blue-500",
  completed: "bg-green-500",
  cancelled: "bg-red-500",
} as const;

const statusLabels = {
  planned: "Planned",
  "in-progress": "In Progress",
  completed: "Completed",
  cancelled: "Cancelled",
} as const;

export function RoadmapTimeline({ items }: RoadmapTimelineProps) {
  const sortedItems = [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="relative">
      <div className="absolute left-4 top-0 h-full w-0.5 bg-border" />
      <div className="space-y-8">
        {sortedItems.map((item, index) => (
          <div key={index} className="relative pl-12">
            <div
              className={cn(
                "absolute left-2 top-2 h-4 w-4 rounded-full border-2 border-background",
                statusColors[item.status],
              )}
            />
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <div className="flex items-center space-x-4">
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                      statusColors[item.status],
                      "bg-opacity-10 text-foreground",
                    )}
                  >
                    {statusLabels[item.status]}
                  </span>
                  <time className="text-sm text-muted-foreground">
                    {new Date(item.date).toLocaleDateString()}
                  </time>
                </div>
              </div>
              <p className="text-muted-foreground">{item.description}</p>
              {item.features && (
                <ul className="list-disc pl-6 text-sm text-muted-foreground">
                  {item.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
