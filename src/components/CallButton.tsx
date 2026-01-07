import { Phone } from 'lucide-react';

export default function CallButton() {
    return (
        <a
            href="tel:09020069988"
            className="fixed bottom-6 left-6 z-50 bg-[var(--color-primary-gold)] text-black p-4 rounded-full shadow-2xl hover:bg-[var(--color-primary-gold-hover)] hover:scale-110 transition-all duration-300 flex md:hidden items-center justify-center border-2 border-white/20"
            aria-label="Call Now"
        >
            <Phone size={24} fill="currentColor" />
        </a>
    );
}
