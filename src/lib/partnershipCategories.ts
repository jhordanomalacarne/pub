import type { ComponentType, SVGProps } from "react"
import { GiftIcon, UsersIcon, CollaborationIcon } from "../components/ui/ServiceIcon"
import type { LocalizedText, LocalizedList } from "../i18n/languages"

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
  /** Campos detalhados da parceria, exibidos na página individual do parceiro. */
  objective: LocalizedText
  startDate: LocalizedText
  expectedEndDate: LocalizedText
  status: LocalizedText
  expectedResults: LocalizedText
  achievedResults: LocalizedText
  /** Número do processo administrativo referente à parceria — não varia por idioma. */
  referenceDocument: string
  responsibleParties: LocalizedList
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
        objective: {
          pt: "Doação de equipamentos de rede para expansão da capacidade do datacenter.",
          en: "Donation of network equipment to expand the datacenter's capacity.",
          es: "Donación de equipos de red para ampliar la capacidad del centro de datos.",
        },
        startDate: { pt: "Março de 2023", en: "March 2023", es: "Marzo de 2023" },
        expectedEndDate: {
          pt: "Doação pontual, sem prazo de encerramento",
          en: "One-time donation, no end date",
          es: "Donación puntual, sin plazo de finalización",
        },
        status: { pt: "Concluída", en: "Completed", es: "Completada" },
        expectedResults: {
          pt: "Ampliar a capacidade de processamento e armazenamento do datacenter do laboratório.",
          en: "Expand the processing and storage capacity of the laboratory's datacenter.",
          es: "Ampliar la capacidad de procesamiento y almacenamiento del centro de datos del laboratorio.",
        },
        achievedResults: {
          pt: "Equipamentos instalados e em operação, ampliando em 30% a capacidade do datacenter.",
          en: "Equipment installed and in operation, expanding the datacenter's capacity by 30%.",
          es: "Equipos instalados y en funcionamiento, ampliando en un 30% la capacidad del centro de datos.",
        },
        referenceDocument: "Processo nº 23422.000145/2023-10",
        responsibleParties: {
          pt: ["Maria Silva — Coordenadora do laboratório", "João Torres — Responsável técnico do doador"],
          en: ["Maria Silva — Laboratory coordinator", "João Torres — Donor's technical lead"],
          es: ["Maria Silva — Coordinadora del laboratorio", "João Torres — Responsable técnico del donante"],
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
        objective: {
          pt: "Apoio a obras de infraestrutura elétrica e refrigeração do datacenter.",
          en: "Support for electrical and cooling infrastructure works at the datacenter.",
          es: "Apoyo a obras de infraestructura eléctrica y refrigeración del centro de datos.",
        },
        startDate: { pt: "Julho de 2023", en: "July 2023", es: "Julio de 2023" },
        expectedEndDate: { pt: "Dezembro de 2023", en: "December 2023", es: "Diciembre de 2023" },
        status: { pt: "Concluída", en: "Completed", es: "Completada" },
        expectedResults: {
          pt: "Adequar o ambiente físico às exigências de segurança e eficiência energética.",
          en: "Adapt the physical environment to safety and energy-efficiency requirements.",
          es: "Adecuar el entorno físico a las exigencias de seguridad y eficiencia energética.",
        },
        achievedResults: {
          pt: "Instalação concluída, com redução de 15% no consumo de energia do datacenter.",
          en: "Installation completed, reducing the datacenter's energy consumption by 15%.",
          es: "Instalación concluida, con una reducción del 15% en el consumo de energía del centro de datos.",
        },
        referenceDocument: "Processo nº 23422.000198/2023-44",
        responsibleParties: {
          pt: ["Carlos Andrade — Coordenador de infraestrutura", "Patrícia Nunes — Engenheira responsável"],
          en: ["Carlos Andrade — Infrastructure coordinator", "Patrícia Nunes — Lead engineer"],
          es: ["Carlos Andrade — Coordinador de infraestructura", "Patrícia Nunes — Ingeniera responsable"],
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
        objective: {
          pt: "Aporte de recursos financeiros para renovação de licenças de software.",
          en: "Financial contribution for the renewal of software licenses.",
          es: "Aporte de recursos financieros para la renovación de licencias de software.",
        },
        startDate: { pt: "Janeiro de 2024", en: "January 2024", es: "Enero de 2024" },
        expectedEndDate: {
          pt: "Parceria renovável anualmente",
          en: "Partnership renewed annually",
          es: "Alianza renovable anualmente",
        },
        status: { pt: "Em desenvolvimento", en: "In progress", es: "En desarrollo" },
        expectedResults: {
          pt: "Manter atualizadas as licenças de softwares essenciais às atividades do laboratório.",
          en: "Keep the software licenses essential to the laboratory's activities up to date.",
          es: "Mantener actualizadas las licencias de software esenciales para las actividades del laboratorio.",
        },
        achievedResults: {
          pt: "Renovação do primeiro ciclo de licenças concluída.",
          en: "First license renewal cycle completed.",
          es: "Renovación del primer ciclo de licencias concluida.",
        },
        referenceDocument: "Processo nº 23422.000212/2024-07",
        responsibleParties: {
          pt: ["Fernanda Lima — Coordenadora administrativa", "Roberto Dias — Gestor financeiro do doador"],
          en: ["Fernanda Lima — Administrative coordinator", "Roberto Dias — Donor's financial manager"],
          es: ["Fernanda Lima — Coordinadora administrativa", "Roberto Dias — Gestor financiero del donante"],
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
        objective: {
          pt: "Uso da infraestrutura de rede em disciplinas práticas de cursos técnicos.",
          en: "Use of the network infrastructure in hands-on classes of technical courses.",
          es: "Uso de la infraestructura de red en asignaturas prácticas de cursos técnicos.",
        },
        startDate: { pt: "Fevereiro de 2022", en: "February 2022", es: "Febrero de 2022" },
        expectedEndDate: {
          pt: "Parceria contínua, renovada a cada semestre letivo",
          en: "Ongoing partnership, renewed every academic term",
          es: "Alianza continua, renovada cada semestre lectivo",
        },
        status: { pt: "Em desenvolvimento", en: "In progress", es: "En desarrollo" },
        expectedResults: {
          pt: "Oferecer ambiente prático de redes para a formação técnica dos alunos.",
          en: "Provide a hands-on network environment for students' technical training.",
          es: "Ofrecer un entorno práctico de redes para la formación técnica de los alumnos.",
        },
        achievedResults: {
          pt: "Mais de 200 alunos capacitados em atividades práticas desde o início da parceria.",
          en: "Over 200 students trained in hands-on activities since the partnership began.",
          es: "Más de 200 alumnos capacitados en actividades prácticas desde el inicio de la alianza.",
        },
        referenceDocument: "Processo nº 23422.000067/2022-15",
        responsibleParties: {
          pt: ["Ana Beatriz Souza — Coordenadora pedagógica", "Lucas Ferreira — Responsável técnico do laboratório"],
          en: ["Ana Beatriz Souza — Pedagogical coordinator", "Lucas Ferreira — Laboratory technical lead"],
          es: ["Ana Beatriz Souza — Coordinadora pedagógica", "Lucas Ferreira — Responsable técnico del laboratorio"],
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
        objective: {
          pt: "Disponibilização dos serviços públicos do laboratório para uso comunitário.",
          en: "Making the laboratory's public services available for community use.",
          es: "Puesta a disposición de los servicios públicos del laboratorio para uso comunitario.",
        },
        startDate: { pt: "Maio de 2022", en: "May 2022", es: "Mayo de 2022" },
        expectedEndDate: {
          pt: "Sem prazo de encerramento definido",
          en: "No end date defined",
          es: "Sin plazo de finalización definido",
        },
        status: { pt: "Em desenvolvimento", en: "In progress", es: "En desarrollo" },
        expectedResults: {
          pt: "Ampliar o acesso da comunidade a ferramentas digitais gratuitas e seguras.",
          en: "Expand community access to free, secure digital tools.",
          es: "Ampliar el acceso de la comunidad a herramientas digitales gratuitas y seguras.",
        },
        achievedResults: {
          pt: "Serviços utilizados de forma contínua por moradores e organizações locais.",
          en: "Services used continuously by residents and local organizations.",
          es: "Servicios utilizados de forma continua por residentes y organizaciones locales.",
        },
        referenceDocument: "Processo nº 23422.000091/2022-32",
        responsibleParties: {
          pt: ["Juliana Castro — Articuladora comunitária", "Pedro Henrique Alves — Responsável técnico"],
          en: ["Juliana Castro — Community liaison", "Pedro Henrique Alves — Technical lead"],
          es: ["Juliana Castro — Articuladora comunitaria", "Pedro Henrique Alves — Responsable técnico"],
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
        objective: {
          pt: "Uso dos laboratórios de rede remotos para aulas práticas de graduação.",
          en: "Use of the remote network labs for hands-on undergraduate classes.",
          es: "Uso de los laboratorios de red remotos para clases prácticas de grado.",
        },
        startDate: { pt: "Agosto de 2023", en: "August 2023", es: "Agosto de 2023" },
        expectedEndDate: {
          pt: "Parceria contínua, renovada anualmente",
          en: "Ongoing partnership, renewed annually",
          es: "Alianza continua, renovada anualmente",
        },
        status: { pt: "Em desenvolvimento", en: "In progress", es: "En desarrollo" },
        expectedResults: {
          pt: "Complementar a formação prática de alunos de graduação em redes de computadores.",
          en: "Complement undergraduate students' hands-on training in computer networks.",
          es: "Complementar la formación práctica de estudiantes de grado en redes de computadoras.",
        },
        achievedResults: {
          pt: "Realização de mais de 40 aulas práticas remotas desde o início da parceria.",
          en: "Over 40 remote hands-on classes held since the partnership began.",
          es: "Más de 40 clases prácticas remotas realizadas desde el inicio de la alianza.",
        },
        referenceDocument: "Processo nº 23422.000134/2023-21",
        responsibleParties: {
          pt: ["Rafael Nogueira — Professor responsável", "Camila Duarte — Coordenadora técnica do laboratório"],
          en: ["Rafael Nogueira — Responsible professor", "Camila Duarte — Laboratory technical coordinator"],
          es: ["Rafael Nogueira — Profesor responsable", "Camila Duarte — Coordinadora técnica del laboratorio"],
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
        objective: {
          pt: "Hospedagem de sistemas internos de pequeno porte na infraestrutura do laboratório.",
          en: "Hosting small internal systems on the laboratory's infrastructure.",
          es: "Alojamiento de sistemas internos de pequeña escala en la infraestructura del laboratorio.",
        },
        startDate: { pt: "Outubro de 2023", en: "October 2023", es: "Octubre de 2023" },
        expectedEndDate: { pt: "Dezembro de 2026", en: "December 2026", es: "Diciembre de 2026" },
        status: { pt: "Em desenvolvimento", en: "In progress", es: "En desarrollo" },
        expectedResults: {
          pt: "Garantir disponibilidade e segurança para os sistemas hospedados.",
          en: "Ensure availability and security for the hosted systems.",
          es: "Garantizar disponibilidad y seguridad para los sistemas alojados.",
        },
        achievedResults: {
          pt: "Sistemas em operação estável, com disponibilidade média de 99,5%.",
          en: "Systems running stably, with average availability of 99.5%.",
          es: "Sistemas en funcionamiento estable, con disponibilidad promedio del 99,5%.",
        },
        referenceDocument: "Processo nº 23422.000156/2023-38",
        responsibleParties: {
          pt: ["Marcelo Ribeiro — Gestor de TI do órgão", "Bianca Martins — Responsável pela hospedagem"],
          en: ["Marcelo Ribeiro — IT manager of the public body", "Bianca Martins — Hosting lead"],
          es: ["Marcelo Ribeiro — Gestor de TI del organismo", "Bianca Martins — Responsable del alojamiento"],
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
        objective: {
          pt: "Uso do datacenter do laboratório para testes de soluções em estágio inicial.",
          en: "Use of the laboratory's datacenter to test early-stage solutions.",
          es: "Uso del centro de datos del laboratorio para probar soluciones en etapa inicial.",
        },
        startDate: { pt: "Janeiro de 2025", en: "January 2025", es: "Enero de 2025" },
        expectedEndDate: { pt: "Junho de 2026", en: "June 2026", es: "Junio de 2026" },
        status: { pt: "Em fase de negociação", en: "In negotiation", es: "En fase de negociación" },
        expectedResults: {
          pt: "Validar tecnicamente as soluções da startup em ambiente controlado.",
          en: "Technically validate the startup's solutions in a controlled environment.",
          es: "Validar técnicamente las soluciones de la startup en un entorno controlado.",
        },
        achievedResults: {
          pt: "Ainda não há resultados a relatar — parceria em fase de formalização.",
          en: "No results to report yet — partnership is being formalized.",
          es: "Aún no hay resultados que reportar — alianza en fase de formalización.",
        },
        referenceDocument: "Processo nº 23422.000021/2025-09",
        responsibleParties: {
          pt: ["Diego Martins — Fundador da startup", "Letícia Prado — Coordenadora de parcerias do laboratório"],
          en: ["Diego Martins — Startup founder", "Letícia Prado — Laboratory partnerships coordinator"],
          es: ["Diego Martins — Fundador de la startup", "Letícia Prado — Coordinadora de alianzas del laboratorio"],
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
        objective: {
          pt: "Desenvolvimento conjunto de projetos de pesquisa em infraestrutura de rede.",
          en: "Joint development of research projects in network infrastructure.",
          es: "Desarrollo conjunto de proyectos de investigación en infraestructura de red.",
        },
        startDate: { pt: "Março de 2021", en: "March 2021", es: "Marzo de 2021" },
        expectedEndDate: { pt: "Dezembro de 2026", en: "December 2026", es: "Diciembre de 2026" },
        status: { pt: "Em desenvolvimento", en: "In progress", es: "En desarrollo" },
        expectedResults: {
          pt: "Produzir conhecimento aplicado sobre infraestrutura de rede e publicações conjuntas.",
          en: "Produce applied knowledge on network infrastructure and joint publications.",
          es: "Producir conocimiento aplicado sobre infraestructura de red y publicaciones conjuntas.",
        },
        achievedResults: {
          pt: "Publicação de 4 artigos científicos e 1 relatório técnico em conjunto.",
          en: "4 scientific papers and 1 joint technical report published.",
          es: "Publicación de 4 artículos científicos y 1 informe técnico en conjunto.",
        },
        referenceDocument: "Processo nº 23422.000034/2021-56",
        responsibleParties: {
          pt: ["Prof. Eduardo Campos — Coordenador de pesquisa", "Larissa Ramos — Pesquisadora responsável"],
          en: ["Prof. Eduardo Campos — Research coordinator", "Larissa Ramos — Lead researcher"],
          es: ["Prof. Eduardo Campos — Coordinador de investigación", "Larissa Ramos — Investigadora responsable"],
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
        objective: {
          pt: "Cooperação técnica voltada à governança digital e a políticas públicas de tecnologia.",
          en: "Technical cooperation focused on digital governance and public technology policies.",
          es: "Cooperación técnica orientada a la gobernanza digital y a las políticas públicas de tecnología.",
        },
        startDate: { pt: "Junho de 2022", en: "June 2022", es: "Junio de 2022" },
        expectedEndDate: { pt: "Junho de 2025", en: "June 2025", es: "Junio de 2025" },
        status: { pt: "Em desenvolvimento", en: "In progress", es: "En desarrollo" },
        expectedResults: {
          pt: "Apoiar a formulação de diretrizes de governança digital no setor público.",
          en: "Support the formulation of digital governance guidelines in the public sector.",
          es: "Apoyar la formulación de directrices de gobernanza digital en el sector público.",
        },
        achievedResults: {
          pt: "Elaboração conjunta de um guia preliminar de boas práticas.",
          en: "Joint drafting of a preliminary best-practices guide.",
          es: "Elaboración conjunta de una guía preliminar de buenas prácticas.",
        },
        referenceDocument: "Processo nº 23422.000078/2022-19",
        responsibleParties: {
          pt: ["Tatiane Gonçalves — Representante do órgão público", "Henrique Bastos — Coordenador da parceria"],
          en: ["Tatiane Gonçalves — Public body representative", "Henrique Bastos — Partnership coordinator"],
          es: ["Tatiane Gonçalves — Representante del organismo público", "Henrique Bastos — Coordinador de la alianza"],
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
        objective: {
          pt: "Colaboração em publicações e experimentos conjuntos na área de comunicação e redes.",
          en: "Collaboration on joint publications and experiments in communication and networks.",
          es: "Colaboración en publicaciones y experimentos conjuntos en el área de comunicación y redes.",
        },
        startDate: { pt: "Setembro de 2022", en: "September 2022", es: "Septiembre de 2022" },
        expectedEndDate: { pt: "Setembro de 2025", en: "September 2025", es: "Septiembre de 2025" },
        status: { pt: "Em desenvolvimento", en: "In progress", es: "En desarrollo" },
        expectedResults: {
          pt: "Ampliar a produção científica conjunta na área de comunicação e redes.",
          en: "Expand joint scientific output in the field of communication and networks.",
          es: "Ampliar la producción científica conjunta en el área de comunicación y redes.",
        },
        achievedResults: {
          pt: "2 artigos publicados e participação conjunta em 1 evento científico internacional.",
          en: "2 papers published and joint participation in 1 international scientific event.",
          es: "2 artículos publicados y participación conjunta en 1 evento científico internacional.",
        },
        referenceDocument: "Processo nº 23422.000102/2022-63",
        responsibleParties: {
          pt: ["Dra. Priscila Farias — Pesquisadora responsável", "Vinícius Teixeira — Coordenador técnico"],
          en: ["Dr. Priscila Farias — Lead researcher", "Vinícius Teixeira — Technical coordinator"],
          es: ["Dra. Priscila Farias — Investigadora responsable", "Vinícius Teixeira — Coordinador técnico"],
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
        objective: {
          pt: "Projetos de extensão universitária e formação de pesquisadores.",
          en: "University outreach projects and researcher training.",
          es: "Proyectos de extensión universitaria y formación de investigadores.",
        },
        startDate: { pt: "Fevereiro de 2023", en: "February 2023", es: "Febrero de 2023" },
        expectedEndDate: { pt: "Fevereiro de 2026", en: "February 2026", es: "Febrero de 2026" },
        status: { pt: "Em desenvolvimento", en: "In progress", es: "En desarrollo" },
        expectedResults: {
          pt: "Formar novos pesquisadores e ampliar ações de extensão junto à comunidade.",
          en: "Train new researchers and expand outreach initiatives with the community.",
          es: "Formar nuevos investigadores y ampliar acciones de extensión junto a la comunidad.",
        },
        achievedResults: {
          pt: "3 projetos de extensão realizados, envolvendo mais de 50 estudantes.",
          en: "3 outreach projects carried out, involving more than 50 students.",
          es: "3 proyectos de extensión realizados, con la participación de más de 50 estudiantes.",
        },
        referenceDocument: "Processo nº 23422.000119/2023-25",
        responsibleParties: {
          pt: ["Prof.ª Renata Bittencourt — Coordenadora de extensão", "Gustavo Pires — Responsável técnico"],
          en: ["Prof. Renata Bittencourt — Outreach coordinator", "Gustavo Pires — Technical lead"],
          es: ["Prof.ª Renata Bittencourt — Coordinadora de extensión", "Gustavo Pires — Responsable técnico"],
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
        objective: {
          pt: "Cooperação técnica em iniciativas de governança digital do setor público.",
          en: "Technical cooperation on digital governance initiatives in the public sector.",
          es: "Cooperación técnica en iniciativas de gobernanza digital del sector público.",
        },
        startDate: { pt: "Abril de 2023", en: "April 2023", es: "Abril de 2023" },
        expectedEndDate: { pt: "Abril de 2026", en: "April 2026", es: "Abril de 2026" },
        status: { pt: "Em desenvolvimento", en: "In progress", es: "En desarrollo" },
        expectedResults: {
          pt: "Apoiar a modernização tecnológica de processos do setor público.",
          en: "Support the technological modernization of public sector processes.",
          es: "Apoyar la modernización tecnológica de procesos del sector público.",
        },
        achievedResults: {
          pt: "Diagnóstico técnico concluído; implementação em andamento.",
          en: "Technical assessment completed; implementation underway.",
          es: "Diagnóstico técnico concluido; implementación en curso.",
        },
        referenceDocument: "Processo nº 23422.000141/2023-70",
        responsibleParties: {
          pt: ["Aline Moreira — Representante do órgão", "Thiago Correia — Coordenador da parceria"],
          en: ["Aline Moreira — Public body representative", "Thiago Correia — Partnership coordinator"],
          es: ["Aline Moreira — Representante del organismo", "Thiago Correia — Coordinador de la alianza"],
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
        objective: {
          pt: "Projetos conjuntos de inclusão digital e formação comunitária.",
          en: "Joint digital inclusion and community training projects.",
          es: "Proyectos conjuntos de inclusión digital y formación comunitaria.",
        },
        startDate: { pt: "Julho de 2023", en: "July 2023", es: "Julio de 2023" },
        expectedEndDate: { pt: "Julho de 2025", en: "July 2025", es: "Julio de 2025" },
        status: { pt: "Em desenvolvimento", en: "In progress", es: "En desarrollo" },
        expectedResults: {
          pt: "Ampliar o acesso a tecnologia e capacitação digital para comunidades vulneráveis.",
          en: "Expand access to technology and digital training for vulnerable communities.",
          es: "Ampliar el acceso a la tecnología y la capacitación digital para comunidades vulnerables.",
        },
        achievedResults: {
          pt: "Mais de 120 pessoas capacitadas em oficinas de inclusão digital.",
          en: "Over 120 people trained in digital inclusion workshops.",
          es: "Más de 120 personas capacitadas en talleres de inclusión digital.",
        },
        referenceDocument: "Processo nº 23422.000163/2023-52",
        responsibleParties: {
          pt: ["Simone Cardoso — Coordenadora da organização", "Bruno Farias — Responsável técnico do laboratório"],
          en: ["Simone Cardoso — Organization coordinator", "Bruno Farias — Laboratory technical lead"],
          es: ["Simone Cardoso — Coordinadora de la organización", "Bruno Farias — Responsable técnico del laboratorio"],
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
        objective: {
          pt: "Pesquisas aplicadas conjuntas em segurança de redes.",
          en: "Joint applied research in network security.",
          es: "Investigaciones aplicadas conjuntas en seguridad de redes.",
        },
        startDate: { pt: "Outubro de 2023", en: "October 2023", es: "Octubre de 2023" },
        expectedEndDate: { pt: "Outubro de 2026", en: "October 2026", es: "Octubre de 2026" },
        status: { pt: "Em desenvolvimento", en: "In progress", es: "En desarrollo" },
        expectedResults: {
          pt: "Desenvolver soluções aplicadas de segurança para infraestrutura de rede.",
          en: "Develop applied security solutions for network infrastructure.",
          es: "Desarrollar soluciones aplicadas de seguridad para infraestructura de red.",
        },
        achievedResults: {
          pt: "Protótipo inicial de ferramenta de monitoramento de segurança desenvolvido.",
          en: "Initial prototype of a security monitoring tool developed.",
          es: "Prototipo inicial de herramienta de monitoreo de seguridad desarrollado.",
        },
        referenceDocument: "Processo nº 23422.000177/2023-84",
        responsibleParties: {
          pt: ["Dr. Marcos Vinícius Alves — Pesquisador responsável", "Débora Nascimento — Coordenadora técnica"],
          en: ["Dr. Marcos Vinícius Alves — Lead researcher", "Débora Nascimento — Technical coordinator"],
          es: ["Dr. Marcos Vinícius Alves — Investigador responsable", "Débora Nascimento — Coordinadora técnica"],
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
        objective: {
          pt: "Desenvolvimento conjunto de soluções personalizadas de infraestrutura.",
          en: "Joint development of custom infrastructure solutions.",
          es: "Desarrollo conjunto de soluciones personalizadas de infraestructura.",
        },
        startDate: { pt: "Janeiro de 2024", en: "January 2024", es: "Enero de 2024" },
        expectedEndDate: { pt: "Janeiro de 2026", en: "January 2026", es: "Enero de 2026" },
        status: { pt: "Em fase de negociação", en: "In negotiation", es: "En fase de negociación" },
        expectedResults: {
          pt: "Formalizar o escopo técnico e comercial das soluções a serem desenvolvidas.",
          en: "Formalize the technical and commercial scope of the solutions to be developed.",
          es: "Formalizar el alcance técnico y comercial de las soluciones a desarrollar.",
        },
        achievedResults: {
          pt: "Ainda não há resultados a relatar — parceria em fase de negociação.",
          en: "No results to report yet — partnership in negotiation.",
          es: "Aún no hay resultados que reportar — alianza en fase de negociación.",
        },
        referenceDocument: "Processo nº 23422.000015/2024-11",
        responsibleParties: {
          pt: ["Felipe Rocha — Representante comercial da empresa", "Sabrina Lopes — Coordenadora da parceria"],
          en: ["Felipe Rocha — Company commercial representative", "Sabrina Lopes — Partnership coordinator"],
          es: ["Felipe Rocha — Representante comercial de la empresa", "Sabrina Lopes — Coordinadora de la alianza"],
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
        objective: {
          pt: "Programas de pós-graduação e coorientação de pesquisas aplicadas.",
          en: "Graduate programs and co-supervision of applied research.",
          es: "Programas de posgrado y codirección de investigaciones aplicadas.",
        },
        startDate: { pt: "Março de 2024", en: "March 2024", es: "Marzo de 2024" },
        expectedEndDate: { pt: "Março de 2027", en: "March 2027", es: "Marzo de 2027" },
        status: { pt: "Em desenvolvimento", en: "In progress", es: "En desarrollo" },
        expectedResults: {
          pt: "Fortalecer a formação de mestrandos e doutorandos em temas aplicados do laboratório.",
          en: "Strengthen the training of master's and doctoral students in the laboratory's applied topics.",
          es: "Fortalecer la formación de maestrandos y doctorandos en temas aplicados del laboratorio.",
        },
        achievedResults: {
          pt: "2 coorientações de mestrado em andamento.",
          en: "2 master's co-supervisions underway.",
          es: "2 codirecciones de maestría en curso.",
        },
        referenceDocument: "Processo nº 23422.000029/2024-47",
        responsibleParties: {
          pt: ["Prof. Danilo Xavier — Coorientador", "Isabela Martins — Coordenadora do programa"],
          en: ["Prof. Danilo Xavier — Co-supervisor", "Isabela Martins — Program coordinator"],
          es: ["Prof. Danilo Xavier — Codirector", "Isabela Martins — Coordinadora del programa"],
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
