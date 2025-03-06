import { Briefcase, Rocket, Target } from "lucide-react";

import React from "react";
import { motion } from "framer-motion";

const BenefitsSection = () => (
    <section className="container mx-auto py-24">
        <div className="mb-12 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
                Gain a <span className="text-primary">Competitive Edge</span>
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mx-auto max-w-2xl text-foreground/70"
            >
                Small businesses using our AI tools report a significant advantage in lead generation and sales conversion.
            </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
                {
                    title: "50%+ More Sales-Ready Leads",
                    description: "AI-powered prospecting identifies qualified leads that traditional methods miss.",
                    icon: Target,
                },
                {
                    title: "60% Reduction in Costs",
                    description: "Automate manual prospecting tasks and eliminate the need for expensive data providers.",
                    icon: Briefcase,
                },
                {
                    title: "74% Gain Competitive Edge",
                    description: "Small business owners report AI tools give them an edge against competitors.",
                    icon: Rocket,
                },
            ].map((benefit, index) => (
                <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex flex-col rounded-xl border border-foreground/5 bg-background/60 p-6 shadow-sm backdrop-blur-md"
                >
                    <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-foreground/70">{benefit.description}</p>
                </motion.div>
            ))}
        </div>
    </section>
);

export default BenefitsSection; 