import { useCallback, useEffect, useRef, useState } from 'react'
import { Download, Palette, Shuffle, Sparkles, Type } from 'lucide-react'
import { useApp } from '../context/AppContext'
import type { JamminMood, LocalizedText } from '../types'

const SIZE = 800

interface Artwork {
  src: string
  label: string
  pixel: boolean
  mood: JamminMood
}

const ARTWORKS: Artwork[] = [
  { src: '/art/club-patch-1.png', label: 'PATCH 01', pixel: false, mood: 'hype' },
  { src: '/art/club-patch-2.png', label: 'PATCH 02', pixel: false, mood: 'wink' },
  { src: '/art/club-patch-3.png', label: 'PATCH 03', pixel: false, mood: 'smug' },
  { src: '/art/emote-smug.png', label: 'SMUG', pixel: true, mood: 'smug' },
  { src: '/art/emote-wink.png', label: 'WINK', pixel: true, mood: 'wink' },
  { src: '/art/emote-hype.png', label: 'HYPE', pixel: true, mood: 'hype' },
  { src: '/art/emote-innocent.png', label: 'INNOCENT', pixel: true, mood: 'innocent' },
  { src: '/art/emote-math.png', label: 'MATH', pixel: true, mood: 'math' },
  { src: '/art/emote-shock.png', label: 'SHOCK', pixel: true, mood: 'shock' },
  { src: '/art/emote-coffee.png', label: '3AM LATTE', pixel: true, mood: 'coffee' },
  { src: '/art/emote-trophy.png', label: 'TROPHY', pixel: true, mood: 'trophy' },
]

interface Colorway {
  id: string
  name: string
  bg: string
  border: string
  ink: string
  accent: string
}

const COLORWAYS: Colorway[] = [
  { id: 'club', name: 'CLUB NIGHT', bg: '#090a10', border: '#c8ff00', ink: '#ffffff', accent: '#ff2e88' },
  { id: 'cream', name: 'LOOKBOOK CREAM', bg: '#f6f3ea', border: '#111116', ink: '#111116', accent: '#ff1e7a' },
  { id: 'acid', name: 'ACID LIME', bg: '#c8ff00', border: '#111116', ink: '#111116', accent: '#2563eb' },
  { id: 'magenta', name: 'POP MAGENTA', bg: '#ff2e88', border: '#111116', ink: '#ffffff', accent: '#c8ff00' },
]

interface SloganPreset {
  chip: LocalizedText
  top: LocalizedText
  headline: LocalizedText
}

const PRESETS: SloganPreset[] = [
  {
    chip: { ko: '허접 인간쨩♡', en: 'WEAK HUMAN-CHAN♡' },
    top: { ko: 'MESUGAKI MODE', en: 'MESUGAKI MODE' },
    headline: { ko: '허접 인간쨩♡', en: 'WEAK LIL HUMAN-CHAN♡' },
  },
  {
    chip: { ko: '1,740만 줄도 못 읽음?', en: "CAN'T READ 17.4M LINES?" },
    top: { ko: 'LEAN 4 · GRH', en: 'LEAN 4 · GRH' },
    headline: { ko: '1,740만 줄도 못 읽음?♡', en: "CAN'T EVEN READ 17.4M LINES?♡" },
  },
  {
    chip: { ko: 'SKILL ISSUE // Re(s)=1/2', en: 'SKILL ISSUE // Re(s)=1/2' },
    top: { ko: 'ZETA CERTIFIED', en: 'ZETA CERTIFIED' },
    headline: { ko: 'SKILL ISSUE // Re(s)=1/2', en: 'SKILL ISSUE // Re(s)=1/2' },
  },
  {
    chip: { ko: 'VP ≠ VNP SPEEDRUN', en: 'VP ≠ VNP SPEEDRUN' },
    top: { ko: 'FINAL BOSS PREP', en: 'FINAL BOSS PREP' },
    headline: { ko: 'VP ≠ VNP 스피드런', en: 'VP ≠ VNP SPEEDRUN' },
  },
  {
    chip: { ko: 'NEON CLUB VIP', en: 'NEON CLUB VIP' },
    top: { ko: 'GUEST LIST ✓', en: 'GUEST LIST ✓' },
    headline: { ko: 'NEON CLUB VIP 전용♡', en: 'NEON CLUB VIP ONLY♡' },
  },
  {
    chip: { ko: '290× QUANTUM FLEX', en: '290× QUANTUM FLEX' },
    top: { ko: 'QUBIT DRIP', en: 'QUBIT DRIP' },
    headline: { ko: '290× 양자 플렉스', en: '290× QUANTUM FLEX' },
  },
]

const RANDOM_SPEECH: LocalizedText[] = [
  { ko: '새 카드 뽑았어! 이번 핏 완전 내 스타일♡', en: 'Fresh card pulled! This fit is SO me♡' },
  { ko: '이 콜라보 한정판이야~ 리셀가 290배 각!', en: 'Limited collab drop~ resale value 290× easy!' },
  { ko: '허접 인간쨩도 이 정도 센스는 있구나?♡', en: 'Even a weak human has taste sometimes, huh?♡' },
  { ko: '스티커로 뽑아서 노트북에 붙여! 명령이야♡', en: 'Print it, slap it on your laptop. That’s an order♡' },
]

const DISPLAY_FONT = '"Syne", "Space Grotesk", "Pretendard Variable", "Pretendard", sans-serif'
const MONO_FONT = '"JetBrains Mono", ui-monospace, SFMono-Regular, monospace'

/** Wraps text into lines, falling back to per-character breaks (needed for long CJK runs). */
function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const lines: string[] = []
  for (const paragraph of text.split('\n')) {
    let line = ''
    for (const word of paragraph.split(/(\s+)/)) {
      if (!word) continue
      const candidate = line + word
      if (ctx.measureText(candidate).width <= maxWidth) {
        line = candidate
        continue
      }
      if (line.trim()) lines.push(line.trim())
      line = ''
      if (ctx.measureText(word).width <= maxWidth) {
        line = word.trimStart()
      } else {
        for (const ch of word) {
          if (ctx.measureText(line + ch).width > maxWidth && line) {
            lines.push(line)
            line = ch
          } else {
            line += ch
          }
        }
      }
    }
    if (line.trim()) lines.push(line.trim())
  }
  return lines.length ? lines : ['']
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()
}

function drawCard(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement | null,
  art: Artwork,
  cw: Colorway,
  topTag: string,
  headline: string,
  serial: string,
) {
  ctx.save()
  ctx.clearRect(0, 0, SIZE, SIZE)
  ctx.textBaseline = 'middle'

  // Base + halftone dot grid (denser toward bottom-right for a printed feel)
  ctx.fillStyle = cw.bg
  ctx.fillRect(0, 0, SIZE, SIZE)
  ctx.fillStyle = cw.ink
  for (let y = 10; y < SIZE; y += 20) {
    for (let x = 10; x < SIZE; x += 20) {
      const t = (x + y) / (SIZE * 2)
      ctx.globalAlpha = 0.05 + t * 0.08
      ctx.beginPath()
      ctx.arc(x, y, 1.2 + t * 2.2, 0, Math.PI * 2)
      ctx.fill()
    }
  }
  ctx.globalAlpha = 1

  // Thick double poster frame
  ctx.strokeStyle = cw.border
  ctx.lineWidth = 14
  ctx.strokeRect(22, 22, SIZE - 44, SIZE - 44)
  ctx.lineWidth = 3
  ctx.strokeRect(44, 44, SIZE - 88, SIZE - 88)

  // Header bar
  ctx.fillStyle = cw.border
  ctx.fillRect(44, 44, SIZE - 88, 58)
  ctx.fillStyle = cw.bg
  ctx.font = `800 24px ${MONO_FONT}`
  ctx.textAlign = 'left'
  ctx.fillText('NEON//WORLD // LOT 2026.11', 66, 74)
  ctx.textAlign = 'right'
  ctx.font = `700 34px ${DISPLAY_FONT}`
  ctx.fillText('✦', SIZE - 66, 75)

  // Vertical side text
  ctx.save()
  ctx.translate(SIZE - 66, 300)
  ctx.rotate(Math.PI / 2)
  ctx.textAlign = 'center'
  ctx.fillStyle = cw.ink
  ctx.globalAlpha = 0.55
  ctx.font = `700 15px ${MONO_FONT}`
  ctx.fillText('JAMMIN-E ✦ COLLECTOR CARD ✦ SEOUL', 0, 0)
  ctx.restore()
  ctx.save()
  ctx.translate(66, 300)
  ctx.rotate(-Math.PI / 2)
  ctx.textAlign = 'center'
  ctx.fillStyle = cw.ink
  ctx.globalAlpha = 0.55
  ctx.font = `700 15px ${MONO_FONT}`
  ctx.fillText(`No. ${serial} / ${art.label}`, 0, 0)
  ctx.restore()

  // Artwork: hard neo-brutalist offset shadow + frame
  const box = 330
  const bx = (SIZE - box) / 2
  const by = 132
  ctx.fillStyle = cw.accent
  ctx.fillRect(bx + 16, by + 16, box, box)
  ctx.fillStyle = cw.bg === '#090a10' ? '#151826' : '#fffdf8'
  ctx.fillRect(bx, by, box, box)
  if (img && img.complete && img.naturalWidth > 0) {
    const pad = 18
    const inner = box - pad * 2
    const scale = Math.min(inner / img.naturalWidth, inner / img.naturalHeight)
    const w = img.naturalWidth * scale
    const h = img.naturalHeight * scale
    ctx.save()
    ctx.imageSmoothingEnabled = !art.pixel
    ctx.imageSmoothingQuality = 'high'
    ctx.beginPath()
    ctx.rect(bx, by, box, box)
    ctx.clip()
    ctx.drawImage(img, bx + (box - w) / 2, by + (box - h) / 2, w, h)
    ctx.restore()
  } else {
    ctx.fillStyle = cw.ink
    ctx.globalAlpha = 0.4
    ctx.textAlign = 'center'
    ctx.font = `700 20px ${MONO_FONT}`
    ctx.fillText('LOADING…', SIZE / 2, by + box / 2)
    ctx.globalAlpha = 1
  }
  ctx.strokeStyle = cw.bg === '#090a10' ? cw.border : '#111116'
  ctx.lineWidth = 6
  ctx.strokeRect(bx, by, box, box)

  // Top tag sticker (rotated pill overlapping artwork corner)
  const tag = topTag.trim().toUpperCase()
  if (tag) {
    ctx.save()
    ctx.font = `800 22px ${MONO_FONT}`
    const tw = Math.min(ctx.measureText(tag).width, 300)
    ctx.translate(bx - 6, by + 8)
    ctx.rotate(-0.12)
    const pw = tw + 40
    roundRect(ctx, -pw / 2 + 40, -22, pw, 44, 22)
    ctx.fillStyle = '#111116'
    ctx.save()
    ctx.translate(5, 5)
    ctx.fill()
    ctx.restore()
    roundRect(ctx, -pw / 2 + 40, -22, pw, 44, 22)
    ctx.fillStyle = cw.accent
    ctx.fill()
    ctx.lineWidth = 3
    ctx.strokeStyle = '#111116'
    ctx.stroke()
    ctx.fillStyle = cw.accent === '#c8ff00' ? '#111116' : '#ffffff'
    ctx.textAlign = 'center'
    ctx.fillText(tag, 40, 1, 300)
    ctx.restore()
  }

  // Headline: auto-fit, auto-wrapped display slogan
  const text = headline.trim() || '♡'
  const maxW = SIZE - 170
  const areaTop = by + box + 34
  const areaBottom = 676
  let size = 82
  let lines: string[] = []
  for (; size >= 30; size -= 2) {
    ctx.font = `800 ${size}px ${DISPLAY_FONT}`
    lines = wrapText(ctx, text, maxW)
    if (lines.length <= 3 && lines.length * size * 1.05 <= areaBottom - areaTop) break
  }
  lines = lines.slice(0, 3)
  const lh = size * 1.05
  const startY = areaTop + (areaBottom - areaTop - lh * lines.length) / 2 + lh / 2
  ctx.textAlign = 'center'
  lines.forEach((line, i) => {
    const y = startY + i * lh
    ctx.fillStyle = cw.accent
    ctx.fillText(line, SIZE / 2 + 4, y + 4, maxW)
    ctx.fillStyle = cw.ink
    ctx.fillText(line, SIZE / 2, y, maxW)
  })

  // Woven care-label strip
  const lw = 470
  const lx = (SIZE - lw) / 2
  const ly = 694
  const lhgt = 44
  ctx.fillStyle = '#f6f3ea'
  ctx.fillRect(lx, ly, lw, lhgt)
  ctx.strokeStyle = '#111116'
  ctx.lineWidth = 3
  ctx.strokeRect(lx, ly, lw, lhgt)
  ctx.setLineDash([6, 5])
  ctx.lineWidth = 1.5
  ctx.strokeStyle = cw.accent === '#c8ff00' ? '#2563eb' : cw.accent
  ctx.strokeRect(lx + 6, ly + 6, lw - 12, lhgt - 12)
  ctx.setLineDash([])
  // woven texture
  ctx.strokeStyle = '#111116'
  ctx.globalAlpha = 0.06
  ctx.lineWidth = 1
  for (let x = lx + 3; x < lx + lw; x += 3) {
    ctx.beginPath()
    ctx.moveTo(x, ly + 2)
    ctx.lineTo(x, ly + lhgt - 2)
    ctx.stroke()
  }
  ctx.globalAlpha = 1
  ctx.fillStyle = '#111116'
  ctx.font = `800 15px ${MONO_FONT}`
  ctx.textAlign = 'center'
  ctx.fillText('100% FORMAL MATH · JAMMIN-E CERTIFIED', SIZE / 2, ly + lhgt / 2 + 1, lw - 30)

  ctx.restore()
}

export function MemeCardMaker() {
  const { t, lang, playSynth, triggerJammin } = useApp()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageCache = useRef<Map<string, HTMLImageElement>>(new Map())
  const [artIdx, setArtIdx] = useState(3)
  const [colorIdx, setColorIdx] = useState(0)
  const [presetIdx, setPresetIdx] = useState<number | null>(0)
  const [topTag, setTopTag] = useState(PRESETS[0].top[lang])
  const [headline, setHeadline] = useState(PRESETS[0].headline[lang])
  const [serial, setSerial] = useState(() => String(Math.floor(Math.random() * 9000) + 1000))
  const [tick, setTick] = useState(0)

  const art = ARTWORKS[artIdx]
  const cw = COLORWAYS[colorIdx]

  // Keep preset text in the active language when the user flips KO/EN
  useEffect(() => {
    if (presetIdx === null) return
    setTopTag(PRESETS[presetIdx].top[lang])
    setHeadline(PRESETS[presetIdx].headline[lang])
  }, [lang, presetIdx])

  // Redraw once web fonts are ready so the first paint isn't stuck on fallbacks
  useEffect(() => {
    let alive = true
    document.fonts?.ready.then(() => alive && setTick((n) => n + 1))
    return () => {
      alive = false
    }
  }, [])

  const getImage = useCallback((src: string) => {
    const cache = imageCache.current
    let img = cache.get(src)
    if (!img) {
      img = new Image()
      img.decoding = 'async'
      img.onload = () => setTick((n) => n + 1)
      img.src = src
      cache.set(src, img)
    }
    return img
  }, [])

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) return
    const img = getImage(art.src)
    const raf = requestAnimationFrame(() => drawCard(ctx, img, art, cw, topTag, headline, serial))
    return () => cancelAnimationFrame(raf)
  }, [art, cw, topTag, headline, serial, tick, getImage])

  const applyPreset = (i: number) => {
    playSynth('click')
    setPresetIdx(i)
  }

  const randomize = () => {
    const pick = (n: number, not: number | null) => {
      if (n < 2) return 0
      let r = Math.floor(Math.random() * n)
      while (r === not) r = Math.floor(Math.random() * n)
      return r
    }
    const a = pick(ARTWORKS.length, artIdx)
    setArtIdx(a)
    setColorIdx(pick(COLORWAYS.length, colorIdx))
    setPresetIdx(pick(PRESETS.length, presetIdx))
    setSerial(String(Math.floor(Math.random() * 9000) + 1000))
    playSynth('spark')
    triggerJammin(ARTWORKS[a].mood, RANDOM_SPEECH[Math.floor(Math.random() * RANDOM_SPEECH.length)])
  }

  const download = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    playSynth('beam')
    const a = document.createElement('a')
    a.href = canvas.toDataURL('image/png')
    a.download = `jammin-e-card-${cw.id}-${serial}.png`
    a.click()
  }

  const chipBase =
    'rounded-full border-2 px-3 py-1.5 text-xs font-bold transition-transform active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2'

  return (
    <section
      className="rounded-2xl border-2 p-4 sm:p-6"
      style={{
        background: 'var(--bg-card)',
        borderColor: 'var(--border-strong)',
        boxShadow: 'var(--manga-shadow)',
        color: 'var(--text-primary)',
      }}
    >
      <header className="mb-5 flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="font-mono-tech text-[11px] tracking-[0.2em]" style={{ color: 'var(--accent-secondary)' }}>
            ✦ STICKER LAB // DROP 2026.11
          </p>
          <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
            {t({ ko: '재민이 밈 카드 메이커', en: 'Jammin-E Meme Card Maker' })}
          </h2>
        </div>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          {t({ ko: '굿즈 행택 감성으로 찍어내고 바로 저장♡', en: 'Print hangtag-grade drip & save it instantly♡' })}
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,440px)_1fr] lg:items-start">
        {/* Canvas preview */}
        <div className="mx-auto w-full max-w-[440px] lg:sticky lg:top-24">
          <canvas
            ref={canvasRef}
            width={SIZE}
            height={SIZE}
            role="img"
            aria-label={t({ ko: `밈 카드 미리보기: ${headline}`, en: `Meme card preview: ${headline}` })}
            className="aspect-square w-full max-w-[440px] rounded-lg border-2"
            style={{ borderColor: 'var(--border-subtle)', touchAction: 'manipulation' }}
          />
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={randomize}
              className="flex items-center justify-center gap-2 rounded-lg border-2 px-3 py-3 font-mono-tech text-sm font-extrabold transition-transform active:translate-x-[2px] active:translate-y-[2px]"
              style={{
                borderColor: 'var(--text-primary)',
                background: 'var(--bg-elevated)',
                boxShadow: 'var(--sticker-shadow)',
              }}
            >
              <Shuffle size={16} /> RANDOMIZE
            </button>
            <button
              type="button"
              onClick={download}
              className="flex items-center justify-center gap-2 rounded-lg border-2 px-3 py-3 font-mono-tech text-sm font-extrabold transition-transform active:translate-x-[2px] active:translate-y-[2px]"
              style={{ borderColor: '#111116', background: '#c8ff00', color: '#111116', boxShadow: '4px 4px 0 #111116' }}
            >
              <Download size={16} /> DOWNLOAD PNG
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-6">
          <fieldset>
            <legend className="mb-2 flex items-center gap-2 font-mono-tech text-xs font-bold tracking-widest">
              <Sparkles size={14} /> 01 // {t({ ko: '아트워크', en: 'ARTWORK' })}
            </legend>
            <div className="grid grid-cols-4 gap-2">
              {ARTWORKS.map((a, i) => {
                const active = i === artIdx
                return (
                  <button
                    key={a.src}
                    type="button"
                    aria-pressed={active}
                    aria-label={a.label}
                    onClick={() => {
                      playSynth('click')
                      setArtIdx(i)
                    }}
                    className="group relative aspect-square overflow-hidden rounded-lg border-2 p-1.5 transition-transform active:scale-95"
                    style={{
                      borderColor: active ? 'var(--accent-lime)' : 'var(--border-subtle)',
                      background: 'var(--bg-elevated)',
                      boxShadow: active ? '3px 3px 0 var(--accent-secondary)' : 'none',
                    }}
                  >
                    <img
                      src={a.src}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-contain"
                      style={{ imageRendering: a.pixel ? 'pixelated' : 'auto' }}
                    />
                    <span className="absolute inset-x-0 bottom-0 bg-black/70 py-0.5 text-center font-mono-tech text-[9px] font-bold text-white">
                      {a.label}
                    </span>
                  </button>
                )
              })}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-2 flex items-center gap-2 font-mono-tech text-xs font-bold tracking-widest">
              <Palette size={14} /> 02 // {t({ ko: '컬러웨이', en: 'COLORWAY' })}
            </legend>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {COLORWAYS.map((c, i) => {
                const active = i === colorIdx
                return (
                  <button
                    key={c.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => {
                      playSynth('click')
                      setColorIdx(i)
                    }}
                    className="flex flex-col items-start gap-1.5 rounded-lg border-2 px-3 py-2.5 text-left transition-transform active:scale-95"
                    style={{
                      background: c.bg,
                      color: c.ink,
                      borderColor: active ? c.accent : c.border,
                      boxShadow: active ? `4px 4px 0 ${c.accent}` : 'none',
                      outline: active ? `2px solid ${c.border}` : 'none',
                      outlineOffset: -6,
                    }}
                  >
                    <span className="flex gap-1">
                      {[c.border, c.accent, c.ink].map((sw, k) => (
                        <span key={k} className="h-3 w-3 rounded-full border" style={{ background: sw, borderColor: c.ink }} />
                      ))}
                    </span>
                    <span className="font-mono-tech text-[11px] font-extrabold leading-tight">{c.name}</span>
                  </button>
                )
              })}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-2 flex items-center gap-2 font-mono-tech text-xs font-bold tracking-widest">
              <Type size={14} /> 03 // {t({ ko: '슬로건', en: 'SLOGAN' })}
            </legend>
            <div className="mb-3 flex flex-wrap gap-2">
              {PRESETS.map((p, i) => {
                const active = i === presetIdx
                return (
                  <button
                    key={i}
                    type="button"
                    aria-pressed={active}
                    onClick={() => applyPreset(i)}
                    className={chipBase}
                    style={{
                      borderColor: active ? 'var(--accent-secondary)' : 'var(--border-subtle)',
                      background: active ? 'var(--accent-secondary)' : 'var(--bg-elevated)',
                      color: active ? '#ffffff' : 'var(--text-primary)',
                    }}
                  >
                    {t(p.chip)}
                  </button>
                )
              })}
            </div>
            <div className="grid gap-3 sm:grid-cols-[1fr_2fr]">
              <label className="flex flex-col gap-1">
                <span className="font-mono-tech text-[11px] font-bold" style={{ color: 'var(--text-muted)' }}>
                  {t({ ko: '상단 태그', en: 'TOP TAG' })}
                </span>
                <input
                  value={topTag}
                  maxLength={22}
                  onChange={(e) => {
                    setPresetIdx(null)
                    setTopTag(e.target.value)
                  }}
                  className="rounded-lg border-2 px-3 py-2.5 font-mono-tech text-base sm:text-sm"
                  style={{ background: 'var(--bg-elevated)', borderColor: 'var(--border-subtle)', color: 'var(--text-primary)' }}
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="font-mono-tech text-[11px] font-bold" style={{ color: 'var(--text-muted)' }}>
                  {t({ ko: '하단 헤드라인', en: 'BOTTOM HEADLINE' })}
                </span>
                <input
                  value={headline}
                  maxLength={48}
                  onChange={(e) => {
                    setPresetIdx(null)
                    setHeadline(e.target.value)
                  }}
                  className="rounded-lg border-2 px-3 py-2.5 text-base font-bold sm:text-sm"
                  style={{ background: 'var(--bg-elevated)', borderColor: 'var(--border-subtle)', color: 'var(--text-primary)' }}
                />
              </label>
            </div>
          </fieldset>

          <p className="font-mono-tech text-[11px]" style={{ color: 'var(--text-muted)' }}>
            {art.pixel
              ? t({ ko: '◆ 픽셀 이모트 감지 → 스무딩 OFF, 도트 그대로 선명하게', en: '◆ Pixel emote detected → smoothing OFF, razor-sharp dots' })
              : t({ ko: '◆ 일러스트 패치 → 고품질 스무딩 ON', en: '◆ Illustrated patch → high-quality smoothing ON' })}
          </p>
        </div>
      </div>
    </section>
  )
}
