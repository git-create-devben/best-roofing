'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden flex flex-col">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.png"
                    alt="Luxury Home with Stone Coated Roof"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
            </div>

            {/* Navigation */}
            <nav className="relative z-20 container mx-auto px-6 py-6 flex justify-between items-center text-white">
                <div className="text-2xl font-bold tracking-tighter">
                    <span className="text-[var(--color-primary-gold)]">BEST</span> ROOFING
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
                    <a href="#services" className="hover:text-[var(--color-primary-gold)] transition-colors">SERVICES</a>
                    <a href="#trust" className="hover:text-[var(--color-primary-gold)] transition-colors">WHY US</a>
                    <a href="#reviews" className="hover:text-[var(--color-primary-gold)] transition-colors">REVIEWS</a>
                    <a href="#contact" className="hover:text-[var(--color-primary-gold)] transition-colors">CONTACT</a>
                </div>

                {/* Mobile Nav Toggle */}
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="absolute inset-0 z-30 bg-black/95 flex flex-col items-center justify-center gap-8 text-xl font-medium text-white md:hidden">
                    <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
                    <a href="#trust" onClick={() => setIsMenuOpen(false)}>Why Us</a>
                    <a href="#reviews" onClick={() => setIsMenuOpen(false)}>Reviews</a>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
                    <button className="absolute top-6 right-6" onClick={() => setIsMenuOpen(false)}>
                        <X size={24} />
                    </button>
                </div>
            )}

            {/* Hero Content */}
            <div className="relative z-10 flex-1 flex items-center container mx-auto px-6">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block bg-[var(--color-primary-gold)] text-black font-bold text-xs md:text-sm px-4 py-2 rounded-full mb-6 tracking-wide"
                    >
                        TRUSTED BY HOMEOWNERS IN LEKKI, IKEJA & VICTORIA ISLAND
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                    >
                        Premium Roofing for <span className="text-[var(--color-primary-gold)]">Modern Nigerian</span> Homes.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed border-l-4 border-[var(--color-primary-gold)] pl-6 max-w-2xl bg-black/30 backdrop-blur-sm py-4 pr-4 rounded-r-lg"
                    >
                        We install original Stone-coated, Longspan Aluminium, and Step-tile roofs guaranteed to withstand Lagos rain and heat for 50 years.
                    </motion.p>


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='flex flex-col sm:flex-row gap-4'
                    >
                        <Button variant="primary" onClick={() => window.location.href = 'tel:09020069988'}>
                            Get a Free Quote Today
                        </Button>
                        <Button variant="outline" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                            Our Services
                        </Button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
