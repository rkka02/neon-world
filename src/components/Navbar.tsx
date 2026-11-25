import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Moon, Sparkles, Sun, Volume2, VolumeX, X, Globe } from 'lucide-react'
import { NAV_ITEMS, UI_COPY } from '../i18n/ui'
import { useApp } from '../context/AppContext'

export function Navbar() {
  const { lang, toggleLang, t, theme, toggleTheme, soundEnabled, toggleSound, playSynth } = useApp()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [badgeTaps, setBadgeTaps] = useState(0)
  const [sparkTaps, setSparkTaps] = useState(0)

  const handleBadgeSecret = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    playSynth('click')
    const next = badgeTaps + 1
    if (next >= 5) {
      setBadgeTaps(0)
      window.dispatchEvent(new CustomEvent('neon-open-terminal'))
    } else {
      setBadgeTaps(next)
    }
  }

  const handleSparkSecret = (e: React.MouseEvent) => {
    const next = sparkTaps + 1
    if (next >= 7) {
      e.preventDefault()
      setSparkTaps(0)
      window.dispatchEvent(new CustomEvent('neon-overdrive'))
    } else {
      setSparkTaps(next)
    }
  }

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur-xl"
      style={{
        backgroundColor: 'var(--bg-glass)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        {/* Brand */}
        <Link
          to="/"
          onClick={() => {
            playSynth('click')
            setMobileOpen(false)
          }}
          className="group flex items-center gap-2.5"
        >
          <div
            onClick={handleSparkSecret}
            className="relative flex h-9 w-9 items-center justify-center rounded-xl border-2 border-[#c8ff00]/70 bg-[#11131e] shadow-[3px_3px_0px_#ff2e88] transition-transform group-hover:rotate-6"
          >
            <Sparkles className="h-5 w-5 text-[#c8ff00]" />
            <span className="absolute -right-1 -bottom-1 h-2.5 w-2.5 rounded-full bg-[#ff2e88] ring-2 ring-[#090a10]" />
          </div>
          <div className="leading-tight">
            <div className="flex items-center gap-1.5">
              <span className="font-display text-lg font-extrabold tracking-tight">
                NEON<span className="prism-text">//WORLD</span>
              </span>
              <button
                type="button"
                onClick={handleBadgeSecret}
                title="Secret? Tap 5×"
                className="hidden cursor-pointer rounded border border-[#ff2e88]/50 bg-[#ff2e88]/15 px-1.5 py-0.5 font-mono-tech text-[10px] font-bold text-[#ff2e88] transition-transform hover:scale-105 sm:inline-block"
              >
                v4.NEON
              </button>
            </div>
            <p
              className="hidden font-mono-tech text-[10px] tracking-wider sm:block"
              style={{ color: 'var(--text-muted)' }}
            >
              {t(UI_COPY.brandTagline)}
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.path)
            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => playSynth('click')}
                className="group relative flex flex-col items-center rounded-lg px-3 py-1.5 transition-all"
                style={{
                  backgroundColor: active ? 'var(--badge-bg)' : 'transparent',
                  border: active ? '1px solid var(--border-strong)' : '1px solid transparent',
                }}
              >
                <span className="font-jp text-[9px] tracking-widest opacity-60">{item.jp}</span>
                <span
                  className="text-xs font-bold tracking-tight"
                  style={{ color: active ? 'var(--accent-primary)' : 'var(--text-primary)' }}
                >
                  {t(item.label)}
                </span>
              </Link>
            )
          })}
        </nav>

        {/* Controls */}
        <div className="flex shrink-0 items-center gap-1.5">
          {/* Language Toggle */}
          <button
            type="button"
            onClick={() => {
              playSynth('click')
              toggleLang()
            }}
            className="flex shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-lg border px-2.5 py-1.5 font-mono-tech text-xs font-bold transition-all hover:scale-105"
            style={{
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--bg-card-solid)',
              color: 'var(--text-primary)',
            }}
            title="Switch Language (KO / EN)"
          >
            <Globe className="h-3.5 w-3.5 text-[#00f0ff]" />
            <span>{lang === 'ko' ? '한국어' : 'EN'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={() => {
              playSynth('spark')
              toggleTheme()
            }}
            className="flex shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-lg border px-2.5 py-1.5 text-xs font-bold transition-all hover:scale-105"
            style={{
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--bg-card-solid)',
              color: 'var(--text-primary)',
            }}
            title="Toggle Club Night / Lookbook Cream"
          >
            {theme === 'prism-night' ? (
              <>
                <Moon className="h-3.5 w-3.5 text-[#ffd24c]" />
                <span className="hidden xl:inline">{t(UI_COPY.themeNight)}</span>
              </>
            ) : (
              <>
                <Sun className="h-3.5 w-3.5 text-[#ea4335]" />
                <span className="hidden xl:inline">{t(UI_COPY.themeSolar)}</span>
              </>
            )}
          </button>

          {/* Synth FX Toggle */}
          <button
            type="button"
            onClick={toggleSound}
            className="flex cursor-pointer items-center justify-center rounded-lg border p-1.5 transition-all hover:scale-105"
            style={{
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--bg-card-solid)',
              color: soundEnabled ? 'var(--accent-primary)' : 'var(--text-muted)',
            }}
            aria-label="Toggle synth audio feedback"
            title={soundEnabled ? 'SFX ON' : 'SFX OFF'}
          >
            {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </button>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex cursor-pointer items-center justify-center rounded-lg border p-1.5 lg:hidden"
            style={{
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--bg-card-solid)',
              color: 'var(--text-primary)',
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div
          className="border-t px-4 py-3 lg:hidden"
          style={{
            borderColor: 'var(--border-subtle)',
            backgroundColor: 'var(--bg-elevated)',
          }}
        >
          <div className="grid grid-cols-2 gap-2">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.path)
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => {
                    playSynth('click')
                    setMobileOpen(false)
                  }}
                  className="flex items-center justify-between rounded-lg border px-3 py-2 text-xs font-bold"
                  style={{
                    borderColor: active ? 'var(--border-strong)' : 'var(--border-subtle)',
                    backgroundColor: active ? 'var(--badge-bg)' : 'var(--bg-card)',
                    color: active ? 'var(--accent-primary)' : 'var(--text-primary)',
                  }}
                >
                  <span>{t(item.label)}</span>
                  <span className="font-jp text-[10px] opacity-60">{item.jp}</span>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
