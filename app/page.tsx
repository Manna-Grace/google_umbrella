import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesGrid from "@/components/features-grid"
import HowToUse from "@/components/how-to-use"
import ProductShowcase from "@/components/product-showcase"
import ModelsSection from "@/components/models-section"
import TechSpecs from "@/components/tech-specs"
import WhatsInBox from "@/components/whats-in-box"
import ReviewsSection from "@/components/reviews-section"
import PricingSection from "@/components/pricing-section"
import Footer from "@/components/footer"
import MobileCTA from "@/components/mobile-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesGrid />
      <HowToUse />
      <ProductShowcase />
      <ModelsSection />
      <TechSpecs />
      <WhatsInBox />
      <ReviewsSection />
      <PricingSection />
      <Footer />
      <MobileCTA />
    </main>
  )
}
