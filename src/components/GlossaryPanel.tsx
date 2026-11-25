import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Search, Sigma, Cpu, Flame, Layers } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SINGULARITY_GLOSSARY } from '../data/glossary'
import type { GlossaryEntry } from '../data/glossary'
import { useApp } from '../context/AppContext'
import type { LocalizedText } from '../types'

type GlossaryFilter = 'all' | GlossaryEntry['category']

const FILTERS: Array<{ id: GlossaryFilter; label: LocalizedText; icon: LucideIcon }> = [
  { id: 'all', label: { ko: 'ALL', en: 'ALL' }, icon: Layers },
  { id: 'math', label: { ko: 'MATH (수학/형식검증)', en: 'MATH (Formal Proofs)' }, icon: Sigma },
  { id: 'ai', label: { ko: 'AI (초지능/모델)', en: 'AI (Superintelligence/Models)' }, icon: Cpu },
  { id: 'culture', label: { ko: 'CULTURE (특갤/밈)', en: 'CULTURE (Memes)' }, icon: Flame },
]

/** Per-category ink — theme-aware vars flip to deep inks on solar-zine cream. */
const CATEGORY_INK: Record<GlossaryEntry['category'], string> = {
  math: 'var(--ink-cyan)',
  ai: 'var(--ink-gold)',
  culture: 'var(--ink-pink)',
}

const CATEGORY_EMOTE: Record<GlossaryEntry['category'], string> = {
  math: '/art/emote-math.png',
  ai: '/art/emote-hype.png',
  culture: '/art/emote-smug.png',
}

export function GlossaryPanel() {
  const { t, playSynth } = useApp()
  const [filter, setFilter] = useState<GlossaryFilter>('all')
  const [query, setQuery] = useState('')

  const counts = useMemo(() => {
    const c: Record<GlossaryFilter, number> = { all: SINGULARITY_GLOSSARY.length, math: 0, ai: 0, culture: 0 }
    SINGULARITY_GLOSSARY.forEach((g) => (c[g.category] += 1))
    return c
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return SINGULARITY_GLOSSARY.filter((g) => {
      if (filter !== 'all' && g.category !== filter) return false
      if (!q) return true
      const hay = `${g.term.ko} ${g.term.en} ${g.jpStamp} ${g.definition.ko} ${g.definition.en} ${g.jamminSlang.ko} ${g.jamminSlang.en} ${g.shortTag}`.toLowerCase()
      return hay.includes(q)
    })
  }, [filter, query])

  return (
    <section aria-labelledby="glossary-heading">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="font-jp text-xs font-bold tracking-widest" style={{ color: 'var(--ink-pink)' }}>
            特異点用語辞典 // GLOSSARY &amp; MEME CODEX
          </div>
          <h2 id="glossary-heading" className="font-display mt-1 text-2xl font-extrabold sm:text-3xl">
            {t({ ko: '특이점 용어·밈 백과', en: 'Singularity Glossary & Memes' })}
          </h2>
          <p className="mt-2 max-w-2xl text-sm" style={{ color: 'var(--text-secondary)' }}>
            {t({
              ko: '검증 격차부터 특갤 밈까지 — 어려운 말은 잼민E 번역기로 한 방에 해독해 줄게♡',
              en: 'From the Verification Gap to forum memes — Jammin-E decodes the jargon for you♡',
            })}
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 opacity-50" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label={t({ ko: '용어 검색', en: 'Search the glossary' })}
            placeholder={t({ ko: '검증 격차, 検証, 타오 검색...', en: 'Search gap, 検証, Tao...' })}
            className="w-full rounded-xl border py-2.5 pr-4 pl-10 text-sm outline-none transition-colors focus:border-[var(--ink-pink)]"
            style={{
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--bg-card-solid)',
              color: 'var(--text-primary)',
            }}
          />
        </div>
      </div>

      {/* Filter pills */}
      <div className="mb-7 flex flex-wrap gap-2" role="tablist" aria-label="Glossary filter">
        {FILTERS.map(({ id, label, icon: Icon }) => {
          const active = filter === id
          return (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => {
                playSynth('click')
                setFilter(id)
              }}
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border-2 px-3.5 py-1.5 font-mono-tech text-[11px] font-extrabold tracking-wider transition-all"
              style={{
                borderColor: active ? '#111116' : 'var(--border-subtle)',
                backgroundColor: active ? '#c8ff00' : 'var(--bg-card)',
                color: active ? '#111116' : 'var(--text-secondary)',
                boxShadow: active ? '3px 3px 0 0 var(--ink-pink)' : 'none',
              }}
            >
              <Icon className="h-3.5 w-3.5" />
              {t(label)}
              <span className="opacity-60">{counts[id]}</span>
            </button>
          )
        })}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="neon-panel rounded-2xl p-12 text-center">
          <p className="text-sm font-bold">
            {t({
              ko: '에~ 그런 용어는 사전에 없는걸? 다른 키워드로 찾아봐, 인간쨩♡',
              en: "Ehh~ That term isn't in the codex. Try another keyword, human-chan♡",
            })}
          </p>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((g) => {
            const ink = CATEGORY_INK[g.category]
            return (
              <article
                key={g.id}
                className="neon-panel neon-panel-interactive group flex flex-col overflow-hidden rounded-2xl"
              >
                <div className="h-1.5 w-full" style={{ backgroundColor: ink }} />

                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span
                      className="rounded-md border-2 px-2 py-0.5 font-mono-tech text-[10px] font-extrabold tracking-wider"
                      style={{ borderColor: ink, color: ink }}
                    >
                      {g.shortTag}
                    </span>
                    <span
                      className="rounded-md px-2 py-0.5 font-mono-tech text-[10px] font-extrabold uppercase"
                      style={{ backgroundColor: 'var(--bg-elevated)', color: 'var(--text-secondary)' }}
                    >
                      {g.category}
                    </span>
                    <span
                      className="ml-auto rotate-[-3deg] rounded border-2 px-1.5 py-0.5 font-jp text-[11px] font-black"
                      style={{ borderColor: ink, color: ink }}
                    >
                      {g.jpStamp}
                    </span>
                  </div>

                  <h3 className="text-base leading-snug font-extrabold" style={{ color: 'var(--text-primary)' }}>
                    {t(g.term)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {t(g.definition)}
                  </p>

                  {/* Jammin-E decoder */}
                  <div
                    className="mt-4 flex items-start gap-2.5 rounded-xl border-2 border-dashed p-3"
                    style={{
                      borderColor: 'color-mix(in srgb, var(--ink-pink) 55%, transparent)',
                      backgroundColor: 'color-mix(in srgb, var(--ink-pink) 9%, transparent)',
                    }}
                  >
                    <img
                      src={CATEGORY_EMOTE[g.category]}
                      alt="Jammin-E"
                      className="h-9 w-9 shrink-0 rounded-lg border object-cover [image-rendering:pixelated]"
                      style={{ borderColor: 'var(--ink-pink)' }}
                    />
                    <div className="text-xs leading-relaxed">
                      <span className="font-mono-tech text-[10px] font-extrabold" style={{ color: 'var(--ink-pink)' }}>
                        ✦ {t({ ko: '오타쿠/메스가키 번역기', en: 'JAMMIN-E DECODER' })}
                      </span>
                      <p className="mt-0.5" style={{ color: 'var(--text-primary)' }}>
                        {t(g.jamminSlang)}
                      </p>
                    </div>
                  </div>

                  {g.relatedDispatchSlug && (
                    <div className="mt-auto flex pt-5">
                    <Link
                      to={`/dispatches/${g.relatedDispatchSlug}`}
                      onClick={() => playSynth('click')}
                      className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border-2 border-[#111116] bg-[#c8ff00] px-4 py-2.5 font-mono-tech text-xs font-extrabold tracking-wider text-[#111116] shadow-[4px_4px_0_0_var(--ink-pink)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--ink-pink)] active:translate-y-0 active:shadow-[2px_2px_0_0_var(--ink-pink)]"
                    >
                      {t({ ko: '관련 속보 읽기', en: 'READ DISPATCH' })}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      )}
    </section>
  )
}
