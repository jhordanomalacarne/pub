import type { ComponentType, SVGProps } from "react"
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

export type Service = {
  slug: string
  name: string
  /** Frase curta usada nos cards de listagem. */
  description: string
  /** Texto mais completo usado na página de detalhe do serviço. */
  details: string
  features: string[]
  /**
   * URL pública do serviço. Deixe undefined até o serviço estar disponível —
   * é o único campo que precisa ser preenchido quando cada serviço entrar no ar.
   */
  url?: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export const SERVICES: Service[] = [
  {
    slug: "wiki",
    name: "Wiki",
    description:
      "Páginas de wiki diversas para documentação colaborativa de projetos e do conhecimento técnico do laboratório.",
    details:
      "Espaço de documentação colaborativa mantido pelo laboratório, reunindo páginas sobre projetos, procedimentos técnicos, tutoriais e registros de conhecimento produzidos pela equipe.",
    features: [
      "Edição colaborativa entre membros do laboratório",
      "Histórico de versões das páginas",
      "Organização por categorias e projetos",
    ],
    icon: WikiIcon,
  },
  {
    slug: "bentopdf",
    name: "BentoPDF",
    description:
      "Manipulador de PDF (juntar, dividir, converter) com processamento local, preservando a privacidade dos arquivos.",
    details:
      "Ferramenta para juntar, dividir, comprimir e converter arquivos PDF diretamente no navegador, sem enviar os documentos a servidores externos — todo o processamento acontece localmente, preservando a privacidade do conteúdo.",
    features: [
      "Processamento local, sem upload dos arquivos",
      "Juntar, dividir, comprimir e converter PDFs",
      "Sem necessidade de cadastro",
    ],
    icon: PdfPrivacyIcon,
  },
  {
    slug: "drawio",
    name: "Draw.io",
    description:
      "Editor de diagramas para fluxogramas, arquiteturas de rede e mapas conceituais.",
    details:
      "Editor de diagramas para criação de fluxogramas, arquiteturas de rede, mapas mentais e mapas conceituais, com exportação em diversos formatos.",
    features: [
      "Modelos prontos para diagramas de rede",
      "Exportação em PNG, SVG e PDF",
      "Integração com serviços de armazenamento em nuvem",
    ],
    icon: DiagramIcon,
  },
  {
    slug: "excalidraw",
    name: "Excalidraw",
    description:
      "Quadro branco colaborativo para esboços e diagramas em estilo desenhado à mão.",
    details:
      "Quadro branco colaborativo com estilo de desenho à mão livre, ideal para esboçar ideias, arquiteturas e explicações visuais em tempo real com outras pessoas.",
    features: [
      "Colaboração em tempo real",
      "Estilo de desenho à mão livre",
      "Exportação como imagem (PNG/SVG)",
    ],
    icon: SketchIcon,
  },
  {
    slug: "limesurvey",
    name: "LimeSurvey",
    description:
      "Plataforma para criação e aplicação de formulários e pesquisas acadêmicas.",
    details:
      "Plataforma para criação, aplicação e análise de formulários e pesquisas acadêmicas, utilizada em coletas de dados de projetos do laboratório e do grupo de pesquisa.",
    features: [
      "Diversos tipos de pergunta e lógica condicional",
      "Exportação dos resultados coletados",
      "Suporte a pesquisas anônimas",
    ],
    icon: SurveyIcon,
  },
  {
    slug: "repositorio-debian",
    name: "Repositório de pacotes Debian",
    description:
      "Repositório público de pacotes Debian mantido pelo laboratório.",
    details:
      "Repositório público de pacotes Debian mantido pelo laboratório, disponibilizando pacotes utilizados nos projetos de infraestrutura de rede desenvolvidos pela equipe.",
    features: [
      "Espelho de pacotes atualizado periodicamente",
      "Acesso público via apt",
      "Documentação de configuração do repositório",
    ],
    icon: PackageIcon,
  },
  {
    slug: "teste-ipv6",
    name: "Servidor de testes IPv6",
    description:
      "Ferramenta para verificar a conectividade e a configuração IPv6 de uma rede.",
    details:
      "Ferramenta para verificar se uma rede e um dispositivo possuem conectividade IPv6 funcional, além de ajudar a diagnosticar problemas comuns de configuração.",
    features: [
      "Teste de conectividade IPv6",
      "Diagnóstico de problemas de configuração",
      "Relatório simples de resultados",
    ],
    icon: NetworkIcon,
  },
  {
    slug: "openspeedtest",
    name: "OpenSpeedTest",
    description:
      "Teste de velocidade de conexão à internet hospedado pelo próprio laboratório.",
    details:
      "Servidor de teste de velocidade de internet hospedado pelo laboratório, permitindo medir download, upload e latência sem depender de serviços de terceiros.",
    features: [
      "Teste de download e upload",
      "Medição de latência (ping)",
      "Sem necessidade de plugins",
    ],
    icon: SpeedGaugeIcon,
  },
  {
    slug: "encurtador-url",
    name: "Encurtador de URL",
    description: "Serviço para encurtar e compartilhar links de forma simples.",
    details:
      "Serviço para encurtar links longos, facilitando o compartilhamento de materiais, formulários e páginas do laboratório.",
    features: [
      "Geração instantânea de links curtos",
      "Estatísticas básicas de acesso",
      "Links personalizáveis",
    ],
    icon: LinkIcon,
  },
  {
    slug: "qrcode",
    name: "Gerador de QR Code",
    description:
      "Geração de QR Codes personalizados para divulgação de materiais, eventos e serviços do laboratório.",
    details:
      "Ferramenta para criação de QR Codes personalizados — com cores e formato ajustáveis — para uso em materiais impressos, apresentações e divulgação de eventos e serviços do laboratório.",
    features: [
      "Personalização de cores e formato",
      "Exportação em alta resolução",
      "Geração rápida, sem cadastro",
    ],
    icon: QrCodeIcon,
  },
]

export function getServiceBySlug(slug: string | undefined): Service | undefined {
  return SERVICES.find((service) => service.slug === slug)
}
