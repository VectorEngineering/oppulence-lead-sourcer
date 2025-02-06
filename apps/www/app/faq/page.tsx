import { FAQContent } from "./faq-content";
import type { Metadata } from "next/types";
import { constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "FAQ",
  description: "Frequently Asked Questions",
  canonical: "/faq",
});

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-[10%]">
      <FAQContent />
    </div>
  );
}
