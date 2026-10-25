let cancelCurrentScroll: (() => void) | undefined;

export function scrollToSection(element: Element) {
  cancelCurrentScroll?.();
  const headerHeight = document.querySelector("header > div:first-child")?.getBoundingClientRect().height ?? 72;
  const start = window.scrollY;
  const end = Math.max(0, Math.min(element.getBoundingClientRect().top + start - headerHeight - 16, document.documentElement.scrollHeight - window.innerHeight));
  const distance = end - start;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || Math.abs(distance) < 2) {
    window.scrollTo({ top: end, behavior: "instant" });
    return;
  }
  const duration = Math.min(1000, Math.max(550, Math.abs(distance) * 0.4));
  const started = performance.now();
  let frame = 0;
  const stopOnKey = (event: KeyboardEvent) => {
    if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) stop();
  };
  const stop = () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("wheel", stop);
    window.removeEventListener("touchstart", stop);
    window.removeEventListener("keydown", stopOnKey);
    if (cancelCurrentScroll === stop) cancelCurrentScroll = undefined;
  };
  const animate = (now: number) => {
    const progress = Math.min((now - started) / duration, 1);
    const eased = progress < 0.5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2;
    window.scrollTo({ top: start + distance * eased, behavior: "instant" });
    if (progress < 1) frame = requestAnimationFrame(animate);
    else stop();
  };
  cancelCurrentScroll = stop;
  window.addEventListener("wheel", stop, { passive: true });
  window.addEventListener("touchstart", stop, { passive: true });
  window.addEventListener("keydown", stopOnKey);
  frame = requestAnimationFrame(animate);
}
