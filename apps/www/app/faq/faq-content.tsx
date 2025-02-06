"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FAQItem } from "@/types/faqItems";
import { Input } from "@/components/ui/input";
import type { ReactNode } from "react";
import { X } from "lucide-react";
import { faqData } from "./faq-data";
import { useState } from "react";

export function FAQContent() {
  const [searchQuery, setSearchQuery] = useState("");

  const getSearchableText = (content: ReactNode): string => {
    if (typeof content === "string") return content;
    if (Array.isArray(content)) {
      return content.map(getSearchableText).join(" ");
    }
    if (content && typeof content === "object" && "props" in content) {
      const { children } = content.props as { children?: ReactNode };
      return getSearchableText(children);
    }
    return "";
  };

  const filteredFAQs = faqData.filter((item: FAQItem) => {
    const questionMatch = item.question
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const answerMatch = getSearchableText(item.answer)
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return questionMatch || answerMatch;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-primary">
          Frequently Asked Questions
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Find answers to common questions about Oppulence and how it can
          transform your lead management process.
        </p>
      </div>

      <div className="mx-auto max-w-3xl space-y-8">
        <div className="relative">

          <Input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-10"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2"
              onClick={() => setSearchQuery("")}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="text-sm">
            All Questions ({faqData.length})
          </Badge>
          <Badge variant="secondary" className="text-sm">
            Features (
            {
              faqData.filter((item: FAQItem) =>
                item.question.includes("feature"),
              ).length
            }
            )
          </Badge>
          <Badge variant="secondary" className="text-sm">
            Security (
            {
              faqData.filter((item: FAQItem) =>
                item.question.includes("security"),
              ).length
            }
            )
          </Badge>
          <Badge variant="secondary" className="text-sm">
            Platform (
            {
              faqData.filter((item: FAQItem) =>
                item.question.includes("platform"),
              ).length
            }
            )
          </Badge>
        </div>

        {filteredFAQs.length === 0 ? (
          <div className="py-8 text-center">
            <p className="text-lg text-muted-foreground">
              No FAQs found matching your search.
            </p>
          </div>
        ) : (
          <Accordion type="single" collapsible className="w-full">
            {filteredFAQs.map((item: FAQItem, index: number) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </div>
  );
}
