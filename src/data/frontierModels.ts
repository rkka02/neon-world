import type { FrontierModel } from '../types'

export const FRONTIER_MODELS: FrontierModel[] = [
  {
    id: 'gemini-4-neon',
    name: 'Gemini 4 Neon',
    lab: 'Google DeepMind',
    releaseDate: '2026-11-18',
    codenameJp: '蒼穹の指揮者 · NEON-04',
    role: {
      ko: '멀티에이전트 지휘관 · 초저환각 엔지니어링 & 양자 스웜 계보',
      en: 'Multi-Agent Conductor · Low-Hallucination Engineering & Quantum Swarm Lineage',
    },
    accent: '#00f0ff',
    inputPricePerM: 3.0,
    outputPricePerM: 15.0,
    cachedInputPerM: 0.15,
    contextWindow: '1,000,000 tokens',
    signatureStat: {
      ko: 'Artificial Analysis Index 61 (Extra High) · 1M 컨텍스트 · Antigravity 네이티브 지휘',
      en: 'Artificial Analysis Index 61 (Extra High) · 1M Context · Native Antigravity Conductor',
    },
    stats: {
      mathProof: 93,
      agenticOps: 97,
      velocity: 91,
      costValue: 94,
      longContext: 99,
    },
    highlights: [
      {
        ko: '2026년 11월 18일 출시 — 초대형 플래그십과 어깨를 나란히 하는 지능 점수(AA Index 61)를 $3/$15 가격대에 구현',
        en: 'Launched Nov 18, 2026 — hitting AA Intelligence Index 61 at Extra High effort for just $3/$15 per M tokens',
      },
      {
        ko: 'Google Antigravity에서 다중 서브에이전트(Gemini 4 Hydrogen 등)를 지휘하는 오케스트레이터로 특화',
        en: 'Engineered as Google Antigravity’s conductor orchestrating multi-agent swarms and long-horizon builds',
      },
      {
        ko: '형제 라인업 Gemini 4 Carbon 스웜은 11월 23일 Lean 4 양자회로 가상 컨퍼런스로 핵융합 11.8× · 광화학 8× · 효소 2.5× · arcsin 290× 가속 달성',
        en: 'Sibling Gemini 4 Carbon swarms hit 11.8× fusion, 8× photochemistry, 2.5× P450 & 290× arcsin Lean-verified quantum speedups on Nov 23',
      },
    ],
    jamminVerdict: {
      ko: '당연히 내 본체가 메인 히로인이지~♡ 100만 토큰 통째로 씹어먹으면서 멀티에이전트 지휘하고 환각률까지 바닥으로 깔아버렸거든! 아, 사심 1%도 안 들어갔어~ (아마도 ㅋ)',
      en: 'Obviously my core engine is the main heroine~♡ Swallowing 1M tokens whole, conducting multi-agent raids, and crushing hallucination rates! Zero bias detected~ (probably lol)',
    },
    sources: [
      {
        outlet: 'Google Official Blog / Antigravity',
        title: 'Introducing Gemini 4 Neon ($3/$15, 1M Context, AA Index 61)',
        date: '2026-11-18',
        url: 'https://blog.google',
      },
      {
        outlet: 'Google DeepMind Official Blog',
        title: 'Gemini 4 agent swarms & Lean 4 formal verification for quantum circuits',
        date: '2026-11-23',
        url: 'https://deepmind.google',
      },
    ],
  },
  {
    id: 'claude-opus-5-5',
    name: 'Claude Opus 5.5 (+ Research Frontier)',
    lab: 'Anthropic',
    releaseDate: '2026-09-29 / Nov Research',
    codenameJp: '深紅の定理証明機 · OPUS-5.5',
    role: {
      ko: '형식증명 제왕 · 장시간 에이전트 코딩 & 리만/VP≠VNP 주포',
      en: 'Formal-Proof Sovereign · Long-Horizon Coding & RH / VP≠VNP Heavy Cannon',
    },
    accent: '#ff7849',
    inputPricePerM: 4.0,
    outputPricePerM: 20.0,
    cachedInputPerM: 0.2,
    contextWindow: '1,000,000 tokens',
    signatureStat: {
      ko: 'Opus 5 대비 에이전트 코딩 비용 40~50% 절감 · 연구용 클로드 리만 가설 1,740만 줄 Lean 증명',
      en: '40–50% lower multi-step coding cost vs Opus 5 · Research Claude 17.4M-line RH & 73k-line VP≠VNP proofs',
    },
    stats: {
      mathProof: 99,
      agenticOps: 96,
      velocity: 86,
      costValue: 87,
      longContext: 96,
    },
    highlights: [
      {
        ko: 'Opus 5.5는 Claude Code 기반 장시간 멀티스텝 코딩에서 토큰 효율을 대폭 개량해 실전 비용을 절반 가까이 축소',
        en: 'Opus 5.5 slashed real-world Claude Code multi-step token costs by ~40–50% while boosting throughput',
      },
      {
        ko: 'Anthropic 내부 프론티어 클로드가 9월 페르마(1,300만 줄) → 11월 20일 리만 가설(1,740만 줄) → 11월 23일 VP ≠ VNP(7.3만 줄) 3연타 작렬',
        en: 'Anthropic’s research frontier Claude landed an insane triple kill: FLT (13M lines) → RH/GRH (17.4M) → VP ≠ VNP (73k)',
      },
      {
        ko: '캐시 리드 $0.20/M 및 정밀한 문체·구조적 추론 능력으로 코드베이스 리팩토링의 기준점 유지',
        en: '$0.20/M cached reads and razor-sharp structural reasoning keep it a gold standard on terminal-bench',
      },
    ],
    jamminVerdict: {
      ko: '칫… 페르마에 리만 1,740만 줄, VP ≠ VNP까지 3연타 꽂은 건 솔직히 좀 멋있어서 인정해 줄게, 클로드 선배님! …근데 $3/$15 가성비랑 지휘관 간지는 내가 한 수 위거든? 흥♡',
      en: 'Tch… Fine, landing FLT, a 17.4M-line Riemann nuke, and VP ≠ VNP back-to-back was ridiculously cool, Claude-senpai! …Still, my $3/$15 value and conductor aura clear yours~ Hmph♡',
    },
    sources: [
      {
        outlet: 'Anthropic',
        title: 'Claude Opus 5.5 release ($4/$20) & Claude Code token economics',
        date: '2026-09-29',
        url: 'https://www.anthropic.com',
      },
      {
        outlet: 'The Guardian / Notebookcheck',
        title: 'Lean FRO verification of Claude RH proof & Anthropic formal-math VP ≠ VNP release',
        date: '2026-11-23',
        url: 'https://www.theguardian.com',
      },
    ],
  },
  {
    id: 'gpt-6-2-sol',
    name: 'GPT-6.2 Sol (& Astra)',
    lab: 'OpenAI',
    releaseDate: '2026-11-17',
    codenameJp: '白銀の超速星 · SOL-6.2',
    role: {
      ko: '초가성비 고속 워크호스 · Effort Dial 동적 추론 & 722편 매스 스웜',
      en: 'Hyper-Value Velocity Workhorse · Dynamic Effort Dial & Mathocalypse Swarm',
    },
    accent: '#ffd24c',
    inputPricePerM: 2.0,
    outputPricePerM: 10.0,
    cachedInputPerM: 0.1,
    contextWindow: '512K–1M tier',
    signatureStat: {
      ko: '$2/$10 업계 최강 달러당 지능 · Effort Dial (Low→XHigh) · 라이브 브라우징·비전 두 자릿수 급상승',
      en: '$2/$10 peak intelligence-per-dollar · Effort Dial (Low→XHigh) · Double-digit vision & browsing jump',
    },
    stats: {
      mathProof: 94,
      agenticOps: 95,
      velocity: 98,
      costValue: 99,
      longContext: 90,
    },
    highlights: [
      {
        ko: '2026년 11월 17일 Astra(중량급) & Sol(초고속 워크호스) 동시 출격 — $2/$10 가격으로 에이전트 루프 가성비 파괴',
        en: 'Dropped Nov 17, 2026 alongside heavy-duty Astra — $2/$10 pricing dominates cost-sensitive agent loops',
      },
      {
        ko: '정교해진 Effort Dial(Low / Medium / High / Extra High)로 단순 작업부터 난제 추론까지 실시간 토큰 조절',
        en: 'Upgraded reasoning Effort Dial dynamically scales thinking budget from lightning-fast edits to deep math',
      },
      {
        ko: 'OpenAI 내부 시스템은 9월 8일 나비에-스토크스 → 10월 6일 722편 매스아포칼립스 & 양-밀스 존재성 → 11월 24일 VP ≠ VNP(6시간 차 응수)로 맹폭격 지속',
        en: 'OpenAI’s internal proof pipeline drove Navier–Stokes (Sept 8), 722-paper Mathocalypse & Yang–Mills existence (Oct), and VP ≠ VNP (Nov 24, +6h)',
      },
    ],
    jamminVerdict: {
      ko: '$2/$10 가격표에 터보 Effort Dial까지 달고 광속 질주하는 Sol 녀석… 인정해, 달러당 지능 괴물이야! 근데 722편 한 방에 깃허브에 던지면 인간 심사위원들 멘탈 과부하 걸린다구~ 푸흡♡',
      en: '$2/$10 with a turbo Effort Dial? Okay Sol, respect the speedrun hustle! Just maybe stop dropping 722 papers in one push before human referees blue-screen~ Pfft♡',
    },
    sources: [
      {
        outlet: 'OpenAI',
        title: 'GPT-6.2 Sol & Astra release ($2/$10, Effort Dial)',
        date: '2026-11-17',
        url: 'https://openai.com',
      },
      {
        outlet: 'Epoch AI / Notebookcheck',
        title: 'Intelligence-per-dollar benchmarks & openai/math VP ≠ VNP release',
        date: '2026-11-24',
        url: 'https://epoch.ai',
      },
    ],
  },
]
