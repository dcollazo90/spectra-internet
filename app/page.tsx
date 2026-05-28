import Navbar          from "@/components/Navbar";
import Hero            from "@/components/Hero";
import TrustStrip      from "@/components/TrustStrip";
import Stats           from "@/components/Stats";
import Plans           from "@/components/Plans";
import CoverageForm    from "@/components/CoverageForm";
import TechSection     from "@/components/TechSection";
import WhySpectra      from "@/components/WhySpectra";
import Business        from "@/components/Business";
import Testimonials    from "@/components/Testimonials";
import FAQ             from "@/components/FAQ";
import FinalCTA        from "@/components/FinalCTA";
import FloatingWidgets from "@/components/FloatingWidgets";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Stats />
        <Plans />
        <CoverageForm />
        <TechSection />
        <WhySpectra />
        <Business />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <FloatingWidgets />
    </>
  );
}
