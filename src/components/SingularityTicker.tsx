import { TICKER_ITEMS } from '../i18n/ui'
import { useApp } from '../context/AppContext'

export function SingularityTicker() {
  const { t } = useApp()
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div
      className="relative w-full overflow-hidden border-b select-none"
      style={{
        borderColor: 'var(--border-subtle)',
        backgroundColor: 'var(--bg-elevated)',
      }}
    >
      <div className="prism-strip h-[3px] w-full" />
      <div className="flex items-center py-1.5 text-xs">
        <div
          className="z-10 flex shrink-0 items-center gap-2 border-r px-3 py-0.5 font-mono-tech text-[11px] font-bold tracking-wider uppercase"
          style={{
            backgroundColor: 'var(--bg-elevated)',
            borderColor: 'var(--border-subtle)',
          }}
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#ff5da2]" />
          <span className="prism-text">LIVE // 2026.11</span>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <div className="animate-ticker gap-8 px-4">
            {doubled.map((item, idx) => (
              <div key={`${item.tag}-${idx}`} className="flex shrink-0 items-center gap-2.5">
                <span className={`font-mono-tech text-[11px] font-extrabold ${item.accent}`}>
                  [{item.tag}]
                </span>
                <span style={{ color: 'var(--text-secondary)' }}>{t(item.text)}</span>
                <span className="text-[10px] opacity-40">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
