import { Link } from "react-router-dom"
import { NAV_ITEMS } from "../../lib/nav"
import { useLanguage } from "../../i18n/LanguageContext"
import gtecLogo from "../../assets/gtec-logo.png"
import lab0LogoNavy from "../../assets/lab0-logo-navy.png"
import lab0LogoLight from "../../assets/lab0-logo-light.png"

export function Footer() {
  const { dict } = useLanguage()

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <img src={gtecLogo} alt="GTEC" className="h-10 w-auto" />
            <img src={lab0LogoNavy} alt="Laboratório Zero" className="mt-3 h-8 w-auto dark:hidden" />
            <img
              src={lab0LogoLight}
              alt="Laboratório Zero"
              className="mt-3 hidden h-8 w-auto dark:block"
            />
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{dict.footer.description}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-ink">{dict.footer.navigation}</h2>
            <ul className="mt-3 space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-ink-soft transition-colors hover:text-heading"
                  >
                    {dict.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-ink">{dict.footer.contact}</h2>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              <li>contato@laboratoriozero.example</li>
              <li>IFRO — Campus Porto Velho Zona Norte</li>
              <li>
                <Link to="/sobre#localizacao" className="hover:text-heading">
                  {dict.footer.viewLocation}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-ink-soft">
          <span>
            © {new Date().getFullYear()} {dict.footer.copyright}
          </span>
          <Link to="/privacidade" className="hover:text-heading">
            {dict.footer.privacyPolicy}
          </Link>
        </div>
      </div>
    </footer>
  )
}
