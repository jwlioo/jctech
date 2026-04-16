import { Search, Rocket, Headphones } from "lucide-react";

const steps = [
  { num: "01", icon: Search, title: "Análise Inicial", desc: "Identificamos as necessidades do seu negócio." },
  { num: "02", icon: Rocket, title: "Implementação Rápida", desc: "Configuramos automação, chatbot e site." },
  { num: "03", icon: Headphones, title: "Suporte Contínuo", desc: "Acompanhamos e ajustamos conforme necessário." },
];

export function ProcessSection() {
  return (
    <section id="processo" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Como Funciona</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">
            Processo Simples e Eficiente
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={s.num} className="relative text-center group">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/40 to-transparent" />
              )}
              <div className="w-20 h-20 rounded-2xl bg-primary/10 glow-border flex items-center justify-center mx-auto mb-6 group-hover:glow-box transition-all duration-500">
                <span className="text-primary font-bold text-2xl">{s.num}</span>
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
