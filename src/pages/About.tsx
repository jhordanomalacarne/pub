import { Link } from "react-router-dom"
import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"
import { ABOUT_SECTIONS } from "../lib/aboutSections"
import { useHashScroll } from "../hooks/useHashScroll"
import gtecLogo from "../assets/gtec-logo.png"

const DATACENTER_ITEMS = [
  {
    title: "Virtualização com Proxmox",
    description:
      "Cluster de virtualização baseado em Proxmox VE, hospedando os ambientes de simulação, testes de rede e os serviços públicos mantidos pelo laboratório.",
  },
  {
    title: "Workstation para IA",
    description:
      "Estação de trabalho dedicada a cargas de processamento de inteligência artificial, utilizada em projetos de pesquisa aplicada e experimentação de modelos.",
  },
  {
    title: "Backup local e remoto",
    description:
      "Rotinas de backup redundantes, com cópias mantidas localmente e em destino remoto, garantindo continuidade e integridade dos dados do laboratório.",
  },
]

const PHOTO_PLACEHOLDERS = Array.from({ length: 6 }, (_, i) => i + 1)

const MAP_ADDRESS =
  "Instituto Federal de Rondônia — Campus Porto Velho Zona Norte, Av. Gov. Jorge Teixeira, 3146, Setor Industrial, Porto Velho - RO, 76821-002"

export function About() {
  useHashScroll()

  return (
    <>
      <PageHero
        eyebrow="Sobre"
        title="O laboratório"
        description="O Laboratório Zero integra o Grupo de Pesquisa em Tecnologia, Comunicação e Governança, reunindo infraestrutura de rede, projetos aplicados e formação de pesquisadores."
      />

      <nav className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-4xl flex-wrap gap-x-6 gap-y-2 px-6 py-4 text-sm">
          {ABOUT_SECTIONS.map((section) => (
            <Link
              key={section.id}
              to={`#${section.id}`}
              className="text-ink-soft transition-colors hover:text-heading"
            >
              {section.label}
            </Link>
          ))}
        </div>
      </nav>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="flex items-center gap-4 rounded-lg border border-border bg-surface px-6 py-5">
          <img src={gtecLogo} alt="GTEC" className="h-14 w-auto shrink-0" />
          <p className="text-sm text-ink-soft">
            O Laboratório Zero é vinculado ao <strong className="text-ink">GTEC — Grupo de Pesquisa em Tecnologia, Comunicação e Governança</strong>.
          </p>
        </div>

        <h2 id="missao" className="mt-12 scroll-mt-24 font-serif text-2xl font-semibold text-heading">
          Missão
        </h2>
        <p className="mt-4 text-ink-soft leading-relaxed">
          Produzir pesquisa aplicada e formação em rede de computadores,
          comunicação e governança digital, articulando infraestrutura
          própria, parcerias institucionais e a participação ativa de alunos
          e pesquisadores em projetos de impacto acadêmico e social.
        </p>

        <h2 id="linhas-pesquisa" className="mt-12 scroll-mt-24 font-serif text-2xl font-semibold text-heading">
          Linhas de pesquisa
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <Card>
            <h3 className="font-semibold text-heading">Infraestrutura de rede</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Simulação, experimentação e desenvolvimento de soluções de rede
              para ensino e pesquisa.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-heading">Governança digital</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Estudo de políticas, regulação e governança de tecnologias de
              comunicação e dados.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-heading">Comunicação e tecnologia</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Interseção entre tecnologia, comunicação pública e produção de
              conhecimento aberto.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-heading">Formação</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Cursos, oficinas e orientação de alunos de graduação e
              pós-graduação envolvidos nos projetos do laboratório.
            </p>
          </Card>
        </div>

        <h2 id="datacenter" className="mt-12 scroll-mt-24 font-serif text-2xl font-semibold text-heading">
          Nossa infraestrutura de datacenter
        </h2>
        <p className="mt-4 text-ink-soft leading-relaxed">
          A operação do laboratório é sustentada por um pequeno datacenter
          próprio, utilizado tanto para os projetos de pesquisa quanto para
          os serviços públicos disponibilizados à comunidade.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {DATACENTER_ITEMS.map((item) => (
            <Card key={item.title}>
              <h3 className="font-semibold text-heading">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{item.description}</p>
            </Card>
          ))}
        </div>

        <h2 id="fotos" className="mt-12 scroll-mt-24 font-serif text-2xl font-semibold text-heading">
          Fotos do laboratório
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {PHOTO_PLACEHOLDERS.map((n) => (
            <div
              key={n}
              className="flex aspect-square items-center justify-center rounded-lg border border-border bg-surface text-xs text-ink-soft"
            >
              foto {n}
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-ink-soft">
          Galeria ilustrativa — substitua pelas fotos reais do laboratório.
        </p>

        <h2 id="tour-virtual" className="mt-12 scroll-mt-24 font-serif text-2xl font-semibold text-heading">
          Conheça o lab em 360° e em 3D
        </h2>
        <p className="mt-4 text-ink-soft leading-relaxed">
          Espaço reservado para um tour virtual imersivo pelas instalações do
          laboratório, com visualização em 360° e modelo tridimensional dos
          ambientes.
        </p>
        <div className="mt-6 flex aspect-video items-center justify-center rounded-lg border border-dashed border-border bg-surface text-sm text-ink-soft">
          Tour virtual 360° / 3D em breve
        </div>

        <h2 id="localizacao" className="mt-12 scroll-mt-24 font-serif text-2xl font-semibold text-heading">
          Localização
        </h2>
        <p className="mt-4 text-ink-soft leading-relaxed">
          O Laboratório Zero funciona nas instalações do IFRO — Campus Porto
          Velho Zona Norte:
          <br />
          <span className="text-ink">
            Av. Gov. Jorge Teixeira, 3146 — Setor Industrial, Porto Velho -
            RO, 76821-002
          </span>
        </p>
        <div className="mt-6 overflow-hidden rounded-lg border border-border">
          <iframe
            title="Mapa - IFRO Campus Porto Velho Zona Norte"
            src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_ADDRESS)}&output=embed`}
            width="100%"
            height="360"
            className="border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <h2 id="contato" className="mt-12 scroll-mt-24 font-serif text-2xl font-semibold text-heading">
          Contato
        </h2>
        <Card className="mt-6">
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-heading">E-mail</dt>
              <dd className="mt-1 text-ink-soft">contato@laboratoriozero.example</dd>
            </div>
            <div>
              <dt className="font-semibold text-heading">Endereço</dt>
              <dd className="mt-1 text-ink-soft">
                IFRO — Campus Porto Velho Zona Norte, Av. Gov. Jorge Teixeira,
                3146 — Setor Industrial, Porto Velho - RO
              </dd>
            </div>
          </dl>
          <a
            href="mailto:contato@laboratoriozero.example"
            className="mt-6 inline-block rounded-md bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
          >
            Enviar e-mail
          </a>
        </Card>
        <p className="mt-6 text-xs text-ink-soft">
          E-mail ilustrativo — substitua pelo contato real do laboratório.
        </p>
      </section>
    </>
  )
}
