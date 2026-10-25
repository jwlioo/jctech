import { ArrowUpRight, ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-masthead"><span>JC Tech</span><span>ESTRATÉGIA, AUTOMAÇÃO & PRESENÇA DIGITAL</span><span>SOROCABA · BRASIL</span></div>
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">TECNOLOGIA COM UM LADO HUMANO.</p>
          <h1 id="hero-title">Seu negócio.<br />Um novo<br /><em>movimento.</em></h1>
          <div className="hero-intro"><span className="editorial-index">↳</span><p>Menos complicação na rotina. Mais espaço para crescer. Criamos automações, experiências digitais e soluções de IA que fazem sentido para você.</p></div>
          <div className="hero-actions"><a className="primary-link" href="#contato">Vamos conversar <ArrowUpRight size={18} /></a><a className="secondary-link" href="#produtos">Conheça o Intelligence <ArrowDown size={16} /></a></div>
        </div>
        <aside className="editorial-poster" aria-label="Abra espaço para o próximo passo do seu negócio">
          <div className="poster-top"><span>IDEIAS QUE SAEM DO PAPEL.</span><ArrowUpRight size={27} /></div>
          <div className="poster-art" aria-hidden="true"><div className="poster-arch" /><span className="poster-circle" /><div className="poster-step" /></div>
          <p>Abra espaço<br />para o <em>próximo.</em></p>
          <div className="poster-bottom"><span>PENSAR. CONECTAR. TRANSFORMAR.</span><span>01 / JC</span></div>
        </aside>
      </div>
      <div className="hero-bottom"><span>BOAS CONVERSAS SE TRANSFORMAM EM GRANDES PROJETOS.</span><a href="#solucoes">Role para descobrir ↓</a></div>
    </section>
  );
}
