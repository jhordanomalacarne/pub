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
} from "../components/ui/ServiceIcon"

export type Service = {
  name: string
  description: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export const SERVICES: Service[] = [
  {
    name: "Wiki",
    description:
      "Páginas de wiki diversas para documentação colaborativa de projetos e do conhecimento técnico do laboratório.",
    icon: WikiIcon,
  },
  {
    name: "BentoPDF",
    description:
      "Manipulador de PDF (juntar, dividir, converter) com processamento local, preservando a privacidade dos arquivos.",
    icon: PdfPrivacyIcon,
  },
  {
    name: "Draw.io",
    description:
      "Editor de diagramas para fluxogramas, arquiteturas de rede e mapas conceituais.",
    icon: DiagramIcon,
  },
  {
    name: "Excalidraw",
    description:
      "Quadro branco colaborativo para esboços e diagramas em estilo desenhado à mão.",
    icon: SketchIcon,
  },
  {
    name: "LimeSurvey",
    description:
      "Plataforma para criação e aplicação de formulários e pesquisas acadêmicas.",
    icon: SurveyIcon,
  },
  {
    name: "Repositório de pacotes Debian",
    description:
      "Repositório público de pacotes Debian mantido pelo laboratório.",
    icon: PackageIcon,
  },
  {
    name: "Servidor de testes IPv6",
    description:
      "Ferramenta para verificar a conectividade e a configuração IPv6 de uma rede.",
    icon: NetworkIcon,
  },
  {
    name: "OpenSpeedTest",
    description:
      "Teste de velocidade de conexão à internet hospedado pelo próprio laboratório.",
    icon: SpeedGaugeIcon,
  },
  {
    name: "Encurtador de URL",
    description: "Serviço para encurtar e compartilhar links de forma simples.",
    icon: LinkIcon,
  },
]
