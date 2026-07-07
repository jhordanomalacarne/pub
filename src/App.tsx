import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/layout/Layout"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Projects } from "./pages/Projects"
import { Publications } from "./pages/Publications"
import { Partnerships } from "./pages/Partnerships"
import { Courses } from "./pages/Courses"
import { Events } from "./pages/Events"
import { Members } from "./pages/Members"
import { Contact } from "./pages/Contact"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<About />} />
        <Route path="projetos" element={<Projects />} />
        <Route path="publicacoes" element={<Publications />} />
        <Route path="parcerias" element={<Partnerships />} />
        <Route path="cursos" element={<Courses />} />
        <Route path="eventos" element={<Events />} />
        <Route path="membros" element={<Members />} />
        <Route path="contato" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
