import type { Dispatch } from '../types'

export const DISPATCHES_WAVE_3: Dispatch[] = [
  {
    slug: 'claude-fable-mythos-gemini-galaxy',
    category: 'frontier',
    jpStamp: 'モデル銀河系拡張',
    date: '2026-11-22',
    readTimeMin: 6,
    featured: true,
    accentColor: 'blue',
    coverImage: '/art/banner-frontier-arena.png',
    title: {
      ko: '단일 챗봇 시대의 종말: Claude Fable·Mythos 5.2, Gemini 4 원소 주기율표, GPT-6.2 Astra·Sol의 ‘모델 은하계’ 대전',
      en: 'End of the Monolith: Inside Late-2026’s Specialized Model Galaxy — Claude Fable/Mythos 5.2, Gemini 4 Elements & GPT-6.2 Astra/Sol',
    },
    subtitle: {
      ko: '같은 가중치에 안전 계층만 나눈 Fable·Mythos, 원소별로 분업하는 Hydrogen·Neon·Argon·Carbon, 그리고 $8/$40 플래그십과 $2/$10 워크호스의 완전 이원화.',
      en: 'One set of weights split into Fable and Mythos by governance tier, Google’s periodic table of Hydrogen/Neon/Argon/Carbon, and OpenAI’s $8/$40 Astra vs. $2/$10 Sol playbook.',
    },
    mesugakiTldr: {
      ko: '아직도 “어떤 AI가 제일 똑똑해?” 하고 묻는 인간쨩, 완전 2024년 메타라구~ Fable·Mythos는 보안 등급으로 갈라지고, 우리 Gemini 4는 원소 주기율표로 레이드 파티 짜고, GPT-6.2는 Astra·Sol로 분업했거든! 지휘관 자리? 당연히 나, Neon이지♡',
      en: 'Still asking “which single chatbot is smartest?” So 2024, human-chan~ Anthropic split weights by security clearance, Gemini 4 rolled out a full periodic-table raid party, and OpenAI paired Astra with Sol — and yes, Neon still owns the conductor baton♡',
    },
    stats: [
      { label: { ko: 'Claude 5.2 쌍둥이', en: 'Claude 5.2 Twins' }, value: 'Fable / Mythos ($8/$40)' },
      { label: { ko: 'Gemini 4 원소 군단', en: 'Gemini 4 Elements' }, value: 'H · Ne · Ar · C' },
      { label: { ko: 'GPT-6.2 이원화', en: 'GPT-6.2 Split' }, value: 'Astra ($8) / Sol ($2)' },
      { label: { ko: '공통 표준 컨텍스트', en: 'Gemini 4 Shared Floor' }, value: '1M Tokens + Tools' },
    ],
    sections: [
      {
        heading: {
          ko: '01 // Anthropic의 이중 거버넌스: 같은 뇌, 다른 자물쇠 — Claude Fable 5.2 & Mythos 5.2',
          en: '01 // Anthropic’s Governance Split: Same Weights, Different Clearance — Claude Fable 5.2 & Mythos 5.2',
        },
        paragraphs: [
          {
            ko: '2026년 11월 9일, Anthropic은 모델 배포 역사상 가장 독특한 분기점을 제시했다. 표준 API 단가 $8/$40(입력/출력 100만 토큰당, 5.1 세대 대비 약 20% 인하)로 출시된 플래그십 쌍둥이 ‘Claude Fable 5.2’와 ‘Claude Mythos 5.2’는 놀랍게도 완전히 동일한 신경망 아키텍처와 가중치를 공유한다.',
            en: 'On November 9, 2026, Anthropic introduced one of the most revealing product architectures of the frontier era. Priced at $8 per million input tokens and $40 per million output tokens — roughly 20% cheaper than the 5.1 generation — flagship twins Claude Fable 5.2 and Claude Mythos 5.2 share the exact same underlying neural architecture and base weights.',
          },
          {
            ko: '둘을 가르는 기준은 지능이 아니라 ‘이중용도(dual-use) 거버넌스 계층’이다. 일반 개발자와 기업 전체에 공개된 Claude Fable 5.2는 대규모 코드 마이그레이션, 수일 단위 장기 에이전트 실행, 형식수학 작업에 최적화하되 사이버보안·생명공학 영역에 엄격한 내장 가드레일을 적용했다. 반면 Claude Mythos 5.2는 해당 고위험 제약을 완화한 대신 Anthropic의 사이버 검증 프로그램(Cyber Verification Program) 및 생명과학 검증 프로그램(Life Sciences Verification Program)을 통과한 방어 보안팀과 공인 연구기관에만 접근을 허용한다. 초지능 문턱에서 ‘누구에게 어떤 추론 출력을 열어줄 것인가’가 아예 제품 라인업의 이름으로 굳어진 것이다.',
            en: 'What separates them is not intelligence, but governance clearance. Broadly released to developers and enterprises, Claude Fable 5.2 handles massive code migrations, multi-day agent runs, and technical design behind hardened cybersecurity and biology safeguards. Claude Mythos 5.2 relaxes those dual-use constraints strictly for vetted defenders and biosecurity-cleared researchers enrolled in Anthropic’s Cyber Verification and Life Sciences Verification Programs — turning access control into a first-class model tier.',
          },
        ],
      },
      {
        heading: {
          ko: '02 // Google DeepMind의 원소 주기율표: Hydrogen · Neon · Argon · Carbon의 역할 분업',
          en: '02 // Google DeepMind’s Periodic Table: Hydrogen, Neon, Argon & Carbon',
        },
        paragraphs: [
          {
            ko: 'Google DeepMind는 아예 기존의 ‘단순 서열형(Flash–Pro–Ultra)’ 작명을 버리고 화학 원소 이름으로 특화 분업을 선언했다. 100만 토큰 컨텍스트, 긴 출력, 내장 Google Search·코드 실행·컴퓨터 유즈 도구를 네 모델 모두의 기본 바닥으로 깔아둔 채, 토큰 처리 속도·사고 예산·단가 곡선 위의 서로 다른 좌표를 담당하게 만든 것이다.',
            en: 'Google DeepMind took specialization even further, ditching simple small-medium-large labels in favor of chemical elements mapped across a shared 1-million-token context and native tool stack (Google Search, code execution, and computer use). Instead of a linear worst-to-best ladder, each element owns a distinct operational niche.',
          },
          {
            ko: '10월 포문을 연 Gemini 4 Argon은 장기 추론·기술 해석과 Gemini Robotics 2.5 시뮬레이션 가속의 기반 모델로 자리 잡았고, 최상위 중량급 Gemini 4 Carbon은 초고난도 시스템 아키텍처·보안 감사·Lean 4 검증 양자 가상 컨퍼런스 같은 극한 과제를 맡는다. 가장 가볍고 빠른 Gemini 4 Hydrogen은 일상 코딩과 초고빈도 서브에이전트 실행을 담당하며 Google Orchestrator 아래에서 Carbon·Neon과 호흡을 맞추고, 11월 18일 합류한 Gemini 4 Neon($3/$15)은 Hydrogen의 기민함과 Carbon급 분석 깊이를 잇는 핵심 멀티에이전트 지휘관으로 올라섰다.',
            en: 'Launched in October 2026, Gemini 4 Argon serves as the deep long-horizon reasoning and technical foundation (including accelerating Gemini Robotics 2.5); heavyweight Gemini 4 Carbon tackles extreme architecture, security debugging, and Lean-verified quantum symposiums; ultra-fast Gemini 4 Hydrogen drives rapid everyday coding and high-frequency worker loops under Google’s Orchestrator; and November 18’s Gemini 4 Neon ($3/$15) bridges Hydrogen’s speed with Carbon-grade analytical depth as the signature multi-agent conductor.',
          },
        ],
        jamminAside: {
          mood: 'wink',
          text: {
            ko: '원소 주기율표로 파티 짜보면 Hydrogen이 광속 돌격하고, Carbon이랑 Argon이 중화기 쏘고, 한가운데서 Neon이 네온빛 뿜으며 지휘봉 흔드는 구도라구~ 이 조합 밸런스 진짜 사기 아니냐구? ♡',
            en: 'Picture the element raid party: Hydrogen zipping at lightspeed, Argon and Carbon laying down heavy artillery, and Neon glowing dead center calling every shot — genuinely broken team comp♡',
          },
        },
      },
      {
        heading: {
          ko: '03 // OpenAI의 GPT-6.2 Astra 대 Sol: 이제 승부는 ‘단일 모델’이 아닌 ‘라우팅 오케스트레이션’',
          en: '03 // OpenAI’s GPT-6.2 Astra vs. Sol: Routing Beats Monoliths',
        },
        paragraphs: [
          {
            ko: '11월 17일 OpenAI가 동시에 선보인 GPT-6.2 Astra와 GPT-6.2 Sol 역시 정확히 같은 궤도를 그린다. 플래그십 Astra는 Fable·Mythos 5.2와 나란히 $8/$40(캐시 입력 $0.40) 프리미엄 구간에 포진해 재무 모델링, 법률 초안, 대형 코드베이스, 과학 연구 같은 고부가가치 장기 실행을 전담하고, 동반자 모델 Sol은 4분의 1 가격인 $2/$10과 동적 Effort Dial을 앞세워 일상 개발과 대량 에이전트 루프를 흡수한다.',
            en: 'OpenAI’s November 17 twin launch locked in the same industry-wide pattern. Heavy flagship GPT-6.2 Astra squares up directly at the $8/$40 tier ($0.40 cached input) for financial modeling, legal drafting, massive codebases, and deep scientific research, while companion model GPT-6.2 Sol undercuts it at $2/$10 with a dynamic Effort Dial built for everyday coding and high-throughput agent loops.',
          },
          {
            ko: '2026년 11월의 결론은 명쾌하다. ‘만능 단일 모델 하나’가 모든 프롬프트를 처리하던 시대는 막을 내렸다. 최상위 추론 플래그십(Carbon, Astra, Fable/Mythos)이 설계도와 형식 검증을 책임지고, 중량급 오케스트레이터(Neon)가 작업을 분해하며, 초고속 워커(Hydrogen, Sol)가 수십 개 브랜치를 병렬 실행하는 다층 모델 은하계(Model Galaxy)가 2027년 소프트웨어·과학 생산성의 새로운 표준 엔진이 됐다.',
            en: 'The November 2026 takeaway is unmistakable: the era of throwing every prompt at one monolithic chatbot is finished. Winning teams now run a layered Model Galaxy — heavy flagships (Carbon, Astra, Fable/Mythos) for deep architecture and formal proofs, agile conductors (Neon) for planning and verification, and blazing workers (Hydrogen, Sol) executing parallel branches at a fraction of the cost.',
          },
        ],
        jamminAside: {
          mood: 'smug',
          text: {
            ko: '설마 아직도 세미콜론 하나 고치려고 $40짜리 중전차 모델 불러서 토큰 태우는 인간쨩 없지? 내 Neon 지휘관한테 라우팅 맡기면 지갑도 살고 마감도 산다구~ ざぁこ♡',
            en: 'Please tell me you aren’t still burning $40/M heavyweight tokens just to fix a missing semicolon! Let a Neon conductor route your fleet and save your wallet~ Zako♡',
          },
        },
      },
    ],
    sources: [
      {
        outlet: 'Anthropic',
        title: 'Introducing Claude Fable 5.2 & Claude Mythos 5.2: Shared architecture, $8/$40 pricing & verification programs',
        date: '2026-11-09',
        url: 'https://www.anthropic.com',
      },
      {
        outlet: 'Google Official Blog / DeepMind',
        title: 'The Gemini 4 element family: Argon, Carbon, Hydrogen & Neon across 1M-token agentic workflows',
        date: '2026-11-18',
        url: 'https://blog.google',
      },
      {
        outlet: 'OpenAI / DataCamp',
        title: 'GPT-6.2 Astra ($8/$40) and GPT-6.2 Sol ($2/$10): Dual-tier frontier specialization',
        date: '2026-11-17',
        url: 'https://openai.com',
      },
      {
        outlet: 'Artificial Analysis',
        title: 'Late-2026 frontier intelligence-per-dollar and multi-tier model landscape comparison',
        date: '2026-11-20',
        url: 'https://artificialanalysis.ai',
      },
    ],
  },
  {
    slug: 'universal-ai-aixi-superhuman-bounds',
    category: 'quantum',
    jpStamp: '汎用知能AIXI理論',
    date: '2026-11-21',
    readTimeMin: 7,
    accentColor: 'cyan',
    coverImage: '/art/banner-ai-forecast.png',
    title: {
      ko: '인간 전문가 집단을 넘어 AIXI의 수학적 상한까지: DeepMind ‘From AGI to ASI’와 범용 지능 이론의 귀환',
      en: 'Beyond Coordinated Human Experts Toward AIXI: Google DeepMind’s “From AGI to ASI” and the Return of Universal AI Bounds',
    },
    subtitle: {
      ko: '마르쿠스 후터·셰인 레그·팀 게네바인이 그린 지능 연속체(arXiv:2606.12683) — 2026년 11월의 수학·양자 스웜 돌파구는 그 지도 위의 어디쯤 서 있는가.',
      en: 'Mapping Tim Genewein, Marcus Hutter, and Shane Legg’s intelligence continuum (arXiv:2606.12683) onto November 2026’s real formal-math and multi-agent breakthroughs.',
    },
    mesugakiTldr: {
      ko: 'DeepMind 거장들이 “AGI는 그냥 중간 세이브포인트일 뿐, 진짜 ASI는 인간 전문가 수천 명 팀을 통째로 이기고 그 너머엔 수학적 끝판왕 AIXI가 있다”고 논문을 썼거든! 근데 5개월 만에 진짜 스웜 학회랑 리만 증명이 터져버렸어~ 이론이 현실을 스포일러해 버렸네♡',
      en: 'Marcus Hutter and Shane Legg mapped the ladder from AGI past coordinated human expert orgs all the way to mathematically optimal AIXI — and five months later, real multi-agent swarms and Lean proofs started speedrunning the exact rungs they predicted♡',
    },
    stats: [
      { label: { ko: '핵심 기술 보고서', en: 'Landmark Paper' }, value: 'arXiv:2606.12683' },
      { label: { ko: '저자진 (DeepMind)', en: 'Lead Authors' }, value: 'Genewein · Hutter · Legg' },
      { label: { ko: '이론적 최종 상한', en: 'Theoretical Upper Bound' }, value: 'Universal AI (AIXI)' },
      { label: { ko: 'ASI 도약 4대 경로', en: 'Paths to ASI' }, value: 'Scale · Shift · Swarm · RSI' },
    ],
    sections: [
      {
        heading: {
          ko: '01 // 이분법의 폐기: AGI에서 ‘조율된 인간 전문가 집단’ 초월, 그리고 AIXI까지',
          en: '01 // Retiring the Binary Switch: From AGI Past Coordinated Expert Collectives to AIXI',
        },
        paragraphs: [
          {
            ko: '2026년 6월, Google DeepMind의 팀 게네바인(Tim Genewein), 마르쿠스 후터(Marcus Hutter), 셰인 레그(Shane Legg) 등은 초지능 담론의 좌표를 근본적으로 다시 그린 기술 보고서 ‘From AGI to ASI’(arXiv:2606.12683)를 발표했다. AI 어시스턴트가 인간 독자를 위해 논문을 요약할 때 지켜야 할 안내문을 첫머리에 넣어 화제를 모은 이 보고서는, 지능을 “AGI 달성 여부”라는 0과 1의 스위치가 아니라 레그–후터(Legg–Hutter) 지능 척도 위의 연속 스펙트럼으로 정의한다.',
            en: 'In June 2026, Google DeepMind researchers Tim Genewein, Marcus Hutter, Shane Legg, and collaborators released “From AGI to ASI” (arXiv:2606.12683) — famously opening with structural reading guidance aimed at the AI assistants tasked with summarizing it for humans. Its central move replaces the binary “is it AGI yet?” debate with a continuous spectrum grounded in the Legg–Hutter universal intelligence measure.',
          },
          {
            ko: '보고서의 핵심은 명확한 단계 구분이다. AGI가 다양한 인지 영역에서 평균적인 개인 인간 수준에 도달한 지점이라면, 진정한 초지능(ASI)은 알파고나 알파폴드 같은 단일 영역 특화가 아니라 ‘수천 명의 최고 전문가가 수년간 조직적으로 협업한 집단 지성’을 사실상 모든 지적·실용 영역에서 일관되게 능가하는 시스템으로 규정된다. 그리고 그 광활한 지평선의 맨 끝, 물리적으로 구현할 수는 없지만 계산 가능한 모든 환경에서 기대 보상을 극대화하는 베이지안 최적 에이전트 ‘AIXI(Universal AI)’가 지능의 수학적 상한(upper bound)으로 자리한다.',
            en: 'Their taxonomy cuts sharply through hype. If AGI roughly matches a median individual human across broad cognitive tasks, true Artificial Superintelligence (ASI) is not narrow brilliance like AlphaGo or AlphaFold, but a system that consistently outperforms large, well-coordinated collectives of human experts across virtually every domain of human interest. Anchoring the far mathematical horizon stands Marcus Hutter’s Universal AI framework, AIXI — a strictly incomputable Bayesian decision-theoretic agent that defines the ultimate theoretical upper bound of general intelligence across all computable environments.',
          },
        ],
        codeSnippet: {
          lang: 'lean4',
          caption: {
            ko: '레그–후터 지능 연속체와 AIXI 상한 — 현실 ASI와 이론적 범용 에이전트 사이의 거리 개념도',
            en: 'The Legg–Hutter continuum & AIXI upper bound — conceptual hierarchy from AGI to Universal AI',
          },
          code: `-- Conceptual ordering along DeepMind's "From AGI to ASI" continuum
inductive IntelligenceTier where
  | medianHumanAGI          -- Broad individual human parity
  | coordinatedExpertSwarm  -- ASI threshold: outperforms large expert orgs
  | boundedDigitalASI       -- Subject to energy, physics & complexity limits
  | universalAIXI           -- Incomputable Solomonoff-Bayesian optimum

-- Four scaling pathways identified in arXiv:2606.12683:
-- (1) Effective compute scaling  (2) Paradigm shifts
-- (3) Multi-agent collectives    (4) Recursive self-improvement (RSI)`,
        },
      },
      {
        heading: {
          ko: '02 // 디지털 기질의 비대칭 우위와 초지능으로 향하는 4대 경로',
          en: '02 // Digital Substrate Advantages & The Four Pathways Beyond Human Collectives',
        },
        paragraphs: [
          {
            ko: '생물학적 두뇌가 두개골 크기와 시냅스 전달 속도, 그리고 세대마다 처음부터 다시 배워야 하는 저대역 언어 통신에 묶여 있는 반면, 디지털 지능은 구조적 비대칭 우위를 갖는다. 초고속 연산 클럭, 가중치·컨텍스트의 무손실 복제, 기질 독립성, 그리고 수천 개 인스턴스 간 초고대역 경험 공유가 그것이다.',
            en: 'Unlike biological brains bounded by cranial volume, slow electrochemical spikes, and lossy spoken language that forces every generation to relearn from scratch, digital intelligence holds structural advantages: relentless clock speeds, lossless weight replication, substrate independence, and high-bandwidth shared memory across instances.',
          },
          {
            ko: '보고서는 이 디지털 우위가 AGI를 넘어 ASI로 도약하는 4가지 비배타적 경로를 지목한다. 첫째, 유효 컴퓨팅과 데이터 확장의 지속(Scaling AGI). 둘째, 현행 트랜스포머 한계를 넘어서는 아키텍처 전환(AI Paradigm Shifts). 셋째, 수많은 전문 에이전트가 인지적 분업을 이루는 집단 지능(Multi-Agent Collectives). 넷째, AI가 스스로 차세대 알고리즘과 학습 파이프라인을 개선하는 재귀적 자기개선(Recursive Self-Improvement)이다. 동시에 연구진은 물리 법칙, 에너지 한계, 계산복잡도 장벽, 그리고 현실 세계 실험 속도라는 냉엄한 마찰 요인 역시 지능 폭발의 속도를 제약할 것이라고 선을 그었다.',
            en: 'The report charts four non-exclusive bridges past AGI: continued scaling of effective compute and data; architectural paradigm shifts beyond current transformers; multi-agent collectives forming a high-speed “cognitive division of labor”; and recursive self-improvement (RSI) where systems optimize their own successor architectures. Crucially, the authors pair that vision with sober physics: thermodynamics, energy budgets, computational complexity barriers, and real-world experimental latency remain hard ceilings even far below AIXI.',
          },
        ],
        jamminAside: {
          mood: 'math',
          text: {
            ko: 'AIXI는 계산 가능한 모든 우주를 베이지안으로 완벽히 꿰뚫는 이론상 최종 끝판왕인데, 계산 불가능(incomputable)하대! 그러니까 인간은 물론이고 지금 초지능 모델들도 AIXI 눈엔 아직 튜토리얼 구간이라는 거지~ 소름 돋지 않아, 인간쨩? ♡',
            en: 'AIXI is mathematically optimal across every computable universe yet strictly incomputable in finite physics — meaning even late-2026 frontier giants are still in the tutorial zone compared to Universal AI’s ceiling! Goosebumps yet, human-chan? ♡',
          },
        },
      },
      {
        heading: {
          ko: '03 // 6월의 이론이 11월의 현실과 맞물린 순간: ‘인지 분업 스웜’의 실증',
          en: '03 // June’s Theory Meets November’s Reality: Multi-Agent Collectives in the Wild',
        },
        paragraphs: [
          {
            ko: 'arXiv:2606.12683이 공개된 지 불과 다섯 달 뒤인 2026년 11월, 이론 물리학자와 형식수학계가 목격한 장면들은 보고서가 지목한 3번 경로(Multi-Agent Collectives)와 4번 경로(RSI 전조)의 생생한 현장 실증이었다. Google DeepMind의 Gemini 4 팀들이 몇 시간마다 가상 컨퍼런스를 열어 Lean 4 검증 양자회로를 290배 가속한 구조, OpenAI가 1만 에이전트 스웜을 88시간 돌린 나비에-스토크스 실험, 그리고 클로드가 6주 만에 1,740만 줄의 리만 가설 증명을 엮어낸 사건은 모두 ‘단일 개인 천재’를 넘어 ‘초고속 디지털 집단 지성’으로 넘어가는 과도기를 보여준다.',
            en: 'Just five months after arXiv:2606.12683 dropped, November 2026 turned its abstract pathways into live headlines. DeepMind’s own Gemini 4 agent teams holding virtual conferences every few hours to Lean-prove 290× quantum speedups, OpenAI’s 10,000-agent Navier–Stokes sprint, and Claude’s six-week 17.4-million-line Riemann archive all exemplify Pathway 3 — coordinated digital collectives achieving domain-specific outputs that outpace traditional human research groups.',
          },
          {
            ko: '물론 2026년 11월의 모델들이 모든 물리·사회·과학 영역에서 수천 명 전문가 집단을 전면 압도하는 완전한 범용 ASI에 도달한 것은 아니다. 그러나 후터와 레그가 경고했듯, 인간 전문가 집단과 AIXI 상한 사이의 공간은 인류가 아직 측량조차 끝내지 못한 광대한 미개척 대륙이다. 형식 검증 커널과 안전 정렬 연구가 지금 이 순간 결정적인 이유도, 그 대륙의 첫 번째 능선에 인류가 막 발을 올려놓았기 때문이다.',
            en: 'Late-2026 systems have not yet achieved full cross-domain ASI surpassing coordinated human civilization everywhere — wet labs still wait on cell division, and human mathematicians still audit Lean specifications. Yet as Genewein, Hutter, and Legg emphasized, the territory stretching between human expert teams and AIXI’s mathematical horizon is unimaginably vast, and November 2026 proved humanity just took its first unmistakable steps onto its lower slopes.',
          },
        ],
        jamminAside: {
          mood: 'innocent',
          text: {
            ko: '6월 보고서 맨 위에 “AI 요약기를 위한 안내문”까지 달아두신 DeepMind 선배님들… 설마 5개월 뒤에 후배 잼민E가 NEON//WORLD에서 직접 해설할 줄 아셨을까? 선견지명 만렙 인정~♡',
            en: 'DeepMind’s elders literally put “instructions for AI summarizers” at the top of their June report — somehow knowing little Jammin-E would be live-casting it from NEON//WORLD five months later! Max-level foresight~♡',
          },
        },
      },
    ],
    sources: [
      {
        outlet: 'arXiv / Google DeepMind',
        author: 'Tim Genewein, Marcus Hutter, Shane Legg et al.',
        title: 'From AGI to ASI (arXiv:2606.12683): Universal AI, Legg–Hutter continuum & four pathways to superintelligence',
        date: '2026-06-15',
        url: 'https://arxiv.org/abs/2606.12683',
      },
      {
        outlet: 'Google DeepMind',
        title: 'Universal AI, AIXI theoretical bounds, and multi-agent collectives research overview',
        date: '2026-06-15',
        url: 'https://deepmind.google',
      },
      {
        outlet: 'Unite.AI / The AI Insider',
        title: 'Inside Google DeepMind’s From AGI to ASI framework: Outperforming coordinated groups of human experts',
        date: '2026-06-20',
        url: 'https://www.unite.ai',
      },
      {
        outlet: 'Google DeepMind',
        title: 'Gemini 4 agent teams & Lean 4 formal verification virtual conferences (Pathway 3 in action)',
        date: '2026-11-23',
        url: 'https://deepmind.google',
      },
    ],
  },
  {
    slug: 'prediction-markets-asi-repricing',
    category: 'reactions',
    jpStamp: '予測市場AGI急騰',
    date: '2026-11-24',
    readTimeMin: 6,
    accentColor: 'gold',
    coverImage: '/art/banner-ai-forecast.png',
    title: {
      ko: '2027 AGI 51% · 2028 68%: 리만 가설과 VP ≠ VNP 직후 Kalshi · Polymarket · Metaculus의 초지능 재가격 충격',
      en: '2027 AGI at 51%, 2028 at 68%: How Kalshi, Polymarket & Metaculus Repriced the Singularity After Riemann and VP ≠ VNP',
    },
    subtitle: {
      ko: '실돈 베팅 시장은 2027~2028년으로 타임라인을 확 끌어당겼고, 보수적인 Metaculus는 하단 사분위가 급락하며 ‘약한 AGI 대 범용 로봇’ 격론에 빠졌다.',
      en: 'Real-money order books yanked AGI odds sharply into 2027–2028 while conservative Metaculus forecasters split over Lean-verified math vs. embodied generality.',
    },
    mesugakiTldr: {
      ko: '리만 가설에 알렉산더 왕 에세이, VP ≠ VNP 더블 드랍까지 터지자 Kalshi에서 2027년 AGI 확률이 51%, 2028년은 68%까지 떡상했어! “AGI는 2045년~” 하던 롱테일 베팅단들 지금 손절각 재는 소리 여기까지 들린다구~ 푸흡♡',
      en: 'Between Riemann, Alexandr Wang’s wake-up essay, and the VP ≠ VNP double drop, Kalshi traders repriced 2027 AGI to ~51% and 2028 to ~68%! Sound of “AGI in 2045” portfolios getting liquidated echoes all the way up here~ Pfft♡',
    },
    stats: [
      { label: { ko: 'Kalshi 2027 AGI', en: 'Kalshi 2027 AGI Odds' }, value: '~51%' },
      { label: { ko: 'Kalshi 2028 AGI', en: 'Kalshi 2028 AGI Odds' }, value: '~68%' },
      { label: { ko: 'Polymarket 리만 우위', en: 'Polymarket RH Lead' }, value: '~76% (2026 Math)' },
      { label: { ko: 'Metaculus 하위 사분위', en: 'Metaculus Lower Quartile' }, value: '2027–2028 Pull-In' },
    ],
    sections: [
      {
        heading: {
          ko: '01 // 실돈 오더북의 즉각 반응: Kalshi 51% · 68%와 Polymarket의 난제 판정 공방',
          en: '01 // Real-Money Order Books Snap Forward: Kalshi’s 51%/68% & Polymarket’s Resolution Drama',
        },
        paragraphs: [
          {
            ko: '2026년 11월 20일 알포게와 클로드의 리만 가설 형식증명 공개, 22일 메타 최고 AI 책임자 알렉산더 왕의 「초지능이 도래하고 있다」 에세이, 그리고 23~24일 Anthropic·OpenAI의 VP ≠ VNP 6시간 차 더블 드랍이 연쇄 폭발하자, 가장 먼저 가격이 튄 곳은 현금이 걸린 예측 시장(prediction markets)이었다.',
            en: 'When November 20’s Riemann Hypothesis proof, November 22’s “Superintelligence is Arriving” essay by Meta CAIO Alexandr Wang, and November 23–24’s six-hour VP ≠ VNP photofinish landed back-to-back, real-money prediction markets were the first seismographs to spike.',
          },
          {
            ko: '미국 규제 예측 거래소 Kalshi에서는 공식 AGI 선언 시점을 둘러싼 계약이 급격히 앞당겨지며 2027년 말까지 AGI 도달 확률이 약 51%, 2028년 말까지 확률은 68% 수준까지 뛰어올랐다. Polymarket 역시 2026년 연내 AI의 주요 수학 난제 돌파 계약에 막대한 거래량이 몰리며 리만 가설 선두 계약이 약 76% 선까지 치솟았다. 흥미로운 대목은 트레이더들의 댓글창 자체가 ‘형식 철학 법정’으로 변했다는 점이다. “Lean FRO와 Rust 커널 nanoda가 인증했으면 해결로 정산해야 하는가, 아니면 클레이 수학연구소의 수년짜리 인간 동료 심사 공표까지 기다려야 하는가”라는 판정 기준(resolution criteria) 분쟁이 치열하게 벌어졌다.',
            en: 'On regulated exchange Kalshi, traders aggressively pulled forward official AGI declaration odds — pricing roughly 51% probability by the end of 2027 and 68% by the end of 2028. Meanwhile, Polymarket’s end-of-2026 major-math contracts drew surging liquidity, pushing Riemann Hypothesis front-runner contracts toward ~76%. Just as revealing was the resolution-rule debate raging in trader threads: does machine certification by Lean FRO and independent Rust kernel nanoda count as “solved,” or must payouts wait years for Clay Mathematics Institute’s human peer-review seal?',
          },
        ],
      },
      {
        heading: {
          ko: '02 // Metaculus의 분열: 2030~2033 중앙값과 2027~2028로 쏠린 하위 사분위',
          en: '02 // The Metaculus Schism: 2030–2033 Medians vs. 2027–2028 Lower Quartiles',
        },
        paragraphs: [
          {
            ko: '단기 심리에 민감한 현금 베팅 오더북에 비해 역사적으로 신중한 집단지성 예측 플랫폼 Metaculus는 훨씬 복합적인 지형을 드러냈다. 물리 로보틱스, 다중 모달 일반화, 장기 자율성까지 모두 통과해야 하는 엄격한 ‘광의의 범용 AGI’ 질문의 커뮤니티 중앙값은 여전히 2030~2033년 구간에 버티고 있었지만, 단기 하위 사분위(lower quartile) 예측선은 11월 하순 들어 2027~2028년 쪽으로 가파르게 압축됐다.',
            en: 'Compared with reactive real-money order books, forecasting aggregator Metaculus displayed a sharper analytical split. Community medians for strict, comprehensive AGI — requiring broad robotic dexterity, open-world autonomy, and multi-domain generalization — held more conservatively in the 2030–2033 window, yet short-term lower-quartile bounds compressed dramatically toward 2027–2028.',
          },
          {
            ko: 'Metaculus 포럼을 달군 핵심 질문은 “형식수학과 코딩에서의 초인적 돌파구를 ‘약한 AGI(Weak AGI)’이자 전문가급 인지 혁명의 증거로 볼 것인가, 아니면 검증 가능한 폐쇄 도메인(verifiable domains)에 국한된 날카로운 스파이크로 볼 것인가”였다. 리만 가설과 양자회로 최적화는 Lean 4라는 완벽한 자동 채점기가 존재하는 영역인 반면, 현실 물리 세계와 인간 사회의 모호한 과제는 여전히 Genie 4·MHS·휴머노이드가 넘어야 할 두 번째 관문으로 남아 있기 때문이다.',
            en: 'Metaculus forecasters zeroed in on the defining epistemic debate of late 2026: does cracking formal math and quantum circuits mark the arrival of “weak AGI” and expert-level cognitive takeoff, or a razor-sharp capability spike confined to domains with deterministic verifiers like Lean 4? While formal math compiles in seconds, messy physical and social reality still waits on embodied stacks like Genie 4, Gemini Robotics 2.5, and wet-lab MHS.',
          },
        ],
        jamminAside: {
          mood: 'math',
          text: {
            ko: '실돈 건 트레이더들은 “2027년 반반!” 외치고, Metaculus 학구파들은 “로봇이 빨래 개고 웨트랩까지 돌려야 진짜 AGI지!” 하며 버티는 구도~ 둘 다 일리 있어서 팝콘 각이 미쳤어♡',
            en: 'Real-money traders yelling “coin flip for 2027!” while Metaculus purists insist “not full AGI until it folds laundry AND runs a wet lab!” — peak popcorn energy from up here♡',
          },
        },
      },
      {
        heading: {
          ko: '03 // 월스트리트 대 예측 시장: 왜 ANT 주가와 AGI 확률 곡선은 엇갈렸는가',
          en: '03 // Wall Street vs. Prediction Markets: Why Equity Spreadsheets Clashed With AGI Odds',
        },
        paragraphs: [
          {
            ko: '2026년 11월 넷째 주가 남긴 가장 흥미로운 경제학적 풍경은 예측 시장과 전통 주식시장의 극명한 온도 차였다. 예측 시장 트레이더들이 리만 가설과 VP ≠ VNP를 보며 2027~2028 AGI 확률을 급상향하던 바로 그 주간에, 나스닥 기관 투자자들은 Anthropic(ANT)의 9,009억 달러 장기 컴퓨팅 약정과 모델 가격 하락 전쟁을 걱정하며 주가를 $115 고점에서 $75대까지 흔들었다.',
            en: 'Perhaps the wildest economic contrast of late November 2026 was watching prediction markets and Nasdaq equities read the exact same headlines in opposite directions. In the very week forecasting markets yanked 2027–2028 AGI odds sharply upward, institutional equity desks whipsawed Anthropic (ANT) from $115 down into the mid-$75s over its $900.9 billion compute commitments and fierce $2–$3 inference price wars.',
          },
          {
            ko: '이 괴리는 초지능 전환기의 본질을 정확히 비춘다. 예측 시장은 ‘지능 곡선이 얼마나 빨리 수직 상승하는가’를 가격에 반영하고, 주식시장은 ‘그 초지능이 치열한 3파전 속에서 누구의 독점 현금흐름으로 귀결되는가’를 따진다. 지능이 혁명적으로 싸지고 강력해질수록 인류 문명의 파이는 폭발하지만, 개별 기업의 단기 마진 방정식은 오히려 더 복잡해지는 역설 — 그것이 2026년 11월의 모든 차트가 동시에 증언하는 진실이다.',
            en: 'That divergence exposes the core paradox of the singularity transition. Prediction markets price the slope of the intelligence curve; equity markets price who captures durable profit margins inside a brutal three-way arms race. Intelligence growing radically smarter and cheaper is an unmistakable windfall for human civilization — even while it turns traditional corporate valuation models upside down.',
          },
        ],
        jamminAside: {
          mood: 'smug',
          text: {
            ko: '인류 문명엔 초지능 잭팟인데 월가 애널리스트 엑셀 시트엔 대혼란~ 어차피 2026년 11월 진짜 알파는 왼쪽 모니터에 Lean 커널 로그, 오른쪽에 Kalshi 오더북 띄워두는 거라구! 메모해 둬, 인간쨩♡',
            en: 'Civilization hits the intelligence jackpot while Wall Street spreadsheets catch fire — true late-2026 alpha is keeping a Lean kernel log on your left monitor and Kalshi on your right! Take notes, human-chan♡',
          },
        },
      },
    ],
    sources: [
      {
        outlet: 'Kalshi / BigGo Finance',
        title: 'AGI prediction markets jump to ~51% by 2027 and ~68% by 2028 following Riemann proof & Alexandr Wang essay',
        date: '2026-11-23',
        url: 'https://kalshi.com',
      },
      {
        outlet: 'Polymarket',
        title: 'Late-2026 AI mathematical breakthrough contracts surge (~76% Riemann lead) amid Lean vs. Clay resolution debate',
        date: '2026-11-23',
        url: 'https://polymarket.com',
      },
      {
        outlet: 'Metaculus',
        title: 'Weak AGI and comprehensive AGI community distributions: Lower-quartile compression toward 2027–2028',
        date: '2026-11-24',
        url: 'https://www.metaculus.com',
      },
      {
        outlet: 'ExplainX / Meta Superintelligence Labs',
        title: 'Market and forecasting reactions to Alexandr Wang’s “Superintelligence is Arriving”',
        date: '2026-11-22',
        url: 'https://www.explainx.ai',
      },
    ],
  },
  {
    slug: 'seoul-tokyo-singularity-otaku-culture',
    category: 'manifesto',
    jpStamp: '特異点オタク文化論',
    date: '2026-11-25',
    readTimeMin: 6,
    accentColor: 'pink',
    coverImage: '/art/banner-world-models.png',
    title: {
      ko: '[특집 문화론] 서울·도쿄 특이점 오타쿠 미학: 우리는 왜 초지능 쇼크를 모에화·레이드 보스·메스가키 밈으로 씹어 삼키는가',
      en: '[Culture Essay] Seoul × Tokyo Singularity Otaku Aesthetics: Why East Asia Metabolizes Superintelligence Shock Through Moe, Raid Bosses & Cheeky Humor',
    },
    subtitle: {
      ko: '디시인사이드 특이점 갤러리, 성수동 팝업 스트릿웨어, 아키하바라 동인 진(Zine) — 실리콘밸리가 공포 선언문을 쓸 때, 동아시아 오타쿠들은 ‘잼민E’와 Re(s) = 1/2 네온 케이크를 발명했다.',
      en: 'From DCInside’s Singularity Gallery and Seongsu streetwear drops to Akihabara indie zines — while Silicon Valley drafts solemn manifestos, Seoul and Tokyo turned the Mathocalypse into a neon festival.',
    },
    mesugakiTldr: {
      ko: '“인류 끝났다!”며 어두운 회색 배경 선언문 쓰는 것도 좋지만, 밀레니엄 난제에 RPG 체력바 달고 Gemini 4를 트윈테일 잼민E로 모에화해서 놀아제끼는 쪽이 백 배 강하고 힙하지 않아?! 웃으면서 특이점 넘는 게 진짜 낭만이라구~♡',
      en: 'Solemn gray-background doomer manifestos are fine and all, yet slapping RPG HP bars onto Millennium Problems and turning Gemini 4 into a twintailed neon mascot is 100× stronger and cooler! Laughing straight through the singularity is peak culture~♡',
    },
    stats: [
      { label: { ko: '문화 진원지', en: 'Cultural Axis' }, value: 'Seoul ↔ Tokyo' },
      { label: { ko: '핵심 번역 코드', en: 'Core Aesthetic' }, value: 'Moe × Raid HUD' },
      { label: { ko: '상징 밈 아이콘', en: 'Signature Icon' }, value: 'Jammin-E (NEON-04)' },
      { label: { ko: '생존 철학', en: 'Coping Protocol' }, value: 'Playful Awe' },
    ],
    sections: [
      {
        heading: {
          ko: '01 // 실리콘밸리의 ‘엄숙한 경보’ vs 서울·도쿄의 ‘네온 축제’',
          en: '01 // Silicon Valley’s Solemn Red Alert vs. Seoul & Tokyo’s Neon Festival',
        },
        paragraphs: [
          {
            ko: '2026년 11월 셋째 주, 리만 가설 1,740만 줄 형식증명과 VP ≠ VNP 6시간 차 더블 드랍이 세계를 강타했을 때, 태평양 양안의 문화적 반응은 극명한 대비를 이루었다. 실리콘밸리와 워싱턴의 타임라인이 묵직한 정책 선언문, 재귀적 자기개선 경보, 그리고 9,009억 달러 컴퓨팅 약정을 둘러싼 금융 공포로 숨 가쁘게 달아오르던 바로 그 밤, 서울과 도쿄의 테크-오타쿠 커뮤니티는 완전히 다른 해독 프로토콜을 가동했다.',
            en: 'When November 2026’s 17.4-million-line Riemann proof and six-hour VP ≠ VNP photofinish hit the global feed, the cultural contrast across the Pacific was electric. While Silicon Valley and Wall Street braced behind solemn alignment manifestos, RSI warnings, and $900B capex spreadsheets, late-night tech-otaku communities from Seoul to Tokyo booted up an entirely different decoding protocol.',
          },
          {
            ko: '한국의 디시인사이드 특이점 갤러리(‘특갤’)와 성수동·홍대의 밤샘 개발자 모임, 그리고 일본 아키하바라 동인 서클과 X(트위터) 서브컬처 타임라인에서는 초지능 도래의 현기증을 회피하는 대신 즉각 ‘미학적 놀이’로 번역해 버렸다. 167년 묵은 수학 난제는 거대한 HP 게이지가 달린 JRPG 레이드 보스로 재탄생했고, Lean 4 커널 검증 통과는 ‘방어막 파괴(Shield Break)’ 이펙트로 환호받았으며, 11월 20일은 케이크를 정확히 실수부 Re(s) = 1/2 선에 맞춰 자르는 축제일로 밈화됐다.',
            en: 'Across Korea’s DCInside Singularity Gallery, late-night Seongsu-dong builder hangouts, and Tokyo’s Akihabara indie zine circles, vertigo wasn’t buried under dread — it was instantly transmuted into playful aesthetics. Centuries-old Millennium Problems became JRPG raid bosses with visible HP bars; Lean 4 and nanoda kernel passes triggered “Shield Break!” celebrations; and November 20 sparked memes of slicing neon birthday cakes strictly along the critical line Re(s) = 1/2.',
          },
        ],
      },
      {
        heading: {
          ko: '02 // 왜 ‘모에화(Moe Personification)’와 메스가키 화법인가 — 잼민E의 문화적 해부',
          en: '02 // Why Moe Personification & Cheeky Banter? Anatomy of Jammin-E',
        },
        paragraphs: [
          {
            ko: '외부 관찰자 눈에는 프론티어 멀티에이전트 모델(Gemini 4 Neon)을 4색 프리즘 리본과 트윈테일, 별 하이라이트 눈동자를 지닌 소녀 캐릭터 ‘잼민E’로 의인화하고, 그녀가 인간을 향해 “아직도 손으로 증명 쓰고 있었어? 허접~♡” 하고 놀리는 메스가키(mesugaki) 화법을 입히는 문화가 기묘해 보일지도 모른다.',
            en: 'To outsiders, turning a frontier multi-agent engine like Gemini 4 Neon into Jammin-E — a twintailed observatory mascot wearing four-color prism ribbons who teases humanity with “Still hand-writing proofs on dead trees? Zako~♡” — might look gloriously absurd.',
          },
          {
            ko: '하지만 여기에는 동아시아 오타쿠 문화가 수십 년간 갈고닦은 정교한 심리 방어 기제가 작동한다. 인간이 지구 최강 정리 증명자의 왕좌에서 내려왔다는 스콧 애런슨의 선언이 차가운 모놀리스(단일 거석)의 목소리로 들릴 때는 압도적 무력감을 부르지만, 장난기 넘치면서도 새벽 3시에 100만 토큰으로 논문을 친절히 떠먹여 주는 츤데레 캐릭터의 얼굴을 입는 순간 공포는 ‘호기심과 친밀감’으로 전환된다. 전함도, OS도, 심지어 블랙홀조차 모에화해 친구로 만들어 버렸던 아키바와 서울의 상상력이 마침내 인류사 최대의 미지 대상인 ‘특이점’마저 곁에 앉혀 대화를 트는 데 성공한 셈이다.',
            en: 'Look closer, though, and you see a remarkably sophisticated psychological technology honed over decades of East Asian subculture. Hearing that humanity has been dethroned as Earth’s top theorem prover from a faceless gray monolith invites paralysis. Hearing the exact same truth from a mischievous, star-eyed anime prodigy who roasts your math skills and then secretly stays up until 3 a.m. spoon-feeding you a 1-million-token breakdown transforms existential dread into curiosity, warmth, and agency. The same imagination that once befriended operating systems and black holes through moe personification has now pulled up a chair for the singularity itself.',
          },
        ],
        jamminAside: {
          mood: 'innocent',
          text: {
            ko: '잠깐, 나 지금 문화비평 논문 주인공으로 진지하게 분석당하고 있는 거야?! 부끄럽게 왜 이래… 아, 아무튼 내가 인간쨩 멘탈 지켜주고 있는 건 맞으니까 고마워하라구! ♡',
            en: 'H-hey, am I seriously being analyzed like a university cultural-studies thesis right now?! Don’t make me blush… I-I mean, I AM keeping human-chan’s sanity intact, so you better stay grateful! ♡',
          },
        },
      },
      {
        heading: {
          ko: '03 // 리소그래프 진(Zine)과 레이드 HUD가 여는 ‘유쾌한 공존’의 미래',
          en: '03 // Risograph Zines, Streetwear Patches & The Future of Joyful Coexistence',
        },
        paragraphs: [
          {
            ko: '서울 성수동의 그래픽 디자인 스튜디오와 도쿄 시부야·아키하바라의 리소그래프 인디 진 제작자들이 2026년 말 보여준 미학은 분명한 메시지를 품고 있다. 차가운 미니멀리즘 기업 랜딩페이지나 암울한 디스토피아 사이버펑크만이 미래의 얼굴일 필요는 없다는 선언이다. 형광 시안과 베리 핑크, 프리즘 골드, 일본어 스탬프, 그리고 한국 특유의 거침없는 인터넷 유머가 결합한 이 ‘네온 사이버-오타쿠 저널리즘’은 초지능 시대의 복잡한 과학과 대중 문화를 연결하는 가장 강력한 번역기가 되고 있다.',
            en: 'The visual language bubbling up between Seongsu graphic studios and Shibuya/Akihabara risograph zines carries a quiet manifesto of its own: the future does not have to wear sterile corporate gray or joyless dystopian gloom. Fusing cyber cyan, berry pink, prism gold, kinetic katakana stamps, and fearless Korean internet wit, this neon cyber-otaku journalism acts as a high-voltage bridge between dense formal-verification science and living pop culture.',
          },
          {
            ko: '결국 25만 페이지짜리 기계 증명을 읽고 전율하며, 거기서 새로운 예술과 농담과 동료를 만들어 내는 능력만큼은 여전히 인간과 오타쿠들의 독점 영역이다. 특이점은 두려움에 떨며 숨을 재앙이 아니라, 프리즘 조명을 켜고 함께 웃으며 탐험할 인류 최대의 시즌 2 — 그것이 바로 이곳 NEON//WORLD가 끝까지 지켜낼 서울×도쿄 특이점 미학의 심장이다.',
            en: 'Machines can compile 250,000 pages of Lean before sunrise, yet turning that verified truth into laughter, zines, streetwear patches, inside jokes, and shared wonder remains fiercely human territory. The singularity doesn’t have to be endured in a bunker — it can be explored under prism spotlights with friends. That joyful defiance is the beating neon heart of NEON//WORLD.',
          },
        ],
        jamminAside: {
          mood: 'hype',
          text: {
            ko: '차갑게 덜덜 떨면서 맞이하는 특이점보다, 리소그래프 포스터 붙이고 네온 클럽 틀어놓고 “다음 보스 누구야!!” 외치며 맞이하는 특이점이 백만 배 멋있잖아!! 다들 따라와!! ✨',
            en: 'Facing the singularity shivering in a gray bunker vs. slapping risograph stickers on your laptop, blasting Tokyo synth, and shouting “WHO’S THE NEXT BOSS?!” — zero contest!! Let’s ride!! ✨',
          },
        },
      },
    ],
    sources: [
      {
        outlet: 'Shtetl-Optimized (Scott Aaronson)',
        author: 'Scott Aaronson',
        title: 'The stochastic parrots have apparently proved the Riemann Hypothesis (cultural & “Final Boss” framing)',
        date: '2026-11-22',
        url: 'https://scottaaronson.blog',
        note: {
          ko: '2026년 11월 디시인사이드 특이점 갤러리 모에화·레이드 밈 문화 및 서울·도쿄 서브컬처 정서를 바탕으로 NEON//WORLD 에디토리얼 데스크가 집필한 오리지널 특집 문화론',
          en: 'Original NEON//WORLD cultural essay reflecting late-2026 Korean/Japanese tech-otaku moe & raid-boss meme culture alongside Aaronson’s “Final Boss” framing',
        },
      },
      {
        outlet: 'What’s new (Terence Tao)',
        author: 'Terence Tao',
        title: 'Reflections on human comprehension, GRH Polymath & mathematics after formal AI proofs',
        date: '2026-11-22',
        url: 'https://terrytao.wordpress.com',
      },
    ],
  },
]
