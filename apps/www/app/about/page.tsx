import AboutComponent from "@/components/about";
import { Metadata } from "next/types";
import { constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "About",
  description: "About Oppulence",
  canonical: "/about",
});

export default function About() {
  return (
    <div className="py-[5%]">
      <AboutComponent />
    </div>
  );
}
