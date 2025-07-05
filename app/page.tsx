import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { CTASection } from "@/components/cta-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"


export default function HomePage() {


  return (
    <div className="min-h-screen flex flex-col items-center bg-background">
      <Header />
      <main className="flex-1 w-full flex justify-center items-center flex-col">
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
