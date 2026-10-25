export function MetaIntegration({ compact = false }: { compact?: boolean }) {
  return <div className={`meta-integration ${compact ? "meta-integration--compact" : ""}`}>
    <div className="meta-brand"><img src="/brands/meta.svg" width="42" height="32" alt="Meta" /><span aria-hidden="true">Meta</span></div>
    <div><strong>WhatsApp Business com API oficial da Meta.</strong><p>Integração oficial para conectar atendimento, campanhas e automações no Intelligence.</p></div>
  </div>;
}
