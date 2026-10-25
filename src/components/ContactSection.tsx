import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";

export function ContactSection() {
  const [open, setOpen] = useState(false);
  const [productName, setProductName] = useState("");
  const origin = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const onContact = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href="#contato"]') : null;
      if (target) { event.preventDefault(); origin.current = target; setProductName(target.dataset.product ?? ""); setOpen(true); }
    };
    document.addEventListener("click", onContact);
    return () => document.removeEventListener("click", onContact);
  }, []);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <section id="contato" className="contact-invitation">
        <div><span className="eyebrow">O PRÓXIMO PASSO COMEÇA NUMA CONVERSA.</span><h2>Tem uma ideia?<br /><em>Vamos dar forma.</em></h2></div>
        <DialogTrigger asChild><button type="button" className="contact-circle" onClick={() => { origin.current = null; setProductName(""); }}>Entrar em contato <span aria-hidden="true">↗</span></button></DialogTrigger>
      </section>
      <DialogContent className="contact-dialog" onCloseAutoFocus={(event) => { if (origin.current) { event.preventDefault(); origin.current.focus(); } }}>
        <DialogTitle>{productName ? `Conheça o ${productName}.` : "Vamos conversar."}</DialogTitle>
        <DialogDescription>Conte um pouco sobre você e o que quer construir.</DialogDescription>
          <form className="contact-form space-y-4" onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
            const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
            const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
            const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
            if (!name || !message) return;
            const text = [`Olá! Meu nome é ${name}`, ...(email ? [`Email: ${email}`] : []), ...(phone ? [`Tel: ${phone}`] : []), "", message].join("\n");
            window.open(`https://wa.me/5511956865680?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
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
              <textarea id="message" name="message" rows={4} required defaultValue={productName ? `Olá! Quero conhecer o ${productName} e entender como ele pode ajudar o meu negócio.` : ""} placeholder="Como podemos ajudar?" className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
            </div>
            <Button variant="hero" size="lg" className="w-full" type="submit">
              Conversar pelo WhatsApp ↗
            </Button>
            <p className="text-xs text-muted-foreground leading-relaxed">Ao continuar, o WhatsApp será aberto com sua mensagem preenchida para você enviar.</p>
          </form>
      </DialogContent>
    </Dialog>
  );
}
