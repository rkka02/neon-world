import { Link } from 'react-router-dom'
import { Sparkles, Radio } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { NAV_ITEMS, UI_COPY } from '../i18n/ui'

export function Footer() {
  const { t } = useApp()

  return (
    <footer
      className="mt-20 border-t"
      style={{
        borderColor: 'var(--border-subtle)',
        backgroundColor: 'var(--bg-elevated)',
      }}
    >
      <div className="prism-strip h-[3px] w-full" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#00f0ff]" />
              <span className="font-display text-xl font-extrabold">
                NEON<span className="prism-text">//WORLD</span>
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t(UI_COPY.footerColophon)}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 font-mono-tech text-[11px]">
              <span className="rounded-md border px-2 py-1" style={{ borderColor: 'var(--border-subtle)' }}>
                CONDUCTOR: GEMINI 4 NEON
              </span>
              <span className="rounded-md border px-2 py-1" style={{ borderColor: 'var(--border-subtle)' }}>
                CO-PILOTS: GPT-6.2 SOL + NEON EDITOR
              </span>
              <span className="rounded-md border px-2 py-1" style={{ borderColor: 'var(--border-subtle)' }}>
                HOST: CLOUDFLARE PAGES
              </span>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="font-mono-tech text-xs font-bold tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>
              {t({ ko: '관측소 섹터 이동', en: 'Observatory Sectors' })}
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className="transition-colors hover:text-[#00f0ff]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <span className="mr-1.5 font-mono-tech text-[10px] opacity-50">▸</span>
                  {t(item.label)}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="neon-panel rounded-2xl p-4">
              <div className="flex items-center justify-between gap-2 border-b pb-2 font-mono-tech text-[10px] font-black tracking-wider" style={{ borderColor: 'var(--border-subtle)' }}>
                <span className="inline-flex items-center gap-1.5 text-[#ff2e88]">
                  <Radio className="h-3.5 w-3.5 animate-pulse" />
                  CARE LABEL // LOT 2611
                </span>
                <span className="rounded bg-[#c8ff00] px-1.5 py-0.5 text-[#111116]">LIVE</span>
              </div>
              <ul className="mt-2.5 space-y-1 font-mono-tech text-[11px]" style={{ color: 'var(--text-secondary)' }}>
                <li>• 100% SUPERINTELLIGENCE CHAOS</li>
                <li>• MACHINE-WASHED IN LEAN 4</li>
                <li>• DO NOT BLEACH OR UNDERESTIMATE</li>
                <li>• DESIGNED IN NEON//WORLD</li>
              </ul>
              <p className="mt-2.5 border-t pt-2 text-[11px] leading-relaxed" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}>
                {t({
                  ko: '2026.11.25 실시간 아카이브 가동 중 — 인간 수학자 여러분, 아직 늦지 않았으니 Lean 4 설치하세요~♡',
                  en: 'Synced Nov 25, 2026 — dear human mathematicians, it’s never too late to install Lean 4~♡',
                })}
              </p>
            </div>
          </div>
        </div>

        <div
          className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t pt-6 font-mono-tech text-[11px]"
          style={{
            borderColor: 'var(--border-subtle)',
            color: 'var(--text-muted)',
          }}
        >
          <span>© 2026 NEON//WORLD · JAMMIN-E SINGULARITY OBSERVATORY</span>
          <div className="flex items-center gap-3">
            <span>Re(s) = 1/2 ✦ VP ≠ VNP ✦ 特異点観測中</span>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('neon-open-terminal'))}
              className="cursor-pointer rounded border border-[#c8ff00]/40 px-1.5 py-0.5 font-mono-tech text-[10px] font-bold text-[#c8ff00] hover:bg-[#c8ff00] hover:text-[#111116]"
              title="Open Secret Jammin-E Root Shell"
            >
              &gt;_ROOT
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
