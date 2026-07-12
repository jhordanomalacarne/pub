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

export type Service = {
  slug: string
  /**
   * URL pública do serviço. Deixe undefined até o serviço estar disponível —
   * é o único campo que precisa ser preenchido quando cada serviço entrar no ar.
   */
  url?: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  audience: ServiceAudience
}

export const SERVICES: Service[] = [
  // Serviços públicos — abertos a toda a comunidade
  { slug: "bentopdf", icon: PdfPrivacyIcon, audience: "public" },
  { slug: "drawio", icon: DiagramIcon, audience: "public" },
  { slug: "excalidraw", icon: SketchIcon, audience: "public" },
  { slug: "repositorio-debian", icon: PackageIcon, audience: "public" },
  { slug: "teste-ipv6", icon: NetworkIcon, audience: "public" },
  { slug: "openspeedtest", icon: SpeedGaugeIcon, audience: "public" },
  { slug: "encurtador-url", icon: LinkIcon, audience: "public" },
  { slug: "qrcode", icon: QrCodeIcon, audience: "public" },
  { slug: "internet-wifi", icon: PublicWifiIcon, audience: "public" },

  // Exclusivos de parceiros — somados aos públicos
  { slug: "wiki", icon: WikiIcon, audience: "partners" },
  { slug: "limesurvey", icon: SurveyIcon, audience: "partners" },
  { slug: "hospedagem-web", icon: WebHostingIcon, audience: "partners" },
  { slug: "banco-de-dados", icon: DatabaseIcon, audience: "partners" },
  { slug: "metabase", icon: DashboardIcon, audience: "partners" },
  { slug: "openproject", icon: KanbanIcon, audience: "partners" },
  { slug: "gitlab", icon: GitBranchIcon, audience: "partners" },
  { slug: "gerenciamento-automacao", icon: AutomationIcon, audience: "partners" },
  { slug: "n8n", icon: WorkflowIcon, audience: "partners" },
  { slug: "gerenciamento-wifi", icon: WifiManagementIcon, audience: "partners" },
  { slug: "registro-logs", icon: LogsIcon, audience: "partners" },
  { slug: "armazenamento-cameras", icon: CameraStorageIcon, audience: "partners" },
  { slug: "armazenamento-objetos", icon: ObjectStorageIcon, audience: "partners" },
  { slug: "backup", icon: BackupIcon, audience: "partners" },
  { slug: "zabbix", icon: AlertBellIcon, audience: "partners" },
  { slug: "grafana", icon: LineChartIcon, audience: "partners" },
  { slug: "firewall", icon: ShieldIcon, audience: "partners" },
  { slug: "llm-local", icon: LocalAiIcon, audience: "partners" },
  { slug: "gestao-modelos-tokens-ia", icon: TokenManagementIcon, audience: "partners" },
  { slug: "gerenciamento-dns", icon: DnsManagementIcon, audience: "partners" },
  { slug: "roboshadow", icon: RoboShadowIcon, audience: "partners" },
  { slug: "crowdsec", icon: CrowdSecIcon, audience: "partners" },
  { slug: "captive-portal", icon: CaptivePortalIcon, audience: "partners" },
  { slug: "map-server", icon: MapServerIcon, audience: "partners" },
  { slug: "opendronemap", icon: DroneMapIcon, audience: "partners" },

  // Exclusivos da comunidade acadêmica do IFRO — somados aos anteriores
  { slug: "ide-eclipse-che", icon: CodeIcon, audience: "academic" },
  { slug: "desktop-remoto", icon: RemoteDesktopIcon, audience: "academic" },
  { slug: "pnetlab", icon: LabNetworkIcon, audience: "academic" },
  { slug: "maquinas-virtuais", icon: VmIcon, audience: "academic" },
  { slug: "proxmox", icon: ServerStackIcon, audience: "academic" },
  { slug: "opencode-llm-local", icon: OpenCodeAiIcon, audience: "academic" },
  { slug: "gerenciamento-webscraping", icon: WebScrapIcon, audience: "academic" },
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
