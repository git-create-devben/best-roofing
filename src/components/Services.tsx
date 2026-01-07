'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useBusinessName } from './BusinessNameProvider';

export default function Services() {
    const businessName = useBusinessName();
    const services = [
        {
            title: "New Roof Installation",
            desc: "Expert installation of Stone-coated, Longspan, and Step-tile roofing systems with premium finishes.",
            image: "/images/service-installation.png"
        },
        {
            title: "Roof Restoration",
            desc: "Complete restoration of old roofs. We wash, seal, and recoat fading stone-coated tiles to look brand new.",
            image: "/images/service-repair.png"
        },
        {
            title: "Material Supply",
            desc: "Direct import and supply of authentic roofing sheets. We supply to contractors and home owners nationwide.",
            image: "/images/service-commercial.png" // Placeholder
        }
    ];

    return (
        <section id="services" className="bg-[var(--color-charcoal-dark)] py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Services by <span className="text-[var(--color-primary-gold)]">{businessName}</span></h2>
                    <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
                        We deliver top-tier roofing expertise tailored to the unique climate and architectural needs of Nigeria.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[var(--color-charcoal-light)] rounded-sm overflow-hidden group hover:shadow-2xl hover:shadow-yellow-900/10 transition-all duration-300"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                            </div>
                            <div className="p-6 md:p-8 border-b-2 border-transparent group-hover:border-[var(--color-primary-gold)] transition-colors">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-primary-gold)] transition-colors">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed mb-4">{service.desc}</p>
                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="text-[var(--color-primary-gold)] text-sm font-semibold uppercase tracking-wider group-hover:underline cursor-pointer bg-transparent border-none p-0"
                                >
                                    Get Quote
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
