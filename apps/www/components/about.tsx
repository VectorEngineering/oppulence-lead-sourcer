import { Card, CardContent, CardDescription } from "@/components/ui/card";

import { Badge } from "./ui/badge";
import type React from "react";
import { Tweet } from "@/components/tweet";
import { components } from "./ui/my-tweet";

type VideoData = {
  src: string;
  title: string;
  description: string;
};

type VideoCardProps = VideoData;

const videoData: VideoData[] = [
  {
    src: "https://www.youtube.com/embed/Rzk3GmXUySs?si=2Y25oMlhbQWZpu1K",
    title: "Frying Pan`&apos;`s Latest YouTube video",
    description:
      "Pan shows the journey after just starting to build out Oppulence. The product is described and a demo is shown. You also get to see a sneak peak into the founders`&apos;` week, and see the difficulties, the highs and lows we experience, all in NYC.",
  },
  {
    src: "https://www.youtube.com/embed/hHm4mtIp6K0",
    title: "Nang`&apos;`s Latest YouTube video",
    description:
      "Nang introduces Oppulence, an AI-powered code editor aimed at transforming software development. He shares his journey from a high-paying job to pursuing startups and YouTube, encouraging viewers to chase their dreams with determination.",
  },
];

const AboutComponent: React.FC = () => {
  return (
    <section className={"mt-36"}>
      <div
        className={
          "m-4 mt-0 flex flex-col items-center lg:m-0 lg:justify-center"
        }
      >
        <h1 className="text-center text-4xl font-bold">
          Empowering Solo Entrepreneurs{" "}
          <span className="relative">
            <span className="relative z-10 text-foreground">
              Block by Block 🏗️
            </span>
            <span
              className="absolute bottom-0 left-0 w-full"
              style={{
                height: "1.4375rem",
                background: "rgba(20, 189, 149, 0.20)",
              }}
            />
          </span>
        </h1>
        <div className="flex w-full max-w-3xl flex-col gap-2">
          <div className="flex flex-col items-start justify-start gap-3 md:pt-[10%]">
            <p className="flex items-center gap-2 text-xl font-bold">
              <span>🎯 Current Market Challenge</span>
            </p>
            <p className="text-left text-gray-500">
              Modern entrepreneurs face unprecedented complexity in business
              operations. As a solo business owner, you&lsquo;re tasked with
              executing multiple critical roles simultaneously – from strategic
              planning to daily operations. Traditional enterprise solutions,
              designed for large teams, create unnecessary complexity and
              inefficiency.
            </p>
            <p className="text-left text-gray-500">
              Resource optimization becomes paramount when operating
              independently. Each moment spent managing disparate systems
              directly impacts business growth potential. The current fragmented
              approach to business management creates significant operational
              friction, making scalability a formidable challenge. ⏳
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-3 md:pt-[10%]">
            <p className="flex items-center gap-2 text-xl font-bold">
              <span>💡 Strategic Innovation</span>
            </p>
            <p className="text-left text-gray-500">
              Oppulence introduces a paradigm shift in business management
              through its modular architecture. 🧱 Each component is
              meticulously engineered for solo entrepreneurs, creating an
              integrated ecosystem that evolves with your enterprise. Our
              platform unifies essential business functions into a cohesive,
              intelligent system.
            </p>
            <p className="text-left text-gray-500">
              At the core of our solution is an advanced AI engine that
              functions as your operational cornerstone. 🤖 Our intelligent
              automation adapts to your unique business processes, continuously
              optimizing workflows and ensuring 24/7 operational efficiency.
              This systematic approach transforms how solo entrepreneurs manage
              and scale their businesses.
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-3 md:pt-[10%]">
            <p className="flex items-center gap-2 text-xl font-bold">
              <span>🚀 Scaling Excellence</span>
            </p>
            <p className="text-left text-gray-500">
              Our vision transcends conventional solo business limitations. Each
              element of Oppulence is architected as a foundational building
              block, engineered to support exponential growth. 📈 The platform
              maintains its efficiency and effectiveness whether you&lsquo;re
              managing dozens or thousands of business relationships.
            </p>
            <p className="text-left text-gray-500">
              Through strategic user collaboration, we continuously refine our
              platform. We&lsquo;re not merely developing software; we&lsquo;re
              establishing the infrastructure for next-generation
              entrepreneurship. 🌟 Every enhancement represents a calculated
              step toward building a more robust, scalable business architecture
              – designed for unprecedented solo success.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="flex items-center justify-center max-w-4xl px-4 m-auto mb-8">
        <Tweet id="1825456010862956844" components={components} />
      </div>

      <div className="flex flex-col items-center justify-center gap-4 p-4 pt-0 m-auto mb-10 lg:flex-row lg:p-0">
        {videoData.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div> */}

      {/* <div className="flex flex-col items-center justify-center p-4 pb-0 mt-0">
        <h2 className="text-4xl font-bold">
          <span className="relative">
            <span className="relative z-10">Founders</span>
            <span
              className="absolute bottom-0 left-0 w-full"
              style={{
                height: "1.4375rem",
                background: "rgba(20, 189, 149, 0.20)",
              }}
            ></span>
          </span>
        </h2>

        <div className="max-w-2xl text-gray-500">
          <p className="mt-6 text-center">
            Oppulence is founded by Pan and Nang, both former software
            engineers who worked on developer tooling at companies like Meta,
            Coinbase, and high-frequency trading firms.
          </p>
          <p className="mt-3 text-center">
            Passionate about empowering individuals, they recognize code and
            media as the most scalable tools a single person can utilize. With a
            combined following of over 500k subscribers and over 30 million
            views, they&apos;ve decided to combine media and code, bringing the
            developer community along for the ride. They&apos;re building the
            next open-source AI-powered code editor, Oppulence, with full
            transparency through videos, livestreams, and direct Discord
            calls/chats.
          </p>
        </div>
      </div> */}
    </section>
  );
};

const VideoCard: React.FC<VideoCardProps> = ({ src, title, description }) => (
  <Card>
    <CardContent
      className="flex flex-col-reverse p-4 sm:flex-col"
      style={{
        width: "100%",
        maxWidth: "30rem",
        minHeight: "24rem",
      }}
    >
      <div
        className="relative mt-4 sm:mb-4 sm:mt-0"
        style={{
          paddingBottom: "16rem",
        }}
      >
        <iframe
          className="absolute left-0 top-0 h-full w-full rounded"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <CardDescription className="text-gray-500">{description}</CardDescription>
    </CardContent>
  </Card>
);

export default AboutComponent;
