"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";

// Define types for better TypeScript support
type IconType = "target-audience" | "ai-search" | "analytics" | "integration" | "message";
type TagType = "AI-Powered" | "Time-Saving" | "Data-Driven" | "Integration" | "Automation" | "Cost-Effective";

interface Step {
    number: string;
    title: string;
    description: string;
    extendedDescription: string;
    icon: IconType;
    color: string;
    imageUrl: string;
    tags: TagType[];
    stats?: {
        value: string;
        label: string;
    }[];
}

// Tag badge component with variants
const tagVariants = cva(
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

const Tag = ({ type }: { type: TagType }) => (
    <span className={tagVariants({ variant: type })}>
        {type}
    </span>
);

const HowItWorks = () => {
    const steps: Step[] = [
        {
            number: "01",
            title: "Define Your Ideal Prospect",
            description: "Specify industry, company size, location, and other criteria to define your perfect customer profile.",
            extendedDescription: "Small businesses often struggle with identifying their ideal customers. Our AI-powered platform allows you to precisely define your target market based on firmographics, technographics, and behavioral data. Studies show that companies with clearly defined ICPs see 68% higher win rates.",
            icon: "target-audience",
            color: "from-gray-900/10 to-gray-800/20",
            imageUrl: "/images/how-it-works/define-prospect.svg",
            tags: ["AI-Powered", "Data-Driven"],
            stats: [
                { value: "74%", label: "of small business owners believe AI tools give them a competitive edge" },
                { value: "2x", label: "more qualified leads when using data-driven targeting" }
            ]
        },
        {
            number: "02",
            title: "AI Finds & Enriches Leads",
            description: "Our AI automatically sources and enriches leads with complete contact info, social profiles, and company data.",
            extendedDescription: "Say goodbye to manual prospecting. Our platform uses advanced AI to scan billions of data points across the web, finding prospects that match your criteria and enriching them with over 50+ data points including contact details, social profiles, technographics, and company information.",
            icon: "ai-search",
            color: "from-gray-800/10 to-gray-700/20",
            imageUrl: "/images/how-it-works/ai-enrichment.svg",
            tags: ["AI-Powered", "Time-Saving", "Data-Driven"],
            stats: [
                { value: "60%", label: "reduction in lead sourcing costs" },
                { value: "87%", label: "data accuracy with AI verification" }
            ]
        },
        {
            number: "03",
            title: "Prioritize with AI Scoring",
            description: "Machine learning models score each lead based on fit and likelihood to convert, focusing your efforts.",
            extendedDescription: "Not all leads are created equal. Our proprietary AI scoring algorithm analyzes 30+ variables to determine which leads are most likely to convert, allowing your team to focus on the highest-value opportunities. Machine learning continuously improves predictions based on your success patterns.",
            icon: "analytics",
            color: "from-gray-700/10 to-gray-600/20",
            imageUrl: "/images/how-it-works/ai-scoring.svg",
            tags: ["AI-Powered", "Data-Driven", "Automation"],
            stats: [
                { value: "30%", label: "shorter sales cycles with AI lead prioritization" },
                { value: "50%", label: "increase in sales-ready leads" }
            ]
        },
        {
            number: "04",
            title: "Connect with Your CRM",
            description: "Seamlessly push enriched leads to your CRM with bi-directional sync to keep data fresh.",
            extendedDescription: "We integrate seamlessly with popular CRMs like HubSpot, Salesforce, and Pipedrive. Bi-directional synchronization ensures your lead data is always up-to-date. With 87% of small businesses using CRM systems, our platform fits perfectly into your existing workflow.",
            icon: "integration",
            color: "from-gray-800/10 to-gray-700/20",
            imageUrl: "/images/how-it-works/crm-integration.svg",
            tags: ["Integration", "Time-Saving", "Automation"],
            stats: [
                { value: "87%", label: "of small businesses with 10-100 employees use a CRM" },
                { value: "100%", label: "data consistency with bi-directional sync" }
            ]
        },
        {
            number: "05",
            title: "Engage with AI Assistance",
            description: "Get AI-suggested personalized outreach messages and follow-up timing for maximum response.",
            extendedDescription: "Our AI analyzes successful engagement patterns to suggest personalized outreach messages and optimal follow-up timing. This level of personalization has shown to increase email response rates by 200% and conversion rates by 40% for small businesses.",
            icon: "message",
            color: "from-gray-900/10 to-gray-800/20",
            imageUrl: "/images/how-it-works/ai-engagement.svg",
            tags: ["AI-Powered", "Automation", "Time-Saving"],
            stats: [
                { value: "200%", label: "increase in email open rates with AI personalization" },
                { value: "3x", label: "faster lead engagement process" }
            ]
        }
    ];

    // Icons for each step (you can create these SVG components or use an icon library)
    const icons: Record<IconType, React.ReactNode> = {
        "target-audience": (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
            </svg>
        ),
        "ai-search": (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
        ),
        "analytics": (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
        ),
        "integration": (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34"></path>
                <path d="M3 15h10"></path>
                <path d="M20 21v-9a2 2 0 0 0-2-2h-8v11"></path>
                <path d="M12 5l3 3-3 3"></path>
            </svg>
        ),
        "message": (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                <line x1="9" y1="10" x2="15" y2="10"></line>
                <line x1="12" y1="7" x2="12" y2="13"></line>
            </svg>
        ),
    };

    // Custom animation variants for better interactions
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

    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    const statVariants = {
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

    return (
        <section className="py-32 bg-gradient-to-b from-background to-background/95 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
                <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,rgba(0,0,0,0)_45%)]"></div>
                <div className="absolute top-0 right-0 w-[70%] h-[50%] bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.02)_0,rgba(0,0,0,0)_50%)]"></div>
                <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.015)_0,rgba(0,0,0,0)_60%)]"></div>
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
                        AI-Powered Process
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
                    >
                        How It <span className="relative inline-block">
                            <span className="relative z-10">Works</span>
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
                        Our AI-powered lead sourcing platform delivers high-quality leads, saves time, and maximizes your conversion rates. Small businesses using our platform have reported a <span className="font-semibold text-foreground">50%+ increase in sales-ready leads</span> and a <span className="font-semibold text-foreground">60% reduction in lead acquisition costs</span>.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative max-w-6xl mx-auto"
                >
                    {/* Connecting line */}
                    <div className="absolute left-1/2 top-12 bottom-12 w-[2px] bg-gradient-to-b from-foreground/5 via-foreground/15 to-foreground/5 transform -translate-x-1/2 hidden lg:block rounded-full"></div>

                    <div className="space-y-32">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                variants={itemVariants}
                                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-16`}
                            >
                                <div className="w-full lg:w-1/2 text-center lg:text-left">
                                    <div className="inline-flex items-center justify-center mb-6 rounded-full bg-foreground/10 px-4 py-1 text-sm font-medium text-foreground backdrop-blur-sm border border-foreground/5">
                                        <span className="mr-2">{icons[step.icon]}</span>
                                        Step {step.number}
                                    </div>
                                    <h3 className="mb-4 text-2xl md:text-3xl font-bold text-foreground">{step.title}</h3>

                                    <motion.div
                                        variants={tagContainerVariants}
                                        className="flex flex-wrap gap-2 mb-5"
                                    >
                                        {step.tags.map((tag) => (
                                            <motion.div key={tag} variants={tagVariants}>
                                                <Tag type={tag} />
                                            </motion.div>
                                        ))}
                                    </motion.div>

                                    <p className="text-foreground/70 text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mb-6">{step.description}</p>

                                    <motion.p
                                        variants={fadeInUpVariants}
                                        className="text-foreground/60 text-base leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8"
                                    >
                                        {step.extendedDescription}
                                    </motion.p>

                                    {step.stats && (
                                        <motion.div
                                            variants={statVariants}
                                            className="grid grid-cols-2 gap-6 mt-8"
                                        >
                                            {step.stats.map((stat, i) => (
                                                <div key={i} className="bg-foreground/5 backdrop-blur-sm rounded-xl p-4 border border-foreground/5">
                                                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                                                    <p className="text-sm text-foreground/60">{stat.label}</p>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>

                                <div className="relative w-full lg:w-1/2">
                                    <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${step.color} p-8 flex items-center justify-center shadow-lg border border-foreground/5 backdrop-blur-sm`}>
                                        {/* For development, showing a placeholder. In production, use actual illustrations */}
                                        <div className="relative w-full h-full flex items-center justify-center">
                                            {/* This is where your actual illustration would go */}
                                            <div className="text-5xl font-bold text-foreground/30 flex items-center justify-center h-full">
                                                <div className="bg-foreground/5 p-10 rounded-2xl backdrop-blur-sm flex flex-col items-center gap-6 border border-foreground/10 shadow-inner">
                                                    <div className="text-foreground/80 w-16 h-16 flex items-center justify-center">
                                                        {icons[step.icon]}
                                                    </div>
                                                    <div className="w-16 h-1 bg-foreground/20 rounded-full"></div>
                                                    <span className="text-6xl font-bold text-foreground/40">{step.number}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Abstract decoration elements */}
                                        <div className="absolute -top-3 -right-3 w-20 h-20 bg-foreground/5 rounded-full blur-xl"></div>
                                        <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-foreground/3 rounded-full blur-xl"></div>

                                        {/* Design elements */}
                                        <div className="absolute top-4 right-4 w-20 h-20">
                                            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-foreground/10 opacity-20">
                                                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                                                <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" />
                                            </svg>
                                        </div>
                                        <div className="absolute bottom-4 left-4 w-20 h-20">
                                            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-foreground/10 opacity-20">
                                                <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="0.5" />
                                                <rect x="30" y="30" width="40" height="40" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Connection point */}
                                    <div className="absolute top-1/2 transform -translate-y-1/2 hidden lg:block">
                                        <div className={`${index % 2 === 0 ? "-left-3" : "-right-3"} absolute`}>
                                            <div className="w-6 h-6 rounded-full bg-foreground/80 shadow-lg flex items-center justify-center relative">
                                                <div className="w-2 h-2 rounded-full bg-background"></div>
                                                <div className="absolute -inset-2 bg-foreground/20 rounded-full animate-pulse opacity-70"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Statistics banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-32 bg-foreground/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-foreground/10"
                >
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <h4 className="text-5xl font-bold text-foreground mb-2">72%</h4>
                            <p className="text-foreground/60">AI adoption in business processes in 2025</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-5xl font-bold text-foreground mb-2">87%</h4>
                            <p className="text-foreground/60">of small businesses use CRM systems</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-5xl font-bold text-foreground mb-2">3x</h4>
                            <p className="text-foreground/60">ROI with AI-powered lead generation</p>
                        </div>
                    </div>
                </motion.div>

                {/* Testimonial - optional */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 text-center max-w-3xl mx-auto"
                >
                    <div className="mb-6">
                        <svg className="h-12 w-12 mx-auto text-foreground/30" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
                        </svg>
                    </div>
                    <blockquote className="text-xl md:text-2xl font-medium text-foreground/80 italic mb-6">
                        "74% of small business owners believe employees using AI tools give them a competitive edge over peers."
                    </blockquote>
                    <p className="text-foreground/60">U.S. Chamber of Commerce, 2025</p>
                </motion.div>

                {/* Final call-to-action */}
                <Link href="https://app.oppulence.app/login">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-24 text-center"
                    >
                        <div className="inline-block p-0.5 rounded-full bg-gradient-to-r from-foreground/20 via-foreground to-foreground/20">
                            <button className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-background text-foreground font-medium hover:bg-background/95 transition-colors shadow-xl backdrop-blur-sm">
                                Get Started Today
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <p className="mt-4 text-foreground/50 text-sm">
                            Join the 72% of businesses leveraging AI for a competitive advantage
                        </p>
                    </motion.div>
                </Link>
            </div>
        </section>
    );
};

export default HowItWorks; 