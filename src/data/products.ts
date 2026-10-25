export type Product = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  channels: string[];
  features: { title: string; description: string }[];
  statement: string[];
  logo?: { src: string; alt: string };
  cta: { label: string; href: string };
  preview?: "conversation";
  officialWhatsApp?: boolean;
};

// Add products here; the section renders each entry without product-specific layout logic.
// Set logo to { src: "/products/your-logo.png", alt: "Your product" } when the asset is available.
export const products: Product[] = [
  {
    id: "intelligence",
    preview: "conversation",
    officialWhatsApp: true,
    name: "Intelligence",
    category: "CRM, atendimento & automação",
    tagline: "Todas as conversas. Uma operação mais inteligente.",
    description: "Conecte seus canais, organize o relacionamento com clientes e coloque a IA para trabalhar nos seus processos. O Intelligence aproxima atendimento, vendas e automação em uma só plataforma.",
    channels: ["WhatsApp", "Instagram", "Messenger"],
    features: [
      { title: "Canais integrados", description: "Reúna conversas e histórico para sua equipe atender com contexto." },
      { title: "CRM conversacional", description: "Organize oportunidades em funis e acompanhe cada etapa da venda." },
      { title: "Agentes de IA", description: "Use uma base de conhecimento do seu negócio para orientar o atendimento." },
      { title: "Processos conectados", description: "Crie fluxos de automação e integre ferramentas por API e webhooks." },
    ],
    statement: ["Converse.", "Organize.", "Avance."],
    cta: { label: "Quero conhecer o Intelligence", href: "#contato" },
  },
];
