function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <header className="border-b border-slate-800">
        <div className="mx-auto max-w-4xl px-6 py-5">
          <span className="font-semibold tracking-tight">pub</span>
        </div>
      </header>

      <main className="flex-1 flex items-center">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Site em construção
          </h1>
          <p className="mt-4 text-slate-400 text-lg">
            React + Vite + Tailwind, publicado no GitHub Pages.
          </p>
        </div>
      </main>

      <footer className="border-t border-slate-800">
        <div className="mx-auto max-w-4xl px-6 py-5 text-sm text-slate-500">
          pub
        </div>
      </footer>
    </div>
  )
}

export default App
