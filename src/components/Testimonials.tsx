'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
    const reviews = [
        {
            text: "Your work is outstanding. The attention to detail on our new stone-coated roof was impressive. highly recommended!",
            author: "Mutiat M.",
            role: "Homeowner, Ikeja"
        },
        {
            text: "Thanks for the effective job on the warehouse roofing. Professional team and completed right on schedule.",
            author: "Lawal K.",
            role: "Business Owner, Lekki"
        }
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [reviews.length]);

    return (
        <section id="reviews" className="bg-[var(--color-charcoal-light)] py-20 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary-gold)]/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-white mb-12">What Our Clients Say</h2>

                <div className="relative max-w-3xl mx-auto min-h-[250px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className="px-4"
                        >
                            <div className="flex justify-center mb-6 text-[var(--color-primary-gold)]">
                                {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
                            </div>

                            <Quote size={48} className="mx-auto text-[var(--color-charcoal-dark)] mb-6 opacity-50" />

                            <p className="text-xl md:text-2xl text-white font-light italic mb-8 leading-normal">
                                &quot;{reviews[current].text}&quot;
                            </p>

                            <div>
                                <h4 className="text-[var(--color-primary-gold)] font-bold text-lg">{reviews[current].author}</h4>
                                <div className="text-gray-500 text-sm">{reviews[current].role}</div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {reviews.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${current === idx ? 'bg-[var(--color-primary-gold)] w-8' : 'bg-gray-600'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
