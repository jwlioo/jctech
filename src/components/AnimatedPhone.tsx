import { useEffect, useRef, useState } from "react";
import { BatteryFull, Signal, Wifi, Check, ChevronLeft, MoreHorizontal, Pause, Play, Plus, Send } from "lucide-react";

const messages = [
  { from: "client", text: "Oi! Quero organizar o atendimento da minha empresa.", time: "10:32" },
  { from: "team", text: "Olá! Sou a assistente de IA. Hoje sua equipe atende por quais canais?", time: "10:32" },
  { from: "client", text: "WhatsApp e Instagram. Às vezes esquecemos de retornar aos clientes.", time: "10:33" },
  { from: "team", text: "Entendi! O Intelligence reúne os canais e ajuda a acompanhar cada oportunidade.", time: "10:33" },
  { from: "client", text: "E dá para automatizar os próximos contatos?", time: "10:34" },
  { from: "team", text: "Sim! Podemos configurar sequências para o seu processo. Vou conectar você à nossa equipe para conhecer melhor sua rotina.", time: "10:34" },
];

export function AnimatedPhone({ title = "Intelligence" }: { title?: string }) {
  const figure = useRef<HTMLElement>(null);
  const chat = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [paused, setPaused] = useState(false);
  const [count, setCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const running = visible && pageVisible && !paused && !reducedMotion;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(media.matches);
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateMotion(); updateVisibility();
    media.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.15 });
    if (figure.current) observer.observe(figure.current);
    return () => { observer.disconnect(); media.removeEventListener("change", updateMotion); document.removeEventListener("visibilitychange", updateVisibility); };
  }, []);

  useEffect(() => {
    if (reducedMotion) { setCount(messages.length); setTyping(false); return; }
    if (!running) { setTyping(false); return; }
    if (count >= messages.length) {
      const timer = window.setTimeout(() => setCount(0), 6500);
      return () => window.clearTimeout(timer);
    }
    const next = messages[count];
    setTyping(next.from === "team");
    const timer = window.setTimeout(() => { setTyping(false); setCount(current => current + 1); }, next.from === "team" ? 2100 : 1400);
    return () => window.clearTimeout(timer);
  }, [count, running, reducedMotion]);

  useEffect(() => {
    const element = chat.current;
    if (element) element.scrollTo({ top: count === 0 ? 0 : element.scrollHeight, behavior: reducedMotion || count === 0 ? "instant" : "smooth" });
  }, [count, typing, reducedMotion]);

  return <figure ref={figure} className="phone-figure phone-figure--3d" data-running={running}>
    <div className="phone-stage"><div className="phone-hover"><div className="phone-pose"><div className="demo-phone">
      <div className="phone-status"><span>9:41</span><span className="phone-status-icons" aria-hidden="true"><Signal size={14} strokeWidth={2.5} /><Wifi size={14} strokeWidth={2.5} /><BatteryFull size={20} strokeWidth={2} /></span></div>
      <div className="phone-contact"><ChevronLeft size={18} aria-hidden="true" /><div className="phone-avatar">i</div><div><strong>{title}</strong><small>{typing ? "IA digitando…" : "Assistente de IA"}</small></div><MoreHorizontal size={18} aria-hidden="true" /></div>
      <div className="phone-chat" ref={chat} aria-hidden="true"><span className="chat-date">HOJE</span>
        {messages.slice(0, count).map((message, index) => <div className={`chat-bubble message-arriving ${message.from === "client" ? "from-client" : "from-team"}`} key={index}><p>{message.text}</p><small>{message.time}{message.from === "team" && <Check size={11} />}</small></div>)}
        {typing && <div className="chat-bubble from-team typing-bubble"><span /><span /><span /></div>}
      </div>
      <div className="phone-input" aria-hidden="true"><Plus size={16} /><span>Mensagem</span><Send size={14} /></div><div className="phone-home" aria-hidden="true" />
    </div></div></div></div>
    <ol className="sr-only" aria-label="Exemplo ilustrativo de conversa com IA">{messages.map((message, index) => <li key={index}>{message.from === "team" ? "Assistente de IA" : "Cliente"}: {message.text}</li>)}</ol>
    <figcaption><span>Conversa ilustrativa · dados fictícios.</span>{!reducedMotion && <button className="phone-motion-control" type="button" onClick={() => setPaused(!paused)} aria-label={paused ? "Retomar demonstração do celular" : "Pausar demonstração do celular"} aria-pressed={paused}>{paused ? <Play size={12} /> : <Pause size={12} />}</button>}</figcaption>
  </figure>;
}
