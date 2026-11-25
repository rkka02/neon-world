import { useMemo, useState } from 'react'
import { ArrowUpRight, Search, FileText, GitBranch, PenLine, Wrench, Layers } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { REFERENCE_VAULT } from '../data/referenceVault'
import type { VaultResource } from '../data/referenceVault'
import { useApp } from '../context/AppContext'

type VaultFilter = 'all' | VaultResource['kind']

const FILTERS: Array<{ id: VaultFilter; label: string; icon: LucideIcon }> = [
  { id: 'all', label: 'ALL', icon: Layers },
  { id: 'paper', label: 'PAPER', icon: FileText },
  { id: 'repo', label: 'REPO', icon: GitBranch },
  { id: 'blog', label: 'BLOG', icon: PenLine },
  { id: 'tool', label: 'TOOL', icon: Wrench },
]

/** Per-kind ink — theme-aware vars flip to deep inks on solar-zine cream. */
const KIND_INK: Record<VaultResource['kind'], string> = {
  paper: 'var(--ink-cyan)',
  repo: 'var(--ink-gold)',
  blog: 'var(--ink-pink)',
  tool: 'var(--ink-cyan)',
}

const KIND_EMOTE: Record<VaultResource['kind'], string> = {
  paper: '/art/emote-math.png',
  repo: '/art/emote-hype.png',
  blog: '/art/emote-smug.png',
  tool: '/art/emote-wink.png',
}

export function ReferenceVaultPanel() {
  const { t, playSynth } = useApp()
  const [filter, setFilter] = useState<VaultFilter>('all')
  const [query, setQuery] = useState('')

  const counts = useMemo(() => {
    const c: Record<VaultFilter, number> = { all: REFERENCE_VAULT.length, paper: 0, repo: 0, blog: 0, tool: 0 }
    REFERENCE_VAULT.forEach((r) => (c[r.kind] += 1))
    return c
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return [...REFERENCE_VAULT]
      .filter((r) => {
        if (filter !== 'all' && r.kind !== filter) return false
        if (!q) return true
        const hay = `${r.title.ko} ${r.title.en} ${r.summary.ko} ${r.summary.en} ${r.authorOrOrg} ${r.tag} ${r.kind}`.toLowerCase()
        return hay.includes(q)
      })
      .sort((a, b) => b.date.localeCompare(a.date))
  }, [filter, query])

  return (
    <section aria-labelledby="vault-heading">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="font-jp text-xs font-bold tracking-widest" style={{ color: 'var(--ink-gold)' }}>
            特異点必読書庫 // PRIMARY SOURCE VAULT
          </div>
          <h2 id="vault-heading" className="font-display mt-1 text-2xl font-extrabold sm:text-3xl">
            {t({ ko: '특이점 필독 자료실', en: 'Singularity Reading Vault' })}
          </h2>
          <p className="mt-2 max-w-2xl text-sm" style={{ color: 'var(--text-secondary)' }}>
            {t({
              ko: '요약 말고 원전으로 직행! 논문·레포·블로그·툴 — 잼민E가 직접 골라 둔 1차 출처 컬렉션이야♡',
              en: 'Skip the hot takes, go straight to the source — papers, repos, blogs & tools hand-picked by Jammin-E♡',
            })}
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 opacity-50" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label={t({ ko: '자료실 검색', en: 'Search the vault' })}
            placeholder={t({ ko: 'Lean, nanoda, Mathlib 검색...', en: 'Search Lean, nanoda, Mathlib...' })}
            className="w-full rounded-xl border py-2.5 pr-4 pl-10 text-sm outline-none transition-colors focus:border-[var(--ink-cyan)]"
            style={{
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--bg-card-solid)',
              color: 'var(--text-primary)',
            }}
          />
        </div>
      </div>

      {/* Filter pills */}
      <div className="mb-7 flex flex-wrap gap-2" role="tablist" aria-label="Vault filter">
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
              {label}
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
              ko: '에~ 그런 자료는 서고에 없는걸? 다른 키워드로 찾아봐, 인간쨩♡',
              en: 'Ehh~ Nothing on the shelves for that. Try another keyword, human-chan♡',
            })}
          </p>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((r) => {
            const ink = KIND_INK[r.kind]
            return (
              <article
                key={r.id}
                className="neon-panel neon-panel-interactive group flex flex-col overflow-hidden rounded-2xl"
              >
                {/* accent strip */}
                <div className="h-1.5 w-full" style={{ backgroundColor: ink }} />

                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span
                      className="rounded-md border-2 px-2 py-0.5 font-mono-tech text-[10px] font-extrabold tracking-wider"
                      style={{ borderColor: ink, color: ink }}
                    >
                      {r.tag}
                    </span>
                    <span
                      className="rounded-md px-2 py-0.5 font-mono-tech text-[10px] font-extrabold uppercase"
                      style={{ backgroundColor: 'var(--bg-elevated)', color: 'var(--text-secondary)' }}
                    >
                      {r.kind}
                    </span>
                    <span className="ml-auto font-mono-tech text-[11px]" style={{ color: 'var(--text-muted)' }}>
                      {r.date}
                    </span>
                  </div>

                  <div className="font-mono-tech text-[11px] font-bold" style={{ color: 'var(--text-muted)' }}>
                    {r.authorOrOrg}
                  </div>
                  <h3 className="mt-1 text-base leading-snug font-extrabold" style={{ color: 'var(--text-primary)' }}>
                    {t(r.title)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {t(r.summary)}
                  </p>

                  {/* Jammin-E recommendation strip */}
                  <div
                    className="mt-4 flex items-start gap-2.5 rounded-xl border p-3"
                    style={{
                      borderColor: 'color-mix(in srgb, var(--ink-pink) 40%, transparent)',
                      backgroundColor: 'color-mix(in srgb, var(--ink-pink) 8%, transparent)',
                    }}
                  >
                    <img
                      src={KIND_EMOTE[r.kind]}
                      alt="Jammin-E"
                      className="h-9 w-9 shrink-0 rounded-lg border object-cover [image-rendering:pixelated]"
                      style={{ borderColor: 'var(--ink-pink)' }}
                    />
                    <div className="text-xs leading-relaxed">
                      <span className="font-mono-tech text-[10px] font-extrabold" style={{ color: 'var(--ink-pink)' }}>
                        ✦ {t({ ko: '잼민E 추천 한마디', en: "JAMMIN-E'S PICK" })}
                      </span>
                      <p className="mt-0.5" style={{ color: 'var(--text-primary)' }}>
                        {t(r.jamminNote)}
                      </p>
                    </div>
                  </div>

                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playSynth('click')}
                    className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-xl border-2 border-[#111116] bg-[#c8ff00] px-4 py-2.5 font-mono-tech text-xs font-extrabold tracking-wider text-[#111116] shadow-[4px_4px_0_0_var(--ink-pink)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--ink-pink)] active:translate-y-0 active:shadow-[2px_2px_0_0_var(--ink-pink)]"
                  >
                    OPEN PRIMARY SOURCE
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      )}
    </section>
  )
}
