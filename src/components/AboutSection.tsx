import { Lightbulb, Handshake, Target, Award } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Inovação", desc: "Tecnologia de ponta aplicada aos seus desafios" },
  { icon: Handshake, title: "Parceria", desc: "Trabalhamos lado a lado com nossos clientes" },
  { icon: Target, title: "Resultados", desc: "Foco no que faz diferença na sua operação" },
  { icon: Award, title: "Excelência", desc: "Qualidade premium em cada entrega" },
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Sobre Nós</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">
            Gente que entende de tecnologia. E de gente.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto leading-relaxed">
            Transforme a forma como sua empresa se comunica com clientes e organiza seus processos. 
            Oferecemos soluções completas em automação, atendimento com inteligência artificial e 
            criação de sites que tornam sua operação mais ágil e profissional.
          </p>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto leading-relaxed">
            Nossa missão é simplificar o uso da tecnologia. Desenvolvemos soluções que unem inteligência 
            artificial e automação de forma prática, ajudando empresas a oferecer atendimento mais ágil 
            e eficiente, com resultados reais e mensuráveis.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="text-center p-6 rounded-xl glow-border hover:glow-box transition-all duration-500">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
