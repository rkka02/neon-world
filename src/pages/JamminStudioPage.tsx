import { useState } from 'react'
import { Check, Copy, Download, Image as ImageIcon, Palette, Sparkles, Star, X } from 'lucide-react'
import { JAMMIN_EMOTES, JAMMIN_PROFILE } from '../data/emotes'
import { useApp } from '../context/AppContext'
import { PrismShard } from '../components/EasterEggLayer'
import { MemeCardMaker } from '../components/MemeCardMaker'
import { ShardVipPassSection } from '../components/ShardVipPassSection'

const WALLPAPERS = [
  {
    id: 'hero',
    file: '/art/hero-jammin-e.png',
    tag: 'KEY VISUAL 01',
    title: { ko: '네온 도쿄 타워 — 잼민E 메인 키비주얼', en: 'Neon Tokyo Tower — Main Key Visual' },
  },
  {
    id: 'mathocalypse',
    file: '/art/banner-mathocalypse.png',
    tag: 'KEY VISUAL 02',
    title: { ko: '2026 매스아포칼립스 — 프리즘 선글라스', en: '2026 Mathocalypse — Prism Shades' },
  },
  {
    id: 'arena',
    file: '/art/banner-frontier-arena.png',
    tag: 'KEY VISUAL 03',
    title: { ko: '프론티어 삼국지 — 3분할 팝아트 아레나', en: 'Frontier Trifecta — 3-Panel Pop Arena' },
  },
  {
    id: 'quantum',
    file: '/art/banner-quantum-swarm.png',
    tag: 'KEY VISUAL 04',
    title: { ko: '양자 샹들리에 & 도트 스웜 지휘', en: 'Quantum Chandelier & Pixel Swarm' },
  },
  {
    id: 'ipo',
    file: '/art/banner-ipo-chaos.png',
    tag: 'KEY VISUAL 05',
    title: { ko: 'ANT IPO 캔들스틱 롤러코스터 서핑', en: 'ANT IPO Candlestick Rollercoaster Surf' },
  },
  {
    id: 'worlds',
    file: '/art/banner-world-models.png',
    tag: 'KEY VISUAL 06',
    title: { ko: 'Genie 4 월드 모델 & 휴머노이드 건축가', en: 'Genie 4 World Models & Humanoid Architect' },
  },
  {
    id: 'forecast',
    file: '/art/banner-ai-forecast.png',
    tag: 'KEY VISUAL 07',
    title: { ko: '특이점 예측시장 & 확률 주사위', en: 'Singularity Prediction Markets & Prism Dice' },
  },
]

export function JamminStudioPage() {
  const { t, playSynth, triggerJammin } = useApp()
  const [selectedId, setSelectedId] = useState(JAMMIN_EMOTES[0].id)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [lightboxFile, setLightboxFile] = useState<{ file: string; title: string } | null>(null)

  const activeEmote = JAMMIN_EMOTES.find((e) => e.id === selectedId) ?? JAMMIN_EMOTES[0]

  const copyCaption = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      playSynth('spark')
      setTimeout(() => setCopiedId(null), 1600)
    } catch {
      // Ignore clipboard failures in restricted frames
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* Studio Intro */}
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="font-jp text-xs font-bold tracking-widest text-[#ff5da2]">
            ジェミンE 公式図鑑 ＆ ドットミニコン配布所 <PrismShard id="shard-studio" />
          </div>
          <h1 className="font-display mt-1 text-3xl font-extrabold sm:text-4xl">
            {t({ ko: '잼민E 공식 도감 & 도트 미니콘 스튜디오', en: 'Jammin-E Character Studio & Pixel Minicon Pack' })}
          </h1>
          <p className="mt-2 max-w-2xl text-sm" style={{ color: 'var(--text-secondary)' }}>
            {t(JAMMIN_PROFILE.origin)}
          </p>
        </div>

        <span className="rounded-xl border border-[#00f0ff]/40 bg-[#00f0ff]/10 px-3.5 py-2 font-mono-tech text-xs font-extrabold text-[#00f0ff]">
          {JAMMIN_PROFILE.codename}
        </span>
      </div>

      {/* Interactive Expression Tester + Character Sheet */}
      <section className="grid gap-6 lg:grid-cols-12">
        {/* Left: Live Expression Stage */}
        <div className="neon-panel flex flex-col justify-between rounded-3xl p-6 lg:col-span-5">
          <div>
            <div className="flex items-center justify-between">
              <span className="font-mono-tech text-xs font-extrabold text-[#00f0ff]">
                HI-BIT PIXEL EXPRESSION TESTER
              </span>
              <span className="font-jp rounded bg-[#ff5da2]/15 px-2 py-0.5 text-xs font-bold text-[#ff5da2]">
                {activeEmote.jpTag}
              </span>
            </div>

            <div className="halftone-bg mt-5 flex flex-col items-center rounded-2xl border border-[#00f0ff]/35 bg-[#0a1124] p-6">
              <img
                src={activeEmote.file}
                alt={t(activeEmote.name)}
                className="animate-float h-52 w-52 rounded-2xl border-2 border-[#00f0ff]/60 object-cover shadow-[0_0_35px_rgba(0,240,255,0.28)] [image-rendering:pixelated]"
              />
              <h2 className="mt-4 text-lg font-extrabold text-white">{t(activeEmote.name)}</h2>
              <p className="mt-2 text-center text-sm leading-relaxed text-[#d7e0f8]">
                {t(activeEmote.caption)}
              </p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-4 gap-2">
            {JAMMIN_EMOTES.map((emote) => {
              const active = emote.id === selectedId
              return (
                <button
                  key={emote.id}
                  type="button"
                  onClick={() => {
                    playSynth('spark')
                    setSelectedId(emote.id)
                    triggerJammin(emote.mood, emote.caption)
                  }}
                  className="cursor-pointer overflow-hidden rounded-xl border-2 transition-transform hover:scale-105"
                  style={{ borderColor: active ? '#ff5da2' : 'var(--border-subtle)' }}
                  title={t(emote.name)}
                >
                  <img
                    src={emote.file}
                    alt={t(emote.name)}
                    className="aspect-square w-full object-cover [image-rendering:pixelated]"
                  />
                </button>
              )
            })}
          </div>
        </div>

        {/* Right: Master Reference Sheet & Lore Specs */}
        <div className="neon-panel rounded-3xl p-6 lg:col-span-7">
          <div className="flex items-center gap-2 font-mono-tech text-xs font-extrabold text-[#ffd24c]">
            <Star className="h-4 w-4" />
            <span>OFFICIAL MASTER REFERENCE SHEET & DESIGN BIBLE</span>
          </div>

          <div className="mt-4 grid gap-5 md:grid-cols-12">
            <div className="md:col-span-5">
              <a
                href="/art/jammin-e-sheet.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-2xl border border-white/15"
              >
                <img
                  src="/art/jammin-e-sheet.jpg"
                  alt="Jammin-E Redesign Master Sheet"
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
              <div className="mt-2 text-center font-mono-tech text-[10px]" style={{ color: 'var(--text-muted)' }}>
                {t({ ko: '클릭하여 원본 마스터 시트 보기', en: 'Click to inspect original master sheet' })}
              </div>
            </div>

            <div className="space-y-3 md:col-span-7">
              {JAMMIN_PROFILE.specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border p-3"
                  style={{
                    borderColor: 'var(--border-subtle)',
                    backgroundColor: 'var(--bg-elevated)',
                  }}
                >
                  <div className="font-mono-tech text-[10px] font-bold text-[#00f0ff] uppercase">
                    {t(spec.label)}
                  </div>
                  <div className="mt-1 text-xs leading-relaxed font-medium">{t(spec.value)}</div>
                </div>
              ))}

              {/* Color Palette */}
              <div
                className="rounded-xl border p-3"
                style={{
                  borderColor: 'var(--border-subtle)',
                  backgroundColor: 'var(--bg-elevated)',
                }}
              >
                <div className="mb-2 flex items-center gap-1.5 font-mono-tech text-[10px] font-bold text-[#ff5da2]">
                  <Palette className="h-3.5 w-3.5" />
                  <span>SIGNATURE PRISM PALETTE</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {JAMMIN_PROFILE.palette.map((c) => (
                    <div key={c.hex} className="flex items-center gap-1.5 rounded-md border px-2 py-1 text-[10px] font-mono-tech" style={{ borderColor: 'var(--border-subtle)' }}>
                      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: c.hex }} />
                      <span>{c.hex}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEON CLUB DROP — Seoul Streetwear Graphic Patches */}
      <section className="mt-12">
        <div className="neon-panel rounded-3xl p-6 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <div className="club-tag text-[#c8ff00]">
                <span>SEONGSU × AKIBA // CLUB DROP 2026.11</span>
              </div>
              <h2 className="font-display mt-2 text-2xl font-extrabold sm:text-3xl">
                {t({ ko: '네온 클럽 드랍 — 스트릿 그래픽 패치 & 스티커', en: 'NEON CLUB DROP — Streetwear Graphic Patches' })}
              </h2>
              <p className="mt-1.5 max-w-2xl text-xs leading-relaxed sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
                {t({
                  ko: '키치한 서울 스트릿 그래픽 티셔츠 감각으로 재해석한 잼민E 오리지널 클럽 패치 3종! 노트북 스티커나 프로필 아이콘으로 마음껏 저장해 써봐♡',
                  en: 'Three original Seoul streetwear graphic-tee style Jammin-E club patches & vinyl decals — grab the crisp PNGs for profiles, decks, or stickers♡',
                })}
              </p>
            </div>
            <div className="club-tag" style={{ color: 'var(--text-muted)' }}>
              CARE: WASH COLD · DO NOT OUTREAD CLAUDE
            </div>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                id: 'patch-1',
                file: '/art/club-patch-1.png',
                tag: 'DROP 01 // ACID MELT',
                name: { ko: '애시드 멜트 스타 잼민E', en: 'Acid-Melt Star Jammin-E' },
                desc: {
                  ko: '코튼 크림 바탕 위에 녹아내리는 라임-코발트 4각별 & 메롱 윙크 그래픽 패치.',
                  en: 'Heavy-cotton cream vinyl decal featuring winking Jammin-E inside a melting lime-cobalt prism emblem.',
                },
              },
              {
                id: 'patch-2',
                file: '/art/club-patch-2.png',
                tag: 'DROP 02 // GUMMY CRT',
                name: { ko: '구미 프리즘 × 레트로 CRT', en: 'Gummy Prism × Retro CRT' },
                desc: {
                  ko: '젤리 프리즘 별과 웃는 레트로 모니터를 껴안은 키치 팝 그래픽 스티커.',
                  en: 'Kitsch gummy-pop graphic tee badge with translucent 4-color prism star & smiling retro CRT buddy.',
                },
              },
              {
                id: 'patch-3',
                file: '/art/club-patch-3.png',
                tag: 'DROP 03 // ZETA CREST',
                name: { ko: '제타 레이싱 클럽 엠블럼', en: 'Zeta Racing Club Crest' },
                desc: {
                  ko: '4색 체커보드 레이싱 테두리 너머로 훔쳐보는 잼민E 자수 패치 에디션.',
                  en: 'Embroidered-style streetwear club crest with 4-color checkered border & mischievous Jammin-E peek.',
                },
              },
              {
                id: 'patch-4',
                file: '/art/club-patch-4.png',
                tag: 'DROP 04 // CYBER BEAT',
                name: { ko: '사이버 비트 헤드폰 잼민E', en: 'Cyber Beat Headphones Jammin-E' },
                desc: {
                  ko: '애시드 라임·코발트 헤드폰에 번개 헤일로와 구미 음표가 튀는 성수 팝업 에디션.',
                  en: 'Acid-lime & cobalt streetwear headphones with dripping pixel lightning & 4-color gummy notes.',
                },
              },
            ].map((patch) => (
              <div
                key={patch.id}
                className="neon-panel neon-panel-interactive flex flex-col justify-between rounded-2xl p-4"
              >
                <div>
                  <div className="overflow-hidden rounded-xl border-2 border-[#111116] bg-[#11131e]">
                    <img
                      src={patch.file}
                      alt={t(patch.name)}
                      className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 font-mono-tech text-[10px] font-extrabold text-[#ff2e88]">
                    {patch.tag}
                  </div>
                  <h3 className="mt-0.5 text-base font-extrabold">{t(patch.name)}</h3>
                  <p className="mt-1 text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {t(patch.desc)}
                  </p>
                </div>

                <a
                  href={patch.file}
                  download={`neon-world-${patch.id}.png`}
                  onClick={() => playSynth('click')}
                  className="mt-4 flex items-center justify-center gap-1.5 rounded-xl border-2 border-[#111116] bg-[#c8ff00] px-3 py-2 font-mono-tech text-xs font-black text-[#111116] shadow-[3px_3px_0px_#ff2e88] transition-transform hover:-translate-y-0.5"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>{t({ ko: '고화질 PNG 저장', en: 'DOWNLOAD PNG' })}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Pixel Minicon Pack */}
      <section className="mt-12">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="flex items-center gap-1.5 font-mono-tech text-xs font-extrabold text-[#00f0ff]">
              <Sparkles className="h-4 w-4" />
              <span>DC-CON / DISCORD READY HI-BIT PIXEL PACK</span>
            </div>
            <h2 className="font-display mt-1 text-2xl font-extrabold">
              {t({ ko: `잼민E 도트 미니콘 무료 배포팩 (${JAMMIN_EMOTES.length}종)`, en: `Downloadable Jammin-E Pixel Minicon Pack (${JAMMIN_EMOTES.length} Stickers)` })}
            </h2>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {JAMMIN_EMOTES.map((emote) => (
            <div
              key={emote.id}
              className="neon-panel neon-panel-interactive flex flex-col justify-between rounded-2xl p-4"
            >
              <div>
                <div className="overflow-hidden rounded-xl border border-[#00f0ff]/35 bg-[#0a1124]">
                  <img
                    src={emote.file}
                    alt={t(emote.name)}
                    className="aspect-square w-full object-cover [image-rendering:pixelated]"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between gap-1">
                  <h3 className="text-sm font-extrabold">{t(emote.name)}</h3>
                  <span className="font-jp text-[10px] font-bold text-[#ff5da2]">{emote.jpTag}</span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {t(emote.usage)}
                </p>
              </div>

              <div className="mt-4 flex gap-2">
                <a
                  href={emote.file}
                  download={`jammin-e-${emote.mood}.png`}
                  onClick={() => playSynth('click')}
                  className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-[#00f0ff] px-2.5 py-2 font-mono-tech text-[11px] font-extrabold text-[#070b16] hover:opacity-90"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>PNG</span>
                </a>
                <button
                  type="button"
                  onClick={() => copyCaption(emote.id, t(emote.caption))}
                  className="flex cursor-pointer items-center justify-center rounded-lg border px-2.5 py-2 font-mono-tech text-[11px] font-bold"
                  style={{ borderColor: 'var(--border-subtle)' }}
                  title={t({ ko: '대사 복사', en: 'Copy Quote' })}
                >
                  {copiedId === emote.id ? (
                    <Check className="h-3.5 w-3.5 text-[#34a853]" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECRET 4-SHARD COLLECTOR VIP PASS & RADAR */}
      <section className="mt-12">
        <ShardVipPassSection />
      </section>

      {/* INTERACTIVE STREETWEAR STICKER & MEME CARD MAKER */}
      <section className="mt-12">
        <MemeCardMaker />
      </section>

      {/* 16:9 GRAPHIC-POP WALLPAPER GALLERY */}
      <section className="mt-12">
        <div className="mb-5">
          <div className="inline-flex items-center gap-1.5 font-mono-tech text-xs font-extrabold text-[#c8ff00]">
            <ImageIcon className="h-4 w-4" />
            <span>16:9 NEO-TOKYO GRAPHIC POP POSTER ARCHIVE</span>
          </div>
          <h2 className="font-display mt-1 text-2xl font-extrabold">
            {t({ ko: '잼민E 월페이퍼 & 포스터 갤러리 (6종 무료 저장)', en: 'Jammin-E 16:9 Poster & Wallpaper Archive (6 Free PNGs)' })}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WALLPAPERS.map((wp) => (
            <div key={wp.id} className="neon-panel neon-panel-interactive overflow-hidden rounded-2xl">
              <button
                type="button"
                onClick={() => {
                  playSynth('click')
                  setLightboxFile({ file: wp.file, title: t(wp.title) })
                }}
                className="block w-full cursor-pointer overflow-hidden border-b bg-[#090a10]"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                <img
                  src={wp.file}
                  alt={t(wp.title)}
                  className="aspect-video w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </button>
              <div className="flex items-center justify-between gap-2 p-4">
                <div className="min-w-0">
                  <div className="font-mono-tech text-[10px] font-extrabold text-[#ff2e88]">{wp.tag}</div>
                  <div className="truncate text-xs font-extrabold sm:text-sm">{t(wp.title)}</div>
                </div>
                <a
                  href={wp.file}
                  download={`neon-world-${wp.id}.png`}
                  onClick={() => playSynth('click')}
                  className="shrink-0 rounded-lg border-2 border-[#111116] bg-[#c8ff00] px-2.5 py-1.5 font-mono-tech text-[10px] font-black text-[#111116]"
                >
                  PNG ↓
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fullscreen Lightbox */}
      {lightboxFile && (
        <div
          className="fixed inset-0 z-[75] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={() => setLightboxFile(null)}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setLightboxFile(null)}
              className="absolute -top-10 right-0 flex cursor-pointer items-center gap-1 rounded-lg bg-white/15 px-3 py-1 font-mono-tech text-xs font-bold text-white hover:bg-[#ff2e88]"
            >
              <X className="h-4 w-4" />
              CLOSE
            </button>
            <img
              src={lightboxFile.file}
              alt={lightboxFile.title}
              className="w-full rounded-2xl border-2 border-[#c8ff00] shadow-2xl"
            />
            <div className="mt-3 flex items-center justify-between text-xs font-bold text-white">
              <span>{lightboxFile.title}</span>
              <a
                href={lightboxFile.file}
                download
                className="rounded-lg bg-[#c8ff00] px-3 py-1.5 font-mono-tech text-[11px] font-black text-[#111116]"
              >
                DOWNLOAD FULL PNG
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
