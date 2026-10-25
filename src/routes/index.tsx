import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SolutionsOverview } from "@/components/SolutionsOverview";
import { ProductsSection } from "@/components/ProductsSection";
import { AboutSection } from "@/components/AboutSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";
import { BrandsSection } from "@/components/BrandsSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "JC Tech" },
      { name: "description", content: "IA + WhatsApp, CRM Intelligence, automações e sites profissionais. A JC Tech transforma negócios com o poder da IA." },
      { property: "og:title", content: "JC Tech" },
      { property: "og:description", content: "IA + WhatsApp, CRM Intelligence, automações e sites profissionais." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <Header />
      <main id="conteudo">
      <HeroSection />
      <SolutionsOverview />
      <ProductsSection compact />
      <ProcessSection />
      <AboutSection />
      <BrandsSection />
      <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
