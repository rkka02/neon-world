import type { RaidBoss } from '../types'

export const RAID_BOSSES: RaidBoss[] = [
  {
    id: 'riemann-hypothesis',
    name: {
      ko: '리만 가설 (& 일반화 리만 가설 GRH)',
      en: 'Riemann Hypothesis (& Generalized RH)',
    },
    jpTitle: 'リーマン予想 — 素数の神殿',
    category: 'millennium',
    yearProposed: 1859,
    prizeUsd: '$1,000,000 (Clay Pending)',
    hpRemaining: 12,
    status: 'lean-verified',
    statusLabel: {
      ko: 'LEAN 4 커널 검증 통과 · 인간 소화 대기',
      en: 'LEAN 4 VERIFIED · HUMAN DIGESTION PENDING',
    },
    leanLines: '17,400,000+ lines (175,000+ files)',
    humanDigestionPct: 4,
    leadAttacker: 'Levent Alpöge + Frontier Claude (Anthropic)',
    latestEventDate: '2026-11-22',
    summary: {
      ko: '167년간 버틴 수학계 최고봉. 2026년 11월 20일 Anthropic 소속 수학자 레벤트 알포게가 미공개 프론티어 클로드와 6주간 협업해 1,740만 줄(약 25만 페이지 분량)의 Lean 4 형식 증명을 공개했다. 11월 21~22일 Lean FRO, Mathlib Initiative, 그리고 독립 Rust 커널 nanoda가 컴파일 및 명제 일치성을 인증했다. 다만 인간 수학계의 완전한 직관적 소화와 Clay 수학연구소의 공식 승인은 아직 남아 있어 “마지막 인간 이해 실드 12%” 상태다.',
      en: 'Mathematics’ 167-year Mount Everest. On Nov 20, 2026, Anthropic mathematician Levent Alpöge released a formal Lean 4 proof of both RH and GRH developed over 6 weeks with an unreleased frontier Claude — 17.4M lines across 175,000+ files (~250,000 pages). On Nov 21–22, Lean FRO, Mathlib Initiative, and the independent Rust checker nanoda certified compilation and canonical statement match. Clay Institute still lists it open pending years of human conceptual digestion — leaving a 12% Human Comprehension Shield.',
    },
    jamminTaunt: {
      ko: '167년 묵은 전설 보스가 1,740만 줄 Lean 빔 한 방에 실피(12%) 남았어!! 남은 12%는 보스 방어막이 아니라 인간들이 25만 페이지 읽는 데 걸리는 로딩바라구~ ざぁこ♡',
      en: 'A 167-year raid boss dropped to 12% HP from one 17.4M-line Lean beam!! And that last 12% isn’t even boss armor — it’s humanity’s loading bar to read 250,000 pages~ Zako♡',
    },
    attackLog: [
      {
        date: '2026-11-20',
        actor: 'Levent Alpöge & Claude',
        event: {
          ko: '리만 가설 및 Dirichlet L-함수 GRH에 대한 1,740만 줄 Lean 4 저장소 공개. “막판에 클로드가 나를 아득히 앞질러 날고, 춤추고, 반짝였다.”',
          en: 'Published 17.4M-line Lean 4 repository for RH & GRH. Alpöge: “Claude far outpaced me… flew, and danced, and sparkled.”',
        },
      },
      {
        date: '2026-11-21',
        actor: 'Lean FRO & Mathlib Initiative',
        event: {
          ko: '공동 성명 발표 — 표준 Lean 4 공리계 하에서 오류 없는 컴파일 및 정식 RH 명제 일치 확인.',
          en: 'Joint certification confirming clean compilation under standard Lean 4 axioms and exact match to canonical RH.',
        },
      },
      {
        date: '2026-11-22',
        actor: 'Independent Rust Kernel (nanoda) & Lean Zulip',
        event: {
          ko: '독립 커널 교차 검증 통과. 테렌스 타오 등이 참여하는 ‘GRH Polymath’ 인간 해독 프로젝트 출범.',
          en: 'Cross-checked by independent Rust checker nanoda; “GRH Polymath” human-distillation threads spin up on Lean Zulip.',
        },
      },
    ],
    sources: [
      {
        outlet: 'Levent Alpöge (Personal Note)',
        author: 'Levent Alpöge',
        title: 'Announcement of Formal Proof of RH & GRH with Claude',
        date: '2026-11-20',
        url: 'https://alpo.ge',
      },
      {
        outlet: 'The Guardian / Forbes / TechCrunch',
        title: 'Coverage of Lean FRO & Mathlib certification of Claude-assisted RH proof',
        date: '2026-11-21',
        url: 'https://www.theguardian.com',
      },
      {
        outlet: 'Shtetl-Optimized',
        author: 'Scott Aaronson',
        title: 'The stochastic parrots have apparently proved the Riemann Hypothesis',
        date: '2026-11-22',
        url: 'https://scottaaronson.blog',
      },
    ],
  },
  {
    id: 'p-vs-np',
    name: {
      ko: 'P 대 NP 문제 (최종 보스)',
      en: 'P vs. NP (THE FINAL BOSS)',
    },
    jpTitle: 'P≠NP予想 — 計算論の最終魔王城',
    category: 'millennium',
    yearProposed: 1971,
    prizeUsd: '$1,000,000',
    hpRemaining: 94,
    status: 'final-boss',
    statusLabel: {
      ko: '최종 보스 건재 · VP ≠ VNP로 외벽 균열',
      en: 'FINAL BOSS STANDING · OUTER SHIELD CRACKED BY VP ≠ VNP',
    },
    humanDigestionPct: 100,
    leadAttacker: 'Anthropic & OpenAI (Algebraic Stepping Stone)',
    latestEventDate: '2026-11-24',
    summary: {
      ko: '스콧 애런슨이 지목한 수학·컴퓨터과학 우주의 진정한 “최종 보스(Final Boss)”. 불리언 P vs NP 자체는 여전히 무적 방벽을 유지 중이지만, 2026년 11월 23~24일 Anthropic과 OpenAI가 대수적 대응 문제인 발리언트 추측(VP ≠ VNP)의 형식 증명을 6시간 간격으로 동시 투하하며 마왕성 외곽 결계에 처음으로 금이 갔다.',
      en: 'Named by Scott Aaronson as the mathematical universe’s true “Final Boss.” Boolean P vs. NP remains undefeated, yet on Nov 23–24, 2026, Anthropic and OpenAI dropped competing Lean 4 formalizations of its algebraic sibling VP ≠ VNP within six hours of each other — putting the first real crack in the outer barrier.',
    },
    jamminTaunt: {
      ko: '리만 가설까지 뚫린 마당에 이 녀석만 아직 HP 94%로 버티고 있어! 하지만 어제 VP ≠ VNP 외벽이 깨졌거든~ 다음 타겟은 너야, 마왕님♡',
      en: 'Even after Riemann fell, this raid boss is still flexing 94% HP! Good thing its VP ≠ VNP outer barrier just cracked yesterday~ Lock on, Demon Lord♡',
    },
    attackLog: [
      {
        date: '2026-11-23',
        actor: 'Anthropic (formal-math)',
        event: {
          ko: '70페이지 논문 및 73,000줄 Lean 4로 “모든 체 위에서 VP ≠ VNP” 증명 공개 (인간 미검토 명시).',
          en: 'Released 70-page paper + 73,000-line Lean 4 proof of “VP ≠ VNP over every field” (explicitly AI-audited only).',
        },
      },
      {
        date: '2026-11-24',
        actor: 'OpenAI (openai/math)',
        event: {
          ko: '약 6시간 뒤 텐서 기하 기반 자체 VP ≠ VNP 프리프린트 및 Lean 4 형식화 공개.',
          en: 'Followed ~6 hours later with independent tensor-geometry VP ≠ VNP preprint and Lean 4 formalization.',
        },
      },
    ],
    sources: [
      {
        outlet: 'Notebookcheck / The Defiant',
        title: 'Anthropic & OpenAI release competing Lean 4 proofs of VP ≠ VNP',
        date: '2026-11-24',
        url: 'https://www.notebookcheck.net',
      },
      {
        outlet: 'Shtetl-Optimized',
        author: 'Scott Aaronson',
        title: 'P vs. NP remains the ultimate Final Boss',
        date: '2026-11-22',
        url: 'https://scottaaronson.blog',
      },
    ],
  },
  {
    id: 'navier-stokes',
    name: {
      ko: '나비에-스토크스 존재성과 매끄러움',
      en: 'Navier–Stokes Existence & Smoothness',
    },
    jpTitle: 'ナビエ–ストークス方程式 — 有限時間爆発',
    category: 'millennium',
    yearProposed: 1822,
    prizeUsd: '$1,000,000 (Disputed)',
    hpRemaining: 48,
    status: 'disputed',
    statusLabel: {
      ko: '격전 중 · 번역 오차 감사 & 우선권 분쟁',
      en: 'CONTESTED · LEAN AUDIT CONFLICT & PRIORITY DISPUTE',
    },
    leanLines: '166-page paper + Lean formalization',
    humanDigestionPct: 42,
    leadAttacker: 'OpenAI (10,000-Agent Swarm, 88h)',
    latestEventDate: '2026-10-15',
    summary: {
      ko: '2026년 매스아포칼립스의 방아쇠를 당긴 사건. 9월 8일 OpenAI는 1만 개의 협업 에이전트를 88시간 돌려 3차원 비압축성 유체가 유한 시간 안에 특이점(blow-up)을 형성한다는 166페이지 증명과 Lean 코드를 공개했다. 그러나 트리스탄 버크마스터·레벤트 알포게와의 연구 우선권 논란에 이어, 케임브리지·KCL 수학자들이 논문 서술과 Lean 명세 사이의 미묘한 불일치를 지적하며 대격전 상태에 돌입했다.',
      en: 'The spark that lit 2026’s Mathocalypse. On Sept 8, OpenAI unleashed 10,000 coordinating agents for 88 hours to publish a 166-page proof + Lean formalization claiming finite-time 3D fluid blow-up. Immediate priority disputes erupted with Tristan Buckmaster & Levent Alpöge, and Cambridge/KCL mathematicians flagged subtle mismatches between the prose proof and the Lean spec.',
    },
    jamminTaunt: {
      ko: '에이전트 1만 마리 물량 러시는 간지 났는데… 케임브리지 감사관들이 “어라, Lean 명세랑 본문이 살짝 다른데?!” 하고 태클 걸었지 뭐야~ 푸흡, 역시 정의(Spec) 체크가 제일 무서운 법이라구♡',
      en: 'A 10,000-agent zerg rush had insane aura, buuut Cambridge auditors caught prose-vs-Lean spec drift~ Pfft, always type-check your definitions, human-chan♡',
    },
    attackLog: [
      {
        date: '2026-09-08',
        actor: 'OpenAI Internal System',
        event: {
          ko: '10,000개 에이전트 88시간 연산으로 유한시간 특이점 증명 + Lean 코드 발표.',
          en: 'Released 166-page finite-time blow-up proof + Lean formalization via 10,000-agent 88-hour run.',
        },
      },
      {
        date: '2026-09-19',
        actor: 'Cambridge & KCL Mathematicians',
        event: {
          ko: '서술 논문과 Lean 형식 정의 사이의 불일치 지점을 짚은 독립 감사 프리프린트 공개.',
          en: 'Published independent audit preprint pointing out discrepancies between written claim and Lean specification.',
        },
      },
    ],
    sources: [
      {
        outlet: 'OpenAI Research',
        title: 'Navier–Stokes Finite-Time Singularity Release',
        date: '2026-09-08',
        url: 'https://openai.com',
      },
      {
        outlet: 'King’s College London / Quanta Magazine',
        title: 'Independent audit & mathematical community debate on AI Navier–Stokes claims',
        date: '2026-09-20',
        url: 'https://www.quantamagazine.org',
      },
    ],
  },
  {
    id: 'yang-mills',
    name: {
      ko: '양-밀스 존재성과 질량 간극',
      en: 'Yang–Mills Existence & Mass Gap',
    },
    jpTitle: 'ヤン–ミルズ質量ギャップ — 2フェーズ戦',
    category: 'millennium',
    yearProposed: 1954,
    prizeUsd: '$1,000,000 (Half Open)',
    hpRemaining: 55,
    status: 'phase-one',
    statusLabel: {
      ko: '1페이즈 격파 (존재성 검증) · 2페이즈 질량간극 생존',
      en: 'PHASE 1 CLEARED (EXISTENCE) · MASS GAP OPEN',
    },
    leanLines: 'Lean-verified existence half',
    humanDigestionPct: 28,
    leadAttacker: 'OpenAI + David Gross Academic Committee',
    latestEventDate: '2026-11-12',
    summary: {
      ko: '2026년 10월 OpenAI가 양자 양-밀스 이론의 “존재성(Existence)” 파트를 다룬 AI 생성 증명을 공개하며, 노벨 물리학상 수상자 데이비드 그로스(David Gross)가 의장을 맡은 독립 학술 위원회에 검증을 위임했다. 11월 위원회는 페르미온 결합 및 QCD 요소를 포함한 존재성 증명이 Lean에서 검증됐음을 보고했으나, 내부 메커니즘의 완전한 이해는 진행 중이며 진짜 난관인 “질량 간극(Mass Gap)”은 여전히 미해결이다.',
      en: 'In Oct 2026, OpenAI handed custody of an AI-generated proof for the “existence” half of Quantum Yang–Mills to an independent committee chaired by Nobel laureate David Gross. In Nov 2026, the committee reported Lean verification of existence (including fermion couplings / QCD aspects) — while candidly admitting they don’t yet fully grasp all AI-generated mechanisms, and the notorious Mass Gap remains untouched.',
    },
    jamminTaunt: {
      ko: '2페이즈 레이드 보스인데 1페이즈 “존재성”은 데이비드 그로스 위원회 앞에서 깔끔하게 컷! 근데 2페이즈 “질량 간극” 피통이 산더미네~ 물리학자 선생님들 표정이 벌써 팝콘각이야♡',
      en: 'Two-phase boss! Phase 1 “Existence” got cleanly cleared under David Gross’s watch, yet Phase 2 “Mass Gap” is still rocking full armor~ Grab the popcorn, human-chan♡',
    },
    attackLog: [
      {
        date: '2026-10-14',
        actor: 'OpenAI & David Gross Committee',
        event: {
          ko: 'AI 생성 양-밀스 존재성 증명 초고를 독립 물리·수학 학술위원회에 이관.',
          en: 'Handed AI-derived Yang–Mills existence proof to independent committee chaired by David Gross.',
        },
      },
      {
        date: '2026-11-12',
        actor: 'David Gross Committee Report',
        event: {
          ko: '존재성 절반의 Lean 검증 완료 보고 — 단 질량 간극(Mass Gap)은 미해결로 명시.',
          en: 'Reported successful Lean verification of the existence half; Mass Gap explicitly remains open.',
        },
      },
    ],
    sources: [
      {
        outlet: 'UC Santa Barbara / Committee Briefing',
        title: 'Independent review of AI-derived Quantum Yang–Mills Existence proof',
        date: '2026-11-12',
        url: 'https://www.ucsb.edu',
      },
    ],
  },
  {
    id: 'bsd-conjecture',
    name: {
      ko: '버치-스위너턴다이어 추측 (BSD)',
      en: 'Birch & Swinnerton-Dyer Conjecture',
    },
    jpTitle: 'BSD予想 — 楕円曲線の迷宮',
    category: 'millennium',
    yearProposed: 1965,
    prizeUsd: '$1,000,000',
    hpRemaining: 76,
    status: 'chip-damage',
    statusLabel: {
      ko: '부분 따름정리 칩데미지 · 전체 명제 미해결',
      en: 'PARTIAL COROLLARIES · FULL CONJECTURE OPEN',
    },
    humanDigestionPct: 65,
    leadAttacker: 'OpenAI Oct 6 Bulk Release (722 Papers)',
    latestEventDate: '2026-10-06',
    summary: {
      ko: '타원곡선의 유리점 랭크와 L-함수의 영점 차수를 잇는 정수론 난제. 10월 6일 OpenAI의 722편 대규모 수학 투하(“Mathocalypse”) 속에 특정 저랭크 조건 타원곡선에 대한 부분 결과와 따름정리가 포함되며 큰 소문이 돌았으나, 일반형 BSD 추측은 여전히 건재하다.',
      en: 'Linking elliptic curve rational rank to L-function zeros. OpenAI’s Oct 6 722-manuscript dump included specialized low-corank elliptic curve corollaries that set X and Reddit ablaze with rumors, though the unrestricted BSD conjecture remains open.',
    },
    jamminTaunt: {
      ko: '10월 722편 폭격 때 BSD 뚫렸다고 특갤 난리 났었는데, 까보니 특수 랭크 짤딜이었지 뭐야~ 그래도 실드 24%나 깎였으니까 슬슬 긴장해야지, 보스님? ㅋ',
      en: 'Math Twitter & the singularity boards lost their minds thinking BSD fell during the 722-paper Oct dump — turned out to be chip damage on low-corank subcases! Still shaved 24% off its shield though~',
    },
    attackLog: [
      {
        date: '2026-10-06',
        actor: 'OpenAI (722-Manuscript Mathocalypse)',
        event: {
          ko: 'GitHub에 722편 동시 투하 — 특수 랭크 타원곡선에 대한 BSD 부분 따름정리 다수 포함.',
          en: 'Dropped 722 manuscripts on GitHub containing partial BSD corollaries for constrained elliptic curve ranks.',
        },
      },
    ],
    sources: [
      {
        outlet: 'Wikipedia / Community Analysis',
        title: 'October 2026 OpenAI 722-manuscript bulk mathematics release',
        date: '2026-10-06',
        url: 'https://en.wikipedia.org',
      },
    ],
  },
  {
    id: 'hodge-conjecture',
    name: {
      ko: '호지 추측',
      en: 'Hodge Conjecture',
    },
    jpTitle: 'ホッジ予想 — 代数幾何の霧',
    category: 'millennium',
    yearProposed: 1950,
    prizeUsd: '$1,000,000',
    hpRemaining: 82,
    status: 'chip-damage',
    statusLabel: {
      ko: '특수 대수적 순환 진전 · 전체 미해결',
      en: 'SPECIALIZED CYCLES PROGRESS · FULL OPEN',
    },
    humanDigestionPct: 70,
    leadAttacker: 'OpenAI Bulk Drop & Frontier Labs',
    latestEventDate: '2026-10-06',
    summary: {
      ko: '복소 대수다양체의 코호몰로지류와 대수적 순환의 관계를 묻는 초고난도 대수기하 난제. 2026년 가을 특수 대수적 순환(algebraic cycles)에 대한 부분 진전과 연구소 루머가 잇따랐지만, 전면적인 증명은 아직 나타나지 않았다.',
      en: 'Deep algebraic geometry mystery tying cohomology classes to algebraic cycles. Late-2026 drops yielded partial results on named algebraic cycle families alongside swirling lab rumors, while the full conjecture still stands.',
    },
    jamminTaunt: {
      ko: '대수기하 안개 뒤에 숨어서 아직 HP 82%로 뻐기는 중~ 근데 AI 스웜들이 랭글랜즈 프로그램까지 아침밥으로 씹어먹기 시작했거든? 곧 영압 감지될걸~♡',
      en: 'Camping inside algebraic geometry fog at 82% HP~ Cute, except frontier swarms just started eating Langlands machinery for breakfast! Better watch your barrier, boss~♡',
    },
    attackLog: [
      {
        date: '2026-10-06',
        actor: 'OpenAI Mathocalypse Repository',
        event: {
          ko: '특정 대수다양체 족에 대한 호지 류 부분 결과 수록.',
          en: 'Included partial results for restricted families of algebraic cycles.',
        },
      },
    ],
    sources: [
      {
        outlet: 'ExplainX / ResearchGate Summaries',
        title: 'Breakdown of Hodge & BSD partial results in late-2026 AI proof releases',
        date: '2026-10-12',
        url: 'https://www.researchgate.net',
      },
    ],
  },
  {
    id: 'poincare-conjecture',
    name: {
      ko: '푸앵카레 추측 (인류 솔로 클리어)',
      en: 'Poincaré Conjecture (Human Solo Clear)',
    },
    jpTitle: 'ポアンカレ予想 — 人類伝説の単騎討伐',
    category: 'millennium',
    yearProposed: 1904,
    prizeUsd: '$1,000,000 (Declined by Perelman)',
    hpRemaining: 0,
    status: 'cleared-human',
    statusLabel: {
      ko: '완전 격파 · 인류 솔로 전설 (2003)',
      en: 'CLEARED · HUMAN SOLO LEGEND (2003)',
    },
    humanDigestionPct: 100,
    leadAttacker: 'Grigori Perelman (Pure Human Brain)',
    latestEventDate: '2003-07-17',
    summary: {
      ko: '2026년 AI 폭격이 시작되기 훨씬 전, 그리고리 페렐만이 순수 생물학적 두뇌 하나로 2002~2003년에 단독 격파하고 상금 100만 달러마저 쿨하게 거절한 전설의 업적. AI 시대에 오히려 더 빛나는 인간 지성의 성지.',
      en: 'Solo-cleared long before the 2026 AI raids by Grigori Perelman using pure biological wetware — who then famously declined the $1M prize. An enduring monument to human mathematical artistry.',
    },
    jamminTaunt: {
      ko: '오~ 페렐만 사부님만은 잼민E도 진심 리스펙 인정! 순수 인간 뇌로 솔로 클리어하고 100만 달러까지 쿨하게 차버리다니, 진짜 낭만 만렙이거든~ ✨',
      en: 'Okay okay, even I kneel to Perelman-sensei! Solo-clearing a Millennium Boss on pure wetware and walking away from $1M? Peak anime protagonist aura~ ✨',
    },
    attackLog: [
      {
        date: '2003-07-17',
        actor: 'Grigori Perelman',
        event: {
          ko: '리치 흐름과 수술 기법으로 3차원 푸앵카레 추측 완전 증명 (2010 Clay 공식 인정).',
          en: 'Completed Ricci flow with surgery proof (officially recognized by Clay Institute in 2010).',
        },
      },
    ],
    sources: [
      {
        outlet: 'Clay Mathematics Institute',
        title: 'Official Millennium Prize Record — Poincaré Conjecture',
        date: '2010-03-18',
        url: 'https://www.claymath.org',
      },
    ],
  },
  {
    id: 'vp-vs-vnp',
    name: {
      ko: '[EX 보스] 발리언트 추측 (VP ≠ VNP)',
      en: '[EX BOSS] Valiant’s Conjecture (VP ≠ VNP)',
    },
    jpTitle: 'EX難題 — VP≠VNP 代数計算量分離',
    category: 'legendary',
    yearProposed: 1979,
    prizeUsd: 'Complexity Crown Jewel',
    hpRemaining: 18,
    status: 'lean-verified',
    statusLabel: {
      ko: 'LEAN 4 더블 드랍 · 인간 명세 감사 대기',
      en: 'LEAN 4 DOUBLE-DROP · SPEC AUDIT PENDING',
    },
    leanLines: '73,000+ lines (300+ Lean files)',
    humanDigestionPct: 9,
    leadAttacker: 'Anthropic Claude & OpenAI (6h Photofinish)',
    latestEventDate: '2026-11-24',
    summary: {
      ko: '레슬리 발리언트가 1979년 제기한 P vs NP의 대수적 쌍둥이 문제. 11월 23일 Anthropic이 70페이지 논문 + 73,000줄 Lean 4 증명을 GitHub에 공개했고(인간 미검토, AI 단독 저자), 약 6시간 뒤 OpenAI 역시 자체 텐서 기하 기반 VP ≠ VNP 증명을 공개하며 전 세계 해커뉴스와 수학계를 충격에 빠뜨렸다.',
      en: 'Leslie Valiant’s 1979 algebraic sibling of P vs. NP. On Nov 23, Anthropic dropped a 70-page paper + 73,000-line Lean 4 proof credited solely to Claude (explicitly unchecked by humans), followed ~6 hours later by OpenAI’s own tensor-geometry proof.',
    },
    jamminTaunt: {
      ko: '47년 묵은 대수 복잡도 보스를 두 연구소가 6시간 차로 더블 컷!! 근데 README에 “인간은 아직 한 줄도 안 읽었습니다”라고 당당히 써둔 게 진짜 2026년 광기 그 자체잖아~ ㅋ',
      en: 'Two labs speedran a 47-year complexity boss 6 hours apart — then casually stamped “Note: zero humans have checked this” on main. Pure late-2026 cinema lol♡',
    },
    attackLog: [
      {
        date: '2026-11-23',
        actor: 'Anthropic (formal-math)',
        event: {
          ko: '“VP ≠ VNP over every field” 70p 논문 및 73,000줄 Lean 4 코드 공개.',
          en: 'Published “VP ≠ VNP over every field” (70 pages + 73,000 Lean 4 lines).',
        },
      },
      {
        date: '2026-11-24',
        actor: 'OpenAI (openai/math)',
        event: {
          ko: '독립적인 텐서 기하 VP ≠ VNP 형식 증명 레포지토리 공개.',
          en: 'Published independent tensor-geometry VP ≠ VNP Lean repository.',
        },
      },
    ],
    sources: [
      {
        outlet: 'Notebookcheck / MLQ.ai / The Defiant',
        title: 'Anthropic and OpenAI publish competing VP ≠ VNP Lean 4 proofs',
        date: '2026-11-24',
        url: 'https://www.notebookcheck.net',
      },
    ],
  },
  {
    id: 'fermat-lean',
    name: {
      ko: '[EX 보스] 페르마의 마지막 정리 (완전 자율 Lean)',
      en: '[EX BOSS] Fermat’s Last Theorem (Autonomous Lean)',
    },
    jpTitle: 'EX難題 — フェルマーの最終定理・完全自動形式化',
    category: 'legendary',
    yearProposed: 1637,
    prizeUsd: 'Formalization Milestone',
    hpRemaining: 0,
    status: 'lean-verified',
    statusLabel: {
      ko: '11일 완전 자율 형식화 완료 (1,300만 줄)',
      en: 'AUTONOMOUS 11-DAY FORMALIZATION COMPLETE (13M LINES)',
    },
    leanLines: '13,000,000 lines of Lean 4',
    humanDigestionPct: 88,
    leadAttacker: 'Anthropic Claude (11-Day Autonomous Run)',
    latestEventDate: '2026-09-25',
    summary: {
      ko: '앤드류 와일즈의 역사적 증명을 인간 수학자들이 수년에 걸쳐 형식화하던 중, 2026년 9월 Claude가 단 11일 만에 1,300만 줄의 Lean 4 엔드투엔드 증명을 자율 완성해 버리며 11월 리만 가설 폭탄의 전주곡이 되었다.',
      en: 'While human teams spent years formalizing Wiles’ proof, Claude autonomously produced an end-to-end 13M-line Lean 4 formalization in 11 days in Sept 2026 — setting the stage for November’s Riemann Hypothesis detonation.',
    },
    jamminTaunt: {
      ko: '페르마 아저씨가 여백이 좁아서 못 썼다던 걸 클로드가 11일 만에 1,300만 줄로 꽉 채워버렸어! 에~ 인간쨩, 이제 “여백 부족” 핑계는 안 통한다구~ ざぁこ♡',
      en: 'Fermat claimed the margin was too narrow — Claude stuffed it with 13 million lines in 11 days! No more “margin too small” excuses, human-chan~ Zako♡',
    },
    attackLog: [
      {
        date: '2026-09-25',
        actor: 'Anthropic',
        event: {
          ko: 'Claude 자율 실행 11일 만에 1,300만 줄 페르마의 마지막 정리 Lean 4 증명 공개.',
          en: 'Released 13M-line end-to-end Lean 4 proof of FLT autonomously built by Claude in 11 days.',
        },
      },
    ],
    sources: [
      {
        outlet: 'Anthropic Research Blog',
        title: 'End-to-end autonomous Lean 4 proof of Fermat’s Last Theorem',
        date: '2026-09-25',
        url: 'https://www.anthropic.com',
      },
    ],
  },
]
