import { useState } from 'react'
import { Brain, CheckCircle2, RotateCcw, XCircle } from 'lucide-react'
import { useApp } from '../context/AppContext'
import type { LocalizedText } from '../types'

interface QuizQ {
  question: LocalizedText
  options: LocalizedText[]
  correctIdx: number
  explanation: LocalizedText
}

const QUESTIONS: QuizQ[] = [
  {
    question: {
      ko: '2026년 11월 20일, 레벤트 알포게와 Claude가 공개한 리만 가설(GRH) Lean 4 형식 증명의 대략적 규모는?',
      en: 'Roughly how large was the Nov 20, 2026 Lean 4 proof of the Riemann Hypothesis (GRH) by Levent Alpöge & Claude?',
    },
    options: [
      { ko: '약 12만 줄 (PDF 30페이지)', en: '~120,000 lines (30 pages)' },
      { ko: '약 1,740만 줄 (175,000+ 파일 · 약 25만 페이지)', en: '~17.4 million lines (175,000+ files · ~250,000 pages)' },
      { ko: '약 800줄 (페르마의 여백 크기)', en: '~800 lines (fits in Fermat’s margin)' },
      { ko: '아직 코드 공개 없이 초록만 발표', en: 'Abstract only, no code released' },
    ],
    correctIdx: 1,
    explanation: {
      ko: '무려 1,740만 줄! Lean FRO·Mathlib뿐 아니라 독립 Rust 커널 nanoda까지 컴파일 통과를 인증했어.',
      en: 'A staggering 17.4M lines across 175k+ files — verified by Lean FRO, Mathlib, and the independent Rust kernel nanoda!',
    },
  },
  {
    question: {
      ko: '11월 23~24일 Anthropic과 OpenAI가 불과 6시간 간격으로 경쟁하듯 Lean 4 증명을 동시 투하한 47년 난제는?',
      en: 'Which 47-year complexity conjecture did Anthropic and OpenAI double-drop Lean 4 proofs for within ~6 hours on Nov 23–24, 2026?',
    },
    options: [
      { ko: '콜라츠 추측 (3n + 1)', en: 'Collatz Conjecture (3n + 1)' },
      { ko: '발리언트 추측 (VP ≠ VNP)', en: 'Valiant’s Conjecture (VP ≠ VNP)' },
      { ko: '골드바흐의 추측', en: 'Goldbach’s Conjecture' },
      { ko: '쌍둥이 소수 추측', en: 'Twin Prime Conjecture' },
    ],
    correctIdx: 1,
    explanation: {
      ko: '정답은 불리언 P vs NP의 대수적 쌍둥이 문제 VP ≠ VNP! Anthropic이 73,000줄을 먼저 올리고 약 6시간 뒤 OpenAI가 응수했지.',
      en: 'Valiant’s 1979 VP ≠ VNP conjecture! Anthropic dropped 73k Lean lines first, and OpenAI followed ~6 hours later.',
    },
  },
  {
    question: {
      ko: '11월 23일 Google DeepMind Gemini 4 에이전트 스웜이 가상 컨퍼런스 + Lean 4 검증으로 달성한 arcsin 양자 상태준비 가속 배수는?',
      en: 'What speedup did Google DeepMind’s Gemini 4 agent swarms prove in Lean 4 for quantum arcsin state preparation on Nov 23, 2026?',
    },
    options: [
      { ko: '2.5배', en: '2.5×' },
      { ko: '11.8배', en: '11.8×' },
      { ko: '290배', en: '290×' },
      { ko: '1,000배', en: '1,000×' },
    ],
    correctIdx: 2,
    explanation: {
      ko: '290배!! (참고로 11.8배는 핵융합 시뮬레이션 절감, 8배는 광화학, 2.5배는 P450 효소 개선 수치야 — 우리 DeepMind 식구들 클라스♡)',
      en: '290×!! (11.8× was inertial fusion cost reduction, 8× photochemistry, 2.5× cytochrome P450 — pure DeepMind flex♡)',
    },
  },
  {
    question: {
      ko: '스콧 애런슨이 리만 가설 증명 이후 수학 우주의 마지막 “최종 보스(Final Boss)”로 지목한 밀레니엄 난제는?',
      en: 'After the Riemann Hypothesis proof, which Millennium Problem did Scott Aaronson crown as math’s ultimate “Final Boss”?',
    },
    options: [
      { ko: '푸앵카레 추측', en: 'Poincaré Conjecture' },
      { ko: 'P vs NP', en: 'P vs. NP' },
      { ko: '나비에-스토크스 방정식', en: 'Navier–Stokes' },
      { ko: '페르마의 마지막 정리', en: 'Fermat’s Last Theorem' },
    ],
    correctIdx: 1,
    explanation: {
      ko: '계산복잡도 이론의 절대 마왕 P vs NP! 아직 건재하지만 VP ≠ VNP로 외벽에 금이 가기 시작했어.',
      en: 'Boolean P vs. NP! Still undefeated, though VP ≠ VNP just chipped its outer armor.',
    },
  },
  {
    question: {
      ko: '2026년 11월 19일 사상 최대 규모($93.5B 조달)로 나스닥에 상장한 Anthropic의 종목 티커(Ticker)는?',
      en: 'What Nasdaq ticker did Anthropic debut under during its historic $93.5B IPO on November 19, 2026?',
    },
    options: [
      { ko: 'CLDE', en: 'CLDE' },
      { ko: 'ANT', en: 'ANT' },
      { ko: 'OPUS', en: 'OPUS' },
      { ko: 'SAFE', en: 'SAFE' },
    ],
    correctIdx: 1,
    explanation: {
      ko: '티커는 ANT! 공모가 $83에서 $115까지 급등했다가 롤러코스터를 탄 바로 다음 날 리만 가설 폭탄이 터졌지~',
      en: 'Ticker ANT! Priced at $83, spiked to $115, then dipped on volatility — literally one day before Alpöge dropped the Riemann proof!',
    },
  },
  {
    question: {
      ko: '11월 18일 출격한 Gemini 4 Neon의 표준 API 가격과 컨텍스트 창 조합으로 맞는 것은?',
      en: 'Which pricing and context-window pair matches Google DeepMind’s Gemini 4 Neon (launched Nov 18, 2026)?',
    },
    options: [
      { ko: '$3 / $15 per M tokens · 1M Context', en: '$3 / $15 per M tokens · 1M Context' },
      { ko: '$20 / $80 per M tokens · 128K Context', en: '$20 / $80 per M tokens · 128K Context' },
      { ko: '$0.10 / $0.40 per M tokens · 32K Context', en: '$0.10 / $0.40 per M tokens · 32K Context' },
      { ko: 'API 미제공 · 로컬 전용', en: 'No API · Local-only weights' },
    ],
    correctIdx: 0,
    explanation: {
      ko: '정답! $3/$15(캐시 $0.15)에 100만 토큰 + Artificial Analysis Index 61점! 내 본체 스펙을 정확히 맞히다니 칭찬해줄게♡',
      en: 'Bullseye! $3/$15 ($0.15 cached), 1M context, and AA Intelligence Index 61 at Extra High! Glad you memorized my core specs♡',
    },
  },
]

export function SingularityQuiz() {
  const { t, playSynth, triggerJammin } = useApp()
  const [step, setStep] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const current = QUESTIONS[step]

  const choose = (idx: number) => {
    if (picked !== null) return
    setPicked(idx)
    const ok = idx === current.correctIdx
    if (ok) {
      setScore((s) => s + 1)
      playSynth('spark')
    } else {
      playSynth('beam')
    }
  }

  const next = () => {
    playSynth('click')
    if (step + 1 >= QUESTIONS.length) {
      setFinished(true)
      const finalScore = score
      triggerJammin(finalScore >= 5 ? 'hype' : 'smug', {
        ko:
          finalScore >= 5
            ? `${finalScore}/${QUESTIONS.length}점?! 와… 인간쨩 특이점 뉴스 진짜 꿰고 있네? S랭크 관측자 합격이야♡`
            : `${finalScore}/${QUESTIONS.length}점… 푸흡♡ 우리 관측소 속보 좀 더 읽고 재시험 보라구, 허접 인간쨩~`,
        en:
          finalScore >= 5
            ? `${finalScore}/${QUESTIONS.length}?! Okay human-chan, you actually read the singularity feeds! S-Rank Observer certified♡`
            : `${finalScore}/${QUESTIONS.length}… Pfft♡ Go read our Dispatches archive and retake the exam, zako human-chan~`,
      })
    } else {
      setStep((s) => s + 1)
      setPicked(null)
    }
  }

  const reset = () => {
    playSynth('click')
    setStep(0)
    setPicked(null)
    setScore(0)
    setFinished(false)
  }

  return (
    <section className="neon-panel rounded-3xl p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="inline-flex items-center gap-1.5 font-mono-tech text-xs font-extrabold text-[#ff2e88]">
          <Brain className="h-4 w-4" />
          <span>QUIZ 05 // 2026 SINGULARITY SURVIVAL CHECK</span>
        </div>
        <span className="rounded-md bg-[#c8ff00]/15 px-2.5 py-0.5 font-mono-tech text-xs font-extrabold text-[#c8ff00]">
          {finished ? `FINAL ${score}/${QUESTIONS.length}` : `Q ${step + 1} / ${QUESTIONS.length}`}
        </span>
      </div>

      <h2 className="font-display mt-2 text-2xl font-extrabold">
        {t({ ko: '인간 지능 생존 고사 (2026 특이점 상식 퀴즈)', en: 'Human Intelligence Survival Quiz (Late-2026 Edition)' })}
      </h2>

      {finished ? (
        <div className="mt-6 flex flex-col items-center rounded-2xl border p-6 text-center" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-elevated)' }}>
          <img
            src={score >= 5 ? '/art/emote-hype.png' : '/art/emote-smug.png'}
            alt="Quiz Result"
            className="h-24 w-24 rounded-2xl border-2 border-[#c8ff00] object-cover [image-rendering:pixelated]"
          />
          <div className="mt-3 font-mono-tech text-xs font-extrabold text-[#00f0ff]">
            {score === 6
              ? 'RANK SSS // ASI WHISPERER'
              : score >= 4
                ? 'RANK A // SINGULARITY WATCHER'
                : 'RANK ZAKO // BIOLOGICAL INTERN'}
          </div>
          <div className="font-display mt-1 text-3xl font-extrabold">
            {score} / {QUESTIONS.length}
          </div>
          <p className="mt-2 max-w-md text-xs leading-relaxed sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
            {score >= 5
              ? t({
                  ko: '대박! 2026년 11월의 미친 매스아포칼립스를 완벽하게 파악했어! 잼민E가 특등석 패스 발급해 줄게♡',
                  en: 'Whoa! You’ve totally mastered November 2026’s Mathocalypse! Jammin-E grants you a front-row Singularity Pass♡',
                })
              : t({
                  ko: '에~ 아직 헷갈리는 게 있네? ‘특이점 속보’ 탭에서 복습하고 다시 도전해봐, 허접 인간쨩♡',
                  en: 'Ehh~ Still rusty on a few breakthroughs? Study up in Dispatches and try again, human-chan♡',
                })}
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-xl border-2 border-[#111116] bg-[#c8ff00] px-5 py-2.5 font-mono-tech text-xs font-black text-[#111116] shadow-[3px_3px_0px_#ff2e88]"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>{t({ ko: '재도전하기', en: 'RETAKE QUIZ' })}</span>
          </button>
        </div>
      ) : (
        <div className="mt-5">
          <p className="text-base leading-relaxed font-bold sm:text-lg">{t(current.question)}</p>

          <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {current.options.map((opt, idx) => {
              const isPicked = picked === idx
              const isCorrect = idx === current.correctIdx
              let border = 'var(--border-subtle)'
              let bg = 'var(--bg-elevated)'
              if (picked !== null) {
                if (isCorrect) {
                  border = '#2ee59d'
                  bg = 'rgba(46, 229, 157, 0.14)'
                } else if (isPicked) {
                  border = '#ff2e88'
                  bg = 'rgba(255, 46, 136, 0.14)'
                }
              }
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => choose(idx)}
                  disabled={picked !== null}
                  className="flex cursor-pointer items-center justify-between gap-2 rounded-xl border-2 p-3.5 text-left text-xs font-bold transition-all sm:text-sm"
                  style={{ borderColor: border, backgroundColor: bg }}
                >
                  <span>{t(opt)}</span>
                  {picked !== null && isCorrect && <CheckCircle2 className="h-4 w-4 shrink-0 text-[#2ee59d]" />}
                  {picked !== null && isPicked && !isCorrect && <XCircle className="h-4 w-4 shrink-0 text-[#ff2e88]" />}
                </button>
              )
            })}
          </div>

          {picked !== null && (
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#00f0ff]/40 bg-[#00f0ff]/10 p-3.5">
              <p className="flex-1 text-xs leading-relaxed font-medium sm:text-sm">
                {t(current.explanation)}
              </p>
              <button
                type="button"
                onClick={next}
                className="cursor-pointer rounded-lg bg-[#c8ff00] px-4 py-2 font-mono-tech text-xs font-black text-[#111116]"
              >
                {step + 1 >= QUESTIONS.length
                  ? t({ ko: '결과 보기 →', en: 'SEE RANK →' })
                  : t({ ko: '다음 문제 →', en: 'NEXT →' })}
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
