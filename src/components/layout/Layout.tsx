import { useState } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { CookieConsent } from "./CookieConsent"
import { ChatWidget } from "../chat/ChatWidget"

export function Layout() {
  const [bannerVisible, setBannerVisible] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ChatWidget raised={bannerVisible} />
      <CookieConsent onVisibleChange={setBannerVisible} />
    </div>
  )
}
