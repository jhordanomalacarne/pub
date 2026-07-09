import { Link } from "react-router-dom"
import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"
import { resetConsent } from "../lib/cookieConsent"

export function PrivacyPolicy() {
  return (
    <>
      <PageHero
        eyebrow="Privacidade"
        title="Política de Privacidade"
        description="Como o site do Laboratório Zero trata dados de navegação e preferências, em conformidade com a Lei Geral de Proteção de Dados (LGPD)."
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-serif text-2xl font-semibold text-heading">
          Quais dados coletamos
        </h2>
        <div className="mt-6 space-y-4">
          <Card>
            <h3 className="font-semibold text-heading">Preferência de tema (claro/escuro)</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Guardada localmente no seu navegador (armazenamento local),
              somente após seu consentimento. Não é enviada aos nossos
              servidores nem compartilhada com terceiros.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-heading">Assistente virtual</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Ao utilizar o assistente de IA do site, as mensagens que você
              digitar são enviadas ao serviço de assistente configurado pelo
              laboratório, apenas para gerar uma resposta. O histórico da
              conversa não é armazenado por este site — existe somente
              durante a sua visita e é apagado ao atualizar a página.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-heading">Cookies e rastreamento</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Não utilizamos cookies de rastreamento, publicidade ou
              ferramentas de análise de navegação (analytics) neste site.
            </p>
          </Card>
        </div>

        <h2 className="mt-12 font-serif text-2xl font-semibold text-heading">
          Base legal e consentimento
        </h2>
        <p className="mt-4 text-ink-soft leading-relaxed">
          O armazenamento da preferência de tema só ocorre mediante o seu
          consentimento, conforme o aviso exibido na primeira visita ao site
          (Art. 7º, I, da LGPD). O envio de mensagens ao assistente virtual
          ocorre apenas quando você decide utilizá-lo, para a execução do
          serviço solicitado (Art. 7º, V, da LGPD).
        </p>

        <h2 className="mt-12 font-serif text-2xl font-semibold text-heading">
          Retenção e exclusão
        </h2>
        <p className="mt-4 text-ink-soft leading-relaxed">
          A preferência de tema permanece armazenada até que você a apague
          pelo próprio navegador ou revogue o consentimento (veja o botão
          abaixo). As mensagens do assistente não são retidas por este site.
        </p>

        <h2 className="mt-12 font-serif text-2xl font-semibold text-heading">
          Compartilhamento com terceiros
        </h2>
        <p className="mt-4 text-ink-soft leading-relaxed">
          Somente o serviço de assistente virtual configurado pelo
          laboratório recebe o conteúdo das mensagens quando você opta por
          utilizá-lo. Nenhum outro terceiro recebe dados a partir deste
          site.
        </p>

        <h2 className="mt-12 font-serif text-2xl font-semibold text-heading">
          Seus direitos
        </h2>
        <p className="mt-4 text-ink-soft leading-relaxed">
          Nos termos do Art. 18 da LGPD, você pode solicitar a confirmação
          da existência de tratamento, acesso, correção, anonimização ou
          eliminação de dados desnecessários, portabilidade, informação
          sobre compartilhamento e revogação do consentimento. Para exercer
          esses direitos, entre em contato pelo e-mail informado na{" "}
          <Link to="/sobre#contato" className="font-semibold text-heading hover:underline">
            página de Contato
          </Link>
          .
        </p>

        <h2 className="mt-12 font-serif text-2xl font-semibold text-heading">
          Gerenciar suas preferências
        </h2>
        <p className="mt-4 text-ink-soft leading-relaxed">
          Você pode revogar seu consentimento a qualquer momento e voltar a
          ver o aviso de cookies.
        </p>
        <button
          type="button"
          onClick={resetConsent}
          className="mt-4 rounded-md border border-border px-5 py-3 text-sm font-semibold text-heading transition-colors hover:bg-surface"
        >
          Gerenciar preferências de cookies
        </button>

        <p className="mt-12 text-xs text-ink-soft">
          Última atualização: julho de 2026.
        </p>
      </section>
    </>
  )
}
