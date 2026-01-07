'use client';

import { createContext, useContext, useEffect, ReactNode, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const BusinessContext = createContext<string>('Lagos Premium Roofing');

export function useBusinessName() {
    return useContext(BusinessContext);
}

function BusinessNameLogic({ children }: { children: ReactNode }) {
    const searchParams = useSearchParams();
    const nameParam = searchParams.get('name');
    // Default to "Lagos Premium Roofing" if no param
    const businessName = nameParam ? decodeURIComponent(nameParam) : 'Lagos Premium Roofing';

    useEffect(() => {
        // Update document title dynamically
        document.title = `${businessName} - Top Rated Roofing Services`;
    }, [businessName]);

    return (
        <BusinessContext.Provider value={businessName}>
            {children}
        </BusinessContext.Provider>
    );
}

export default function BusinessNameProvider({ children }: { children: ReactNode }) {
    // Suspense is required when using useSearchParams in Client Components 
    // to avoid de-opting correct rendering
    return (
        <Suspense fallback={<div className="min-h-screen bg-[var(--background)]" />}>
            <BusinessNameLogic>{children}</BusinessNameLogic>
        </Suspense>
    );
}
