'use client';

import { useBusinessName } from './BusinessNameProvider';

export default function AnnouncementBar() {
    const businessName = useBusinessName();
    return (
        <div className="bg-[var(--color-primary-gold)] text-black text-xs font-bold py-2 text-center tracking-wider uppercase z-50 relative">
            {businessName} — #1 Rated Roofing Contractor — <a href="tel:09020069988" className="hover:underline">Call 0902 006 9988</a>
        </div>
    );
}
