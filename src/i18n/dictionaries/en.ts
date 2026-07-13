import type { pt } from "./pt"

export const en: typeof pt = {
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    publications: "Publications",
    statistics: "Statistics",
    partnerships: "Partnerships",
    services: "Service Catalog",
    courses: "Courses",
    events: "Events",
    opportunities: "Training & Opportunities",
    members: "Members",
  },
  aboutSections: {
    researchLines: "Research areas",
    datacenter: "Infrastructure",
    photos: "Photos",
    virtualTour: "360° / 3D tour",
    location: "Location",
    contact: "Contact",
  },
  opportunitiesSections: {
    training: "Complementary Training",
    jobs: "Internships & Jobs",
  },
  header: {
    openMenu: "Open menu",
    expandSubmenu: "Expand submenu for",
    collapseSubmenu: "Collapse submenu for",
    changeLanguage: "Change language",
    serviceStatusCta: "Nerd zone",
    userAreaCta: "My account",
    userAreaComingSoon: "Coming soon",
  },
  footer: {
    description:
      "Laboratory of the Technology, Communication and Governance Research Group. Network infrastructure, projects, publications and training applied to academic research.",
    navigation: "Navigation",
    contact: "Contact",
    viewLocation: "View location",
    copyright: "Laboratório Zero — Technology, Communication and Governance Research Group.",
    privacyPolicy: "Privacy Policy",
  },
  themeToggle: {
    enableLight: "Enable light mode",
    enableDark: "Enable dark mode",
  },
  cookieConsent: {
    message:
      "We use local browser storage only to remember your theme and language preferences. We do not use tracking or advertising cookies.",
    learnMore: "Learn more",
    decline: "Decline",
    accept: "Accept",
  },
  chatWidget: {
    title: "Laboratório Zero Assistant",
    greeting:
      "Hello! I can help with questions about the Computer Network Technology program and about Laboratório Zero.",
    notConnected:
      "Assistant not yet connected. Configure VITE_CHAT_ENDPOINT with the URL of your external service.",
    responseError: "Assistant response failed (HTTP {status})",
    invalidResponse: "I did not receive a valid response from the assistant.",
    genericError: "An error occurred while talking to the assistant. Please try again shortly.",
    typing: "Typing…",
    placeholder: "Type your question…",
    send: "Send",
    close: "Close chat",
    open: "Open chat with the assistant",
  },
  home: {
    eyebrow: "Technology, Communication and Governance Research Group",
    title: "Laboratório Zero",
    description:
      "A research laboratory dedicated to network infrastructure, applied projects, scientific publications and the training of researchers and students. We work in partnership with academic institutions, professors and researchers, public and private organizations, startups and NGOs, providing technological support to specialized projects, with a focus on AI and data sovereignty and protection.",
    ctaProjects: "See the projects",
    ctaAbout: "About the laboratory",
    areasTitle: "Areas of activity",
    highlights: {
      projects: {
        title: "Projects",
        description:
          "Applied research in network infrastructure, digital governance and communication, with open results.",
      },
      publications: {
        title: "Publications",
        description: "Academic output of the group: articles, book chapters and technical reports.",
      },
      partnerships: {
        title: "Partnerships",
        description: "Cooperation with academic institutions, research centers and public bodies.",
      },
      training: {
        title: "Training",
        description: "Courses and events aimed at students, researchers and the community.",
      },
      opportunities: {
        title: "Training & Opportunities",
        description:
          "Curated external courses and internship, scholarship and job openings in the Networking field.",
      },
    },
    grants: {
      eyebrow: "Funding and Innovation",
      title: "Are you submitting a project to a funding call?",
      paragraph:
        "If you are considering submitting your startup or project to funding calls such as FINEP, CNPq, research support foundations or even international calls, consider naming Laboratório Zero as a partner for the implementation of solutions. When planning the project budget, consider including resources for technology infrastructure to support your solutions.",
      dcaasTitle: "Datacenter as a Service",
      dcaasParagraph:
        "Laboratório Zero hosts a variety of services under a datacenter-as-a-service model: a complete datacenter infrastructure for partners, with security mechanisms, backup, custom applications and solutions tailored to individual needs — applied technological innovation supporting secure, sovereign, high-performance technology.",
      ctaContact: "Talk to the laboratory",
      ctaEligibility: "Check project eligibility",
      eligibilityComingSoon: "Form link coming soon",
    },
    servicesEyebrow: "Services",
    servicesTitle: "Web tools open to the community",
    servicesMoreNote:
      "Partners and the IFRO academic community get access to dozens of additional tools.",
    servicesViewAll: "See all services →",
    stats: {
      projects: "projects developed",
      publications: "group publications",
      partners: "partner institutions",
      note: "Illustrative figures — update with the laboratory's real data.",
      cta: "See the full statistics →",
    },
  },
  about: {
    eyebrow: "About",
    title: "The laboratory",
    description:
      "Laboratório Zero is part of the Technology, Communication and Governance Research Group, bringing together network infrastructure, applied projects and researcher training.",
    researchLinesTitle: "Research areas",
    researchLines: {
      governanceCommunication: {
        title: "Governance and Communication",
        description:
          "Investigates how organizations govern their data, information and communication processes amid digital transformation. Covers data and IT governance, LGPD compliance, transparency, knowledge management, process automation and the development of software and information systems that support these practices — including AI-based solutions for decision-making — with informational sovereignty and the sustainability of public and private organizations as a guiding horizon.",
      },
      networkSecurity: {
        title: "Networks and Security",
        description:
          "Investigates the design, operation and protection of network and computing infrastructures, from the datacenter to the edge. Covers network architectures, virtualization, monitoring, cryptography, incident response and the security of applications and AI systems, with an emphasis on solutions that strengthen data protection and sovereignty in academic, public and corporate environments.",
      },
    },
    researchLinesCnpqNote: "Group certified in the {link}.",
    researchLinesCnpqLink: "CNPq Research Group Directory",
    datacenterTitle: "Our datacenter infrastructure",
    datacenterIntro:
      "The laboratory's operation is supported by a small in-house datacenter, used both for research projects and for the public services made available to the community.",
    datacenterItems: {
      proxmox: {
        title: "Virtualization with Proxmox",
        description:
          "Virtualization cluster based on Proxmox VE, hosting simulation environments, network tests and the public services maintained by the laboratory.",
      },
      aiWorkstation: {
        title: "AI workstation",
        description:
          "Workstation dedicated to artificial intelligence processing workloads, used in applied research projects and model experimentation.",
      },
      backup: {
        title: "Local and remote backup",
        description:
          "Redundant backup routines, with copies kept locally and at a remote destination, ensuring the continuity and integrity of the laboratory's data.",
      },
    },
    photosTitle: "Laboratory photos",
    photoLabel: "photo",
    photosNote: "Illustrative gallery — replace with real photos of the laboratory.",
    tourTitle: "See the lab in 360° and 3D",
    tourText:
      "Space reserved for an immersive virtual tour of the laboratory's facilities, with 360° viewing and a three-dimensional model of the environments.",
    tourPlaceholder: "360° / 3D virtual tour coming soon",
    locationTitle: "Location",
    locationText: "Laboratório Zero operates at the facilities of IFRO — Porto Velho Zona Norte Campus:",
    locationAddress: "Av. Gov. Jorge Teixeira, 3146 — Setor Industrial, Porto Velho - RO, 76821-002, Brazil",
    mapTitle: "Map - IFRO Porto Velho Zona Norte Campus",
    contactTitle: "Contact",
    contactEmailLabel: "Email",
    contactAddressLabel: "Address",
    contactAddress:
      "IFRO — Porto Velho Zona Norte Campus, Av. Gov. Jorge Teixeira, 3146 — Setor Industrial, Porto Velho - RO, Brazil",
    sendEmail: "Send email",
    emailNote: "Illustrative email — replace with the laboratory's real contact.",
  },
  projects: {
    eyebrow: "Projects",
    title: "Projects and results",
    description:
      "Projects developed by the laboratory, active and completed, with their results: articles, software, animations and other materials.",
    note: "Illustrative content — replace with the laboratory's real projects.",
    items: [
      {
        title: "Project Alpha",
        period: "2023 – ongoing",
        description: "Network simulator for teaching, with results published as open-source software.",
        media: ["Software", "Article"],
      },
      {
        title: "Project Beta",
        period: "2022 – 2023",
        description: "Data governance study in partnership with a public body.",
        media: ["Technical report"],
      },
      {
        title: "Project Gamma",
        period: "2021 – 2022",
        description: "Science outreach material with animations about internet infrastructure.",
        media: ["Animation", "Video"],
      },
      {
        title: "Project Delta",
        period: "2019 – 2021",
        description: "Experimental communication platform for community networks.",
        media: ["Software", "Article"],
      },
    ],
  },
  publications: {
    eyebrow: "Publications",
    title: "Academic output",
    description: "Articles, book chapters and technical reports produced by the laboratory and its researchers.",
    note: "Illustrative list — replace with the group's real publications.",
    items: [
      {
        title: "Data governance in community networks: a case study",
        authors: "Silva, A.; Souza, B.",
        venue: "Brazilian Journal of Technology and Society",
        year: "2024",
      },
      {
        title: "Simulation of network protocols for undergraduate teaching",
        authors: "Pereira, C.; Lima, D.",
        venue: "Proceedings of the National Computer Networks Congress",
        year: "2023",
      },
      {
        title: "Public communication and digital infrastructure: governance challenges",
        authors: "Costa, E.",
        venue: "Communication and Governance Notebooks",
        year: "2022",
      },
    ],
  },
  statistics: {
    eyebrow: "Statistics",
    title: "Laboratory statistics",
    description:
      "Day-to-day operational figures of Laboratório Zero: maintained infrastructure, community support and productivity generated by the projects.",
    note: "Illustrative figures — update with the laboratory's real operational data.",
    kpis: [
      { label: "Virtual machines created", value: "1,240+" },
      { label: "Users served", value: "3,800+" },
      { label: "Data managed", value: "18,400 GB" },
      { label: "Automated analyses performed", value: "52,000+" },
      { label: "Working hours saved", value: "6,500+ h" },
      { label: "Scripts and tools developed", value: "140+" },
      { label: "Network incidents resolved", value: "320+" },
      { label: "Average service uptime", value: "99.7%" },
    ],
    machinesChartTitle: "Growth of managed machines",
    machinesChartSubtitle: "Last 6 months",
    machinesGrowth: [
      { label: "Jan", value: 780 },
      { label: "Feb", value: 850 },
      { label: "Mar", value: 920 },
      { label: "Apr", value: 1010 },
      { label: "May", value: 1140 },
      { label: "Jun", value: 1240 },
    ],
    categoryChartTitle: "Data managed by category",
    categoryChartSubtitle: "Current distribution",
    dataByCategory: [
      { label: "Backups", value: 8200 },
      { label: "Virtual machines", value: 5100 },
      { label: "Repositories", value: 2800 },
      { label: "Wiki and documents", value: 1600 },
      { label: "Other services", value: 700 },
    ],
  },
  partnerships: {
    eyebrow: "Partnerships",
    title: "Partnerships",
    description:
      "Laboratório Zero relates to different types of partners: donors, users of the infrastructure and institutions that develop projects jointly.",
    whoAreThey: "Who they are",
    networkIntro:
      "The network below represents the connections between the laboratory and its partners — hover or tap a partner to see the partnership details.",
    networkNote:
      "Illustrative network — the layout changes on every visit to the page; replace with the real partners and logos.",
    backToPartnerships: "← Back to Partnerships",
    backTo: "← Back to",
    viewDetails: "View partnership details →",
    logo: "logo",
    illustrativeNote: "Illustrative content — replace with the real data for this partnership.",
    labName: "Laboratório Zero",
    detailsTitle: "Partnership details",
    objectiveLabel: "Partnership objective",
    startDateLabel: "Partnership start",
    expectedEndDateLabel: "Expected end date",
    statusLabel: "Status",
    expectedResultsLabel: "Expected results",
    achievedResultsLabel: "Results achieved",
    referenceDocumentLabel: "Reference document",
    responsiblePartiesLabel: "Responsible parties",
    howToPartner: {
      cta: "Want to become a partner? See how →",
      eyebrow: "Partnerships",
      title: "How to become a partner",
      description:
        "Learn the path to formalizing a partnership with Laboratório Zero, from the first conversations to gaining access to services.",
      stepsTitle: "How it works",
      steps: [
        {
          title: "Expression of interest",
          description:
            "The interested institution or person contacts the laboratory and briefly presents the goal of the intended partnership.",
        },
        {
          title: "Fit analysis",
          description:
            "The laboratory team assesses whether the proposal aligns with the research lines, available technical capacity, and the institutional guidelines of Laboratório Zero and IFRO.",
        },
        {
          title: "Formalization",
          description:
            "Scope, counterparts, responsibilities, and timelines are defined jointly and recorded in a reference document.",
        },
        {
          title: "Onboarding",
          description:
            "The partner institution gets access to the defined services and resources, with an introduction to the team and follow-up channels.",
        },
      ],
      counterpartsTitle: "Accepted types of counterpart",
      counterparts: [
        "Infrastructure or equipment",
        "Financial resources or scholarships",
        "Data, content, or use cases for research",
        "Technical knowledge, mentoring, or co-supervision",
        "Institutional outreach and network building",
      ],
      counterpartsNote:
        "Illustrative content — replace with the counterpart types actually accepted by the laboratory.",
      eligibilityTitle: "Ready to get started?",
      eligibilityText:
        "Fill out the eligibility form to take the first step. Our team will get in touch to move forward with the fit analysis.",
      ctaEligibility: "Check eligibility",
      eligibilityComingSoon: "Form link coming soon",
    },
  },
  services: {
    eyebrow: "Service Catalog",
    title: "Service Catalog",
    description:
      "Web tools maintained by Laboratório Zero, organized by audience, category and search.",
    note: "Services being deployed — access links will be published as soon as each one is available.",
    comingSoon: "Coming soon",
    backToServices: "← Back to the Service Catalog",
    featuresTitle: "Features",
    accessService: "Access",
    notPublished: "Coming soon — service not yet published",
    searchPlaceholder: "Search services by name or description…",
    categoryAllLabel: "All categories",
    categories: {
      infrastructure: "Infrastructure",
      development: "Development",
      "data-ai": "Data & AI",
      security: "Security",
      utilities: "Utilities",
    },
    noResults: "No services found for the selected filters.",
    audiencePublicLabel: "Public services",
    audiencePartnersLabel: "Partner services",
    audienceAcademicLabel: "IFRO academic community",
    audiencePublicDescription: "Tools freely available to the whole community.",
    audiencePublicRequirement:
      "What do you need to use it? Nothing! Just use it. In some cases a simple registration may be required, but access is free.",
    audiencePartnersDescription:
      "In addition to the public services, which can be customized for each partnership, the laboratory makes these additional tools available to partner institutions.",
    audiencePartnersRequirement:
      "What do you need for access? A formal partnership with Laboratório Zero or with IFRO, with the appropriate limitations, counterparts and responsibilities.",
    audienceAcademicDescription:
      "In addition to all public and partner services, the IFRO academic community has access to these additional tools.",
    audienceAcademicRequirement:
      "What do you need to use it? Be involved in an institutionalized project at IFRO or be teaching a course at IFRO. If you are a student, you must be authorized by the course instructor. Use is subject to formalizing the request with Laboratório Zero, with the appropriate limitations, counterparts and responsibilities.",
    audienceLearnMore: "Learn more →",
    audienceRequirementsTitle: "Access criteria",
    audienceRequirementsComingSoon:
      "Full details about the access criteria will be published on this page soon.",
    pipelineNote:
      "We are developing a complete development pipeline (CI/CD), to be made available for the software development workflow in classes.",
    academicBadge: "Classes and projects",
    items: {
      wiki: {
        name: "Wiki",
        description:
          "Various wiki pages for collaborative documentation of projects and the laboratory's technical knowledge.",
        details:
          "Collaborative documentation space maintained by the laboratory, gathering pages about projects, technical procedures, tutorials and knowledge records produced by the team.",
        features: [
          "Collaborative editing among laboratory members",
          "Page version history",
          "Organization by categories and projects",
        ],
      },
      bentopdf: {
        name: "BentoPDF",
        description:
          "PDF manipulator (merge, split, convert) with local processing, preserving file privacy.",
        details:
          "Tool to merge, split, compress and convert PDF files directly in the browser, without sending documents to external servers — all processing happens locally, preserving content privacy.",
        features: [
          "Local processing, no file upload",
          "Merge, split, compress and convert PDFs",
          "No registration required",
        ],
      },
      drawio: {
        name: "Draw.io",
        description: "Diagram editor for flowcharts, network architectures and concept maps.",
        details:
          "Diagram editor for creating flowcharts, network architectures, mind maps and concept maps, with export in several formats.",
        features: [
          "Ready-made templates for network diagrams",
          "Export to PNG, SVG and PDF",
          "Integration with cloud storage services",
        ],
      },
      excalidraw: {
        name: "Excalidraw",
        description: "Collaborative whiteboard for hand-drawn-style sketches and diagrams.",
        details:
          "Collaborative whiteboard with a hand-drawn style, ideal for sketching ideas, architectures and visual explanations in real time with other people.",
        features: [
          "Real-time collaboration",
          "Hand-drawn sketch style",
          "Export as image (PNG/SVG)",
        ],
      },
      limesurvey: {
        name: "LimeSurvey",
        description: "Platform for creating and running academic surveys and forms.",
        details:
          "Platform for creating, running and analyzing academic surveys and forms, used to collect data for laboratory and research group projects.",
        features: [
          "Various question types and conditional logic",
          "Export of collected results",
          "Support for anonymous surveys",
        ],
      },
      "repositorio-debian": {
        name: "Debian package repository",
        description: "Public Debian package repository maintained by the laboratory.",
        details:
          "Public Debian package repository maintained by the laboratory, providing packages used in the network infrastructure projects developed by the team.",
        features: [
          "Periodically updated package mirror",
          "Public access via apt",
          "Repository configuration documentation",
        ],
      },
      "teste-ipv6": {
        name: "IPv6 test server",
        description: "Tool to check the IPv6 connectivity and configuration of a network.",
        details:
          "Tool to check whether a network and a device have working IPv6 connectivity, and to help diagnose common configuration issues.",
        features: [
          "IPv6 connectivity test",
          "Configuration issue diagnostics",
          "Simple results report",
        ],
      },
      openspeedtest: {
        name: "OpenSpeedTest",
        description: "Internet speed test hosted by the laboratory itself.",
        details:
          "Internet speed test server hosted by the laboratory, allowing you to measure download, upload and latency without relying on third-party services.",
        features: [
          "Download and upload test",
          "Latency (ping) measurement",
          "No plugins required",
        ],
      },
      "encurtador-url": {
        name: "URL shortener",
        description: "Service to shorten and share links in a simple way.",
        details:
          "Service to shorten long links, making it easier to share materials, forms and laboratory pages.",
        features: [
          "Instant generation of short links",
          "Basic access statistics",
          "Customizable links",
        ],
      },
      qrcode: {
        name: "QR Code generator",
        description:
          "Generation of custom QR Codes for promoting materials, events and laboratory services.",
        details:
          "Tool for creating custom QR Codes — with adjustable colors and shape — for use in printed materials, presentations and promotion of laboratory events and services.",
        features: [
          "Custom colors and shape",
          "High-resolution export",
          "Fast generation, no registration required",
        ],
      },
      "internet-wifi": {
        name: "Wi-Fi Internet Access",
        description: "Wi-Fi network open to the community on the laboratory's premises.",
        details:
          "Wi-Fi network made freely available to the community on Laboratório Zero's premises, providing internet access for visitors and users of the laboratory's spaces.",
        features: [
          "Free internet access via Wi-Fi",
          "Available on the laboratory's premises",
          "No prior registration required",
        ],
      },
      "hospedagem-web": {
        name: "Web Hosting",
        description: "Hosting of websites and web applications for projects developed in partnership with the laboratory.",
        details:
          "Web hosting environment made available to partners to publish institutional websites, applications and project pages developed jointly with the laboratory.",
        features: [
          "Custom domains and subdomains",
          "SSL certificate included",
          "Support for static and dynamic applications",
        ],
      },
      "banco-de-dados": {
        name: "Database",
        description: "Managed database instances for partner applications and projects.",
        details:
          "Provisioning of relational and non-relational database instances, with backup and monitoring, to support applications and projects developed with partners.",
        features: [
          "Support for relational and non-relational databases",
          "Automated periodic backups",
          "Access controlled by dedicated credentials",
        ],
      },
      metabase: {
        name: "Metabase",
        description: "Data analysis and visualization platform for tracking project indicators.",
        details:
          "Business intelligence tool for creating dashboards and visual reports from the data of projects developed with partners, without the need for advanced technical knowledge.",
        features: [
          "Creation of interactive dashboards and charts",
          "Queries without needing SQL",
          "Sharing reports with the team",
        ],
      },
      openproject: {
        name: "OpenProject",
        description: "Project management tool for planning and tracking tasks in partnerships.",
        details:
          "Project management platform used for planning, timelines and task tracking in initiatives developed jointly with the laboratory's partners.",
        features: [
          "Kanban boards and Gantt timelines",
          "Task and owner tracking",
          "Project progress reports",
        ],
      },
      gitlab: {
        name: "GitLab",
        description: "Code versioning and continuous integration platform for development projects.",
        details:
          "GitLab instance maintained by the laboratory for source code versioning, change review and continuous integration pipelines of projects developed with partners.",
        features: [
          "Private and shared Git repositories",
          "Continuous integration pipelines (CI/CD)",
          "Code review through merge requests",
        ],
      },
      "gerenciamento-automacao": {
        name: "Automation Management",
        description: "Dashboard for orchestrating and running infrastructure automation routines.",
        details:
          "Tool for orchestrating, scheduling and tracking the execution of playbooks and infrastructure automation routines used in the laboratory's projects.",
        features: [
          "Execution and scheduling of playbooks",
          "Execution history and logs",
          "Team-based access control",
        ],
      },
      n8n: {
        name: "N8N",
        description: "Workflow automation and system integration platform.",
        details:
          "Low-code automation tool for creating workflows that integrate systems, APIs and services used in projects developed with partners.",
        features: [
          "Visual workflow editor",
          "Integration with several APIs and services",
          "Scheduled or event-based execution (webhooks)",
        ],
      },
      "gerenciamento-wifi": {
        name: "Wi-Fi Management",
        description: "Dashboard for centralized management of partners' Wi-Fi networks and access points.",
        details:
          "Platform for centralized management of Wi-Fi access points, allowing you to configure networks, monitor connected devices and apply access policies in partner environments.",
        features: [
          "Centralized access point management",
          "Monitoring of connected devices",
          "Access policy definition per network",
        ],
      },
      "registro-logs": {
        name: "Log Registry",
        description: "Collection and centralization of system and application logs for partners.",
        details:
          "Platform for collecting, storing and centrally querying system, network and application logs, supporting monitoring and incident investigation.",
        features: [
          "Centralized log collection",
          "Search and filtering of records",
          "Configurable history retention",
        ],
      },
      "armazenamento-cameras": {
        name: "Remote Camera Storage",
        description: "Storage of images and recordings from partners' remote cameras.",
        details:
          "Storage service dedicated to images and recordings from remote monitoring cameras, with configurable retention and controlled access for partner institutions.",
        features: [
          "Video recording storage",
          "Configurable retention period",
          "Access controlled by credentials",
        ],
      },
      "armazenamento-objetos": {
        name: "Object Storage (S3)",
        description: "S3-compatible object storage for files and data from partner projects.",
        details:
          "S3 API-compatible object storage service, used to store files, backups and data from applications developed in partnership with the laboratory.",
        features: [
          "Amazon S3-compatible API",
          "Scalable storage per bucket",
          "Access control via credentials and policies",
        ],
      },
      backup: {
        name: "Local and Remote Backup",
        description: "Local and remote backup routines for partners' data and systems.",
        details:
          "Backup service that keeps local and remote copies of partners' data and systems, with scheduled routines and integrity checks of the copies.",
        features: [
          "Scheduled local and remote copies",
          "Backup integrity verification",
          "On-demand restoration",
        ],
      },
      zabbix: {
        name: "Zabbix",
        description: "Infrastructure monitoring and alerting platform for partner systems.",
        details:
          "Server, network and application monitoring tool, with real-time alert generation to support the operation and availability of partner systems.",
        features: [
          "Server and network monitoring",
          "Configurable real-time alerts",
          "Performance history and charts",
        ],
      },
      grafana: {
        name: "Grafana",
        description: "Real-time metrics and infrastructure indicator visualization dashboards.",
        details:
          "Metrics visualization tool used to create real-time dashboards on partners' infrastructure and systems, integrating with different data sources.",
        features: [
          "Customizable real-time dashboards",
          "Integration with several data sources",
          "Visual alerts based on metric thresholds",
        ],
      },
      "llm-local": {
        name: "Local LLMs for AI",
        description: "Language models running locally, without sending data to external services.",
        details:
          "Infrastructure for running language models (LLMs) locally in the laboratory's datacenter, allowing partners to use generative AI without sending sensitive data to external services.",
        features: [
          "Local execution of language models",
          "Processing without sending data to third parties",
          "Support for different open source models",
        ],
      },
      "gestao-modelos-tokens-ia": {
        name: "AI Model and Token Management",
        description: "Dashboard to manage access to AI models and token consumption per project.",
        details:
          "Platform for managing credentials, quotas and token consumption of AI models used in projects developed with partners, with control per team and per application.",
        features: [
          "Credential and token quota management",
          "Consumption tracking per project",
          "Access control by team and application",
        ],
      },
      "gerenciamento-dns": {
        name: "DNS Management",
        description: "Dashboard for managing DNS zones and records of partners' domains.",
        details:
          "Platform for managing DNS zones and records of domains used by partners, allowing records to be configured and updated centrally and securely.",
        features: [
          "Centralized DNS zone management",
          "Support for the main record types",
          "Change history",
        ],
      },
      roboshadow: {
        name: "RoboShadow",
        description: "Vulnerability scanning and attack surface assessment for partner systems.",
        details:
          "Vulnerability scanning tool used to assess the attack surface of partner institutions' devices and systems, supporting preventive security actions.",
        features: [
          "Periodic vulnerability scanning",
          "Attack surface reports",
          "Risk prioritization by severity",
        ],
      },
      crowdsec: {
        name: "CrowdSec",
        description: "Collaborative threat protection, with automatic blocking of malicious IPs.",
        details:
          "Collaborative security system that identifies malicious behavior and automatically blocks attacking IPs, based on threat intelligence shared by a global community.",
        features: [
          "Automatic blocking of malicious IPs",
          "Shared threat intelligence",
          "Configurable detection scenarios",
        ],
      },
      "captive-portal": {
        name: "Captive Portal",
        description: "Authentication portal for controlled access to partners' Wi-Fi networks.",
        details:
          "Captive portal service used to authenticate and control user access to partner institutions' Wi-Fi networks, with customizable authentication options.",
        features: [
          "User authentication on the Wi-Fi network",
          "Customizable access page",
          "Authenticated access reports",
        ],
      },
      "map-server": {
        name: "Map Server",
        description: "Map server for publishing and consuming geographic data in partner projects.",
        details:
          "Map server used to publish and consume geographic data (vector and raster layers) in geoprocessing projects developed with partners.",
        features: [
          "Publishing of vector and raster map layers",
          "Integration via WMS/WFS standards",
          "Support for multiple simultaneous projects",
        ],
      },
      opendronemap: {
        name: "OpenDroneMap",
        description: "Drone aerial imagery processing to generate maps and 3D models.",
        details:
          "Platform for processing images captured by drones, generating orthomosaics, digital elevation models and 3D models for partners' mapping projects.",
        features: [
          "Generation of orthomosaics and 3D models",
          "Processing of drone-captured imagery",
          "Export in GIS-compatible formats",
        ],
      },
      "ide-eclipse-che": {
        name: "Eclipse Che IDE",
        description: "Cloud-based integrated development environment, accessible directly from the browser.",
        details:
          "Cloud-based integrated development environment (IDE) made available to the IFRO academic community for coding in courses and projects, without any local installation.",
        features: [
          "Browser access, no local installation",
          "Pre-configured environments per language/project",
          "Used in classes and hands-on programming activities",
        ],
      },
      "desktop-remoto": {
        name: "Remote Desktop",
        description: "Remote access to complete work environments maintained by the laboratory.",
        details:
          "Remote desktop service that provides the IFRO academic community with complete work environments, with pre-installed tools for classes and hands-on activities.",
        features: [
          "Remote access from any device",
          "Pre-installed academic tools",
          "Isolated environment per user",
        ],
      },
      pnetlab: {
        name: "PNetLab",
        description: "Virtual network lab for topology simulation and configuration practice.",
        details:
          "Virtual network lab platform used in IFRO courses for topology simulation, equipment configuration and practicing computer networking concepts.",
        features: [
          "Simulation of complex network topologies",
          "Support for several vendors and systems",
          "Used in hands-on networking classes",
        ],
      },
      "maquinas-virtuais": {
        name: "Virtual Machines (Linux and Windows)",
        description: "Provisioning of Linux and Windows virtual machines for use in classes and projects.",
        details:
          "Virtual machine provisioning service with Linux and Windows systems, made available to the IFRO academic community for use in courses, hands-on labs and research projects.",
        features: [
          "Linux and Windows virtual machines on demand",
          "Custom configurations per course",
          "Remote access during class time",
        ],
      },
      proxmox: {
        name: "Proxmox Virtualization Environment",
        description: "Virtualization infrastructure used in IT infrastructure courses and projects.",
        details:
          "Access to the laboratory's Proxmox virtualization environment, used in courses and projects to practice infrastructure administration, creating virtual machines and containers.",
        features: [
          "Creation of virtual machines and containers (LXC)",
          "Practice of infrastructure administration",
          "Used in IT infrastructure courses",
        ],
      },
      firewall: {
        name: "Firewall",
        description: "Firewall environment to protect partners' networks and systems.",
        details:
          "Firewall environment managed by the laboratory, used to protect partner institutions' networks and systems, with rule and security policy configuration on demand.",
        features: [
          "Security rule and policy configuration",
          "Protection of partners' networks and systems",
          "Network event logging and auditing",
        ],
      },
      "opencode-llm-local": {
        name: "OpenCode + Local LLM",
        description: "AI-assisted coding environment, with a language model running locally.",
        details:
          "Development environment with an AI-based coding assistant (OpenCode), integrated with a language model running locally at the laboratory, made available to the IFRO academic community for use in classes and projects.",
        features: [
          "Code assistance from a local AI",
          "No code sent to external services",
          "Used in programming classes and projects",
        ],
      },
      "gerenciamento-webscraping": {
        name: "Web Scraping Management",
        description: "Environment for creating and running automated web data collection routines.",
        details:
          "Environment made available to the IFRO academic community for developing, running and scheduling automated web scraping routines, used in classes and research projects.",
        features: [
          "Execution and scheduling of scraping routines",
          "Storage of collected data",
          "Used in classes and research projects",
        ],
      },
    },
  },
  serviceStatus: {
    eyebrow: "Service Status",
    title: "Service Status",
    description: "Real-time availability of the public services maintained by Laboratório Zero.",
    grafanaNote:
      "The data on this page will be updated automatically from the laboratory's Grafana monitoring dashboard.",
    uptimeLabel: "Uptime (30 days)",
    statusOperational: "Operational",
    statusDegraded: "Degraded performance",
    statusDown: "Down",
    illustrativeNote: "Illustrative data — will be replaced by the Grafana integration.",
  },
  courses: {
    eyebrow: "Courses",
    title: "Training",
    description: "Courses and workshops offered by the laboratory for students, researchers and the community.",
    note: "Illustrative content — replace with the courses actually offered.",
    items: [
      {
        title: "Introduction to computer networks",
        description: "Extension course aimed at undergraduate students.",
        modality: "In-person",
      },
      {
        title: "Data and technology governance",
        description: "Short course on data policy and digital regulation.",
        modality: "Online",
      },
      {
        title: "Network simulation workshop",
        description: "Hands-on workshop with the tools developed by the laboratory.",
        modality: "In-person",
      },
    ],
  },
  events: {
    eyebrow: "Events",
    title: "Events",
    description: "Workshops, seminars and gatherings promoted by the laboratory and the research group.",
    note: "Illustrative list — replace with the laboratory's real events.",
    items: [
      { title: "Digital Governance Seminar", date: "October 2025", status: "Held", upcoming: false },
      { title: "Community Networks Workshop", date: "March 2026", status: "Upcoming", upcoming: true },
      { title: "Research Group Annual Meeting", date: "June 2026", status: "Upcoming", upcoming: true },
    ],
  },
  opportunities: {
    eyebrow: "Training & Opportunities",
    title: "Training & Opportunities",
    description:
      "Curated courses, materials and openings in the Networking field, selected by the laboratory team to support students in the course. The laboratory does not teach the courses or offer the positions listed here — it only shares relevant external opportunities.",
    externalLabel: "External source",
    training: {
      title: "Complementary Training",
      description:
        "External courses and materials recommended by the laboratory to deepen network, governance and communication topics, complementing the courses offered directly by the group.",
      note: "Illustrative list — replace with the real training suggestions and their links.",
      viewCourse: "Go to course",
      items: [
        {
          title: "Computer networking fundamentals",
          provider: "Open learning platform",
          area: "Networks",
          format: "Online",
          url: "",
        },
        {
          title: "Introduction to data governance",
          provider: "University extension course",
          area: "Governance",
          format: "Online",
          url: "",
        },
        {
          title: "Scientific communication and research outreach",
          provider: "Partner graduate program",
          area: "Communication",
          format: "In-person",
          url: "",
        },
        {
          title: "Security and privacy in network infrastructure",
          provider: "Open learning platform",
          area: "Networks",
          format: "Online",
          url: "",
        },
      ],
    },
    jobs: {
      title: "Internships & Jobs",
      description:
        "Internship, scholarship and job openings selected by the laboratory team at partner institutions and other organizations, in the Networking field.",
      note: "Illustrative list — replace with real opportunities and their application contacts/links.",
      apply: "Apply",
      items: [
        {
          title: "Network support internship",
          organization: "Partner Institution A",
          type: "Internship",
          status: "Open",
          open: true,
          description: "Internship in network infrastructure and support, announced by a partner institution of the course.",
          url: "",
        },
        {
          title: "Undergraduate research scholarship — data governance in networks",
          organization: "Partner University B",
          type: "Scholarship",
          status: "Open",
          open: true,
          description:
            "Undergraduate research scholarship on a data governance in networks project, offered by a partner institution.",
          url: "",
        },
        {
          title: "Network developer position",
          organization: "Partner Company C",
          type: "Job",
          status: "Closed",
          open: false,
          description: "Position advertised by a partner company, aimed at Networking graduates.",
          url: "",
        },
      ],
    },
  },
  members: {
    eyebrow: "Members",
    title: "Team",
    description: "Researchers and students who are part of Laboratório Zero.",
    note: "Illustrative list — replace with the team's real members.",
    photoLabel: "photo",
    items: [
      { name: "Laboratory coordinator", role: "Faculty / coordination" },
      { name: "Researcher A", role: "Researcher" },
      { name: "Researcher B", role: "Researcher" },
      { name: "Undergraduate student A", role: "Undergraduate research" },
      { name: "Graduate student A", role: "Master's student" },
      { name: "Graduate student B", role: "PhD student" },
    ],
  },
  privacyPolicy: {
    eyebrow: "Privacy",
    title: "Privacy Policy",
    description:
      "How the Laboratório Zero website handles browsing data and preferences, in compliance with Brazil's General Data Protection Law (LGPD).",
    dataTitle: "What data we collect",
    themeCardTitle: "Theme and language preference",
    themeCardText:
      "Stored locally in your browser (local storage), only after your consent. It is not sent to our servers or shared with third parties.",
    assistantCardTitle: "Virtual assistant",
    assistantCardText:
      "When you use the site's AI assistant, the messages you type are sent to the assistant service configured by the laboratory, only to generate a response. The conversation history is not stored by this site — it exists only during your visit and is erased when the page is refreshed.",
    trackingCardTitle: "Cookies and tracking",
    trackingCardText:
      "We do not use tracking, advertising or browsing analytics cookies on this site.",
    legalBasisTitle: "Legal basis and consent",
    legalBasisText:
      "Theme and language preferences are only stored with your consent, as shown in the notice displayed on your first visit to the site (LGPD Art. 7, I). Messages are sent to the virtual assistant only when you decide to use it, to perform the requested service (LGPD Art. 7, V).",
    retentionTitle: "Retention and deletion",
    retentionText:
      "Theme and language preferences remain stored until you delete them through your browser or revoke your consent (see the button below). Assistant messages are not retained by this site.",
    sharingTitle: "Sharing with third parties",
    sharingText:
      "Only the virtual assistant service configured by the laboratory receives the content of the messages when you choose to use it. No other third party receives data from this site.",
    rightsTitle: "Your rights",
    rightsText:
      "Under LGPD Art. 18, you may request confirmation of processing, access, correction, anonymization or deletion of unnecessary data, portability, information about sharing, and revocation of consent. To exercise these rights, contact us via the email listed on the {link}.",
    contactPageLink: "Contact page",
    manageTitle: "Manage your preferences",
    manageText: "You can revoke your consent at any time and see the cookie notice again.",
    manageButton: "Manage cookie preferences",
    lastUpdated: "Last updated: July 2026.",
  },
}
