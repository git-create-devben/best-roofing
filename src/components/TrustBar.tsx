import { ShieldCheck, Award, ClipboardCheck } from 'lucide-react';

export default function TrustBar() {
    const items = [
        { icon: ShieldCheck, label: "Registered Company", sub: "RC 123456" },
        { icon: Award, label: "50-Year Warranty", sub: "Rust & Fade Proof" },
        { icon: ClipboardCheck, label: "Free Site Inspection", sub: "Anywhere in Lagos" },
    ];

    return (
        <section id="trust" className="bg-[var(--color-charcoal-light)] py-12 border-b border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-center justify-start md:justify-center gap-4 group bg-[var(--color-charcoal-dark)] md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none border border-white/5 md:border-none">
                            <div className="p-3 bg-[var(--color-charcoal-dark)] shrink-0 rounded-full border border-[var(--color-primary-gold)] text-[var(--color-primary-gold)] group-hover:bg-[var(--color-primary-gold)] group-hover:text-black transition-colors duration-300">
                                <item.icon size={28} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-base md:text-lg">{item.label}</h3>
                                <p className="text-[var(--color-text-muted)] text-xs md:text-sm">{item.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
