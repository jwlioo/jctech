import { CheckCircle } from "lucide-react";

const benefits = [
  "Decisões mais rápidas e inteligentes",
  "Automação de tarefas repetitivas",
  "Processos mais eficientes e escaláveis",
  "Atendimento e experiências personalizadas",
  "Redução de custos e ganho real de produtividade",
];

export function AIFirstSection() {
  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Inteligência aplicada</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">
              Sua equipe cuida das pessoas. A tecnologia cuida do resto.
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              O tempo da sua equipe é valioso. Integramos inteligência artificial ao atendimento e aos processos do seu negócio para reduzir tarefas manuais e tornar o dia a dia mais simples.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Tudo começa entendendo sua operação. A partir daí, construímos a solução adequada ao seu momento, com integração, orientação e acompanhamento próximo.
            </p>
          </div>
          <div className="space-y-4">
            <div className="p-6 rounded-xl glow-border glass">
              <h3 className="font-semibold text-foreground text-lg mb-4">O que isso permite:</h3>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-surface-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-muted-foreground italic px-2">
              Mais espaço para criar, atender melhor e fazer seu negócio crescer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
