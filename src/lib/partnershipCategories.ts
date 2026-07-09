import type { ComponentType, SVGProps } from "react"
import { GiftIcon, UsersIcon, CollaborationIcon } from "../components/ui/ServiceIcon"

export type Partner = {
  slug: string
  name: string
  type: string
  /** Texto descrevendo a parceria, usado na página de detalhe do parceiro. */
  details: string
  /**
   * Caminho da logomarca do parceiro. Deixe undefined até haver uma
   * logo real — enquanto isso, os selos exibem as iniciais do nome.
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
      {
        slug: "doador-institucional-a",
        name: "Doador Institucional A",
        type: "Equipamentos",
        details:
          "Doou equipamentos de rede e servidores usados na expansão do datacenter do laboratório.",
      },
      {
        slug: "doador-institucional-b",
        name: "Doador Institucional B",
        type: "Infraestrutura",
        details:
          "Apoiou obras de infraestrutura elétrica e de refrigeração do ambiente de datacenter.",
      },
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
      {
        slug: "instituicao-usuaria-a",
        name: "Instituição Usuária A",
        type: "Ensino",
        details:
          "Utiliza a infraestrutura de rede do laboratório em disciplinas práticas de cursos técnicos.",
      },
      {
        slug: "instituicao-usuaria-b",
        name: "Instituição Usuária B",
        type: "Comunidade",
        details:
          "Comunidade que utiliza os serviços públicos hospedados pelo laboratório no dia a dia.",
      },
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
      {
        slug: "instituicao-parceira-a",
        name: "Instituição Parceira A",
        type: "Universidade",
        details:
          "Desenvolve, em conjunto com o laboratório, projetos de pesquisa em infraestrutura de rede.",
      },
      {
        slug: "instituicao-parceira-b",
        name: "Instituição Parceira B",
        type: "Órgão público",
        details:
          "Parceria voltada à governança digital e à aplicação de políticas públicas de tecnologia.",
      },
      {
        slug: "instituicao-parceira-c",
        name: "Instituição Parceira C",
        type: "Centro de pesquisa",
        details:
          "Colabora em publicações e experimentos conjuntos na área de comunicação e redes.",
      },
    ],
  },
]

export function getPartnershipCategoryBySlug(
  slug: string | undefined,
): PartnershipCategory | undefined {
  return PARTNERSHIP_CATEGORIES.find((category) => category.slug === slug)
}

export function getPartnerBySlug(
  categorySlug: string | undefined,
  partnerSlug: string | undefined,
): { category: PartnershipCategory; partner: Partner } | undefined {
  const category = getPartnershipCategoryBySlug(categorySlug)
  const partner = category?.partners.find((p) => p.slug === partnerSlug)
  if (!category || !partner) return undefined
  return { category, partner }
}

/** Todos os parceiros de todas as categorias, usado no carrossel de logos. */
export const ALL_PARTNERS: Partner[] = PARTNERSHIP_CATEGORIES.flatMap(
  (category) => category.partners,
)
