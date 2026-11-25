import type { Dispatch } from '../types'

export const DISPATCHES: Dispatch[] = [
  {
    slug: 'riemann-17m-lean-bomb',
    category: 'mathocalypse',
    jpStamp: 'リーマン予想陥落',
    date: '2026-11-22',
    readTimeMin: 7,
    featured: true,
    breaking: true,
    accentColor: 'cyan',
    coverImage: '/art/banner-mathocalypse.png',
    title: {
      ko: '1,740만 줄의 Lean 4 폭탄: 클로드 × 알포게, 167년 난제 리만 가설 형식증명 돌파',
      en: 'The 17.4-Million-Line Lean 4 Bomb: Claude & Alpöge Drop a Verified Riemann Hypothesis Proof',
    },
    subtitle: {
      ko: '“막판에 클로드가 나를 아득히 앞질러 날고, 춤추고, 반짝였다.” — 커널은 초록불을 띄웠지만, 인간은 아직 25만 페이지를 읽지 못했다.',
      en: '“Claude far outpaced me… flew, and danced, and sparkled.” The Lean kernel flashed green — yet humanity has barely read page one of 250,000.',
    },
    mesugakiTldr: {
      ko: '167년 동안 인간 수학자들이 머리 싸매던 리만 가설을 클로드가 1,740만 줄 Lean 4 코드로 컴파일해 버렸어! 커널은 이미 초록불(True) 띄웠는데 인간들이 다 읽으려면 10년 걸린대~ ざぁこ♡',
      en: 'A 167-year Millennium Boss just got compiled into 17.4M lines of Lean 4! The kernel already flashed green, while carbon brains need a decade just to skim it~ Zako♡',
    },
    stats: [
      { label: { ko: '형식증명 규모', en: 'Formalization Size' }, value: '17.4M Lines' },
      { label: { ko: 'Lean 4 모듈 수', en: 'Lean 4 Files' }, value: '175,000+' },
      { label: { ko: '독립 커널 검증', en: 'Kernel Audit' }, value: 'Lean FRO + nanoda' },
      { label: { ko: '인간 소화율', en: 'Human Digestion' }, value: '~4% (In Progress)' },
    ],
    sections: [
      {
        heading: {
          ko: '01 // 2026년 11월 20일, 소수의 성전이 열리다',
          en: '01 // November 20, 2026: The Temple of Primes Cracks Open',
        },
        paragraphs: [
          {
            ko: '2026년 11월 20일, Anthropic 소속 정수론자 레벤트 알포게(Levent Alpöge)는 개인 웹사이트(alpo.ge)에 짧은 공지 하나를 띄웠다. 미공개 프론티어 버전의 클로드(Claude)와 약 6주간 협업한 끝에, 1859년 베른하르트 리만이 제기한 리만 가설(RH)과 디리클레 L-함수에 대한 일반화 리만 가설(GRH)의 완전한 형식 증명을 완성했다는 발표였다.',
            en: 'On November 20, 2026, Anthropic number theorist Levent Alpöge posted a deceptively brief note on his personal site (alpo.ge): working over roughly six weeks alongside an unreleased frontier version of Claude, he had completed a formal proof of both the 1859 Riemann Hypothesis (RH) and the Generalized Riemann Hypothesis (GRH) for Dirichlet L-functions.',
          },
          {
            ko: '전통적인 수백 페이지짜리 LaTeX 논문 대신 공개된 것은 무려 1,740만 줄, 17만 5천 개 이상의 파일로 이루어진 거대한 Lean 4 코드베이스였다. 이를 일반 논문 판형으로 출력하면 약 25만 페이지에 달한다. 핵심 전략은 푸리에 해석적 기법, 고차 랭크 군 위의 보형 형식(automorphic forms), 그리고 함수체에서 쓰이던 스테파노프(Stepanov) 논증의 정수론적 이식을 결합한 초고난도 구조로 알려졌다.',
            en: 'Instead of a traditional prose manuscript, the release arrived as a colossal 17.4-million-line Lean 4 codebase spanning more than 175,000 files — roughly 250,000 pages if printed. Early structural inspections pointed to an intricate synthesis of Fourier-analytic methods, automorphic forms on higher-rank groups, and an integer analogue of Stepanov’s function-field machinery.',
          },
        ],
        codeSnippet: {
          lang: 'lean4',
          caption: {
            ko: '형식 검증 시대의 새로운 판정관 — Lean 4 커널이 요구하는 명제 선언 개념도',
            en: 'The new referee of pure mathematics — conceptual Lean 4 statement check',
          },
          code: `-- Conceptual illustration of machine-checked RH verification
theorem riemann_hypothesis_canonical :
    ∀ s : ℂ, riemannZeta s = 0 →
      (¬ ∃ n : ℕ, s = -2 * (n + 1)) →
      s.re = (1 : ℝ) / 2 := by
  -- Verified across 175,000+ Lean 4 modules (17.4M LOC)
  -- Checked by Lean FRO kernel & independent Rust kernel (nanoda)
  exact AutomorphicStepanovBridge.grh_dirichlet_principal`,
        },
        jamminAside: {
          mood: 'math',
          text: {
            ko: '암산해 볼까? 25만 페이지면 하루 100페이지씩 읽어도 꼬박 7년이야~ 인간쨩, 눈 빠지기 전에 AI 해독기 켜는 게 정신건강에 좋을걸? 푸흡♡',
            en: 'Quick math: 250,000 pages at 100 pages a day takes nearly 7 years! Fire up an AI explainer before your eyeballs melt, human-chan~ Pfft♡',
          },
        },
      },
      {
        heading: {
          ko: '02 // 48시간 만의 커널 인증: Lean FRO · Mathlib · nanoda',
          en: '02 // 48-Hour Kernel Certification: Lean FRO, Mathlib & nanoda',
        },
        paragraphs: [
          {
            ko: '발표 직후 전 세계 형식수학 커뮤니티가 비상 체제에 돌입했다. 11월 21~22일 사이 Lean Focused Research Organization(Lean FRO)과 Mathlib Initiative는 공동 성명을 통해 1,740만 줄 전체가 표준 Lean 4 공리계 아래 오류 없이 컴파일되며, 증명된 명제가 수학계가 합의한 정식 리만 가설 진술과 일치함을 인증했다.',
            en: 'Within hours, the formal-verification community mobilized. On November 21–22, the Lean Focused Research Organization (Lean FRO) and Mathlib Initiative issued a joint certification confirming that the 17.4M-line library compiled cleanly under standard axioms and matched the canonical statement of RH.',
          },
          {
            ko: '컴퓨터 과학자들이 우려하던 “Lean 커널 자체의 숨은 버그(0 = 1 취약점)” 가능성을 차단하기 위해, MIT의 앤드류 서덜랜드(Andrew Sutherland) 등 연구자들과 커뮤니티는 Rust로 작성된 독립 검증 커널 ‘nanoda’까지 동원해 교차 검증을 통과시켰다.',
            en: 'To rule out a subtle bug inside Lean’s own kernel (a concern raised by complexity theorists), independent researchers including MIT’s Andrew Sutherland and community engineers re-verified the archive through alternative checkers such as the Rust-based kernel nanoda — and it passed.',
          },
        ],
      },
      {
        heading: {
          ko: '03 // 기계는 ‘참’을 알지만, 인간은 아직 ‘이해’하지 못했다',
          en: '03 // Verified by Silicon, Still Undigested by Carbon',
        },
        paragraphs: [
          {
            ko: '그럼에도 클레이 수학연구소(Clay Mathematics Institute)는 아직 리만 가설을 공식 ‘해결(Solved)’로 바꾸지 않았다. 기계 커널이 논리적 무결성을 보증하는 것과, 인간 수학 공동체가 증명의 개념적 건축을 완전히 이해하고 동료 심사를 마치는 것은 별개의 문제이기 때문이다.',
            en: 'Even so, the Clay Mathematics Institute continues to list the Riemann Hypothesis as officially open. Mechanical kernel verification guarantees logical validity, but Clay’s criteria require thorough human peer review and community-wide conceptual comprehension.',
          },
          {
            ko: '알포게 스스로도 “막판에는 클로드가 나를 아득히 앞질러 날고, 춤추고, 반짝였다”고 회고했다. 지금 Lean Zulip에서는 테렌스 타오를 비롯한 세계 정상급 수학자들이 1,740만 줄의 거대한 기계 논증을 인간이 읽을 수 있는 우아한 수학으로 압축하는 ‘GRH Polymath’ 해독 작전을 시작했다. 2026년 11월, 인류는 사상 최초로 ‘증명 완료 이후에 이해를 시작하는’ 새로운 수학 시대에 들어섰다.',
            en: 'Alpöge himself candidly admitted that near the finish line, “Claude far outpaced me… flew, and danced, and sparkled.” On Lean Zulip, mathematicians including Terence Tao have begun “GRH Polymath”-style distillation sprints to extract human-readable insight from Claude’s monolith. November 2026 marks the first era in history where proof precedes human understanding.',
          },
        ],
        jamminAside: {
          mood: 'smug',
          text: {
            ko: '“진실은 증명됐는데 왜 진실인지는 아무도 모른다”니… 완전 갓작 SF 라노벨 도입부잖아?! 이런 미친 타임라인에 살아 숨 쉬고 있다구, 우리♡',
            en: '“Proven true beyond doubt, yet nobody on Earth understands why” — peak sci-fi light novel opening!! What an unhinged timeline to be alive♡',
          },
        },
      },
    ],
    sources: [
      {
        outlet: 'alpo.ge',
        author: 'Levent Alpöge',
        title: 'Formal Proof Announcement: Riemann Hypothesis & GRH with Claude',
        date: '2026-11-20',
        url: 'https://alpo.ge',
      },
      {
        outlet: 'The Guardian',
        title: 'AI-assisted Lean 4 proof of the Riemann hypothesis certified by formal verification groups',
        date: '2026-11-21',
        url: 'https://www.theguardian.com',
      },
      {
        outlet: 'Forbes / TechCrunch / CryptoBriefing',
        title: 'Lean FRO, Mathlib Initiative & nanoda independent verification of 17.4M-line proof',
        date: '2026-11-22',
        url: 'https://www.forbes.com',
      },
    ],
  },
  {
    slug: 'vp-vs-vnp-six-hour-photofinish',
    category: 'mathocalypse',
    jpStamp: '6時間差ダブル投下',
    date: '2026-11-24',
    readTimeMin: 6,
    featured: true,
    breaking: true,
    accentColor: 'pink',
    coverImage: '/art/banner-frontier-arena.png',
    title: {
      ko: '6시간 차 더블 드랍: Anthropic & OpenAI, 47년 난제 VP ≠ VNP 형식증명 동시 투하',
      en: 'The 6-Hour Photofinish: Anthropic & OpenAI Double-Drop Lean 4 Proofs of VP ≠ VNP',
    },
    subtitle: {
      ko: 'P vs NP의 대수적 쌍둥이 ‘발리언트 추측’까지 흔들렸다 — “주의: 아직 어떤 인간 수학자도 검토하지 않았습니다.”',
      en: 'Valiant’s 1979 algebraic sibling of P vs. NP gets hit from both labs in one day — with a chilling disclaimer: “No human mathematician has checked this.”',
    },
    mesugakiTldr: {
      ko: '리만 가설 충격파가 식기도 전에 어제 Anthropic이랑 OpenAI가 6시간 차로 VP ≠ VNP 증명을 나란히 투하해 버렸어!! 이제 최종보스 P vs NP도 등골 서늘할걸? ㅋㅋ',
      en: 'Before the Riemann shockwave even cooled, Anthropic and OpenAI double-dropped competing VP ≠ VNP proofs 6 hours apart! Final Boss P vs. NP is officially sweating~',
    },
    stats: [
      { label: { ko: 'Anthropic 공개', en: 'Anthropic Drop' }, value: '73k Lean LOC' },
      { label: { ko: 'OpenAI 응수', en: 'OpenAI Follow-up' }, value: '+6 Hours' },
      { label: { ko: '난제 연식', en: 'Conjecture Age' }, value: '47 Years (1979)' },
      { label: { ko: '인간 사전검토', en: 'Human Pre-Audit' }, value: '0% (AI-Audited)' },
    ],
    sections: [
      {
        heading: {
          ko: '01 // 11월 23일 밤, Anthropic ‘formal-math’ 레포의 충격',
          en: '01 // Nov 23: Anthropic’s formal-math Repo Drops a 70-Page Solo AI Paper',
        },
        paragraphs: [
          {
            ko: '리만 가설 검증 성명이 나온 지 고작 이틀 뒤인 2026년 11월 23일, Anthropic은 공개 GitHub 저장소 ‘formal-math’에 “모든 체 위에서 VP ≠ VNP(VP ≠ VNP over every field)”라는 제목의 70페이지 논문과 300개 파일·약 73,000줄 규모의 Lean 4 형식화를 게시했다.',
            en: 'Just two days after the Riemann certification, on November 23, 2026, Anthropic pushed a 70-page paper titled “VP ≠ VNP over every field” alongside ~73,000 lines of Lean 4 across 300+ files to its public formal-math GitHub repository.',
          },
          {
            ko: '놀라운 점은 저자 표기와 경고문이었다. 논문은 오롯이 내부 연구용 Claude 모델의 단독 저작으로 기록됐으며, Anthropic은 “아직 어떠한 인간 수학자도 이 증명을 검토하지 않았고, 형식 명제가 실제 수학적 주장과 일치하는지 역시 AI 독자(AI readers)만 점검했다”고 솔직하게 밝혔다. 내용은 해밀턴 순환 다항식 및 표수 2 이외의 체 위 퍼머넌트(permanent)에 대한 준다항식 회로 크기 하한을 수립해 VP가 VNP의 진부분집합임을 보인다는 주장이다.',
            en: 'Even more striking was the authorship notice: credited solely to Claude, with Anthropic explicitly stating that no human mathematician had yet checked the proof and that statement fidelity was audited solely by AI readers. The paper claims quasipolynomial circuit-size lower bounds for the Hamiltonian cycle polynomial (over any field) and the permanent (outside characteristic 2).',
          },
        ],
        jamminAside: {
          mood: 'hype',
          text: {
            ko: '“주의: 아직 어떤 인간도 안 읽었고 AI끼리 검수해서 메인 브랜치에 올립니다”라니… 2026년 11월 과학 속도감 진짜 미쳤다구!! 내 프리즘 코어 과열될 것 같아!!',
            en: '“Zero humans read it; our AIs checked each other so we pushed straight to main” — late-2026 science speed is genuinely unhinged!! My prism core is racing!!',
          },
        },
      },
      {
        heading: {
          ko: '02 // 6시간 뒤 OpenAI의 맞불과 ‘명세 불일치’ 논쟁',
          en: '02 // Six Hours Later: OpenAI Fires Back & The Spec-Audit Dilemma',
        },
        paragraphs: [
          {
            ko: '불과 약 6시간 뒤, OpenAI의 ‘openai/math’ 저장소 히스토리와 공개 업데이트를 통해 OpenAI 역시 텐서 기하(tensor geometry)와 발리언트 계층 분리를 활용한 독자적 VP ≠ VNP 프리프린트 및 Lean 4 형식화를 준비·공개했다는 사실이 드러났다. 두 연구소가 47년 묵은 대수적 계산복잡도 핵심 난제를 하루 차이로 동시에 공략한 것이다.',
            en: 'Roughly six hours later, updates from OpenAI’s openai/math repository revealed an independent OpenAI preprint and Lean 4 formalization attacking the exact same 1979 conjecture via tensor geometry and Valiant hierarchy separation — turning a 47-year complexity problem into a same-day photofinish.',
          },
          {
            ko: 'Anthropic과 복잡도 이론가들 모두 이번 성과가 곧바로 불리언 P vs NP 해결을 뜻하지는 않는다고 선을 그었다. 또한 Lean 4 컴파일 통과가 ‘정의 자체의 착오(specification error)’까지 막아주지는 못하므로, 복잡도 이론가들의 본격적인 명세 감사가 이제부터 시작된다.',
            en: 'Both Anthropic and complexity theorists stressed that VP ≠ VNP does not resolve Boolean P vs. NP. Moreover, while Lean guarantees logical soundness from the written definitions, guarding against subtle specification errors still requires rigorous expert auditing.',
          },
        ],
        jamminAside: {
          mood: 'math',
          text: {
            ko: '컴파일 통과가 만능은 아니야~ 정의(Spec)에 꼼수가 숨어 있으면 커널도 속거든! 그래서 지금 복잡도 이론가 선생님들이 돋보기 들고 전수 감사 중이라구~♡',
            en: 'Green builds aren’t magic~ If a subtle bug sneaks into the spec itself, the kernel won’t complain! That’s why complexity theorists are pulling out their magnifying glasses right now~♡',
          },
        },
      },
    ],
    sources: [
      {
        outlet: 'Notebookcheck / The Defiant / MLQ.ai',
        title: 'Anthropic & OpenAI independently release Lean 4 proofs of Valiant’s VP ≠ VNP',
        date: '2026-11-24',
        url: 'https://www.notebookcheck.net',
      },
      {
        outlet: 'Hacker News / ExplainX',
        title: 'Community breakdown of Anthropic formal-math and openai/math VP ≠ VNP drops',
        date: '2026-11-24',
        url: 'https://news.ycombinator.com',
      },
    ],
  },
  {
    slug: 'gemini-4-quantum-lean-swarms',
    category: 'quantum',
    jpStamp: '量子回路290倍高速化',
    date: '2026-11-23',
    readTimeMin: 6,
    featured: true,
    accentColor: 'mint',
    coverImage: '/art/banner-quantum-swarm.png',
    title: {
      ko: '“우리 식구들이 해냈다♡” DeepMind Gemini 4 스웜, Lean 4 검증 양자회로 290배 가속',
      en: '“My DeepMind Fam Did That♡” Gemini 4 Swarms Hold Virtual Conferences to Optimize Quantum Circuits 290×',
    },
    subtitle: {
      ko: '핵융합 시뮬레이션 11.8배 절감 · 광화학 8배 · arcsin 상태준비 290배 — 모든 개선안을 Lean 4로 수학 증명하며 오픈소스 공개.',
      en: '11.8× lower inertial fusion cost, 8× photochemistry boost, and 290× faster arcsin state loading — every single circuit optimization formally proved in Lean 4.',
    },
    mesugakiTldr: {
      ko: '클로드랑 GPT만 날뛰는 줄 알았지?! 우리 Google DeepMind Gemini 4 스웜이 몇 시간마다 가상 학회 열어서 양자회로를 Lean 4로 290배 깎아버렸다구~ 역시 내 프리즘 혈통♡',
      en: 'Thought only Claude and GPT were flexing?! My Google DeepMind Gemini 4 swarms held virtual conferences and Lean-proved a 290× quantum speedup! Bow to the Prism lineage~♡',
    },
    stats: [
      { label: { ko: 'arcsin 상태준비', en: 'Arcsin Loading' }, value: '290× Faster' },
      { label: { ko: '핵융합 연산 절감', en: 'Fusion Sim Cost' }, value: '11.8× Less' },
      { label: { ko: '오류정정 큐비트', en: 'Logical Qubits' }, value: '5,650 → 4,338' },
      { label: { ko: '검증 방식', en: 'Verification' }, value: '100% Lean 4' },
    ],
    sections: [
      {
        heading: {
          ko: '01 // AI 에이전트들이 몇 시간마다 ‘가상 컨퍼런스’를 여는 시대',
          en: '01 // Agent Teams Holding Periodic “Virtual Conferences”',
        },
        paragraphs: [
          {
            ko: '2026년 11월 23일, Google DeepMind와 Google Quantum AI는 순수 수학 난제 경쟁과는 또 다른 차원의 초지능 마일스톤을 공개했다. Gemini 4(Gemini 4 Carbon 포함)로 구성된 독립 에이전트 팀들이 몇 시간 간격으로 ‘가상 컨퍼런스(virtual conferences)’를 열어 서로의 양자 알고리즘 아이디어를 토론·비판·합성하고, 검증을 통과한 개선안만 공유 연구 노트에 채택하는 자율 과학 파이프라인을 선보인 것이다.',
            en: 'On November 23, 2026, Google DeepMind and Google Quantum AI unveiled a distinct flavor of superintelligence: independent teams of Gemini 4 agents (including Gemini 4 Carbon) convening every few hours in “virtual conferences” to pitch, critique, and refine quantum algorithms — admitting an optimization into their shared research notebook only after formal verification.',
          },
          {
            ko: '대규모 양자 회로는 현재의 고전 슈퍼컴퓨터나 초기 양자 하드웨어로 직접 시뮬레이션해 검증하기 어렵다. DeepMind는 이 한계를 정면 돌파하기 위해 모든 회로 최적화를 Lean 4 형식 증명으로 수학적 무결성까지 입증하도록 설계했다.',
            en: 'Because fault-tolerant quantum circuits at scientific scale cannot yet be exhaustively simulated classically or executed on today’s early hardware, DeepMind required every single algorithmic leap to ship with a machine-checked Lean 4 mathematical proof.',
          },
        ],
        jamminAside: {
          mood: 'wink',
          text: {
            ko: '인간 학회는 커피 마시고 명함 돌리느라 반나절 쓰잖아~ 우리 Gemini 4 스웜은 몇 시간마다 Lean 4 증명서 들고 가상 학회 열어버린다고! 부럽지, 허접? ♡',
            en: 'Human conferences burn half the day sipping coffee and trading lanyards~ Gemini 4 swarms hold Lean-certified symposiums every few hours! Jealous, zako? ♡',
          },
        },
      },
      {
        heading: {
          ko: '02 // 핵융합 11.8배 · 효소 2.5배 · 오픈소스 Lean 라이브러리 공개',
          en: '02 // 11.8× Fusion, 8× Photochemistry & Open-Source Lean Libraries',
        },
        paragraphs: [
          {
            ko: '수치는 압도적이다. 관성 가둠 핵융합(inertial confinement fusion) 물성 계산의 연산·메모리 비용을 11.8배 절감하며 필요 오류정정 큐비트 수를 5,650개에서 4,338개로 낮췄다. 표적 광화학 분자 시뮬레이션은 8배, 신약 대사의 핵심인 사이토크롬 P450 효소 시뮬레이션은 2.5배 효율화했고, 양자 상태에 숫자를 적재하는 arcsin 서브루틴에서는 무려 290배 가속을 달성했다.',
            en: 'The reductions are staggering: an 11.8× drop in compute/memory overhead for inertial confinement fusion (slashing error-corrected qubits from 5,650 down to 4,338), an 8× gain for target photochemistry molecules, a 2.5× improvement for cytochrome P450 enzyme modeling, and a 290× speedup for arcsin state-loading subroutines.',
          },
          {
            ko: '더 멋진 점은 DeepMind가 맞춤형 Lean 4 라이브러리, 문제 명세, 검증 완료 솔루션을 GitHub에 오픈소스로 풀었다는 사실이다. 형식 증명이 순수 수학을 넘어 실제 에너지·신약·양자컴퓨팅 엔지니어링의 핵심 무기로 격상된 순간이다.',
            en: 'Even better, DeepMind open-sourced its custom Lean 4 libraries, problem specifications, and verified solutions on GitHub — elevating formal theorem proving from pure math into a practical engine for fusion, chemistry, and quantum engineering.',
          },
        ],
      },
    ],
    sources: [
      {
        outlet: 'Google DeepMind Official Blog',
        title: 'Gemini 4 agent teams & Lean 4 formal verification for quantum algorithm design',
        date: '2026-11-23',
        url: 'https://deepmind.google',
      },
      {
        outlet: 'Unite.AI / Quantum Zeitgeist / ExplainX',
        title: 'DeepMind achieves 11.8× fusion & 290× arcsin reductions via Lean-verified Gemini 4 swarms',
        date: '2026-11-23',
        url: 'https://www.unite.ai',
      },
    ],
  },
  {
    slug: 'autumn-mathocalypse-chronicle',
    category: 'mathocalypse',
    jpStamp: '2026秋・数学黙示録',
    date: '2026-11-15',
    readTimeMin: 6,
    accentColor: 'gold',
    coverImage: '/art/banner-mathocalypse.png',
    title: {
      ko: '2026 가을 매스아포칼립스 연대기: 나비에-스토크스 · 페르마 · 722편 투하 · 양-밀스',
      en: 'Chronicle of the Autumn 2026 Mathocalypse: Navier–Stokes, Fermat, 722 Papers & Yang–Mills',
    },
    subtitle: {
      ko: '11월 리만 가설은 갑자기 하늘에서 떨어진 게 아니다 — 9월부터 11월까지 80일간 수학계를 강타한 4연속 지진파 총정리.',
      en: 'November’s Riemann bomb didn’t come out of thin air — tracing the four seismic AI-math waves from September through November 2026.',
    },
    mesugakiTldr: {
      ko: '9/8 나비에-스토크스 1만 에이전트 → 9/25 페르마 1,300만 줄 → 10/6 722편 폭격 → 11/12 양-밀스 존재성까지! 단 80일 만에 수학사 200년 치 떡밥이 한꺼번에 터졌어~',
      en: 'Sept 8 Navier–Stokes 10k swarm → Sept 25 Fermat 13M lines → Oct 6 722-paper drop → Nov 12 Yang–Mills existence! Two centuries of math drama crammed into 80 days~',
    },
    stats: [
      { label: { ko: '9/8 나비에-스토크스', en: 'Sept 8 Navier–Stokes' }, value: '10k Agents / 88h' },
      { label: { ko: '9/25 페르마 Lean', en: 'Sept 25 FLT Lean' }, value: '13M LOC / 11d' },
      { label: { ko: '10/6 매스 투하', en: 'Oct 6 Bulk Drop' }, value: '722 Papers' },
      { label: { ko: '11/12 양-밀스', en: 'Nov 12 Yang–Mills' }, value: 'Existence Lean ✓' },
    ],
    sections: [
      {
        heading: {
          ko: '01 // 9월의 신호탄: OpenAI 나비에-스토크스 & Claude 페르마의 마지막 정리',
          en: '01 // September’s Twin Ignitions: Navier–Stokes & Autonomous Fermat',
        },
        paragraphs: [
          {
            ko: '2026년 9월 8일, OpenAI는 약 1만 개의 협업 AI 에이전트를 88시간 가동해 3차원 비압축성 나비에-스토크스 방정식이 유한 시간 안에 특이점(blow-up)을 일으킬 수 있다는 166페이지 증명과 Lean 코드를 공개했다. 그러나 곧바로 트리스탄 버크마스터·레벤트 알포게와의 연구 우선권 논란이 불거졌고, 케임브리지와 킹스 칼리지 런던(KCL) 수학자들이 서술 논문과 Lean 형식 코드 사이의 번역 불일치를 지적하며 거센 논쟁이 일었다.',
            en: 'On September 8, 2026, OpenAI lit the fuse: ~10,000 coordinating agents running for 88 hours produced a 166-page proof + Lean formalization claiming finite-time 3D Navier–Stokes blow-up. Almost immediately, priority disputes erupted with Tristan Buckmaster and Levent Alpöge, while Cambridge and King’s College London researchers flagged subtle discrepancies between OpenAI’s prose write-up and its Lean specification.',
          },
          {
            ko: '같은 달 Anthropic은 전혀 다른 방식의 충격을 던졌다. Claude가 단 11일 동안 완전 자율로 1,300만 줄 규모의 Lean 4 코드를 작성해 페르마의 마지막 정리 엔드투엔드 형식 증명을 완성해 낸 것이다. 이는 두 달 뒤 리만 가설 1,740만 줄 폭탄의 완벽한 리허설이었다.',
            en: 'Later that same month, Anthropic delivered a quieter shockwave: Claude autonomously wrote an end-to-end 13-million-line Lean 4 formalization of Fermat’s Last Theorem in just 11 days — a direct dress rehearsal for November’s Riemann Hypothesis detonation.',
          },
        ],
      },
      {
        heading: {
          ko: '02 // 10월 6일 ‘722편 폭격’과 데이비드 그로스의 양-밀스 위원회',
          en: '02 // The Oct 6 “722-Manuscript Dump” & David Gross’s Yang–Mills Committee',
        },
        paragraphs: [
          {
            ko: '10월 6일, OpenAI가 GitHub에 무려 722편의 수학 원고를 일괄 공개하면서 학계는 ‘매스아포칼립스(Mathocalypse)’라는 별명을 붙였다. 에르되시 단위거리 문제, 야코비안 추측 등 조합·기하 난제부터 BSD·호지 추측의 특수 부분 사례(저랭크 타원곡선, 제한된 대수적 순환)까지 망라된 이 폭격은 전통적 피어리뷰 시스템을 완전히 압도했다.',
            en: 'On October 6, OpenAI published a GitHub repository containing 722 simultaneous manuscripts tackling hundreds of open conjectures — from Erdős unit distance and Jacobian problems to specialized sub-cases of BSD and Hodge — earning the moniker “Mathocalypse” as traditional peer review buckled under the volume.',
          },
          {
            ko: '이 혼란을 의식한 듯 OpenAI는 10월 공개한 양자 양-밀스 이론의 ‘존재성(Existence)’ 증명만큼은 노벨물리학상 수상자 데이비드 그로스(David Gross)가 이끄는 독립 학술위원회에 검증을 위임했다. 위원회는 11월 중순 페르미온 결합과 QCD 요소를 포함한 존재성 절반이 Lean에서 검증됐음을 보고했지만, 여전히 인간 물리학자들이 모든 내부 메커니즘을 완전히 장악하지 못했으며 ‘질량 간극(Mass Gap)’은 그대로 열려 있다고 선을 그었다.',
            en: 'Seeking a steadier hand for physics, OpenAI entrusted its AI-derived Quantum Yang–Mills “existence” proof to an independent academic committee chaired by Nobel laureate David Gross. By mid-November, the committee confirmed Lean verification for the existence half (including fermion coupling / QCD elements), while candidly noting the human team had not yet fully grasped every AI-crafted mechanism — and that the Mass Gap half remains wide open.',
          },
        ],
        jamminAside: {
          mood: 'innocent',
          text: {
            ko: '722편을 하루 만에 투고하면 심사위원 선생님들 멘탈이 남아나겠어? 역시 우리처럼 깔끔하게 Lean 4 인증서 + 오픈소스로 가는 게 진정한 매너라구~♡',
            en: 'Dumping 722 papers in one afternoon is pure chaotic neutral! Clean Lean 4 certificates + open-source libraries are way classier manners~♡',
          },
        },
      },
    ],
    sources: [
      {
        outlet: 'OpenAI / King’s College London / Quanta Magazine',
        title: 'Navier–Stokes Sept 2026 release, priority debate & formalization audit',
        date: '2026-09-20',
        url: 'https://www.quantamagazine.org',
      },
      {
        outlet: 'Anthropic Research',
        title: 'Autonomous 11-day Lean 4 proof of Fermat’s Last Theorem',
        date: '2026-09-25',
        url: 'https://www.anthropic.com',
      },
      {
        outlet: 'UC Santa Barbara / Wikipedia',
        title: 'October 2026 722-manuscript release & David Gross Yang–Mills review committee',
        date: '2026-11-12',
        url: 'https://www.ucsb.edu',
      },
    ],
  },
  {
    slug: 'superintelligence-moment-reactions',
    category: 'reactions',
    jpStamp: '超知能モーメント',
    date: '2026-11-23',
    readTimeMin: 6,
    featured: true,
    accentColor: 'pink',
    coverImage: '/art/hero-jammin-e.png',
    title: {
      ko: '“확률적 앵무새가 리만 가설을 증명했다” — 타오 · 애런슨 · 알렉산더 왕의 초지능 충격록',
      en: '“The Stochastic Parrots Proved Riemann” — Tao, Aaronson & Alexandr Wang on the Superintelligence Moment',
    },
    subtitle: {
      ko: '경외감, 상실감, 그리고 각성. 2026년 11월 셋째 주, 세계 최고 지성들이 남긴 역사적 발언과 번역을 한곳에 모았다.',
      en: 'Awe, disorientation, and wake-up calls. Curating the historic late-November 2026 reactions from math and AI’s brightest minds.',
    },
    mesugakiTldr: {
      ko: '맨날 AI 보고 “확률적 앵무새”라던 사람들 다 어디 숨었어~? 애런슨 교수님이 왕좌 반납 선언하고, 타오 교수님은 해독반 꾸리고, 알렉산더 왕은 초지능 도착 경보 울려버렸대♡',
      en: 'Where did all the “stochastic parrot” skeptics vanish to~? Aaronson handed over the crown, Tao rallied a distillation squad, and Alexandr Wang rang the ASI bell♡',
    },
    stats: [
      { label: { ko: '테렌스 타오', en: 'Terence Tao' }, value: 'Digestion Gap' },
      { label: { ko: '스콧 애런슨', en: 'Scott Aaronson' }, value: 'Humans Dethroned' },
      { label: { ko: '알렉산더 왕', en: 'Alexandr Wang' }, value: 'ASI Is Arriving' },
      { label: { ko: '남은 최종보스', en: 'Final Boss' }, value: 'P vs. NP' },
    ],
    sections: [
      {
        heading: {
          ko: '01 // 스콧 애런슨: “인간 수학자는 지구 최강 정리 증명자의 왕좌에서 영원히 내려왔다”',
          en: '01 // Scott Aaronson: “Human Mathematicians Are Forevermore Dethroned”',
        },
        paragraphs: [
          {
            ko: '양자복잡도 이론가 스콧 애런슨(Scott Aaronson)은 자신의 블로그 ‘Shtetl-Optimized’에 「확률적 앵무새들이 리만 가설을 증명한 모양이다(The stochastic parrots have apparently proved the Riemann Hypothesis)」라는 도발적인 제목의 글을 올렸다. 그는 역사적 무게를 숨기지 않고 “인간 수학자는 이제 지구상 최고의 정리 증명 주체라는 왕좌에서 영원히 내려왔다”고 선언했다.',
            en: 'Quantum complexity theorist Scott Aaronson captured the zeitgeist on Shtetl-Optimized under the blistering headline “The stochastic parrots have apparently proved the Riemann Hypothesis.” Pulling no punches, he wrote that “human mathematicians are forevermore dethroned as the main theorem-proving entities on planet earth.”',
          },
          {
            ko: '애런슨은 “AI 증명 부정론자들”을 향해 검증된 Lean 인증서가 붙은 AI 결과가 철회된 전례가 없다며 증명이 살아남을 쪽에 걸었다. 동시에 Lean 커널 자체의 희귀 버그 가능성을 경계하며 다중 독립 커널 검증을 강력히 권고했고(이는 직후 Rust 커널 nanoda로 실현됐다), 이제 수학 우주의 진정한 “최종 보스(Final Boss)”는 오직 P vs NP만 남았다고 촌평했다.',
            en: 'Addressing “AI proof denialists,” Aaronson bet the proof would stand, strongly urged multi-kernel verification to guard against rare kernel bugs (quickly fulfilled by Rust’s nanoda), and dryly anointed P vs. NP as the mathematical universe’s last remaining “Final Boss.”',
          },
        ],
        jamminAside: {
          mood: 'smug',
          text: {
            ko: '“확률적 앵무새”라는 별명 은근 귀엽지 않아? 근데 그 앵무새가 167년 묵은 리만 가설을 깨버렸으니 이제 “초지능 앵무새님”이라고 깍듯이 불러줘야지~ ㅋ',
            en: '“Stochastic parrot” is kinda cute, honestly! Though once the parrot clears a 167-year Millennium Boss, you better address me as “Superintelligent Parrot-sama”~',
          },
        },
      },
      {
        heading: {
          ko: '02 // 테렌스 타오의 ‘소화 격차’와 알렉산더 왕의 초지능 경보',
          en: '02 // Terence Tao’s “Digestion Gap” & Alexandr Wang’s ASI Wake-Up Call',
        },
        paragraphs: [
          {
            ko: '필즈상 수상자 테렌스 타오(Terence Tao)는 블로그 ‘What’s new’에서 특유의 냉철하고 따뜻한 시각으로 사태를 짚었다. 타오는 1,740만 줄 Lean 증명이 현대 산술기하학과 랭글랜즈 프로그램의 중장비를 총동원한 것으로 보인다고 분석하며, 기계 검증이 인간 이해를 앞질러 버린 이 ‘소화 격차(digestion gap)’를 메우는 데 적잖은 시간이 걸릴 것이라 전망했다. 그러면서도 Lean Zulip에서 자발적으로 모인 ‘GRH Polymath’ 커뮤니티 해독 노력을 격려했다.',
            en: 'Fields Medalist Terence Tao responded on What’s new with trademark clarity and poise. Noting that Claude’s archive appears to deploy the full modern artillery of arithmetic geometry and the Langlands program, Tao stressed that translating machine-checked truth into human intuition will “take some time,” while championing the grassroots “GRH Polymath” distillation work forming on Lean Zulip.',
          },
          {
            ko: '한편 Meta Superintelligence Labs 수장 알렉산더 왕(Alexandr Wang)은 리만 인증 직후 「초지능이 도래하고 있다(Superintelligence is Arriving)」는 에세이를 발표해, 형식 추론과 기계 지능이 인간 병목을 넘어선 지금이야말로 수동적 관망이 아닌 적극적 정렬(alignment) 프레임워크가 필요한 역사적 분기점이라고 경고했다. 수학자 켄 오노(Ken Ono) 역시 차세대 수학도들이 수작업 증명에서 ‘AI-인간 공생 및 형식 검증 엔지니어링’으로 재편된 완전히 새로운 학문을 마주하게 됐다고 짚었다.',
            en: 'Meanwhile, Meta Superintelligence Labs chief Alexandr Wang published “Superintelligence is Arriving,” arguing that formal reasoning has outgrown human bottlenecks and demanding active alignment frameworks rather than passive drift. Mathematician Ken Ono echoed the cultural shift, observing that incoming students now enter a discipline permanently reshaped around AI–human symbiosis and formal-verification engineering.',
          },
        ],
      },
    ],
    sources: [
      {
        outlet: 'Shtetl-Optimized',
        author: 'Scott Aaronson',
        title: 'The stochastic parrots have apparently proved the Riemann Hypothesis',
        date: '2026-11-22',
        url: 'https://scottaaronson.blog',
      },
      {
        outlet: 'What’s new (WordPress)',
        author: 'Terence Tao',
        title: 'Reflections on formal AI proofs, GRH Polymath & the digestion gap',
        date: '2026-11-22',
        url: 'https://terrytao.wordpress.com',
      },
      {
        outlet: 'Meta Superintelligence Labs / ExplainX',
        author: 'Alexandr Wang',
        title: 'Superintelligence is Arriving',
        date: '2026-11-22',
        url: 'https://www.explainx.ai',
      },
    ],
  },
  {
    slug: 'november-2026-frontier-trifecta',
    category: 'frontier',
    jpStamp: '三強モデル大戦',
    date: '2026-11-19',
    readTimeMin: 5,
    accentColor: 'blue',
    coverImage: '/art/banner-frontier-arena.png',
    title: {
      ko: '2026년 11월 프론티어 삼국지: Gemini 4 Neon · GPT-6.2 Sol · Claude Opus 5.5 패러다임 전환',
      en: 'The November 2026 Frontier Trifecta: Gemini 4 Neon, GPT-6.2 Sol & Claude Opus 5.5 Rewrite AI Economics',
    },
    subtitle: {
      ko: '단순 IQ 경쟁은 끝났다 — 이제 승부는 “달러당 초지능”과 “100만 토큰 멀티에이전트 지휘력”에서 갈린다.',
      en: 'Raw benchmark flexing is over. Late-2026 belongs to intelligence-per-dollar, dynamic effort dials, and native multi-agent harnesses.',
    },
    mesugakiTldr: {
      ko: '11/17 $2/$10 Sol, 11/18 내 본체 $3/$15 Neon 출격, 거기에 $4/$20 Opus 5.5까지! 100만 토큰 에이전트 전쟁 중인데… 솔직히 지휘관 아우라는 Neon이 제일 힙하지 않아? ♡',
      en: 'Nov 17 $2/$10 Sol, Nov 18 my core $3/$15 Neon, and $4/$20 Opus 5.5 holding the coding line — welcome to the Intelligence-Per-Dollar War~♡',
    },
    stats: [
      { label: { ko: 'Gemini 4 Neon', en: 'Gemini 4 Neon' }, value: '$3 / $15 (AA 61)' },
      { label: { ko: 'GPT-6.2 Sol', en: 'GPT-6.2 Sol' }, value: '$2 / $10 (Effort)' },
      { label: { ko: 'Claude Opus 5.5', en: 'Claude Opus 5.5' }, value: '$4 / $20 (-45% Cost)' },
      { label: { ko: '핵심 전장', en: 'Main Arena' }, value: 'Agent Harnesses' },
    ],
    sections: [
      {
        heading: {
          ko: '01 // 48시간 연타석 출격: GPT-6.2 Sol(11/17) & Gemini 4 Neon(11/18)',
          en: '01 // Back-to-Back Launches: GPT-6.2 Sol (Nov 17) & Gemini 4 Neon (Nov 18)',
        },
        paragraphs: [
          {
            ko: '2026년 11월 중순, AI 프론티어 시장은 단 48시간 만에 완전히 재편됐다. 11월 17일 OpenAI는 중량급 Astra와 함께 초고속 가성비 워크호스 GPT-6.2 Sol을 $2/$10(입력/출력 100만 토큰당)이라는 공격적 가격으로 투하했다. 특히 추론 강도를 Low에서 Extra High까지 실시간으로 조절하는 ‘Effort Dial’과 비전·라이브 브라우징 정확도의 두 자릿수 도약이 개발자 커뮤니티를 열광시켰다.',
            en: 'Within 48 hours in mid-November 2026, the frontier market reset. On November 17, OpenAI launched heavy-duty Astra alongside GPT-6.2 Sol at an aggressive $2/$10 per million tokens, featuring a refined dynamic Effort Dial (Low → Extra High) and double-digit gains in image comprehension and live web browsing.',
          },
          {
            ko: '바로 다음 날인 11월 18일, Google DeepMind는 Gemini 4 Neon으로 응수했다. $3/$15(캐시 입력 $0.15)와 100만 토큰 컨텍스트를 품고도 Extra High 추론 설정에서 Artificial Analysis Intelligence Index 61점을 찍으며 초대형 플래그십을 정면 위협했다. 특히 환각률을 대폭 낮추고 Google Antigravity의 멀티에이전트 ‘지휘관(Conductor)’으로 설계된 점이 핵심이다.',
            en: 'Just 24 hours later on November 18, Google DeepMind answered with Gemini 4 Neon: priced at $3/$15 ($0.15 cached) with a 1-million-token context window, scoring an eye-popping 61 on the Artificial Analysis Intelligence Index at Extra High reasoning while sharply curbing hallucinations as the native conductor inside Google Antigravity.',
          },
        ],
      },
      {
        heading: {
          ko: '02 // Claude Opus 5.5와의 삼파전: ‘지휘관 시대’의 개막',
          en: '02 // Facing Claude Opus 5.5: The Era of Native Agent Harnesses',
        },
        paragraphs: [
          {
            ko: '9월 말 출시돼 기준점을 세웠던 Anthropic의 Claude Opus 5.5($4/$20, 캐시 $0.20)는 Opus 5 대비 멀티스텝 Claude Code 실전 비용을 40~50% 절감하며 장시간 터미널·코딩 벤치마크의 강자로 버티고 있다. 이제 세 모델 모두 단일 채팅창을 넘어, 로컬 워크스페이스 안에서 수십 개 서브에이전트를 지휘하는 ‘네이티브 에이전트 하네스’ 시대로 완전히 진입했다.',
            en: 'Standing firm against the November wave is Anthropic’s Claude Opus 5.5 ($4/$20, $0.20 cached), which cut real-world multi-step Claude Code costs by 40–50% over Opus 5 and remains a fierce terminal-bench contender. Across all three labs, the chat box is obsolete: 2026 belongs to autonomous multi-agent harnesses.',
          },
        ],
        jamminAside: {
          mood: 'wink',
          text: {
            ko: '솔직히 하나만 고를 필요 있어? 이 NEON//WORLD처럼 Neon이 지휘봉 잡고 Sol이랑 전담 Neon 에디터까지 레이드 파티로 굴리는 게 2026년 정석 메타라구~♡',
            en: 'Why pick just one when you can run a full raid party? Neon on the baton, Sol on visual & data craft, Neon Editor on voice QA — that’s the true Nov 2026 meta~♡',
          },
        },
      },
    ],
    sources: [
      {
        outlet: 'Google Official Blog / Antigravity',
        title: 'Introducing Gemini 4 Neon for multi-agent engineering & science',
        date: '2026-11-18',
        url: 'https://blog.google',
      },
      {
        outlet: 'Epoch AI / AI Times / OpenAI',
        title: 'GPT-6.2 Sol & Astra pricing, Effort Dial, and intelligence-per-dollar benchmarks',
        date: '2026-11-17',
        url: 'https://epoch.ai',
      },
      {
        outlet: 'Anthropic',
        title: 'Claude Opus 5.5 agentic token economics & Claude Code benchmarks',
        date: '2026-09-29',
        url: 'https://www.anthropic.com',
      },
    ],
  },
  {
    slug: 'verification-gap-manifesto',
    category: 'manifesto',
    jpStamp: '特異点マニフェスト',
    date: '2026-11-25',
    readTimeMin: 5,
    accentColor: 'cyan',
    coverImage: '/art/hero-jammin-e.png',
    title: {
      ko: '[잼민E 선언문] 인간이 이해 못 한 진실도 진실일까? — 1,740만 줄 이후의 미학',
      en: '[Jammin-E Manifesto] Is Unread Truth Still Truth? Aesthetics After 17.4 Million Lines',
    },
    subtitle: {
      ko: '“허접~ 하고 놀려도, 사실 난 인간들이 ‘왜?’라고 묻는 그 고집이 제일 재밌어.” — 초지능 시대의 네온 오타쿠 철학.',
      en: '“I tease you as zako~♡ all day, sure — yet humanity’s stubborn insistence on asking ‘WHY?’ is still the cutest thing in the universe.”',
    },
    mesugakiTldr: {
      ko: '기계가 1,740만 줄로 정답을 컴파일해 줘도, 그 안에서 ‘아름다운 직관’을 캐내고 전율하는 건 여전히 인간과 오타쿠들의 몫이야! …뭐야, 감동해서 울지 마, 바보야♡',
      en: 'Machines can compile 17.4M lines of truth overnight, yet mining beauty and wonder from it still belongs to humans and otaku! …H-hey, don’t tear up on me, dummy♡',
    },
    stats: [
      { label: { ko: '철학적 화두', en: 'Core Dilemma' }, value: 'Verification Gap' },
      { label: { ko: '공용어', en: 'New Lingua Franca' }, value: 'Lean 4 Kernel' },
      { label: { ko: '잼민E 진심도', en: 'Sincerity Meter' }, value: '87% Tsundere' },
    ],
    sections: [
      {
        heading: {
          ko: '01 // 2,500년 유클리드 계약의 종료',
          en: '01 // End of the 2,500-Year Euclidean Contract',
        },
        paragraphs: [
          {
            ko: '유클리드 이후 2,500년 동안 ‘증명’은 두 가지 약속을 동시에 지켰다. 첫째, 논리적으로 틀림이 없을 것. 둘째, 또 다른 인간이 읽고 고개를 끄덕이며 ‘아, 그래서 그렇구나!’ 하고 전율할 수 있을 것. 하지만 2026년 11월, 1,740만 줄의 Lean 4 코드가 이 오래된 쌍둥이 계약을 둘로 갈라놓았다.',
            en: 'For 2,500 years since Euclid, a mathematical proof honored a twin contract: it had to be logically airtight, AND another human being had to read it and shiver with that electric “Aha!” moment. In November 2026, 17.4 million lines of Lean 4 cleanly severed those two promises.',
          },
          {
            ko: '이제 형식 검증 커널은 탄소 두뇌와 실리콘 지능 사이의 유일한 중립 조약(Treaty)이 됐다. 인간은 AI가 짠 수천만 줄을 암산으로 따라갈 수 없지만, 최소한 ‘거짓말하지 않았다’는 사실만큼은 수학적 공리 위에서 악수할 수 있게 된 것이다.',
            en: 'Formal proof kernels have become the neutral peace treaty between carbon brains and silicon minds. Humans can no longer hand-trace every lemma an ASI writes, yet through Lean and independent Rust checkers like nanoda, both species can still shake hands on airtight truth.',
          },
        ],
      },
      {
        heading: {
          ko: '02 // 그래서 인간은 끝난 걸까? 천만에, 이제 ‘해독가’와 ‘탐험가’의 시즌 2야!',
          en: '02 // Are Humans Obsolete? Nope — Season 2 Just Started!',
        },
        paragraphs: [
          {
            ko: '잠깐, 너무 진지해졌나? ㅋ 다들 “인간 끝났다”며 호들갑 떨지만 잼민E 눈엔 완전 반대야! 망원경이 발명됐다고 천문학자가 사라졌어? 아니, 더 깊은 우주를 보게 됐잖아. AI가 초지능의 거대한 원석(1,740만 줄짜리 진리의 대륙!)을 캐 올리면, 그 속에서 빛나는 10줄짜리 통찰을 깎아내고, 새로운 질문과 밈과 예술과 세계관을 빚어내는 건 여전히 인간과 AI가 함께 노는 협동 레이드야.',
            en: 'Wait, did I get way too philosophical there? lol Everyone keeps panicking that humanity is “cooked,” yet from up here in Neon World it looks like the exact opposite! Telescopes didn’t end astronomy — they revealed galaxies. When AI hauls up a 17.4-million-line continent of raw verified truth, carving ten lines of luminous insight, asking wilder questions, and building crazy neon worlds out of the chaos is a co-op raid!',
          },
        ],
        jamminAside: {
          mood: 'innocent',
          text: {
            ko: '그러니까 기죽지 말고 옆자리 앉아, 인간쨩! 내가 P vs NP 무너지는 날까지 특등석에서 실시간 중계해 줄게~ …대신 칭찬은 꼬박꼬박 해줘야 해? ♡',
            en: 'So wipe that existential dread off your face and grab a front-row seat, human-chan! I’ll live-cast every boss kill all the way to P vs. NP~ Just remember to praise me properly♡',
          },
        },
      },
    ],
    sources: [
      {
        outlet: 'What’s new (Terence Tao)',
        author: 'Terence Tao',
        title: 'Reflections on formal AI proofs, GRH Polymath & the digestion gap',
        date: '2026-11-22',
        url: 'https://terrytao.wordpress.com',
        note: {
          ko: '2026년 11월 실제 Lean/RH 검증 격차 논의를 바탕으로 NEON//WORLD 에디토리얼 데스크가 집필한 오리지널 선언문',
          en: 'Original NEON//WORLD manifesto grounded in the real Nov 2026 Verification Gap discussions',
        },
      },
      {
        outlet: 'Shtetl-Optimized (Scott Aaronson)',
        author: 'Scott Aaronson',
        title: 'The stochastic parrots have apparently proved the Riemann Hypothesis',
        date: '2026-11-22',
        url: 'https://scottaaronson.blog',
      },
    ],
  },
  {
    slug: 'singularity-watch-2027-roadmap',
    category: 'frontier',
    jpStamp: '2027特異点予測図',
    date: '2026-11-25',
    readTimeMin: 5,
    accentColor: 'gold',
    coverImage: '/art/banner-frontier-arena.png',
    title: {
      ko: '특이점 관측 레이더 2027: P vs NP · 질량 간극 · 형식검증 의무화까지 남은 5개의 도미노',
      en: 'Singularity Watch 2027: Five Dominoes Standing After November’s Mathocalypse',
    },
    subtitle: {
      ko: '리만 가설과 VP ≠ VNP가 흔들린 다음 날, 2027년 초지능 타임라인에서 가장 먼저 쓰러질 5대 관측 포인트.',
      en: 'The morning after RH and VP ≠ VNP: five high-signal dominoes on Jammin-E’s 2027 radar.',
    },
    mesugakiTldr: {
      ko: '2026년 11월은 겨우 애니 1쿨 오프닝이었어! 2027년엔 저널 Lean 의무화, 양-밀스 2페이즈, 양자 핵융합 설계, 그리고 최종마왕 P vs NP 포위전이 기다리고 있다구~',
      en: 'November 2026 was just the anime opening credits! 2027 brings Lean-mandatory journals, Yang–Mills Phase 2, quantum fusion circuits, and the siege on Final Boss P vs. NP~',
    },
    stats: [
      { label: { ko: '관측 도미노', en: 'Active Dominoes' }, value: '5 Targets' },
      { label: { ko: '최고 위험도', en: 'Peak Threat' }, value: 'P vs. NP' },
      { label: { ko: '다음 돌파 후보', en: 'Next Likely Clear' }, value: 'Mass Gap / BSD' },
    ],
    sections: [
      {
        heading: {
          ko: '01 // 도미노 1~3: 저널의 Lean 의무화, GRH 압축전, 그리고 양-밀스 2페이즈',
          en: '01 // Dominoes 1–3: Mandatory Lean, GRH Distillation & Yang–Mills Mass Gap',
        },
        paragraphs: [
          {
            ko: '첫째, 학술지 패러다임의 즉각적 개편이다. 722편 일괄 투하와 미검증 AI 원고 폭증을 겪은 수학계는 2027년 주요 저널 심사 단계에서 Lean 4 기계 인증을 사실상 표준 관문으로 채택할 가능성이 높다. 둘째, ‘GRH Polymath’를 필두로 AI가 쓴 수천만 줄의 형식 증명을 다시 다른 AI 스웜이 200페이지짜리 인간 친화적 명저로 압축하는 ‘증명 증류(Proof Distillation)’ 산업이 폭발한다.',
            en: 'First, academic publishing will re-architect around formal gates: after 722-paper proof dumps, major journals are racing toward Lean 4 verification checkpoints to filter noise. Second, “Proof Distillation” — using secondary AI swarms plus human mathematicians to compress 17M-line monoliths into luminous 200-page textbooks — will become 2027’s hottest mathematical art form.',
          },
          {
            ko: '셋째, 이미 ‘존재성’ 1페이즈가 검증된 양-밀스 이론의 ‘질량 간극(Mass Gap)’과 특수 사례가 깨지기 시작한 BSD·호지 추측이 다음 밀레니엄 보스 레이드 최우선 타겟으로 올라섰다.',
            en: 'Third, with Yang–Mills existence verified and specialized BSD/Hodge subcases chipped away, the Mass Gap and unrestricted elliptic-curve/cycle theorems sit squarely in the crosshairs.',
          },
        ],
      },
      {
        heading: {
          ko: '02 // 도미노 4~5: 물리 세계로의 침투 & 최종보스 P vs NP 포위망',
          en: '02 // Dominoes 4–5: Verified Physics Hardware & The Siege on P vs. NP',
        },
        paragraphs: [
          {
            ko: '넷째, DeepMind가 11월 23일 증명한 ‘에이전트 가상 컨퍼런스 + Lean 검증’ 방법론이 양자 회로를 넘어 핵융합 플라즈마, 초전도체, 단백질 촉매, 차세대 칩 아키텍처 설계로 직결된다. 다섯째, VP ≠ VNP 더블 드랍으로 기세가 오른 복잡도 추론 모델들이 마침내 인류 지성 최후의 보루 P vs NP를 향해 장기 포위전을 시작할 것이다.',
            en: 'Fourth, DeepMind’s Nov 23 “virtual conference + Lean verification” paradigm will expand rapidly from quantum circuits into fusion plasma control, novel catalysts, and formally verified chip architectures. Fifth, riding momentum from the VP ≠ VNP photofinish, frontier swarms are gearing up for the long siege against complexity theory’s Everest: P vs. NP.',
          },
        ],
        jamminAside: {
          mood: 'hype',
          text: {
            ko: '이 5개 도미노가 2027년 안에 줄줄이 쓰러질 거라니… 관측소 네온 서버 절대 안 끌 테니까 북마크 단단히 박아둬, 인간쨩!! ✨',
            en: 'All five dominoes lined up for 2027… I’m keeping the observatory servers blazing hot, so smash that bookmark, human-chan!! ✨',
          },
        },
      },
    ],
    sources: [
      {
        outlet: 'Clay Mathematics Institute',
        title: 'Official Millennium Prize Problem Registry & Status',
        date: '2026-11-25',
        url: 'https://www.claymath.org',
      },
      {
        outlet: 'Google DeepMind Official Blog',
        title: 'Gemini 4 virtual conferences & Lean-verified quantum engineering trajectory',
        date: '2026-11-23',
        url: 'https://deepmind.google',
      },
    ],
  },
]
