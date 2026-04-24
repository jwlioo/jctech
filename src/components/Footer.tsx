import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 sm:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gradient mb-3">JC Tech</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Soluções em Tecnologia da Informação
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#solucoes" className="text-muted-foreground hover:text-primary transition-colors">Soluções</a></li>
              <li><a href="#processo" className="text-muted-foreground hover:text-primary transition-colors">Como Funciona</a></li>
              <li><a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
          <div className="min-w-0">
            <h4 className="font-semibold text-foreground mb-3">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>(11) 95686-5680</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a href="mailto:julio.botacciohightechx@gmail.com" className="break-all hover:text-primary transition-colors">
                  julio.botacciohightechx@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>Sorocaba - SP</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Redes Sociais</h4>
            <a href="https://instagram.com/Jctech.tecnologia" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
              <Instagram className="w-4 h-4 shrink-0" />
              <span>@Jctech.tecnologia</span>
            </a>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-xs sm:text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} JC Tech. Todos os direitos reservados.</p>
          <p className="mt-1">CNPJ: 64.274.680/0001-14</p>
        </div>
      </div>
    </footer>
  );
}
