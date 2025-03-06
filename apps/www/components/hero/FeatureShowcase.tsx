"use client";

import { ArrowRight, BarChart3, Briefcase, Building2, LineChart, Rocket, Shield, Users, Zap } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import YoutubeEmbed from "../ui/YoutubeEmbed";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";

// Define types for better TypeScript support
type FeatureCategory =
    | "AI-Powered"
    | "Time-Saving"
    | "Data-Driven"
    | "Integration"
    | "Automation"
    | "Cost-Effective";

interface FeatureInfo {
    title: string;
    description: string | React.ReactNode;
    extendedDescription: string;
    icon: React.ElementType;
    align: "left" | "right";
    categories: FeatureCategory[];
    stats?: {
        value: string;
        label: string;
    }[];
    highlight?: string;
    bgPattern: "circles" | "grid" | "dots";
    videoSource?: string;
    embedId?: string;
}

interface SingleFeatureProps {
    info: FeatureInfo;
    index: number;
}

// Tag badge component with variants
const categoryVariants = cva(
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
    {
        variants: {
            variant: {
                "AI-Powered": "bg-black/10 text-black dark:bg-white/10 dark:text-white",
                "Time-Saving": "bg-black/8 text-black dark:bg-white/8 dark:text-white",
                "Data-Driven": "bg-black/6 text-black dark:bg-white/6 dark:text-white",
                "Integration": "bg-black/10 text-black dark:bg-white/10 dark:text-white",
                "Automation": "bg-black/8 text-black dark:bg-white/8 dark:text-white",
                "Cost-Effective": "bg-black/6 text-black dark:bg-white/6 dark:text-white",
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

// Background pattern components
const BackgroundPattern = ({ type }: { type: "circles" | "grid" | "dots" }) => {
    if (type === "circles") {
        return (
            <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-black/10 dark:text-white/10 absolute">
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
                <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)] text-black/5 dark:text-white/5"></div>
            </div>
        );
    }

    return (
        <div className="absolute inset-0 opacity-15 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)] text-black/5 dark:text-white/5"></div>
        </div>
    );
};

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

const iconContainerVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.2
        }
    }
};

const FeatureShowcase = () => {
    const featureInfo: FeatureInfo[] = [
        {
            title: "Comprehensive AI-Driven Data Enrichment",
            description: "Our platform automatically enriches each lead with 50+ data points including firmographics, social profiles, news mentions, and intent signals - all kept fresh by AI.",
            extendedDescription: "Using advanced AI to continuously scour web sources, social media, and third-party data streams, we enrich lead profiles with up-to-date information. Enrichment isn't just about appending a job title or phone number; it provides deeper context like recent news about the company, buying signals, or even psychographic indicators.",
            icon: Shield,
            align: "right",
            categories: ["AI-Powered", "Data-Driven", "Time-Saving"],
            stats: [
                { value: "60%", label: "reduction in lead sourcing costs" },
                { value: "87%", label: "data accuracy with AI verification" }
            ],
            highlight: "Small businesses report saving 5+ hours per week on lead research",
            bgPattern: "grid",
            videoSource: "/webms/data-enrichment.webm"
        },
        {
            title: "Intelligent Lead Scoring & Prioritization",
            description: "Our proprietary ML algorithm analyzes 30+ variables to determine which leads are most likely to convert, allowing your team to focus on high-value opportunities.",
            extendedDescription: "Machine learning for lead scoring has matured rapidly. Our AI-driven lead scoring analyzes patterns across dozens of data points and outputs a probability-based score of conversion likelihood. These scores update in real time as new data comes in, something static models couldn't do.",
            icon: LineChart,
            align: "left",
            categories: ["AI-Powered", "Data-Driven", "Automation"],
            stats: [
                { value: "30%", label: "shorter sales cycles with AI lead prioritization" },
                { value: "50%+", label: "increase in sales-ready leads" }
            ],
            highlight: "Sales teams using predictive scoring have reported 30% shorter sales cycles",
            bgPattern: "circles",
            videoSource: "/webms/data-enrichment.webm"
        },
        {
            title: "Seamless CRM Integration & Workflow",
            description: "Our platform integrates with all major CRM systems including HubSpot, Salesforce, and Pipedrive through bi-directional synchronization that ensures data consistency.",
            extendedDescription: "We integrate seamlessly with popular CRMs via bi-directional sync - not only sending leads to CRM, but pulling key updates back. For example, if a sales rep changes a lead's stage or adds a note in the CRM, our platform can ingest that data, using it to further train the scoring model.",
            icon: Building2,
            align: "right",
            categories: ["Integration", "Time-Saving", "Automation"],
            stats: [
                { value: "100%", label: "data consistency with bi-directional sync" },
                { value: "87%", label: "of small businesses with 10-100 employees use a CRM" }
            ],
            highlight: "Compatible with HubSpot, Salesforce, Pipedrive, Zoho and more",
            bgPattern: "dots",
            videoSource: "/webms/crm-integration.webm"
        },
        {
            title: "AI-Powered Personalization & Outreach",
            description: "Leverage AI to generate personalized outreach messages and follow-up sequences, tailored to each prospect's specific interests and needs.",
            extendedDescription: "The advent of powerful generative AI is a game-changer for personalized marketing. Our platform can draft tailored outreach emails, LinkedIn messages, and even landing page copy for each prospect. By analyzing successful engagement patterns, we suggest optimal timing for follow-ups.",
            icon: Users,
            align: "left",
            categories: ["AI-Powered", "Automation", "Time-Saving"],
            stats: [
                { value: "200%", label: "increase in email open rates with AI personalization" },
                { value: "3x", label: "faster lead engagement process" }
            ],
            highlight: "Personalized outreach has shown to increase response rates by 200%",
            bgPattern: "grid",
            videoSource: "/webms/ai-personalization.webm"
        },
        {
            title: "Multi-Channel Data & Intent Signals",
            description: "Our system integrates data from multiple channels, including web behavior, social media, and third-party intent data to identify prospects actively in the buying cycle.",
            extendedDescription: "In Q3 of Year 2, we focus on broadening and deepening the data that powers the platform. We integrate third-party intent data feeds or signal monitoring, flagging leads that show buying intent such as a company increasing job postings for a relevant skill, or a prospect downloading whitepapers on a topic.",
            icon: BarChart3,
            align: "right",
            categories: ["Data-Driven", "AI-Powered", "Automation"],
            stats: [
                { value: "40%", label: "higher conversion rates with intent data" },
                { value: "65%", label: "of businesses plan to leverage intent data by 2026" }
            ],
            highlight: "Identify prospects already searching for your solution",
            bgPattern: "circles",
            videoSource: "/webms/data-enrichment.webm"
        },
    ];

    // Detailed feature outline data
    const detailedFeatures = [
        {
            title: "AI-Driven Data Enrichment",
            description: "Enriching lead profiles with comprehensive, accurate data using artificial intelligence",
            details: [
                {
                    subtitle: "Comprehensive Contact Information",
                    text: "Our platform automatically appends complete contact details including email addresses, phone numbers, social profiles, and company information through AI-powered enrichment."
                },
                {
                    subtitle: "Dynamic Data Updates",
                    text: "Unlike static databases, our AI continuously scours web sources, social media, and third-party data streams to keep lead information fresh and up-to-date."
                },
                {
                    subtitle: "Firmographic & Technographic Data",
                    text: "Gain insights into company size, industry, location, funding rounds, technologies used, and organizational structure to better understand each prospect."
                },
                {
                    subtitle: "Social & News Monitoring",
                    text: "Our system monitors social media channels and news sources for mentions of your prospects, providing valuable context for your outreach."
                },
                {
                    subtitle: "Data Verification & Accuracy",
                    text: "Machine learning algorithms cross-reference multiple sources to verify information, achieving 87% data accuracy - significantly higher than manual research."
                }
            ]
        },
        {
            title: "Predictive Lead Scoring & Prioritization",
            description: "Advanced machine learning that identifies your most valuable prospects",
            details: [
                {
                    subtitle: "30+ Variable Analysis",
                    text: "Our proprietary algorithm analyzes over 30 data points from demographics and firmographics to behavioral signals and engagement metrics."
                },
                {
                    subtitle: "Real-Time Score Updates",
                    text: "Lead scores update dynamically as new information becomes available, unlike static scoring models that quickly become outdated."
                },
                {
                    subtitle: "Conversion Probability Calculation",
                    text: "Each lead receives a probability score based on their likelihood to convert, helping sales teams focus on high-value opportunities."
                },
                {
                    subtitle: "Customized Scoring Models",
                    text: "The system learns from your success patterns over time, creating a personalized scoring model specific to your business and industry."
                },
                {
                    subtitle: "Bias Elimination",
                    text: "Data-driven objectivity in qualification eliminates human bias, ensuring resources are allocated to truly promising leads regardless of preconceptions."
                }
            ]
        },
        {
            title: "Seamless CRM Integration",
            description: "Bi-directional synchronization with your existing tools and workflows",
            details: [
                {
                    subtitle: "Native CRM Connections",
                    text: "Built-in integrations for HubSpot, Salesforce, Pipedrive, Zoho and other popular CRM systems with one-click data pushing."
                },
                {
                    subtitle: "Bi-Directional Synchronization",
                    text: "Changes made in either system are reflected in both places - updates in your CRM appear in our platform and vice versa."
                },
                {
                    subtitle: "Field Mapping & Customization",
                    text: "Flexible data mapping allows you to determine exactly how information flows between systems based on your specific needs."
                },
                {
                    subtitle: "Automated Workflow Triggers",
                    text: "Create automated actions based on score changes, such as assigning tasks, sending alerts, or triggering follow-up sequences."
                },
                {
                    subtitle: "Historical Data Enhancement",
                    text: "Enrich your existing CRM contacts with fresh data and additional insights without manual research or data entry."
                }
            ]
        },
        {
            title: "AI-Powered Personalization",
            description: "Tailored communication that resonates with each prospect",
            details: [
                {
                    subtitle: "Generative AI Messaging",
                    text: "Our platform can draft personalized outreach emails, LinkedIn messages, and follow-ups based on each prospect's profile and interests."
                },
                {
                    subtitle: "Context-Aware Templates",
                    text: "Smart templates incorporate relevant details about the prospect's company, recent events, or industry challenges they may be facing."
                },
                {
                    subtitle: "Optimal Timing Recommendations",
                    text: "AI analyzes engagement patterns to suggest the best times to reach out to each prospect for maximum response rates."
                },
                {
                    subtitle: "Personalized Content Suggestions",
                    text: "Receive AI-powered recommendations for resources, case studies, or content that will resonate with each specific prospect."
                },
                {
                    subtitle: "Progressive Personalization",
                    text: "The system learns from interaction data to continuously improve personalization, resulting in 200% higher engagement rates."
                }
            ]
        },
        {
            title: "Intent Data & Signal Monitoring",
            description: "Identify prospects actively searching for solutions like yours",
            details: [
                {
                    subtitle: "Third-Party Intent Integration",
                    text: "Connect with premium intent data providers to identify companies actively researching topics related to your solution."
                },
                {
                    subtitle: "Digital Behavior Tracking",
                    text: "Monitor prospect interactions across the web, identifying content consumption patterns that indicate buying interest."
                },
                {
                    subtitle: "Social Listening",
                    text: "AI monitors social media for triggers like prospects mentioning needs related to your solution or asking for recommendations."
                },
                {
                    subtitle: "Hiring Signal Detection",
                    text: "Identify companies increasing job postings for skills related to your solution - a strong indicator of upcoming projects."
                },
                {
                    subtitle: "Predictive Intent Scoring",
                    text: "Combine multiple intent signals into a comprehensive score that predicts when prospects are entering an active buying cycle."
                }
            ]
        },
        {
            title: "AI Agents & Automation",
            description: "Autonomous AI systems that handle routine lead management tasks",
            details: [
                {
                    subtitle: "Automated Lead Qualification",
                    text: "AI agents can perform initial qualification, asking contextual questions and routing leads appropriately based on responses."
                },
                {
                    subtitle: "Smart Email Follow-ups",
                    text: "Set up intelligent sequences that adapt timing and messaging based on prospect engagement and behavior."
                },
                {
                    subtitle: "Meeting Scheduling Automation",
                    text: "AI assistants can negotiate meeting times via email, handling the back-and-forth communication to secure appointments."
                },
                {
                    subtitle: "Data Entry Elimination",
                    text: "The system automatically logs all interactions, updates information, and maintains records without manual data entry."
                },
                {
                    subtitle: "Multi-Channel Coordination",
                    text: "AI agents coordinate outreach across email, social, and other channels to create a cohesive, non-redundant approach to each prospect."
                }
            ]
        }
    ];

    return (
        <section className="relative py-32 overflow-hidden bg-white dark:bg-black">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
                <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_0,rgba(0,0,0,0)_45%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,rgba(0,0,0,0)_45%)]"></div>
                <div className="absolute top-0 right-0 w-[70%] h-[50%] bg-[radial-gradient(ellipse_at_top_right,rgba(0,0,0,0.02)_0,rgba(0,0,0,0)_50%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.02)_0,rgba(0,0,0,0)_50%)]"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-4 px-4 py-1 rounded-full bg-black/10 dark:bg-white/10 text-black dark:text-white font-medium text-sm backdrop-blur-sm border border-black/5 dark:border-white/5"
                    >
                        Enterprise-Grade Technology
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl lg:text-6xl"
                    >
                        Lead Generation <span className="relative inline-block">
                            <span className="relative z-10">Reimagined</span>
                            <span className="absolute bottom-2 left-0 right-0 h-3 bg-black/10 dark:bg-white/10 -z-10 transform skew-x-12"></span>
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mx-auto max-w-3xl text-lg md:text-xl text-black/70 dark:text-white/70 leading-relaxed"
                    >
                        Our platform delivers enterprise-grade AI lead generation capabilities in a package tailored for small business needs — easy to use, seamlessly integrated, and remarkably affordable. By 2025, <span className="font-semibold text-black dark:text-white">72% of businesses will be using AI</span> in their processes.
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
                        <SingleFeature key={info.title} info={info} index={index} />
                    ))}
                </motion.div>

                {/* Detailed Feature Breakdown */}
                <div className="mt-40">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white">Detailed Feature Breakdown</h2>
                        <p className="text-black/70 dark:text-white/70 max-w-3xl mx-auto">
                            Our AI-powered lead sourcing platform combines advanced technologies to deliver a comprehensive solution for small businesses looking to grow their sales pipeline.
                        </p>
                    </motion.div>

                    <div className="space-y-24">
                        {detailedFeatures.map((feature, featureIndex) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm"
                            >
                                <div className="p-8 md:p-10 border-b border-black/10 dark:border-white/10">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-black dark:text-white">{feature.title}</h3>
                                    <p className="text-black/70 dark:text-white/70 text-lg">{feature.description}</p>
                                </div>

                                <div className="px-8 py-6 md:p-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                    {feature.details.map((detail, detailIndex) => (
                                        <motion.div
                                            key={detail.subtitle}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.1 * detailIndex }}
                                            className="flex flex-col"
                                        >
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="w-8 h-8 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center">
                                                    <span className="text-black dark:text-white font-medium">{detailIndex + 1}</span>
                                                </div>
                                                <h4 className="text-lg font-semibold text-black dark:text-white">{detail.subtitle}</h4>
                                            </div>
                                            <p className="text-black/60 dark:text-white/60 text-base">{detail.text}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* AI Adoption Statistics */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-32 bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-black/10 dark:border-white/10"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-black dark:text-white">AI Adoption in Small Business</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <h4 className="text-5xl font-bold text-black dark:text-white mb-2">72%</h4>
                            <p className="text-black/60 dark:text-white/60">AI adoption in business processes by 2025</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-5xl font-bold text-black dark:text-white mb-2">74%</h4>
                            <p className="text-black/60 dark:text-white/60">of small businesses see AI as a competitive edge</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-5xl font-bold text-black dark:text-white mb-2">50%+</h4>
                            <p className="text-black/60 dark:text-white/60">increase in sales-ready leads with AI tools</p>
                        </div>
                    </div>
                </motion.div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-32 text-center"
                >
                    <div className="inline-block p-0.5 rounded-full bg-gradient-to-r from-black/20 via-black/40 to-black/20 dark:from-white/20 dark:via-white/40 dark:to-white/20">
                        <Link href="https://app.oppulence.app">
                            <button className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white dark:bg-black text-black dark:text-white font-medium hover:bg-white/95 dark:hover:bg-black/95 transition-colors shadow-xl backdrop-blur-sm">
                                Get Started
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </button>
                        </Link>
                    </div>
                    <p className="mt-4 text-black/50 dark:text-white/50 text-sm">
                        Join the 72% of businesses leveraging AI for a competitive advantage
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

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

                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black dark:text-white">
                        {info.title}
                    </h3>

                    <div className="text-black/70 dark:text-white/70 text-lg leading-relaxed mb-6">
                        {info.description}
                    </div>

                    <div className="p-4 bg-black/5 dark:bg-white/5 rounded-lg border border-black/10 dark:border-white/10 backdrop-blur-sm mb-8">
                        <p className="text-black/60 dark:text-white/60 text-base italic leading-relaxed">
                            "{info.extendedDescription}"
                        </p>
                    </div>

                    {info.highlight && (
                        <div className="flex items-center gap-2 mb-8 bg-black/5 dark:bg-white/5 p-3 rounded-lg border-l-2 border-black/30 dark:border-white/30">
                            <Zap className="h-5 w-5 text-black/60 dark:text-white/60" />
                            <p className="text-black/80 dark:text-white/80 font-medium">{info.highlight}</p>
                        </div>
                    )}

                    {/* Stats section */}
                    {info.stats && (
                        <motion.div
                            variants={statsVariants}
                            className="grid grid-cols-2 gap-6 mt-8"
                        >
                            {info.stats.map((stat, i) => (
                                <div key={i} className="bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-black/5 dark:border-white/5">
                                    <p className="text-2xl font-bold text-black dark:text-white">{stat.value}</p>
                                    <p className="text-sm text-black/60 dark:text-white/60">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </div>

                <motion.div
                    variants={mediaVariants}
                    className="w-full lg:w-1/2 overflow-hidden rounded-2xl border border-black/5 dark:border-white/5 shadow-xl"
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
                            <div className="absolute inset-0 bg-black/5 dark:bg-white/5 mix-blend-overlay pointer-events-none backdrop-blur-[1px]"></div>
                        </AspectRatio>
                    ) : info.embedId ? (
                        <div className="w-full rounded-2xl overflow-hidden">
                            <YoutubeEmbed embedId={info.embedId} />
                            <div className="absolute inset-0 bg-black/5 dark:bg-white/5 mix-blend-overlay pointer-events-none"></div>
                        </div>
                    ) : (
                        <div className={`aspect-square sm:aspect-video w-full rounded-2xl bg-gradient-to-br from-black/10 to-black/5 dark:from-white/10 dark:to-white/5 p-12 flex items-center justify-center shadow-lg border border-black/5 dark:border-white/5 backdrop-blur-sm relative overflow-hidden group`}>
                            <info.icon className="h-20 w-20 text-black/70 dark:text-white/70 transition-transform duration-500 group-hover:scale-110 group-hover:text-black/90 dark:group-hover:text-white/90" strokeWidth={1.25} />

                            {/* Design elements */}
                            <div className="absolute top-6 left-6 w-20 h-20 opacity-20">
                                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-black/30 dark:text-white/30">
                                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                                </svg>
                            </div>
                            <div className="absolute bottom-6 right-6 w-20 h-20 opacity-20">
                                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-black/30 dark:text-white/30">
                                    <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                                </svg>
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 w-24 h-24 rounded-full bg-black/3 dark:bg-white/3 blur-3xl opacity-20 top-1/2 transform -translate-y-1/2 left-1/4"></div>
            <div className="absolute -z-10 w-40 h-40 rounded-full bg-black/3 dark:bg-white/3 blur-3xl opacity-10 top-1/4 transform -translate-y-1/2 right-1/3"></div>
        </motion.div>
    );
}

export default FeatureShowcase; 