import { useEffect, useRef, useState } from 'react'
import { Gamepad2, Heart, Play, RotateCcw, Trophy, ArrowLeft, ArrowRight } from 'lucide-react'
import { useApp } from '../context/AppContext'

interface FallingItem {
  x: number
  y: number
  vy: number
  kind: 'qed' | 'prism' | 'bug' | 'slop'
  label: string
}

export function KernelDefenderGame() {
  const { t, playSynth, triggerJammin } = useApp()
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const playerImgRef = useRef<HTMLImageElement | null>(null)

  const [running, setRunning] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [combo, setCombo] = useState(0)
  const [lives, setLives] = useState(3)
  const [bestScore, setBestScore] = useState<number>(() => {
    const saved = Number(localStorage.getItem('neon-kernel-best') || 0)
    return Number.isFinite(saved) ? saved : 0
  })

  const stateRef = useRef({
    px: 260,
    keys: { left: false, right: false },
    items: [] as FallingItem[],
    score: 0,
    combo: 0,
    lives: 3,
    frame: 0,
  })

  useEffect(() => {
    const img = new Image()
    img.src = '/art/emote-math.png'
    playerImgRef.current = img
  }, [])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') stateRef.current.keys.left = true
      if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') stateRef.current.keys.right = true
    }
    const up = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') stateRef.current.keys.left = false
      if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') stateRef.current.keys.right = false
    }
    window.addEventListener('keydown', down)
    window.addEventListener('keyup', up)
    return () => {
      window.removeEventListener('keydown', down)
      window.removeEventListener('keyup', up)
    }
  }, [])

  useEffect(() => {
    if (!running) return
    let rafId = 0

    const loop = () => {
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const st = stateRef.current
      const W = canvas.width
      const H = canvas.height
      st.frame += 1

      // Move player
      if (st.keys.left) st.px -= 6.5
      if (st.keys.right) st.px += 6.5
      st.px = Math.max(30, Math.min(W - 30, st.px))

      // Spawn falling proof tokens & kernel bugs
      const spawnInterval = Math.max(18, 42 - Math.floor(st.score / 120))
      if (st.frame % spawnInterval === 0) {
        const roll = Math.random()
        let kind: FallingItem['kind'] = 'qed'
        let label = '✓ QED'
        if (roll < 0.45) {
          kind = 'qed'
          label = '✓ QED'
        } else if (roll < 0.63) {
          kind = 'prism'
          label = '✦ PRISM'
        } else if (roll < 0.84) {
          kind = 'bug'
          label = '0 = 1'
        } else {
          kind = 'slop'
          label = 'AI SLOP'
        }
        st.items.push({
          x: 28 + Math.random() * (W - 56),
          y: -16,
          vy: 2.3 + Math.min(4.2, st.score / 180) + Math.random() * 1.4,
          kind,
          label,
        })
      }

      // Draw background
      ctx.fillStyle = '#070910'
      ctx.fillRect(0, 0, W, H)

      // Subtle grid
      ctx.strokeStyle = 'rgba(200, 255, 0, 0.06)'
      ctx.lineWidth = 1
      for (let x = 0; x < W; x += 32) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, H)
        ctx.stroke()
      }
      for (let y = 0; y < H; y += 32) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(W, y)
        ctx.stroke()
      }

      // Update & draw falling items
      const remaining: FallingItem[] = []
      const py = H - 36
      for (const item of st.items) {
        item.y += item.vy
        const hit = Math.abs(item.x - st.px) < 34 && Math.abs(item.y - py) < 30

        if (hit) {
          if (item.kind === 'qed' || item.kind === 'prism') {
            st.combo += 1
            const pts = (item.kind === 'prism' ? 25 : 10) + Math.min(30, st.combo * 2)
            st.score += pts
            setScore(st.score)
            setCombo(st.combo)
            playSynth(item.kind === 'prism' ? 'spark' : 'click')
          } else {
            st.combo = 0
            st.lives -= 1
            setCombo(0)
            setLives(st.lives)
            playSynth('beam')
            if (st.lives <= 0) {
              setRunning(false)
              setGameOver(true)
              if (st.score > bestScore) {
                setBestScore(st.score)
                localStorage.setItem('neon-kernel-best', String(st.score))
              }
              triggerJammin(st.score >= 250 ? 'hype' : 'smug', {
                ko:
                  st.score >= 250
                    ? `커널 수호 ${st.score}점 돌파!! 이 정도면 nanoda 커널 수석 경비원 인정해줄게~♡`
                    : `${st.score}점에서 0 = 1 버그 맞고 터졌네? ㅋ 인간 반사신경 너무 귀엽잖아~ 다시 도전해봐♡`,
                en:
                  st.score >= 250
                    ? `${st.score} pts defending the Lean kernel!! You’ve earned Chief nanoda Guardian rank~♡`
                    : `Crashed to a 0 = 1 bug at ${st.score} pts? lol Adorable human reflexes~ Run it back♡`,
              })
              return
            }
          }
          continue
        }

        if (item.y < H + 20) {
          remaining.push(item)
          const bg =
            item.kind === 'qed'
              ? '#2ee59d'
              : item.kind === 'prism'
                ? '#c8ff00'
                : item.kind === 'bug'
                  ? '#ff2e88'
                  : '#ff7849'
          ctx.fillStyle = bg
          ctx.fillRect(item.x - 28, item.y - 11, 56, 22)
          ctx.strokeStyle = '#111116'
          ctx.lineWidth = 2
          ctx.strokeRect(item.x - 28, item.y - 11, 56, 22)
          ctx.fillStyle = '#090a10'
          ctx.font = '900 10px JetBrains Mono, monospace'
          ctx.textAlign = 'center'
          ctx.fillText(item.label, item.x, item.y + 4)
        }
      }
      st.items = remaining

      // Draw Jammin-E pixel player
      const img = playerImgRef.current
      if (img && img.complete && img.naturalWidth > 0) {
        ctx.imageSmoothingEnabled = false
        ctx.drawImage(img, st.px - 24, py - 24, 48, 48)
        ctx.strokeStyle = '#c8ff00'
        ctx.lineWidth = 2
        ctx.strokeRect(st.px - 24, py - 24, 48, 48)
      } else {
        ctx.fillStyle = '#00f0ff'
        ctx.fillRect(st.px - 20, py - 20, 40, 40)
      }

      rafId = window.requestAnimationFrame(loop)
    }

    rafId = window.requestAnimationFrame(loop)
    return () => window.cancelAnimationFrame(rafId)
  }, [running, bestScore, playSynth, triggerJammin])

  const startGame = () => {
    playSynth('spark')
    stateRef.current = {
      px: 260,
      keys: { left: false, right: false },
      items: [],
      score: 0,
      combo: 0,
      lives: 3,
      frame: 0,
    }
    setScore(0)
    setCombo(0)
    setLives(3)
    setGameOver(false)
    setRunning(true)
  }

  const moveByPointer = (clientX: number) => {
    const canvas = canvasRef.current
    if (!canvas || !running) return
    const rect = canvas.getBoundingClientRect()
    const relX = ((clientX - rect.left) / rect.width) * canvas.width
    stateRef.current.px = Math.max(30, Math.min(canvas.width - 30, relX))
  }

  return (
    <section className="neon-panel rounded-3xl p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 font-mono-tech text-xs font-extrabold text-[#c8ff00]">
            <Gamepad2 className="h-4 w-4" />
            <span>ARCADE 04 // KERNEL DEFENDER (MOBILE + DESKTOP)</span>
          </div>
          <h2 className="font-display mt-1 text-2xl font-extrabold">
            {t({ ko: '커널 디펜더: 0 = 1 버그를 피해 Lean 증명을 받아라!', en: 'Kernel Defender: Catch ✓ QED Proofs, Dodge 0 = 1 Bugs!' })}
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2 font-mono-tech text-xs font-extrabold">
          <span className="rounded-lg border px-2.5 py-1" style={{ borderColor: 'var(--border-subtle)' }}>
            SCORE: <span className="text-[#c8ff00]">{score}</span>
          </span>
          <span className="rounded-lg border px-2.5 py-1" style={{ borderColor: 'var(--border-subtle)' }}>
            COMBO: <span className="text-[#00f0ff]">x{combo}</span>
          </span>
          <span className="inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-[#ffd60a]" style={{ borderColor: 'var(--border-subtle)' }}>
            <Trophy className="h-3.5 w-3.5" />
            {bestScore}
          </span>
          <span className="inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-[#ff2e88]" style={{ borderColor: 'var(--border-subtle)' }}>
            {Array.from({ length: 3 }).map((_, i) => (
              <Heart key={i} className={`h-3.5 w-3.5 ${i < lives ? 'fill-[#ff2e88]' : 'opacity-20'}`} />
            ))}
          </span>
        </div>
      </div>

      <p className="mt-2 text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {t({
          ko: '데스크톱은 마우스 이동 / A·D / 화살표 키, 모바일은 화면 터치 드래그 또는 아래 좌우 버튼으로 도트 잼민E를 조종해! ✓ QED(+10)와 ✦ PRISM(+25)을 먹고, 0 = 1 커널 버그와 AI SLOP은 피해!',
          en: 'Move pixel Jammin-E via mouse / A-D / Arrow keys on desktop, or touch-drag & thumb pads on mobile! Catch ✓ QED (+10) & ✦ PRISM (+25) while dodging 0 = 1 bugs & AI SLOP!',
        })}
      </p>

      <div className="relative mt-4 overflow-hidden rounded-2xl border-2 border-[#c8ff00]/40 bg-[#070910]">
        <canvas
          ref={canvasRef}
          width={560}
          height={320}
          onMouseMove={(e) => moveByPointer(e.clientX)}
          onTouchMove={(e) => {
            if (e.touches[0]) moveByPointer(e.touches[0].clientX)
          }}
          onTouchStart={(e) => {
            if (e.touches[0]) moveByPointer(e.touches[0].clientX)
          }}
          className="mx-auto block h-auto w-full max-w-[680px] touch-none select-none"
        />

        {!running && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/75 p-4 text-center backdrop-blur-[2px]">
            <img
              src={gameOver ? '/art/emote-wink.png' : '/art/emote-math.png'}
              alt="Jammin-E Arcade"
              className="h-20 w-20 rounded-2xl border-2 border-[#c8ff00] object-cover [image-rendering:pixelated]"
            />
            <div className="font-display mt-3 text-xl font-extrabold text-white">
              {gameOver
                ? t({ ko: `커널 종료! 최종 점수 ${score}점`, en: `KERNEL HALTED! FINAL SCORE: ${score}` })
                : t({ ko: 'Lean 4 커널 방어전 준비 완료!', en: 'READY TO DEFEND THE LEAN 4 KERNEL?' })}
            </div>
            <button
              type="button"
              onClick={startGame}
              className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-xl border-2 border-[#111116] bg-[#c8ff00] px-5 py-2.5 font-mono-tech text-xs font-black text-[#111116] shadow-[4px_4px_0px_#ff2e88] transition-transform hover:scale-105"
            >
              {gameOver ? <RotateCcw className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              <span>{gameOver ? t({ ko: '다시 플레이', en: 'PLAY AGAIN' }) : t({ ko: '아케이드 시작!', en: 'START ARCADE!' })}</span>
            </button>
          </div>
        )}
      </div>

      {/* Mobile Thumb Pads */}
      <div className="mt-3 grid grid-cols-2 gap-3 sm:hidden">
        <button
          type="button"
          onTouchStart={() => (stateRef.current.keys.left = true)}
          onTouchEnd={() => (stateRef.current.keys.left = false)}
          onMouseDown={() => (stateRef.current.keys.left = true)}
          onMouseUp={() => (stateRef.current.keys.left = false)}
          className="flex items-center justify-center gap-2 rounded-xl border-2 border-[#00f0ff]/50 bg-[#11131e] py-3 font-mono-tech text-xs font-black text-[#00f0ff] active:bg-[#00f0ff] active:text-[#111116]"
        >
          <ArrowLeft className="h-4 w-4" />
          LEFT
        </button>
        <button
          type="button"
          onTouchStart={() => (stateRef.current.keys.right = true)}
          onTouchEnd={() => (stateRef.current.keys.right = false)}
          onMouseDown={() => (stateRef.current.keys.right = true)}
          onMouseUp={() => (stateRef.current.keys.right = false)}
          className="flex items-center justify-center gap-2 rounded-xl border-2 border-[#00f0ff]/50 bg-[#11131e] py-3 font-mono-tech text-xs font-black text-[#00f0ff] active:bg-[#00f0ff] active:text-[#111116]"
        >
          RIGHT
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  )
}
