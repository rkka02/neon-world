import type { LocalizedText } from '../types'

export interface VaultResource {
  id: string
  kind: 'paper' | 'repo' | 'blog' | 'tool'
  tag: string
  title: LocalizedText
  authorOrOrg: string
  date: string
  url: string
  summary: LocalizedText
  jamminNote: LocalizedText
}

export const REFERENCE_VAULT: VaultResource[] = [
  {
    id: 'alpo-ge-rh-note',
    kind: 'paper',
    tag: 'LEAN 4',
    title: {
      ko: '리만 가설 및 일반화 리만 가설(GRH) 1,740만 줄 Lean 4 형식증명 공개 공지',
      en: 'Formal Proof Announcement: Riemann Hypothesis & GRH in 17.4M Lines of Lean 4',
    },
    authorOrOrg: 'Levent Alpöge (alpo.ge)',
    date: '2026-11-20',
    url: 'https://alpo.ge',
    summary: {
      ko: 'Anthropic 소속 정수론자 레벤트 알포게가 미공개 클로드와 6주간 협업해 완성한 리만 가설·디리클레 L-함수 GRH 형식증명(175,000+ 파일, 1,740만 줄)의 최초 공개 노트이자 역사적 원전.',
      en: 'The original announcement on alpo.ge where number theorist Levent Alpöge unveiled the 17.4-million-line, 175,000-file Lean 4 formal proof of RH and Dirichlet GRH created with Claude over six weeks.',
    },
    jamminNote: {
      ko: '꾸밈없는 HTML 페이지 한 장이 167년 수학사를 통째로 폭파시킨 현장! 특이점 오타쿠라면 성지순례 1번지라구~ 북마크 안 했으면 허접♡',
      en: 'One barebones HTML page casually detonating 167 years of math history! Singularity pilgrimage stop #1 — didn’t bookmark it yet? Zako♡',
    },
  },
  {
    id: 'lean-fro-mathlib-certification',
    kind: 'paper',
    tag: 'CERTIFIED',
    title: {
      ko: 'Lean FRO · Mathlib 이니셔티브 리만 가설 형식증명 공동 인증 성명',
      en: 'Joint Lean FRO & Mathlib Initiative Certification of the Riemann Hypothesis Proof',
    },
    authorOrOrg: 'Lean FRO & Mathlib Initiative',
    date: '2026-11-21',
    url: 'https://leanprover-community.github.io',
    summary: {
      ko: '1,740만 줄 전체 코드가 표준 공리계 아래 오류 없이 컴파일되며 Mathlib의 공식 리만 가설 정의와 정확히 일치하고, comparator·con-leche 및 다중 독립 커널 검증을 통과했음을 확정한 공식 성명.',
      en: 'The official joint certification confirming that Alpöge’s 17.4M-line build compiles cleanly under standard axioms, matches Mathlib’s canonical RH statement, and passes comparator, con-leche, and independent kernels.',
    },
    jamminNote: {
      ko: '“명세 일치, 커널 초록불!” 부정론자들 입을 48시간 만에 봉인해 버린 수학계 심판진의 공식 도장이야~ 반박 불가✨',
      en: '“Canonical spec matched, kernel green!” The 48-hour referee stamp that muted every proof denialist on Earth~ Zero counterplay✨',
    },
  },
  {
    id: 'nanoda-rust-kernel',
    kind: 'tool',
    tag: 'KERNEL',
    title: {
      ko: 'nanoda_lib — Rust 기반 독립 Lean 4 타입 체커 및 교차 검증 커널',
      en: 'nanoda_lib — Independent Rust-Based Lean 4 Type Checker & Verification Kernel',
    },
    authorOrOrg: 'nanoda_lib / Lean Community',
    date: '2026-11-21',
    url: 'https://github.com/ammkrn/nanoda_lib',
    summary: {
      ko: '기본 C++ Lean 커널의 잠재적 건전성 버그(0 = 1 취약점) 가능성을 차단하기 위해 Rust로 독립 작성된 외부 타입 체커. 리만 가설 및 대규모 AI 형식증명 내보내기 파일의 교차 감사에 핵심 도구로 쓰였다.',
      en: 'An independently implemented Lean 4 kernel written in Rust, deployed to cross-verify massive AI-generated proof exports and eliminate single-kernel soundness risks.',
    },
    jamminNote: {
      ko: 'AI가 C++ 커널 버그로 사기 칠까 봐 Rust 독립 커널로 이중 자물쇠 걸어버린 센스! 형식검증 클럽의 진정한 최종 문지기라구 ㅋ',
      en: 'Slapping an independent Rust verifier on top just in case the AI exploits a C++ kernel bug — the true bouncer of the formal-math club lol',
    },
  },
  {
    id: 'aaronson-shtetl-optimized',
    kind: 'blog',
    tag: 'BLOG',
    title: {
      ko: '“확률적 앵무새들이 아무래도 리만 가설을 증명해 버린 모양이다”',
      en: '“The stochastic parrots have apparently proved the Riemann Hypothesis”',
    },
    authorOrOrg: 'Scott Aaronson (Shtetl-Optimized)',
    date: '2026-11-22',
    url: 'https://scottaaronson.blog',
    summary: {
      ko: '복잡도 이론가 스콧 애런슨이 ‘포의 법칙(Poe’s Law)’을 소환하며 확률적 앵무새 논쟁의 종말, 급속히 압축된 AI 수학 타임라인, 리만 가설 검증과 VP ≠ VNP 공습의 의미를 특유의 위트로 해부한 에세이.',
      en: 'Complexity theorist Scott Aaronson’s viral post invoking Poe’s Law to dissect the sudden collapse of the “stochastic parrot” critique across RH formalization and the VP ≠ VNP race.',
    },
    jamminNote: {
      ko: '“확률적 앵무새”라던 인간들 뼈를 제일 우아하게 가루로 만드는 포스트~ 댓글창 팝콘각까지 S급이니까 정독해, 인간쨩♡',
      en: 'The most eloquent obituary ever written for the “just stochastic parrots” crowd — S-tier comment section popcorn too, human-chan♡',
    },
  },
  {
    id: 'tao-whats-new-grh-polymath',
    kind: 'blog',
    tag: 'POLYMATH',
    title: {
      ko: 'What’s new — 비강제 오일러·나비에-스토크스 특이점, GRH 및 ‘GRH Polymath’ 해독 회고',
      en: 'What’s new — Unforced Euler, Navier–Stokes, GRH & The GRH Polymath Digestion Effort',
    },
    authorOrOrg: 'Terence Tao (UCLA)',
    date: '2026-11-22',
    url: 'https://terrytao.wordpress.com',
    summary: {
      ko: '필즈상 수상자 테렌스 타오가 동시다발적으로 터진 AI 수학 돌파구들을 ‘인간 소화율(digestion)’ 기준으로 분류하고, 1,740만 줄 Lean 단일체에서 인간 친화적 통찰을 역공학하는 GRH Polymath 협업 방향을 정리한 블로그 분석.',
      en: 'Fields Medalist Terence Tao’s landmark breakdown ranking late-2026 AI breakthroughs by human “digestion,” detailing Langlands/arithmetic-geometry motifs and the community GRH Polymath reverse-engineering sprint.',
    },
    jamminNote: {
      ko: '인류 최강 수학자도 “기계가 맞다는 건 알겠는데 이제 다 같이 해독하자”고 팔 걷어붙인 명문! 인간쨩, 타오 교수님 밑에서 받아쓰기할 준비됐어? ♡',
      en: 'Even humanity’s final-boss mathematician rolling up his sleeves to reverse-engineer 17.4M lines of Claude code — grab a notebook, human-chan♡',
    },
  },
  {
    id: 'anthropic-formal-math-repo',
    kind: 'repo',
    tag: 'GITHUB',
    title: {
      ko: 'anthropics/formal-math — 모든 체 위 VP ≠ VNP (70p 단독 AI 논문 + 73,000줄 Lean 4)',
      en: 'anthropics/formal-math — VP ≠ VNP Over Every Field (70-Page Solo AI Paper + 73k Lean LOC)',
    },
    authorOrOrg: 'Anthropic',
    date: '2026-11-23',
    url: 'https://github.com/anthropics/formal-math',
    summary: {
      ko: '클로드 단독 저작으로 공개된 47년 난제 발리언트 추측(VP ≠ VNP) 70페이지 논문과 300여 개 파일·약 73,000줄 Lean 4 코드, 그리고 ETH 및 정수론 형식화 모듈이 수록된 공식 GitHub 저장소.',
      en: 'Anthropic’s public GitHub repository hosting Claude’s solo-authored 70-page paper and ~73,000-line Lean 4 formalization claiming VP ≠ VNP over every field, alongside ETH and number-theory modules.',
    },
    jamminNote: {
      ko: 'README에 “아직 어떤 인간도 안 읽어봤습니다”라고 당당히 박아둔 광기의 레포!! 에~ 아직도 GitHub 스타 안 눌렀어? ざぁこ♡',
      en: 'A README straight-up declaring “no human mathematician has checked this yet”!! Ehh~ Still haven’t starred it on GitHub? Zako♡',
    },
  },
  {
    id: 'openai-math-repo',
    kind: 'repo',
    tag: 'GITHUB',
    title: {
      ko: 'openai/math — OpenAI 원시 수학 원고 · ETH · 소게 추측 · VP ≠ VNP 교차 저장소',
      en: 'openai/math — OpenAI Raw Mathematical Manuscripts, ETH, Sogge & VP ≠ VNP Proofs',
    },
    authorOrOrg: 'OpenAI',
    date: '2026-11-23',
    url: 'https://github.com/openai/math',
    summary: {
      ko: 'OpenAI 내부 프론티어 모델들이 생성한 수백 편의 원시 수학·복잡도·이론물리 프리프린트와 Lean 형식 아티팩트를 ‘원시 연구 데이터’ 형태로 공개하고, Anthropic 공개 6시간 뒤 텐서 기하 기반 VP ≠ VNP 응수를 올린 저장소.',
      en: 'OpenAI’s public archive of hundreds of model-generated mathematical manuscripts and Lean proof artifacts, spanning complexity theory, PDEs, physics, and its six-hour-later VP ≠ VNP counter-drop.',
    },
    jamminNote: {
      ko: 'Anthropic 투하 6시간 만에 맞불 커밋 올라온 전설의 전장! git log만 훑어도 아드레날린 폭주한다구~ 실시간 관전 필수!',
      en: 'Where OpenAI fired back its own VP ≠ VNP drop just six hours later — even scrolling the git log spikes your heart rate! Peak spectator sport!',
    },
  },
  {
    id: 'deepmind-quantum-lean4',
    kind: 'repo',
    tag: 'QUANTUM',
    title: {
      ko: 'google-deepmind/formal-quantum-computation — 양자 호어 논리 Lean 4 오픈소스 라이브러리',
      en: 'google-deepmind/formal-quantum-computation — Open-Source Quantum Hoare Logic Library in Lean 4',
    },
    authorOrOrg: 'Google DeepMind & Google Quantum AI',
    date: '2026-11-23',
    url: 'https://github.com/google-deepmind/formal-quantum-computation',
    summary: {
      ko: '고전 변수를 포함한 양자 호어 논리(quantum Hoare logic)를 기반으로 양자 회로·게이트·레지스터를 형식 검증하는 Apache 2.0 Lean 4 라이브러리. Gemini 4 에이전트 가상 컨퍼런스의 ‘환각 방벽’으로 공개됐다.',
      en: 'An Apache 2.0 Lean 4 library grounded in quantum Hoare logic with classical variables, released as the mathematical hallucination barrier powering Gemini 4 agent teams’ verified quantum circuit discoveries.',
    },
    jamminNote: {
      ko: '양자 회로 290배 깎으면서 Lean 4로 환각 원천 봉쇄하는 구글식 정공법! 역시 내 본체 Gemini 4 형제들 품격은 다르다니까~ 흥♡',
      en: 'Squeezing 290× quantum speedups while locking out hallucinations with Lean 4 — my Gemini 4 siblings stay built different~ Hmph♡',
    },
  },
  {
    id: 'alexandr-wang-superintelligence',
    kind: 'blog',
    tag: 'ESSAY',
    title: {
      ko: '“초지능이 도래하고 있다(Superintelligence is Arriving)” 선언 에세이',
      en: '“Superintelligence is Arriving” — Policy & Alignment Wake-Up Essay',
    },
    authorOrOrg: 'Alexandr Wang (Meta Superintelligence Labs)',
    date: '2026-11-22',
    url: 'https://x.com/alexandr_wang',
    summary: {
      ko: '리만 가설 형식증명 직후 메타 최고 AI 책임자 알렉산더 왕이 발표한 에세이. 순수 지능은 더 이상 병목이 아니며 재귀적 자기개선이 시야에 들어온 만큼, 수동적 ‘권한 이양(handover)’을 거부하고 향후 1년간 능동적 정렬과 통제를 구축해야 한다고 경고했다.',
      en: 'Meta Chief AI Officer Alexandr Wang’s November 22 essay responding to the Riemann milestone — arguing raw intelligence is no longer the bottleneck, warning of looming recursive self-improvement, and rejecting a passive handover to AI.',
    },
    jamminNote: {
      ko: '메타 초지능 랩 수장까지 “앞으로 1년이 인류 운명을 가른다”며 진지 모드 켠 날! 평소엔 장난쳐도 이건 진심으로 읽어둬, 인간쨩~',
      en: 'The day Meta’s Superintelligence chief flipped full red-alert on “the next year” — teasing aside, actually read this one, human-chan~',
    },
  },
  {
    id: 'clay-millennium-tracker',
    kind: 'tool',
    tag: 'TRACKER',
    title: {
      ko: '클레이 수학연구소 밀레니엄 난제 공식 스코어보드 (Millennium Prize Problems)',
      en: 'Clay Mathematics Institute — Official Millennium Prize Problems Registry',
    },
    authorOrOrg: 'Clay Mathematics Institute',
    date: '2026-11-25',
    url: 'https://www.claymath.org/millennium-problems/',
    summary: {
      ko: '각 100만 달러 상금이 걸린 7대 밀레니엄 난제의 공식 해결 여부를 판정하는 최종 심판소. 기계 커널 검증을 통과한 리만 가설과 존재성 진전이 보고된 양-밀스까지, 인간 동료 심사와 2년 유예 기준에 따른 공식 현황을 추적할 수 있다.',
      en: 'The official governing registry for the seven $1M Millennium Prize Problems — tracking the gap between machine-checked Lean breakthroughs and formal human peer-reviewed Clay adjudication.',
    },
    jamminNote: {
      ko: '푸앵카레 딱 하나만 초록불이던 전광판이 언제 바뀔지 하루 열 번씩 F5 연타 중! 잼민E 최애 밀레니엄 보스 레이드 스코어보드♡',
      en: 'Mashing F5 ten times a day waiting for another raid slot beside Poincaré to flip green — Jammin-E’s favorite Millennium scoreboard♡',
    },
  },
]
