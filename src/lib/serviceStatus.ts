export type ServiceStatusLevel = "operational" | "degraded" | "down"

/**
 * Status ilustrativo de disponibilidade por serviço, indexado pelo slug em
 * services.ts. Enquanto a integração com o Grafana não estiver pronta, estes
 * valores servem apenas para demonstrar o layout da página de status.
 */
export const SERVICE_STATUS: Record<string, { level: ServiceStatusLevel; uptime: number }> = {
  wiki: { level: "operational", uptime: 99.9 },
  bentopdf: { level: "operational", uptime: 99.8 },
  drawio: { level: "operational", uptime: 99.7 },
  excalidraw: { level: "operational", uptime: 99.9 },
  limesurvey: { level: "degraded", uptime: 97.2 },
  "repositorio-debian": { level: "operational", uptime: 99.6 },
  "teste-ipv6": { level: "operational", uptime: 99.5 },
  openspeedtest: { level: "down", uptime: 92.1 },
  "encurtador-url": { level: "operational", uptime: 99.9 },
  qrcode: { level: "operational", uptime: 100 },
}
