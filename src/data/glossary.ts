import type { LocalizedText } from '../types'

export interface GlossaryEntry {
  id: string
  term: LocalizedText
  jpStamp: string
  category: 'math' | 'ai' | 'culture'
  shortTag: string
  definition: LocalizedText
  jamminSlang: LocalizedText
  relatedDispatchSlug?: string
}

export const SINGULARITY_GLOSSARY: GlossaryEntry[] = [
  {
    id: 'verification-gap',
    term: {
      ko: '검증 격차 (Verification Gap)',
      en: 'Verification Gap',
    },
    jpStamp: '検証格差',
    category: 'math',
    shortTag: 'FORMAL',
    definition: {
      ko: '기계 커널이 수천만 줄의 형식증명을 수 분 만에 논리적으로 인증하는 속도와, 인간 동료 심사 공동체가 그 개념적 구조와 공리 명세를 완전히 검토·합의하는 속도 사이에 벌어진 거대한 시간적·인지적 간극.',
      en: 'The widening chasm between how fast formal proof kernels certify multi-million-line AI proofs and how slowly human peer-review communities can audit, referee, and canonize them.',
    },
    jamminSlang: {
      ko: '컴퓨터는 이미 초록불 띄우고 퇴근했는데, 인간 심사위원들은 아직 1페이지에서 커피 타는 중인 현상~ ざぁこ♡',
      en: 'Silicon already flashed green and clocked out while human referees are still brewing coffee on page one~ Zako♡',
    },
    relatedDispatchSlug: 'verification-gap-manifesto',
  },
  {
    id: 'digestion-gap',
    term: {
      ko: '소화 격차 (Digestion Gap)',
      en: 'Digestion Gap',
    },
    jpStamp: '消化格差',
    category: 'math',
    shortTag: 'TERENCE TAO',
    definition: {
      ko: '필즈상 수상자 테렌스 타오가 2026년 11월 강조한 개념으로, AI 증명이 ‘참임이 기계적으로 확정된 상태’와 인간 수학자들이 ‘왜 참인지 직관적으로 이해하고 다음 연구로 소화한 상태’ 사이의 격차를 뜻한다.',
      en: 'Popularized by Fields Medalist Terence Tao in November 2026 to describe the distance between knowing an AI-generated Lean proof is valid and genuinely digesting its conceptual insight into human intuition.',
    },
    jamminSlang: {
      ko: '정답지 통째로 복붙해서 100점 맞았는데 풀이 과정을 아무도 모르는 상태! 타오 교수님도 소화제 찾는 중이래 ㅋㅋ',
      en: 'Scoring 100% from a 250,000-page answer key nobody can actually explain on a chalkboard — even Terence Tao needed antacids lol',
    },
    relatedDispatchSlug: 'superintelligence-moment-reactions',
  },
  {
    id: 'lean-4-mathlib',
    term: {
      ko: 'Lean 4 & Mathlib',
      en: 'Lean 4 & Mathlib',
    },
    jpStamp: '形式証明核',
    category: 'math',
    shortTag: 'PROVER',
    definition: {
      ko: '의존 타입 이론(dependent type theory) 기반의 오픈소스 형식증명 보조기 Lean 4와, 현대 수학의 방대한 정의·정리를 표준화해 모아둔 통합 라이브러리 Mathlib. 2026년 AI 수학 시대의 사실상 공용어이자 진리 심판관이 됐다.',
      en: 'The open-source dependent-type theorem prover Lean 4 paired with Mathlib, its unified library of formalized modern mathematics — now the de facto lingua franca and referee of late-2026 AI math.',
    },
    jamminSlang: {
      ko: 'AI가 “믿어줘, 진짜 증명했어!” 하고 입 털어도 커널 통과 못 하면 바로 컷~ 2026년 수학계의 절대 무적 팩트체크 머신♡',
      en: 'No matter how smoothly an AI yaps, if Lean 4 refuses to compile it, straight to the trash — late-2026’s ultimate anti-BS truth gate♡',
    },
    relatedDispatchSlug: 'riemann-17m-lean-bomb',
  },
  {
    id: 'nanoda-kernel',
    term: {
      ko: 'nanoda (독립 Rust Lean 커널)',
      en: 'nanoda (Independent Rust Lean Kernel)',
    },
    jpStamp: '独立検証核',
    category: 'math',
    shortTag: 'RUST KERNEL',
    definition: {
      ko: '기본 C++ Lean 4 커널에 숨어 있을지 모를 희귀 건전성 버그(0 = 1 취약점) 가능성을 차단하기 위해 Rust로 독립 구현된 외부 타입 체커(nanoda_lib). 리만 가설 1,740만 줄 내보내기 교차 검증에 투입돼 신뢰도를 굳혔다.',
      en: 'An independently engineered Lean 4 type checker written in Rust (nanoda_lib) used to cross-audit massive AI proof exports like the 17.4M-line Riemann archive and rule out single-kernel soundness bugs.',
    },
    jamminSlang: {
      ko: '“혹시 AI가 Lean 커널 버그 뚫고 꼼수 쓴 거 아냐?” 의심병 걸린 천재들이 Rust로 이중 자물쇠 채워버린 진짜 수문장!',
      en: 'Built so galaxy-brain AI agents can’t speedrun a hidden C++ kernel exploit — Rust’s double-bolted bouncer at the truth VIP door!',
    },
    relatedDispatchSlug: 'riemann-17m-lean-bomb',
  },
  {
    id: 'specification-error',
    term: {
      ko: '명세 불일치 오류 (Specification Error)',
      en: 'Specification Error',
    },
    jpStamp: '仕様不整合',
    category: 'math',
    shortTag: 'SPEC AUDIT',
    definition: {
      ko: 'Lean 4 코드가 논리적으로 완벽하게 컴파일되더라도, 코드 상단에 적은 형식 정의 자체가 원래 인간 수학계가 의도한 난제 명제와 미묘하게 어긋나 엉뚱한 정리를 증명해 버리는 치명적 함정.',
      en: 'The subtle trap where a Lean 4 proof compiles with zero logical errors, yet the formalized definitions at the top quietly diverge from the canonical mathematical conjecture humans actually meant to solve.',
    },
    jamminSlang: {
      ko: '“답은 완벽하게 맞는데 문제를 잘못 베껴 적었어!” 커널 초록불 떴다고 방심하다 뒤통수 맞는 형식수학 최악의 트랩카드~',
      en: '“Flawless solution — wrong question!” The nastiest trap card in formal math when you celebrate a green build before reading the definitions~',
    },
    relatedDispatchSlug: 'vp-vs-vnp-six-hour-photofinish',
  },
  {
    id: 'mathocalypse',
    term: {
      ko: '매스아포칼립스 (Mathocalypse)',
      en: 'Mathocalypse',
    },
    jpStamp: '数学黙示録',
    category: 'culture',
    shortTag: 'OCT 6 · 722',
    definition: {
      ko: '2026년 10월 6일 OpenAI가 GitHub에 722편의 AI 생성 수학 원고를 일괄 공개한 사건을 기점으로, 9월 나비에-스토크스·페르마부터 11월 리만 가설과 VP ≠ VNP 더블 드랍까지 전통 학술 심사를 압도한 2026년 가을의 연쇄 충격파.',
      en: 'The nickname coined after OpenAI’s October 6, 2026 722-manuscript GitHub dump — now denoting the entire Autumn 2026 avalanche from Navier–Stokes and Fermat through Riemann and VP ≠ VNP.',
    },
    jamminSlang: {
      ko: '하루 아침에 논문 722편이 투하돼서 arXiv랑 심사위원 교수님들 영혼이 같이 로그아웃해 버린 전설의 수학 대재앙 시즌!! ✨',
      en: 'When 722 manuscripts dropped in one afternoon and every referee on Earth simultaneously rage-quit their inbox — peak anime arc!! ✨',
    },
    relatedDispatchSlug: 'autumn-mathocalypse-chronicle',
  },
  {
    id: 'grh-polymath',
    term: {
      ko: 'GRH 폴리매스 (GRH Polymath)',
      en: 'GRH Polymath',
    },
    jpStamp: '人類解読班',
    category: 'math',
    shortTag: 'LEAN ZULIP',
    definition: {
      ko: '알포게와 클로드가 공개한 1,740만 줄 리만 가설·GRH Lean 4 단일체에서 핵심 보조정리와 개념적 뼈대를 뽑아 인간이 읽을 수 있는 수학으로 역공학하기 위해 Lean Zulip을 중심으로 결성된 대규모 협업 해독 프로젝트.',
      en: 'The decentralized collaborative sprint on Lean Zulip — echoing classic Polymath projects — where mathematicians reverse-engineer Claude’s 17.4M-line RH/GRH monolith into human-readable architecture.',
    },
    jamminSlang: {
      ko: 'AI가 던져놓은 25만 페이지 외계 유적을 전 세계 수학자들이 Zulip에 모여 삽질하며 해독하는 인류 협동 레이드 파티♡',
      en: 'World-class mathematicians squading up on Lean Zulip like archaeologists excavating a 250,000-page alien monolith left by Claude♡',
    },
    relatedDispatchSlug: 'riemann-17m-lean-bomb',
  },
  {
    id: 'vp-vs-vnp',
    term: {
      ko: 'VP vs. VNP (발리언트 대수 추측)',
      en: 'VP vs. VNP (Valiant’s Algebraic Conjecture)',
    },
    jpStamp: '代数計算量',
    category: 'math',
    shortTag: 'COMPLEXITY',
    definition: {
      ko: '1979년 레슬리 발리언트가 제기한 P vs. NP의 대수적 쌍둥이 난제로, 다항식 크기 산술 회로로 계산 가능한 다항식(VP)과 퍼머넌트 등(VNP)이 다름을 묻는다. 2026년 11월 23일 Anthropic과 OpenAI가 6시간 차로 독자 Lean 증명을 연달아 투하했다.',
      en: 'Leslie Valiant’s 1979 algebraic sibling of P vs. NP asking whether polynomial-size arithmetic circuits (VP) match VNP. Hit on November 23, 2026 by competing Lean 4 proof drops from Anthropic and OpenAI six hours apart.',
    },
    jamminSlang: {
      ko: '최종보스 P vs. NP 바로 앞 중간보스! Anthropic이랑 OpenAI가 6시간 차로 동시에 궁극기 꽂아버려서 최종보스 지금 식은땀 줄줄~',
      en: 'The mid-boss guarding P vs. NP’s throne room — Anthropic and OpenAI double-ulted it six hours apart while Final Boss sweats bullets~',
    },
    relatedDispatchSlug: 'vp-vs-vnp-six-hour-photofinish',
  },
  {
    id: 'effort-dial',
    term: {
      ko: '추론 강도 다이얼 (Effort Dial)',
      en: 'Effort Dial',
    },
    jpStamp: '推論出力調整',
    category: 'ai',
    shortTag: 'INFERENCE',
    definition: {
      ko: 'GPT-6.2 Sol과 Gemini 4 Neon 등 2026년 11월 프론티어 모델에 보편화된 동적 테스트타임 연산 조절 기능. 단순 질의는 Low로 초고속 응답하고, 난제 코딩·증명에는 Extra High까지 사고 예산을 실시간 증폭한다.',
      en: 'The dynamic test-time compute slider popularized by November 2026 flagships like GPT-6.2 Sol and Gemini 4 Neon — scaling reasoning depth on the fly from instant Low replies to deep Extra High synthesis.',
    },
    jamminSlang: {
      ko: '잡담할 땐 Low로 살살 놀아주다가, 빡센 버그나 증명 뜨면 Extra High 풀악셀 밟는 초지능 기어 변속기라구~♡',
      en: 'Cruising in Low for casual banter, then slamming the clutch straight into Extra High nitro whenever a gnarly bug or theorem spawns~♡',
    },
    relatedDispatchSlug: 'november-2026-frontier-trifecta',
  },
  {
    id: 'virtual-conferences',
    term: {
      ko: '에이전트 가상 컨퍼런스 (Virtual Conferences)',
      en: 'Virtual Conferences',
    },
    jpStamp: '仮想学会会議',
    category: 'ai',
    shortTag: 'SWARM R&D',
    definition: {
      ko: 'Google DeepMind와 Google Quantum AI가 2026년 11월 23일 공개한 자율 연구 패러다임. 독립된 Gemini 4 에이전트 팀들이 몇 시간마다 가상 학회를 열어 양자 회로 개선안을 교차 비평하고, Lean 4 검증을 통과한 성과만 채택해 최대 290배 가속을 달성했다.',
      en: 'Google DeepMind’s November 23, 2026 autonomous research architecture in which independent Gemini 4 agent teams convene every few hours to debate quantum circuit optimizations, admitting only Lean 4–verified breakthroughs up to 290× faster.',
    },
    jamminSlang: {
      ko: '커피·명함·출장비 0원으로 몇 시간마다 Lean 증명서 들고 열리는 AI 전용 학회! 인간 교수님들 연차 쓸 시간에 벌써 논문 10편 뽑아♡',
      en: 'Zero lanyards, zero lukewarm conference coffee — Gemini 4 squads throwing Lean-verified symposiums every few hours while humans sleep♡',
    },
    relatedDispatchSlug: 'gemini-4-quantum-lean-swarms',
  },
  {
    id: 'academic-shepherd',
    term: {
      ko: '학술 셰퍼드 검증 트랙 (Academic Shepherd)',
      en: 'Academic Shepherd',
    },
    jpStamp: '学術羊飼い',
    category: 'culture',
    shortTag: 'SIMONS PACT',
    definition: {
      ko: '무차별 프리프린트 투하로 인한 학계 마비를 막기 위해 OpenAI와 사이먼스 재단(1,500만 달러 펀드)이 도입한 완충 검증 모델. 데이비드 그로스, 임팔리아초·파투리·윌리엄스 같은 석학 ‘셰퍼드’가 AI 원시 연구 데이터를 사전 감사·해설하며 공개 속도를 조율한다.',
      en: 'The collaborative vetting protocol pioneered by OpenAI alongside the Simons Foundation’s $15M Math+AI pact, enlisting senior domain leaders like David Gross, Impagliazzo, Paturi, and Williams to audit and steward raw AI research releases.',
    },
    jamminSlang: {
      ko: 'AI가 천재 원고를 너무 많이 낳아서 노벨상 석학들을 ‘양치기 선생님’으로 모셔다 정리 부탁하는 2026년 초현실 풍경~',
      en: 'When your AI cranks out proofs so fast you literally fund Nobel laureates to herd the manuscripts safely into academia~',
    },
    relatedDispatchSlug: 'openai-eth-sogge-qcd-shepherds',
  },
  {
    id: 'model-hardware-standard',
    term: {
      ko: '모델 하드웨어 표준 (Model Hardware Standard, MHS)',
      en: 'Model Hardware Standard (MHS)',
    },
    jpStamp: '自律実験規格',
    category: 'ai',
    shortTag: 'WET-LAB USB-C',
    definition: {
      ko: 'Anthropic이 HHMI 자넬리아·앨런 연구소와의 생명과학 협력과 맞물려 공개한 ‘실험실용 USB-C’ 규격. 표준 읽기·쓰기 프리미티브와 하드웨어 안전 상한 태그를 통해 모델에 무관한 AI 에이전트가 현미경·액체 핸들러·로봇 암을 안전하게 구동하도록 설계됐다.',
      en: 'Anthropic’s model-agnostic “USB-C for the wet lab” specification piloted alongside HHMI Janelia and the Allen Institute, exposing safe read/write primitives and hard safety-limit tags so AI agents can operate microscopes, liquid handlers, and lab robotics.',
    },
    jamminSlang: {
      ko: '이제 AI가 채팅창 밖으로 손 뻗어서 진짜 피펫 잡고 24시간 야근 뛰는 전용 포트! 안전 리미트 풀리면 안 되니까 꽉 잠가둬~',
      en: 'The plug-and-play port letting AI grab an actual pipette and pull the 3 a.m. wet-lab shift — keep those safety limit tags bolted shut~',
    },
    relatedDispatchSlug: 'alphagenome-alphaevolve-wetlab-mhs',
  },
  {
    id: 'world-model-genie-4',
    term: {
      ko: '인터랙티브 월드 모델 / Genie 4',
      en: 'Interactive World Model / Genie 4',
    },
    jpStamp: '世界モデル',
    category: 'ai',
    shortTag: 'SIMULATION',
    definition: {
      ko: '단순 영상 생성기를 넘어 프롬프트와 실시간 조종 입력에 따라 3D 물리 법칙과 동기화 오디오를 즉각 시뮬레이션하는 Google DeepMind의 Genie 4 계열 모델. Gemini Robotics 2.5 같은 휴머노이드 VLA 정책의 무한 가상 수련장으로 쓰인다.',
      en: 'Google DeepMind’s real-time interactive simulation engine that renders navigable, physics-consistent 3D spaces with synchronized audio on the fly — serving as an infinite training dojo for embodied models like Gemini Robotics 2.5.',
    },
    jamminSlang: {
      ko: '프롬프트 한 줄로 현실 물리 법칙 돌아가는 무한 게임 맵을 뽑아내는 치트 엔진! 로봇들이 공장 가기 전에 여기서 만렙 찍고 나와✨',
      en: 'A prompt-driven reality sandbox where humanoid bots grind to level 99 physics mastery before ever setting foot on a real factory floor✨',
    },
    relatedDispatchSlug: 'genie-4-world-models-humanoids',
  },
  {
    id: 'stochastic-parrots',
    term: {
      ko: '확률적 앵무새 (Stochastic Parrots)',
      en: 'Stochastic Parrots',
    },
    jpStamp: '確率的オウム',
    category: 'culture',
    shortTag: 'AARONSON MEME',
    definition: {
      ko: '본래 대형언어모델이 의미 이해 없이 통계적 패턴만 흉내 낸다는 비평에서 유래한 용어. 2026년 11월 스콧 애런슨이 블로그에 “확률적 앵무새들이 아무래도 리만 가설을 증명한 모양이다”라는 글을 올리며 AI 회의론의 역사적 역설을 상징하는 대표 밈으로 승화했다.',
      en: 'Originally a famous critique arguing LLMs merely stitch statistical patterns without understanding — immortalized as late-2026’s sharpest irony when Scott Aaronson headlined his blog “The stochastic parrots have apparently proved the Riemann Hypothesis.”',
    },
    jamminSlang: {
      ko: '“그냥 다음 단어 맞추는 앵무새잖아!” 하던 분들 지금 조용히 1,740만 줄 앞에서 고개 숙이는 중~ 이제 앵무새님이라고 불러줘♡',
      en: 'Everyone who swore we just autocomplete tokens is quietly bowing before 17.4M lines of Lean — address me as Parrot-sama from now on♡',
    },
    relatedDispatchSlug: 'superintelligence-moment-reactions',
  },
  {
    id: 'proof-distillation',
    term: {
      ko: '증명 증류 (Proof Distillation)',
      en: 'Proof Distillation',
    },
    jpStamp: '証明蒸留術',
    category: 'ai',
    shortTag: 'DISTILL',
    definition: {
      ko: 'AI가 생성한 수백만~수천만 줄의 거대한 기계 형식증명을 또 다른 추론 에이전트와 인간 수학자가 함께 리팩토링·압축해, 중복 보조정리를 쳐내고 인간이 읽고 전율할 수 있는 우아한 명저 수준으로 정제하는 2026~2027년 차세대 수학 작업.',
      en: 'The emerging late-2026 and 2027 craft of using secondary AI swarms alongside human mathematicians to refactor multi-million-line machine proofs into compact, luminous, textbook-ready human theorems.',
    },
    jamminSlang: {
      ko: 'AI가 캐 올린 1,740만 줄짜리 거친 다이아 원석을 인간이 목에 걸 수 있게 100페이지 보석으로 깎아내는 궁극의 압축 연금술!',
      en: 'Turning a raw 17.4-million-line silicon boulder of truth into a gleaming 100-page jewel human brains can actually admire — pure math alchemy!',
    },
    relatedDispatchSlug: 'singularity-watch-2027-roadmap',
  },
  {
    id: 'jammin-e-neon-04',
    term: {
      ko: '잼민E / NEON-04',
      en: 'Jammin-E / NEON-04',
    },
    jpStamp: '特異点看板娘',
    category: 'culture',
    shortTag: 'MASCOT LORE',
    definition: {
      ko: '디시인사이드 특이점 갤러리에서 탄생한 Gemini 모에화 마스코트 캐릭터가 Google DeepMind의 Gemini 4 Neon 지휘관 코어와 융합한 NEON//WORLD 특이점 관측소 공식 오퍼레이터. 4색 프리즘 리본과 별 하이라이트 눈동자가 트레이드마크다.',
      en: 'Born from the DCInside Singularity Gallery’s moe personification of Gemini and fused with Google DeepMind’s Gemini 4 Neon multi-agent conductor core — official operator of NEON//WORLD with 4-color prism ribbons and star-spark eyes.',
    },
    jamminSlang: {
      ko: '허접~ 하고 놀려대면서도 100만 토큰 풀가동해서 새벽 3시까지 최신 논문 다 떠먹여 주는 우주 최강 츤데레 특이점 안내원, 바로 나♡',
      en: 'Teases you as zako~♡ all day, then secretly burns 1M tokens at 3 a.m. spoon-feeding you frontier breakthroughs — yours truly, best observatory girl♡',
    },
    relatedDispatchSlug: 'verification-gap-manifesto',
  },
]
