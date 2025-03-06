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
    "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium gap-1.5 transition-all duration-300 shadow-sm",
    {
        variants: {
            variant: {
                "AI-Powered": "bg-gradient-to-r from-blue-500/20 to-blue-500/20 text-blue-600 dark:text-blue-300 border border-blue-500/30 hover:shadow-blue-500/10 hover:scale-105",
                "Time-Saving": "bg-gradient-to-r from-blue-500/20 to-blue-500/20 text-blue-600 dark:text-blue-300 border border-blue-500/30 hover:shadow-blue-500/10 hover:scale-105",
                "Data-Driven": "bg-gradient-to-r from-blue-500/20 to-blue-500/20 text-blue-600 dark:text-blue-300 border border-blue-500/30 hover:shadow-blue-500/10 hover:scale-105",
                "Integration": "bg-gradient-to-r from-blue-500/20 to-blue-500/20 text-blue-600 dark:text-blue-300 border border-blue-500/30 hover:shadow-blue-500/10 hover:scale-105",
                "Automation": "bg-gradient-to-r from-blue-500/20 to-blue-500/20 text-blue-600 dark:text-blue-300 border border-blue-500/30 hover:shadow-blue-500/10 hover:scale-105",
                "Cost-Effective": "bg-gradient-to-r from-blue-500/20 to-blue-500/20 text-blue-600 dark:text-blue-300 border border-blue-500/30 hover:shadow-blue-500/10 hover:scale-105",
            },
        },
        defaultVariants: {
            variant: "AI-Powered",
        },
    }
);

// Enhanced Tag component with appropriate icons for each type
const Tag = ({ type }: { type: TagType }) => {
    // Icons for each tag type
    const tagIcons = {
        "AI-Powered": (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                <path d="M13.5 4.938a7 7 0 0 1 1.5 4.312m0 0a7 7 0 0 1-14 0m14 0a7 7 0 0 0-14 0m14 0-1 1.5m-13 0 1 1.5m13-3-1-1.5m-13 0 1-1.5M6.75 7A.75.75 0 0 1 7.5 7.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 6.75 7Zm4 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10.75 7Z" />
            </svg>
        ),
        "Time-Saving": (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z" clipRule="evenodd" />
            </svg>
        ),
        "Data-Driven": (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                <path d="M15.5 2A1.5 1.5 0 0 0 14 3.5v13a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 16.5 2h-1ZM9.5 6A1.5 1.5 0 0 0 8 7.5v9A1.5 1.5 0 0 0 9.5 18h1a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 10.5 6h-1ZM3.5 10A1.5 1.5 0 0 0 2 11.5v5A1.5 1.5 0 0 0 3.5 18h1A1.5 1.5 0 0 0 6 16.5v-5A1.5 1.5 0 0 0 4.5 10h-1Z" />
            </svg>
        ),
        "Integration": (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                <path fillRule="evenodd" d="M1 2.75A.75.75 0 0 1 1.75 2h16.5a.75.75 0 0 1 0 1.5H18v8.75A2.75 2.75 0 0 1 15.25 15h-1.072l.798 3.06a.75.75 0 0 1-1.452.38L12.6 15H7.4l-.924 3.44a.75.75 0 0 1-1.452-.38L5.823 15H4.75A2.75 2.75 0 0 1 2 12.25V3.5h-.25A.75.75 0 0 1 1 2.75ZM7.373 15l-.391 1.464h6.037l-.392-1.464H7.373ZM13.25 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Zm-6.5 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 6.75 9Z" clipRule="evenodd" />
            </svg>
        ),
        "Automation": (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                <path fillRule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h11.5A2.25 2.25 0 0 1 18 4.25v8.5A2.25 2.25 0 0 1 15.75 15h-3.105a3.501 3.501 0 0 0 1.1 1.677A.75.75 0 0 1 13.26 18H6.74a.75.75 0 0 1-.484-1.323A3.501 3.501 0 0 0 7.355 15H4.25A2.25 2.25 0 0 1 2 12.75v-8.5Zm1.5 0a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 0 0 1.5h2.5v.25a.75.75 0 0 1-.75.75h-11.5a.75.75 0 0 1-.75-.75v-.25h2.5a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 1-.75-.75v-7.5Z" clipRule="evenodd" />
            </svg>
        ),
        "Cost-Effective": (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                <path fillRule="evenodd" d="M10 1c-1.828 0-3.623.149-5.371.435a.75.75 0 0 0-.629.74v.387c-.827.157-1.642.345-2.445.564a.75.75 0 0 0-.552.698 5 5 0 0 0 4.503 5.152 6 6 0 0 0 2.946 1.822A6.451 6.451 0 0 0 7.768 13H7.5A1.5 1.5 0 0 0 6 14.5V17h-.75C4.56 17 4 17.56 4 18.25c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75c0-.69-.56-1.25-1.25-1.25H14v-2.5a1.5 1.5 0 0 0-1.5-1.5h-.268a6.453 6.453 0 0 0-.684-2.202 6 6 0 0 0 2.946-1.822 5 5 0 0 0 4.503-5.152.75.75 0 0 0-.552-.698A31.804 31.804 0 0 0 16 2.562v-.387a.75.75 0 0 0-.629-.74A33.227 33.227 0 0 0 10 1ZM2.525 4.422C3.012 4.3 3.504 4.19 4 4.09V5c0 .74.134 1.448.38 2.103a3.503 3.503 0 0 1-1.855-2.68Zm14.95 0a3.503 3.503 0 0 1-1.854 2.68C15.866 6.449 16 5.74 16 5v-.91c.496.099.988.21 1.475.332Z" clipRule="evenodd" />
            </svg>
        ),
    };

    return (
        <span className={tagVariants({ variant: type })}>
            {tagIcons[type]}
            {type}
        </span>
    );
};

const HowItWorks = () => {
    const steps: Step[] = [
        {
            number: "01",
            title: "Competitive Edge for Small Businesses",
            description: "AI is transforming how small businesses find and nurture sales leads with automated discovery and prioritization.",
            extendedDescription: "Small firms, often limited in time and sales personnel, stand to gain a disproportionate advantage from these tools. Companies using AI for lead generation have seen over 50% increases in sales-ready leads and a 60% reduction in costs. In fact, 74% of small business owners believe employees using AI tools give them a competitive edge over peers.",
            icon: "target-audience",
            color: "from-blue-500/20 to-blue-600/10",
            imageUrl: "/images/how-it-works/define-prospect.svg",
            tags: ["AI-Powered", "Data-Driven"],
            stats: [
                { value: "74%", label: "of small business owners believe AI tools give them a competitive edge" },
                { value: "60%", label: "reduction in lead sourcing costs" }
            ]
        },
        {
            number: "02",
            title: "Data-Driven Intelligence",
            description: "The lead generation landscape is shifting from manual list building to automated, data-driven strategies.",
            extendedDescription: "The lead generation landscape is undergoing a seismic shift away from manual list building and cold calls toward data-driven, automated strategies. Instead of relying on gut instinct or generic campaigns, companies are leveraging AI to analyze customer data and online behavior to pinpoint the most promising prospects.",
            icon: "ai-search",
            color: "from-blue-500/20 to-blue-600/10",
            imageUrl: "/images/how-it-works/ai-enrichment.svg",
            tags: ["AI-Powered", "Time-Saving", "Data-Driven"],
            stats: [
                { value: "50%", label: "increase in sales-ready leads" },
                { value: "87%", label: "data accuracy with AI verification" }
            ]
        },
        {
            number: "03",
            title: "AI-Powered Predictive Analytics",
            description: "AI identifies prospects before they raise their hand by spotting intent signals that correlate with buying interest.",
            extendedDescription: "AI-powered predictive analytics can identify prospects before they even raise their hand, by spotting intent signals or patterns that correlate with buying interest. Small businesses benefit by focusing their limited sales resources on leads most likely to convert, rather than exhausting effort on unqualified contacts.",
            icon: "analytics",
            color: "from-blue-500/20 to-blue-500/10",
            imageUrl: "/images/how-it-works/ai-scoring.svg",
            tags: ["AI-Powered", "Data-Driven", "Automation"],
            stats: [
                { value: "30%", label: "shorter sales cycles with AI lead prioritization" },
                { value: "2x", label: "more qualified leads when using data-driven targeting" }
            ]
        },
        {
            number: "04",
            title: "Seamless CRM Integration",
            description: "About 87% of small businesses use CRM systems as the heart of their sales operations.",
            extendedDescription: "About 87% of companies with 10–100 employees use a CRM system as the heart of their sales operations. Any lead sourcing platform must play nicely with CRMs. Businesses want new leads flowing directly into their CRM, and updates like lead scores or contact enrichments syncing automatically.",
            icon: "integration",
            color: "from-blue-500/20 to-blue-500/10",
            imageUrl: "/images/how-it-works/crm-integration.svg",
            tags: ["Integration", "Time-Saving", "Automation"],
            stats: [
                { value: "87%", label: "of small businesses with 10-100 employees use a CRM" },
                { value: "100%", label: "data consistency with bi-directional sync" }
            ]
        },
        {
            number: "05",
            title: "Enhanced Lead Engagement",
            description: "Our platform integrates seamlessly with popular CRMs to streamline lead generation end-to-end.",
            extendedDescription: "Our platform integrates seamlessly with popular CRMs (like HubSpot, Pipedrive, Zoho) to fit into existing workflows. The result is a platform that streamlines lead generation end-to-end, making it the AI-powered growth engine for small businesses. With machine learning-based lead scoring and intent modeling, we help you identify and prioritize hot prospects.",
            icon: "message",
            color: "from-blue-500/20 to-blue-500/10",
            imageUrl: "/images/how-it-works/ai-engagement.svg",
            tags: ["AI-Powered", "Automation", "Time-Saving"],
            stats: [
                { value: "200%", label: "increase in email open rates with AI personalization" },
                { value: "3x", label: "faster lead engagement process" }
            ]
        }
    ];

    // Icons for each step with enhanced colors
    const getIconColor = (step: Step) => {
        return "text-blue-500 dark:text-blue-400";
    };

    const icons: Record<IconType, (step: Step) => React.ReactNode> = {
        "target-audience": (step) => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 ${getIconColor(step)}`}>
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
            </svg>
        ),
        "ai-search": (step) => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 ${getIconColor(step)}`}>
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
        ),
        "analytics": (step) => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 ${getIconColor(step)}`}>
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
        ),
        "integration": (step) => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 ${getIconColor(step)}`}>
                <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34"></path>
                <path d="M3 15h10"></path>
                <path d="M20 21v-9a2 2 0 0 0-2-2h-8v11"></path>
                <path d="M12 5l3 3-3 3"></path>
            </svg>
        ),
        "message": (step) => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 ${getIconColor(step)}`}>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                <line x1="9" y1="10" x2="15" y2="10"></line>
                <line x1="12" y1="7" x2="12" y2="13"></line>
            </svg>
        ),
    };

    // Get title gradient color based on step
    const getTitleColor = (index: number) => {
        return "bg-gradient-to-r from-black to-black bg-clip-text text-transparent";
    };

    // Get stat box color based on step
    const getStatBgColor = (index: number) => {
        return "bg-gradient-to-br from-blue-50/90 to-blue-100/30 dark:from-blue-950/20 dark:to-blue-900/10 border-blue-200/30 dark:border-blue-800/30";
    };

    // Get stat value color based on step
    const getStatValueColor = (index: number) => {
        return "text-blue-600 dark:text-blue-400";
    };

    // Get number color based on step
    const getNumberColor = (index: number) => {
        return "text-blue-600/80 dark:text-blue-400/80";
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
        <section className="py-32 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
                <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0,rgba(0,0,0,0)_45%)]"></div>
                <div className="absolute top-0 right-0 w-[70%] h-[50%] bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.02)_0,rgba(0,0,0,0)_50%)]"></div>
                <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.015)_0,rgba(0,0,0,0)_60%)]"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-500/10 text-white font-medium text-sm backdrop-blur-sm border border-blue-500/20"
                    >
                        AI-Powered Lead Sourcing
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
                    >
                        For <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Small Businesses</span>
                            <span className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-500/20 to-blue-500/20 -z-10 transform skew-x-12"></span>
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mx-auto max-w-3xl text-lg md:text-xl text-white/70 leading-relaxed"
                    >
                        Artificial intelligence is rapidly transforming how small businesses find and nurture sales leads. Traditional lead sourcing is being replaced by AI-driven platforms that automate discovery, enrichment, and prioritization of prospects. Companies using AI for lead generation have seen a <span className="font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">50%+ increase in sales-ready leads</span> and a <span className="font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">60% reduction in costs</span>.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative max-w-6xl mx-auto"
                >
                    {/* Connecting line with gradient */}
                    <div className="absolute left-1/2 top-12 bottom-12 w-[3px] bg-gradient-to-b from-blue-500/20 via-blue-500/30 to-blue-400/20 transform -translate-x-1/2 hidden lg:block rounded-full"></div>

                    <div className="space-y-32">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                variants={itemVariants}
                                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-16`}
                            >
                                <div className="w-full lg:w-1/2 text-center lg:text-left">
                                    <div className={`inline-flex items-center justify-center mb-6 rounded-full bg-background px-4 py-1 text-sm font-medium backdrop-blur-sm border border-blue-500/20`}>
                                        <span className="mr-2">{icons[step.icon](step)}</span>
                                        <span className={getNumberColor(index)}>Step {step.number}</span>
                                    </div>
                                    <h3 className={`mb-4 text-2xl md:text-3xl font-bold ${getTitleColor(index)}`}>{step.title}</h3>

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

                                    <p className="text-white/70 text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mb-6">{step.description}</p>

                                    <motion.p
                                        variants={fadeInUpVariants}
                                        className="text-white/60 text-base leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8"
                                    >
                                        {step.extendedDescription}
                                    </motion.p>

                                    {step.stats && (
                                        <motion.div
                                            variants={statVariants}
                                            className="grid grid-cols-2 gap-6 mt-8"
                                        >
                                            {step.stats.map((stat, i) => (
                                                <div
                                                    key={i}
                                                    className={`rounded-xl p-4 border border-blue-500/30 backdrop-blur-sm shadow-sm bg-gradient-to-br from-white to-blue-900/20`}
                                                >
                                                    <p className={`text-2xl font-bold text-blue-400`}>{stat.value}</p>
                                                    <p className="text-sm text-white/60">{stat.label}</p>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>

                                <div className="relative w-full lg:w-1/2">
                                    <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-900/30 to-background p-8 flex items-center justify-center shadow-lg border border-blue-500/20 backdrop-blur-sm`}>
                                        {/* For development, showing a placeholder. In production, use actual illustrations */}
                                        <div className="relative w-full h-full flex items-center justify-center">
                                            {/* This is where your actual illustration would go */}
                                            <div className="text-5xl font-bold text-white/30 flex items-center justify-center h-full">
                                                <div className={`bg-blue-900/20 p-10 rounded-2xl backdrop-blur-sm flex flex-col items-center gap-6 border border-blue-500/20 shadow-inner`}>
                                                    <div className={`w-16 h-16 flex items-center justify-center text-blue-400`}>
                                                        {icons[step.icon](step)}
                                                    </div>
                                                    <div className={`w-16 h-1 bg-gradient-to-r from-blue-500/50 to-blue-500/20 rounded-full`}></div>
                                                    <span className={`text-6xl font-bold text-blue-400/80`}>{step.number}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Abstract decoration elements with matching colors */}
                                        <div className={`absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-blue-500/30 to-blue-600/10 rounded-full blur-xl opacity-60`}></div>
                                        <div className={`absolute -bottom-5 -left-5 w-24 h-24 bg-gradient-to-tr from-blue-500/30 to-blue-600/10 rounded-full blur-xl opacity-40`}></div>

                                        {/* Design elements */}
                                        <div className="absolute top-4 right-4 w-20 h-20">
                                            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-full text-blue-400 opacity-20`}>
                                                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                                                <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" />
                                            </svg>
                                        </div>
                                        <div className="absolute bottom-4 left-4 w-20 h-20">
                                            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-full text-blue-400 opacity-20`}>
                                                <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="0.5" />
                                                <rect x="30" y="30" width="40" height="40" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Connection point with colored glow */}
                                    <div className="absolute top-1/2 transform -translate-y-1/2 hidden lg:block">
                                        <div className={`${index % 2 === 0 ? "-left-3" : "-right-3"} absolute`}>
                                            <div className={`w-6 h-6 rounded-full text-blue-400 shadow-lg flex items-center justify-center relative`}>
                                                <div className="w-2 h-2 rounded-full bg-white"></div>
                                                <div className={`absolute -inset-2 from-blue-500/30 to-blue-600/10 rounded-full animate-pulse opacity-70`}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Statistics banner with gradients */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-32 bg-gradient-to-r from-blue-900/30 to-blue-800/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-blue-500/20"
                >
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <h4 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">74%</h4>
                            <p className="text-white/60">of small business owners believe AI tools give them a competitive edge</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">87%</h4>
                            <p className="text-white/60">of small businesses use CRM systems</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">50%</h4>
                            <p className="text-white/60">increase in sales-ready leads with AI</p>
                        </div>
                    </div>
                </motion.div>

                {/* Testimonial with gradients */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 text-center max-w-3xl mx-auto"
                >
                    <div className="mb-6">
                        <svg className="h-12 w-12 mx-auto text-blue-500/40" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
                        </svg>
                    </div>
                    <blockquote className="text-xl md:text-2xl font-medium italic mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                        "Small firms, often limited in time and sales personnel, stand to gain a disproportionate advantage from AI-powered lead generation tools."
                    </blockquote>
                    <p className="text-white/60">AI Lead Sourcing Trends, 2025</p>
                </motion.div>

                {/* Final call-to-action with enhanced gradient */}
                <Link href="/contact">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-24 text-center"
                    >
                        <div className="inline-block p-0.5 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                            <button className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-background text-white font-medium hover:bg-black/95 transition-colors shadow-xl backdrop-blur-sm group">
                                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent group-hover:text-transparent">Get Started Today</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-blue-500 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <p className="mt-4 text-white/50 text-sm">
                            Join the <span className="text-blue-400">74%</span> of small businesses leveraging AI for a competitive advantage
                        </p>
                    </motion.div>
                </Link>
            </div>
        </section>
    );
};

export default HowItWorks; 