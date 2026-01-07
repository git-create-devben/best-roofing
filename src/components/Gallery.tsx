'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Gallery() {
    const projects = [
        { src: '/images/hero.png', title: 'Lekki Phase 1', type: 'Stone Coated' },
        { src: '/images/service-installation.png', title: 'Victoria Island', type: 'Installation' },
        { src: '/images/service-commercial.png', title: 'Ikeja GRA', type: 'Commercial' },
        { src: '/images/hero.png', title: 'Banana Island', type: 'Luxury Re-roofing' },
        { src: '/images/service-repair.png', title: 'Magodo Phase 2', type: 'Maintenance' },
        { src: '/images/service-commercial.png', title: 'Eko Atlantic', type: 'High-rise' },
    ];

    return (
        <section id="gallery" className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our <span className="text-[var(--color-primary-gold)]">Recent Projects</span></h2>
                    <p className="text-gray-400">Sample premium designs. We will replace these with your actual project photos upon setup.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group overflow-hidden rounded-sm aspect-[4/3] cursor-pointer"
                        >
                            <Image
                                src={project.src}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                <p className="text-[var(--color-primary-gold)]">{project.type}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
