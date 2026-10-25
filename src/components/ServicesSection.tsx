import { Zap, Globe, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Automação de Processos",
    description: "Automatize etapas do seu atendimento e comunicação. Envio de lembretes, confirmações, atualizações de status e mensagens programadas funcionam sozinhos.",
  },
  {
    icon: Globe,
    title: "Sites Profissionais",
    description: "Ter um site moderno e responsivo é essencial para transmitir credibilidade. Criamos sites rápidos, seguros e integrados a ferramentas de comunicação.",
  },
  {
    icon: BarChart3,
    title: "Dashboards Inteligentes",
    description: "Visualize dados importantes do seu negócio em tempo real. Dashboards personalizados que transformam informações complexas em insights acionáveis.",
  },
];

export function ServicesSection({ showContact = true }: { showContact?: boolean }) {
  return (
    <section id="solucoes" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">ALÉM DO CRM</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">
            Outras peças para conectar sua operação.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Combine o Intelligence com projetos de automação, presença digital e análise de dados, conforme o que seu negócio precisa.
          </p>
        </div>
        <div className="services-list">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card group relative p-6 rounded-xl bg-card glow-border hover:glow-box transition-all duration-500"
            >
              <span className="service-number">0{index + 1}</span>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
          {showContact && <a href="#contato" className="service-consult"><span className="eyebrow">SEU PRÓXIMO PASSO</span><h3>Qual desafio vamos resolver juntos?</h3><span>Conte sua ideia <span aria-hidden="true">↗</span></span></a>}
        </div>
      </div>
    </section>
  );
}
