"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import YoutubeEmbed from "./ui/YoutubeEmbed";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";

type FeatureCategory =
  | "AI-Powered"
  | "Time-Saving"
  | "Data-Driven"
  | "Integration"
  | "Automation"
  | "Cost-Effective";

type FeatureInfo = {
  header: string;
  description: React.ReactNode;
  extendedDescription?: string;
  videoSource?: string;
  embedId?: string;
  categories: FeatureCategory[];
  stats?: {
    value: string;
    label: string;
  }[];
  bgPattern: "circles" | "grid" | "dots";
};

type SingleFeatureProps = {
  info: FeatureInfo;
  index: number;
};

// Tag badge component with variants
const categoryVariants = cva(
  "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
  {
    variants: {
      variant: {
        "AI-Powered": "bg-zinc-900/10 text-zinc-900 dark:bg-zinc-100/10 dark:text-zinc-100",
        "Time-Saving": "bg-zinc-800/10 text-zinc-800 dark:bg-zinc-200/10 dark:text-zinc-200",
        "Data-Driven": "bg-zinc-700/10 text-zinc-700 dark:bg-zinc-300/10 dark:text-zinc-300",
        "Integration": "bg-zinc-600/10 text-zinc-600 dark:bg-zinc-400/10 dark:text-zinc-400",
        "Automation": "bg-zinc-500/10 text-zinc-500 dark:bg-zinc-500/10 dark:text-zinc-500",
        "Cost-Effective": "bg-zinc-400/10 text-zinc-400 dark:bg-zinc-600/10 dark:text-zinc-600",
      },
    },
    defaultVariants: {
      variant: "AI-Powered",
    },
  }
);

const FeatureCategory = ({ type }: { type: FeatureCategory }) => (
  <span className={categoryVariants({ variant: type })}>
    {type}
  </span>
);

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const statsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: 0.3
    }
  }
};

const tagContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const tagVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const mediaVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
      delay: 0.2
    }
  }
};

// Background pattern components
const BackgroundPattern = ({ type }: { type: "circles" | "grid" | "dots" }) => {
  if (type === "circles") {
    return (
      <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-foreground/10 absolute">
          <circle cx="40" cy="40" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="160" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="40" cy="160" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          <circle cx="160" cy="160" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
    );
  }

  if (type === "grid") {
    return (
      <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)] text-foreground/5"></div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 opacity-15 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)] text-foreground/5"></div>
    </div>
  );
};

export default function Features() {
  const featureInfo: FeatureInfo[] = [
    {
      header: "Precise Target Audience Definition",
      description: (
        <>
          <p className="pb-6">
            Our platform allows you to define your ideal prospect with precision, using advanced AI to analyze data across industries, company sizes, and regions.
          </p>
          <p>
            Small businesses using our targeting features have reported a <span className="font-semibold">2x increase</span> in qualified leads and <span className="font-semibold">30% shorter</span> sales cycles.
          </p>
        </>
      ),
      extendedDescription: "The shift from manual to data-driven lead generation has seen companies leveraging AI to analyze customer data and online behavior to pinpoint the most promising prospects. This means smarter targeting and higher quality leads.",
      videoSource: "/webms/talktocodebase.webm",
      categories: ["AI-Powered", "Data-Driven", "Time-Saving"],
      stats: [
        { value: "74%", label: "of small businesses see AI as competitive edge" },
        { value: "72%", label: "AI adoption in business processes in 2025" }
      ],
      bgPattern: "circles"
    },

    {
      header: "AI-Driven Data Enrichment",
      description: (
        <>
          <p className="pb-6">
            Our AI automatically sources and enriches leads with over 50+ data points including contact details, company information, social profiles, and behavioral signals.
          </p>
          <p>
            Stop spending hours on manual research - our platform delivers complete, accurate lead profiles in seconds, with <span className="font-semibold">87% data accuracy</span> and <span className="font-semibold">60% cost reduction</span>.
          </p>
        </>
      ),
      extendedDescription: "AI-driven data enrichment is becoming smarter and more automated. Instead of relying on static databases, modern platforms use AI to continuously scour web sources, social media, and third-party data streams to enrich lead profiles with up-to-date information.",
      videoSource: "/webms/cmd+i-landingpage.webm",
      categories: ["AI-Powered", "Time-Saving", "Automation"],
      stats: [
        { value: "60%", label: "reduction in lead sourcing costs" },
        { value: "87%", label: "data accuracy with AI verification" }
      ],
      bgPattern: "grid"
    },

    {
      header: "Intelligent Lead Scoring & Prioritization",
      description: (
        <>
          <p className="pb-6">
            Our proprietary AI scoring algorithm analyzes 30+ variables to determine which leads are most likely to convert, allowing your team to focus on high-value opportunities.
          </p>
          <p>
            Machine learning models continuously improve predictions based on your success patterns, increasing conversion rates and shortening sales cycles.
          </p>
        </>
      ),
      extendedDescription: "Machine learning for lead scoring has matured rapidly. Traditional rule-based scoring is being overtaken by predictive models that learn from historical conversion data. AI-driven lead scoring analyzes patterns across dozens of data points and outputs a probability-based score of conversion likelihood.",
      embedId: "v4NN_qadBS0",
      categories: ["AI-Powered", "Data-Driven", "Automation"],
      stats: [
        { value: "30%", label: "shorter sales cycles with AI lead prioritization" },
        { value: "50%+", label: "increase in sales-ready leads" }
      ],
      bgPattern: "dots"
    },

    {
      header: "Seamless CRM Integration",
      description: (
        <>
          <p className="pb-6">
            Our platform integrates with all major CRM systems including HubSpot, Salesforce, and Pipedrive through bi-directional synchronization.
          </p>
          <p>
            With <span className="font-semibold">87% of small businesses using CRM systems</span>, our platform slots perfectly into your existing workflow with minimal setup.
          </p>
        </>
      ),
      extendedDescription: "Small businesses have widely adopted CRM software as the heart of their sales operations – about 87% of companies with 10–100 employees use a CRM system. A CRM captures leads from various sources and tracks them through the sales funnel.",
      videoSource: "/webms/talktocodebase.webm",
      categories: ["Integration", "Time-Saving", "Automation"],
      stats: [
        { value: "100%", label: "data consistency with bi-directional sync" },
        { value: "87%", label: "of small businesses with 10-100 employees use a CRM" }
      ],
      bgPattern: "grid"
    },

    {
      header: "AI-Powered Personalization & Outreach",
      description: (
        <>
          <p className="pb-6">
            Leverage AI to generate personalized outreach messages and follow-up sequences, tailored to each prospect's specific interests and needs.
          </p>
          <p>
            Studies show personalized outreach increases email response rates by <span className="font-semibold">200%</span> and conversion rates by <span className="font-semibold">40%</span> for small businesses.
          </p>
        </>
      ),
      extendedDescription: "The advent of powerful generative AI is a game-changer for personalized marketing. Emerging tools can generate human-like text on the fly, enabling one-to-one style communication at scale. These systems can draft tailored outreach emails, LinkedIn messages, and landing page copy for each prospect.",
      videoSource: "/webms/cmd+i-landingpage.webm",
      categories: ["AI-Powered", "Automation", "Time-Saving"],
      stats: [
        { value: "200%", label: "increase in email open rates with AI personalization" },
        { value: "3x", label: "faster lead engagement process" }
      ],
      bgPattern: "circles"
    },
  ];

  return (
    <section className="flex flex-col justify-evenly py-24 relative bg-gradient-to-b from-background to-background/95">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,rgba(0,0,0,0)_45%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-1 rounded-full bg-foreground/10 text-foreground font-medium text-sm backdrop-blur-sm border border-foreground/5"
          >
            AI-Powered Features
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Lead Generation <span className="relative inline-block">
              <span className="relative z-10">Reimagined</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-foreground/10 -z-10 transform skew-x-12"></span>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto max-w-3xl text-lg md:text-xl text-foreground/70 leading-relaxed"
          >
            Our AI-powered platform delivers enterprise-grade lead generation capabilities in a package tailored for small business needs — easy to use, seamlessly integrated, and remarkably affordable.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-40"
        >
          {featureInfo.map((info, index) => (
            <SingleFeature key={index} info={info} index={index} />
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-32 text-center"
        >
          <div className="inline-block p-0.5 rounded-full bg-gradient-to-r from-foreground/20 via-foreground to-foreground/20">
            <Link href="/signup">
              <button className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-background text-foreground font-medium hover:bg-background/95 transition-colors shadow-xl backdrop-blur-sm">
                Start Generating High-Quality Leads
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </Link>
          </div>
          <p className="mt-4 text-foreground/50 text-sm">
            Join the 72% of businesses leveraging AI for a competitive advantage
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function SingleFeature(props: SingleFeatureProps) {
  const { info, index } = props;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={itemVariants}
      className="relative"
    >
      <BackgroundPattern type={info.bgPattern} />

      <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20 overflow-hidden relative z-10`}>
        <div className="w-full lg:w-1/2 p-4">
          {/* Categories tags */}
          <motion.div
            variants={tagContainerVariants}
            className="flex flex-wrap gap-2 mb-6"
          >
            {info.categories.map((category) => (
              <motion.div key={category} variants={tagVariants}>
                <FeatureCategory type={category} />
              </motion.div>
            ))}
          </motion.div>

          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            {info.header}
          </h3>

          <div className="text-foreground/70 text-lg leading-relaxed mb-6">
            {info.description}
          </div>

          {info.extendedDescription && (
            <motion.p
              variants={itemVariants}
              className="text-foreground/60 text-base italic leading-relaxed mb-8 border-l-2 border-foreground/10 pl-4"
            >
              "{info.extendedDescription}"
            </motion.p>
          )}

          {/* Stats section */}
          {info.stats && (
            <motion.div
              variants={statsVariants}
              className="grid grid-cols-2 gap-6 mt-8"
            >
              {info.stats.map((stat, i) => (
                <div key={i} className="bg-foreground/5 backdrop-blur-sm rounded-xl p-4 border border-foreground/5">
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-foreground/60">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        <motion.div
          variants={mediaVariants}
          className="w-full lg:w-1/2 overflow-hidden rounded-2xl border border-foreground/5 shadow-xl"
        >
          {info.videoSource ? (
            <AspectRatio ratio={16 / 9}>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              >
                <source src={info.videoSource} type="video/webm" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-foreground/5 mix-blend-overlay pointer-events-none backdrop-blur-[1px]"></div>
            </AspectRatio>
          ) : (
            <div className="w-full rounded-2xl overflow-hidden">
              <YoutubeEmbed embedId={info.embedId!} />
              <div className="absolute inset-0 bg-foreground/5 mix-blend-overlay pointer-events-none"></div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -z-10 w-24 h-24 rounded-full bg-foreground/3 blur-3xl opacity-20 top-1/2 transform -translate-y-1/2 left-1/4"></div>
      <div className="absolute -z-10 w-40 h-40 rounded-full bg-foreground/3 blur-3xl opacity-10 top-1/4 transform -translate-y-1/2 right-1/3"></div>
    </motion.div>
  );
}
