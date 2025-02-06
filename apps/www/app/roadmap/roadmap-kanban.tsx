"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Badge } from "@/components/ui/badge";
import { RoadmapItem } from "./types";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

// Status to emoji mapping
const statusEmoji = {
  planned: "🎯",
  "in-progress": "🚀",
  completed: "✅",
};

// Product to emoji mapping
const productEmoji = {
  "Lead Sourcing": "🎯",
  "Contract Management": "📝",
  "Financial Management": "💰",
  CRM: "🤝",
};

interface RoadmapKanbanProps {
  items: RoadmapItem[];
}

function RoadmapDetailSheet({ item }: { item: RoadmapItem }) {
  return (
    <SheetContent className="m-[1%] w-[90vw] overflow-y-auto rounded-2xl p-6 pt-8 md:min-w-[30%]">
      <SheetHeader className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="text-3xl" role="img" aria-label={item.status}>
            {statusEmoji[item.status as keyof typeof statusEmoji]}
          </span>
          <div>
            <SheetTitle className="text-2xl font-bold">{item.title}</SheetTitle>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-xl" role="img" aria-label={item.product}>
                {productEmoji[item.product as keyof typeof productEmoji]}
              </span>
              <span className="text-sm text-gray-500">{item.product}</span>
            </div>
          </div>
        </div>
        <Badge
          variant={
            item.status === "completed"
              ? "default"
              : item.status === "in-progress"
                ? "secondary"
                : "outline"
          }
          className="w-fit capitalize"
        >
          {item.status}
        </Badge>
      </SheetHeader>

      <div className="mt-8 space-y-6">
        <div>
          <h3 className="mb-3 text-base font-semibold">Context:</h3>
          <p className="text-sm leading-relaxed text-gray-600">
            {item.description}
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-semibold">Feature Description:</h3>
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-gray-600">
              The {item.product} platform will offer {item.title.toLowerCase()}{" "}
              capabilities that enable teams to:
            </p>
            <ul className="space-y-3">
              {item.features?.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1 text-blue-500">•</span>
                  <span className="text-sm leading-relaxed text-gray-600">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-base font-semibold">Timeline:</h3>
          <div className="text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="font-medium">Target Completion:</span>
              {format(new Date(item.date), "MMMM d, yyyy")}
            </div>
            {item.status === "completed" && (
              <div className="mt-2 flex items-center gap-2">
                <span className="font-medium">Status:</span>
                <span className="flex items-center gap-1 text-green-600">
                  <span className="text-lg">✓</span> Completed
                </span>
              </div>
            )}
            {item.status === "in-progress" && (
              <div className="mt-2 flex items-center gap-2">
                <span className="font-medium">Status:</span>
                <span className="flex items-center gap-1 text-blue-600">
                  <span className="text-lg">🚀</span> In Development
                </span>
              </div>
            )}
            {item.status === "planned" && (
              <div className="mt-2 flex items-center gap-2">
                <span className="font-medium">Status:</span>
                <span className="flex items-center gap-1 text-orange-600">
                  <span className="text-lg">📅</span> Planned
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </SheetContent>
  );
}

function RoadmapCard({ item }: { item: RoadmapItem }) {
  return (
    <Sheet>
      <SheetTrigger className="w-full">
        <Card className="bg-white space-y-4 p-6 text-left shadow-md transition-shadow hover:shadow-lg">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl" role="img" aria-label={item.status}>
                  {statusEmoji[item.status as keyof typeof statusEmoji]}
                </span>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl" role="img" aria-label={item.product}>
                  {productEmoji[item.product as keyof typeof productEmoji]}
                </span>
                <span className="text-sm text-gray-500">{item.product}</span>
              </div>
            </div>
            <Badge
              variant={
                item.status === "completed"
                  ? "default"
                  : item.status === "in-progress"
                    ? "secondary"
                    : "outline"
              }
              className="capitalize"
            >
              {item.status}
            </Badge>
          </div>

          <p className="line-clamp-2 text-sm text-gray-600">
            {item.description}
          </p>

          <div className="space-y-3">
            <div className="text-sm text-gray-500">
              <span className="font-medium">Target Date:</span>{" "}
              {format(new Date(item.date), "MMMM d, yyyy")}
            </div>

            {item.features && item.features.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Key Features:</h4>
                <ul className="list-inside list-disc space-y-1">
                  {item.features.slice(0, 2).map((feature, index) => (
                    <li key={index} className="truncate text-sm text-gray-600">
                      {feature}
                    </li>
                  ))}
                  {item.features.length > 2 && (
                    <li className="text-sm text-blue-600">
                      +{item.features.length - 2} more features...
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </Card>
      </SheetTrigger>
      <RoadmapDetailSheet item={item} />
    </Sheet>
  );
}

export function RoadmapKanban({ items }: RoadmapKanbanProps) {
  const columns = [
    { title: "Planned", status: "planned" },
    { title: "In Progress", status: "in-progress" },
    { title: "Completed", status: "completed" },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {columns.map((column) => (
        <div key={column.status} className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">{column.title}</h2>
            <Badge variant="secondary" className="text-sm">
              {items.filter((item) => item.status === column.status).length}
            </Badge>
          </div>
          <div className="space-y-4">
            {items
              .filter((item, index) => item.status === column.status)
              .map((item, index) => (
                <RoadmapCard key={`${item.title}-${index}`} item={item} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
