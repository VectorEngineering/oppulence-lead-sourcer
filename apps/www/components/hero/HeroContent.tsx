import { ArrowRight, Briefcase, Rocket, Shield, Target, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import PearDarkHeroLogo from "@/components/ui/PearDarkHeroLogo.svg";
import PearHeroLogo from "@/components/ui/PearHeroLogo.svg";
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

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

const HeroContent = () => {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    const features = [
        { icon: Shield, text: "AI-Driven Data Enrichment" },
        { icon: Rocket, text: "Intelligent Lead Scoring" },
        { icon: Briefcase, text: "Seamless CRM Integration" },
        { icon: Target, text: "Predictive Lead Analytics" },
        { icon: Zap, text: "Automated Outreach Assistance" },
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
                    <PearDarkHeroLogo
                        width="48"
                        height="48"
                        alt="Pear Logo"
                        className="mx-auto"
                    />
                ) : (
                    <PearHeroLogo
                        width="48"
                        height="48"
                        alt="Pear Logo"
                        className="mx-auto"
                    />
                )}
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl"
            >
                <span className="block sm:inline">AI-Powered Lead Sourcing </span>
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    For Small Businesses
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mx-auto mb-8 max-w-2xl text-base text-foreground/70 sm:text-lg"
            >
                Your intelligent lead generation platform. Discover high-quality prospects,
                automate data enrichment, and leverage AI-driven insights—all while reducing costs
                by 60% and increasing sales-ready leads by over 50%.
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
                            <span>Transform Your Lead Generation</span>
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default HeroContent; 