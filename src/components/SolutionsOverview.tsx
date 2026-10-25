import { ArrowUpRight } from "lucide-react";
const outcomes = [
  { number: "01", title: "Atender melhor.", description: "IA e canais conectados para acolher cada conversa com contexto." },
  { number: "02", title: "Acompanhar de perto.", description: "CRM, campanhas e follow-up para dar continuidade às oportunidades." },
  { number: "03", title: "Simplificar a rotina.", description: "Automações, sites e dados para conectar os pontos do seu negócio." },
];
export function SolutionsOverview() {
  return <section id="solucoes" className="solutions-overview" aria-labelledby="overview-title"><div><div className="overview-heading"><span className="eyebrow">O QUE FAZEMOS</span><div><h2 id="overview-title">Seu próximo passo,<br /><em>com menos obstáculos.</em></h2><p>A tecnologia entra onde sua operação precisa de mais tempo, organização e continuidade.</p></div></div><div className="outcomes-grid">{outcomes.map(outcome => <a href="#produtos" className="outcome" key={outcome.number}><span>{outcome.number}<ArrowUpRight size={19} /></span><h3>{outcome.title}</h3><p>{outcome.description}</p></a>)}</div><a href="#produtos" className="secondary-link overview-link">Conheça o Intelligence <ArrowUpRight size={16} /></a></div></section>;
}
