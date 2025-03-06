import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

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
        quote:
            "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
    },
    {
        quote: "Your most unhappy customers are your greatest source of learning.",
        author: "Bill Gates",
    },
    {
        quote:
            "If you're not embarrassed by the first version of your product, you've launched too late.",
        author: "Reid Hoffman",
    },
    {
        quote: "Stay hungry, stay foolish.",
        author: "Steve Jobs",
    },
    {
        quote:
            "The best time to plant a tree was 20 years ago. The second best time is now.",
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
        quote:
            "Chase the vision, not the money. The money will end up following you.",
        author: "Tony Hsieh",
    },
    {
        quote: "The harder you work, the luckier you get.",
        author: "Gary Player",
    },
    {
        quote:
            "Success usually comes to those who are too busy to be looking for it.",
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
            &ldquo;{quote}&ldquo;
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
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
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

export default QuoteCarousel; 