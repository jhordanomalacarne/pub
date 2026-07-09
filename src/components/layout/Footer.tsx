import { Link } from "react-router-dom"
import { NAV_ITEMS } from "../../lib/nav"
import gtecLogo from "../../assets/gtec-logo.png"

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <img src={gtecLogo} alt="GTEC" className="h-10 w-auto" />
            <span className="mt-3 block font-serif text-lg font-semibold text-heading">
              Laboratório Zero
            </span>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Laboratório do Grupo de Pesquisa em Tecnologia, Comunicação e
              Governança. Infraestrutura de rede, projetos, publicações e
              formação aplicados à pesquisa acadêmica.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-ink">Navegação</h2>
            <ul className="mt-3 space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-ink-soft transition-colors hover:text-heading"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-ink">Contato</h2>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              <li>contato@laboratoriozero.example</li>
              <li>IFRO — Campus Porto Velho Zona Norte</li>
              <li>
                <Link to="/sobre#localizacao" className="hover:text-heading">
                  Ver localização
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-ink-soft">
          © {new Date().getFullYear()} Laboratório Zero — Grupo de Pesquisa em
          Tecnologia, Comunicação e Governança.
        </div>
      </div>
    </footer>
  )
}
