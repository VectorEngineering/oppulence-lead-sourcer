import Features from "@/components/features";
import Hero from "@/components/hero";
import { Metadata } from "next/types";
import Try from "@/components/try";
import { constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  canonical: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Features /> */}
      {/* <Try /> */}
    </>
  );
}
