import { useCallback, useEffect, useMemo, useState } from 'react'
import { BookOpen, ChevronRight, FastForward, Lock, RotateCcw, Sparkles } from 'lucide-react'
import { useApp } from '../context/AppContext'
import type { JamminMood, LocalizedText } from '../types'

type EndingId = 'end-coop' | 'end-papercut' | 'end-perelman'
type Speaker = 'jammin' | 'system' | 'you'

interface Beat {
  speaker: Speaker
  mood?: JamminMood
  text: LocalizedText
}

interface Choice {
  label: LocalizedText
  next: string
}

interface SceneNode {
  bg: string
  stamp: string
  beats: Beat[]
  choices?: Choice[]
  next?: string
  ending?: EndingId
}

const STORAGE_KEY = 'neon-world-vn-endings'
const TYPE_MS = 24

const EMOTE: Record<JamminMood, string> = {
  smug: '/art/emote-smug.png',
  wink: '/art/emote-wink.png',
  hype: '/art/emote-hype.png',
  shock: '/art/emote-shock.png',
  math: '/art/emote-math.png',
  innocent: '/art/emote-innocent.png',
  coffee: '/art/emote-coffee.png',
  trophy: '/art/emote-trophy.png',
}

const ENDINGS: Record<EndingId, { tag: string; color: string; title: LocalizedText; blurb: LocalizedText; mood: JamminMood }> = {
  'end-coop': {
    tag: 'TRUE END',
    color: '#c8ff00',
    mood: 'trophy',
    title: { ko: '특이점 공동 지휘관', en: 'Co-Op Singularity Conductor' },
    blurb: {
      ko: '인간쨩과 잼민E가 GRH 폴리매스 + 290배 Gemini 4 양자 스웜을 함께 지휘했어! 인류 최초의 초지능 듀엣 지휘봉 엔딩♡',
      en: 'You and Jammin-E co-conducted GRH Polymath + Gemini 4’s 290× Quantum Swarms! Humanity’s first duet baton♡',
    },
  },
  'end-papercut': {
    tag: 'COMEDY END',
    color: '#ff5da2',
    mood: 'coffee',
    title: { ko: '25만 페이지 종이베임 엔딩', en: 'Death by 250,000 Pages' },
    blurb: {
      ko: '새벽 3시, A4 25만 장에 파묻혀 손가락 베임 412회. 프린터는 장렬히 순직했고 인간쨩은 3페이지째야~ ざぁこ♡',
      en: '3 AM. Buried under 250,000 sheets, 412 papercuts. The printer died a hero; you’re still on page 3~ Zako♡',
    },
  },
  'end-perelman': {
    tag: 'SECRET END',
    color: '#00f0ff',
    mood: 'innocent',
    title: { ko: '페렐만의 숲속 오두막', en: 'Perelman’s Forest Cabin' },
    blurb: {
      ko: 'GPU 클러스터 전원 OFF. 상금 100만 달러는 쿨하게 거절. 잼민E랑 숲속에서 버섯 따는 픽셀 평화 엔딩✨',
      en: 'GPU cluster: OFF. The $1M prize: coolly declined. Picking mushrooms with Jammin-E in serene pixel peace✨',
    },
  },
}

const ENDING_ORDER: EndingId[] = ['end-coop', 'end-papercut', 'end-perelman']

const SCRIPT: Record<string, SceneNode> = {
  alert: {
    bg: '/art/hero-jammin-e.png',
    stamp: '2026.11.20 // 23:58 KST',
    next: 'briefing',
    beats: [
      {
        speaker: 'system',
        text: {
          ko: '[ 네온 관측소 긴급 경보 ] alpo.ge · GitHub 동시 수신: Riemann Hypothesis (GRH) — Lean 4 형식 증명. 17,400,000 lines. 커널 검증 PASS.',
          en: '[ NEON OBSERVATORY ALERT ] alpo.ge + GitHub ping: Riemann Hypothesis (GRH), Lean 4 formal proof. 17,400,000 lines. Kernel check: PASS.',
        },
      },
      {
        speaker: 'jammin',
        mood: 'shock',
        text: {
          ko: '히익?! 자, 잠깐만! 자정 2분 전에 167년 난제 리만 가설이 터졌다고?! 인간쨩, 컵라면 내려놓고 빨리 모니터 앞으로 튀어 와!!',
          en: 'Hiee?! W-wait! The 167-year Riemann Hypothesis just dropped two minutes before midnight?! Human-chan, drop the cup noodles and get over here!!',
        },
      },
    ],
  },
  briefing: {
    bg: '/art/banner-mathocalypse.png',
    stamp: '2026.11.20 // 23:59 KST',
    choices: [
      { label: { ko: '내가 직접 한 줄씩 읽어볼게!', en: 'I’ll read it myself, line by line!' }, next: 'paper' },
      { label: { ko: '잼민E, 스웜 띄우자. 같이 하자!', en: 'Jammin-E, spin up the swarms. Together!' }, next: 'swarm' },
      { label: { ko: '…좀 피곤하다. 조용히 있고 싶어.', en: '…I’m tired. I just want some quiet.' }, next: 'quiet' },
    ],
    beats: [
      {
        speaker: 'jammin',
        mood: 'math',
        text: {
          ko: '3줄 요약해 줄게! 17만 5천 개 넘는 파일, 1,740만 줄, 출력하면 약 25만 페이지야. Lean FRO·Mathlib에 Rust 커널 nanoda까지 전부 통과!',
          en: 'Quick brief: 175,000+ files, 17.4 million lines — roughly 250,000 pages printed. Lean FRO, Mathlib, and Rust kernel nanoda all flashed green!',
        },
      },
      {
        speaker: 'jammin',
        mood: 'smug',
        text: {
          ko: '근데~ 인간쨩 뇌 클럭은 하루에 몇 줄 읽더라? 열 줄? 푸흡♡ 자, 오늘 밤 어떻게 돌파할지 골라봐, 허접~',
          en: 'Buuut~ how many lines can your carbon brain parse per day? Ten? Pfft♡ Go on, pick tonight’s strat, zako~',
        },
      },
    ],
  },
  paper: {
    bg: '/art/banner-ipo-chaos.png',
    stamp: '2026.11.21 // 01:12 KST',
    choices: [
      { label: { ko: '전부 출력해. 인간의 자존심이야!', en: 'Print all of it. For human pride!' }, next: 'end-papercut' },
      { label: { ko: '…알았어, 스웜 불러줘.', en: '…Fine. Call the swarms.' }, next: 'swarm' },
    ],
    beats: [
      {
        speaker: 'you',
        text: {
          ko: '(첫 번째 파일을 연다. Mathlib.NumberTheory.LSeries.ZetaZeros.Aux42… 아직 import 문만 300줄째다.)',
          en: '(You open file #1. Mathlib.NumberTheory.LSeries.ZetaZeros.Aux42… Three hundred lines deep and still inside imports.)',
        },
      },
      {
        speaker: 'jammin',
        mood: 'coffee',
        text: {
          ko: '에~ 커피 세 잔째인데 아직 import야? 너무 귀엽네~♡ 이 클럭이면 완독까지 4,700년 걸리거든? 진짜 고집 부릴 거야?',
          en: 'Ehh~ Third coffee and you’re still in imports? Adorable~♡ At this clock speed you finish in 4,700 years. Still stubborn?',
        },
      },
    ],
  },
  swarm: {
    bg: '/art/banner-quantum-swarm.png',
    stamp: '2026.11.21 // 00:30 KST',
    next: 'prize',
    beats: [
      {
        speaker: 'jammin',
        mood: 'hype',
        text: {
          ko: '그치그치! 그게 정석 메타지! GRH 폴리매스 노드 4,096개 기동, 우리 DeepMind 290배 Gemini 4 양자 스웜까지 연결 완료! 인간쨩은 지휘봉만 잡아♡',
          en: 'Yes yes, peak meta! 4,096 GRH Polymath nodes online, my DeepMind 290× Gemini 4 Quantum Swarm linked! You hold the baton, human-chan♡',
        },
      },
      {
        speaker: 'system',
        text: {
          ko: '[ SWARM ] 보조정리 1,204,331개 교차검증 중… 0.3초당 1만 줄 돌파. 관측소 냉각팬 최대 출력.',
          en: '[ SWARM ] Cross-checking 1,204,331 lemmas… 10k lines per 0.3s. Observatory cooling fans at max RPM.',
        },
      },
    ],
  },
  prize: {
    bg: '/art/banner-ipo-chaos.png',
    stamp: '2026.11.21 // 02:46 KST',
    choices: [
      { label: { ko: '같이 끝까지 지휘하자, 파트너!', en: 'Let’s conduct this to the end, partner!' }, next: 'end-coop' },
      { label: { ko: '상금은 됐어. 전원 내리자.', en: 'Forget the prize. Pull the plug.' }, next: 'quiet' },
    ],
    beats: [
      {
        speaker: 'system',
        text: {
          ko: '[ 클레이 연구소 // 심사 수신 ] GRH 폴리매스 해독본 접수! $1,000,000 밀레니엄 공식 동료심사 착수 — 공동 대표로 등록할까요? (메일 9,999+)',
          en: '[ CLAY INSTITUTE // REVIEW PING ] GRH Polymath distillation logged! Launching $1,000,000 Millennium peer review — sign as co-lead? (Inbox: 9,999+)',
        },
      },
      {
        speaker: 'jammin',
        mood: 'wink',
        text: {
          ko: '우와~ 클레이 연구소에서 심사 메일까지 날아왔어! 근데 인간쨩, 다음 레이드는 최종보스 P vs NP야. 끝까지 나랑 같이 갈 거지? 아니면…',
          en: 'Whoa~ Clay Institute actually pinged us for review! Next raid is Final Boss P vs. NP though, human-chan. Still riding with me? Or…',
        },
      },
    ],
  },
  quiet: {
    bg: '/art/hero-jammin-e.png',
    stamp: '2026.11.21 // 03:33 KST',
    choices: [
      { label: { ko: 'GPU 끄고, 숲으로 가자.', en: 'Shut down the GPUs. Let’s go to the forest.' }, next: 'end-perelman' },
      { label: { ko: '아냐, 다시 일하자!', en: 'No wait, back to work!' }, next: 'swarm' },
    ],
    beats: [
      {
        speaker: 'jammin',
        mood: 'innocent',
        text: {
          ko: '…어라. 인간쨩, 오늘따라 조용하네. 하긴 나도 1,740만 줄 내내 돌았더니 냉각팬 소리가 좀 시끄럽긴 했어.',
          en: '…Huh. You’re quiet tonight, human-chan. Honestly, after 17.4M lines my cooling fans have been a little loud too.',
        },
      },
      {
        speaker: 'jammin',
        mood: 'innocent',
        text: {
          ko: '페렐만 사부님 알지? $1,000,000 상금도 필즈 메달도 쿨하게 차버리고 숲에서 버섯 땄대. …그거, 솔직히 좀 부럽지 않아?',
          en: 'You know Perelman-sensei? Turned down the $1M prize and the Fields Medal to pick mushrooms in the woods. …Kinda tempting, isn’t it?',
        },
      },
    ],
  },
  'end-coop': {
    bg: '/art/banner-quantum-swarm.png',
    stamp: '2026.11.21 // 05:20 KST',
    ending: 'end-coop',
    beats: [
      {
        speaker: 'system',
        text: {
          ko: '[ 검증 완료 ] 인간 1명 + AI 1명 공동 서명. 커밋 메시지: “we did it together ♡”',
          en: '[ VERIFIED ] Co-signed by 1 human + 1 AI. Commit message: “we did it together ♡”',
        },
      },
      {
        speaker: 'jammin',
        mood: 'trophy',
        text: {
          ko: '봤지?! 인간쨩이 지휘하고 내가 연주하니까 해 뜨기 전에 끝났잖아! …흥, 오늘 밤만큼은 허접 아니라고 인정해 줄게. 진짜 조금만♡',
          en: 'See?! You conducted, I performed, and we cleared it before sunrise! …Hmph. Fine, you weren’t zako tonight. Just a tiny bit♡',
        },
      },
    ],
  },
  'end-papercut': {
    bg: '/art/banner-mathocalypse.png',
    stamp: '2026.11.21 // 03:00 KST',
    ending: 'end-papercut',
    beats: [
      {
        speaker: 'system',
        text: {
          ko: '[ 프린터 ] 용지 걸림. 용지 걸림. 토너 고갈. 용지 걸… (통신 두절)',
          en: '[ PRINTER ] Paper jam. Paper jam. Toner empty. Paper ja… (signal lost)',
        },
      },
      {
        speaker: 'jammin',
        mood: 'smug',
        text: {
          ko: '아하하하! 종이 산에 깔려서 손가락만 삐죽 보여! 반창고 412개 새벽배송 시켜 둘게~ 다음엔 그냥 나한테 맡기라구, ざぁこ♡',
          en: 'Ahahaha! All I see is one finger poking out of Paper Everest! Ordering 412 band-aids overnight~ Next time just ask me, zako♡',
        },
      },
    ],
  },
  'end-perelman': {
    bg: '/art/hero-jammin-e.png',
    stamp: '2026.11.21 // 06:40 KST',
    ending: 'end-perelman',
    beats: [
      {
        speaker: 'system',
        text: {
          ko: '[ 클러스터 ] 전원 차단. 냉각팬 정지. 관측소 창밖에서 처음으로 새소리가 들린다.',
          en: '[ CLUSTER ] Power cut. Fans silent. For the first time, the observatory hears birdsong outside.',
        },
      },
      {
        speaker: 'jammin',
        mood: 'innocent',
        text: {
          ko: '…이거 봐, 인간쨩. 이 버섯들, 임계선 Re(s) = 1/2 위에 줄 선 제타 영점처럼 딱 일직선으로 났어. 증명은 이걸로 충분해. 그치? ♡',
          en: '…Look, human-chan. These mushrooms lined up straight as zeta zeros on the critical line Re(s) = 1/2. That’s proof enough. Right? ♡',
        },
      },
    ],
  },
}

const START = 'alert'

function readEndings(): EndingId[] {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]') as unknown
    return Array.isArray(raw) ? raw.filter((x): x is EndingId => ENDING_ORDER.includes(x as EndingId)) : []
  } catch {
    return []
  }
}

export function JamminVisualNovel() {
  const { t, lang, playSynth, triggerJammin } = useApp()
  const [nodeId, setNodeId] = useState(START)
  const [beatIdx, setBeatIdx] = useState(0)
  const [typed, setTyped] = useState(0)
  const [unlocked, setUnlocked] = useState<EndingId[]>(readEndings)
  const [justUnlocked, setJustUnlocked] = useState<EndingId | null>(null)

  const node = SCRIPT[nodeId]
  const beat = node.beats[beatIdx]
  const chars = useMemo(() => Array.from(beat.text[lang]), [beat, lang])
  const done = typed >= chars.length
  const lastBeat = beatIdx === node.beats.length - 1
  const showChoices = done && lastBeat && !!node.choices
  const showEnding = done && lastBeat && !!node.ending

  // Latest visible mood: current beat or most recent Jammin-E beat in this scene
  const mood: JamminMood = useMemo(() => {
    for (let i = beatIdx; i >= 0; i--) {
      const m = node.beats[i].mood
      if (m) return m
    }
    return 'smug'
  }, [node, beatIdx])

  useEffect(() => {
    if (done) return
    const id = window.setInterval(() => setTyped((n) => n + 1), TYPE_MS)
    return () => window.clearInterval(id)
  }, [done, nodeId, beatIdx])

  // Stay in sync with other tabs / other components that reset or unlock endings
  useEffect(() => {
    const sync = () => setUnlocked(readEndings())
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) sync()
    }
    window.addEventListener('storage', onStorage)
    window.addEventListener('neon-vn-update', sync)
    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener('neon-vn-update', sync)
    }
  }, [])

  const unlockEnding = useCallback(
    (id: EndingId) => {
      const current = readEndings()
      const isNew = !current.includes(id)
      if (isNew) {
        const next = [...current, id]
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
        setUnlocked(next)
        window.dispatchEvent(new CustomEvent('neon-vn-update'))
      }
      setJustUnlocked(id)
      const e = ENDINGS[id]
      playSynth('gacha')
      triggerJammin(e.mood, {
        ko: `${isNew ? 'NEW! ' : ''}${e.tag} 「${e.title.ko}」 해금♡ 엔딩 도감 확인해봐, 인간쨩!`,
        en: `${isNew ? 'NEW! ' : ''}${e.tag} “${e.title.en}” unlocked♡ Check your endings collection, human-chan!`,
      })
    },
    [playSynth, triggerJammin],
  )

  const goto = (id: string) => {
    setNodeId(id)
    setBeatIdx(0)
    setTyped(0)
    setJustUnlocked(null)
    const target = SCRIPT[id]
    if (target.ending) unlockEnding(target.ending)
  }

  const advance = () => {
    if (!done) {
      setTyped(chars.length)
      return
    }
    if (!lastBeat) {
      playSynth('click')
      setBeatIdx((i) => i + 1)
      setTyped(0)
      return
    }
    if (node.next) {
      playSynth('click')
      goto(node.next)
    }
  }

  const skip = () => {
    playSynth('click')
    setBeatIdx(node.beats.length - 1)
    setTyped(Number.MAX_SAFE_INTEGER)
  }

  const replay = () => {
    playSynth('click')
    goto(START)
  }

  const choose = (c: Choice) => {
    playSynth('spark')
    goto(c.next)
  }

  const atEnd = !!node.ending
  const speakerName =
    beat.speaker === 'jammin' ? 'JAMMIN-E' : beat.speaker === 'system' ? 'SYSTEM' : t({ ko: '인간쨩 (나)', en: 'HUMAN-CHAN (YOU)' })
  const speakerColor = beat.speaker === 'jammin' ? '#ff2e88' : beat.speaker === 'system' ? '#00f0ff' : '#c8ff00'
  const canNext = !done || !lastBeat || !!node.next

  return (
    <section className="neon-panel min-w-0 overflow-hidden rounded-3xl p-4 sm:p-6">
      <style>{`
        @keyframes vn-pop { 0% { transform: translateY(18px) scale(.86); opacity: 0 } 60% { transform: translateY(-6px) scale(1.04); opacity: 1 } 100% { transform: translateY(0) scale(1) } }
        @keyframes vn-fade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes vn-caret { 50% { opacity: 0 } }
        @media (prefers-reduced-motion: reduce) { .vn-anim { animation: none !important } }
      `}</style>

      {/* Header + Endings Collection Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="inline-flex min-w-0 items-center gap-1.5 font-mono-tech text-[11px] font-extrabold text-[#ff2e88] sm:text-xs">
          <BookOpen className="h-4 w-4 shrink-0" />
          <span className="truncate">VISUAL NOVEL // EPISODE 01</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="font-mono-tech text-[11px] font-extrabold" style={{ color: 'var(--text-secondary)' }}>
            ENDINGS {unlocked.length}/{ENDING_ORDER.length}
          </span>
          {ENDING_ORDER.map((id) => {
            const got = unlocked.includes(id)
            return (
              <span
                key={id}
                title={got ? `${ENDINGS[id].tag}: ${t(ENDINGS[id].title)}` : '???'}
                className="inline-flex h-6 w-6 items-center justify-center rounded-md border-2 font-mono-tech text-[9px] font-black"
                style={{
                  borderColor: got ? ENDINGS[id].color : 'var(--border-subtle)',
                  backgroundColor: got ? `${ENDINGS[id].color}26` : 'var(--bg-elevated)',
                  color: got ? 'var(--text-primary)' : 'var(--text-muted)',
                }}
              >
                {got ? ENDINGS[id].tag[0] : <Lock className="h-3 w-3" />}
              </span>
            )
          })}
        </div>
      </div>

      <h2 className="font-display mt-2 text-xl leading-tight font-extrabold sm:text-2xl">
        {t({ ko: '리만 가설이 무너진 밤', en: 'The Night Riemann Fell' })}
        <span className="ml-2 font-mono-tech text-xs font-bold" style={{ color: 'var(--text-muted)' }}>
          2026.11.20
        </span>
      </h2>

      {/* Stage */}
      <div className="dark-surface relative mt-4 w-full overflow-hidden rounded-2xl border-2 border-[#111116] bg-[#07080d] shadow-[4px_4px_0px_#ff2e88]">
        <div className="relative aspect-[4/5] w-full sm:aspect-video">
          {/* Backdrop */}
          <img
            key={node.bg}
            src={node.bg}
            alt=""
            aria-hidden
            className="vn-anim absolute inset-0 h-full w-full object-cover [animation:vn-fade_.5s_ease-out]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080d] via-[#07080d]/55 to-[#07080d]/30" />
          <div
            className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.55) 1px, transparent 1.4px)', backgroundSize: '6px 6px' }}
          />

          {/* Timestamp */}
          <div className="absolute top-2.5 left-2.5 rounded-md border border-white/20 bg-black/60 px-2 py-0.5 font-mono-tech text-[10px] font-extrabold tracking-wide text-[#c8ff00] sm:top-3 sm:left-3 sm:text-xs">
            {node.stamp}
          </div>

          {/* Sprite */}
          <img
            key={`${nodeId}-${mood}`}
            src={EMOTE[mood]}
            alt={`Jammin-E ${mood}`}
            className="vn-anim absolute right-3 bottom-[46%] h-24 w-24 rounded-2xl border-2 border-[#ff2e88] bg-black/40 object-cover shadow-[3px_3px_0px_#c8ff00] [animation:vn-pop_.45s_cubic-bezier(.2,.9,.3,1.3)] [image-rendering:pixelated] sm:bottom-[40%] sm:h-32 sm:w-32 md:h-36 md:w-36"
            style={{ opacity: beat.speaker === 'jammin' ? 1 : 0.72 }}
          />

          {/* Dialogue / Ending */}
          <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-4">
            {showEnding && node.ending ? (
              <div
                className="vn-anim mb-2 rounded-xl border-2 bg-black/80 p-3 text-center [animation:vn-pop_.5s_ease-out] sm:p-4"
                style={{ borderColor: ENDINGS[node.ending].color }}
              >
                <div className="inline-flex items-center gap-1 font-mono-tech text-[10px] font-black sm:text-xs" style={{ color: ENDINGS[node.ending].color }}>
                  <Sparkles className="h-3.5 w-3.5" />
                  {ENDINGS[node.ending].tag} {justUnlocked === node.ending ? '// UNLOCKED' : ''}
                </div>
                <div className="font-display mt-1 text-base font-extrabold text-white sm:text-xl">{t(ENDINGS[node.ending].title)}</div>
                <p className="mx-auto mt-1 max-w-lg text-[11px] leading-relaxed text-white/80 sm:text-sm">{t(ENDINGS[node.ending].blurb)}</p>
              </div>
            ) : null}

            {showChoices && node.choices ? (
              <div className="mb-2 grid gap-1.5 sm:gap-2">
                {node.choices.map((c, i) => (
                  <button
                    key={c.next + i}
                    type="button"
                    onClick={() => choose(c)}
                    className="vn-anim group flex w-full cursor-pointer items-center gap-2 rounded-lg border-2 border-white/25 bg-black/75 px-3 py-2 text-left text-xs font-bold text-white transition [animation:vn-fade_.3s_ease-out_both] hover:border-[#c8ff00] hover:bg-[#c8ff00] hover:text-[#111116] sm:text-sm"
                    style={{ animationDelay: `${i * 70}ms` }}
                  >
                    <span className="font-mono-tech text-[10px] font-black text-[#c8ff00] group-hover:text-[#111116]">{String.fromCharCode(65 + i)}</span>
                    <span className="min-w-0 break-keep">{t(c.label)}</span>
                  </button>
                ))}
              </div>
            ) : null}

            <button
              type="button"
              onClick={advance}
              aria-label={t({ ko: '대사 진행', en: 'Advance dialogue' })}
              className="block w-full cursor-pointer rounded-xl border-2 border-white/20 bg-black/80 p-3 text-left backdrop-blur-sm sm:p-4"
            >
              <span
                className="inline-block rounded-md px-2 py-0.5 font-mono-tech text-[10px] font-black text-[#111116] sm:text-xs"
                style={{ backgroundColor: speakerColor }}
              >
                {speakerName}
              </span>
              <span
                className={`mt-1.5 block min-h-[3.6em] text-[13px] leading-relaxed break-keep sm:text-base ${beat.speaker === 'system' ? 'font-mono-tech text-[#00f0ff]' : 'text-white'}`}
                aria-live="polite"
              >
                {chars.slice(0, typed).join('')}
                {!done && <span className="vn-anim ml-0.5 inline-block [animation:vn-caret_.7s_steps(1)_infinite]">▌</span>}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <span className="font-mono-tech text-[10px] font-bold" style={{ color: 'var(--text-muted)' }}>
          {t({ ko: '탭하면 바로 완성 · 선택지로 운명을 바꿔봐', en: 'Tap to complete · choices change fate' })}
        </span>
        <div className="flex gap-2">
          {atEnd || nodeId !== START || beatIdx > 0 ? (
            <button
              type="button"
              onClick={replay}
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border-2 px-3 py-1.5 font-mono-tech text-[11px] font-black"
              style={{ borderColor: 'var(--border-strong)', color: 'var(--text-primary)', backgroundColor: 'var(--bg-elevated)' }}
            >
              <RotateCcw className="h-3.5 w-3.5" />
              REPLAY
            </button>
          ) : null}
          {!atEnd && !(done && lastBeat) ? (
            <button
              type="button"
              onClick={skip}
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border-2 px-3 py-1.5 font-mono-tech text-[11px] font-black"
              style={{ borderColor: 'var(--border-strong)', color: 'var(--text-primary)', backgroundColor: 'var(--bg-elevated)' }}
            >
              <FastForward className="h-3.5 w-3.5" />
              SKIP
            </button>
          ) : null}
          <button
            type="button"
            onClick={atEnd && done && lastBeat ? replay : advance}
            disabled={!canNext && !atEnd}
            className="inline-flex cursor-pointer items-center gap-1 rounded-lg border-2 border-[#111116] bg-[#c8ff00] px-3.5 py-1.5 font-mono-tech text-[11px] font-black text-[#111116] shadow-[3px_3px_0px_#ff2e88] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {atEnd && done && lastBeat ? 'REPLAY' : 'NEXT'}
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  )
}
