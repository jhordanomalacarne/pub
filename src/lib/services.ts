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
} from "../components/ui/ServiceIcon"

/**
 * Dados estruturais dos serviços. Nome, descrição, detalhes e recursos de
 * cada serviço ficam nos dicionários de tradução (src/i18n/dictionaries),
 * em services.items.<slug>, para evitar duplicar o conteúdo em três idiomas.
 */
export type Service = {
  slug: string
  /**
   * URL pública do serviço. Deixe undefined até o serviço estar disponível —
   * é o único campo que precisa ser preenchido quando cada serviço entrar no ar.
   */
  url?: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export const SERVICES: Service[] = [
  { slug: "wiki", icon: WikiIcon },
  { slug: "bentopdf", icon: PdfPrivacyIcon },
  { slug: "drawio", icon: DiagramIcon },
  { slug: "excalidraw", icon: SketchIcon },
  { slug: "limesurvey", icon: SurveyIcon },
  { slug: "repositorio-debian", icon: PackageIcon },
  { slug: "teste-ipv6", icon: NetworkIcon },
  { slug: "openspeedtest", icon: SpeedGaugeIcon },
  { slug: "encurtador-url", icon: LinkIcon },
  { slug: "qrcode", icon: QrCodeIcon },
]

export function getServiceBySlug(slug: string | undefined): Service | undefined {
  return SERVICES.find((service) => service.slug === slug)
}

/** Retorna o texto traduzido (nome, descrição, detalhes, recursos) de um serviço pelo slug. */
export function getServiceTranslation(dict: Dictionary, slug: string) {
  return dict.services.items[slug as keyof typeof dict.services.items]
}
