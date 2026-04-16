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
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">AI First</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">
              A Nova Era dos Negócios Já Começou
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Na JC Tech, acreditamos que empresas que colocam a Inteligência Artificial no centro da 
              estratégia saem na frente. Por isso, adotamos o conceito AI First: soluções pensadas desde 
              o início para serem inteligentes, automatizadas e orientadas por dados.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Ser AI First é desenvolver produtos, processos e experiências com IA integrada desde a 
              concepção — não como um "extra", mas como o cérebro por trás do negócio.
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
              AI First não é sobre o futuro. É sobre agora. E quem começa hoje, lidera amanhã.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
