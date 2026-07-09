import type { ComponentType, SVGProps } from "react"
import { GiftIcon, UsersIcon, CollaborationIcon } from "../components/ui/ServiceIcon"
import type { LocalizedText } from "../i18n/languages"

export type Partner = {
  slug: string
  name: LocalizedText
  type: LocalizedText
  /** Texto descrevendo a parceria, usado na página de detalhe do parceiro. */
  details: LocalizedText
  /**
   * Caminho da logomarca do parceiro. Deixe undefined até haver uma
   * logo real — enquanto isso, os selos exibem as iniciais do nome.
   */
  logo?: string
}

export type PartnershipCategory = {
  slug: string
  id: string
  label: LocalizedText
  description: LocalizedText
  details: LocalizedText
  icon: ComponentType<SVGProps<SVGSVGElement>>
  partners: Partner[]
}

export const PARTNERSHIP_CATEGORIES: PartnershipCategory[] = [
  {
    slug: "doadores",
    id: "doadores",
    label: { pt: "Doadores", en: "Donors", es: "Donantes" },
    description: {
      pt: "Pessoas e instituições que apoiam o laboratório com doações de equipamentos, recursos ou infraestrutura.",
      en: "People and institutions that support the laboratory with donations of equipment, resources or infrastructure.",
      es: "Personas e instituciones que apoyan al laboratorio con donaciones de equipos, recursos o infraestructura.",
    },
    details: {
      pt: "Apoiadores que contribuem com doações de equipamentos, licenças, recursos financeiros ou infraestrutura, viabilizando a manutenção e a expansão das atividades do laboratório.",
      en: "Supporters who contribute donations of equipment, licenses, financial resources or infrastructure, enabling the maintenance and expansion of the laboratory's activities.",
      es: "Colaboradores que aportan donaciones de equipos, licencias, recursos financieros o infraestructura, permitiendo el mantenimiento y la expansión de las actividades del laboratorio.",
    },
    icon: GiftIcon,
    partners: [
      {
        slug: "doador-institucional-a",
        name: { pt: "Doador Institucional A", en: "Institutional Donor A", es: "Donante Institucional A" },
        type: { pt: "Equipamentos", en: "Equipment", es: "Equipos" },
        details: {
          pt: "Doou equipamentos de rede e servidores usados na expansão do datacenter do laboratório.",
          en: "Donated network equipment and servers used to expand the laboratory's datacenter.",
          es: "Donó equipos de red y servidores utilizados en la expansión del centro de datos del laboratorio.",
        },
      },
      {
        slug: "doador-institucional-b",
        name: { pt: "Doador Institucional B", en: "Institutional Donor B", es: "Donante Institucional B" },
        type: { pt: "Infraestrutura", en: "Infrastructure", es: "Infraestructura" },
        details: {
          pt: "Apoiou obras de infraestrutura elétrica e de refrigeração do ambiente de datacenter.",
          en: "Supported electrical and cooling infrastructure works for the datacenter environment.",
          es: "Apoyó obras de infraestructura eléctrica y de refrigeración del entorno del centro de datos.",
        },
      },
      {
        slug: "doador-institucional-c",
        name: { pt: "Doador Institucional C", en: "Institutional Donor C", es: "Donante Institucional C" },
        type: { pt: "Recursos financeiros", en: "Financial resources", es: "Recursos financieros" },
        details: {
          pt: "Contribuiu com recursos financeiros destinados à renovação de licenças e softwares.",
          en: "Contributed financial resources for the renewal of licenses and software.",
          es: "Aportó recursos financieros destinados a la renovación de licencias y software.",
        },
      },
    ],
  },
  {
    slug: "usuarios",
    id: "usuarios",
    label: { pt: "Usuários", en: "Users", es: "Usuarios" },
    description: {
      pt: "Instituições e comunidades que utilizam a infraestrutura e os serviços mantidos pelo laboratório.",
      en: "Institutions and communities that use the infrastructure and services maintained by the laboratory.",
      es: "Instituciones y comunidades que utilizan la infraestructura y los servicios mantenidos por el laboratorio.",
    },
    details: {
      pt: "Instituições, cursos e comunidades que utilizam regularmente a infraestrutura de rede e os serviços públicos disponibilizados pelo laboratório em suas atividades.",
      en: "Institutions, courses and communities that regularly use the network infrastructure and public services made available by the laboratory in their activities.",
      es: "Instituciones, cursos y comunidades que utilizan regularmente la infraestructura de red y los servicios públicos puestos a disposición por el laboratorio en sus actividades.",
    },
    icon: UsersIcon,
    partners: [
      {
        slug: "instituicao-usuaria-a",
        name: { pt: "Instituição Usuária A", en: "User Institution A", es: "Institución Usuaria A" },
        type: { pt: "Ensino", en: "Education", es: "Enseñanza" },
        details: {
          pt: "Utiliza a infraestrutura de rede do laboratório em disciplinas práticas de cursos técnicos.",
          en: "Uses the laboratory's network infrastructure in hands-on classes of technical courses.",
          es: "Utiliza la infraestructura de red del laboratorio en asignaturas prácticas de cursos técnicos.",
        },
      },
      {
        slug: "instituicao-usuaria-b",
        name: { pt: "Instituição Usuária B", en: "User Institution B", es: "Institución Usuaria B" },
        type: { pt: "Comunidade", en: "Community", es: "Comunidad" },
        details: {
          pt: "Comunidade que utiliza os serviços públicos hospedados pelo laboratório no dia a dia.",
          en: "Community that uses the public services hosted by the laboratory on a daily basis.",
          es: "Comunidad que utiliza a diario los servicios públicos alojados por el laboratorio.",
        },
      },
      {
        slug: "instituicao-usuaria-c",
        name: { pt: "Instituição Usuária C", en: "User Institution C", es: "Institución Usuaria C" },
        type: { pt: "Ensino", en: "Education", es: "Enseñanza" },
        details: {
          pt: "Utiliza os laboratórios de rede remotos para aulas práticas de graduação.",
          en: "Uses the remote network labs for hands-on undergraduate classes.",
          es: "Utiliza los laboratorios de red remotos para clases prácticas de grado.",
        },
      },
      {
        slug: "instituicao-usuaria-d",
        name: { pt: "Instituição Usuária D", en: "User Institution D", es: "Institución Usuaria D" },
        type: { pt: "Órgão público", en: "Public body", es: "Organismo público" },
        details: {
          pt: "Usa a infraestrutura de hospedagem do laboratório para sistemas internos de pequeno porte.",
          en: "Uses the laboratory's hosting infrastructure for small internal systems.",
          es: "Utiliza la infraestructura de alojamiento del laboratorio para sistemas internos de pequeña escala.",
        },
      },
      {
        slug: "instituicao-usuaria-e",
        name: { pt: "Instituição Usuária E", en: "User Institution E", es: "Institución Usuaria E" },
        type: { pt: "Startup", en: "Startup", es: "Startup" },
        details: {
          pt: "Startup que utiliza o datacenter do laboratório para testes de suas soluções em estágio inicial.",
          en: "Startup that uses the laboratory's datacenter to test its early-stage solutions.",
          es: "Startup que utiliza el centro de datos del laboratorio para probar sus soluciones en etapa inicial.",
        },
      },
    ],
  },
  {
    slug: "colaboradores",
    id: "colaboradores",
    label: { pt: "Colaboradores", en: "Collaborators", es: "Colaboradores" },
    description: {
      pt: "Instituições parceiras que desenvolvem projetos e pesquisas em conjunto com o laboratório.",
      en: "Partner institutions that jointly develop projects and research with the laboratory.",
      es: "Instituciones asociadas que desarrollan proyectos e investigaciones en conjunto con el laboratorio.",
    },
    details: {
      pt: "Instituições acadêmicas, órgãos públicos e organizações que colaboram diretamente no desenvolvimento de projetos, pesquisas e publicações junto ao laboratório.",
      en: "Academic institutions, public bodies and organizations that collaborate directly on the development of projects, research and publications with the laboratory.",
      es: "Instituciones académicas, organismos públicos y organizaciones que colaboran directamente en el desarrollo de proyectos, investigaciones y publicaciones junto al laboratorio.",
    },
    icon: CollaborationIcon,
    partners: [
      {
        slug: "instituicao-parceira-a",
        name: { pt: "Instituição Parceira A", en: "Partner Institution A", es: "Institución Asociada A" },
        type: { pt: "Universidade", en: "University", es: "Universidad" },
        details: {
          pt: "Desenvolve, em conjunto com o laboratório, projetos de pesquisa em infraestrutura de rede.",
          en: "Develops network infrastructure research projects jointly with the laboratory.",
          es: "Desarrolla, junto con el laboratorio, proyectos de investigación en infraestructura de red.",
        },
      },
      {
        slug: "instituicao-parceira-b",
        name: { pt: "Instituição Parceira B", en: "Partner Institution B", es: "Institución Asociada B" },
        type: { pt: "Órgão público", en: "Public body", es: "Organismo público" },
        details: {
          pt: "Parceria voltada à governança digital e à aplicação de políticas públicas de tecnologia.",
          en: "Partnership focused on digital governance and the application of public technology policies.",
          es: "Alianza orientada a la gobernanza digital y a la aplicación de políticas públicas de tecnología.",
        },
      },
      {
        slug: "instituicao-parceira-c",
        name: { pt: "Instituição Parceira C", en: "Partner Institution C", es: "Institución Asociada C" },
        type: { pt: "Centro de pesquisa", en: "Research center", es: "Centro de investigación" },
        details: {
          pt: "Colabora em publicações e experimentos conjuntos na área de comunicação e redes.",
          en: "Collaborates on joint publications and experiments in the field of communication and networks.",
          es: "Colabora en publicaciones y experimentos conjuntos en el área de comunicación y redes.",
        },
      },
      {
        slug: "instituicao-parceira-d",
        name: { pt: "Instituição Parceira D", en: "Partner Institution D", es: "Institución Asociada D" },
        type: { pt: "Universidade", en: "University", es: "Universidad" },
        details: {
          pt: "Parceria em projetos de extensão universitária e formação de pesquisadores.",
          en: "Partnership in university outreach projects and researcher training.",
          es: "Alianza en proyectos de extensión universitaria y formación de investigadores.",
        },
      },
      {
        slug: "instituicao-parceira-e",
        name: { pt: "Instituição Parceira E", en: "Partner Institution E", es: "Institución Asociada E" },
        type: { pt: "Órgão público", en: "Public body", es: "Organismo público" },
        details: {
          pt: "Cooperação técnica em iniciativas de governança digital do setor público.",
          en: "Technical cooperation on digital governance initiatives in the public sector.",
          es: "Cooperación técnica en iniciativas de gobernanza digital del sector público.",
        },
      },
      {
        slug: "instituicao-parceira-f",
        name: { pt: "Instituição Parceira F", en: "Partner Institution F", es: "Institución Asociada F" },
        type: {
          pt: "Organização da sociedade civil",
          en: "Civil society organization",
          es: "Organización de la sociedad civil",
        },
        details: {
          pt: "Atua junto ao laboratório em projetos de inclusão digital e formação comunitária.",
          en: "Works with the laboratory on digital inclusion and community training projects.",
          es: "Trabaja junto al laboratorio en proyectos de inclusión digital y formación comunitaria.",
        },
      },
      {
        slug: "instituicao-parceira-g",
        name: { pt: "Instituição Parceira G", en: "Partner Institution G", es: "Institución Asociada G" },
        type: { pt: "Centro de pesquisa", en: "Research center", es: "Centro de investigación" },
        details: {
          pt: "Desenvolve, em conjunto, pesquisas aplicadas em segurança de redes.",
          en: "Jointly develops applied research in network security.",
          es: "Desarrolla en conjunto investigaciones aplicadas en seguridad de redes.",
        },
      },
      {
        slug: "instituicao-parceira-h",
        name: { pt: "Instituição Parceira H", en: "Partner Institution H", es: "Institución Asociada H" },
        type: { pt: "Empresa parceira", en: "Partner company", es: "Empresa asociada" },
        details: {
          pt: "Colabora no desenvolvimento de soluções personalizadas de infraestrutura.",
          en: "Collaborates on the development of custom infrastructure solutions.",
          es: "Colabora en el desarrollo de soluciones personalizadas de infraestructura.",
        },
      },
      {
        slug: "instituicao-parceira-i",
        name: { pt: "Instituição Parceira I", en: "Partner Institution I", es: "Institución Asociada I" },
        type: { pt: "Universidade", en: "University", es: "Universidad" },
        details: {
          pt: "Parceria em programas de pós-graduação e coorientação de pesquisas aplicadas.",
          en: "Partnership in graduate programs and co-supervision of applied research.",
          es: "Alianza en programas de posgrado y codirección de investigaciones aplicadas.",
        },
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
