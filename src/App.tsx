import { Navigate, Route, Routes } from "react-router-dom"
import { Layout } from "./components/layout/Layout"
import { ScrollToTop } from "./components/ScrollToTop"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Projects } from "./pages/Projects"
import { Publications } from "./pages/Publications"
import { Statistics } from "./pages/Statistics"
import { Partnerships } from "./pages/Partnerships"
import { PartnershipDetail } from "./pages/PartnershipDetail"
import { PartnerDetail } from "./pages/PartnerDetail"
import { Services } from "./pages/Services"
import { ServiceDetail } from "./pages/ServiceDetail"
import { ServiceStatus } from "./pages/ServiceStatus"
import { ServiceAudienceRequirements } from "./pages/ServiceAudienceRequirements"
import { Courses } from "./pages/Courses"
import { ComplementaryTraining } from "./pages/ComplementaryTraining"
import { Events } from "./pages/Events"
import { Opportunities } from "./pages/Opportunities"
import { Members } from "./pages/Members"
import { PrivacyPolicy } from "./pages/PrivacyPolicy"

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
          <Route path="estatisticas" element={<Statistics />} />
          <Route path="parcerias" element={<Partnerships />} />
          <Route path="parcerias/:slug" element={<PartnershipDetail />} />
          <Route path="parcerias/:categorySlug/:partnerSlug" element={<PartnerDetail />} />
          <Route path="servicos" element={<Services />} />
          <Route path="servicos/requisitos/:audience" element={<ServiceAudienceRequirements />} />
          <Route path="servicos/:slug" element={<ServiceDetail />} />
          <Route path="status" element={<ServiceStatus />} />
          <Route path="cursos" element={<Courses />} />
          <Route path="formacao-complementar" element={<ComplementaryTraining />} />
          <Route path="eventos" element={<Events />} />
          <Route path="oportunidades" element={<Opportunities />} />
          <Route path="membros" element={<Members />} />
          <Route path="privacidade" element={<PrivacyPolicy />} />
          <Route path="contato" element={<Navigate to="/sobre#contato" replace />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
