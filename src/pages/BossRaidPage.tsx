import { useState } from 'react'
import { ExternalLink, ShieldAlert, Skull, Sparkles, Swords, X, CheckCircle2 } from 'lucide-react'
import { RAID_BOSSES } from '../data/raidBosses'
import { useApp } from '../context/AppContext'
import { PrismShard } from '../components/EasterEggLayer'
import type { BossStatus, RaidBoss } from '../types'

const STATUS_BADGE: Record<BossStatus, { bg: string; color: string }> = {
  'cleared-human': { bg: 'rgba(52, 168, 83, 0.16)', color: '#34a853' },
  'lean-verified': { bg: 'rgba(0, 240, 255, 0.16)', color: '#00f0ff' },
  'phase-one': { bg: 'rgba(255, 210, 76, 0.16)', color: '#ffd24c' },
  disputed: { bg: 'rgba(234, 67, 53, 0.16)', color: '#ff6b6b' },
  'chip-damage': { bg: 'rgba(66, 133, 244, 0.16)', color: '#6ca0ff' },
  'final-boss': { bg: 'rgba(255, 46, 136, 0.18)', color: '#ff5da2' },
}

export function BossRaidPage() {
  const { t, playSynth, triggerJammin } = useApp()
  const [filter, setFilter] = useState<'all' | 'millennium' | 'legendary'>('all')
  const [selected, setSelected] = useState<RaidBoss | null>(null)

  const list = RAID_BOSSES.filter((b) => filter === 'all' || b.category === filter)

  const openBoss = (boss: RaidBoss) => {
    playSynth('spark')
    setSelected(boss)
    triggerJammin(boss.status === 'final-boss' ? 'hype' : 'smug', boss.jamminTaunt)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* Banner */}
      <section className="neon-panel relative overflow-hidden rounded-3xl">
        <div className="relative min-h-[260px] w-full overflow-hidden">
          <img
            src="/art/banner-mathocalypse.png"
            alt="Millennium Boss Raid"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(95deg, rgba(7,11,22,0.95) 0%, rgba(7,11,22,0.75) 55%, rgba(7,11,22,0.3) 100%)',
            }}
          />
          <div className="relative z-10 p-6 sm:p-10 lg:max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ff5da2]/50 bg-[#0b132b]/85 px-3 py-1 font-mono-tech text-[11px] font-bold text-[#ff5da2]">
              <Swords className="h-3.5 w-3.5" />
              <span>MILLENNIUM PRIZE & EX CONJECTURE RAID BOARD</span>
              <PrismShard id="shard-boss" />
            </div>
            <h1 className="font-display mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              {t({ ko: '밀레니엄 난제 레이드 현황판', en: 'Millennium Prize Boss Raid Board' })}
            </h1>
            <p className="mt-2.5 text-sm leading-relaxed text-[#d7e0f8]">
              {t({
                ko: '클레이 수학연구소 7대 밀레니엄 난제 + 전설 EX 보스들의 실시간 HP와 인간 해독률을 RPG 레이드 보드로 시각화했어! 보스를 클릭하면 공격 로그와 출처를 볼 수 있어♡',
                en: 'Tracking all 7 Clay Millennium Prize Problems + legendary EX bosses as an anime RPG raid board — click any boss for attack logs, Lean status, and verified citations♡',
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: { ko: '전체 보스 (9)', en: 'All Bosses (9)' } },
            { id: 'millennium', label: { ko: '7대 밀레니엄 난제', en: '7 Millennium Prizes' } },
            { id: 'legendary', label: { ko: '전설 EX 보스 (VP≠VNP · FLT)', en: 'EX Bosses (VP≠VNP · FLT)' } },
          ].map((tab) => {
            const active = filter === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  playSynth('click')
                  setFilter(tab.id as 'all' | 'millennium' | 'legendary')
                }}
                className="cursor-pointer rounded-xl border px-3.5 py-2 text-xs font-bold transition-all"
                style={{
                  borderColor: active ? '#ff5da2' : 'var(--border-subtle)',
                  backgroundColor: active ? 'rgba(255, 93, 162, 0.14)' : 'var(--bg-card)',
                  color: active ? '#ff5da2' : 'var(--text-secondary)',
                }}
              >
                {t(tab.label)}
              </button>
            )
          })}
        </div>

        <div className="font-mono-tech text-[11px]" style={{ color: 'var(--text-muted)' }}>
          {t({
            ko: '※ HP = 기계검증 + 인간 동료심사 완결까지 남은 실드 추정치',
            en: '※ HP = combined shield remaining across formal verification & human peer consensus',
          })}
        </div>
      </div>

      {/* Boss Grid */}
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {list.map((boss) => {
          const badge = STATUS_BADGE[boss.status]
          return (
            <button
              key={boss.id}
              type="button"
              onClick={() => openBoss(boss)}
              className="neon-panel neon-panel-interactive flex cursor-pointer flex-col justify-between rounded-2xl p-5 text-left"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <span className="font-jp text-[10px] font-bold opacity-65">{boss.jpTitle}</span>
                  <span
                    className="rounded-md px-2 py-0.5 font-mono-tech text-[10px] font-extrabold"
                    style={{ backgroundColor: badge.bg, color: badge.color }}
                  >
                    {boss.hpRemaining === 0 ? 'CLEARED' : `HP ${boss.hpRemaining}%`}
                  </span>
                </div>

                <h2 className="mt-1.5 text-lg font-extrabold">{t(boss.name)}</h2>

                <div
                  className="mt-2 inline-flex items-center gap-1 rounded-md px-2 py-0.5 font-mono-tech text-[10px] font-bold"
                  style={{ backgroundColor: badge.bg, color: badge.color }}
                >
                  {boss.status === 'final-boss' ? (
                    <Skull className="h-3 w-3" />
                  ) : boss.hpRemaining === 0 ? (
                    <CheckCircle2 className="h-3 w-3" />
                  ) : (
                    <ShieldAlert className="h-3 w-3" />
                  )}
                  <span>{t(boss.statusLabel)}</span>
                </div>

                {/* Boss HP Bar */}
                <div className="mt-4">
                  <div className="flex justify-between font-mono-tech text-[10px]" style={{ color: 'var(--text-muted)' }}>
                    <span>BOSS HP</span>
                    <span>{boss.hpRemaining} / 100</span>
                  </div>
                  <div className="mt-1 h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${boss.hpRemaining}%`,
                        background:
                          boss.hpRemaining === 0
                            ? '#34a853'
                            : boss.status === 'final-boss'
                              ? 'linear-gradient(90deg, #ff2e88, #8b5cf6)'
                              : boss.hpRemaining <= 20
                                ? 'linear-gradient(90deg, #ffd24c, #ff2e88)'
                                : 'linear-gradient(90deg, #00f0ff, #4285f4)',
                      }}
                    />
                  </div>
                </div>

                {/* Human Digestion Bar */}
                <div className="mt-3">
                  <div className="flex justify-between font-mono-tech text-[10px]" style={{ color: 'var(--text-muted)' }}>
                    <span>{t({ ko: '인간 이해도 (Digestion)', en: 'Human Digestion' })}</span>
                    <span>{boss.humanDigestionPct}%</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-[#34a853]"
                      style={{ width: `${boss.humanDigestionPct}%` }}
                    />
                  </div>
                </div>

                <p className="mt-3 line-clamp-3 text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {t(boss.summary)}
                </p>
              </div>

              <div
                className="mt-4 flex items-center justify-between border-t pt-3 font-mono-tech text-[11px]"
                style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}
              >
                <span className="truncate pr-2">{boss.leadAttacker}</span>
                <span className="shrink-0 font-bold text-[#00f0ff]">DOSSIER →</span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Boss Detail Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="neon-panel max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-6 sm:p-8"
            style={{ backgroundColor: 'var(--bg-card-solid)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-jp text-xs font-bold text-[#ff5da2]">{selected.jpTitle}</div>
                <h2 className="font-display mt-1 text-2xl font-extrabold">{t(selected.name)}</h2>
                <div className="mt-1 font-mono-tech text-xs" style={{ color: 'var(--text-muted)' }}>
                  PROPOSED {selected.yearProposed} · {selected.prizeUsd}
                  {selected.leanLines ? ` · ${selected.leanLines}` : ''}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="cursor-pointer rounded-lg border p-1.5"
                style={{ borderColor: 'var(--border-subtle)' }}
                aria-label="Close boss dossier"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-4 text-sm leading-7" style={{ color: 'var(--text-primary)' }}>
              {t(selected.summary)}
            </p>

            {/* Jammin-E Taunt */}
            <div
              className="mt-5 flex items-start gap-3 rounded-2xl border p-4"
              style={{
                borderColor: 'rgba(255, 93, 162, 0.4)',
                backgroundColor: 'rgba(255, 93, 162, 0.08)',
              }}
            >
              <img
                src="/art/emote-wink.png"
                alt="Jammin-E"
                className="h-14 w-14 shrink-0 rounded-xl border border-[#ff5da2]/50 object-cover [image-rendering:pixelated]"
              />
              <div>
                <div className="flex items-center gap-1 font-mono-tech text-[11px] font-extrabold text-[#ff5da2]">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>JAMMIN-E RAID COMMENTARY</span>
                </div>
                <p className="mt-1 text-sm leading-relaxed">{t(selected.jamminTaunt)}</p>
              </div>
            </div>

            {/* Attack Timeline */}
            <div className="mt-6">
              <div className="font-mono-tech text-xs font-extrabold tracking-wider text-[#00f0ff] uppercase">
                RAID ATTACK LOG
              </div>
              <div className="mt-3 space-y-2.5">
                {selected.attackLog.map((entry, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border p-3.5 text-xs leading-relaxed"
                    style={{
                      borderColor: 'var(--border-subtle)',
                      backgroundColor: 'var(--bg-elevated)',
                    }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono-tech font-bold">
                      <span className="text-[#ffd24c]">{entry.actor}</span>
                      <span style={{ color: 'var(--text-muted)' }}>{entry.date}</span>
                    </div>
                    <p className="mt-1.5" style={{ color: 'var(--text-primary)' }}>
                      {t(entry.event)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Citations */}
            <div className="mt-6 border-t pt-4" style={{ borderColor: 'var(--border-subtle)' }}>
              <div className="font-mono-tech text-[11px] font-bold text-[#34a853]">VERIFIED SOURCES</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {selected.sources.map((src, i) => (
                  <a
                    key={i}
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-mono-tech text-xs font-bold hover:border-[#00f0ff] hover:text-[#00f0ff]"
                    style={{ borderColor: 'var(--border-subtle)' }}
                  >
                    <span>{src.outlet}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
