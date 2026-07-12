import type { pt } from "./pt"

export const es: typeof pt = {
  nav: {
    home: "Inicio",
    about: "Sobre",
    projects: "Proyectos",
    publications: "Publicaciones",
    statistics: "Estadísticas",
    partnerships: "Alianzas",
    services: "Servicios",
    courses: "Cursos",
    complementaryTraining: "Formación Complementaria",
    events: "Eventos",
    opportunities: "Oportunidades",
    members: "Miembros",
  },
  aboutSections: {
    researchLines: "Líneas de investigación",
    datacenter: "Infraestructura",
    photos: "Fotos",
    virtualTour: "Recorrido 360° / 3D",
    location: "Ubicación",
    contact: "Contacto",
  },
  header: {
    openMenu: "Abrir menú",
    expandSubmenu: "Expandir submenú de",
    collapseSubmenu: "Contraer submenú de",
    changeLanguage: "Cambiar idioma",
    serviceStatusCta: "Zona nerd",
    userAreaCta: "Mi cuenta",
    userAreaComingSoon: "Próximamente",
  },
  footer: {
    description:
      "Laboratorio del Grupo de Investigación en Tecnología, Comunicación y Gobernanza. Infraestructura de red, proyectos, publicaciones y formación aplicados a la investigación académica.",
    navigation: "Navegación",
    contact: "Contacto",
    viewLocation: "Ver ubicación",
    copyright: "Laboratório Zero — Grupo de Investigación en Tecnología, Comunicación y Gobernanza.",
    privacyPolicy: "Política de Privacidad",
  },
  themeToggle: {
    enableLight: "Activar modo claro",
    enableDark: "Activar modo oscuro",
  },
  cookieConsent: {
    message:
      "Usamos almacenamiento local del navegador solo para recordar su preferencia de tema e idioma. No utilizamos cookies de rastreo ni de publicidad.",
    learnMore: "Saber más",
    decline: "Rechazar",
    accept: "Aceptar",
  },
  chatWidget: {
    title: "Asistente del Laboratório Zero",
    greeting:
      "¡Hola! Puedo ayudarte con preguntas sobre el curso de Tecnología en Redes de Computadoras y sobre el Laboratório Zero.",
    notConnected:
      "El asistente aún no está conectado. Configure VITE_CHAT_ENDPOINT con la URL de su servicio externo.",
    responseError: "Error en la respuesta del asistente (HTTP {status})",
    invalidResponse: "No recibí una respuesta válida del asistente.",
    genericError: "Ocurrió un error al hablar con el asistente. Inténtelo de nuevo en unos instantes.",
    typing: "Escribiendo…",
    placeholder: "Escriba su pregunta…",
    send: "Enviar",
    close: "Cerrar chat",
    open: "Abrir chat con el asistente",
  },
  home: {
    eyebrow: "Grupo de Investigación en Tecnología, Comunicación y Gobernanza",
    title: "Laboratório Zero",
    description:
      "Un laboratorio de investigación dedicado a la infraestructura de red, proyectos aplicados, publicaciones científicas y formación de investigadores y estudiantes. Trabajamos en alianza con instituciones académicas, profesores e investigadores, organizaciones públicas y privadas, startups y ONG, ofreciendo soporte tecnológico a proyectos especializados, con enfoque en IA y soberanía y protección de datos.",
    ctaProjects: "Conocer los proyectos",
    ctaAbout: "Sobre el laboratorio",
    areasTitle: "Áreas de actuación",
    highlights: {
      projects: {
        title: "Proyectos",
        description:
          "Investigación aplicada en infraestructura de red, gobernanza digital y comunicación, con resultados abiertos.",
      },
      publications: {
        title: "Publicaciones",
        description: "Producción académica del grupo: artículos, capítulos e informes técnicos.",
      },
      partnerships: {
        title: "Alianzas",
        description: "Cooperación con instituciones de enseñanza, investigación y organismos públicos.",
      },
      training: {
        title: "Formación",
        description: "Cursos y eventos dirigidos a estudiantes, investigadores y la comunidad.",
      },
      complementaryTraining: {
        title: "Formación Complementaria",
        description:
          "Sugerencias de cursos y materiales externos para profundizar en temas del laboratorio.",
      },
      opportunities: {
        title: "Oportunidades",
        description: "Prácticas, becas y ofertas de empleo difundidas por el laboratorio y sus socios.",
      },
    },
    grants: {
      eyebrow: "Fomento e Innovación",
      title: "¿Está presentando un proyecto a una convocatoria de fomento?",
      paragraph:
        "Si está considerando presentar su startup o proyecto a convocatorias de fomento como FINEP, CNPq, fundaciones de apoyo a la investigación o incluso convocatorias internacionales, considere indicar al Laboratório Zero como socio para la implementación de soluciones. En la previsión presupuestaria del proyecto, considere recursos para infraestructura tecnológica que soporte sus soluciones.",
      dcaasTitle: "Datacenter as a Service",
      dcaasParagraph:
        "El Laboratório Zero ofrece hospedaje de diversos servicios bajo el concepto de datacenter as a service: una infraestructura completa de centro de datos como servicio para socios, con mecanismos de seguridad, respaldo, aplicaciones personalizadas y soluciones ajustadas a las demandas individuales — innovación tecnológica aplicada al soporte de tecnologías con seguridad, soberanía de datos y alto rendimiento.",
      ctaContact: "Hable con el laboratorio",
      ctaEligibility: "Verificar elegibilidad del proyecto",
      eligibilityComingSoon: "Enlace del formulario próximamente",
    },
    servicesEyebrow: "Servicios públicos",
    servicesTitle: "Herramientas web abiertas a la comunidad",
    servicesCta: "Ver todos los servicios",
    stats: {
      projects: "proyectos desarrollados",
      publications: "publicaciones del grupo",
      partners: "instituciones aliadas",
      note: "Cifras ilustrativas — actualice con los datos reales del laboratorio.",
      cta: "Vea las estadísticas completas →",
    },
  },
  about: {
    eyebrow: "Sobre",
    title: "El laboratorio",
    description:
      "El Laboratório Zero forma parte del Grupo de Investigación en Tecnología, Comunicación y Gobernanza, reuniendo infraestructura de red, proyectos aplicados y formación de investigadores.",
    researchLinesTitle: "Líneas de investigación",
    researchLines: {
      governanceCommunication: {
        title: "Gobernanza y Comunicación",
        description:
          "Investiga cómo las organizaciones gestionan sus datos, información y procesos de comunicación ante las transformaciones digitales. Abarca la gobernanza de datos y de TI, el cumplimiento de la LGPD, la transparencia, la gestión del conocimiento, la automatización de procesos y el desarrollo de software y sistemas de información que respalden estas prácticas, incluyendo soluciones basadas en inteligencia artificial para la toma de decisiones, teniendo como horizonte la soberanía informacional y la sostenibilidad de las organizaciones públicas y privadas.",
      },
      networkSecurity: {
        title: "Redes y Seguridad",
        description:
          "Investiga el diseño, la operación y la protección de infraestructuras de red y de computación, desde el centro de datos hasta el borde. Abarca arquitecturas de red, virtualización, monitoreo, criptografía, respuesta a incidentes y seguridad de aplicaciones y de sistemas de IA, con énfasis en soluciones que fortalezcan la protección y la soberanía de datos en entornos académicos, públicos y corporativos.",
      },
    },
    researchLinesCnpqNote: "Grupo certificado en el {link}.",
    researchLinesCnpqLink: "Directorio de los Grupos de Investigación del CNPq",
    datacenterTitle: "Nuestra infraestructura de centro de datos",
    datacenterIntro:
      "La operación del laboratorio se sustenta en un pequeño centro de datos propio, utilizado tanto para los proyectos de investigación como para los servicios públicos puestos a disposición de la comunidad.",
    datacenterItems: {
      proxmox: {
        title: "Virtualización con Proxmox",
        description:
          "Clúster de virtualización basado en Proxmox VE, que aloja los entornos de simulación, pruebas de red y los servicios públicos mantenidos por el laboratorio.",
      },
      aiWorkstation: {
        title: "Estación de trabajo para IA",
        description:
          "Estación de trabajo dedicada a cargas de procesamiento de inteligencia artificial, utilizada en proyectos de investigación aplicada y experimentación de modelos.",
      },
      backup: {
        title: "Respaldo local y remoto",
        description:
          "Rutinas de respaldo redundantes, con copias mantenidas localmente y en un destino remoto, garantizando la continuidad e integridad de los datos del laboratorio.",
      },
    },
    photosTitle: "Fotos del laboratorio",
    photoLabel: "foto",
    photosNote: "Galería ilustrativa — sustitúyala por las fotos reales del laboratorio.",
    tourTitle: "Conozca el laboratorio en 360° y en 3D",
    tourText:
      "Espacio reservado para un recorrido virtual inmersivo por las instalaciones del laboratorio, con visualización en 360° y modelo tridimensional de los ambientes.",
    tourPlaceholder: "Recorrido virtual 360° / 3D próximamente",
    locationTitle: "Ubicación",
    locationText: "El Laboratório Zero funciona en las instalaciones del IFRO — Campus Porto Velho Zona Norte:",
    locationAddress: "Av. Gov. Jorge Teixeira, 3146 — Setor Industrial, Porto Velho - RO, 76821-002, Brasil",
    mapTitle: "Mapa - IFRO Campus Porto Velho Zona Norte",
    contactTitle: "Contacto",
    contactEmailLabel: "Correo electrónico",
    contactAddressLabel: "Dirección",
    contactAddress:
      "IFRO — Campus Porto Velho Zona Norte, Av. Gov. Jorge Teixeira, 3146 — Setor Industrial, Porto Velho - RO, Brasil",
    sendEmail: "Enviar correo",
    emailNote: "Correo ilustrativo — sustitúyalo por el contacto real del laboratorio.",
  },
  projects: {
    eyebrow: "Proyectos",
    title: "Proyectos y resultados",
    description:
      "Proyectos desarrollados por el laboratorio, activos y finalizados, con sus resultados: artículos, software, animaciones y otros materiales.",
    note: "Contenido ilustrativo — sustitúyalo por los proyectos reales del laboratorio.",
    items: [
      {
        title: "Proyecto Alfa",
        period: "2023 – actual",
        description: "Simulador de redes para la enseñanza, con resultados publicados como software abierto.",
        media: ["Software", "Artículo"],
      },
      {
        title: "Proyecto Beta",
        period: "2022 – 2023",
        description: "Estudio de gobernanza de datos en asociación con un organismo público.",
        media: ["Informe técnico"],
      },
      {
        title: "Proyecto Gama",
        period: "2021 – 2022",
        description: "Material de divulgación científica con animaciones sobre infraestructura de internet.",
        media: ["Animación", "Video"],
      },
      {
        title: "Proyecto Delta",
        period: "2019 – 2021",
        description: "Plataforma experimental de comunicación para redes comunitarias.",
        media: ["Software", "Artículo"],
      },
    ],
  },
  publications: {
    eyebrow: "Publicaciones",
    title: "Producción académica",
    description: "Artículos, capítulos e informes técnicos producidos por el laboratorio y sus investigadores.",
    note: "Lista ilustrativa — sustitúyala por las publicaciones reales del grupo.",
    items: [
      {
        title: "Gobernanza de datos en redes comunitarias: un estudio de caso",
        authors: "Silva, A.; Souza, B.",
        venue: "Revista Brasileña de Tecnología y Sociedad",
        year: "2024",
      },
      {
        title: "Simulación de protocolos de red para la enseñanza de grado",
        authors: "Pereira, C.; Lima, D.",
        venue: "Actas del Congreso Nacional de Redes de Computadoras",
        year: "2023",
      },
      {
        title: "Comunicación pública e infraestructura digital: desafíos de gobernanza",
        authors: "Costa, E.",
        venue: "Cuadernos de Comunicación y Gobernanza",
        year: "2022",
      },
    ],
  },
  statistics: {
    eyebrow: "Estadísticas",
    title: "Estadísticas del laboratorio",
    description:
      "Cifras del día a día operativo del Laboratório Zero: infraestructura mantenida, atención a la comunidad y productividad generada por los proyectos.",
    note: "Cifras ilustrativas — actualice con los datos reales de operación del laboratorio.",
    kpis: [
      { label: "Máquinas virtuales creadas", value: "1.240+" },
      { label: "Usuarios atendidos", value: "3.800+" },
      { label: "Datos gestionados", value: "18.400 GB" },
      { label: "Análisis automatizados realizados", value: "52.000+" },
      { label: "Horas de trabajo ahorradas", value: "6.500+ h" },
      { label: "Scripts y herramientas desarrollados", value: "140+" },
      { label: "Incidentes de red resueltos", value: "320+" },
      { label: "Disponibilidad promedio de los servicios", value: "99,7%" },
    ],
    machinesChartTitle: "Crecimiento de máquinas gestionadas",
    machinesChartSubtitle: "Últimos 6 meses",
    machinesGrowth: [
      { label: "Ene", value: 780 },
      { label: "Feb", value: 850 },
      { label: "Mar", value: 920 },
      { label: "Abr", value: 1010 },
      { label: "May", value: 1140 },
      { label: "Jun", value: 1240 },
    ],
    categoryChartTitle: "Datos gestionados por categoría",
    categoryChartSubtitle: "Distribución actual",
    dataByCategory: [
      { label: "Copias de seguridad", value: 8200 },
      { label: "Máquinas virtuales", value: 5100 },
      { label: "Repositorios", value: 2800 },
      { label: "Wiki y documentos", value: 1600 },
      { label: "Otros servicios", value: 700 },
    ],
  },
  partnerships: {
    eyebrow: "Alianzas",
    title: "Alianzas",
    description:
      "El Laboratório Zero se relaciona con diferentes tipos de socios: donantes, usuarios de la infraestructura e instituciones que desarrollan proyectos en conjunto.",
    whoAreThey: "Quiénes son",
    networkIntro:
      "La red a continuación representa las conexiones entre el laboratorio y sus socios — pase el mouse o toque un socio para ver los detalles de la alianza.",
    networkNote:
      "Red ilustrativa — la disposición cambia en cada visita a la página; sustitúyala por los socios y logotipos reales.",
    backToPartnerships: "← Volver a Alianzas",
    backTo: "← Volver a",
    viewDetails: "Ver detalles de la alianza →",
    logo: "logo",
    illustrativeNote: "Contenido ilustrativo — sustitúyalo por los datos reales de esta alianza.",
    labName: "Laboratório Zero",
    detailsTitle: "Detalles de la alianza",
    objectiveLabel: "Objetivo de la alianza",
    startDateLabel: "Inicio de la alianza",
    expectedEndDateLabel: "Previsión de finalización",
    statusLabel: "Estado",
    expectedResultsLabel: "Resultados esperados",
    achievedResultsLabel: "Resultados alcanzados",
    referenceDocumentLabel: "Documento de referencia",
    responsiblePartiesLabel: "Responsables involucrados",
  },
  services: {
    eyebrow: "Servicios",
    title: "Servicios",
    description: "Herramientas web mantenidas por el Laboratório Zero, organizadas por público de acceso.",
    note: "Servicios en implementación — los enlaces de acceso se publicarán en cuanto cada uno esté disponible.",
    comingSoon: "Próximamente",
    backToServices: "← Volver a Servicios",
    featuresTitle: "Características",
    accessService: "Acceder",
    notPublished: "Próximamente — servicio aún no publicado",
    audiencePublicLabel: "Servicios públicos",
    audiencePartnersLabel: "Servicios para socios",
    audienceAcademicLabel: "Comunidad académica del IFRO",
    audiencePublicDescription: "Herramientas disponibles gratuitamente para toda la comunidad.",
    audiencePublicRequirement:
      "¿Qué se necesita para usarlo? ¡Nada! Solo usarlo. En algunos casos puede solicitarse un registro simple, pero el acceso es libre.",
    audiencePartnersDescription:
      "Además de los servicios públicos, que pueden personalizarse para cada alianza, el laboratorio pone estas herramientas adicionales a disposición de las instituciones asociadas.",
    audiencePartnersRequirement:
      "¿Qué se necesita para tener acceso? Una alianza formalizada con el Laboratório Zero o con el IFRO, con las debidas limitaciones, contrapartidas y responsabilidades.",
    audienceAcademicDescription:
      "Además de todos los servicios públicos y para socios, la comunidad académica del IFRO tiene acceso a estas herramientas adicionales.",
    audienceAcademicRequirement:
      "¿Qué se necesita para usarlo? Tener vínculo con algún proyecto institucionalizado en el IFRO o estar impartiendo alguna asignatura en el IFRO. Si es estudiante, debe estar autorizado por el docente de la asignatura. El uso está sujeto a la formalización de la solicitud ante el Laboratório Zero, con las debidas limitaciones, contrapartidas y responsabilidades.",
    audienceLearnMore: "Saber más →",
    audienceRequirementsTitle: "Criterios de acceso",
    audienceRequirementsComingSoon:
      "Los detalles completos sobre los criterios de acceso se publicarán próximamente en esta página.",
    pipelineNote:
      "Estamos desarrollando una cadena de desarrollo completa (CI/CD), que estará disponible para el flujo de desarrollo de software en las clases.",
    academicBadge: "Clases y proyectos",
    items: {
      wiki: {
        name: "Wiki",
        description:
          "Diversas páginas wiki para documentación colaborativa de proyectos y del conocimiento técnico del laboratorio.",
        details:
          "Espacio de documentación colaborativa mantenido por el laboratorio, que reúne páginas sobre proyectos, procedimientos técnicos, tutoriales y registros de conocimiento producidos por el equipo.",
        features: [
          "Edición colaborativa entre miembros del laboratorio",
          "Historial de versiones de las páginas",
          "Organización por categorías y proyectos",
        ],
      },
      bentopdf: {
        name: "BentoPDF",
        description:
          "Manipulador de PDF (unir, dividir, convertir) con procesamiento local, preservando la privacidad de los archivos.",
        details:
          "Herramienta para unir, dividir, comprimir y convertir archivos PDF directamente en el navegador, sin enviar los documentos a servidores externos — todo el procesamiento ocurre localmente, preservando la privacidad del contenido.",
        features: [
          "Procesamiento local, sin subir archivos",
          "Unir, dividir, comprimir y convertir PDFs",
          "Sin necesidad de registro",
        ],
      },
      drawio: {
        name: "Draw.io",
        description: "Editor de diagramas para diagramas de flujo, arquitecturas de red y mapas conceptuales.",
        details:
          "Editor de diagramas para crear diagramas de flujo, arquitecturas de red, mapas mentales y mapas conceptuales, con exportación en varios formatos.",
        features: [
          "Plantillas listas para diagramas de red",
          "Exportación en PNG, SVG y PDF",
          "Integración con servicios de almacenamiento en la nube",
        ],
      },
      excalidraw: {
        name: "Excalidraw",
        description: "Pizarra colaborativa para bocetos y diagramas con estilo dibujado a mano.",
        details:
          "Pizarra colaborativa con estilo de dibujo a mano alzada, ideal para bocetar ideas, arquitecturas y explicaciones visuales en tiempo real con otras personas.",
        features: [
          "Colaboración en tiempo real",
          "Estilo de dibujo a mano alzada",
          "Exportación como imagen (PNG/SVG)",
        ],
      },
      limesurvey: {
        name: "LimeSurvey",
        description: "Plataforma para la creación y aplicación de formularios y encuestas académicas.",
        details:
          "Plataforma para crear, aplicar y analizar formularios y encuestas académicas, utilizada en la recolección de datos de proyectos del laboratorio y del grupo de investigación.",
        features: [
          "Diversos tipos de pregunta y lógica condicional",
          "Exportación de los resultados recolectados",
          "Soporte para encuestas anónimas",
        ],
      },
      "repositorio-debian": {
        name: "Repositorio de paquetes Debian",
        description: "Repositorio público de paquetes Debian mantenido por el laboratorio.",
        details:
          "Repositorio público de paquetes Debian mantenido por el laboratorio, que ofrece los paquetes utilizados en los proyectos de infraestructura de red desarrollados por el equipo.",
        features: [
          "Espejo de paquetes actualizado periódicamente",
          "Acceso público vía apt",
          "Documentación de configuración del repositorio",
        ],
      },
      "teste-ipv6": {
        name: "Servidor de pruebas IPv6",
        description: "Herramienta para verificar la conectividad y la configuración IPv6 de una red.",
        details:
          "Herramienta para verificar si una red y un dispositivo tienen conectividad IPv6 funcional, además de ayudar a diagnosticar problemas comunes de configuración.",
        features: [
          "Prueba de conectividad IPv6",
          "Diagnóstico de problemas de configuración",
          "Informe simple de resultados",
        ],
      },
      openspeedtest: {
        name: "OpenSpeedTest",
        description: "Prueba de velocidad de conexión a internet alojada por el propio laboratorio.",
        details:
          "Servidor de prueba de velocidad de internet alojado por el laboratorio, que permite medir descarga, subida y latencia sin depender de servicios de terceros.",
        features: [
          "Prueba de descarga y subida",
          "Medición de latencia (ping)",
          "Sin necesidad de complementos",
        ],
      },
      "encurtador-url": {
        name: "Acortador de URL",
        description: "Servicio para acortar y compartir enlaces de forma sencilla.",
        details:
          "Servicio para acortar enlaces largos, facilitando el intercambio de materiales, formularios y páginas del laboratorio.",
        features: [
          "Generación instantánea de enlaces cortos",
          "Estadísticas básicas de acceso",
          "Enlaces personalizables",
        ],
      },
      qrcode: {
        name: "Generador de código QR",
        description:
          "Generación de códigos QR personalizados para la difusión de materiales, eventos y servicios del laboratorio.",
        details:
          "Herramienta para crear códigos QR personalizados — con colores y forma ajustables — para su uso en materiales impresos, presentaciones y difusión de eventos y servicios del laboratorio.",
        features: [
          "Personalización de colores y forma",
          "Exportación en alta resolución",
          "Generación rápida, sin registro",
        ],
      },
      "internet-wifi": {
        name: "Acceso a Internet vía Wi-Fi",
        description: "Red Wi-Fi abierta a la comunidad en las instalaciones del laboratorio.",
        details:
          "Red Wi-Fi puesta a disposición gratuita de la comunidad en las instalaciones del Laboratório Zero, brindando acceso a internet para visitantes y usuarios de los espacios del laboratorio.",
        features: [
          "Acceso gratuito a internet vía Wi-Fi",
          "Disponible en las instalaciones del laboratorio",
          "Sin necesidad de registro previo",
        ],
      },
      "hospedagem-web": {
        name: "Alojamiento Web",
        description: "Alojamiento de sitios y aplicaciones web para proyectos desarrollados en alianza con el laboratorio.",
        details:
          "Entorno de alojamiento web puesto a disposición de los socios para publicar sitios institucionales, aplicaciones y páginas de proyectos desarrollados junto con el laboratorio.",
        features: [
          "Dominios y subdominios personalizados",
          "Certificado SSL incluido",
          "Soporte para aplicaciones estáticas y dinámicas",
        ],
      },
      "banco-de-dados": {
        name: "Base de Datos",
        description: "Instancias de bases de datos gestionadas para aplicaciones y proyectos de socios.",
        details:
          "Aprovisionamiento de instancias de bases de datos relacionales y no relacionales, con copias de seguridad y monitoreo, para dar soporte a aplicaciones y proyectos desarrollados con socios.",
        features: [
          "Soporte para bases de datos relacionales y no relacionales",
          "Copias de seguridad periódicas automatizadas",
          "Acceso controlado mediante credenciales dedicadas",
        ],
      },
      metabase: {
        name: "Metabase",
        description: "Plataforma de análisis y visualización de datos para el seguimiento de indicadores de proyectos.",
        details:
          "Herramienta de inteligencia de negocios para la creación de paneles e informes visuales a partir de los datos de proyectos desarrollados con socios, sin necesidad de conocimientos técnicos avanzados.",
        features: [
          "Creación de paneles y gráficos interactivos",
          "Consultas sin necesidad de SQL",
          "Compartición de informes con el equipo",
        ],
      },
      openproject: {
        name: "OpenProject",
        description: "Herramienta de gestión de proyectos para la planificación y seguimiento de tareas en alianzas.",
        details:
          "Plataforma de gestión de proyectos utilizada para la planificación, cronogramas y seguimiento de tareas en iniciativas desarrolladas junto con socios del laboratorio.",
        features: [
          "Tableros Kanban y cronogramas Gantt",
          "Control de tareas y responsables",
          "Informes de avance del proyecto",
        ],
      },
      gitlab: {
        name: "GitLab",
        description: "Plataforma de control de versiones e integración continua para proyectos de desarrollo.",
        details:
          "Instancia de GitLab mantenida por el laboratorio para el control de versiones del código fuente, revisión de cambios y pipelines de integración continua de los proyectos desarrollados con socios.",
        features: [
          "Repositorios Git privados y compartidos",
          "Pipelines de integración continua (CI/CD)",
          "Revisión de código mediante merge requests",
        ],
      },
      "gerenciamento-automacao": {
        name: "Gestión de Automatización",
        description: "Panel para orquestar y ejecutar rutinas de automatización de infraestructura.",
        details:
          "Herramienta para orquestar, programar y monitorear la ejecución de playbooks y rutinas de automatización de infraestructura utilizadas en los proyectos del laboratorio.",
        features: [
          "Ejecución y programación de playbooks",
          "Historial de ejecuciones y registros",
          "Control de acceso por equipo",
        ],
      },
      n8n: {
        name: "N8N",
        description: "Plataforma de automatización de flujos de trabajo e integración entre sistemas.",
        details:
          "Herramienta de automatización low-code para crear flujos de trabajo que integran sistemas, API y servicios utilizados en los proyectos desarrollados con socios.",
        features: [
          "Editor visual de flujos de automatización",
          "Integración con diversas API y servicios",
          "Ejecución programada o basada en eventos (webhooks)",
        ],
      },
      "gerenciamento-wifi": {
        name: "Gestión de Wi-Fi",
        description: "Panel para la gestión centralizada de redes Wi-Fi y puntos de acceso de socios.",
        details:
          "Plataforma para la gestión centralizada de puntos de acceso Wi-Fi, que permite configurar redes, monitorear dispositivos conectados y aplicar políticas de acceso en entornos de socios.",
        features: [
          "Gestión centralizada de puntos de acceso",
          "Monitoreo de dispositivos conectados",
          "Definición de políticas de acceso por red",
        ],
      },
      "registro-logs": {
        name: "Registro de Logs",
        description: "Recopilación y centralización de registros (logs) de sistemas y aplicaciones de socios.",
        details:
          "Plataforma para la recopilación, almacenamiento y consulta centralizada de registros (logs) de sistemas, redes y aplicaciones, apoyando el monitoreo y la investigación de incidentes.",
        features: [
          "Recopilación centralizada de logs",
          "Búsqueda y filtrado de registros",
          "Retención configurable del historial",
        ],
      },
      "armazenamento-cameras": {
        name: "Almacenamiento de Cámaras Remotas",
        description: "Almacenamiento de imágenes y grabaciones de cámaras remotas de socios.",
        details:
          "Servicio de almacenamiento dedicado a imágenes y grabaciones de cámaras de monitoreo remoto, con retención configurable y acceso controlado para instituciones asociadas.",
        features: [
          "Almacenamiento de grabaciones en video",
          "Retención configurable por período",
          "Acceso controlado mediante credenciales",
        ],
      },
      "armazenamento-objetos": {
        name: "Almacenamiento de Objetos (S3)",
        description: "Almacenamiento de objetos compatible con S3 para archivos y datos de proyectos de socios.",
        details:
          "Servicio de almacenamiento de objetos compatible con la API de S3, utilizado para guardar archivos, copias de seguridad y datos de aplicaciones desarrolladas en alianza con el laboratorio.",
        features: [
          "API compatible con Amazon S3",
          "Almacenamiento escalable por bucket",
          "Control de acceso mediante credenciales y políticas",
        ],
      },
      backup: {
        name: "Copia de Seguridad Local y Remota",
        description: "Rutinas de copia de seguridad local y remota para datos y sistemas de socios.",
        details:
          "Servicio de copia de seguridad que mantiene copias locales y remotas de datos y sistemas de socios, con rutinas programadas y verificación de integridad de las copias.",
        features: [
          "Copias locales y remotas programadas",
          "Verificación de integridad de las copias",
          "Restauración bajo demanda",
        ],
      },
      zabbix: {
        name: "Zabbix",
        description: "Plataforma de monitoreo de infraestructura y alertas para sistemas de socios.",
        details:
          "Herramienta de monitoreo de servidores, redes y aplicaciones, con generación de alertas en tiempo real para apoyar la operación y la disponibilidad de los sistemas de socios.",
        features: [
          "Monitoreo de servidores y redes",
          "Alertas configurables en tiempo real",
          "Historial y gráficos de rendimiento",
        ],
      },
      grafana: {
        name: "Grafana",
        description: "Paneles de visualización de métricas e indicadores de infraestructura en tiempo real.",
        details:
          "Herramienta de visualización de métricas utilizada para crear paneles en tiempo real sobre la infraestructura y los sistemas de socios, integrándose con diferentes fuentes de datos.",
        features: [
          "Paneles personalizables en tiempo real",
          "Integración con diversas fuentes de datos",
          "Alertas visuales por umbral de métricas",
        ],
      },
      "llm-local": {
        name: "LLM Locales para IA",
        description: "Modelos de lenguaje ejecutados localmente, sin enviar datos a servicios externos.",
        details:
          "Infraestructura para la ejecución de modelos de lenguaje (LLM) localmente en el centro de datos del laboratorio, permitiendo que los socios utilicen inteligencia artificial generativa sin enviar datos sensibles a servicios externos.",
        features: [
          "Ejecución local de modelos de lenguaje",
          "Procesamiento sin envío de datos a terceros",
          "Soporte para diferentes modelos de código abierto",
        ],
      },
      "gestao-modelos-tokens-ia": {
        name: "Gestión de Modelos y Tokens para IA",
        description: "Panel para gestionar el acceso a modelos de IA y el consumo de tokens por proyecto.",
        details:
          "Plataforma para gestionar credenciales, cuotas y consumo de tokens de modelos de inteligencia artificial utilizados en los proyectos desarrollados con socios, con control por equipo y por aplicación.",
        features: [
          "Gestión de credenciales y cuotas de tokens",
          "Seguimiento del consumo por proyecto",
          "Control de acceso por equipo y aplicación",
        ],
      },
      "gerenciamento-dns": {
        name: "Gestión de DNS",
        description: "Panel para la gestión de zonas y registros DNS de dominios de socios.",
        details:
          "Plataforma para la gestión de zonas y registros DNS de dominios utilizados por socios, que permite configurar y actualizar registros de forma centralizada y segura.",
        features: [
          "Gestión centralizada de zonas DNS",
          "Soporte para los principales tipos de registro",
          "Historial de cambios",
        ],
      },
      roboshadow: {
        name: "RoboShadow",
        description: "Escaneo de vulnerabilidades y evaluación de la superficie de ataque de sistemas de socios.",
        details:
          "Herramienta de escaneo de vulnerabilidades utilizada para evaluar la superficie de ataque de dispositivos y sistemas de instituciones asociadas, apoyando acciones preventivas de seguridad.",
        features: [
          "Escaneo periódico de vulnerabilidades",
          "Informes de superficie de ataque",
          "Priorización de riesgos por criticidad",
        ],
      },
      crowdsec: {
        name: "CrowdSec",
        description: "Protección colaborativa contra amenazas, con bloqueo automático de IP maliciosas.",
        details:
          "Sistema de seguridad colaborativo que identifica comportamientos maliciosos y bloquea automáticamente IP de ataque, basándose en inteligencia de amenazas compartida por una comunidad global.",
        features: [
          "Bloqueo automático de IP maliciosas",
          "Inteligencia de amenazas compartida",
          "Escenarios de detección configurables",
        ],
      },
      "captive-portal": {
        name: "Portal Cautivo (Captive Portal)",
        description: "Portal de autenticación para el acceso controlado a redes Wi-Fi de socios.",
        details:
          "Servicio de portal cautivo utilizado para autenticar y controlar el acceso de usuarios a las redes Wi-Fi de instituciones asociadas, con opciones de autenticación personalizables.",
        features: [
          "Autenticación de usuarios en la red Wi-Fi",
          "Personalización de la página de acceso",
          "Informes de accesos autenticados",
        ],
      },
      "map-server": {
        name: "Map Server",
        description: "Servidor de mapas para la publicación y consumo de datos geográficos de proyectos de socios.",
        details:
          "Servidor de mapas utilizado para publicar y consumir datos geográficos (capas vectoriales y ráster) en proyectos de geoprocesamiento desarrollados con socios.",
        features: [
          "Publicación de capas de mapas vectoriales y ráster",
          "Integración mediante estándares WMS/WFS",
          "Soporte para múltiples proyectos simultáneos",
        ],
      },
      opendronemap: {
        name: "OpenDroneMap",
        description: "Procesamiento de imágenes aéreas de drones para generar mapas y modelos 3D.",
        details:
          "Plataforma para el procesamiento de imágenes capturadas por drones, generando ortomosaicos, modelos digitales de elevación y modelos 3D para proyectos de mapeo de socios.",
        features: [
          "Generación de ortomosaicos y modelos 3D",
          "Procesamiento de imágenes capturadas por drones",
          "Exportación en formatos compatibles con SIG",
        ],
      },
      "ide-eclipse-che": {
        name: "IDE Eclipse Che",
        description: "Entorno de desarrollo integrado en la nube, accesible directamente desde el navegador.",
        details:
          "Entorno de desarrollo integrado (IDE) basado en la nube, puesto a disposición de la comunidad académica del IFRO para el desarrollo de código en asignaturas y proyectos, sin necesidad de instalación local.",
        features: [
          "Acceso desde el navegador, sin instalación local",
          "Entornos preconfigurados por lenguaje/proyecto",
          "Uso en clases y actividades prácticas de programación",
        ],
      },
      "desktop-remoto": {
        name: "Escritorio Remoto",
        description: "Acceso remoto a entornos de trabajo completos mantenidos por el laboratorio.",
        details:
          "Servicio de escritorio remoto que pone a disposición de la comunidad académica del IFRO entornos de trabajo completos, con herramientas preinstaladas para uso en clases y actividades prácticas.",
        features: [
          "Acceso remoto desde cualquier dispositivo",
          "Herramientas académicas preinstaladas",
          "Entorno aislado por usuario",
        ],
      },
      pnetlab: {
        name: "PNetLab",
        description: "Laboratorio virtual de redes para simulación de topologías y práctica de configuración.",
        details:
          "Plataforma de laboratorio virtual de redes utilizada en asignaturas del IFRO para la simulación de topologías, configuración de equipos y práctica de conceptos de redes de computadoras.",
        features: [
          "Simulación de topologías de red complejas",
          "Soporte para diversos fabricantes y sistemas",
          "Uso en clases prácticas de redes",
        ],
      },
      "maquinas-virtuais": {
        name: "Máquinas Virtuales (Linux y Windows)",
        description: "Aprovisionamiento de máquinas virtuales Linux y Windows para uso en clases y proyectos.",
        details:
          "Servicio de aprovisionamiento de máquinas virtuales con sistemas Linux y Windows, puesto a disposición de la comunidad académica del IFRO para uso en asignaturas, laboratorios prácticos y proyectos de investigación.",
        features: [
          "Máquinas virtuales Linux y Windows bajo demanda",
          "Configuraciones personalizadas por asignatura",
          "Acceso remoto durante el período de clase",
        ],
      },
      proxmox: {
        name: "Entorno de Virtualización Proxmox",
        description: "Infraestructura de virtualización utilizada en asignaturas y proyectos de infraestructura de TI.",
        details:
          "Acceso al entorno de virtualización Proxmox del laboratorio, utilizado en asignaturas y proyectos para la práctica de administración de infraestructura, creación de máquinas virtuales y contenedores.",
        features: [
          "Creación de máquinas virtuales y contenedores (LXC)",
          "Práctica de administración de infraestructura",
          "Uso en asignaturas de infraestructura de TI",
        ],
      },
      firewall: {
        name: "Firewall",
        description: "Entorno de firewall para proteger redes y sistemas de socios.",
        details:
          "Entorno de firewall gestionado por el laboratorio, utilizado para proteger redes y sistemas de instituciones asociadas, con configuración de reglas y políticas de seguridad bajo demanda.",
        features: [
          "Configuración de reglas y políticas de seguridad",
          "Protección de redes y sistemas de socios",
          "Registro y auditoría de eventos de red",
        ],
      },
      "opencode-llm-local": {
        name: "OpenCode + LLM Local",
        description: "Entorno de programación asistida por IA, con un modelo de lenguaje ejecutado localmente.",
        details:
          "Entorno de desarrollo con asistente de programación basado en IA (OpenCode), integrado con un modelo de lenguaje ejecutado localmente en el laboratorio, puesto a disposición de la comunidad académica del IFRO para uso en clases y proyectos.",
        features: [
          "Asistencia de código por IA local",
          "Sin envío de código a servicios externos",
          "Uso en clases y proyectos de programación",
        ],
      },
      "gerenciamento-webscraping": {
        name: "Gestión de Web Scraping",
        description: "Entorno para la creación y ejecución de rutinas de recolección automatizada de datos (web scraping).",
        details:
          "Entorno puesto a disposición de la comunidad académica del IFRO para el desarrollo, ejecución y programación de rutinas de recolección automatizada de datos en la web, utilizado en clases y proyectos de investigación.",
        features: [
          "Ejecución y programación de rutinas de recolección",
          "Almacenamiento de los datos recolectados",
          "Uso en clases y proyectos de investigación",
        ],
      },
    },
  },
  serviceStatus: {
    eyebrow: "Estado de los Servicios",
    title: "Estado de los Servicios",
    description:
      "Disponibilidad en tiempo real de los servicios públicos mantenidos por el Laboratório Zero.",
    grafanaNote:
      "Los datos de esta página se actualizarán automáticamente desde el panel de monitoreo Grafana del laboratorio.",
    uptimeLabel: "Disponibilidad (30 días)",
    statusOperational: "Operativo",
    statusDegraded: "Rendimiento reducido",
    statusDown: "Fuera de servicio",
    illustrativeNote: "Datos ilustrativos — serán sustituidos por la integración con Grafana.",
  },
  courses: {
    eyebrow: "Cursos",
    title: "Formación",
    description: "Cursos y talleres ofrecidos por el laboratorio para estudiantes, investigadores y la comunidad.",
    note: "Contenido ilustrativo — sustitúyalo por los cursos reales ofrecidos.",
    items: [
      {
        title: "Introducción a las redes de computadoras",
        description: "Curso de extensión dirigido a estudiantes de grado.",
        modality: "Presencial",
      },
      {
        title: "Gobernanza de datos y tecnología",
        description: "Curso corto sobre políticas de datos y regulación digital.",
        modality: "En línea",
      },
      {
        title: "Taller de simulación de redes",
        description: "Taller práctico con las herramientas desarrolladas por el laboratorio.",
        modality: "Presencial",
      },
    ],
  },
  complementaryTraining: {
    eyebrow: "Formación Complementaria",
    title: "Sugerencias de formación",
    description:
      "Cursos y materiales externos recomendados por el laboratorio para profundizar en temas de redes, gobernanza y comunicación, complementando los cursos ofrecidos directamente por el grupo.",
    note: "Lista ilustrativa — sustitúyala por las sugerencias reales de formación y sus respectivos enlaces.",
    items: [
      {
        title: "Fundamentos de redes de computadoras",
        provider: "Plataforma de enseñanza abierta",
        area: "Redes",
        format: "En línea",
      },
      {
        title: "Introducción a la gobernanza de datos",
        provider: "Curso de extensión universitaria",
        area: "Gobernanza",
        format: "En línea",
      },
      {
        title: "Comunicación científica y divulgación de la investigación",
        provider: "Programa de posgrado asociado",
        area: "Comunicación",
        format: "Presencial",
      },
      {
        title: "Seguridad y privacidad en infraestructura de red",
        provider: "Plataforma de enseñanza abierta",
        area: "Redes",
        format: "En línea",
      },
    ],
  },
  events: {
    eyebrow: "Eventos",
    title: "Eventos",
    description: "Talleres, seminarios y encuentros promovidos por el laboratorio y el grupo de investigación.",
    note: "Lista ilustrativa — sustitúyala por los eventos reales del laboratorio.",
    items: [
      { title: "Seminario de Gobernanza Digital", date: "Octubre de 2025", status: "Realizado", upcoming: false },
      { title: "Taller de Redes Comunitarias", date: "Marzo de 2026", status: "Próximo", upcoming: true },
      { title: "Encuentro Anual del Grupo de Investigación", date: "Junio de 2026", status: "Próximo", upcoming: true },
    ],
  },
  opportunities: {
    eyebrow: "Oportunidades",
    title: "Prácticas y empleo",
    description: "Oportunidades de prácticas, becas y empleo difundidas por el laboratorio y por instituciones asociadas.",
    note: "Lista ilustrativa — sustitúyala por las oportunidades reales y sus respectivos contactos/enlaces de postulación.",
    items: [
      {
        title: "Práctica de investigación — infraestructura de red",
        organization: "Laboratório Zero",
        type: "Práctica",
        status: "Abierta",
        open: true,
        description: "Apoyo a proyectos de simulación y experimentación de red, para estudiantes de grado.",
      },
      {
        title: "Beca de iniciación científica — gobernanza de datos",
        organization: "Laboratório Zero",
        type: "Beca",
        status: "Abierta",
        open: true,
        description: "Investigación sobre políticas de datos en asociación con un organismo público.",
      },
      {
        title: "Vacante de desarrollador(a) — institución asociada",
        organization: "Institución Asociada A",
        type: "Empleo",
        status: "Cerrada",
        open: false,
        description: "Vacante difundida por una institución asociada del laboratorio.",
      },
    ],
  },
  members: {
    eyebrow: "Miembros",
    title: "Equipo",
    description: "Investigadores y estudiantes que integran el Laboratório Zero.",
    note: "Lista ilustrativa — sustitúyala por los miembros reales del equipo.",
    photoLabel: "foto",
    items: [
      { name: "Coordinador(a) del laboratorio", role: "Docente / coordinación" },
      { name: "Investigador(a) A", role: "Investigador(a)" },
      { name: "Investigador(a) B", role: "Investigador(a)" },
      { name: "Estudiante de grado A", role: "Iniciación científica" },
      { name: "Estudiante de posgrado A", role: "Maestría" },
      { name: "Estudiante de posgrado B", role: "Doctorado" },
    ],
  },
  privacyPolicy: {
    eyebrow: "Privacidad",
    title: "Política de Privacidad",
    description:
      "Cómo el sitio web del Laboratório Zero trata los datos de navegación y las preferencias, en conformidad con la Ley General de Protección de Datos de Brasil (LGPD).",
    dataTitle: "Qué datos recopilamos",
    themeCardTitle: "Preferencia de tema e idioma",
    themeCardText:
      "Se guardan localmente en su navegador (almacenamiento local), solo después de su consentimiento. No se envían a nuestros servidores ni se comparten con terceros.",
    assistantCardTitle: "Asistente virtual",
    assistantCardText:
      "Al utilizar el asistente de IA del sitio, los mensajes que escriba se envían al servicio de asistente configurado por el laboratorio, únicamente para generar una respuesta. El historial de la conversación no se almacena en este sitio — existe solo durante su visita y se borra al actualizar la página.",
    trackingCardTitle: "Cookies y rastreo",
    trackingCardText:
      "No utilizamos cookies de rastreo, publicidad o herramientas de análisis de navegación (analytics) en este sitio.",
    legalBasisTitle: "Base legal y consentimiento",
    legalBasisText:
      "El almacenamiento de las preferencias de tema e idioma solo ocurre mediante su consentimiento, conforme al aviso mostrado en la primera visita al sitio (Art. 7º, I, de la LGPD). El envío de mensajes al asistente virtual ocurre solo cuando usted decide utilizarlo, para la ejecución del servicio solicitado (Art. 7º, V, de la LGPD).",
    retentionTitle: "Retención y eliminación",
    retentionText:
      "Las preferencias de tema e idioma permanecen almacenadas hasta que usted las elimine mediante su propio navegador o revoque el consentimiento (vea el botón abajo). Los mensajes del asistente no son retenidos por este sitio.",
    sharingTitle: "Compartición con terceros",
    sharingText:
      "Solo el servicio de asistente virtual configurado por el laboratorio recibe el contenido de los mensajes cuando usted opta por utilizarlo. Ningún otro tercero recibe datos a partir de este sitio.",
    rightsTitle: "Sus derechos",
    rightsText:
      "En los términos del Art. 18 de la LGPD, usted puede solicitar la confirmación de la existencia de tratamiento, acceso, corrección, anonimización o eliminación de datos innecesarios, portabilidad, información sobre la compartición y revocación del consentimiento. Para ejercer estos derechos, contáctenos por el correo indicado en la {link}.",
    contactPageLink: "página de Contacto",
    manageTitle: "Gestionar sus preferencias",
    manageText: "Puede revocar su consentimiento en cualquier momento y volver a ver el aviso de cookies.",
    manageButton: "Gestionar preferencias de cookies",
    lastUpdated: "Última actualización: julio de 2026.",
  },
}
