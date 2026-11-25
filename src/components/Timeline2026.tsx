import { useState } from 'react'
import { Calendar, Sparkles } from 'lucide-react'
import { useApp } from '../context/AppContext'
import type { LocalizedText } from '../types'

interface TimelineNode {
  date: string
  tag: string
  color: string
  title: LocalizedText
  detail: LocalizedText
}

const NODES: TimelineNode[] = [
  {
    date: '2026.09.08',
    tag: 'OPENAI',
    color: '#ffd60a',
    title: { ko: '나비에-스토크스 유한시간 특이점 증명 공개', en: 'Navier–Stokes Finite-Time Blow-Up Claim' },
    detail: {
      ko: '1만 에이전트 88시간 가동. 166p + Lean 공개 직후 우선권·명세 일치성 감사 격론 점화.',
      en: '10,000 agents × 88h -> 166p + Lean release; sparked priority debates & Cambridge/KCL spec audits.',
    },
  },
  {
    date: '2026.09.25',
    tag: 'ANTHROPIC',
    color: '#ff7849',
    title: { ko: 'Claude, 페르마의 마지막 정리 1,300만 줄 자율 완성', en: 'Claude Autonomous 13M-Line Fermat Proof' },
    detail: {
      ko: '11일 완전 자율 실행으로 Lean 4 엔드투엔드 형식화 달성 — 11월 리만 폭탄의 전주곡.',
      en: '11-day autonomous run producing 13M lines of Lean 4 — the dress rehearsal for November’s Riemann bomb.',
    },
  },
  {
    date: '2026.10.06',
    tag: 'MATHOCALYPSE',
    color: '#ff2e88',
    title: { ko: 'OpenAI, GitHub에 수학 논문 722편 일괄 투하', en: 'OpenAI 722-Manuscript “Mathocalypse” Dump' },
    detail: {
      ko: '에르되시·야코비안·BSD/호지 특수 사례까지 한 번에 투하하며 전통 피어리뷰 시스템 마비.',
      en: 'Erdős, Jacobian, and partial BSD/Hodge corollaries dropped at once, overwhelming traditional peer review.',
    },
  },
  {
    date: '2026.11.12',
    tag: 'PHYSICS',
    color: '#8b5cf6',
    title: { ko: '데이비드 그로스 위원회, 양-밀스 존재성 Lean 검증 보고', en: 'David Gross Committee Verifies Yang–Mills Existence' },
    detail: {
      ko: '페르미온 결합 포함 1페이즈 존재성 검증 완료 — 단 2페이즈 ‘질량 간극’은 여전히 미해결.',
      en: 'Existence half Lean-verified under Nobel laureate David Gross; Mass Gap half remains open.',
    },
  },
  {
    date: '2026.11.17–18',
    tag: 'TRIFECTA',
    color: '#00f0ff',
    title: { ko: 'GPT-6.2 Sol ($2/$10) & Gemini 4 Neon ($3/$15 · AA 61) 연타 출격', en: 'GPT-6.2 Sol & Gemini 4 Neon Launch Back-to-Back' },
    detail: {
      ko: '48시간 만에 달러당 초지능 전쟁 점화. 100만 토큰 멀티에이전트 지휘관 시대 공식 개막.',
      en: 'Intelligence-per-dollar war erupts in 48h — native multi-agent conductor harnesses take over.',
    },
  },
  {
    date: '2026.11.19',
    tag: 'MARKET',
    color: '#c8ff00',
    title: { ko: 'Anthropic, 사상 최대 $93.5B 규모 나스닥 상장 (티커: ANT)', en: 'Anthropic Historic $93.5B Nasdaq IPO (ANT)' },
    detail: {
      ko: '공모가 $83 → $115 폭등 → $75대 롤러코스터. 바로 다음 날 리만 가설이 터진다.',
      en: 'Priced at $83, rocketed to $115, then whipsawed — just 24 hours before the Riemann proof dropped.',
    },
  },
  {
    date: '2026.11.20–22',
    tag: 'RIEMANN',
    color: '#ff2e88',
    title: { ko: '리만 가설(GRH) 1,740만 줄 Lean 4 공개 & 다중 커널 인증', en: '17.4M-Line Riemann Hypothesis Certified by Lean FRO & nanoda' },
    detail: {
      ko: '알포게 × 클로드 17.5만 파일 컴파일 통과! 타오 ‘소화 격차’, 애런슨 ‘인간 왕좌 반납’ 선언.',
      en: 'Alpöge & Claude pass Lean FRO, Mathlib & Rust kernel nanoda; Tao & Aaronson mark the Superintelligence Moment.',
    },
  },
  {
    date: '2026.11.23–24',
    tag: 'QUANTUM & VP',
    color: '#2ee59d',
    title: { ko: 'DeepMind Gemini 4 양자 290× 가속 & VP ≠ VNP 6시간 차 더블 드랍', en: 'DeepMind 290× Quantum Swarms & 6h VP ≠ VNP Double-Drop' },
    detail: {
      ko: '핵융합 11.8× 양자회로 오픈소스 공개 + Anthropic·OpenAI가 47년 난제 VP ≠ VNP 동시 공략!',
      en: 'Lean-verified quantum circuits (11.8× fusion, 290× arcsin) + Anthropic & OpenAI drop VP ≠ VNP 6h apart!',
    },
  },
]

export function Timeline2026() {
  const { t, playSynth } = useApp()
  const [activeIdx, setActiveIdx] = useState(NODES.length - 1)
  const current = NODES[activeIdx]

  return (
    <section className="neon-panel mt-14 rounded-3xl p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 font-mono-tech text-xs font-extrabold text-[#c8ff00]">
            <Calendar className="h-4 w-4" />
            <span>80 DAYS THAT SHOOK HUMANITY // 2026.09 → 2026.11 TIMELINE</span>
          </div>
          <h2 className="font-display mt-1 text-2xl font-extrabold sm:text-3xl">
            {t({ ko: '인류 지성을 뒤흔든 80일 특이점 타임라인', en: '80 Days of Superintelligence: Interactive Timeline' })}
          </h2>
        </div>
        <span className="club-tag text-[#ff2e88]">
          <Sparkles className="h-3 w-3" />
          CLICK ANY NODE
        </span>
      </div>

      {/* Horizontal Scrollable Node Strip (Great on Mobile + Desktop!) */}
      <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
        {NODES.map((node, idx) => {
          const active = idx === activeIdx
          return (
            <button
              key={node.date}
              type="button"
              onClick={() => {
                playSynth('click')
                setActiveIdx(idx)
              }}
              className="shrink-0 cursor-pointer rounded-xl border-2 px-3.5 py-2 text-left transition-all"
              style={{
                borderColor: active ? node.color : 'var(--border-subtle)',
                backgroundColor: active ? 'var(--bg-elevated)' : 'transparent',
                boxShadow: active ? `3px 3px 0px ${node.color}` : 'none',
              }}
            >
              <div className="font-mono-tech text-[10px] font-black" style={{ color: node.color }}>
                {node.tag}
              </div>
              <div className="font-mono-tech text-xs font-extrabold">{node.date}</div>
            </button>
          )
        })}
      </div>

      {/* Selected Node Spotlight */}
      <div
        className="mt-4 rounded-2xl border-2 p-5 transition-all"
        style={{
          borderColor: current.color,
          backgroundColor: 'var(--bg-elevated)',
        }}
      >
        <div className="flex flex-wrap items-center gap-2 font-mono-tech text-xs font-black">
          <span
            className="rounded px-2 py-0.5 text-[#111116]"
            style={{ backgroundColor: current.color }}
          >
            {current.date}
          </span>
          <span style={{ color: current.color }}>// {current.tag}</span>
        </div>
        <h3 className="mt-2 text-lg font-extrabold sm:text-xl">{t(current.title)}</h3>
        <p className="mt-1.5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {t(current.detail)}
        </p>
      </div>
    </section>
  )
}
