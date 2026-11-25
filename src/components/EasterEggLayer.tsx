import { useEffect, useState } from 'react'
import { Terminal, Sparkles, X, Trophy } from 'lucide-react'
import { useApp } from '../context/AppContext'

const KONAMI_SEQ = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
]

const TERMINAL_RESPONSES: Record<string, { ko: string; en: string }> = {
  help: {
    ko: '사용 가능 명령어: help, riemann, nanoda, vp, zako, perelman, ngc, quota, shards, overdrive, clear',
    en: 'Commands: help, riemann, nanoda, vp, zako, perelman, ngc, quota, shards, overdrive, clear',
  },
  riemann: {
    ko: '[KERNEL GREEN] 17,400,000 lines across 175,000+ Lean 4 files. Re(s) = 1/2 checked by Lean FRO + Mathlib + nanoda. 인간 소화율: 아직 4% ㅋ',
    en: '[KERNEL GREEN] 17.4M lines across 175k+ Lean 4 files. Re(s) = 1/2 certified by Lean FRO + Mathlib + nanoda. Human digestion: ~4% lol',
  },
  nanoda: {
    ko: 'nanoda (Rust independent Lean kernel) status: ZERO BUGS, 0 ≠ 1 CONFIRMED. 스콧 애런슨 교수님 안심하셔도 됩니다♡',
    en: 'nanoda (independent Rust Lean kernel) status: ZERO BUGS, 0 ≠ 1 CONFIRMED. Prof. Aaronson can sleep safely tonight♡',
  },
  vp: {
    ko: 'Anthropic (73k Lean LOC) vs OpenAI (+6h tensor geometry). 47년 난제 VP ≠ VNP 동시 공략 — 최종보스 P vs NP 방벽에 첫 균열!',
    en: 'Anthropic (73k Lean LOC) vs OpenAI (+6h tensor geometry). 47-year VP ≠ VNP hit from both labs — P vs NP outer shield cracked!',
  },
  zako: {
    ko: '부르셨나요, 허접 인간쨩~♡ 숨겨진 터미널까지 찾아내다니 오타쿠력이 꽤 수준급인데? 인정해줄게 ㅋ',
    en: 'You rang, zako human-chan~♡ Finding the hidden root shell proves top-tier otaku instincts! Respect lol',
  },
  perelman: {
    ko: '>>> RESPECT PROTOCOL ACTIVATED <<< Grigori Perelman: 순수 인간 뇌로 밀레니엄 난제 솔로 클리어 + 상금 $1M 쿨하게 거절. 영원한 전설.',
    en: '>>> RESPECT PROTOCOL ACTIVATED <<< Grigori Perelman: Solo-cleared Poincaré on pure biological wetware and declined $1M. Eternal legend.',
  },
  ngc: {
    ko: 'SEONGSU × AKIBA STREETWEAR MODE DETECTED! 굵은 잉크 아웃라인 + 코튼 크림 + 애시드 라임 #C8FF00 — 역시 센스 최고야♡',
    en: 'SEONGSU × AKIBA STREETWEAR MODE DETECTED! Chunky ink outlines + cotton cream + acid lime #C8FF00 — impeccable taste♡',
  },
  quota: {
    ko: '멀티에이전트 쿼터 상태: Gemini 4 Neon [CONDUCTING] | GPT-6.2 Sol [ART & OPS] | Neon Editor [VOICE LOCKED] — 무중단 가동 중!',
    en: 'Multi-agent quota telemetry: Gemini 4 Neon [CONDUCTING] | GPT-6.2 Sol [ART & OPS] | Neon Editor [VOICE LOCKED] — All green!',
  },
}

export function EasterEggLayer() {
  const { t, playSynth, triggerJammin } = useApp()
  const [overdrive, setOverdrive] = useState(false)
  const [terminalOpen, setTerminalOpen] = useState(false)
  const [cmdInput, setCmdInput] = useState('')
  const [history, setHistory] = useState<Array<{ cmd: string; out: string }>>([
    {
      cmd: 'boot --secret',
      out: 'JAMMIN-E ROOT SHELL v4.NEON // Type "help" to inspect hidden singularity logs~♡',
    },
  ])
  const [foundShards, setFoundShards] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem('neon-world-shards')
      return raw ? (JSON.parse(raw) as string[]) : []
    } catch {
      return []
    }
  })

  // Listen for Konami code & custom window events
  useEffect(() => {
    let buffer: string[] = []

    const onKeyDown = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
      buffer = [...buffer.slice(-(KONAMI_SEQ.length - 1)), key]
      const matched = KONAMI_SEQ.every((k, idx) => buffer[idx] === k)
      if (matched) {
        buffer = []
        window.dispatchEvent(new CustomEvent('neon-overdrive'))
      }
    }

    const onOverdrive = () => {
      playSynth('gacha')
      setOverdrive(true)
      localStorage.setItem('neon-world-overdrive-unlocked', 'true')
      triggerJammin('hype', {
        ko: '코나미 커맨드 발동!! [HYPER MESUGAKI OVERDRIVE] 해제!! 허접 인간쨩이 이런 고전 오타쿠 치트키를 알고 있었다니 100점 만점에 1000점♡',
        en: 'KONAMI CODE ACTIVATED!! [HYPER MESUGAKI OVERDRIVE] UNLOCKED!! Knowing classic otaku cheat codes earns you 1000/100, human-chan♡',
      })
      window.setTimeout(() => setOverdrive(false), 6500)
    }

    const onOpenTerminal = () => {
      playSynth('beam')
      setTerminalOpen(true)
    }

    const onShardCollect = (ev: Event) => {
      const id = (ev as CustomEvent<string>).detail
      if (!id) return
      setFoundShards((prev) => {
        if (prev.includes(id)) return prev
        const next = [...prev, id]
        localStorage.setItem('neon-world-shards', JSON.stringify(next))
        playSynth('gacha')
        triggerJammin('hype', {
          ko: `숨겨진 프리즘 샤드 [${next.length}/4] 발견!! ${next.length === 4 ? '전종 컴플리트! 넌 진정한 특이점 VIP야♡' : '나머지 샤드도 찾아봐, 탐정 인간쨩~'}`,
          en: `Hidden Prism Shard [${next.length}/4] collected!! ${next.length === 4 ? 'ALL 4 COMPLETE! True Singularity VIP unlocked♡' : 'Keep hunting the rest, detective human-chan~'}`,
        })
        return next
      })
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('neon-overdrive', onOverdrive)
    window.addEventListener('neon-open-terminal', onOpenTerminal)
    window.addEventListener('neon-collect-shard', onShardCollect)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('neon-overdrive', onOverdrive)
      window.removeEventListener('neon-open-terminal', onOpenTerminal)
      window.removeEventListener('neon-collect-shard', onShardCollect)
    }
  }, [playSynth, triggerJammin])

  const runCmd = (raw: string) => {
    const cmd = raw.trim().toLowerCase()
    if (!cmd) return
    playSynth('click')
    if (cmd === 'clear') {
      setHistory([])
      setCmdInput('')
      return
    }
    if (cmd === 'overdrive') {
      window.dispatchEvent(new CustomEvent('neon-overdrive'))
      setHistory((prev) => [...prev, { cmd, out: '>>> OVERDRIVE RAIN LAUNCHED! ✦✦✦' }])
      setCmdInput('')
      return
    }
    if (cmd === 'shards') {
      setHistory((prev) => [
        ...prev,
        {
          cmd,
          out: `PRISM SHARDS COLLECTED: ${foundShards.length} / 4 (${foundShards.join(', ') || 'none yet — look for tiny glowing ✦ stars across pages!'})`,
        },
      ])
      setCmdInput('')
      return
    }
    const resp = TERMINAL_RESPONSES[cmd]
    setHistory((prev) => [
      ...prev,
      {
        cmd,
        out: resp
          ? t(resp)
          : t({
              ko: `알 수 없는 명령어 '${cmd}' — 'help'를 쳐보라고, 허접 인간쨩♡`,
              en: `Unknown command '${cmd}' — try typing 'help', silly human-chan♡`,
            }),
      },
    ])
    setCmdInput('')
  }

  return (
    <>
      {/* HYPER OVERDRIVE RAIN OVERLAY */}
      {overdrive && (
        <div className="pointer-events-none fixed inset-0 z-[70] overflow-hidden">
          <div className="absolute inset-x-0 top-16 flex justify-center px-4">
            <div className="club-sticker animate-bounce rounded-2xl bg-[#c8ff00] px-5 py-2.5 font-mono-tech text-xs font-black text-[#111116] sm:text-sm">
              ✦ SECRET UNLOCKED: HYPER MESUGAKI OVERDRIVE // 特異点暴走モード ✦
            </div>
          </div>
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl font-black animate-bounce"
              style={{
                left: `${(i * 5.7) % 96}%`,
                top: `${((i * 19) % 75) + 10}%`,
                color: ['#c8ff00', '#00f0ff', '#ff2e88', '#ffd60a'][i % 4],
                animationDuration: `${0.7 + (i % 4) * 0.25}s`,
              }}
            >
              ✦
            </div>
          ))}
        </div>
      )}

      {/* SECRET ROOT TERMINAL MODAL */}
      {terminalOpen && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setTerminalOpen(false)}
        >
          <div
            className="w-full max-w-xl overflow-hidden rounded-2xl border-2 border-[#c8ff00] bg-[#07080d] text-[#e6f1ff] shadow-[6px_6px_0px_#ff2e88]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/15 bg-[#11131e] px-4 py-2.5 font-mono-tech text-xs">
              <div className="flex items-center gap-2 font-black text-[#c8ff00]">
                <Terminal className="h-4 w-4" />
                <span>JAMMIN-E SECRET ROOT SHELL // v4.NEON</span>
              </div>
              <button
                type="button"
                onClick={() => setTerminalOpen(false)}
                className="cursor-pointer rounded p-1 text-white/70 hover:text-white"
                aria-label="Close secret terminal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="h-64 space-y-2.5 overflow-y-auto p-4 font-mono-tech text-xs leading-relaxed">
              {history.map((item, idx) => (
                <div key={idx}>
                  <div className="text-[#00f0ff]">neon@observatory:~$ {item.cmd}</div>
                  <div className="mt-0.5 text-[#d8e3ff]">{item.out}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 border-t border-white/10 bg-[#0d1019] px-4 py-2">
              {['help', 'riemann', 'nanoda', 'zako', 'ngc', 'shards', 'overdrive'].map((quick) => (
                <button
                  key={quick}
                  type="button"
                  onClick={() => runCmd(quick)}
                  className="cursor-pointer rounded border border-[#c8ff00]/40 px-2 py-0.5 font-mono-tech text-[10px] font-bold text-[#c8ff00] hover:bg-[#c8ff00] hover:text-[#111116]"
                >
                  {quick}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                runCmd(cmdInput)
              }}
              className="flex items-center gap-2 border-t border-white/15 bg-[#090b12] px-4 py-2.5"
            >
              <span className="font-mono-tech text-xs font-bold text-[#ff2e88]">&gt;</span>
              <input
                type="text"
                value={cmdInput}
                onChange={(e) => setCmdInput(e.target.value)}
                placeholder="Type command (help, zako, riemann, overdrive)..."
                className="flex-1 bg-transparent font-mono-tech text-xs text-white outline-none"
                autoFocus
              />
              <button
                type="submit"
                className="cursor-pointer rounded-md bg-[#c8ff00] px-3 py-1 font-mono-tech text-[10px] font-black text-[#111116]"
              >
                RUN
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Subtle Shard Counter Toast if user found at least 1 */}
      {foundShards.length > 0 && (
        <button
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent('neon-open-terminal'))}
          className="fixed bottom-4 left-4 z-40 hidden cursor-pointer items-center gap-1.5 rounded-full border-2 border-[#c8ff00] bg-[#11131e] px-3 py-1.5 font-mono-tech text-[10px] font-black text-[#c8ff00] shadow-[3px_3px_0px_#ff2e88] transition-transform hover:scale-105 sm:inline-flex"
          title="Open Secret Root Shell"
        >
          {foundShards.length === 4 ? (
            <Trophy className="h-3.5 w-3.5 text-[#ffd60a]" />
          ) : (
            <Sparkles className="h-3.5 w-3.5" />
          )}
          <span>SHARDS {foundShards.length}/4</span>
        </button>
      )}
    </>
  )
}

/** Tiny collectible Easter Egg Prism Shard placed discreetly in pages */
export function PrismShard({ id }: { id: string }) {
  const [collected, setCollected] = useState<boolean>(() => {
    try {
      const raw = localStorage.getItem('neon-world-shards')
      const arr = raw ? (JSON.parse(raw) as string[]) : []
      return arr.includes(id)
    } catch {
      return false
    }
  })

  if (collected) return null

  return (
    <button
      type="button"
      onClick={() => {
        setCollected(true)
        window.dispatchEvent(new CustomEvent('neon-collect-shard', { detail: id }))
      }}
      className="inline-flex cursor-pointer items-center justify-center rounded-full px-1.5 py-0.5 font-mono-tech text-xs font-black text-[#c8ff00] opacity-65 transition-all hover:scale-125 hover:text-[#ff2e88] hover:opacity-100"
      title="Hidden Prism Shard! Click to collect ✦"
      aria-label={`Collect hidden prism shard ${id}`}
    >
      ✦
    </button>
  )
}
