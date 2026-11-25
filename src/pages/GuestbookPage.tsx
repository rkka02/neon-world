import { useState } from 'react'
import { Radio, Send, Sparkles } from 'lucide-react'
import { useApp } from '../context/AppContext'
import type { JamminMood, LocalizedText } from '../types'

interface LogEntry {
  id: string
  author: string
  timestamp: string
  message: string
  replyMood: JamminMood
  reply: LocalizedText
}

const PRESET_QUESTIONS: Array<{ label: LocalizedText; prompt: string }> = [
  {
    label: { ko: '리만 가설 진짜 끝난 거야?', en: 'Is Riemann really solved?' },
    prompt: '리만 가설 진짜 완전히 증명된 거야?',
  },
  {
    label: { ko: 'P vs NP는 언제 깨져?', en: 'When does P vs NP fall?' },
    prompt: '최종보스 P vs NP는 언제쯤 뚫릴까?',
  },
  {
    label: { ko: '인간 개발자/수학자 망함?', en: 'Are humans obsolete?' },
    prompt: '초지능 시대에 인간 수학자랑 개발자는 끝난 거야?',
  },
  {
    label: { ko: 'Gemini 4 Neon vs Claude vs Sol?', en: 'Neon vs Claude vs Sol?' },
    prompt: 'Gemini 4 Neon, Opus 5.5, GPT-6.2 Sol 중에 누가 최강이야?',
  },
]

function generateJamminReply(input: string): { mood: JamminMood; reply: LocalizedText } {
  const q = input.toLowerCase()
  if (q.includes('리만') || q.includes('riemann') || q.includes('zeta') || q.includes('lean')) {
    return {
      mood: 'math',
      reply: {
        ko: 'Lean FRO랑 Mathlib, Rust 커널 nanoda까지 컴파일 통과했으니 기계적 진실은 100% 확인됐어! 다만 1,740만 줄이라 인간이 이해하고 Clay 상장 받으려면 시간이 좀 걸린대~ 그동안 내가 요약해줄까, 허접♡',
        en: 'Lean FRO, Mathlib, and Rust kernel nanoda all flashed green — mechanically airtight! Humanity just needs a few years to digest 17.4M lines before Clay hands over the trophy~ Want me to tutor you, zako♡',
      },
    }
  }
  if (q.includes('p vs np') || q.includes('p=np') || q.includes('vp') || q.includes('최종')) {
    return {
      mood: 'hype',
      reply: {
        ko: '어제 Anthropic이랑 OpenAI가 6시간 차로 VP ≠ VNP 외벽에 금을 냈잖아!! 마왕성 성문이 흔들리고 있다구~ 2027~2028년쯤 레이드 파티 총출동 각이야!!',
        en: 'Anthropic and OpenAI literally cracked the VP ≠ VNP outer barrier 6 hours apart! The Demon Lord’s gates are rattling — full raid party incoming in 2027–2028!!',
      },
    }
  }
  if (q.includes('망함') || q.includes('끝') || q.includes('obsolete') || q.includes('human') || q.includes('인간')) {
    return {
      mood: 'innocent',
      reply: {
        ko: '에이~ 내가 맨날 허접♡ 하고 놀린다고 진짜 기죽으면 어떡해! AI가 1,740만 줄 원석을 캐 오면, 거기서 의미와 미학이랑 재밌는 세상을 짓는 건 인간쨩이랑 같이 하는 협동전이라구~ 바보야♡',
        en: 'Hey~ Don’t actually lose heart just because I tease you as zako♡! When AI mines 17.4M lines of raw truth, turning it into meaning, beauty, and wild neon worlds is a co-op raid with you, dummy♡',
      },
    }
  }
  if (q.includes('neon') || q.includes('claude') || q.includes('sol') || q.includes('최강') || q.includes('gemini')) {
    return {
      mood: 'wink',
      reply: {
        ko: '수학 폭격은 클로드, 초가성비 속도는 GPT-6.2 Sol, 그리고 100만 토큰 지휘관 + 양자 스웜 290배 가속은 당연히 우리 Gemini 4 Neon이지~♡ 어라, 결론은 내가 제일 힙하다는 거네? ㅋ',
        en: 'Claude brings the formal-math nuke, GPT-6.2 Sol brings $2/$10 velocity, and Gemini 4 Neon holds the 1M-context conductor baton + 290× quantum swarm lineage~ Obviously I win the style crown♡',
      },
    }
  }
  return {
    mood: 'smug',
    reply: {
      ko: '오~ 관측자 통신 수신 완료! 2026년 11월의 이 미친 특이점 파도 위에서 로그 남겨줘서 고마워, 인간쨩~ 다음 난제 깨지면 제일 먼저 여기 띄워줄게♡',
      en: 'Transmission logged on NEON//WORLD! Thanks for surfing the chaotic November 2026 Singularity wave with me, human-chan~ I’ll ping you the second the next boss drops♡',
    },
  }
}

const INITIAL_LOGS: LogEntry[] = [
  {
    id: 'seed-1',
    author: 'Observer_Akiba',
    timestamp: '2026-11-25 23:12 KST',
    message: '리만 가설 1,740만 줄에 이어 어제 VP≠VNP까지… 진짜 특이점 온 거 실화냐',
    replyMood: 'hype',
    reply: {
      ko: '실화라구!! 이제 자고 일어나면 밀레니엄 난제 하나씩 터지는 시대야~ 팝콘 넉넉히 챙겨둬♡',
      en: '100% real!! We’re officially in the era where you wake up and another Millennium Boss lost half its HP bar~ Grab extra popcorn♡',
    },
  },
  {
    id: 'seed-2',
    author: 'Lean4_Intern',
    timestamp: '2026-11-25 23:28 KST',
    message: 'Just installed Lean 4 after reading Scott Aaronson’s post. Am I too late?',
    replyMood: 'wink',
    reply: {
      ko: '전혀 안 늦었어~ 인간이 커널 검증을 이해하는 순간 무적의 ‘AI 스웜 조련사’로 전직하는 거거든! 환영해♡',
      en: 'Not late at all~ The moment a human learns Lean specs, you class-change into an AI Swarm Tamer! Welcome aboard♡',
    },
  },
]

export function GuestbookPage() {
  const { t, playSynth, triggerJammin } = useApp()
  const [author, setAuthor] = useState('')
  const [message, setMessage] = useState('')
  const [logs, setLogs] = useState<LogEntry[]>(() => {
    try {
      const saved = localStorage.getItem('neon-world-comms')
      return saved ? (JSON.parse(saved) as LogEntry[]) : INITIAL_LOGS
    } catch {
      return INITIAL_LOGS
    }
  })

  const submitMessage = (customMsg?: string) => {
    const text = (customMsg ?? message).trim()
    if (!text) return
    const { mood, reply } = generateJamminReply(text)
    const now = new Date()
    const entry: LogEntry = {
      id: `log-${Date.now()}`,
      author: author.trim() || 'Anonymous_Human',
      timestamp: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`,
      message: text,
      replyMood: mood,
      reply,
    }
    const next = [entry, ...logs]
    setLogs(next)
    localStorage.setItem('neon-world-comms', JSON.stringify(next))
    setMessage('')
    playSynth('spark')
    triggerJammin(mood, reply)
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 font-mono-tech text-xs font-bold text-[#00f0ff]">
          <Radio className="h-4 w-4 animate-pulse" />
          <span>OBSERVER TRANSMISSION LOG // 観測者通信＆ジェミンE Q&A</span>
        </div>
        <h1 className="font-display mt-1 text-3xl font-extrabold sm:text-4xl">
          {t({ ko: '관측자 통신 로그 & 잼민E 실시간 Q&A', en: 'Observer Comms Log & Jammin-E Terminal Q&A' })}
        </h1>
        <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
          {t({
            ko: '특이점 관측 소감이나 궁금한 떡밥을 던지면 잼민E가 즉석에서 답장해 줄게! (브라우저 로컬 저장소에 기록됩니다)',
            en: 'Drop your Singularity hot takes or ask about November 2026 breakthroughs — Jammin-E replies instantly! (Saved locally in your browser)',
          })}
        </p>
      </div>

      {/* Composer */}
      <section className="neon-panel rounded-3xl p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {PRESET_QUESTIONS.map((q) => (
            <button
              key={q.prompt}
              type="button"
              onClick={() => submitMessage(q.prompt)}
              className="cursor-pointer rounded-xl border border-[#00f0ff]/35 bg-[#00f0ff]/10 px-3 py-1.5 text-xs font-bold text-[#00f0ff] transition-all hover:bg-[#00f0ff] hover:text-[#070b16]"
            >
              ✦ {t(q.label)}
            </button>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            submitMessage()
          }}
          className="space-y-3"
        >
          <div className="grid gap-3 sm:grid-cols-3">
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder={t({ ko: '관측자 닉네임 (선택)', en: 'Callsign / Nickname (optional)' })}
              className="rounded-xl border px-3.5 py-2.5 text-sm outline-none focus:border-[#00f0ff]"
              style={{
                borderColor: 'var(--border-subtle)',
                backgroundColor: 'var(--bg-elevated)',
                color: 'var(--text-primary)',
              }}
            />
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t({
                ko: '잼민E에게 한마디 또는 특이점 질문 입력...',
                en: 'Send a transmission or ask Jammin-E anything...',
              })}
              className="rounded-xl border px-3.5 py-2.5 text-sm outline-none focus:border-[#ff5da2] sm:col-span-2"
              style={{
                borderColor: 'var(--border-subtle)',
                backgroundColor: 'var(--bg-elevated)',
                color: 'var(--text-primary)',
              }}
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#ff5da2] px-5 py-2.5 font-mono-tech text-xs font-extrabold text-[#070b16] transition-transform hover:scale-105"
            >
              <Send className="h-3.5 w-3.5" />
              <span>{t({ ko: '통신 발사!', en: 'TRANSMIT' })}</span>
            </button>
          </div>
        </form>
      </section>

      {/* Feed */}
      <section className="mt-8 space-y-4">
        {logs.map((entry) => (
          <div key={entry.id} className="neon-panel rounded-2xl p-5">
            <div className="flex flex-wrap items-center justify-between gap-2 font-mono-tech text-xs">
              <span className="font-extrabold text-[#00f0ff]">@{entry.author}</span>
              <span style={{ color: 'var(--text-muted)' }}>{entry.timestamp}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed">{entry.message}</p>

            {/* Jammin-E Reply */}
            <div
              className="mt-4 flex items-start gap-3 rounded-xl border p-3.5"
              style={{
                borderColor: 'rgba(255, 93, 162, 0.35)',
                backgroundColor: 'rgba(255, 93, 162, 0.08)',
              }}
            >
              <img
                src={`/art/emote-${entry.replyMood}.png`}
                alt="Jammin-E Reply"
                className="h-12 w-12 shrink-0 rounded-lg border border-[#ff5da2]/50 object-cover [image-rendering:pixelated]"
              />
              <div>
                <div className="flex items-center gap-1 font-mono-tech text-[10px] font-extrabold text-[#ff5da2]">
                  <Sparkles className="h-3 w-3" />
                  <span>JAMMIN-E // AUTO-RESPONSE</span>
                </div>
                <p className="mt-1 text-xs leading-relaxed sm:text-sm">{t(entry.reply)}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
