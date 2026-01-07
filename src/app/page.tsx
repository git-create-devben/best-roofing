import AnnouncementBar from '@/components/AnnouncementBar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';
import Gallery from '@/components/Gallery';
import BusinessNameProvider from '@/components/BusinessNameProvider';

export default function Home() {
  return (
    <BusinessNameProvider>
      <main id="home" className="min-h-screen bg-[var(--background)]">
        <AnnouncementBar />
        <Hero />
        <TrustBar />
        <Services />
        <Gallery />
        <Testimonials />
        <FAQ />
        <ContactForm />
        <Footer />
        <WhatsAppButton />
        <CallButton />
      </main>
    </BusinessNameProvider>
  );
}
