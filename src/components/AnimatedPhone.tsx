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
  const chatContent = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const [count, setCount] = useState(1);
  const [typing, setTyping] = useState(false);
  const running = visible && pageVisible && !paused;

  useEffect(() => {
    const resetConversation = () => {
      setCount(1);
      setTyping(false);
      if (chat.current) chat.current.scrollTop = 0;
    };
    const updateVisibility = () => {
      setPageVisible(!document.hidden);
      resetConversation();
    };
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    window.addEventListener("pageshow", updateVisibility);
    let observedVisible = false;
    const observer = typeof IntersectionObserver === "function" ? new IntersectionObserver(([entry]) => {
      const nextVisible = entry.isIntersecting && (observedVisible || entry.intersectionRatio >= 0.25);
      if (nextVisible !== observedVisible) {
        observedVisible = nextVisible;
        resetConversation();
        setVisible(nextVisible);
      }
    }, { rootMargin: "0px", threshold: [0, 0.25] }) : null;
    if (observer && chat.current) observer.observe(chat.current);
    else setVisible(true);
    return () => {
      observer?.disconnect();
      document.removeEventListener("visibilitychange", updateVisibility);
      window.removeEventListener("pageshow", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (!running) { setTyping(false); return; }
    if (count >= messages.length) {
      const timer = window.setTimeout(() => {
        setTyping(false);
        setCount(1);
        if (chat.current) chat.current.scrollTop = 0;
      }, 3500);
      return () => window.clearTimeout(timer);
    }
    const next = messages[count];
    setTyping(next.from === "team");
    const timer = window.setTimeout(() => { setTyping(false); setCount(current => current + 1); }, next.from === "team" ? 2100 : 1400);
    return () => window.clearTimeout(timer);
  }, [count, running]);

  useEffect(() => {
    const element = chat.current;
    const content = chatContent.current;
    if (!element || !content) return;
    const followLatestMessage = () => {
      element.scrollTop = count <= 1 ? 0 : Math.max(0, element.scrollHeight - element.clientHeight);
    };
    // Keep the latest bubble visible even when mobile browsers throttle animation frames.
    followLatestMessage();
    const frame = requestAnimationFrame(followLatestMessage);
    const observer = typeof ResizeObserver === "function" ? new ResizeObserver(followLatestMessage) : null;
    observer?.observe(content);
    return () => { observer?.disconnect(); cancelAnimationFrame(frame); };
  }, [count, typing]);

  return <figure ref={figure} className="phone-figure phone-figure--3d" data-running={running}>
    <div className="phone-stage"><div className="phone-hover"><div className="phone-pose"><div className="demo-phone">
      <div className="phone-status"><span>9:41</span><span className="phone-status-icons" aria-hidden="true"><Signal size={14} strokeWidth={2.5} /><Wifi size={14} strokeWidth={2.5} /><BatteryFull size={20} strokeWidth={2} /></span></div>
      <div className="phone-contact"><ChevronLeft size={18} aria-hidden="true" /><div className="phone-avatar">i</div><div><strong>{title}</strong><small>{typing ? "IA digitando…" : "Assistente de IA"}</small></div><MoreHorizontal size={18} aria-hidden="true" /></div>
      <div className="phone-chat" ref={chat} aria-hidden="true"><div className="phone-chat-content" ref={chatContent}><span className="chat-date">HOJE</span>
        {messages.slice(0, count).map((message, index) => <div className={`chat-bubble message-arriving ${message.from === "client" ? "from-client" : "from-team"}`} key={index}><p>{message.text}</p><small>{message.time}{message.from === "team" && <Check size={11} />}</small></div>)}
        {typing && <div className="chat-bubble from-team typing-bubble"><span /><span /><span /></div>}
      </div></div>
      <div className="phone-input" aria-hidden="true"><Plus size={16} /><span>Mensagem</span><Send size={14} /></div><div className="phone-home" aria-hidden="true" />
    </div></div></div></div>
    <ol className="sr-only" aria-label="Exemplo ilustrativo de conversa com IA">{messages.map((message, index) => <li key={index}>{message.from === "team" ? "Assistente de IA" : "Cliente"}: {message.text}</li>)}</ol>
    <figcaption><span>Conversa ilustrativa · dados fictícios.</span><button className="phone-motion-control" type="button" onClick={() => setPaused(!paused)} aria-label={paused ? "Retomar demonstração do celular" : "Pausar demonstração do celular"} aria-pressed={paused}>{paused ? <Play size={12} /> : <Pause size={12} />}</button></figcaption>
  </figure>;
}
