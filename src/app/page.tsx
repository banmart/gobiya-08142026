import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Positioning from "@/components/Positioning";
import ProofStrip from "@/components/ProofStrip";
import Capabilities from "@/components/Capabilities";
import Services from "@/components/Services";
import Method from "@/components/Method";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Positioning />
      <ProofStrip />
      <Capabilities />
      <Services />
      <Method />
      {/* renders only once real, attributed quotes exist in content.ts */}
      <Testimonials />
      <Pricing />
    </>
  );
}
