import type { ComponentType, SVGProps } from "react"
import type { Dictionary } from "../i18n/translations"
import {
  WikiIcon,
  PdfPrivacyIcon,
  DiagramIcon,
  SketchIcon,
  SurveyIcon,
  PackageIcon,
  NetworkIcon,
  SpeedGaugeIcon,
  LinkIcon,
  QrCodeIcon,
  WebHostingIcon,
  DatabaseIcon,
  DashboardIcon,
  KanbanIcon,
  GitBranchIcon,
  AutomationIcon,
  WorkflowIcon,
  CodeIcon,
  RemoteDesktopIcon,
  LabNetworkIcon,
  VmIcon,
  ServerStackIcon,
  ShieldIcon,
  WifiManagementIcon,
  LogsIcon,
  CameraStorageIcon,
  ObjectStorageIcon,
  BackupIcon,
  AlertBellIcon,
  LineChartIcon,
  LocalAiIcon,
  TokenManagementIcon,
  OpenCodeAiIcon,
  WebScrapIcon,
  DnsManagementIcon,
  RoboShadowIcon,
  CrowdSecIcon,
  CaptivePortalIcon,
  MapServerIcon,
  DroneMapIcon,
  PublicWifiIcon,
} from "../components/ui/ServiceIcon"

/**
 * Dados estruturais dos serviços. Nome, descrição, detalhes e recursos de
 * cada serviço ficam nos dicionários de tradução (src/i18n/dictionaries),
 * em services.items.<slug>, para evitar duplicar o conteúdo em três idiomas.
 *
 * Cada serviço tem uma audiência mínima. O acesso é cumulativo:
 * parceiros veem os serviços públicos + exclusivos de parceiros; a
 * comunidade acadêmica do IFRO vê tudo (público + parceiros + exclusivos
 * acadêmicos).
 */
export type ServiceAudience = "public" | "partners" | "academic"

/**
 * Categoria funcional do serviço — transversal à audiência, usada para
 * filtrar o catálogo por tipo de capacidade técnica, independente de
 * quem pode acessar o serviço.
 */
export type ServiceCategory = "infrastructure" | "development" | "data-ai" | "security" | "utilities"

export type Service = {
  slug: string
  /**
   * URL pública do serviço. Deixe undefined até o serviço estar disponível —
   * é o único campo que precisa ser preenchido quando cada serviço entrar no ar.
   */
  url?: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  audience: ServiceAudience
  category: ServiceCategory
}

export const SERVICES: Service[] = [
  // Serviços públicos — abertos a toda a comunidade
  { slug: "bentopdf", icon: PdfPrivacyIcon, audience: "public", category: "utilities" },
  { slug: "drawio", icon: DiagramIcon, audience: "public", category: "utilities" },
  { slug: "excalidraw", icon: SketchIcon, audience: "public", category: "utilities" },
  { slug: "repositorio-debian", icon: PackageIcon, audience: "public", category: "infrastructure" },
  { slug: "teste-ipv6", icon: NetworkIcon, audience: "public", category: "infrastructure" },
  { slug: "openspeedtest", icon: SpeedGaugeIcon, audience: "public", category: "infrastructure" },
  { slug: "encurtador-url", icon: LinkIcon, audience: "public", category: "utilities" },
  { slug: "qrcode", icon: QrCodeIcon, audience: "public", category: "utilities" },
  { slug: "internet-wifi", icon: PublicWifiIcon, audience: "public", category: "infrastructure" },

  // Exclusivos de parceiros — somados aos públicos
  { slug: "wiki", icon: WikiIcon, audience: "partners", category: "utilities" },
  { slug: "limesurvey", icon: SurveyIcon, audience: "partners", category: "utilities" },
  { slug: "hospedagem-web", icon: WebHostingIcon, audience: "partners", category: "infrastructure" },
  { slug: "banco-de-dados", icon: DatabaseIcon, audience: "partners", category: "data-ai" },
  { slug: "metabase", icon: DashboardIcon, audience: "partners", category: "data-ai" },
  { slug: "openproject", icon: KanbanIcon, audience: "partners", category: "utilities" },
  { slug: "gitlab", icon: GitBranchIcon, audience: "partners", category: "development" },
  { slug: "gerenciamento-automacao", icon: AutomationIcon, audience: "partners", category: "infrastructure" },
  { slug: "n8n", icon: WorkflowIcon, audience: "partners", category: "development" },
  { slug: "gerenciamento-wifi", icon: WifiManagementIcon, audience: "partners", category: "infrastructure" },
  { slug: "registro-logs", icon: LogsIcon, audience: "partners", category: "security" },
  { slug: "armazenamento-cameras", icon: CameraStorageIcon, audience: "partners", category: "security" },
  { slug: "armazenamento-objetos", icon: ObjectStorageIcon, audience: "partners", category: "infrastructure" },
  { slug: "backup", icon: BackupIcon, audience: "partners", category: "infrastructure" },
  { slug: "zabbix", icon: AlertBellIcon, audience: "partners", category: "infrastructure" },
  { slug: "grafana", icon: LineChartIcon, audience: "partners", category: "infrastructure" },
  { slug: "firewall", icon: ShieldIcon, audience: "partners", category: "security" },
  { slug: "llm-local", icon: LocalAiIcon, audience: "partners", category: "data-ai" },
  { slug: "gestao-modelos-tokens-ia", icon: TokenManagementIcon, audience: "partners", category: "data-ai" },
  { slug: "gerenciamento-dns", icon: DnsManagementIcon, audience: "partners", category: "infrastructure" },
  { slug: "roboshadow", icon: RoboShadowIcon, audience: "partners", category: "security" },
  { slug: "crowdsec", icon: CrowdSecIcon, audience: "partners", category: "security" },
  { slug: "captive-portal", icon: CaptivePortalIcon, audience: "partners", category: "security" },
  { slug: "map-server", icon: MapServerIcon, audience: "partners", category: "utilities" },
  { slug: "opendronemap", icon: DroneMapIcon, audience: "partners", category: "utilities" },

  // Exclusivos da comunidade acadêmica do IFRO — somados aos anteriores
  { slug: "ide-eclipse-che", icon: CodeIcon, audience: "academic", category: "development" },
  { slug: "desktop-remoto", icon: RemoteDesktopIcon, audience: "academic", category: "infrastructure" },
  { slug: "pnetlab", icon: LabNetworkIcon, audience: "academic", category: "utilities" },
  { slug: "maquinas-virtuais", icon: VmIcon, audience: "academic", category: "infrastructure" },
  { slug: "proxmox", icon: ServerStackIcon, audience: "academic", category: "infrastructure" },
  { slug: "opencode-llm-local", icon: OpenCodeAiIcon, audience: "academic", category: "development" },
  { slug: "gerenciamento-webscraping", icon: WebScrapIcon, audience: "academic", category: "data-ai" },
]

/**
 * Ordem de exibição das camadas para cada audiência: a camada selecionada
 * vem primeiro, seguida das demais camadas às quais ela também tem acesso.
 */
const AUDIENCE_ORDER: Record<ServiceAudience, ServiceAudience[]> = {
  public: ["public"],
  partners: ["partners", "public"],
  academic: ["academic", "partners", "public"],
}

/** Retorna os serviços visíveis para uma audiência, de forma cumulativa e com a
 * camada selecionada listada primeiro. */
export function getServicesForAudience(audience: ServiceAudience): Service[] {
  return AUDIENCE_ORDER[audience].flatMap((tier) =>
    SERVICES.filter((service) => service.audience === tier),
  )
}

export function getServiceBySlug(slug: string | undefined): Service | undefined {
  return SERVICES.find((service) => service.slug === slug)
}

/** Retorna o texto traduzido (nome, descrição, detalhes, recursos) de um serviço pelo slug. */
export function getServiceTranslation(dict: Dictionary, slug: string) {
  return dict.services.items[slug as keyof typeof dict.services.items]
}
