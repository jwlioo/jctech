import { useState } from "react";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";

const screens = {
  atendimento: [
    { src: "/products/contato-1.png", label: "Atendimento e dados do contato" },
    { src: "/products/ia-config.png", label: "Agente de IA e transferência para a equipe" },
    { src: "/products/atendimento-1.png", label: "Organização e filtros de conversas" },
  ],
  campanhas: [
    { src: "/products/campanhas-2.png", label: "Configuração da campanha" },
    { src: "/products/campanhas-3.png", label: "Público e mensagem" },
  ],
  "follow-up": [
    { src: "/products/etapas-1.png", label: "Etapas da sequência" },
    { src: "/products/etapas-2.png", label: "Intervalos e horários de envio" },
  ],
  crm: [
    { src: "/products/crm-2.png", label: "Visão do funil comercial" },
  ],
};

export function PlatformGallery({ module }: { module: keyof typeof screens }) {
  const [selected, setSelected] = useState(0);
  const [fullSize, setFullSize] = useState(false);
  const images = screens[module];
  const current = images[selected];
  return <figure className="platform-gallery">
    <div className="platform-gallery-bar"><span>Telas da plataforma</span><span>{selected + 1} / {images.length}</span></div>
    <Dialog onOpenChange={() => setFullSize(false)}>
      <DialogTrigger asChild><button type="button" className="platform-screen" aria-label={`Ampliar ${current.label}`}><img src={current.src} alt={current.label} loading="lazy" /><span className="platform-expand"><Expand size={15} /> Ampliar tela</span></button></DialogTrigger>
      <DialogContent className="platform-lightbox">
        <DialogTitle>{current.label}</DialogTitle>
        <DialogDescription>Tela oficial da documentação. Os dados são demonstrativos e a aparência pode variar conforme a configuração.</DialogDescription>
        <button type="button" className="platform-zoom-toggle" aria-pressed={fullSize} onClick={() => setFullSize(!fullSize)}>{fullSize ? "Ajustar à tela" : "Ver em tamanho real"}</button>
        <div className={`platform-zoom ${fullSize ? "is-full-size" : ""}`} tabIndex={0} aria-label="Imagem ampliada; use a rolagem para explorar os detalhes"><img src={current.src} alt={current.label} /></div>
        {fullSize && <p className="platform-zoom-hint">Role a imagem para explorar os detalhes.</p>}
      </DialogContent>
    </Dialog>
    {images.length > 1 && <div className="platform-gallery-controls"><button type="button" aria-label="Tela anterior" onClick={() => setSelected((selected + images.length - 1) % images.length)}><ChevronLeft size={18} /></button><p aria-live="polite">{current.label}</p><button type="button" aria-label="Próxima tela" onClick={() => setSelected((selected + 1) % images.length)}><ChevronRight size={18} /></button></div>}
    {images.length > 1 && <div className="platform-thumbnails" aria-label="Selecionar tela" style={{ gridTemplateColumns: `repeat(${Math.min(images.length, 3)}, minmax(0, 1fr))` }}>{images.map((image, index) => <button type="button" key={image.src} aria-label={image.label} aria-pressed={index === selected} onClick={() => setSelected(index)}><img src={image.src} alt="" loading="lazy" /><span>{image.label}</span></button>)}</div>}
    <figcaption>Capturas da documentação oficial · dados demonstrativos.</figcaption>
  </figure>;
}
