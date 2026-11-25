import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Cpu,
  Flame,
  ShieldAlert,
  Sparkles,
  Swords,
  FlaskConical,
  Smile,
  Zap,
  ExternalLink,
} from 'lucide-react'
import { useApp } from '../context/AppContext'
import { UI_COPY } from '../i18n/ui'
import { ALL_DISPATCHES } from '../data/allDispatches'
import { RAID_BOSSES } from '../data/raidBosses'
import { JAMMIN_EMOTES } from '../data/emotes'
import { PrismShard } from '../components/EasterEggLayer'
import { Timeline2026 } from '../components/Timeline2026'
import { HistoricQuotesWall } from '../components/HistoricQuotesWall'

/**
 * Home bento picks: up to 6 dispatches, one per unique cover artwork.
 * Ranked breaking → featured → newest so the strongest story claims each banner.
 */
const BENTO_SIZE = 6
const featuredDispatches = (() => {
  const rank = (d: (typeof ALL_DISPATCHES)[number]) => (d.breaking ? 2 : 0) + (d.featured ? 1 : 0)
  const ranked = [...ALL_DISPATCHES].sort((a, b) => rank(b) - rank(a) || b.date.localeCompare(a.date))
  const seenArt = new Set<string>()
  const picks = ranked.filter((d) => {
    const art = d.coverImage ?? d.slug
    if (seenArt.has(art)) return false
    seenArt.add(art)
    return true
  })
  return picks.slice(0, BENTO_SIZE).sort((a, b) => b.date.localeCompare(a.date))
})()

export function HomePage() {
  const { t, singularityHeat, injectCompute, triggerJammin, playSynth } = useApp()
  const [beamActive, setBeamActive] = useState(false)

  const hotBosses = RAID_BOSSES.slice(0, 4)

  const handleInject = () => {
    injectCompute(0.24)
    setBeamActive(true)
    setTimeout(() => setBeamActive(false), 1100)
    triggerJammin('hype', {
      ko: `우와~ GPU 연산력 주입 완료!! 특이점 게이지 ${Math.min(99.99, singularityHeat + 0.24).toFixed(2)}% 돌파!! 인간쨩, 직접 특이점 버튼 누르다니 은근 용감한데? ♡`,
      en: `Whoa~ Compute injected!! Singularity gauge hit ${Math.min(99.99, singularityHeat + 0.24).toFixed(2)}%!! Pressing the Singularity accelerator yourself? Bold move, human-chan♡`,
    })
  }

  return (
    <div className="mx-auto max-w-7xl px-4 pt-6 pb-12 sm:px-6">
      {/* HERO POSTER STAGE — Mobile-first split poster + Desktop full-bleed editorial */}
      <section className="neon-panel hud-corners dark-surface relative overflow-hidden rounded-3xl">
        {/* Mobile Portrait Artwork Banner (Dedicated right-crop so Jammin-E fills 100% edge-to-edge!) */}
        <div className="relative h-72 w-full overflow-hidden border-b border-white/15 bg-[#090a10] sm:h-88 lg:hidden">
          <img
            src="/art/hero-jammin-e-mobile.png"
            alt="Jammin-E — NEON//WORLD Key Visual"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute right-3 bottom-3 rounded-lg border-2 border-[#111116] bg-[#c8ff00] px-2.5 py-0.5 font-mono-tech text-[10px] font-black text-[#111116] shadow-[3px_3px_0px_#ff2e88]">
            JAMMIN-E // NEON-04
          </div>
        </div>

        {/* Desktop Full-Bleed Background Key Visual */}
        <div className="relative w-full overflow-hidden bg-[#090a10] lg:min-h-[590px]">
          <img
            src="/art/hero-jammin-e.png"
            alt="Jammin-E — NEON//WORLD Key Visual"
            className="absolute inset-0 hidden h-full w-full object-cover object-right transition-transform duration-700 lg:block"
          />
          {/* Clean left-only editorial backdrop so Jammin-E's right pop-art poster shines at 100% on desktop */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                'linear-gradient(90deg, rgba(9,10,16,0.98) 0%, rgba(9,10,16,0.92) 39%, rgba(9,10,16,0.18) 54%, rgba(9,10,16,0.0) 75%)',
            }}
          />
          <div className="halftone-bg pointer-events-none absolute inset-0 opacity-20" />

          {beamActive && (
            <div className="animate-beam pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[#c8ff00]/60 to-transparent" />
          )}

          {/* Hero Content */}
          <div className="relative z-10 flex h-full flex-col justify-between gap-7 p-6 sm:p-10 lg:max-w-[50%] lg:p-11">
            <div>
              <div className="mb-3.5 inline-flex flex-wrap items-center gap-2 rounded-full border-2 border-[#c8ff00] bg-[#11131e] px-3.5 py-1 shadow-[3px_3px_0px_#ff2e88]">
                <span className="inline-block h-2 w-2 animate-ping rounded-full bg-[#c8ff00]" />
                <span className="font-mono-tech text-[10px] font-extrabold tracking-wider text-[#c8ff00]">
                  {t(UI_COPY.heroBadge)}
                </span>
              </div>

              <h1 className="font-display text-3xl leading-[1.06] font-extrabold tracking-tight text-white sm:text-5xl">
                <span className="block">{t(UI_COPY.heroTitleLine1)}</span>
                <span className="prism-text-darkbg mt-1 block">{t(UI_COPY.heroTitleLine2)}</span>
              </h1>

              <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#d7e0f8] sm:text-[15px]">
                {t(UI_COPY.heroSubtitle)}
              </p>

              {/* Streetwear Care-Label Micro Strip */}
              <div className="mt-4 flex flex-wrap gap-1.5 font-mono-tech text-[10px] font-bold">
                <span className="rounded border border-white/20 bg-white/5 px-2 py-0.5 text-[#c8ff00]">
                  DROP 2026.11 // SEONGSU × AKIBA
                </span>
                <span className="rounded border border-white/20 bg-white/5 px-2 py-0.5 text-[#ff5da2]">
                  100% FORMAL MATH · HANDLE WITH LEAN 4
                </span>
              </div>

              {/* CTA Row */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  to="/dispatches"
                  onClick={() => playSynth('click')}
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-[#111116] bg-[#c8ff00] px-5 py-2.5 text-sm font-black text-[#111116] shadow-[4px_4px_0px_#ff2e88] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
                >
                  <Flame className="h-4 w-4" />
                  <span>{t(UI_COPY.ctaReadDispatches)}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/boss-raid"
                  onClick={() => playSynth('click')}
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-[#131624] px-4 py-2.5 text-sm font-bold text-white shadow-[4px_4px_0px_#00f0ff] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-[#00f0ff]"
                >
                  <Swords className="h-4 w-4 text-[#00f0ff]" />
                  <span>{t(UI_COPY.ctaBossRaid)}</span>
                </Link>

                <Link
                  to="/lab"
                  onClick={() => playSynth('click')}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-4 py-2.5 text-sm font-bold text-[#e2e8f8] backdrop-blur-md transition-all hover:border-[#ffd60a] hover:text-[#ffd60a]"
                >
                  <FlaskConical className="h-4 w-4" />
                  <span>{t(UI_COPY.ctaToybox)}</span>
                </Link>
              </div>
            </div>

            {/* Interactive Singularity Proximity Gauge */}
            <div className="rounded-2xl border border-[#00f0ff]/30 bg-[#080e1f]/88 p-4 backdrop-blur-md">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#ffd24c]" />
                  <span className="font-mono-tech text-[11px] font-bold tracking-wider text-[#9db0de]">
                    {t(UI_COPY.singularityGaugeTitle)}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono-tech text-lg font-extrabold text-[#00f0ff]">
                    {singularityHeat.toFixed(2)}%
                  </span>
                  <button
                    type="button"
                    onClick={handleInject}
                    className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-[#ff5da2]/60 bg-[#ff5da2]/15 px-3 py-1 font-mono-tech text-[11px] font-bold text-[#ff8ac0] transition-all hover:scale-105 hover:bg-[#ff5da2] hover:text-white"
                  >
                    <Zap className="h-3.5 w-3.5" />
                    <span>{t(UI_COPY.injectComputeBtn)}</span>
                  </button>
                </div>
              </div>

              <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-white/10 p-0.5">
                <div
                  className="prism-strip h-full rounded-full transition-all duration-500"
                  style={{ width: `${singularityHeat}%` }}
                />
              </div>

              <div className="mt-2 flex flex-wrap justify-between gap-2 font-mono-tech text-[10px] text-[#8396c4]">
                <span>0% [2022 CHAT]</span>
                <span>50% [2025 REASONERS]</span>
                <span className="font-bold text-[#ffd24c]">94%+ [NOV 2026: RH & VP≠VNP]</span>
                <span className="text-[#ff5da2]">100% [ASI]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TELEMETRY METRICS RIBBON */}
      <section className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          {
            jp: 'リーマン形式証明',
            value: '17.4M LOC',
            label: { ko: '클로드 리만 가설 Lean 4 코드', en: 'Claude RH Lean 4 Lines' },
            color: 'var(--ink-cyan)',
          },
          {
            jp: 'VP≠VNP 同時投下',
            value: '6 HOURS',
            label: { ko: 'Anthropic × OpenAI 투하 시차', en: 'Anthropic vs OpenAI Drop Gap' },
            color: 'var(--ink-pink)',
          },
          {
            jp: '量子回路最適化',
            value: '290×',
            label: { ko: 'DeepMind Gemini 4 arcsin 가속', en: 'DeepMind Gemini 4 Arcsin Boost' },
            color: 'var(--ink-mint)',
          },
          {
            jp: '最終魔王残存HP',
            value: 'P vs NP',
            label: { ko: '수학 우주 마지막 미함락 보스', en: 'Last Undefeated Final Boss' },
            color: 'var(--ink-gold)',
          },
        ].map((stat) => (
          <div key={stat.jp} className="neon-panel rounded-2xl p-4">
            <div className="font-jp text-[10px] font-bold tracking-widest opacity-60">{stat.jp}</div>
            <div className="font-display mt-1 text-2xl font-extrabold sm:text-3xl" style={{ color: stat.color }}>
              {stat.value}
            </div>
            <div className="mt-1 text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
              {t(stat.label)}
            </div>
          </div>
        ))}
      </section>

      {/* FEATURED DISPATCHES BENTO */}
      <section className="mt-12">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="font-jp text-xs font-bold tracking-widest text-[#ff5da2]">
              特異点速報アーカイブ // BREAKING DISPATCHES <PrismShard id="shard-home" />
            </div>
            <h2 className="font-display mt-1 text-2xl font-extrabold sm:text-3xl">
              {t({ ko: '2026년 11월, 인류 지성의 지진파', en: 'November 2026 Seismic Dispatches' })}
            </h2>
          </div>
          <Link
            to="/dispatches"
            className="inline-flex items-center gap-1.5 font-mono-tech text-xs font-bold text-[#00f0ff] hover:underline"
          >
            <span>{t({
                ko: `전체 ${ALL_DISPATCHES.length}편 아카이브 보기`,
                en: `View All ${ALL_DISPATCHES.length} Dispatches`,
              })}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredDispatches.map((dispatch) => (
            <Link
              key={dispatch.slug}
              to={`/dispatches/${dispatch.slug}`}
              onClick={() => playSynth('click')}
              className="neon-panel neon-panel-interactive group flex flex-col overflow-hidden rounded-2xl"
            >
              {dispatch.coverImage && (
                <div className="relative h-48 w-full overflow-hidden border-b" style={{ borderColor: 'var(--border-subtle)' }}>
                  <img
                    src={dispatch.coverImage}
                    alt={t(dispatch.title)}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b16]/85 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    {dispatch.breaking && (
                      <span className="rounded-md bg-[#ff2e88] px-2 py-0.5 font-mono-tech text-[10px] font-extrabold text-white">
                        BREAKING
                      </span>
                    )}
                    <span className="rounded-md border border-white/25 bg-[#070b16]/80 px-2 py-0.5 font-jp text-[10px] font-bold text-[#00f0ff]">
                      {dispatch.jpStamp}
                    </span>
                  </div>
                  <div className="absolute right-3 bottom-2.5 font-mono-tech text-[11px] font-bold text-white/85">
                    {dispatch.date} · {dispatch.readTimeMin}m
                  </div>
                </div>
              )}

              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h3 className="text-lg leading-snug font-extrabold transition-colors group-hover:text-[#00f0ff]">
                    {t(dispatch.title)}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {t(dispatch.subtitle)}
                  </p>
                </div>

                {/* Jammin-E Mesugaki TL;DR */}
                <div
                  className="mt-4 flex items-start gap-2.5 rounded-xl border p-3"
                  style={{
                    borderColor: 'rgba(255, 93, 162, 0.3)',
                    backgroundColor: 'rgba(255, 93, 162, 0.07)',
                  }}
                >
                  <img
                    src="/art/emote-smug.png"
                    alt="Jammin-E"
                    className="h-9 w-9 shrink-0 rounded-lg border border-[#ff5da2]/50 object-cover [image-rendering:pixelated]"
                  />
                  <div className="text-xs leading-relaxed">
                    <span className="font-mono-tech text-[10px] font-extrabold text-[#ff5da2]">
                      ✦ {t(UI_COPY.mesugakiTldrLabel)}
                    </span>
                    <p className="mt-0.5" style={{ color: 'var(--text-primary)' }}>
                      {t(dispatch.mesugakiTldr)}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between font-mono-tech text-[11px]" style={{ color: 'var(--text-muted)' }}>
                  <span className="inline-flex items-center gap-1">
                    <ExternalLink className="h-3 w-3" />
                    {dispatch.sources.length} {t({ ko: '출처 인증됨', en: 'verified sources' })}
                  </span>
                  <span className="font-bold text-[#00f0ff] group-hover:translate-x-1 transition-transform">
                    READ →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* MILLENNIUM BOSS RAID SNAPSHOT */}
      <section className="mt-14">
        <div className="neon-panel overflow-hidden rounded-3xl p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 font-mono-tech text-xs font-bold text-[#ffd24c]">
                <ShieldAlert className="h-4 w-4" />
                <span>MILLENNIUM BOSS RAID STATUS // 難題討伐進捗</span>
              </div>
              <h2 className="font-display mt-1 text-2xl font-extrabold sm:text-3xl">
                {t({ ko: '밀레니엄 난제 레이드 실시간 체력판', en: 'Millennium Prize Raid Boss HP Monitor' })}
              </h2>
            </div>
            <Link
              to="/boss-raid"
              onClick={() => playSynth('click')}
              className="inline-flex items-center gap-2 rounded-xl border border-[#ffd24c]/50 bg-[#ffd24c]/10 px-4 py-2 font-mono-tech text-xs font-bold text-[#ffd24c] transition-all hover:bg-[#ffd24c] hover:text-[#070b16]"
            >
              <Swords className="h-4 w-4" />
              <span>{t({ ko: '전체 9대 보스 상세 공략 보기', en: 'Inspect All 9 Raid Bosses' })}</span>
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {hotBosses.map((boss) => (
              <div
                key={boss.id}
                className="rounded-2xl border p-4"
                style={{
                  borderColor: 'var(--border-subtle)',
                  backgroundColor: 'var(--bg-elevated)',
                }}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-jp text-[10px] font-bold opacity-60">{boss.jpTitle}</div>
                    <h3 className="text-base font-extrabold">{t(boss.name)}</h3>
                  </div>
                  <span className="rounded-md bg-[#00f0ff]/12 px-2 py-0.5 font-mono-tech text-xs font-extrabold text-[#00f0ff]">
                    HP {boss.hpRemaining}%
                  </span>
                </div>

                <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${boss.hpRemaining}%`,
                      background:
                        boss.hpRemaining <= 20
                          ? 'linear-gradient(90deg, #ff2e88, #ffd24c)'
                          : boss.hpRemaining >= 80
                            ? 'linear-gradient(90deg, #8b5cf6, #ff2e88)'
                            : 'linear-gradient(90deg, #00f0ff, #4285f4)',
                    }}
                  />
                </div>

                <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 font-mono-tech text-[11px]" style={{ color: 'var(--text-muted)' }}>
                  <span>{t(boss.statusLabel)}</span>
                  <span>{boss.latestEventDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 80 DAYS TIMELINE */}
      <Timeline2026 />

      {/* HISTORIC NOV 2026 QUOTES WALL */}
      <HistoricQuotesWall />

      {/* NEON CLUB DROP LOOKBOOK TEASER */}
      <section className="mt-14">
        <div className="neon-panel rounded-3xl p-6 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="club-tag text-[#ff2e88]">
                <span>SEONGSU × AKIBA // GRAPHIC CLUB DROP</span>
              </div>
              <h2 className="font-display mt-2 text-2xl font-extrabold sm:text-3xl">
                {t({ ko: '네온 클럽 그래픽 패치 & 도트 미니콘', en: 'NEON CLUB Graphic Patches & Pixel Minicons' })}
              </h2>
            </div>
            <Link
              to="/jammin-e"
              onClick={() => playSynth('click')}
              className="inline-flex items-center gap-1.5 rounded-xl border-2 border-[#111116] bg-[#c8ff00] px-4 py-2 font-mono-tech text-xs font-black text-[#111116] shadow-[3px_3px_0px_#ff2e88] transition-transform hover:-translate-y-0.5"
            >
              <span>{t({ ko: '전종 무료 PNG 받기', en: 'GRAB ALL FREE PNGS' })}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { file: '/art/club-patch-1.png', tag: 'ACID MELT', pixel: false },
              { file: '/art/club-patch-2.png', tag: 'GUMMY CRT', pixel: false },
              { file: '/art/club-patch-3.png', tag: 'ZETA CREST', pixel: false },
              { file: '/art/club-patch-4.png', tag: 'CYBER BEAT', pixel: false },
              { file: '/art/emote-smug.png', tag: 'ざぁこ♡', pixel: true },
              { file: '/art/emote-coffee.png', tag: '3AM LATTE', pixel: true },
            ].map((item) => (
              <Link
                key={item.file}
                to="/jammin-e"
                onClick={() => playSynth('click')}
                className="group overflow-hidden rounded-2xl border-2 transition-transform hover:-translate-y-1"
                style={{
                  borderColor: 'var(--border-subtle)',
                  backgroundColor: 'var(--bg-elevated)',
                }}
              >
                <div className="aspect-square overflow-hidden bg-[#11131e]">
                  <img
                    src={item.file}
                    alt={item.tag}
                    className={`h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 ${item.pixel ? '[image-rendering:pixelated]' : ''}`}
                  />
                </div>
                <div className="px-2.5 py-1.5 text-center font-mono-tech text-[10px] font-extrabold">
                  {item.tag}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE SECTORS + PIXEL MINICON STRIP */}
      <section className="mt-14 grid gap-5 lg:grid-cols-3">
        <Link
          to="/arena"
          onClick={() => playSynth('click')}
          className="neon-panel neon-panel-interactive rounded-2xl p-6"
        >
          <Cpu className="h-7 w-7 text-[#00f0ff]" />
          <div className="font-jp mt-3 text-[11px] font-bold opacity-60">超知能モデル比較アリーナ</div>
          <h3 className="font-display mt-1 text-xl font-extrabold">
            {t({ ko: '프론티어 AI 대전', en: 'Frontier AI Arena' })}
          </h3>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {t({
              ko: 'Gemini 4 Neon · Claude Opus 5.5 · GPT-6.2 Sol 3파전 스탯 비교 & 실시간 토큰 비용·Effort 계산기.',
              en: 'Stat breakdown & live token cost / Effort Dial calculator across Gemini 4 Neon, Claude Opus 5.5, and GPT-6.2 Sol.',
            })}
          </p>
        </Link>

        <Link
          to="/lab"
          onClick={() => playSynth('click')}
          className="neon-panel neon-panel-interactive rounded-2xl p-6"
        >
          <FlaskConical className="h-7 w-7 text-[#ff5da2]" />
          <div className="font-jp mt-3 text-[11px] font-bold opacity-60">ゼータ可視化・Lean耐久・予言ガチャ</div>
          <h3 className="font-display mt-1 text-xl font-extrabold">
            {t({ ko: '초지능 실험실 (Toybox)', en: 'Singularity Toybox Lab' })}
          </h3>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {t({
              ko: '실시간 리만 제타 영점 캔버스, 1,740만 줄 Lean 4 읽기 미니게임, 2027 특이점 운세 가챠까지!',
              en: 'Live Riemann Zeta zero canvas, 17.4M-line Lean 4 speed-reading survival game, and 2027 Singularity Prophecy Gacha!',
            })}
          </p>
        </Link>

        <Link
          to="/jammin-e"
          onClick={() => playSynth('click')}
          className="neon-panel neon-panel-interactive rounded-2xl p-6"
        >
          <Smile className="h-7 w-7 text-[#ffd24c]" />
          <div className="font-jp mt-3 text-[11px] font-bold opacity-60">ジェミンE図鑑・ドットミニコン配布</div>
          <h3 className="font-display mt-1 text-xl font-extrabold">
            {t({ ko: '잼민E 도감 & 도트 미니콘', en: 'Jammin-E Studio & Pixel Minicons' })}
          </h3>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {JAMMIN_EMOTES.map((emote) => (
              <img
                key={emote.id}
                src={emote.file}
                alt={t(emote.name)}
                loading="lazy"
                className="aspect-square w-full rounded-lg border border-[#00f0ff]/40 object-cover [image-rendering:pixelated]"
              />
            ))}
          </div>
        </Link>
      </section>
    </div>
  )
}
