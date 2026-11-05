import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AboutPerito from "@/components/sections/AboutPerito";
import WhenYouNeed from "@/components/sections/WhenYouNeed";
import Method from "@/components/sections/Method";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

// LP enxuta: quem é → o que resolve → diferencial → como funciona → dúvidas → onde está/contato.
// Seções fora da página (arquivos mantidos para reaproveitar): Highlights, StatsBar, Authority,
// Problem, Areas, ForWho, NotForWho, ProofResults, VideoContent.
export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-bg text-fg">
      <Header />
      <Hero />
      <AboutPerito />
      <WhenYouNeed />
      <Method />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
