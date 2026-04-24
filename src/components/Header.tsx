import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Como Funciona", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

const HEADER_OFFSET = 80;

function smoothScrollTo(targetY: number) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({
    top: targetY,
    behavior: reduceMotion ? "auto" : "smooth",
  });
}

export function Header() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    const el = document.querySelector(href);
    if (!el) return;
    e.preventDefault();
    setOpen(false);
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    smoothScrollTo(top);
    history.replaceState(null, "", href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
        <a href="/" className="flex items-center gap-2">
          <img src="/jctech-logo.png" alt="JC Tech" className="h-8 w-8 object-contain" />
          <span className="text-xl font-bold text-gradient">JC Tech</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511956865680"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-primary text-primary-foreground text-sm font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
          >
            Fale Conosco
          </a>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="glass border-t border-border/50 px-4 py-4 space-y-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className="block text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511956865680"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-primary font-medium"
          >
            Fale Conosco
          </a>
        </nav>
      </div>
    </header>
  );
}
