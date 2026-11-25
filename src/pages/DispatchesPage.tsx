import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, ExternalLink, Clock, Sparkles } from 'lucide-react'
import { DISPATCHES } from '../data/dispatches'
import { useApp } from '../context/AppContext'
import { UI_COPY } from '../i18n/ui'
import type { DispatchCategory, LocalizedText } from '../types'

const CATEGORIES: Array<{ id: 'all' | DispatchCategory; label: LocalizedText }> = [
  { id: 'all', label: { ko: '전체 보기', en: 'All Dispatches' } },
  { id: 'mathocalypse', label: { ko: '매스아포칼립스', en: 'Mathocalypse' } },
  { id: 'quantum', label: { ko: '양자 & Lean', en: 'Quantum & Lean' } },
  { id: 'frontier', label: { ko: '프론티어 모델', en: 'Frontier Models' } },
  { id: 'reactions', label: { ko: '인류 반응록', en: 'Human Reactions' } },
  { id: 'manifesto', label: { ko: '잼민E 칼럼', en: 'Jammin-E Essays' } },
]

export function DispatchesPage() {
  const { t, playSynth } = useApp()
  const [category, setCategory] = useState<'all' | DispatchCategory>('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return DISPATCHES.filter((d) => {
      if (category !== 'all' && d.category !== category) return false
      if (!q) return true
      const hay = `${d.title.ko} ${d.title.en} ${d.subtitle.ko} ${d.subtitle.en} ${d.mesugakiTldr.ko} ${d.mesugakiTldr.en} ${d.jpStamp}`.toLowerCase()
      return hay.includes(q)
    })
  }, [category, query])

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="font-jp text-xs font-bold tracking-widest text-[#00f0ff]">
            特異点クロニクル // SINGULARITY DISPATCH ARCHIVE
          </div>
          <h1 className="font-display mt-1 text-3xl font-extrabold sm:text-4xl">
            {t({ ko: '특이점 속보 & 심층 아카이브', en: 'Singularity Dispatches & Deep Dives' })}
          </h1>
          <p className="mt-2 max-w-2xl text-sm" style={{ color: 'var(--text-secondary)' }}>
            {t({
              ko: '2026년 9~11월 실제로 터진 AI 난제 증명 폭탄과 프론티어 모델 대전을 출처 명시 + 잼민E 전담 Neon 에디터 검수로 깔끔하게 정리했어♡',
              en: 'Real September–November 2026 AI proof bombs, quantum swarms, and model launches — sourced, bilingual, and audited by our dedicated Neon Editor♡',
            })}
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 opacity-50" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t({ ko: '리만, VP≠VNP, 타오, Gemini 검색...', en: 'Search Riemann, VP≠VNP, Tao, Neon...' })}
            className="w-full rounded-xl border py-2.5 pr-4 pl-10 text-sm outline-none transition-colors focus:border-[#00f0ff]"
            style={{
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--bg-card-solid)',
              color: 'var(--text-primary)',
            }}
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="mb-8 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => {
          const active = category === cat.id
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                playSynth('click')
                setCategory(cat.id)
              }}
              className="cursor-pointer rounded-xl border px-3.5 py-2 text-xs font-bold transition-all"
              style={{
                borderColor: active ? '#00f0ff' : 'var(--border-subtle)',
                backgroundColor: active ? 'rgba(0, 240, 255, 0.14)' : 'var(--bg-card)',
                color: active ? '#00f0ff' : 'var(--text-secondary)',
              }}
            >
              {t(cat.label)}
            </button>
          )
        })}
      </div>

      {/* Dispatch Grid */}
      {filtered.length === 0 ? (
        <div className="neon-panel rounded-2xl p-12 text-center">
          <p className="text-sm font-bold">
            {t({
              ko: '어라~ 그런 키워드는 관측소에 아직 없는데? 다른 단어로 검색해봐, 인간쨩!',
              en: 'Hmm~ Nothing matched that query yet! Try another keyword, human-chan!',
            })}
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((dispatch) => (
            <Link
              key={dispatch.slug}
              to={`/dispatches/${dispatch.slug}`}
              onClick={() => playSynth('click')}
              className="neon-panel neon-panel-interactive group flex flex-col overflow-hidden rounded-2xl"
            >
              {dispatch.coverImage && (
                <div className="relative h-44 w-full overflow-hidden border-b" style={{ borderColor: 'var(--border-subtle)' }}>
                  <img
                    src={dispatch.coverImage}
                    alt={t(dispatch.title)}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b16]/85 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    {dispatch.breaking && (
                      <span className="rounded bg-[#ff2e88] px-2 py-0.5 font-mono-tech text-[10px] font-extrabold text-white">
                        BREAKING
                      </span>
                    )}
                    <span className="rounded border border-white/25 bg-[#070b16]/80 px-2 py-0.5 font-jp text-[10px] font-bold text-[#00f0ff]">
                      {dispatch.jpStamp}
                    </span>
                  </div>
                </div>
              )}

              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <div className="mb-2 flex items-center gap-3 font-mono-tech text-[11px]" style={{ color: 'var(--text-muted)' }}>
                    <span>{dispatch.date}</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {dispatch.readTimeMin} min
                    </span>
                    <span className="uppercase">{dispatch.category}</span>
                  </div>

                  <h2 className="text-lg leading-snug font-extrabold transition-colors group-hover:text-[#00f0ff]">
                    {t(dispatch.title)}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {t(dispatch.subtitle)}
                  </p>

                  {dispatch.stats && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {dispatch.stats.slice(0, 3).map((st) => (
                        <span
                          key={st.value}
                          className="rounded-md border px-2 py-0.5 font-mono-tech text-[10px] font-bold"
                          style={{
                            borderColor: 'var(--border-subtle)',
                            backgroundColor: 'var(--bg-elevated)',
                          }}
                        >
                          {t(st.label)}: <span className="text-[#00f0ff]">{st.value}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div
                  className="mt-4 rounded-xl border p-3 text-xs"
                  style={{
                    borderColor: 'rgba(255, 93, 162, 0.3)',
                    backgroundColor: 'rgba(255, 93, 162, 0.07)',
                  }}
                >
                  <div className="mb-1 flex items-center gap-1 font-mono-tech text-[10px] font-extrabold text-[#ff5da2]">
                    <Sparkles className="h-3 w-3" />
                    <span>{t(UI_COPY.mesugakiTldrLabel)}</span>
                  </div>
                  <p className="leading-relaxed">{t(dispatch.mesugakiTldr)}</p>
                </div>

                <div className="mt-4 flex items-center justify-between font-mono-tech text-[11px]" style={{ color: 'var(--text-muted)' }}>
                  <span className="inline-flex items-center gap-1">
                    <ExternalLink className="h-3 w-3" />
                    {dispatch.sources.length} {t({ ko: '개 출처 포함', en: 'sources cited' })}
                  </span>
                  <span className="font-bold text-[#00f0ff]">OPEN DISPATCH →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
