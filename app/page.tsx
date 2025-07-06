import { HeroSection } from "@/components/sections/hero-section";
import { CTASection } from "@/components/sections/cta-section";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { PricingSection } from "@/components/sections/pricing-section";
import { FeaturesSection } from "@/components/sections/features-section";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
