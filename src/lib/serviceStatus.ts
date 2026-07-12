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
  "hospedagem-web": { level: "operational", uptime: 99.8 },
  "banco-de-dados": { level: "operational", uptime: 99.9 },
  metabase: { level: "operational", uptime: 99.6 },
  openproject: { level: "operational", uptime: 99.7 },
  gitlab: { level: "operational", uptime: 99.8 },
  "gerenciamento-automacao": { level: "degraded", uptime: 96.4 },
  n8n: { level: "operational", uptime: 99.5 },
  "gerenciamento-wifi": { level: "operational", uptime: 99.6 },
  "registro-logs": { level: "operational", uptime: 99.8 },
  "armazenamento-cameras": { level: "operational", uptime: 99.5 },
  "armazenamento-objetos": { level: "operational", uptime: 99.9 },
  backup: { level: "operational", uptime: 99.9 },
  zabbix: { level: "operational", uptime: 99.8 },
  grafana: { level: "operational", uptime: 99.9 },
  "ide-eclipse-che": { level: "operational", uptime: 99.4 },
  "desktop-remoto": { level: "operational", uptime: 99.3 },
  pnetlab: { level: "operational", uptime: 99.6 },
  "maquinas-virtuais": { level: "operational", uptime: 99.7 },
  proxmox: { level: "operational", uptime: 99.9 },
  firewall: { level: "operational", uptime: 100 },
}
