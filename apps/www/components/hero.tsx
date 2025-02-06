"use client";

import {
  ArrowRight,
  Briefcase,
  ChartBar,
  Clock,
  Coins,
  Rocket,
  Shield,
  Target,
  Users,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import PearDarkHeroLogo from "@/components/ui/PearDarkHeroLogo.svg";
import PearHeroLogo from "@/components/ui/PearHeroLogo.svg";
import React from "react";
import { useTheme } from "next-themes";

const quoteEmojis = [
  "💭",
  "💫",
  "✨",
  "🌟",
  "💡",
  "🎯",
  "🚀",
  "💪",
  "🌈",
  "⭐️",
  "🔥",
  "💎",
  "🎨",
  "🎭",
  "🎪",
  "🎬",
  "🎮",
  "🎲",
  "🎱",
  "🎳",
  "🌺",
  "🌸",
  "🌼",
  "🌻",
  "🌹",
  "🌷",
  "🌱",
  "🌿",
  "🍀",
  "🎋",
  "🎍",
  "🎭",
  "🎪",
  "🎨",
  "🎯",
  "🎲",
  "🎮",
  "🎱",
  "🎳",
  "🎪",
];

const QuoteCard = ({
  index,
  delay,
  quote,
  author,
  groupIndex,
}: {
  index: number;
  delay: number;
  quote: string;
  author: string;
  groupIndex: number;
}) => {
  return (
    <div
      className="quote-float absolute bg-background/50 backdrop-blur-sm"
      style={{
        width: "300px",
        right: "2rem",
        bottom: `${15 + index * 12}%`,
        padding: "1rem",
        animationDelay: `${delay}s`,
        transform: `rotate(${index * 0.5}deg)`,
        zIndex: index,
        opacity: groupIndex === 0 ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xl opacity-70">
            {quoteEmojis[index % quoteEmojis.length]}
          </span>
          <p className="flex-1 text-sm italic leading-relaxed text-foreground/80">
            &ldquo;{quote}&rdquo;
          </p>
        </div>
        <p className="text-xs font-medium text-foreground/60">— {author}</p>
      </div>
    </div>
  );
};

const QuoteBackground = () => {
  const [currentGroup, setCurrentGroup] = React.useState(0);

  // Move quotes array inside useMemo
  const quoteGroups = React.useMemo(() => {
    const quotes = [
      {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker",
      },
      {
        quote:
          "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
      },
      {
        quote: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs",
      },
      {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
      },
      {
        quote:
          "Your most unhappy customers are your greatest source of learning.",
        author: "Bill Gates",
      },
      {
        quote:
          "If you're not embarrassed by the first version of your product, you've launched too late.",
        author: "Reid Hoffman",
      },
      { quote: "Stay hungry, stay foolish.", author: "Steve Jobs" },
      {
        quote:
          "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb",
      },
      {
        quote: "Don't be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller",
      },
      {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
      },
      {
        quote:
          "Chase the vision, not the money. The money will end up following you.",
        author: "Tony Hsieh",
      },
      {
        quote: "The harder you work, the luckier you get.",
        author: "Gary Player",
      },
      {
        quote:
          "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau",
      },
      { quote: "If you can dream it, you can do it.", author: "Walt Disney" },
      {
        quote:
          "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt",
      },
      {
        quote: "What would you do if you weren't afraid?",
        author: "Sheryl Sandberg",
      },
      { quote: "Move fast and break things.", author: "Mark Zuckerberg" },
      {
        quote: "Ideas are easy. Implementation is hard.",
        author: "Guy Kawasaki",
      },
      {
        quote:
          "Make every detail perfect and limit the number of details to perfect.",
        author: "Jack Dorsey",
      },
      {
        quote: "The best investment you can make is in yourself.",
        author: "Warren Buffett",
      },
      {
        quote:
          "Risk more than others think is safe. Dream more than others think is practical.",
        author: "Howard Schultz",
      },
      { quote: "Always deliver more than expected.", author: "Larry Page" },
      {
        quote: "The biggest risk is not taking any risk.",
        author: "Mark Zuckerberg",
      },
      {
        quote: "Don't let yesterday take up too much of today.",
        author: "Will Rogers",
      },
      {
        quote:
          "Do what you do so well that they will want to see it again and bring their friends.",
        author: "Walt Disney",
      },
      {
        quote:
          "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill",
      },
      {
        quote:
          "There's no shortage of remarkable ideas, what's missing is the will to execute them.",
        author: "Seth Godin",
      },
      { quote: "The only way around is through.", author: "Robert Frost" },
      {
        quote: "If you're going through hell, keep going.",
        author: "Winston Churchill",
      },
      {
        quote:
          "Timing, perseverance, and ten years of trying will eventually make you look like an overnight success.",
        author: "Biz Stone",
      },
      {
        quote:
          "The secret to successful hiring is this: look for the people who want to change the world.",
        author: "Marc Benioff",
      },
      {
        quote:
          "If you're not embarrassed by the first version of your product, you've launched too late.",
        author: "Reid Hoffman",
      },
      {
        quote:
          "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
        author: "Steve Jobs",
      },
      {
        quote:
          "The most dangerous poison is the feeling of achievement. The antidote is to every evening think what can be done better tomorrow.",
        author: "Ingvar Kamprad",
      },
      {
        quote: "Don't worry about failure; you only have to be right once.",
        author: "Drew Houston",
      },
      {
        quote:
          "The most valuable businesses of coming decades will be built by entrepreneurs who seek to empower people rather than try to make them obsolete.",
        author: "Peter Thiel",
      },
      {
        quote:
          "If you want to succeed you should strike out on new paths, rather than travel the worn paths of accepted success.",
        author: "John D. Rockefeller",
      },
      {
        quote:
          "The only strategy that is guaranteed to fail is not taking risks.",
        author: "Mark Zuckerberg",
      },
      {
        quote:
          "Build something 100 people love, not something 1 million people kind of like.",
        author: "Brian Chesky",
      },
      {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain",
      },
      {
        quote:
          "If you're not stubborn, you'll give up on experiments too soon.",
        author: "Jeff Bezos",
      },
      {
        quote: "The best time to repair the roof is when the sun is shining.",
        author: "John F. Kennedy",
      },
      {
        quote: "If you want to achieve greatness stop asking for permission.",
        author: "Anonymous",
      },
      {
        quote:
          "Success is not the key to happiness. Happiness is the key to success.",
        author: "Albert Schweitzer",
      },
      {
        quote:
          "Don't find customers for your products, find products for your customers.",
        author: "Seth Godin",
      },
      { quote: "Quality is not an act, it is a habit.", author: "Aristotle" },
      { quote: "The customer is why we exist.", author: "Sam Walton" },
      {
        quote: "A goal without a plan is just a wish.",
        author: "Antoine de Saint-Exupéry",
      },
      {
        quote:
          "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon",
      },
      {
        quote: "Focus on being productive instead of busy.",
        author: "Tim Ferriss",
      },
    ];

    const groups = [];
    for (let i = 0; i < quotes.length; i += 6) {
      groups.push(quotes.slice(i, i + 6));
    }
    return groups;
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % quoteGroups.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [quoteGroups.length]);

  return (
    <div className="pointer-events-none fixed right-0 top-0 z-20 h-screen w-[350px]">
      {quoteGroups.map((group, groupIndex) => (
        <div
          key={groupIndex}
          style={{
            opacity: groupIndex === currentGroup ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            position: "absolute",
            inset: 0,
          }}
        >
          {group.map((quote, index) => (
            <QuoteCard
              key={index}
              index={index}
              delay={index * 0.3}
              quote={quote.quote}
              author={quote.author}
              groupIndex={groupIndex === currentGroup ? 0 : 1}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const FloatingBlock = ({
  delay,
  size,
  rotation,
  position,
  emoji,
}: {
  delay: number;
  size: number;
  rotation: number;
  position: { x: number; y: number };
  emoji: string;
}) => (
  <div
    className="absolute flex items-center justify-center rounded-3xl border border-foreground/20 bg-foreground/5 backdrop-blur-md"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      left: `${position.x}%`,
      top: `${position.y}%`,
      transform: `rotate(${rotation}deg)`,
      animation: `float-block 40s infinite linear ${delay}s`,
      willChange: "transform",
    }}
  >
    <span className="text-3xl opacity-50">{emoji}</span>
  </div>
);

const BackgroundBlocks = () => {
  const emojis = [
    "💼",
    "📈",
    "💡",
    "🎯",
    "🚀",
    "💰",
    "📱",
    "🔑",
    "📊",
    "🌟",
    "⚡️",
    "🔄",
    "📝",
    "🎨",
    "💪",
    "🌍",
    "📢",
    "🔍",
    "💎",
    "🎉",
    "🏆",
    "⭐️",
    "📌",
    "🔔",
    "💫",
    "📲",
    "🎯",
    "💻",
    "🔝",
    "📅",
  ];

  const blocks = [
    {
      size: 150,
      rotation: 15,
      position: { x: -10, y: 10 },
      delay: 0,
      emoji: emojis[0],
    },
    {
      size: 100,
      rotation: -10,
      position: { x: -10, y: 25 },
      delay: 4,
      emoji: emojis[1],
    },
    {
      size: 120,
      rotation: 25,
      position: { x: -10, y: 40 },
      delay: 8,
      emoji: emojis[2],
    },
    {
      size: 90,
      rotation: -15,
      position: { x: -10, y: 55 },
      delay: 12,
      emoji: emojis[3],
    },
    {
      size: 140,
      rotation: 20,
      position: { x: -10, y: 70 },
      delay: 16,
      emoji: emojis[4],
    },
    {
      size: 110,
      rotation: -5,
      position: { x: -10, y: 85 },
      delay: 20,
      emoji: emojis[5],
    },
    {
      size: 130,
      rotation: 30,
      position: { x: -10, y: 15 },
      delay: 24,
      emoji: emojis[6],
    },
    {
      size: 95,
      rotation: -20,
      position: { x: -10, y: 30 },
      delay: 28,
      emoji: emojis[7],
    },
    {
      size: 125,
      rotation: 10,
      position: { x: -10, y: 45 },
      delay: 32,
      emoji: emojis[8],
    },
    {
      size: 105,
      rotation: -25,
      position: { x: -10, y: 60 },
      delay: 36,
      emoji: emojis[9],
    },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {blocks.map((block, index) => (
        <FloatingBlock key={index} {...block} />
      ))}
      <style jsx global>{`
        @keyframes float-block {
          0% {
            transform: translateX(0%) rotate(0deg);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateX(110vw) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

const FeatureHighlight = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => (
  <div className="group relative flex flex-col items-center bg-background/50 p-6 text-center backdrop-blur-sm">
    <div className="mb-4 rounded-2xl bg-primary/5 p-3 transition-all group-hover:rotate-6 group-hover:bg-primary/10">
      <Icon className="h-8 w-8 text-primary" />
    </div>
    <h3 className="mb-2 text-xl font-bold text-foreground/90">{title}</h3>
    <p className="text-sm text-foreground/60">{description}</p>
  </div>
);

const StatsBar = () => (
  <div className="mt-8 flex flex-wrap justify-center gap-8 bg-background/50 p-6 backdrop-blur-sm">
    {[
      { icon: Users, label: "Active Solo Businesses", value: "500+" },
      { icon: ChartBar, label: "Daily Tasks Automated", value: "10K+" },
      { icon: Clock, label: "Monthly Hours Saved", value: "25K+" },
      { icon: Coins, label: "Revenue Processed", value: "$2M+" },
    ].map(({ icon: Icon, label, value }) => (
      <div
        key={label}
        className="group flex flex-col items-center transition-all hover:scale-105"
      >
        <div className="mb-3 rounded-xl bg-primary/5 p-3 transition-all group-hover:rotate-6 group-hover:bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="text-2xl font-bold text-foreground/90">{value}</div>
        <div className="text-sm text-foreground/60">{label}</div>
      </div>
    ))}
  </div>
);

const HeroTitle = ({ theme }: { theme: string }) => (
  <div className="mb-6 bg-background/50 p-6 text-center backdrop-blur-sm">
    <div className="mb-4">
      {theme === "dark" ? (
        <PearDarkHeroLogo width="40" alt="Oppulence Logo" className="mx-auto" />
      ) : (
        <PearHeroLogo width="40" alt="Oppulence Logo" className="mx-auto" />
      )}
    </div>
    <h1 className="text-4xl font-bold tracking-tight text-foreground/90 sm:text-6xl">
      Run Your One-Person Business <br />
      <span className="bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
        With Confidence
      </span>
    </h1>
  </div>
);

const HeroDescription = () => (
  <div className="mx-auto max-w-3xl bg-background/50 p-6 text-center backdrop-blur-sm">
    <p className="mb-6 text-lg text-foreground/70 sm:text-xl">
      Your all-in-one AI-powered business suite. Automate tasks, manage leads,
      and make data-driven decisions - all while staying focused on growth.
    </p>
    <div className="flex flex-wrap justify-center gap-3">
      {[
        { icon: Shield, text: "Bank-Grade Security" },
        { icon: Rocket, text: "AI Assistant" },
        { icon: Briefcase, text: "Smart Dashboard" },
        { icon: Target, text: "Growth Analytics" },
        { icon: Zap, text: "Real-Time Automation" },
      ].map(({ icon: Icon, text }) => (
        <div
          key={text}
          className="flex items-center gap-2 rounded-full bg-primary/5 px-4 py-2 text-sm text-foreground/70 transition-all hover:bg-primary/10"
        >
          <Icon className="h-4 w-4 text-primary" /> {text}
        </div>
      ))}
    </div>
  </div>
);

const HeroButtons = () => (
  <div className="mt-6 bg-background/50 p-4 text-center backdrop-blur-sm">
    <Button
      asChild
      size="lg"
      className="text-white bg-primary text-primary-foreground hover:bg-primary/90"
    >
      <Link
        href="https://cal.com/solomonai/30min"
        className="flex items-center gap-2"
      >
        Book a Demo
        <ArrowRight className="h-4 w-4" />
      </Link>
    </Button>
  </div>
);

const FeatureGrid = () => (
  <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
    <FeatureHighlight
      icon={Briefcase}
      title="Smart Business Suite"
      description="Automated invoicing, expense tracking, and real-time cash flow monitoring with AI-powered insights for better decisions."
    />
    <FeatureHighlight
      icon={Shield}
      title="Enterprise Security"
      description="Bank-level encryption, automated compliance, and secure storage. Enterprise-grade protection for your business data."
    />
    <FeatureHighlight
      icon={Rocket}
      title="AI-Powered Growth"
      description="Smart lead scoring, automated follow-ups, and predictive analytics to help you focus on what matters most - growth."
    />
  </div>
);

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <QuoteBackground />
      <BackgroundBlocks />
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>
      <div className="relative mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <div className="relative space-y-8 pb-10 pt-12">
          <div className="mx-auto flex max-w-5xl flex-col gap-6">
            <HeroTitle theme={theme || "light"} />
            <HeroDescription />
            {/* <StatsBar /> */}
            <HeroButtons />
            {/* <FeatureGrid /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
