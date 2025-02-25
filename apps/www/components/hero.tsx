"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowRight, Briefcase, Rocket, Shield, Target, Zap } from "lucide-react";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import PearDarkHeroLogo from "@/components/ui/PearDarkHeroLogo.svg";
import PearHeroLogo from "@/components/ui/PearHeroLogo.svg";
import { useTheme } from "next-themes";

// All business quotes
const quotes = [
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
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
    quote: "If you can dream it, you can do it.",
    author: "Walt Disney",
  },
  {
    quote: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "Your most unhappy customers are your greatest source of learning.",
    author: "Bill Gates",
  },
  {
    quote: "If you're not embarrassed by the first version of your product, you've launched too late.",
    author: "Reid Hoffman",
  },
  {
    quote: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
  },
  {
    quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
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
    quote: "Chase the vision, not the money. The money will end up following you.",
    author: "Tony Hsieh",
  },
  {
    quote: "The harder you work, the luckier you get.",
    author: "Gary Player",
  },
  {
    quote: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
];

interface QuoteCardProps {
  quote: string;
  author: string;
}

const QuoteCard = ({ quote, author }: QuoteCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="rounded-lg border border-foreground/5 bg-background/60 p-4 shadow-sm backdrop-blur-lg"
  >
    <p className="mb-2 text-sm font-medium leading-relaxed text-foreground/80">
      "{quote}"
    </p>
    <p className="text-xs font-medium text-foreground/60">— {author}</p>
  </motion.div>
);

const QuoteCarousel = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [visibleQuotes, setVisibleQuotes] = useState<number[]>([]);

  // Determine how many quotes to show based on screen size
  const [numVisibleQuotes, setNumVisibleQuotes] = useState(3);

  useEffect(() => {
    // Update number of visible quotes based on screen size
    const handleResize = () => {
      if (window.innerWidth >= 1536) {
        setNumVisibleQuotes(5);
      } else if (window.innerWidth >= 1280) {
        setNumVisibleQuotes(4);
      } else if (window.innerWidth >= 1024) {
        setNumVisibleQuotes(3);
      } else if (window.innerWidth >= 768) {
        setNumVisibleQuotes(2);
      } else {
        setNumVisibleQuotes(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Update visible quotes
    const indices = [];
    for (let i = 0; i < numVisibleQuotes; i++) {
      indices.push((currentQuoteIndex + i) % quotes.length);
    }
    setVisibleQuotes(indices);

    // Cycle through quotes
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentQuoteIndex, numVisibleQuotes]);

  return (
    <div className="absolute right-8 top-1/4 hidden w-72 space-y-4 lg:block">
      <AnimatePresence mode="popLayout">
        {visibleQuotes.map((index, i) => (
          <motion.div
            key={`quote-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{ zIndex: numVisibleQuotes - i }}
          >
            <QuoteCard
              quote={quotes[index].quote}
              author={quotes[index].author}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

interface FeatureTagProps {
  icon: React.ElementType;
  text: string;
  index: number;
}

const FeatureTag = ({ icon: Icon, text, index }: FeatureTagProps) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
    whileHover={{ scale: 1.05, y: -2 }}
    className="flex items-center gap-2 rounded-full border border-foreground/5 bg-background/60 px-4 py-2 text-sm text-foreground/70 shadow-sm backdrop-blur-lg"
  >
    <Icon className="h-4 w-4 text-primary" /> {text}
  </motion.div>
);

const GradientBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div
      className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl"
      style={{ animation: "pulse 15s ease-in-out infinite alternate" }}
    />
    <div
      className="absolute -right-1/4 bottom-0 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-primary/10 to-primary/5 blur-3xl"
      style={{ animation: "pulse 20s ease-in-out infinite alternate-reverse" }}
    />
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

    <style jsx global>{`
      @keyframes pulse {
        0% {
          opacity: 0.5;
          transform: scale(1);
        }
        100% {
          opacity: 0.7;
          transform: scale(1.1);
        }
      }
    `}</style>
  </div>
);

const ScrollIndicator = () => (
  <motion.div
    className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5, duration: 0.8 }}
  >
    <p className="mb-2 text-xs font-medium text-foreground/50">Scroll to explore</p>
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <ArrowDown className="h-4 w-4 text-foreground/50" />
    </motion.div>
  </motion.div>
);

const HeroContent = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const features = [
    { icon: Shield, text: "Enterprise-Grade Security" },
    { icon: Rocket, text: "Intelligent Workflow Orchestration" },
    { icon: Briefcase, text: "Modular Business Architecture" },
    { icon: Target, text: "Adaptive Growth Analytics" },
    { icon: Zap, text: "24/7 Operational Efficiency" },
  ];

  return (
    <div className="relative z-10 mx-auto max-w-4xl px-4 pt-16 text-center sm:pt-24 md:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        {isDark ? (
          <PearDarkHeroLogo width="48" height="48" alt="Pear Logo" className="mx-auto" />
        ) : (
          <PearHeroLogo width="48" height="48" alt="Pear Logo" className="mx-auto" />
        )}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl"
      >
        <span className="block sm:inline">Empowering Solo Entrepreneurs </span>
        <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          Block by Block
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mb-8 max-w-2xl text-base text-foreground/70 sm:text-lg"
      >
        Your operational cornerstone in business management. Our modular architecture unifies essential functions
        into a cohesive, intelligent system—transforming how you scale while maintaining 24/7 efficiency.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3"
      >
        {features.map((feature, index) => (
          <FeatureTag
            key={feature.text}
            icon={feature.icon}
            text={feature.text}
            index={index}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary px-6 py-5 text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg sm:px-8 sm:py-6"
          >
            <Link
              href="https://cal.com/solomonai/30min"
              className="flex items-center gap-2"
            >
              <span>Experience The Innovation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-background no-scrollbar">
      <GradientBackground />
      <QuoteCarousel />
      <HeroContent />
    </section>
  );
}
