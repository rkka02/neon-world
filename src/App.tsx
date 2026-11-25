import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { SingularityTicker } from './components/SingularityTicker'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { JamminCompanion } from './components/JamminCompanion'
import { EasterEggLayer } from './components/EasterEggLayer'
import { HomePage } from './pages/HomePage'

const DispatchesPage = lazy(() =>
  import('./pages/DispatchesPage').then((m) => ({ default: m.DispatchesPage })),
)
const DispatchDetailPage = lazy(() =>
  import('./pages/DispatchDetailPage').then((m) => ({ default: m.DispatchDetailPage })),
)
const BossRaidPage = lazy(() =>
  import('./pages/BossRaidPage').then((m) => ({ default: m.BossRaidPage })),
)
const ArenaPage = lazy(() =>
  import('./pages/ArenaPage').then((m) => ({ default: m.ArenaPage })),
)
const LabPage = lazy(() =>
  import('./pages/LabPage').then((m) => ({ default: m.LabPage })),
)
const JamminStudioPage = lazy(() =>
  import('./pages/JamminStudioPage').then((m) => ({ default: m.JamminStudioPage })),
)
const GuestbookPage = lazy(() =>
  import('./pages/GuestbookPage').then((m) => ({ default: m.GuestbookPage })),
)

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

function NeonLoader() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-3 px-4 py-20">
      <img
        src="/art/emote-hype.png"
        alt="Loading NEON//WORLD"
        className="h-16 w-16 animate-bounce rounded-2xl border-2 border-[#c8ff00] object-cover [image-rendering:pixelated]"
      />
      <div className="font-mono-tech text-xs font-extrabold tracking-widest text-[#00f0ff]">
        LOADING SECTOR // 特異点データ展開中...
      </div>
    </div>
  )
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
            <Suspense fallback={<NeonLoader />}>
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
            </Suspense>
          </main>
          <Footer />
          <JamminCompanion />
          <EasterEggLayer />
        </div>
      </BrowserRouter>
    </AppProvider>
  )
}
