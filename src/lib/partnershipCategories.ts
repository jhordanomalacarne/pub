import type { ComponentType, SVGProps } from "react"
import { GiftIcon, UsersIcon, CollaborationIcon } from "../components/ui/ServiceIcon"

export type Partner = {
  name: string
  type: string
  /**
   * Caminho da logomarca do parceiro. Deixe undefined até haver uma
   * logo real — enquanto isso, o carrossel exibe um selo com as
   * iniciais do nome.
   */
  logo?: string
}

export type PartnershipCategory = {
  slug: string
  id: string
  label: string
  description: string
  details: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  partners: Partner[]
}

export const PARTNERSHIP_CATEGORIES: PartnershipCategory[] = [
  {
    slug: "doadores",
    id: "doadores",
    label: "Doadores",
    description:
      "Pessoas e instituições que apoiam o laboratório com doações de equipamentos, recursos ou infraestrutura.",
    details:
      "Apoiadores que contribuem com doações de equipamentos, licenças, recursos financeiros ou infraestrutura, viabilizando a manutenção e a expansão das atividades do laboratório.",
    icon: GiftIcon,
    partners: [
      { name: "Doador Institucional A", type: "Equipamentos" },
      { name: "Doador Institucional B", type: "Infraestrutura" },
    ],
  },
  {
    slug: "usuarios",
    id: "usuarios",
    label: "Usuários",
    description:
      "Instituições e comunidades que utilizam a infraestrutura e os serviços mantidos pelo laboratório.",
    details:
      "Instituições, cursos e comunidades que utilizam regularmente a infraestrutura de rede e os serviços públicos disponibilizados pelo laboratório em suas atividades.",
    icon: UsersIcon,
    partners: [
      { name: "Instituição Usuária A", type: "Ensino" },
      { name: "Instituição Usuária B", type: "Comunidade" },
    ],
  },
  {
    slug: "colaboradores",
    id: "colaboradores",
    label: "Colaboradores",
    description:
      "Instituições parceiras que desenvolvem projetos e pesquisas em conjunto com o laboratório.",
    details:
      "Instituições acadêmicas, órgãos públicos e organizações que colaboram diretamente no desenvolvimento de projetos, pesquisas e publicações junto ao laboratório.",
    icon: CollaborationIcon,
    partners: [
      { name: "Instituição Parceira A", type: "Universidade" },
      { name: "Instituição Parceira B", type: "Órgão público" },
      { name: "Instituição Parceira C", type: "Centro de pesquisa" },
    ],
  },
]

export function getPartnershipCategoryBySlug(
  slug: string | undefined,
): PartnershipCategory | undefined {
  return PARTNERSHIP_CATEGORIES.find((category) => category.slug === slug)
}

/** Todos os parceiros de todas as categorias, usado no carrossel de logos. */
export const ALL_PARTNERS: Partner[] = PARTNERSHIP_CATEGORIES.flatMap(
  (category) => category.partners,
)
