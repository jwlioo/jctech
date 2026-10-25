import { Outlet, Link, createRootRoute, HeadContent, Scripts, useRouterState } from "@tanstack/react-router";

import { useEffect } from "react";
import { scrollToSection } from "@/lib/scroll";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "JC Tech" },
      { name: "description", content: "IA + WhatsApp, CRM Intelligence, automações e sites profissionais." },
      { name: "author", content: "JC Tech" },
      { property: "og:title", content: "JC Tech" },
      { property: "og:description", content: "IA + WhatsApp, CRM Intelligence, automações e sites profissionais." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: "/fonts/fonts.css" },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const href = useRouterState({ select: (state) => state.location.href });
  useEffect(() => {
    const followAnchor = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const anchor = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="#"]') : null;
      const hash = anchor?.getAttribute("href");
      if (!hash || hash === "#" || hash === "#contato" || anchor?.hasAttribute("download") || (anchor?.target && anchor.target !== "_self")) return;
      let target: HTMLElement | null;
      try { target = document.getElementById(decodeURIComponent(hash.slice(1))); } catch { return; }
      if (!target) return;
      event.preventDefault();
      history.replaceState(null, "", hash);
      scrollToSection(target);
      if (hash === "#conteudo") { target.tabIndex = -1; target.focus({ preventScroll: true }); }
    };
    document.addEventListener("click", followAnchor);
    return () => document.removeEventListener("click", followAnchor);
  }, []);
  useEffect(() => {
    const rawHash = window.location.hash.slice(1);
    if (!rawHash) return;
    let id: string;
    try { id = decodeURIComponent(rawHash); } catch { return; }
    let frame = 0;
    let attempts = 0;
    // A direct hash URL can arrive before the SPA has mounted the destination.
    const revealAnchor = () => {
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: "instant", block: "start" });
      else if (attempts++ < 60) frame = requestAnimationFrame(revealAnchor);
    };
    frame = requestAnimationFrame(revealAnchor);
    return () => cancelAnimationFrame(frame);
  }, [href]);
  return <Outlet />;
}
