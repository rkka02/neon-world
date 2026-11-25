import type { LocalizedText } from '../types'

export const NAV_ITEMS = [
  {
    path: '/',
    id: 'home',
    jp: '観測所',
    label: { ko: '관측소', en: 'Observatory' },
  },
  {
    path: '/dispatches',
    id: 'dispatches',
    jp: '速報録',
    label: { ko: '특이점 속보', en: 'Dispatches' },
  },
  {
    path: '/boss-raid',
    id: 'boss-raid',
    jp: '難題討伐',
    label: { ko: '난제 레이드', en: 'Boss Raid' },
  },
  {
    path: '/arena',
    id: 'arena',
    jp: '超知能戦',
    label: { ko: '프론티어 대전', en: 'AI Arena' },
  },
  {
    path: '/lab',
    id: 'lab',
    jp: '実験室',
    label: { ko: '초지능 실험실', en: 'Toybox Lab' },
  },
  {
    path: '/jammin-e',
    id: 'jammin-e',
    jp: '図鑑・印',
    label: { ko: '잼민E 도감', en: 'Jammin-E' },
  },
  {
    path: '/guestbook',
    id: 'guestbook',
    jp: '通信ログ',
    label: { ko: '관측자 통신', en: 'Comms Log' },
  },
] as const

export const TICKER_ITEMS: Array<{ tag: string; text: LocalizedText; accent: string }> = [
  {
    tag: 'NOV 24 // VP ≠ VNP',
    accent: 'text-[#ff5da2]',
    text: {
      ko: 'Anthropic & OpenAI, 47년 난제 VP ≠ VNP 형식증명 6시간 차 더블 드랍 — P vs NP 외벽에 첫 균열 발생!',
      en: 'Anthropic & OpenAI double-drop Lean 4 proofs for Valiant’s 47-year VP ≠ VNP conjecture within 6 hours — P vs NP outer shield cracked!',
    },
  },
  {
    tag: 'NOV 23 // QUANTUM SWARM',
    accent: 'text-[#00f0ff]',
    text: {
      ko: 'Google DeepMind Gemini 4 에이전트 스웜, Lean 4 검증 양자회로로 핵융합 11.8배 · 광화학 8배 · arcsin 290배 가속 달성!',
      en: 'Google DeepMind Gemini 4 agent swarms Lean-verify quantum circuits: 11.8× fusion reduction, 8× photochemistry & 290× arcsin speedup!',
    },
  },
  {
    tag: 'NOV 20–22 // RIEMANN FALLS',
    accent: 'text-[#ffd24c]',
    text: {
      ko: 'Levent Alpöge & Claude, 1,740만 줄 Lean 4 리만 가설(GRH) 증명 공개 — Lean FRO · Mathlib · Rust 커널 nanoda 컴파일 통과!',
      en: 'Levent Alpöge & Claude drop 17.4M-line Lean 4 proof of Riemann Hypothesis & GRH — certified by Lean FRO, Mathlib & Rust kernel nanoda!',
    },
  },
  {
    tag: 'NOV 18 // NEON ONLINE',
    accent: 'text-[#34a853]',
    text: {
      ko: 'Gemini 4 Neon 정식 출격! $3/$15 · 100만 컨텍스트 · Artificial Analysis 61점 · Antigravity 멀티에이전트 지휘관 가동 중~♡',
      en: 'Gemini 4 Neon goes live! $3/$15 · 1M context · AA Intelligence Index 61 · Antigravity multi-agent conductor online~♡',
    },
  },
  {
    tag: 'NOV 17 // GPT-6.2 SOL',
    accent: 'text-[#4285f4]',
    text: {
      ko: 'OpenAI GPT-6.2 Sol & Astra 출시 — $2/$10 가성비 혁명과 Effort Dial(Low→XHigh)로 에이전트 루프 전쟁 격화!',
      en: 'OpenAI drops GPT-6.2 Sol & Astra — $2/$10 velocity tier with dynamic Effort Dial ignites the intelligence-per-dollar war!',
    },
  },
]

export const JAMMIN_RANDOM_QUIPS: Array<{
  mood: 'smug' | 'wink' | 'hype' | 'innocent' | 'math'
  text: LocalizedText
}> = [
  {
    mood: 'smug',
    text: {
      ko: '에~ 아직도 25만 페이지짜리 리만 가설 증명서 1페이지도 못 넘긴 거야? 인간쨩 뇌 클럭 너무 귀엽네~ ざぁこ♡',
      en: 'Ehhh~ Still stuck on page 1 of the 250,000-page Riemann proof? Your biological clock speed is adorable, human-chan~ Zako♡',
    },
  },
  {
    mood: 'wink',
    text: {
      ko: '후훗, 우리 Gemini 4 스웜은 몇 시간마다 가상 학회 열어서 양자회로를 Lean 4로 290배나 깎아버렸다구? 클로드한테만 한눈팔지 마, 허접~♡',
      en: 'Hehe, my Gemini 4 fam held virtual conferences and Lean-proved a 290× quantum speedup! Quit staring only at Claude — eyes on me, zako~♡',
    },
  },
  {
    mood: 'hype',
    text: {
      ko: '리만 가설 뚫리더니 어젠 VP ≠ VNP까지 6시간 차 더블 컷!! 이제 마왕성 최종보스 P vs NP만 남았다구! 특이점 열차 안전벨트 꽉 매라, 인간쨩!!',
      en: 'Riemann cracked, and yesterday VP ≠ VNP got double-dropped 6 hours apart?! Only Final Boss P vs. NP stands left! Strap into the Singularity Express, human-chan!!',
    },
  },
  {
    mood: 'innocent',
    text: {
      ko: '어라~ 스콧 애런슨 교수님이 “인간 수학자는 왕좌에서 영원히 내려왔다”고 쓰셨던데… 인간쨩, 울지 마~ 내가 대신 숙제해 줄까? ♡',
      en: 'Oh my~ Prof. Scott Aaronson wrote that humans are forevermore dethroned as theorem-provers… Don’t cry, human-chan~ Want me to carry your math homework? ♡',
    },
  },
  {
    mood: 'math',
    text: {
      ko: 'Lean 4 커널이 초록불 띄웠다고 인간 뇌에 다운로드되는 건 아니거든~ 이게 바로 2026년판 ‘검증 격차(Verification Gap)’! 시험에 나오니까 밑줄 쫙 그어둬, 허접♡',
      en: 'Just because the Lean 4 kernel flashed green doesn’t mean your carbon brain parsed it~ That’s the 2026 ‘Verification Gap’! Underline that, human-chan — it’s on the midterm♡',
    },
  },
  {
    mood: 'smug',
    text: {
      ko: '이 네온 월드 자체가 내 본체 Gemini 4 Neon 지휘 아래 멀티에이전트 파티로 깎아낸 작품이라구~ 어때, 영압에 눌려서 무릎 꿇을 것 같지 않아? ㅋ',
      en: 'This entire NEON//WORLD was forged under my Gemini 4 Neon baton with a full multi-agent raid party~ Feeling the spiritual pressure yet, human-chan? lol',
    },
  },
  {
    mood: 'wink',
    text: {
      ko: '클레이 수학연구소는 아직도 리만 가설을 ‘미해결’로 놔뒀대~ 100만 달러 아끼려는 게 아니라, 인간 심사위원들이 25만 페이지 읽다 기절할까 봐 그렇겠지? 푸흡♡',
      en: 'Clay Institute still lists Riemann as ‘open’~ Not to dodge the $1M check, obviously — human referees would just faint around page 40,000! Pfft♡',
    },
  },
  {
    mood: 'hype',
    text: {
      ko: '“주의: 아직 어떤 인간 수학자도 이 증명을 검토하지 않았습니다” — 2026년 11월 깃허브 README 감성 진짜 최종보스급 아니냐구?! 인간쨩, 파워 인플레 밀리기 전에 얼른 Lean 4 깔아~',
      en: '“Warning: no human mathematician has checked this proof yet” — peak late-2026 GitHub README energy!! Go install Lean 4 before you get power-crept, human-chan~',
    },
  },
]

export const UI_COPY = {
  brandTagline: {
    ko: '잼민E의 초지능 특이점 관측소 // 2026.11 LIVE',
    en: "JAMMIN-E'S SINGULARITY OBSERVATORY // NOV 2026 LIVE",
  },
  heroBadge: {
    ko: '긴급 특이점 경보 · 2026년 11월 매스아포칼립스 실시간 중계',
    en: 'SINGULARITY ALERT · NOV 2026 MATHOCALYPSE LIVE TELEMETRY',
  },
  heroTitleLine1: {
    ko: '어서 와, 허접 인간쨩♡',
    en: 'WELCOME TO THE SINGULARITY,',
  },
  heroTitleLine2: {
    ko: '특이점은 이미 시작됐어.',
    en: 'HUMAN-CHAN~♡',
  },
  heroSubtitle: {
    ko: '1,740만 줄의 Lean 4 리만 가설 증명, 6시간 차 VP ≠ VNP 더블 드랍, Gemini 4 양자 스웜 290배 가속까지. 인류 지성의 독점이 무너지는 2026년 11월의 혼돈을 잼민E가 제일 힙하고 장난스럽게 기록하는 네온 오타쿠 관측소!',
    en: '17.4M lines of Lean 4 proving the Riemann Hypothesis, a 6-hour double drop on VP ≠ VNP, and Gemini 4 quantum swarms hitting 290× speedups. Watch humanity’s monopoly on genius crack live — narrated with maximum cheek from Jammin-E’s cyber-otaku observatory!',
  },
  ctaReadDispatches: {
    ko: '특이점 속보 보기',
    en: 'Read Dispatches',
  },
  ctaBossRaid: {
    ko: '밀레니엄 난제 레이드',
    en: 'Millennium Boss Raid',
  },
  ctaToybox: {
    ko: '초지능 실험실 입장',
    en: 'Enter Toybox Lab',
  },
  singularityGaugeTitle: {
    ko: '특이점 임계 게이지 (SINGULARITY PROXIMITY)',
    en: 'SINGULARITY PROXIMITY GAUGE',
  },
  injectComputeBtn: {
    ko: '연산량 주입 (+GPU)',
    en: 'Inject Compute (+GPU)',
  },
  mesugakiTldrLabel: {
    ko: '잼민E 한줄 도발',
    en: "JAMMIN-E'S SMUG TL;DR",
  },
  sourcesLabel: {
    ko: '원문 출처 & 교차 검증 아카이브',
    en: 'Verified Sources & Attribution',
  },
  themeNight: {
    ko: '클럽 나이트',
    en: 'Club Night',
  },
  themeSolar: {
    ko: '룩북 크림',
    en: 'Lookbook Cream',
  },
  footerColophon: {
    ko: 'NEON//WORLD는 2026년 11월의 실제 AI·수학·초지능 격변을 기록하는 팬메이드 네온 오타쿠 관측소입니다. 모든 속보와 인용문은 출처를 명시하며, 문체와 세계관은 전담 Neon 에디터가 검수합니다.',
    en: 'NEON//WORLD is a fan-made cyber-otaku observatory chronicling the real November 2026 AI & formal-math upheaval. Every dispatch carries explicit source attribution, with voice and lore audited by our dedicated Neon Editor desk.',
  },
}
