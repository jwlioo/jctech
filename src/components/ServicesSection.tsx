import { MessageSquare, Clock, Zap, Globe, BarChart3 } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Chatbot Inteligente + WhatsApp",
    description: "Respostas automáticas, FAQs dinâmicas e atendimento 24/7 pelo WhatsApp. Mais organização e rapidez nas respostas para dúvidas, agendamentos e promoções.",
  },
  {
    icon: Clock,
    title: "Atendimento Automático 24h",
    description: "Não perca clientes por falta de resposta. Nossos chatbots inteligentes oferecem atendimento rápido, humanizado e disponível em tempo integral.",
  },
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

export function ServicesSection() {
  return (
    <section id="solucoes" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">O Que Fazemos</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">
            Invista no Futuro da Sua Empresa
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Automatize processos, reduza custos e aumente a eficiência com soluções de IA e sites profissionais.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative p-6 rounded-xl bg-card glow-border hover:glow-box transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
