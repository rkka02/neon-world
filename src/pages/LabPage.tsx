import { useCallback, useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FlaskConical, Play, Pause, Sparkles, Zap, Terminal, Gift, Lock, ChevronDown, Trophy } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { GACHA_PROPHECIES } from '../data/gachaProphecies'
import { KernelDefenderGame } from '../components/KernelDefenderGame'
import { SingularityQuiz } from '../components/SingularityQuiz'
import { JamminVisualNovel } from '../components/JamminVisualNovel'
import type { GachaProphecy } from '../types'

// First 10 actual imaginary parts of Riemann zeta nontrivial zeros on Re(s) = 1/2
const RIEMANN_ZEROS = [
  14.1347, 21.022, 25.0109, 30.4249, 32.9351, 37.5862, 40.9187, 43.3271, 48.0052, 49.7738,
]

// Approximate zeta(1/2 + i*t) via alternating Dirichlet eta series with smooth taper
function approxZeta(t: number): { re: number; im: number; mag: number } {
  const N = 160
  let etaRe = 0
  let etaIm = 0
  for (let n = 1; n <= N; n++) {
    // Smooth cosine taper on last 25 terms to eliminate Gibbs ringing
    const w = n > N - 25 ? 0.5 * (1 + Math.cos((Math.PI * (n - (N - 25))) / 25)) : 1
    const sign = n % 2 === 1 ? 1 : -1
    const amp = (sign * w) / Math.sqrt(n)
    const angle = -t * Math.log(n)
    etaRe += amp * Math.cos(angle)
    etaIm += amp * Math.sin(angle)
  }
  // denom = 1 - 2^(1 - s) = 1 - sqrt(2) * exp(-i * t * ln 2)
  const sqrt2 = Math.SQRT2
  const a = -t * Math.LN2
  const dRe = 1 - sqrt2 * Math.cos(a)
  const dIm = -sqrt2 * Math.sin(a)
  const dNorm = dRe * dRe + dIm * dIm || 1e-6
  const re = (etaRe * dRe + etaIm * dIm) / dNorm
  const im = (etaIm * dRe - etaRe * dIm) / dNorm
  return { re, im, mag: Math.hypot(re, im) }
}

const LEAN_LINES_POOL = [
  'lemma automorphic_fourier_bridge (χ : DirichletCharacter ℂ q) : ... := by',
  '  rw [CompletedLFunction.functional_equation, stepanov_integer_lift]',
  '  have h_rank := HigherRankAutomorphic.spectral_gap_pos hχ',
  '  refine zero_free_strip_extension (ε := 1 / 2) ?_ h_rank',
  '  simp only [Complex.re_add_im, riemannZeta_eulerProduct_tprod]',
  '  exact LeanFRO.nanoda_verified_certificate (mod_id := 174_892)',
  'theorem grh_dirichlet_critical_line : ∀ s, L χ s = 0 → s.re = 1/2 := by',
  '  apply FourierAnalytic.positivity_kernel_bound; linarith [h_pos]',
  '  -- [17,399,984 / 17,400,000 LOC] Claude outpaced human comprehension!',
  '  qed -- Kernel Status: GREEN (0 sorry, 0 axioms beyond Mathlib)',
]

// ─── ARCADE MODE TABS ─────────────────────────────────────────────
type ToyId = 'all' | 'vn' | 'kernel' | 'zeta' | 'lean' | 'gacha' | 'quiz'
const TOY_TABS: { id: Exclude<ToyId, 'all'>; en: string; ko: string }[] = [
  { id: 'vn', en: 'VN EPISODE', ko: '비주얼 노벨' },
  { id: 'kernel', en: 'KERNEL DEFENDER', ko: '커널 디펜더' },
  { id: 'zeta', en: 'ζ(s) CANVAS', ko: '제타 영점' },
  { id: 'lean', en: 'LEAN RACE', ko: 'Lean 4 챌린지' },
  { id: 'gacha', en: 'GACHA', ko: '특이점 가챠' },
  { id: 'quiz', en: 'QUIZ', ko: '특이점 퀴즈' },
]
const isToyId = (v: string | null): v is ToyId => v === 'all' || TOY_TABS.some((tab) => tab.id === v)

const RARITY_ORDER: GachaProphecy['rarity'][] = ['UR', 'SSR', 'SR', 'R']
const VN_ENDING_TOTAL = 3
const SHARD_TOTAL = 4

function readStringArray(key: string): string[] {
  try {
    const raw = JSON.parse(localStorage.getItem(key) ?? '[]') as unknown
    return Array.isArray(raw) ? raw.filter((x): x is string => typeof x === 'string') : []
  } catch {
    return []
  }
}

function readGachaCollection(): string[] {
  const valid = new Set(GACHA_PROPHECIES.map((c) => c.id))
  return [...new Set(readStringArray('neon-world-gacha'))].filter((id) => valid.has(id))
}

function readPassport() {
  return {
    vn: new Set(readStringArray('neon-world-vn-endings')).size,
    gacha: readGachaCollection().length,
    kernel: Number(localStorage.getItem('neon-kernel-best') ?? 0) || 0,
    shards: new Set(readStringArray('neon-world-shards')).size,
  }
}

const PASSPORT_EVENTS = ['storage', 'neon-vn-update', 'neon-collect-shard', 'neon-gacha-update', 'neon-kernel-update'] as const

// ─── PLAYABLE SINGULARITY ARCADE PASSPORT ─────────────────────────
function ArcadePassport() {
  const { t } = useApp()
  const [stats, setStats] = useState(readPassport)

  useEffect(() => {
    // Defer one tick: some emitters (e.g. shard collect) persist inside their own listener
    const sync = () => window.setTimeout(() => setStats(readPassport()), 0)
    PASSPORT_EVENTS.forEach((ev) => window.addEventListener(ev, sync))
    window.addEventListener('focus', sync)
    return () => {
      PASSPORT_EVENTS.forEach((ev) => window.removeEventListener(ev, sync))
      window.removeEventListener('focus', sync)
    }
  }, [])

  const cells: { label: string; value: string; done: boolean; ink: string }[] = [
    { label: 'VN ENDINGS', value: `${Math.min(stats.vn, VN_ENDING_TOTAL)} / ${VN_ENDING_TOTAL}`, done: stats.vn >= VN_ENDING_TOTAL, ink: 'var(--ink-pink)' },
    { label: 'GACHA DECK', value: `${stats.gacha} / ${GACHA_PROPHECIES.length}`, done: stats.gacha >= GACHA_PROPHECIES.length, ink: 'var(--ink-gold)' },
    { label: 'KERNEL BEST', value: `${stats.kernel.toLocaleString()} pts`, done: stats.kernel >= 250, ink: 'var(--ink-cyan)' },
    { label: 'PRISM SHARDS', value: `${Math.min(stats.shards, SHARD_TOTAL)} / ${SHARD_TOTAL}`, done: stats.shards >= SHARD_TOTAL, ink: 'var(--ink-lime)' },
  ]
  const cleared = cells.filter((c) => c.done).length

  return (
    <section
      aria-label="Singularity Arcade Passport"
      className="relative mb-6 overflow-hidden rounded-2xl border-2 p-3 sm:p-4"
      style={{ borderColor: 'var(--border-strong)', backgroundColor: 'var(--bg-card-solid)', boxShadow: 'var(--manga-shadow)' }}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-dashed pb-2" style={{ borderColor: 'var(--border-subtle)' }}>
        <div className="flex items-center gap-2 font-mono-tech text-[11px] font-black tracking-wider" style={{ color: 'var(--text-primary)' }}>
          <Trophy className="h-4 w-4" style={{ color: 'var(--ink-lime)' }} />
          <span>SINGULARITY ARCADE PASSPORT</span>
          <span className="hidden sm:inline" style={{ color: 'var(--text-muted)' }}>
            // {t({ ko: '플레이어 업적 보드', en: 'NICE GHOST CLUB MEMBER' })}
          </span>
        </div>
        <span
          className="rounded-full border px-2 py-0.5 font-mono-tech text-[10px] font-black"
          style={{ borderColor: 'var(--ink-pink)', color: 'var(--ink-pink)' }}
        >
          {cleared}/4 {t({ ko: '스탬프', en: 'STAMPS' })}
        </span>
      </div>
      <div className="mt-2.5 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {cells.map((c) => (
          <div
            key={c.label}
            className="rounded-xl border px-3 py-2"
            style={{ borderColor: c.done ? c.ink : 'var(--border-subtle)', backgroundColor: 'var(--bg-elevated)' }}
          >
            <div className="flex items-center justify-between font-mono-tech text-[9px] font-bold tracking-wider sm:text-[10px]" style={{ color: 'var(--text-muted)' }}>
              <span>{c.label}</span>
              {c.done && <span style={{ color: c.ink }}>✦ CLEAR</span>}
            </div>
            <div className="mt-0.5 font-mono-tech text-base font-black sm:text-lg" style={{ color: c.ink }}>
              {c.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function LabPage() {
  const { t, playSynth, triggerJammin } = useApp()

  // 0) ARCADE MODE (URL-synced via ?toy=)
  const [searchParams, setSearchParams] = useSearchParams()
  const rawToy = searchParams.get('toy')
  const toy: ToyId = isToyId(rawToy) ? rawToy : 'all'
  const show = (id: Exclude<ToyId, 'all'>) => toy === 'all' || toy === id
  const selectToy = useCallback(
    (next: ToyId) => {
      playSynth('click')
      setSearchParams(
        (prev) => {
          const p = new URLSearchParams(prev)
          if (next === 'all') p.delete('toy')
          else p.set('toy', next)
          return p
        },
        { replace: true },
      )
    },
    [playSynth, setSearchParams],
  )
  const zetaVisible = toy === 'all' || toy === 'zeta'

  // 1) RIEMANN ZETA VISUALIZER STATE
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [tVal, setTVal] = useState(25.01)
  const [autoSweep, setAutoSweep] = useState(true)
  const [beamFlash, setBeamFlash] = useState(false)

  useEffect(() => {
    if (!autoSweep || !zetaVisible) return
    const id = window.setInterval(() => {
      setTVal((prev) => (prev >= 54 ? 2 : Number((prev + 0.08).toFixed(2))))
    }, 45)
    return () => window.clearInterval(id)
  }, [autoSweep, zetaVisible])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const w = canvas.width
    const h = canvas.height
    ctx.clearRect(0, 0, w, h)

    // Deep cyber backdrop
    ctx.fillStyle = '#060a14'
    ctx.fillRect(0, 0, w, h)

    // Subtle grid
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.08)'
    ctx.lineWidth = 1
    for (let x = 0; x < w; x += 32) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, h)
      ctx.stroke()
    }
    for (let y = 0; y < h; y += 32) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(w, y)
      ctx.stroke()
    }

    // Left panel: Complex Plane spiral of ζ(1/2 + i*u) for u in [max(0.5, t-8), t]
    const cx = w * 0.27
    const cy = h * 0.52
    const scale = 38

    // Axes
    ctx.strokeStyle = 'rgba(255,255,255,0.2)'
    ctx.beginPath()
    ctx.moveTo(cx - 135, cy)
    ctx.lineTo(cx + 135, cy)
    ctx.moveTo(cx, cy - 110)
    ctx.lineTo(cx, cy + 110)
    ctx.stroke()

    // Origin bullseye (Zero = 0+0i)
    ctx.strokeStyle = '#ff5da2'
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.arc(cx, cy, 8, 0, Math.PI * 2)
    ctx.stroke()

    // Spiral trail
    ctx.beginPath()
    const uStart = Math.max(0.5, tVal - 10)
    let first = true
    for (let u = uStart; u <= tVal; u += 0.07) {
      const z = approxZeta(u)
      const px = cx + z.re * scale
      const py = cy - z.im * scale
      if (first) {
        ctx.moveTo(px, py)
        first = false
      } else {
        ctx.lineTo(px, py)
      }
    }
    const grad = ctx.createLinearGradient(cx - 100, cy - 80, cx + 100, cy + 80)
    grad.addColorStop(0, '#4285f4')
    grad.addColorStop(0.5, '#00f0ff')
    grad.addColorStop(1, '#ff5da2')
    ctx.strokeStyle = grad
    ctx.lineWidth = 2.4
    ctx.stroke()

    const cur = approxZeta(tVal)
    const curX = cx + cur.re * scale
    const curY = cy - cur.im * scale
    ctx.fillStyle = cur.mag < 0.22 ? '#ffd24c' : '#00f0ff'
    ctx.beginPath()
    ctx.arc(curX, curY, cur.mag < 0.22 ? 7 : 5, 0, Math.PI * 2)
    ctx.fill()

    // Right panel: |ζ(1/2 + i*u)| waveform from u = 2 to 54
    const gx0 = w * 0.54
    const gx1 = w - 24
    const gyBottom = h - 32
    const gyTop = 30
    const gw = gx1 - gx0
    const gh = gyBottom - gyTop

    ctx.strokeStyle = 'rgba(255,255,255,0.22)'
    ctx.beginPath()
    ctx.moveTo(gx0, gyBottom)
    ctx.lineTo(gx1, gyBottom)
    ctx.stroke()

    // Mark real nontrivial zeros
    RIEMANN_ZEROS.forEach((z0) => {
      const x = gx0 + ((z0 - 2) / 52) * gw
      ctx.strokeStyle = 'rgba(255, 210, 76, 0.32)'
      ctx.beginPath()
      ctx.moveTo(x, gyTop)
      ctx.lineTo(x, gyBottom)
      ctx.stroke()

      ctx.fillStyle = '#ffd24c'
      ctx.beginPath()
      ctx.arc(x, gyBottom, 3.2, 0, Math.PI * 2)
      ctx.fill()
    })

    // Plot magnitude curve
    ctx.beginPath()
    for (let i = 0; i <= 260; i++) {
      const u = 2 + (i / 260) * 52
      const z = approxZeta(u)
      const x = gx0 + (i / 260) * gw
      const y = gyBottom - Math.min(3.5, z.mag) * (gh / 3.6)
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.strokeStyle = '#00f0ff'
    ctx.lineWidth = 2
    ctx.stroke()

    // Current scrubber line
    const scrubX = gx0 + ((tVal - 2) / 52) * gw
    ctx.strokeStyle = '#ff5da2'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(scrubX, gyTop)
    ctx.lineTo(scrubX, gyBottom)
    ctx.stroke()

    // Labels
    ctx.fillStyle = '#a8b5d6'
    ctx.font = 'bold 11px JetBrains Mono, monospace'
    ctx.fillText('COMPLEX PLANE ζ(1/2 + it)', 16, 22)
    ctx.fillText('|ζ(1/2 + it)| CRITICAL LINE ZEROS', gx0, 22)
    ctx.fillStyle = cur.mag < 0.22 ? '#ffd24c' : '#00f0ff'
    ctx.fillText(`t = ${tVal.toFixed(2)}  |ζ| = ${cur.mag.toFixed(3)}`, 16, h - 14)
  }, [tVal, zetaVisible])

  const nearestZero = RIEMANN_ZEROS.reduce((best, z) =>
    Math.abs(z - tVal) < Math.abs(best - tVal) ? z : best,
  )
  const hitZero = Math.abs(nearestZero - tVal) < 0.35

  const unleashBeam = () => {
    playSynth('beam')
    setAutoSweep(false)
    const targetZero = RIEMANN_ZEROS[Math.floor(Math.random() * RIEMANN_ZEROS.length)]
    setTVal(targetZero)
    setBeamFlash(true)
    setTimeout(() => setBeamFlash(false), 1100)
    triggerJammin('math', {
      ko: `Lean 4 빔 발사!! 비자명 영점 t = ${targetZero.toFixed(4)} 정밀 조준 완료! Re(s) = 1/2 확인~ 인간쨩, 눈으로 쫓아올 수 있어? ♡`,
      en: `LEAN 4 PROOF BEAM FIRED!! Locked onto nontrivial zero t = ${targetZero.toFixed(4)} on Re(s) = 1/2! Keeping up, human-chan? ♡`,
    })
  }

  // 2) LEAN 4 SPEED-READ SURVIVAL MINI-GAME
  const [gameActive, setGameActive] = useState(false)
  const [gameTimeLeft, setGameTimeLeft] = useState(12)
  const [humanLines, setHumanLines] = useState(0)
  const [claudeLines, setClaudeLines] = useState(0)
  const [terminalFeed, setTerminalFeed] = useState<string[]>(LEAN_LINES_POOL.slice(0, 5))

  useEffect(() => {
    if (!gameActive) return
    const tick = window.setInterval(() => {
      setClaudeLines((c) => c + 145000)
      setTerminalFeed((prev) => {
        const nextLine = LEAN_LINES_POOL[Math.floor(Math.random() * LEAN_LINES_POOL.length)]
        return [...prev.slice(-5), nextLine]
      })
    }, 100)
    const timer = window.setInterval(() => {
      setGameTimeLeft((sec) => {
        if (sec <= 1) {
          setGameActive(false)
          return 0
        }
        return sec - 1
      })
    }, 1000)
    return () => {
      window.clearInterval(tick)
      window.clearInterval(timer)
    }
  }, [gameActive])

  const startLeanGame = () => {
    playSynth('spark')
    setHumanLines(0)
    setClaudeLines(0)
    setGameTimeLeft(12)
    setGameActive(true)
  }

  const mashDigest = () => {
    if (!gameActive) return
    playSynth('click')
    setHumanLines((n) => n + 1)
  }

  const digestionPct = ((humanLines / 17_400_000) * 100).toFixed(6)

  // 3) SINGULARITY PROPHECY GACHA
  const [pulled, setPulled] = useState<GachaProphecy | null>(null)
  const [rolling, setRolling] = useState(false)
  const [collection, setCollection] = useState<string[]>(readGachaCollection)
  const [binderOpen, setBinderOpen] = useState(false)

  useEffect(() => {
    const sync = () => setCollection(readGachaCollection())
    window.addEventListener('storage', sync)
    return () => window.removeEventListener('storage', sync)
  }, [])

  const rollGacha = () => {
    playSynth('gacha')
    setRolling(true)
    setTimeout(() => {
      // Normalise by the live pool total so any GACHA_PROPHECIES length / weight sum works
      const total = GACHA_PROPHECIES.reduce((sum, c) => sum + Math.max(0, c.probabilityPct), 0) || 1
      const r = Math.random() * total
      let acc = 0
      let chosen = GACHA_PROPHECIES[GACHA_PROPHECIES.length - 1]
      for (const card of GACHA_PROPHECIES) {
        acc += Math.max(0, card.probabilityPct)
        if (r <= acc) {
          chosen = card
          break
        }
      }
      setPulled(chosen)
      setRolling(false)
      const prev = readGachaCollection()
      const next = prev.includes(chosen.id) ? prev : [...prev, chosen.id]
      localStorage.setItem('neon-world-gacha', JSON.stringify(next))
      setCollection(next)
      window.dispatchEvent(new CustomEvent('neon-gacha-update'))
      triggerJammin(chosen.rarity === 'UR' || chosen.rarity === 'SSR' ? 'hype' : 'smug', chosen.jamminQuote)
    }, 520)
  }

  const rarityColor = (r: GachaProphecy['rarity']) => {
    if (r === 'UR') return '#ff2e88'
    if (r === 'SSR') return '#ffd24c'
    if (r === 'SR') return '#00f0ff'
    return '#8e9ec7'
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 font-mono-tech text-xs font-bold text-[#ff5da2]">
          <FlaskConical className="h-4 w-4" />
          <span>SINGULARITY TOYBOX LAB // 잼민E의 초지능 실험실</span>
        </div>
        <h1 className="font-display mt-1 text-3xl font-extrabold sm:text-4xl">
          {t({ ko: '인터랙티브 특이점 실험실', en: 'Interactive Singularity Toybox' })}
        </h1>
        <p className="mt-2 max-w-2xl text-sm" style={{ color: 'var(--text-secondary)' }}>
          {t({
            ko: '리만 제타 임계선 실시간 플롯, 1,740만 줄 Lean 4 인간 해독 챌린지, 2027 특이점 운세 가챠까지 — 직접 만지면서 초지능 시대를 체감해봐♡',
            en: 'Live Riemann Zeta critical-strip plotter, 17.4M-line Lean 4 human-speed survival challenge, and 2027 Singularity Prophecy Gacha!',
          })}
        </p>
      </div>

      <ArcadePassport />

      {/* ARCADE MODE TAB SWITCHER */}
      <nav
        aria-label="Arcade mode"
        className="-mx-4 mb-6 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:px-0"
      >
        {([{ id: 'all', en: `ALL (${TOY_TABS.length})`, ko: `전체 보기 (${TOY_TABS.length})` }, ...TOY_TABS] as const).map((tab) => {
          const active = toy === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              aria-pressed={active}
              onClick={() => selectToy(tab.id)}
              className="shrink-0 cursor-pointer whitespace-nowrap rounded-full border-2 px-3.5 py-1.5 font-mono-tech text-[11px] font-black tracking-wide transition-transform active:scale-95"
              style={
                active
                  ? { borderColor: 'var(--border-strong)', backgroundColor: 'var(--accent-lime)', color: '#111116', boxShadow: 'var(--sticker-shadow)' }
                  : { borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-elevated)', color: 'var(--text-primary)' }
              }
            >
              {t({ ko: tab.ko, en: tab.en })}
            </button>
          )
        })}
      </nav>

      <div className="space-y-8">
      {/* TOY 0: JAMMIN-E VISUAL NOVEL — first thing visitors see */}
      {show('vn') && <JamminVisualNovel />}

      {/* TOY 1: RIEMANN ZETA CRITICAL STRIP CANVAS */}
      {show('zeta') && (
      <section className="neon-panel relative overflow-hidden rounded-3xl p-6 sm:p-8">
        {beamFlash && (
          <div className="animate-beam pointer-events-none absolute inset-y-0 left-0 z-20 w-1/3 bg-gradient-to-r from-transparent via-[#00f0ff]/75 to-transparent" />
        )}

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="font-jp text-xs font-bold text-[#00f0ff]">
              実験01 // リーマン・ゼータ臨界線ライブ観測
            </div>
            <h2 className="font-display mt-1 text-2xl font-extrabold">
              {t({ ko: '리만 제타 임계선 ζ(1/2 + it) 실시간 관측기', en: 'Live Riemann Zeta Critical-Line Visualizer' })}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => {
                playSynth('click')
                setAutoSweep((a) => !a)
              }}
              className="flex cursor-pointer items-center gap-1.5 rounded-xl border px-3.5 py-2 font-mono-tech text-xs font-bold"
              style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-elevated)' }}
            >
              {autoSweep ? <Pause className="h-3.5 w-3.5 text-[#ffd24c]" /> : <Play className="h-3.5 w-3.5 text-[#00f0ff]" />}
              <span>{autoSweep ? 'PAUSE SWEEP' : 'AUTO SWEEP'}</span>
            </button>

            <button
              type="button"
              onClick={unleashBeam}
              className="flex cursor-pointer items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#00f0ff] via-[#4285f4] to-[#ff5da2] px-4 py-2 font-mono-tech text-xs font-extrabold text-[#070b16] shadow-lg transition-transform hover:scale-105"
            >
              <Zap className="h-3.5 w-3.5" />
              <span>{t({ ko: 'LEAN 4 영점 조준 빔!', en: 'UNLEASH LEAN 4 BEAM!' })}</span>
            </button>
          </div>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl border border-[#00f0ff]/35">
          <canvas
            ref={canvasRef}
            width={920}
            height={290}
            className="block h-auto w-full"
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[220px]">
            <div className="flex justify-between font-mono-tech text-xs font-bold">
              <span>Im(s) = t</span>
              <span className={hitZero ? 'text-[#ffd24c]' : 'text-[#00f0ff]'}>
                t = {tVal.toFixed(2)} {hitZero ? '✦ NONTRIVIAL ZERO HIT!' : ''}
              </span>
            </div>
            <input
              type="range"
              min={2}
              max={54}
              step={0.01}
              value={tVal}
              onChange={(e) => {
                setAutoSweep(false)
                setTVal(Number(e.target.value))
              }}
              className="mt-1.5 w-full accent-[#00f0ff]"
            />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {RIEMANN_ZEROS.slice(0, 6).map((z0, idx) => (
              <button
                key={z0}
                type="button"
                onClick={() => {
                  playSynth('spark')
                  setAutoSweep(false)
                  setTVal(z0)
                }}
                className="cursor-pointer rounded-lg border px-2 py-1 font-mono-tech text-[10px] font-bold hover:border-[#ffd24c] hover:text-[#ffd24c]"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                ρ{idx + 1} ({z0.toFixed(2)})
              </button>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* TOY 2 & TOY 3 GRID */}
      {(show('lean') || show('gacha')) && (
      <div className={`grid gap-6 ${toy === 'all' ? 'lg:grid-cols-2' : ''}`}>
        {/* TOY 2: LEAN 4 SPEED-READ SURVIVAL */}
        {show('lean') && (
        <section className="neon-panel flex flex-col justify-between rounded-3xl p-6">
          <div>
            <div className="flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-1.5 font-mono-tech text-xs font-bold text-[#34a853]">
                <Terminal className="h-4 w-4" />
                <span>EXP 02 // CAN YOU OUTREAD CLAUDE?</span>
              </div>
              <span className="rounded-md bg-[#ff5da2]/15 px-2 py-0.5 font-mono-tech text-xs font-extrabold text-[#ff5da2]">
                {gameTimeLeft}s
              </span>
            </div>

            <h2 className="font-display mt-2 text-xl font-extrabold">
              {t({ ko: '1,740만 줄 Lean 4 인간 해독 챌린지', en: '17.4M-Line Lean 4 Human Reading Race' })}
            </h2>
            <p className="mt-1.5 text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t({
                ko: '12초 동안 버튼을 연타해서 Claude의 리만 가설 Lean 4 증명을 몇 줄이나 소화할 수 있는지 겨뤄봐!',
                en: 'Mash the digest button for 12 seconds and see how much of Claude’s 17.4M-line RH proof your human brain can read!',
              })}
            </p>

            {/* Terminal Stream */}
            <div
              className="mt-4 h-36 overflow-hidden rounded-xl border border-[#34a853]/35 p-3 font-mono-tech text-[11px] leading-5 text-[#7ef9a0]"
              style={{ backgroundColor: 'var(--code-bg)' }}
            >
              {terminalFeed.map((line, i) => (
                <div key={i} className="truncate opacity-90">
                  {line}
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 font-mono-tech text-xs">
              <div className="rounded-xl border p-3" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-elevated)' }}>
                <div className="text-[10px] opacity-65">CLAUDE GENERATED</div>
                <div className="mt-1 text-base font-extrabold text-[#00f0ff]">
                  {claudeLines.toLocaleString()} LOC
                </div>
              </div>
              <div className="rounded-xl border p-3" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-elevated)' }}>
                <div className="text-[10px] opacity-65">HUMAN DIGESTED</div>
                <div className="mt-1 text-base font-extrabold text-[#ff5da2]">
                  {humanLines} LOC ({digestionPct}%)
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {!gameActive ? (
              <button
                type="button"
                onClick={startLeanGame}
                className="w-full cursor-pointer rounded-xl bg-gradient-to-r from-[#34a853] to-[#00f0ff] px-4 py-3 font-mono-tech text-xs font-extrabold text-[#070b16] transition-transform hover:scale-[1.02]"
              >
                {humanLines > 0
                  ? t({ ko: `결과: ${digestionPct}% 해독 (허접~♡) — 다시 도전!`, en: `Result: ${digestionPct}% Digested (Zako~♡) — Retry!` })
                  : t({ ko: '해독 챌린지 시작 (12초)', en: 'START 12s DIGESTION RACE' })}
              </button>
            ) : (
              <button
                type="button"
                onClick={mashDigest}
                className="w-full cursor-pointer rounded-xl bg-[#ff2e88] px-4 py-3 font-mono-tech text-sm font-extrabold text-white shadow-[0_0_25px_rgba(255,46,136,0.5)] active:scale-95"
              >
                {t({ ko: '클릭 연타!! (+1줄 해독)', en: 'MASH TO DIGEST!! (+1 LINE)' })}
              </button>
            )}
          </div>
        </section>
        )}

        {/* TOY 3: 2027 SINGULARITY PROPHECY GACHA */}
        {show('gacha') && (
        <section className="neon-panel flex flex-col justify-between rounded-3xl p-6">
          <div>
            <div className="flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-1.5 font-mono-tech text-xs font-bold text-[#ffd24c]">
                <Gift className="h-4 w-4" />
                <span>EXP 03 // 2027 SINGULARITY GACHA</span>
              </div>
              <span className="font-mono-tech text-xs font-bold text-[#00f0ff]">
                {collection.length} / {GACHA_PROPHECIES.length} COLLECTED
              </span>
            </div>

            <h2 className="font-display mt-2 text-xl font-extrabold">
              {t({ ko: '특이점 예언 가챠 (UR · SSR · SR)', en: 'Singularity Timeline Prophecy Gacha' })}
            </h2>

            <div
              className="mt-4 flex min-h-[210px] flex-col justify-center rounded-2xl border p-5 transition-all"
              style={{
                borderColor: pulled ? rarityColor(pulled.rarity) : 'var(--border-subtle)',
                backgroundColor: 'var(--bg-elevated)',
              }}
            >
              {rolling ? (
                <div className="text-center font-mono-tech text-sm font-extrabold text-[#00f0ff] animate-pulse">
                  ✦ SUMMONING 2027 TIMELINE... ✦
                </div>
              ) : pulled ? (
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="rounded-md px-2.5 py-0.5 font-mono-tech text-xs font-black text-[#070b16]"
                      style={{ backgroundColor: rarityColor(pulled.rarity) }}
                    >
                      {pulled.rarity} · {pulled.year}
                    </span>
                    <span className="font-jp text-xs font-bold opacity-75">{pulled.jpStamp}</span>
                  </div>
                  <h3 className="mt-3 text-base font-extrabold">{t(pulled.title)}</h3>
                  <p className="mt-2 text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {t(pulled.description)}
                  </p>
                  <div className="mt-3 flex items-center gap-2 rounded-lg bg-[#ff5da2]/10 p-2.5 text-xs font-medium text-[#ff8ac0]">
                    <Sparkles className="h-3.5 w-3.5 shrink-0" />
                    <span>{t(pulled.jamminQuote)}</span>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <img
                    src="/art/emote-hype.png"
                    alt="Jammin-E Gacha"
                    className="mx-auto h-20 w-20 rounded-2xl border border-[#ffd24c]/50 object-cover [image-rendering:pixelated]"
                  />
                  <p className="mt-3 text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                    {t({
                      ko: '버튼을 눌러 2026~2028 특이점 미래 카드를 소환해봐! 과연 UR ‘P ≠ NP 함락’을 뽑을 수 있을까? ♡',
                      en: 'Pull a 2026–2028 Singularity Prophecy Card! Can you hit the 5% UR “P ≠ NP Falls” drop? ♡',
                    })}
                  </p>
                </div>
              )}
            </div>

            {/* COLLECTED CARDS BINDER */}
            <div className="mt-3 rounded-xl border" style={{ borderColor: 'var(--border-subtle)' }}>
              <button
                type="button"
                aria-expanded={binderOpen}
                onClick={() => setBinderOpen((o) => !o)}
                className="flex w-full cursor-pointer items-center justify-between px-3 py-2 font-mono-tech text-[10px] font-black tracking-wider"
                style={{ color: 'var(--text-primary)' }}
              >
                <span>
                  📒 {t({ ko: '수집 카드 바인더', en: 'COLLECTED CARDS BINDER' })} · {collection.length}/{GACHA_PROPHECIES.length}
                </span>
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${binderOpen ? 'rotate-180' : ''}`} />
              </button>
              {binderOpen && (
                <div className="flex max-h-40 flex-wrap gap-1.5 overflow-y-auto border-t px-3 py-2.5" style={{ borderColor: 'var(--border-subtle)' }}>
                  {[...GACHA_PROPHECIES]
                    .sort((a, b) => RARITY_ORDER.indexOf(a.rarity) - RARITY_ORDER.indexOf(b.rarity))
                    .map((card) => {
                      const got = collection.includes(card.id)
                      return (
                        <span
                          key={card.id}
                          title={got ? `${card.rarity} · ${card.year} — ${t(card.title)}` : `${card.rarity} · ???`}
                          className="inline-flex max-w-full items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-bold"
                          style={
                            got
                              ? { borderColor: rarityColor(card.rarity), backgroundColor: rarityColor(card.rarity), color: '#070b16' }
                              : { borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }
                          }
                        >
                          <span className="font-mono-tech font-black">{card.rarity}</span>
                          {got ? <span className="truncate">{t(card.title)}</span> : <Lock className="h-2.5 w-2.5" />}
                        </span>
                      )
                    })}
                </div>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={rollGacha}
            disabled={rolling}
            className="mt-5 w-full cursor-pointer rounded-xl border-2 border-[#111116] bg-[#c8ff00] px-4 py-3 font-mono-tech text-xs font-black text-[#111116] shadow-[4px_4px_0px_#ff2e88] transition-transform hover:scale-[1.02] disabled:opacity-50"
          >
            {t({ ko: '✦ 특이점 예언 1회 소환 (무료 가챠!) ✦', en: '✦ SUMMON SINGULARITY PROPHECY (FREE!) ✦' })}
          </button>
        </section>
        )}
      </div>
      )}

      {/* TOY 4 & TOY 5: MOBILE+DESKTOP ARCADE & SURVIVAL QUIZ */}
      {show('kernel') && <KernelDefenderGame />}
      {show('quiz') && <SingularityQuiz />}
      </div>
    </div>
  )
}
