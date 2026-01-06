import { ChevronDown } from 'lucide-react';

export default function FAQ() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[var(--color-charcoal-dark)] mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600">Common questions from homeowners in Lagos.</p>
                </div>

                <div className="space-y-4">
                    <Details
                        question="What is the cost of stone-coated roofing in Nigeria?"
                        answer="Prices vary based on the dollar rate and roof design (Bond, Classic, Shingle, or Roman). We offer competitive pricing per square meter. Contact us for the current rate."
                    />
                    <Details
                        question="Do you work outside Lagos?"
                        answer="Yes, while we are based in Iyana Ipaja, we handle roofing projects across Ogun, Oyo, and other Southwest states."
                    />
                    <Details
                        question="How long does installation take?"
                        answer="For a standard 4-bedroom duplex, installation typically takes 3-5 days after the woodwork is completed."
                    />
                    <Details
                        question="Is there a warranty?"
                        answer="Absolutely. We provide a 50-year warranty on our stone-coated tiles against fading and rusting."
                    />
                </div>
            </div>
        </section>
    );
}

function Details({ question, answer }: { question: string, answer: string }) {
    return (
        <details className="group border border-gray-200 rounded-lg bg-gray-50 overflow-hidden">
            <summary className="flex justify-between items-center w-full p-6 text-left cursor-pointer font-semibold text-[var(--color-charcoal-dark)] hover:text-[var(--color-primary-gold)] transition-colors list-none">
                <span>{question}</span>
                <ChevronDown className="transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-transparent group-open:border-gray-200">
                {answer}
            </div>
        </details>
    );
}
