import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import { ClientOnly } from "@tanstack/react-router";
import { useEffect } from "react";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

const robotModel = "/models/robotic_arm_kuka.glb";

function ModelViewerLoader() {
  useEffect(() => {
    import("@google/model-viewer");
  }, []);
  return null;
}

type ModelViewerProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  src?: string;
  alt?: string;
  "auto-rotate"?: boolean | string;
  "camera-controls"?: boolean | string;
  "shadow-intensity"?: string;
  exposure?: string;
  "interaction-prompt"?: string;
  loading?: string;
  reveal?: string;
  autoplay?: boolean | string;
  "animation-name"?: string;
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerProps;
    }
  }
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Tech gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_color-mix(in_oklch,var(--color-primary)_18%,transparent),transparent_60%),radial-gradient(ellipse_at_bottom_left,_color-mix(in_oklch,var(--color-chart-3)_18%,transparent),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Text */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glow-border glass text-sm text-primary mb-8">
            <Brain className="w-4 h-4" />
            <span>Especialistas em Inteligência Artificial</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
            <span className="text-gradient">JC Tech</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl font-medium text-muted-foreground mt-2 block">
              Soluções inteligentes que transformam negócios através do poder da IA
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
            Automações, chatbots, atendimento inteligente e muito mais para sua empresa crescer.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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

        {/* 3D Model */}
        <div className="relative w-full aspect-square max-w-[520px] mx-auto">
          <div className="absolute inset-0 rounded-3xl glow-box glow-border glass" />
          <ClientOnly fallback={<div className="absolute inset-0 rounded-3xl animate-pulse bg-card/40" />}>
            <ModelViewerLoader />
            <model-viewer
              src={robotModel}
              alt="Modelo 3D interativo - JC Tech"
              autoplay
              auto-rotate
              camera-controls
              shadow-intensity="1"
              exposure="1"
              interaction-prompt="none"
              loading="lazy"
              reveal="auto"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",
                borderRadius: "1.5rem",
              }}
            />
          </ClientOnly>
        </div>
      </div>
    </section>
  );
}
