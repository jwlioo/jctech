const brands = [
  { name: "Kosmetic", src: "/brands/kosmetic.svg", href: "https://www.kosmetic.com.br" },
  { name: "Febracis", src: "/brands/febracis.jpg", href: "https://febracis.com" },
  { name: "CRECI-SP", src: "/brands/creci.svg", href: "https://www.crecisp.gov.br" },
  { name: "Grupo Automec", src: "/brands/automec.png", href: "https://shopautomec.com.br/inicio/" },
];

export function BrandsSection() {
  return (
    <section className="brands-section" aria-label="Empresas em destaque">
      <div className="brands-heading"><div><span className="eyebrow">BOAS COMPANHIAS</span><h2>Marcas em movimento.</h2></div>

      </div>
      <div className="brands-marquee">
        <div className="brands-track">
          {[0, 1].map((copy) => <div className="brands-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
            {brands.map((brand) => <a className={`brand-card ${brand.name === "Febracis" ? "brand-card--febracis" : brand.name === "Grupo Automec" ? "brand-card--automec" : ""}`} key={brand.name} href={brand.href} target="_blank" rel="noopener noreferrer" tabIndex={copy === 1 ? -1 : undefined} aria-label={brand.name}><img src={brand.src} alt={brand.name} width="220" height="80" loading="eager" /></a>)}
          </div>)}
        </div>
      </div>
    </section>
  );
}
