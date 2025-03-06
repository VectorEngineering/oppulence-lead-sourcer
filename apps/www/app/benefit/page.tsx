// Components
import AboutComponent from "@/components/about";
import BenefitsSection from "@/components/hero/BenefitsSection";
import FeatureShowcase from "@/components/hero/FeatureShowcase";
import Features from "@/components/features";
import HowItWorks from "@/components/hero/HowItWorks";
import { Metadata } from "next";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import { constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
    title: "Benefits | Oppulence",
    description:
        "Learn about the benefits of Oppulence and how it can help you grow your business.",
    canonical: "/benefit",
    ogImage: "/images/about-og.jpg",
});

export default function BenefitPage() {
    return (
        <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
            <section className="mx-auto max-w-8xl">
                <Suspense fallback={<BenefitSkeleton />}>
                    <BenefitsSection />
                </Suspense>
            </section>
        </main>
    );
}

function BenefitSkeleton() {
    return (
        <div className="relative py-32 bg-white dark:bg-black space-y-24">
            {/* Background effect */}
            <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
                <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_0,rgba(0,0,0,0)_45%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,rgba(0,0,0,0)_45%)]"></div>
                <div className="absolute bottom-0 right-0 w-[70%] h-[50%] bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,0,0,0.02)_0,rgba(0,0,0,0)_50%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.02)_0,rgba(0,0,0,0)_50%)]"></div>
            </div>

            {/* Header skeleton */}
            <div className="container mx-auto px-4 sm:px-6 relative">
                <div className="flex flex-col items-center space-y-6 mb-16">
                    <div className="h-8 w-40 rounded-full bg-black/10 dark:bg-white/10 animate-pulse"></div>
                    <Skeleton className="h-14 w-3/4 md:w-1/2 rounded-lg" />
                    <Skeleton className="h-6 w-full max-w-2xl rounded-lg" />
                    <Skeleton className="h-6 w-2/3 max-w-2xl rounded-lg" />
                </div>

                {/* Books grid skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
                    {[...Array(6)].map((_, idx) => (
                        <div key={idx} className="h-[450px] relative perspective-1000">
                            {/* Book spine skeleton */}
                            <div className="book-spine animate-pulse"></div>

                            {/* Book page edge - randomly show on some books */}
                            {idx % 3 === 0 && <div className="book-page-edge"></div>}

                            {/* Book cover skeleton */}
                            <div className="book-cover p-6 flex flex-col justify-between">
                                {/* Icon skeleton */}
                                <div>
                                    <div className="mb-6 p-4 w-14 h-14 rounded-xl bg-black/5 dark:bg-white/5 animate-pulse"></div>

                                    {/* Title skeleton */}
                                    <Skeleton className="h-7 w-4/5 rounded-lg mb-3" />

                                    {/* Description skeleton */}
                                    <Skeleton className="h-4 w-full rounded-lg mb-1" />
                                    <Skeleton className="h-4 w-full rounded-lg mb-1" />
                                    <Skeleton className="h-4 w-4/5 rounded-lg mb-5" />
                                </div>

                                {/* Stats badge skeleton */}
                                <div>
                                    <div className="inline-flex items-center gap-2 rounded-lg bg-black/5 dark:bg-white/5 px-3 py-1.5 animate-pulse">
                                        <div className="h-6 w-16 rounded-lg"></div>
                                        <div className="h-4 w-24 rounded-lg"></div>
                                    </div>

                                    {/* Open instruction skeleton */}
                                    <div className="flex items-center justify-center gap-1 mt-3 animate-pulse">
                                        <div className="w-4 h-4 rounded-full bg-black/50 dark:bg-white/50"></div>
                                        <div className="h-3 w-20 bg-black/50 dark:bg-white/50 rounded-md"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Book shadow effect */}
                            <div className="book-shadow"></div>
                        </div>
                    ))}
                </div>

                {/* Quote section skeleton */}
                <div className="mt-24 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-2xl p-10 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-black/5 dark:bg-white/5 rounded-full blur-3xl opacity-50"></div>
                    <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-black/5 dark:bg-white/5 rounded-full blur-3xl opacity-50"></div>

                    <div className="relative z-10 max-w-3xl mx-auto text-center">
                        <div className="h-12 w-12 mx-auto bg-black/20 dark:bg-white/20 rounded-full mb-6 animate-pulse"></div>
                        <Skeleton className="h-6 w-full rounded-lg mb-2" />
                        <Skeleton className="h-6 w-full rounded-lg mb-2" />
                        <Skeleton className="h-6 w-4/5 mx-auto rounded-lg mb-6" />
                        <Skeleton className="h-4 w-32 mx-auto rounded-lg" />
                    </div>
                </div>

                {/* CTA skeleton */}
                <div className="mt-24 text-center">
                    <div className="inline-block p-0.5 rounded-full bg-gradient-to-r from-black/20 via-black/40 to-black/20 dark:from-white/20 dark:via-white/40 dark:to-white/20">
                        <div className="px-8 py-4 rounded-full bg-white dark:bg-black w-72 h-14 animate-pulse"></div>
                    </div>
                    <Skeleton className="h-4 w-64 mx-auto mt-4 rounded-lg" />
                </div>
            </div>
        </div>
    );
}
