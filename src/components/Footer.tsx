'use client';

import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

import { useBusinessName } from './BusinessNameProvider';

export default function Footer() {
    const businessName = useBusinessName();

    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Col */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold tracking-tighter uppercase">
                            {businessName}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Ready to upgrade your property? Get a free inspection today. We deliver excellence, durability, and style to every project.
                            Licensed and insured.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--color-charcoal-light)] flex items-center justify-center hover:bg-[var(--color-primary-gold)] hover:text-black transition-colors"><Facebook size={18} /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--color-charcoal-light)] flex items-center justify-center hover:bg-[var(--color-primary-gold)] hover:text-black transition-colors"><Instagram size={18} /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--color-charcoal-light)] flex items-center justify-center hover:bg-[var(--color-primary-gold)] hover:text-black transition-colors"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-[var(--color-primary-gold)]">Quick Menu</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                            <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                            <li><a href="#trust" className="hover:text-white transition-colors">Why Choose Us</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Get a Quote</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div id="contact">
                        <h4 className="text-lg font-bold mb-6 text-[var(--color-primary-gold)]">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex gap-3 items-start">
                                <MapPin className="shrink-0 text-[var(--color-primary-gold)]" size={18} />
                                <span>5 Akintoye St, Iyana Ipaja,<br />Lagos, Nigeria</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Phone className="shrink-0 text-[var(--color-primary-gold)]" size={18} />
                                <a href="tel:09020069988" className="hover:text-white">0902 006 9988</a>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail className="shrink-0 text-[var(--color-primary-gold)]" size={18} />
                                <a href="mailto:info@bestroofing.ng" className="hover:text-white">info@bestroofing.ng</a>
                            </li>
                        </ul>
                    </div>

                    {/* Map */}
                    <div className="rounded-lg overflow-hidden border border-white/10 h-48 relative block">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.315844444444!2d3.2842426!3d6.6012356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b91a7f3f3f3f3%3A0x1234567890abcdef!2s5%20Akintoye%20St%2C%20Iyana%20Ipaja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1715000000000!5m2!1sen!2sng"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Best Roofing Location"
                            className="hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                        ></iframe>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-600">
                    <p>&copy; {new Date().getFullYear()} {businessName}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
