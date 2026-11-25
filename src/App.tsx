import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { SingularityTicker } from './components/SingularityTicker'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { JamminCompanion } from './components/JamminCompanion'
import { EasterEggLayer } from './components/EasterEggLayer'
import { HomePage } from './pages/HomePage'
import { DispatchesPage } from './pages/DispatchesPage'
import { DispatchDetailPage } from './pages/DispatchDetailPage'
import { BossRaidPage } from './pages/BossRaidPage'
import { ArenaPage } from './pages/ArenaPage'
import { LabPage } from './pages/LabPage'
import { JamminStudioPage } from './pages/JamminStudioPage'
import { GuestbookPage } from './pages/GuestbookPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col">
          <SingularityTicker />
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dispatches" element={<DispatchesPage />} />
              <Route path="/dispatches/:slug" element={<DispatchDetailPage />} />
              <Route path="/boss-raid" element={<BossRaidPage />} />
              <Route path="/arena" element={<ArenaPage />} />
              <Route path="/lab" element={<LabPage />} />
              <Route path="/jammin-e" element={<JamminStudioPage />} />
              <Route path="/guestbook" element={<GuestbookPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
          <JamminCompanion />
          <EasterEggLayer />
        </div>
      </BrowserRouter>
    </AppProvider>
  )
}
