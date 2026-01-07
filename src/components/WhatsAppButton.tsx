import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/2349020069988?text=Hello%2C%20I%20am%20interested%20in%20a%20roofing%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 flex items-center justify-center"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={28} fill="white" />
        </a>
    );
}
