"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BarChart2, BookOpen, Brain, Briefcase, ChevronDown, Clock, DollarSign, LineChart, Rocket, Shield, Target, Users } from "lucide-react";
import React, { useState } from "react";

import Link from "next/link";
import { cva } from "class-variance-authority";

// Define types for better TypeScript support
type BenefitCategory =
    | "Efficiency"
    | "Sales"
    | "Analytics"
    | "Integration"
    | "Cost-Saving"
    | "Growth";

interface BenefitInfo {
    title: string;
    description: string;
    extendedDescription: string;
    icon: React.ElementType;
    categories: BenefitCategory[];
    stats?: {
        value: string;
        label: string;
    };
    highlight?: string;
    bookColor?: string;
}

// Tag badge component with variants
const categoryVariants = cva(
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
    {
        variants: {
            variant: {
                "Efficiency": "bg-black/10 text-black dark:bg-white/10 dark:text-white",
                "Sales": "bg-black/8 text-black dark:bg-white/8 dark:text-white",
                "Analytics": "bg-black/6 text-black dark:bg-white/6 dark:text-white",
                "Integration": "bg-black/10 text-black dark:bg-white/10 dark:text-white",
                "Cost-Saving": "bg-black/8 text-black dark:bg-white/8 dark:text-white",
                "Growth": "bg-black/6 text-black dark:bg-white/6 dark:text-white",
            },
        },
        defaultVariants: {
            variant: "Efficiency",
        },
    }
);

const BenefitCategory = ({ type }: { type: BenefitCategory }) => (
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

const iconVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.1
        }
    }
};

// Book animation variants
const bookCoverVariants = {
    closed: {
        rotateY: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
        }
    },
    open: {
        rotateY: -180,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

const bookContentVariants = {
    closed: {
        opacity: 0,
        transition: {
            duration: 0.3
        }
    },
    open: {
        opacity: 1,
        transition: {
            duration: 0.3,
            delay: 0.3
        }
    }
};

const spineVariants = {
    closed: {
        width: "20px",
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
        }
    },
    open: {
        width: "10px",
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

const BenefitBook = ({ benefit }: { benefit: BenefitInfo }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleBook = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.div
            className="h-[450px] perspective-1000 cursor-pointer"
            onClick={toggleBook}
            variants={itemVariants}
        >
            <div className="relative h-full w-full transform-style-3d">
                {/* Book spine */}
                <motion.div
                    className="book-spine"
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                    variants={spineVariants}
                />
                
                {/* Book page edge - visible when open */}
                {isOpen && <div className="book-page-edge" />}

                {/* Book cover */}
                <motion.div
                    className="book-cover"
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                    variants={bookCoverVariants}
                >
                    {/* Cover content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between border border-black/10 dark:border-white/10 rounded-r-md overflow-hidden">
                        <div>
                            <motion.div
                                variants={iconVariants}
                                className="mb-6 p-4 inline-flex items-center justify-center rounded-xl bg-black/5 dark:bg-white/5"
                            >
                                <benefit.icon className="h-7 w-7 text-black/70 dark:text-white/70" strokeWidth={1.5} />
                            </motion.div>

                            <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                                {benefit.title}
                            </h3>

                            <p className="text-black/70 dark:text-white/70 mb-4 line-clamp-3">
                                {benefit.description}
                            </p>
                        </div>

                        {/* Stats badge on cover */}
                        {benefit.stats && (
                            <div className="inline-flex items-center gap-2 rounded-lg bg-black/5 dark:bg-white/5 px-3 py-1.5">
                                <span className="text-xl font-bold text-black dark:text-white">{benefit.stats.value}</span>
                                <span className="text-xs text-black/60 dark:text-white/60">{benefit.stats.label}</span>
                            </div>
                        )}

                        {/* Open instruction */}
                        <div className="flex items-center justify-center gap-1 mt-3 text-black/50 dark:text-white/50 text-sm">
                            <BookOpen className="h-4 w-4" />
                            <span>Click to open</span>
                        </div>
                    </div>

                    {/* Back of cover (visible when open) */}
                    <div
                        className="absolute inset-0 p-6 flex flex-col justify-between rotateY-180 backface-hidden"
                    >
                        <div className="h-full w-full bg-black/5 dark:bg-white/5 rounded-md" />
                    </div>
                </motion.div>

                {/* Book pages (content) */}
                <motion.div
                    className="book-pages"
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                    variants={bookContentVariants}
                >
                    {/* Categories tags */}
                    <motion.div
                        variants={tagContainerVariants}
                        className="flex flex-wrap gap-2 mb-4"
                    >
                        {benefit.categories.map((category) => (
                            <motion.div key={category} variants={tagVariants}>
                                <BenefitCategory type={category} />
                            </motion.div>
                        ))}
                    </motion.div>

                    <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                        {benefit.title}
                    </h3>

                    <p className="text-black/70 dark:text-white/70 mb-5">
                        {benefit.description}
                    </p>

                    {/* Extended description */}
                    <div className="text-black/60 dark:text-white/60 text-sm mt-4">
                        {benefit.extendedDescription}
                    </div>

                    {benefit.highlight && (
                        <div className="flex items-center gap-2 mt-4 p-3 rounded-lg border-l-2 border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5">
                            <Rocket className="h-4 w-4 text-black/60 dark:text-white/60" />
                            <p className="text-black/80 dark:text-white/80 text-sm font-medium">{benefit.highlight}</p>
                        </div>
                    )}

                    {/* Close instruction */}
                    <div className="flex items-center justify-center gap-1 mt-6 text-black/50 dark:text-white/50 text-sm absolute bottom-4 left-0 right-0">
                        <ChevronDown className="h-4 w-4" />
                        <span>Click to close</span>
                    </div>
                </motion.div>
                
                {/* Book shadow */}
                <div className="book-shadow"></div>
            </div>
        </motion.div>
    );
};

const BenefitsSection = () => {
    // Benefits data with content from manifest.md
    const benefits: BenefitInfo[] = [
        {
            title: "50%+ Increase in Sales-Ready Leads",
            description: "Companies using AI for lead generation have seen over 50% increases in sales-ready leads while reducing lead acquisition costs.",
            extendedDescription: "Traditional lead sourcing – manual prospecting, purchasing static contact lists, or relying on gut feeling – is being replaced by AI-driven platforms that automate discovery, enrichment, and prioritization of prospects.",
            icon: LineChart,
            categories: ["Sales", "Efficiency", "Growth"],
            stats: {
                value: "50%+",
                label: "more qualified leads"
            },
            highlight: "AI-driven lead scoring can shorten sales cycles by 30%",
            bookColor: "from-black/20 to-black/10 dark:from-white/20 dark:to-white/10"
        },
        {
            title: "60% Reduction in Lead Sourcing Costs",
            description: "Small businesses report significant cost savings when using AI-powered lead generation compared to traditional methods.",
            extendedDescription: "By leveraging AI to analyze customer data and online behavior to pinpoint the most promising prospects, small firms achieve smarter targeting and higher quality leads while drastically reducing costs.",
            icon: DollarSign,
            categories: ["Cost-Saving", "Efficiency", "Analytics"],
            stats: {
                value: "60%",
                label: "cost reduction"
            },
            highlight: "Companies using AI tools save 5+ hours per week on lead research",
            bookColor: "from-black/20 to-black/10 dark:from-white/20 dark:to-white/10"
        },
        {
            title: "74% Report Competitive Advantage",
            description: "The vast majority of small business owners believe employees using AI tools give them a significant competitive edge over peers.",
            extendedDescription: "Small business owners are taking note: 74% believe employees using AI tools give them a competitive edge over peers. This competitive advantage comes from better lead quality, faster sales cycles, and more effective outreach.",
            icon: Target,
            categories: ["Growth", "Sales", "Analytics"],
            stats: {
                value: "74%",
                label: "competitive advantage"
            },
            highlight: "Three in four small firms think AI can save time and money long-term",
            bookColor: "from-black/20 to-black/10 dark:from-white/20 dark:to-white/10"
        },
        {
            title: "Seamless Integration with Your Workflow",
            description: "Our platform integrates with the tools you already use, with 87% of small businesses already having CRM systems in place.",
            extendedDescription: "About 87% of companies with 10–100 employees use a CRM system. Our platform's bi-directional sync ensures your lead data stays fresh across all your tools, with no manual updates required.",
            icon: Briefcase,
            categories: ["Integration", "Efficiency", "Cost-Saving"],
            stats: {
                value: "87%",
                label: "of small businesses use CRMs"
            },
            highlight: "Any lead sourcing platform must play nicely with CRMs",
            bookColor: "from-black/20 to-black/10 dark:from-white/20 dark:to-white/10"
        },
        {
            title: "AI-Powered Personalization at Scale",
            description: "Generate tailored outreach for each prospect, with small businesses reporting 200% higher engagement rates.",
            extendedDescription: "Personalization at scale – such as tailoring emails or website content dynamically for each prospect – is becoming standard. Small businesses using AI have reported significantly higher engagement, for example a 200% increase in email click-through by using AI-personalized content.",
            icon: Users,
            categories: ["Sales", "Efficiency", "Growth"],
            stats: {
                value: "200%",
                label: "higher engagement rates"
            },
            highlight: "Personalized outreach has shown to increase response rates by 200%",
            bookColor: "from-black/20 to-black/10 dark:from-white/20 dark:to-white/10"
        },
        {
            title: "Enterprise Features at Small Business Prices",
            description: "Access powerful AI capabilities without the enterprise price tag that typically starts at $15,000+ per year.",
            extendedDescription: "Many advanced AI-powered sales tools are built for enterprises and come with enterprise pricing. For instance, the leading B2B data provider ZoomInfo starts around $15,000 per year for a basic plan – a price point out of reach for many startups or small firms.",
            icon: Brain,
            categories: ["Cost-Saving", "Growth", "Analytics"],
            stats: {
                value: "72%",
                label: "AI adoption by 2025"
            },
            highlight: "Democratizing AI lead sourcing with powerful features at SMB-friendly prices",
            bookColor: "from-black/20 to-black/10 dark:from-white/20 dark:to-white/10"
        }
    ];

    return (
        <section className="relative py-32 overflow-hidden bg-white dark:bg-black">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_0,rgba(0,0,0,0)_45%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,rgba(0,0,0,0)_45%)]"></div>
                <div className="absolute bottom-0 right-0 w-[70%] h-[50%] bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,0,0,0.02)_0,rgba(0,0,0,0)_50%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.02)_0,rgba(0,0,0,0)_50%)]"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-4 px-4 py-1 rounded-full bg-black/10 dark:bg-white/10 text-black dark:text-white font-medium text-sm backdrop-blur-sm border border-black/5 dark:border-white/5"
                    >
                        Small Business Advantages
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl lg:text-6xl"
                    >
                        Gain a <span className="relative inline-block">
                            <span className="relative z-10">Competitive Edge</span>
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
                        Small businesses using our AI tools report a significant advantage in lead generation and sales conversion. In fact, companies using AI for lead generation have seen <span className="font-semibold text-black dark:text-white">50%+ increases in sales-ready leads</span> and a <span className="font-semibold text-black dark:text-white">60% reduction in costs</span>.
                    </motion.p>
                </div>

                {/* Benefits grid - now with book designs */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20"
                >
                    {benefits.map((benefit) => (
                        <BenefitBook key={benefit.title} benefit={benefit} />
                    ))}
                </motion.div>

                {/* Quote section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-24 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-2xl p-10 md:p-16 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-black/5 dark:bg-white/5 rounded-full blur-3xl opacity-50"></div>
                    <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-black/5 dark:bg-white/5 rounded-full blur-3xl opacity-50"></div>

                    <div className="relative z-10 max-w-3xl mx-auto text-center">
                        <svg className="h-12 w-12 mx-auto text-black/20 dark:text-white/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
                        </svg>
                        <blockquote className="text-xl md:text-2xl font-medium text-black/80 dark:text-white/80 italic mb-6">
                            "Small firms, often limited in time and sales personnel, stand to gain a disproportionate advantage from these tools. In fact, companies using AI for lead generation have seen 50%+ increases in sales-ready leads and a 60% reduction in costs."
                        </blockquote>
                        <p className="text-black/50 dark:text-white/50">— From industry research, 2025</p>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-24 text-center"
                >
                    <div className="inline-block p-0.5 rounded-full bg-gradient-to-r from-black/20 via-black/40 to-black/20 dark:from-white/20 dark:via-white/40 dark:to-white/20">
                        <Link href="https://app.oppulence.app">
                            <button className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white dark:bg-black text-black dark:text-white font-medium hover:bg-white/95 dark:hover:bg-black/95 transition-colors shadow-xl backdrop-blur-sm">
                                Start Your Competitive Advantage
                                <svg className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </button>
                        </Link>
                    </div>
                    <p className="mt-4 text-black/50 dark:text-white/50 text-sm">
                        Join the 74% of small businesses gaining a competitive edge with AI
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default BenefitsSection; 