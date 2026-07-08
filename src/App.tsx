import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/layout/Layout"
import { ScrollToTop } from "./components/ScrollToTop"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Projects } from "./pages/Projects"
import { Publications } from "./pages/Publications"
import { Partnerships } from "./pages/Partnerships"
import { Services } from "./pages/Services"
import { ServiceDetail } from "./pages/ServiceDetail"
import { Courses } from "./pages/Courses"
import { ComplementaryTraining } from "./pages/ComplementaryTraining"
import { Events } from "./pages/Events"
import { Opportunities } from "./pages/Opportunities"
import { Members } from "./pages/Members"
import { Contact } from "./pages/Contact"

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<About />} />
          <Route path="projetos" element={<Projects />} />
          <Route path="publicacoes" element={<Publications />} />
          <Route path="parcerias" element={<Partnerships />} />
          <Route path="servicos" element={<Services />} />
          <Route path="servicos/:slug" element={<ServiceDetail />} />
          <Route path="cursos" element={<Courses />} />
          <Route path="formacao-complementar" element={<ComplementaryTraining />} />
          <Route path="eventos" element={<Events />} />
          <Route path="oportunidades" element={<Opportunities />} />
          <Route path="membros" element={<Members />} />
          <Route path="contato" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
