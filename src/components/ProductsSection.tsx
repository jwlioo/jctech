import { MetaIntegration } from "@/components/MetaIntegration";
import { ArrowUpRight } from "lucide-react";
import { AnimatedPhone } from "@/components/AnimatedPhone";
import type { Product } from "@/data/products";
import { products } from "@/data/products";

export function ProductsSection({ compact = false }: { compact?: boolean }) {
  if (!products.length) return null;
  return (
    <section id="produtos" className="products-section" aria-labelledby="products-title">
      <div className="products-container">
        <div className="products-heading"><span className="eyebrow">NOSSOS PRODUTOS</span><div><h2 id="products-title">Ferramentas para o seu<br /><em>próximo movimento.</em></h2><p>Conheça as plataformas que levamos para o dia a dia do seu negócio.</p></div></div>
        <div className="products-list">
          {products.map(product => <ProductCard product={product} compact={compact} key={product.id} />)}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, compact }: { product: Product; compact: boolean }) {
  return (
            <article className="product-feature" aria-labelledby={`product-${product.id}`}>
              <div className="product-information">
                <h3 id={`product-${product.id}`} className="product-name">{product.logo ? <><img className="product-logo" src={product.logo.src} alt={product.logo.alt} loading="lazy" /><span className="sr-only">{product.name}</span></> : product.name}</h3>
                <p className="product-tagline">{product.tagline}</p>
                <p className="product-description">{product.description}</p>
                {product.officialWhatsApp && <MetaIntegration compact />}
                {!compact && <ul className="product-features">{product.features.map((feature) => <li key={feature.title}><strong>{feature.title}</strong><p>{feature.description}</p></li>)}</ul>}
                <div className="product-actions">
                  <a className="primary-link" href={product.cta.href} data-product={product.name} aria-label={product.cta.label}>Quero conhecer<ArrowUpRight size={17} /></a>
                </div>
              </div>
              {product.preview === "conversation" ? <div className="product-phone-preview" id={`demo-${product.id}`}><AnimatedPhone title={product.name} /></div> : <div className="product-editorial" aria-label={`${product.name}: ${product.channels.join(", ")}`}>
                <div className="product-editorial-top"><span>{product.name} / JC Tech</span><ArrowUpRight size={25} aria-hidden="true" /></div>
                <p className="product-statement">{product.statement.map((line) => <span key={line}>{line}</span>)}</p>
                <div className="product-editorial-bottom"><span>SEUS CANAIS, MAIS PRÓXIMOS.</span><ul>{product.channels.map((channel) => <li key={channel}>{channel}</li>)}</ul></div>
              </div>}
            </article>
  );
}
