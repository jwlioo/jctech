import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "WhatsApp", value: "(11) 95686-5680", href: "https://wa.me/5511956865680" },
  { icon: Mail, label: "Email", value: "julio.botacciohightechx@gmail.com", href: "mailto:julio.botacciohightechx@gmail.com" },
  { icon: Clock, label: "Horário", value: "Seg-Sex: 9h às 18h", href: undefined },
];

export function ContactSection() {
  return (
    <section id="contato" className="py-24 px-4 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Vamos Começar?</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">
            Pronto para Automatizar sua Empresa?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Entre em contato e descubra como podemos transformar sua operação
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contactInfo.map((c) => (
              <div key={c.label} className="flex items-center gap-4 p-4 rounded-xl glow-border glass">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-primary transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="mt-6">
              <Button variant="hero" size="lg" className="w-full" asChild>
                <a href="https://wa.me/5511956865680" target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
          <form className="space-y-4" onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
            const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
            const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
            const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
            if (!name || !message) return;
            const text = `Olá! Meu nome é *${name}*%0A${email ? `Email: ${email}%0A` : ""}${phone ? `Tel: ${phone}%0A` : ""}%0A${encodeURIComponent(message)}`;
            window.open(`https://wa.me/5511956865680?text=${text}`, "_blank");
          }}>
            <div>
              <label htmlFor="name" className="text-sm text-muted-foreground mb-1 block">Nome</label>
              <input id="name" name="name" type="text" required placeholder="Seu nome" className="w-full h-11 px-4 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-muted-foreground mb-1 block">Email</label>
              <input id="email" name="email" type="email" placeholder="seu@email.com" className="w-full h-11 px-4 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm text-muted-foreground mb-1 block">Telefone</label>
              <input id="phone" name="phone" type="tel" placeholder="(00) 00000-0000" className="w-full h-11 px-4 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-muted-foreground mb-1 block">Mensagem</label>
              <textarea id="message" name="message" rows={4} required placeholder="Como podemos ajudar?" className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
            </div>
            <Button variant="hero" size="lg" className="w-full" type="submit">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
