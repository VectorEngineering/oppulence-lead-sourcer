// Components
import AboutComponent from "@/components/about";
import FeatureShowcase from "@/components/hero/FeatureShowcase";
import Features from "@/components/features";
import HowItWorks from "@/components/hero/HowItWorks";
import { Metadata } from "next";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import { constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
    title: "Features | Oppulence",
    description:
        "Learn about the features of Oppulence and how they can help you grow your business.",
    canonical: "/features",
    ogImage: "/images/about-og.jpg",
});

export default function FeaturesPage() {
    return (
        <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
            <section className="mx-auto max-w-8xl">
                <Suspense fallback={<FeaturesSkeleton />}>
                    <FeatureShowcase />
                </Suspense>
            </section>
        </main>
    );
}

function FeaturesSkeleton() {
    return (
        <div className="relative py-32 space-y-40">
            {/* Background effect */}
            <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
                <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-r from-gray-50/5 to-transparent"></div>
            </div>

            {/* Header skeleton */}
            <div className="container mx-auto px-4 sm:px-6 relative">
                <div className="flex flex-col items-center space-y-6 mb-24">
                    <div className="h-8 w-40 rounded-full bg-foreground/5 animate-pulse"></div>
                    <Skeleton className="h-14 w-3/4 md:w-1/2 rounded-lg" />
                    <Skeleton className="h-6 w-full max-w-2xl rounded-lg" />
                    <Skeleton className="h-6 w-2/3 max-w-2xl rounded-lg" />
                </div>

                {/* Features skeletons */}
                <div className="space-y-40">
                    {[...Array(5)].map((_, idx) => (
                        <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`}>
                            <div className="w-full lg:w-1/2 space-y-6 p-4">
                                {/* Tags skeleton */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <div className="h-6 w-20 rounded-full bg-foreground/5 animate-pulse"></div>
                                    <div className="h-6 w-24 rounded-full bg-foreground/5 animate-pulse"></div>
                                    <div className="h-6 w-16 rounded-full bg-foreground/5 animate-pulse"></div>
                                </div>

                                {/* Title and description skeletons */}
                                <Skeleton className="h-10 w-4/5 rounded-lg" />
                                <Skeleton className="h-5 w-full rounded-lg" />
                                <Skeleton className="h-5 w-full rounded-lg" />
                                <Skeleton className="h-5 w-3/4 rounded-lg" />

                                {/* Quote/extended description skeleton */}
                                <div className="p-4 bg-foreground/5 rounded-lg border border-foreground/10 mt-8 space-y-3">
                                    <Skeleton className="h-4 w-full rounded-lg" />
                                    <Skeleton className="h-4 w-full rounded-lg" />
                                    <Skeleton className="h-4 w-4/5 rounded-lg" />
                                </div>

                                {/* Highlight skeleton */}
                                <div className="flex items-center gap-2 mt-8 bg-foreground/5 p-3 rounded-lg border-l-2 border-foreground/10">
                                    <div className="h-5 w-5 rounded-full bg-foreground/10 animate-pulse"></div>
                                    <Skeleton className="h-5 w-4/5 rounded-lg" />
                                </div>

                                {/* Stats skeleton */}
                                <div className="grid grid-cols-2 gap-6 mt-8">
                                    {[...Array(2)].map((_, i) => (
                                        <div key={i} className="bg-foreground/5 backdrop-blur-sm rounded-xl p-4 border border-foreground/5">
                                            <Skeleton className="h-8 w-16 rounded-lg mb-2" />
                                            <Skeleton className="h-4 w-full rounded-lg" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Media skeleton */}
                            <div className="w-full lg:w-1/2 aspect-video rounded-2xl bg-foreground/5 border border-foreground/10 overflow-hidden shadow-md">
                                <div className="w-full h-full bg-gradient-to-br from-foreground/5 to-foreground/10 animate-pulse"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Feature Breakdown skeleton */}
                <div className="mt-40">
                    <div className="text-center mb-16 space-y-4">
                        <Skeleton className="h-10 w-1/3 mx-auto rounded-lg" />
                        <Skeleton className="h-5 w-2/3 mx-auto rounded-lg" />
                    </div>

                    <div className="space-y-24">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="bg-foreground/5 border border-foreground/10 rounded-2xl overflow-hidden">
                                <div className="p-8 border-b border-foreground/10">
                                    <Skeleton className="h-8 w-2/5 rounded-lg mb-3" />
                                    <Skeleton className="h-5 w-4/5 rounded-lg" />
                                </div>

                                <div className="p-8 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                    {[...Array(6)].map((_, j) => (
                                        <div key={j} className="space-y-3">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-foreground/10 animate-pulse"></div>
                                                <Skeleton className="h-5 w-3/4 rounded-lg" />
                                            </div>
                                            <Skeleton className="h-4 w-full rounded-lg" />
                                            <Skeleton className="h-4 w-full rounded-lg" />
                                            <Skeleton className="h-4 w-4/5 rounded-lg" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats banner skeleton */}
                <div className="mt-32 bg-foreground/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-foreground/10">
                    <Skeleton className="h-8 w-1/3 mx-auto mb-8 rounded-lg" />
                    <div className="grid md:grid-cols-3 gap-8">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="text-center">
                                <Skeleton className="h-10 w-20 mx-auto mb-2 rounded-lg" />
                                <Skeleton className="h-5 w-4/5 mx-auto rounded-lg" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA skeleton */}
                <div className="mt-32 text-center">
                    <div className="inline-block p-0.5 rounded-full bg-gradient-to-r from-foreground/10 via-foreground/20 to-foreground/10">
                        <div className="px-8 py-4 rounded-full bg-background w-64 h-14 animate-pulse"></div>
                    </div>
                    <Skeleton className="h-4 w-64 mx-auto mt-4 rounded-lg" />
                </div>
            </div>
        </div>
    );
}
