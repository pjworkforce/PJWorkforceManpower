import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import RoomAttendantTiers from "@/components/room-attendant-tiers";
import FlexForceSection from "@/components/flexforce-section";
import WhyChooseSection from "@/components/why-choose-section";
import QuoteSection from "@/components/quote-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <RoomAttendantTiers />
      <FlexForceSection />
      <WhyChooseSection />
      <QuoteSection />
      <ContactSection />
      <Footer />
      
      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-leaf-green-500 to-leaf-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 z-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
      >
        <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
