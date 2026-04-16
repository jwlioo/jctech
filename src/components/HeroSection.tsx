import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { Brain } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Fundo tecnológico com redes neurais"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-32">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glow-border glass text-sm text-primary mb-8">
          <Brain className="w-4 h-4" />
          <span>Especialistas em Inteligência Artificial</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
          <span className="text-gradient">JC Tech</span>
          <br />
          <span className="text-2xl sm:text-3xl md:text-4xl font-medium text-muted-foreground mt-2 block">
            Soluções inteligentes que transformam negócios através do poder da IA
          </span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Automações, chatbots, atendimento inteligente e muito mais para sua empresa crescer.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <a href="https://wa.me/5515996453463" target="_blank" rel="noopener noreferrer">
              Começar Agora
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#solucoes">Conhecer Soluções</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
