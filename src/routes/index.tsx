import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AIFirstSection } from "@/components/AIFirstSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "JC Tech — Especialistas em Inteligência Artificial" },
      { name: "description", content: "Automações, chatbots, atendimento inteligente e sites profissionais. A JC Tech transforma negócios com o poder da IA." },
      { property: "og:title", content: "JC Tech — Especialistas em Inteligência Artificial" },
      { property: "og:description", content: "Automações, chatbots, atendimento inteligente e sites profissionais." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AIFirstSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
