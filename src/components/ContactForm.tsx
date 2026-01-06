'use client';

export default function ContactForm() {
    return (
        <section id="contact" className="py-20 bg-[var(--color-charcoal-light)]">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Request A Free Quote</h2>
                        <p className="text-gray-400 mb-8">
                            Ready to protect your home? Fill out the form, and our engineer will call you within 24 hours to schedule an inspection.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-primary-gold)]/10 flex items-center justify-center text-[var(--color-primary-gold)] font-bold">1</div>
                                <p>We receive your request.</p>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-primary-gold)]/10 flex items-center justify-center text-[var(--color-primary-gold)] font-bold">2</div>
                                <p>Our expert assesses your site (Physical or Virtual).</p>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-primary-gold)]/10 flex items-center justify-center text-[var(--color-primary-gold)] font-bold">3</div>
                                <p>You get a detailed, transparent costing.</p>
                            </div>
                        </div>
                    </div>

                    <form className="bg-white p-6 md:p-8 rounded-lg shadow-2xl" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                                <input type="text" className="w-full border text-black border-gray-300 p-3 rounded-sm focus:outline-none focus:border-[var(--color-primary-gold)]" placeholder="Chief/Mr/Mrs..." />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                                <input type="tel" className="w-full border text-black border-gray-300 p-3 rounded-sm focus:outline-none focus:border-[var(--color-primary-gold)]" placeholder="080..." />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Project Location</label>
                                <input type="text" className="w-full border text-black border-gray-300 p-3 rounded-sm focus:outline-none focus:border-[var(--color-primary-gold)]" placeholder="e.g., Sangotedo, Ajah" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Service Needed</label>
                                <select className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-[var(--color-primary-gold)] text-gray-600">
                                    <option>New Roof Installation</option>
                                    <option>Roof Repair / Leakage Fixing</option>
                                    <option>Re-roofing (Changing to Stone-coated)</option>
                                    <option>Rain Gutter Installation</option>
                                </select>
                            </div>

                            <button className="w-full bg-[var(--color-primary-gold)] text-black font-bold py-4 rounded-sm hover:bg-[var(--color-primary-gold-hover)] transition-colors shadow-lg">
                                Submit Request
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
