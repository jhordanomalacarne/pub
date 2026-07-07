import { useState } from "react"
import type { FormEvent } from "react"

type Message = {
  role: "user" | "assistant"
  content: string
}

const ENDPOINT = import.meta.env.VITE_CHAT_ENDPOINT as string | undefined

async function sendMessage(history: Message[]): Promise<string> {
  if (!ENDPOINT) {
    return "Assistente ainda não conectado. Configure VITE_CHAT_ENDPOINT com a URL do seu serviço externo."
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages: history }),
  })

  if (!res.ok) {
    throw new Error(`Falha na resposta do assistente (HTTP ${res.status})`)
  }

  const data = (await res.json()) as { reply?: string }
  return data.reply ?? "Não recebi uma resposta válida do assistente."
}

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Olá! Posso ajudar com dúvidas sobre o curso de Tecnologia em Redes de Computadores e sobre o Laboratório Zero.",
    },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const text = input.trim()
    if (!text || loading) return

    const nextMessages: Message[] = [...messages, { role: "user", content: text }]
    setMessages(nextMessages)
    setInput("")
    setLoading(true)

    try {
      const reply = await sendMessage(nextMessages)
      setMessages((prev) => [...prev, { role: "assistant", content: reply }])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Ocorreu um erro ao falar com o assistente. Tente novamente em instantes.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex h-[28rem] w-[22rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-lg border border-border bg-paper shadow-xl">
          <div className="flex items-center justify-between border-b border-border bg-navy-950 px-4 py-3">
            <span className="font-serif text-sm font-semibold text-white">
              Assistente do Laboratório Zero
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar chat"
              className="text-slate-300 transition-colors hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                  m.role === "user"
                    ? "ml-auto bg-navy-900 text-white"
                    : "bg-surface text-ink"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="max-w-[85%] rounded-lg bg-surface px-3 py-2 text-sm text-ink-soft">
                Digitando…
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2 border-t border-border p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua pergunta…"
              className="flex-1 rounded-md border border-border px-3 py-2 text-sm outline-none focus:border-navy-700"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="rounded-md bg-gold-500 px-3 py-2 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-600 disabled:opacity-50"
            >
              Enviar
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fechar chat" : "Abrir chat com o assistente"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-white shadow-lg transition-colors hover:bg-navy-800"
      >
        {open ? (
          <span className="text-xl">✕</span>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 5h16v11H8l-4 4V5Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  )
}
