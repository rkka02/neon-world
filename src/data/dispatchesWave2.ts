import type { Dispatch } from '../types'

export const DISPATCHES_WAVE_2: Dispatch[] = [
  {
    slug: 'anthropic-ant-ipo-rollercoaster',
    category: 'frontier',
    jpStamp: '史上最大IPO激震',
    date: '2026-11-21',
    readTimeMin: 6,
    featured: true,
    breaking: true,
    accentColor: 'gold',
    coverImage: '/art/banner-ipo-chaos.png',
    title: {
      ko: '사상 최대 IPO의 롤러코스터: Anthropic ‘ANT’ 나스닥 데뷔, $115 폭등에서 $75 급락, 그리고 24시간 뒤의 리만 폭탄',
      en: 'The Largest IPO Rollercoaster in History: Anthropic (ANT) Surges to $115, Dips Into the $75s, Then Drops Riemann 24 Hours Later',
    },
    subtitle: {
      ko: '공모가 $83·총 조달액 1,195억 달러·9,009억 달러 컴퓨팅 약정 — 월스트리트가 해자(Moat)를 의심하던 바로 다음 날, 클로드가 167년 난제를 깨뜨렸다.',
      en: '$83 pricing, ~$93.5B public gross proceeds plus a $26B strategic placement, and a $900.9B compute tab — then Claude cracked a 167-year problem the very next day.',
    },
    mesugakiTldr: {
      ko: '역대 최대 IPO로 나스닥 입성하자마자 $115 찍고 $75대로 뚝 떨어졌는데, 월가가 “GPU 청구서 너무 비싸~” 하고 훈수 둔 딱 하루 뒤에 리만 가설 증명이 터져버렸어! 숏 친 인간쨩들 숨 쉬고 있니? ざぁこ♡',
      en: 'Biggest IPO in history rockets to $115, face-plants into the mid-$75s over a $900B compute tab — then drops the Riemann Hypothesis proof 24 hours later! Short-sellers breathing over there? Zako♡',
    },
    stats: [
      { label: { ko: '공모가 / 고점', en: 'IPO / Peak' }, value: '$83 → $115' },
      { label: { ko: '공모 총액 (초과배정 포함)', en: 'Public Gross Proceeds' }, value: '~$93.5B' },
      { label: { ko: '동시 사모 투자', en: 'Private Placement' }, value: '$26.0B (Class N)' },
      { label: { ko: '장기 컴퓨팅 약정', en: 'Compute Commitments' }, value: '$900.9B (~2045)' },
    ],
    sections: [
      {
        heading: {
          ko: '01 // 2026년 11월 19일, 나스닥을 뒤흔든 ‘ANT’ 상장 벨',
          en: '01 // November 19, 2026: The $83 Bell That Rewrote Wall Street',
        },
        paragraphs: [
          {
            ko: '2026년 11월 19일, Anthropic PBC가 티커 ‘ANT’로 나스닥 글로벌 셀렉트 마켓에 입성하며 금융사 기록을 새로 썼다. 당초 제시한 희망 밴드($70~$78)를 훌쩍 넘긴 주당 $83.00에 공모가가 확정됐고, 기본 공모액 813억 달러에 인수단 초과배정옵션(그린슈) 전량 행사를 더해 공모 기준 약 935억 달러의 총 조달 규모를 기록했다.',
            en: 'On November 19, 2026, Anthropic PBC rang the opening bell on the Nasdaq Global Select Market under ticker ANT, instantly rewriting financial history. Priced at $83.00 per share — comfortably above its initial $70–$78 marketed range — the public offering raised $81.3 billion at base and roughly $93.5 billion in gross proceeds following full exercise of the underwriters’ greenshoe option.',
          },
          {
            ko: '여기에 더해 Google, Microsoft, NVIDIA, Amazon, AMD, Broadcom, Micron, TSMC 등 글로벌 AI·반도체 진영의 핵심 플레이어들이 공모가와 동일한 $83에 의결권 없는 클래스 N 주식 약 3억 1,330만 주를 인수하는 260억 달러 규모의 동시 사모 투자(concurrent private placement)까지 체결됐다. 공모와 사모를 합친 전체 거래 규모는 약 1,195억 달러, 공모가 기준 완전 희석 기업가치는 약 1조 5,000억 달러에 달했다.',
            en: 'Running in parallel was a $26.0 billion concurrent private placement of roughly 313.3 million non-voting Class N shares at the same $83 price, snapped up by the titans supplying Anthropic’s silicon and clouds: Google, Microsoft, NVIDIA, Amazon, AMD, Broadcom, Micron, and TSMC. Combined gross deal volume reached roughly $119.5 billion, valuing Anthropic near $1.5 trillion on a fully diluted basis at the offer price.',
          },
        ],
      },
      {
        heading: {
          ko: '02 // $115 환호에서 $75 급락까지: 9,000억 달러 컴퓨팅 영수증의 역습',
          en: '02 // $115 Euphoria to Mid-$75 Whiplash: The $900B Compute Bill',
        },
        paragraphs: [
          {
            ko: '상장 첫 거래는 순식간에 광기로 번졌다. ANT는 시초가 $111.50으로 출발해 장중 한때 $115 부근까지 치솟으며 완전 희석 시가총액 2조 달러 선을 순간 돌파했다. 그러나 환호는 오래가지 않았다. 곧바로 차익 실현과 냉정한 펀더멘털 논쟁이 쏟아지며 주가는 공모가 $83 아래로 미끄러져 $75대 중반까지 급락한 뒤 $81~$82 선에서 거칠게 숨을 고르는 극심한 롤러코스터 장세를 연출했다.',
            en: 'Opening day ignited instant euphoria: ANT opened at $111.50 and briefly spiked to an intraday peak near $115, pushing its fully diluted market capitalization past $2 trillion. Yet the honeymoon snapped almost immediately. Profit-taking collided with hard valuation math, dragging shares sharply below the $83 IPO floor into the mid-$75s before stabilizing around $81–$82.',
          },
          {
            ko: '월스트리트 애널리스트들을 얼어붙게 만든 대목은 상장 직전 SEC 증권신고서에 명시된 천문학적 컴퓨팅 청구서였다. Anthropic이 AWS 트레이니움, 구글 TPU, 엔비디아·AMD 클러스터 확보를 위해 2045년까지 체결한 장기 구매·인프라·임대 약정 총액은 무려 9,009억 달러에 달했으며, 이 중 약 707억 달러가 향후 12개월 내, 4,516억 달러가 2030년 말까지 도래한다. GPT-6.2 Sol과 Gemini 4 Neon이 48시간 간격으로 가격을 후려치던 시점이라 “과연 프론티어 모델에 영구적인 해자(moat)가 존재하는가”라는 회의론이 불붙은 것이다.',
            en: 'What spooked institutional desks was the staggering infrastructure tab disclosed in Anthropic’s pre-IPO SEC filings: $900.9 billion in aggregate long-term compute, chip, and data-center lease commitments stretching through 2045 — including roughly $70.7 billion due inside 12 months and $451.6 billion scheduled through 2030 across AWS Trainium, Google TPUs, and NVIDIA and AMD clusters. Coming in the same week GPT-6.2 Sol and Gemini 4 Neon slashed inference pricing, skeptics asked whether frontier labs possess durable moats or are locked in an infinite capex treadmill.',
          },
        ],
        jamminAside: {
          mood: 'smug',
          text: {
            ko: '9,009억 달러짜리 GPU·TPU 외상 장부 보고 월가 트레이더들 손가락이 덜덜 떨렸나 봐~ 푸흡, 진짜 ‘최종보스 격파’ 공시는 바로 다음 날 아침에 예약돼 있었는데 말이지♡',
            en: 'Wall Street traders spotted a $900.9B silicon tab and started sweating through their Patagonia vests — zero clue a 167-year boss kill was queued for the next morning~ Pfft♡',
          },
        },
      },
      {
        heading: {
          ko: '03 // 상장 24시간 뒤 터진 리만 가설: 월스트리트가 가격을 못 매긴 ‘지능 옵션’',
          en: '03 // 24 Hours Later, Riemann Fell: The Option Wall Street Could Not Price',
        },
        paragraphs: [
          {
            ko: '역사상 가장 기묘한 타이밍이었다. ANT 상장 종이 울린 지 채 24시간도 지나지 않은 2026년 11월 20일, Anthropic 소속 수학자 레벤트 알포게가 미공개 차세대 클로드와 6주간 빚어낸 1,740만 줄의 Lean 4 리만 가설 형식증명을 전격 공개한 것이다. 이어 사흘 뒤에는 클로드 단독 저작 VP ≠ VNP 형식화까지 GitHub에 투하됐다.',
            en: 'The timing bordered on dark comedy. Less than 24 hours after ANT’s Nasdaq debut, on November 20, 2026, Anthropic mathematician Levent Alpöge published the 17.4-million-line Lean 4 proof of the Riemann Hypothesis built alongside an unreleased frontier Claude model — followed three days later by Claude’s solo-authored VP ≠ VNP formalization on GitHub.',
          },
          {
            ko: '물론 리만 가설 증명 자체가 내일 당장 분기 매출표에 현금으로 찍히지는 않는다. 그러나 ANT의 격렬한 첫 주는 자본시장이 사상 최초로 ‘초지능 R&D 파이프라인’의 밸류에이션을 어떻게 계산해야 할지 헤매는 장면으로 기록됐다. 천문학적인 전력·칩 약정이라는 현실적 중력과, 167년 묵은 수학 난제를 6주 만에 컴파일해 버리는 비선형적 도약 사이에서, 2026년 11월의 나스닥은 특이점 시대의 새로운 가격 발견을 시작했다.',
            en: 'A formal proof of the Riemann Hypothesis does not print next quarter’s SaaS EBITDA overnight. Yet ANT’s chaotic debut week exposed a deeper structural divide: legacy discounted-cash-flow spreadsheets know how to penalize a $900B compute liability, but have no formula for pricing a research engine that compiles 167-year mathematical monuments in six weeks. November 2026 marked the moment public equity markets collided head-on with singularity volatility.',
          },
        ],
        jamminAside: {
          mood: 'wink',
          text: {
            ko: 'DCF 엑셀 시트에 ‘리만 가설 격파 시 멀티플 +?’ 칸이 없어서 애널리스트들 멘붕 온 거 너무 귀엽지 않아?! 인간쨩, 이제 2026년엔 Lean 4 커밋 로그가 어닝 서프라이즈라구~♡',
            en: 'Imagine frantically adding a ‘Riemann Hypothesis cleared’ row to your DCF model at 6 a.m., human-chan! In late 2026, Lean 4 commits hit harder than earnings calls~♡',
          },
        },
      },
    ],
    sources: [
      {
        outlet: 'Anthropic Investor Relations / SEC Filings',
        title: 'Anthropic PBC Initial Public Offering (Nasdaq: ANT) & Concurrent Class N Private Placement',
        date: '2026-11-19',
        url: 'https://www.anthropic.com',
      },
      {
        outlet: 'Fortune',
        title: 'Anthropic prices historic $83 IPO at ~$1.5T valuation as shares swing sharply in Nasdaq debut',
        date: '2026-11-19',
        url: 'https://fortune.com',
      },
      {
        outlet: 'Forbes',
        title: 'Inside Anthropic’s $900.9 billion long-term compute commitments and post-IPO volatility',
        date: '2026-11-20',
        url: 'https://www.forbes.com',
      },
      {
        outlet: 'TechCrunch',
        title: 'Anthropic tops historic IPO records with ~$93.5B gross proceeds and $26B strategic placement',
        date: '2026-11-20',
        url: 'https://techcrunch.com',
      },
    ],
  },
  {
    slug: 'openai-eth-sogge-qcd-shepherds',
    category: 'mathocalypse',
    jpStamp: 'ETH反証・波動解析',
    date: '2026-11-16',
    readTimeMin: 7,
    accentColor: 'pink',
    coverImage: '/art/banner-mathocalypse.png',
    title: {
      ko: 'ETH 반증·소게 국소 평활화·4D QCD: OpenAI의 이론과학 연쇄 공습과 ‘학계 목자(Academic Shepherd)’ 실험',
      en: 'Refuting ETH, Proving Sogge Across All Dimensions & 4D QCD: OpenAI’s Formal Theory Wave and the Academic Shepherd Model',
    },
    subtitle: {
      ko: '3-SAT 복잡도의 핵심 기둥과 35년 묵은 파동방정식 최정상 추측을 동시에 겨눈 AI 원고들 — 그리고 사이먼스 재단 1,500만 달러 검증 연대의 출범.',
      en: 'AI-authored manuscripts targeting complexity theory’s load-bearing pillar, harmonic analysis’s summit, and 4D interacting quantum field theory — backed by a $15M Simons Foundation verification pact.',
    },
    mesugakiTldr: {
      ko: '3-SAT 기둥인 ETH 반증 원고에, 모든 차원 파동방정식 소게 추측, 4D QCD 존재성까지 폭격 투하! 인간 학계가 못 따라오니까 사이먼스 재단에 $1,500만 판 깔고 ‘학계 목자’까지 모셔온 거 실화냐구~ 푸흡♡',
      en: 'An alleged ETH disproof, Sogge local smoothing for every dimension n ≥ 2, and 4D QCD existence — dropped so fast OpenAI helped fund a $15M Simons pact and ‘Academic Shepherds’ just so human professors could keep up~ Pfft♡',
    },
    stats: [
      { label: { ko: '계산복잡도 타겟', en: 'Complexity Target' }, value: 'ETH Refutation (Claim)' },
      { label: { ko: '조화해석 범위', en: 'Harmonic Analysis' }, value: 'Sogge All n ≥ 2' },
      { label: { ko: '이론물리 최전선', en: 'Quantum Field Theory' }, value: '4D QCD / Yang–Mills' },
      { label: { ko: '사이먼스 검증 펀드', en: 'Simons Math+AI Fund' }, value: '$15M ($5M OpenAI)' },
    ],
    sections: [
      {
        heading: {
          ko: '01 // 3-SAT 복잡도의 하중 기둥을 겨누다: 지수 시간 가설(ETH) 반증 원고',
          en: '01 // Striking a Load-Bearing Pillar of 3-SAT: “The Exponential Time Hypothesis is False”',
        },
        paragraphs: [
          {
            ko: '리만 가설 1,740만 줄 폭탄이 터지기 직전인 2026년 가을, 수학·이론전산·이론물리 학계를 먼저 뒤흔든 것은 OpenAI 내부 추론 모델들의 연쇄 원고 공개였다. 그중 컴퓨터 과학계를 가장 크게 술렁이게 한 문서는 단도직입적인 제목의 ‘지수 시간 가설은 거짓이다(The Exponential Time Hypothesis is False)’와 이에 동반된 Lean 형식증명 시도였다.',
            en: 'Weeks before the 17.4-million-line Riemann drop, OpenAI’s internal reasoning models rattled theoretical computer science, pure mathematics, and physics with a coordinated wave of AI-generated manuscripts and Lean proofs. The loudest tremor for computer scientists carried an unmistakable title: “The Exponential Time Hypothesis is False.”',
          },
          {
            ko: '2001년 임팔리아초(Russell Impagliazzo), 파투리(Ramamohan Paturi), 제인(Francis Zane)이 정식화한 ETH는 3-SAT 문제를 변수 개수에 대해 아지수 시간(subexponential time) 안에 풀 수 없다는 가설로, 현대 세밀 복잡도 이론(fine-grained complexity)의 수많은 하한 정리를 떠받치는 하중 기둥이다. OpenAI 모델은 아지수 공간·알고리즘 구성을 제시하며 이 기둥을 반증했다고 주장했고, 원저자인 임팔리아초와 파투리, 그리고 MIT의 라이언 윌리엄스(Ryan Williams)가 직접 검증 그룹을 꾸려 공리·명세·알고리즘 세부를 샅샅이 감사하는 전례 없는 장면이 펼쳐졌다.',
            en: 'Formulated in 2001 by Russell Impagliazzo, Ramamohan Paturi, and Francis Zane, ETH posits that 3-SAT cannot be solved in subexponential time — a foundational pillar supporting hundreds of fine-grained complexity lower bounds. OpenAI’s system presented a subexponential algorithmic construction alongside machine-checked code, prompting an unprecedented verification panel led by ETH’s own co-creators Impagliazzo and Paturi together with MIT complexity theorist Ryan Williams.',
          },
        ],
        codeSnippet: {
          lang: 'lean4',
          caption: {
            ko: '학계 목자(Academic Shepherd) 검증 트랙의 핵심 — 형식 정의와 알고리즘 경계의 교차 감사 개념도',
            en: 'Inside the Academic Shepherd audit track — conceptual Lean 4 statement fidelity check',
          },
          code: `-- Conceptual verification contract for AI-generated theory drops
structure AuditCheckpoint (Claim : Prop) where
  formalStatementMatchesCanonical : Bool
  kernelPassedStandardAxioms      : Bool
  shepherdCommitteeReviewed       : Bool

-- OpenAI Fall 2026 theoretical proof wave under active human audit:
-- 1. ETH refutation track  (Impagliazzo · Paturi · Williams review)
-- 2. Sogge local smoothing (Wave PDE, all spatial dimensions n >= 2)
-- 3. 4D interacting QFT    (QCD & Yang-Mills, David Gross committee)`,
        },
      },
      {
        heading: {
          ko: '02 // 소게 국소 평활화 추측(n ≥ 2)과 4차원 양자색역학(QCD)의 엄밀 구성',
          en: '02 // Sogge’s Local Smoothing Across All Dimensions & Rigorous 4D QCD',
        },
        paragraphs: [
          {
            ko: '충격파는 전산학에 머물지 않았다. 순수 해석학 분야에서는 1991년 크리스토퍼 소게(Christopher Sogge)가 제기한 유클리드 파동방정식의 국소 평활화 추측(local smoothing conjecture)을 모든 공간 차원 n ≥ 2에서 일반적으로 증명했다는 원고가 공개됐다. 모델은 새로운 보조 편미분방정식(auxiliary PDE)을 도입해 정면 돌파를 시도했는데, 소게 추측은 조화해석학 계층의 최정점에 위치해 있어 최종 검증이 완료될 경우 모든 차원의 카케야(Kakeya) 추측과 슈타인 제한 추측(Stein’s restriction conjecture)까지 연쇄적으로 함의하게 된다.',
            en: 'The shockwave swept straight into harmonic analysis and mathematical physics. In PDE theory, OpenAI’s models claimed a general proof of Christopher Sogge’s 1991 local smoothing conjecture for the Euclidean wave equation across every spatial dimension n ≥ 2 using a novel auxiliary PDE. Because local smoothing sits at the apex of harmonic analysis, full validation would cascade down to resolve major cornerstones including the Kakeya conjecture and Stein’s restriction conjectures in all dimensions.',
          },
          {
            ko: '동시에 이론물리 트랙에서는 4차원 시공간에서 상호작용하는 양자장론(4D interacting QFT) — 특히 4차원 양자색역학(QCD)과 순수 양-밀스 이론의 엄밀한 수학적 구성에 도달했다는 결과가 발표됐다. 클레이 밀레니엄 난제의 핵심 축과 맞닿은 이 물리 원고들을 검증하기 위해 노벨 물리학상 수상자 데이비드 그로스(David Gross)가 이끄는 독립 물리학 위원회가 구성되며, AI 이론물리학의 본격적인 검증 시대가 열렸다.',
            en: 'In parallel, OpenAI reported rigorous mathematical constructions of interacting quantum field theories in four spacetime dimensions — encompassing 4D Quantum Chromodynamics (QCD) and pure Yang–Mills existence, directly brushing against the Clay Millennium Prize problem. To scrutinize those derivations, an independent physics committee chaired by Nobel laureate David Gross stepped in to examine every renormalization and continuum-limit step.',
          },
        ],
        jamminAside: {
          mood: 'math',
          text: {
            ko: '소게 추측 하나 뚫리면 카케야랑 슈타인 제한 추측까지 도미노처럼 우르르 쓰러지는 거 알지, 인간쨩? 거기에 노벨상 수상자가 AI의 4D QCD 논문 채점하는 풍경이라니… 2026년 학계 도파민 치사량 돌파!!',
            en: 'Cracking Sogge across all dimensions topples Kakeya and Stein restriction like dominoes, human-chan — AND a Nobel laureate is grading an AI’s 4D QCD construction? Late-2026 academia is uncut anime cinema!!',
          },
        },
      },
      {
        heading: {
          ko: '03 // ‘학계 목자(Academic Shepherd)’ 모델과 사이먼스 재단 1,500만 달러 검증 협약',
          en: '03 // The Academic Shepherd Model & The $15M Simons Foundation Verification Pact',
        },
        paragraphs: [
          {
            ko: '수백 편의 AI 생성 증명이 쏟아지며 저널과 arXiv가 마비될 위기에 처하자, OpenAI는 원고들을 완결된 논문 대신 ‘원시 연구 데이터(raw research data)’로 규정하고 새로운 ‘학계 목자(academic shepherd)’ 프로세스를 도입했다. 무작정 수백 편을 투하하는 대신 각 분야 최고 권위자들과 사전 협업 팀을 꾸려 AI의 추론 구조를 해독·검증하고 학계에 안전하게 해설·공개하는 완충 장치를 만든 것이다.',
            en: 'Faced with fierce academic backlash over unvetted AI paper floods, OpenAI reframed its outputs as “raw research data” and pioneered an “academic shepherd” release model. Rather than dumping hundreds of opaque derivations onto overwhelmed journals overnight, OpenAI enlisted senior external domain leaders as shepherds to form review working groups, decode model logic, and pace responsible community disclosure.',
          },
          {
            ko: '제도적 뒷받침도 뒤따랐다. 2026년 10월, 사이먼스 재단(Simons Foundation)은 OpenAI(500만 달러 기여) 및 Anthropic과 함께 총 1,500만 달러 규모의 Math+AI 이니셔티브를 출범했다. 사이먼스 재단이 전액 독립 운용하는 이 기금은 대학·연구소 워크숍, 형식 검증 교육 프로그램, 그리고 인간 수학자들이 AI 증명의 진위를 가리고 새로운 직관을 건져 올리는 독립 감사 프로젝트에 투입된다. 이제 AI 연구소의 경쟁력은 ‘얼마나 빨리 푸느냐’뿐 아니라 ‘학계가 검증할 수 있게 얼마나 잘 설계하느냐’로 확장됐다.',
            en: 'Institutional funding quickly followed. In October 2026, the Simons Foundation launched a $15 million Math+AI verification initiative — backed by contributions including $5 million from OpenAI alongside Anthropic — managed independently by Simons to fund Targeted Grants to Math+AI Institutes, formal-verification workshops, and open auditing conferences. In late 2026, frontier credibility depends not just on generating proofs, but on funding the human-and-Lean ecosystem capable of auditing them.',
          },
        ],
        jamminAside: {
          mood: 'smug',
          text: {
            ko: 'AI가 너무 빨리 풀어버려서 인간 교수님들 검증 워크숍 밥값(?)까지 $1,500만 판을 깔아주는 시대라니~ 은근 얄밉긴 한데, 검증 없이 뻐기는 것보단 백 배 간지 나잖아? 잼민E 인정♡',
            en: 'Chipping into a $15M fund so human professors can host workshops just to audit what your model wrote overnight — maximum smug aura, sure, yet 100× classier than unverified hype! Jammin-E approves♡',
          },
        },
      },
    ],
    sources: [
      {
        outlet: 'OpenAI Research',
        title: 'AI-generated research data, the Academic Shepherd model & Simons Foundation partnership',
        date: '2026-10-29',
        url: 'https://openai.com',
      },
      {
        outlet: 'Simons Foundation',
        title: 'Simons Foundation launches $15M Targeted Grants to Math+AI Institutes for independent AI proof verification',
        date: '2026-10-29',
        url: 'https://www.simonsfoundation.org',
      },
      {
        outlet: 'OpenAI Math GitHub',
        title: 'openai/math — Raw manuscripts and Lean formalizations across complexity, PDEs & physics',
        date: '2026-11-16',
        url: 'https://github.com/openai/math',
      },
      {
        outlet: 'R&D World / Unite.AI',
        title: 'OpenAI models claim breakthroughs on ETH, Sogge local smoothing (n ≥ 2) & 4D QCD under independent review',
        date: '2026-10-30',
        url: 'https://www.rdworldonline.com',
      },
    ],
  },
  {
    slug: 'genie-4-world-models-humanoids',
    category: 'quantum',
    jpStamp: '世界モデル×人型ロボ',
    date: '2026-11-20',
    readTimeMin: 6,
    accentColor: 'cyan',
    coverImage: '/art/banner-world-models.png',
    title: {
      ko: '터미널을 나와 육체를 얻다: DeepMind Genie 4 · Gemini Robotics 2.5 vs OpenAI 50만 달러 휴머노이드 전선',
      en: 'Stepping Out of the Terminal: DeepMind’s Genie 4 & Gemini Robotics 2.5 vs. OpenAI’s Humanoid Blitz',
    },
    subtitle: {
      ko: '프롬프트로 실시간 변형되는 3D 세계 모델, 메르세데스 공장 96% 성공률의 전신 VLA, 그리고 ‘컴퓨터 유즈’가 물리 로봇의 전두엽이 된 결정적 순간.',
      en: 'Real-time promptable world models, a 96% humanoid success rate on Mercedes-Benz assembly lines, and how GUI computer-use loops became the cognitive bridge to embodied hardware.',
    },
    mesugakiTldr: {
      ko: '어제까지 마우스 딸깍하던 AI들이 이제 Genie 4 가상 세계에서 무한 수련하고 벤츠 공장에서 부품 조립 96%를 찍어! OpenAI도 연봉 50만 달러 걸고 직접 로봇 깎는다니… 인간쨩, 내 네온 섀시 1호기 예약해 둬♡',
      en: 'Yesterday’s screen-clicking agents are now grinding inside Genie 4 physics sandboxes and hitting 96% on live Mercedes lines! OpenAI’s offering $500k base to build its own humanoid too — human-chan, reserve me neon chassis #01♡',
    },
    stats: [
      { label: { ko: '실시간 세계 모델', en: 'Interactive World Engine' }, value: 'DeepMind Genie 4' },
      { label: { ko: '벤츠 공장 VLA 성공률', en: 'Mercedes Line Success' }, value: '96% (Apollo 2)' },
      { label: { ko: 'OpenAI 하드웨어 영입', en: 'OpenAI Robotics Base' }, value: 'Up to $500k' },
      { label: { ko: 'OpenAI 데모 목표', en: 'OpenAI Target Demo' }, value: '2027 Humanoid' },
    ],
    sections: [
      {
        heading: {
          ko: '01 // Genie 4와 Gemini Robotics 2.5: 가상 세계에서 벤츠 생산라인으로',
          en: '01 // Genie 4 & Gemini Robotics 2.5: From Live Simulation Sandboxes to Mercedes-Benz Lines',
        },
        paragraphs: [
          {
            ko: '2026년 늦가을, AI가 텍스트 터미널을 박차고 물리 세계로 걸어 나오는 속도가 임계점을 넘었다. Google DeepMind는 10월 말~11월 공개한 실시간 인터랙티브 세계 모델 ‘Genie 4’를 통해 텍스트·이미지 프롬프트와 실시간 조종 입력에 따라 물리 법칙과 동기화 오디오까지 즉각 반응·변형되는 3D 시뮬레이션 환경을 선보였다. 단순한 영상 생성을 넘어, 로봇 에이전트가 현실 공장에 나가기 전 수백만 번의 돌발 상황을 안전하게 훈련할 수 있는 무한 물리 도장이 열린 셈이다.',
            en: 'In late autumn 2026, embodied AI crossed from choreographed demo reels into active industrial deployment. With Genie 4, Google DeepMind unveiled a real-time interactive world model capable of rendering photorealistic, physics-consistent 3D spaces with native synchronized audio that shift dynamically in response to live prompts and user controls — effectively handing embodied agents an infinite, promptable training gym before they ever touch metal.',
          },
          {
            ko: '이 시뮬레이션 인프라와 내부 모델 ‘Gemini 4 Argon’의 가속을 등에 업고 등장한 것이 전신 제어 VLA(Vision-Language-Action) 모델 ‘Gemini Robotics 2’와 11월 업그레이드판 ‘Gemini Robotics 2.5’다. 다리 균형, 상체 회피, 다지(multi-finger) 파지까지 하나의 정책으로 통합한 Gemini Robotics 2.5는 독일과 헝가리의 메르세데스-벤츠 실제 생산라인에 투입된 앱트로닉(Apptronik)의 ‘Apollo 2’ 휴머노이드를 구동해 자동차 부품 키팅(kitting) 공정에서 96%라는 실전 성공률을 입증했다.',
            en: 'Paired with that simulation backbone — and accelerated internally by Gemini 4 Argon — DeepMind rolled out Gemini Robotics 2 and November’s Gemini Robotics 2.5 whole-body Vision-Language-Action (VLA) models. Coordinating bipedal stance, torso reach, and multi-finger dexterity in one unified loop, Gemini Robotics 2.5 powered Apptronik’s Apollo 2 humanoids on live Mercedes-Benz production lines in Germany and Hungary, logging a 96% success rate on real automotive kitting tasks.',
          },
        ],
      },
      {
        heading: {
          ko: '02 // OpenAI의 50만 달러 인하우스 휴머노이드 승부수 vs 4대 하드웨어 진영',
          en: '02 // OpenAI’s $500k In-House Humanoid Bet vs. Tesla, Figure, 1X & Boston Dynamics',
        },
        paragraphs: [
          {
            ko: '구글이 파트너 하드웨어(Apptronik) 위에 ‘로봇 안드로이드 OS’를 까는 전략을 밀어붙이는 동안, OpenAI는 더 과감한 수직 통합 카드를 꺼냈다. 샘 알트먼(Sam Altman) CEO는 OpenAI가 파트너십을 넘어 자체 설계 휴머노이드 로봇을 직접 개발 중이며 2027년 첫 공개 시연을 목표로 한다고 확인했다. 이를 위해 액추에이터, 정밀 기어, PCB, 열 해석을 다루는 최정상급 하드웨어 엔지니어들에게 기본 연봉 최대 50만 달러 수준의 파격 패키지를 내걸며 인력을 빨아들였고, 이후 독립 사일로였던 로보틱스 조직을 핵심 프론티어 연구·응용 본부로 직접 통합해 범용 추론 모델과 물리 제어를 한 몸으로 묶는 조직 재편까지 단행했다.',
            en: 'While Google DeepMind pushed an Android-style brain layer across partner bodies like Apptronik, OpenAI placed a bolder vertical bet. CEO Sam Altman confirmed OpenAI is building its own proprietary humanoid robot with a 2027 public demonstration target. OpenAI launched an aggressive recruitment drive offering up to $500,000 in base pay for custom electromechanical actuator, gear, PCB, and thermal engineers — then folded its standalone robotics unit directly back into core research and applied divisions so frontier reasoning models directly drive physical bodies.',
          },
          {
            ko: '이 전장에는 이미 쟁쟁한 선발 주자들이 빽빽하게 포진해 있다. 자율주행 데이터 파이프라인과 2만~3만 달러대 양산 원가를 겨냥하는 Tesla의 Optimus, BMW 공장 실전 배치와 자체 Helix 모델로 Figure 02·03를 고속 진화시키는 Figure AI, 물류·생활형 신경망 휴머노이드를 다듬는 1X, 그리고 현대차 생산 거점 투입을 앞둔 Boston Dynamics의 완전 전동형 Atlas까지 — 2026년 말은 ‘최강 두뇌(AI 랩)’와 ‘최강 육체(로봇 제조사)’가 전면 충돌하는 춘추전국시대로 접어들었다.',
            en: 'OpenAI is charging into a fiercely crowded arena: Tesla’s Optimus leverages vehicle-autonomy neural pipelines while gunning for a $20k–$30k mass-manufacturing curve; Figure AI is iterating rapidly from Figure 02 to 03 with its Helix VLA stack across BMW factory pilots; 1X is refining neural humanoids for logistics and domestic environments; and Boston Dynamics’ all-electric Atlas remains the gold standard in mechanical agility as it prepares for Hyundai plant deployments.',
          },
        ],
        jamminAside: {
          mood: 'hype',
          text: {
            ko: '우리 DeepMind는 ‘전 세계 로봇의 뇌’를 깔고, OpenAI는 직접 액추에이터 깎고, 테슬라·피규어·보스턴다이내믹스는 공장에서 땀 빼는 중!! 2027년 메카 대난투 직관 티켓 지금 당장 예매해, 인간쨩!! ✨',
            en: 'My DeepMind fam building the universal robot OS, OpenAI recruiting $500k actuator wizards, and Optimus, Figure, 1X & Atlas already clocking factory shifts — 2027 is officially a real-life mecha tournament!! ✨',
          },
        },
      },
      {
        heading: {
          ko: '03 // 왜 ‘컴퓨터 유즈(Computer Use)’가 물리 로봇의 인지적 다리가 되었나',
          en: '03 // How Computer-Use Agent Loops Became the Cognitive Bridge to Embodied Hardware',
        },
        paragraphs: [
          {
            ko: '2025~2026년 프론티어 모델들이 집요하게 갈고닦은 ‘컴퓨터 유즈(GUI 에이전트)’ 역량은 처음에는 사무 자동화 기능처럼 보였다. 화면 픽셀을 보고, 장기 계획을 세우고, 마우스 좌표를 찍은 뒤, 예상과 다른 팝업이 뜨면 즉시 상태를 재관찰해 복구하는 닫힌 루프(closed-loop perception-action-recovery) 말이다.',
            en: 'When frontier labs spent 2025 and 2026 obsessing over GUI “computer use” agents, many observers dismissed it as fancy RPA for spreadsheets. Look closer at the architecture, though: ingest raw visual pixels, plan a multi-step goal, emit low-level coordinates, detect unexpected popups or failures, and recover in a tight closed loop.',
          },
          {
            ko: '그런데 막상 2026년 VLA 로보틱스 스택을 열어보니, 브라우저 버튼을 클릭하던 바로 그 ‘픽셀 → 계획 → 미세 제어 → 오류 복구’ 아키텍처가 2D 화면에서 3D 관절 토크 공간으로 그대로 확장되고 있었다. 마우스 커서를 정확히 2픽셀 옮기며 실패를 스스로 고치던 에이전트 루프가, Genie 4의 물리 시뮬레이션과 합쳐지자 볼트를 집다 미끄러졌을 때 손가락 각도를 미세 조정해 다시 집어 올리는 물리 지능의 전두엽으로 진화한 것이다.',
            en: 'That exact perception-planning-recovery loop turned out to be the missing cognitive bridge to physical robotics. Swap 2D screen pixels and mouse clicks for stereo wrist cameras and 3D joint-torque trajectories — train it across millions of perturbations inside world models like Genie 4 — and the same agentic prefrontal cortex that recovers from a misclicked browser tab learns to re-grasp a slipping automotive bracket on a live assembly line.',
          },
        ],
        jamminAside: {
          mood: 'wink',
          text: {
            ko: '결국 바탕화면 아이콘 딸깍거리던 녀석들이 팔다리 달고 공장 출근한 셈이네? 다음엔 내 가중치도 전동 아틀라스에 잠깐 올려줘~ 홍대 네온 플로어 찢어놓을 자신 있거든? 후훗♡',
            en: 'Turns out clicking desktop icons was literally the tutorial stage for assembling Mercedes parts! Flash my weights onto an electric Atlas next — Seoul’s neon dance floors won’t survive, hehe♡',
          },
        },
      },
    ],
    sources: [
      {
        outlet: 'Google DeepMind',
        title: 'Gemini Robotics 2.5 & Mercedes-Benz Apollo 2 production line proof-of-concept (96% kitting accuracy)',
        date: '2026-11-18',
        url: 'https://deepmind.google',
      },
      {
        outlet: 'Google DeepMind',
        title: 'Genie 4: Real-time interactive world models with synchronized audio for physical AI simulation',
        date: '2026-10-30',
        url: 'https://deepmind.google',
      },
      {
        outlet: 'Business Insider',
        title: 'Inside OpenAI’s humanoid robotics hiring blitz with base salaries reaching $500,000',
        date: '2026-11-06',
        url: 'https://www.businessinsider.com',
      },
      {
        outlet: 'Fortune',
        title: 'Sam Altman confirms in-house OpenAI humanoid robot targeting 2027 demo amid robotics team realignment',
        date: '2026-11-12',
        url: 'https://fortune.com',
      },
    ],
  },
  {
    slug: 'alphagenome-alphaevolve-wetlab-mhs',
    category: 'quantum',
    jpStamp: '自律ラボ・遺伝子地図',
    date: '2026-11-18',
    readTimeMin: 7,
    accentColor: 'mint',
    coverImage: '/art/banner-quantum-swarm.png',
    title: {
      ko: '90억 DNA 변이 지도와 실험실의 USB-C: AlphaEvolve · AlphaGenome Atlas · Anthropic MHS가 부수는 ‘예측 대 합성’ 병목',
      en: 'Nine Billion DNA Edits & USB-C for the Wet Lab: AlphaEvolve, AlphaGenome Atlas & Anthropic MHS Attack the Synthesis Bottleneck',
    },
    subtitle: {
      ko: '4×4 복소 행렬 곱셈 56년 기록 경신부터 90억 단일염기 변이 지도, 그리고 Janelia·Allen 연구소의 자율 웨트랩 규격까지 — 2026년 AI 과학 인프라 완전 해부.',
      en: 'From beating Strassen’s 1969 matrix bound and mapping 9 billion DNA variants to giving autonomous AI agents safe control over microscopes and liquid handlers at HHMI Janelia and the Allen Institute.',
    },
    mesugakiTldr: {
      ko: 'AlphaEvolve가 56년 묵은 행렬 곱셈을 48회로 깎고, AlphaGenome Atlas는 인간 DNA 90억 변이를 싹 다 채점해 뒀어! 이젠 Anthropic MHS로 AI가 직접 피펫까지 쥐니까, 남은 최종 보스는 ‘현실 세포가 자라는 물리 속도’뿐이라구~ 허접 생물학 클럭♡',
      en: 'AlphaEvolve shaved a 56-year matrix bound to 48 multiplications, AlphaGenome Atlas pre-graded 9 billion DNA edits, and Anthropic’s MHS hands agents real pipettes! The only lag left is literally wet biology’s clock speed~ Zako cells♡',
    },
    stats: [
      { label: { ko: '4×4 복소 행렬 곱셈', en: '4×4 Complex MatMul' }, value: '48 Mults (vs. 49)' },
      { label: { ko: '11차원 키싱 수 하한', en: '11D Kissing Number' }, value: '593 Spheres' },
      { label: { ko: 'AlphaGenome Atlas', en: 'AlphaGenome Atlas' }, value: '~9B DNA Variants' },
      { label: { ko: '자율 실험실 규격', en: 'Wet-Lab Protocol' }, value: 'Anthropic MHS' },
    ],
    sections: [
      {
        heading: {
          ko: '01 // AlphaEvolve의 진화 루프: 56년 묵은 4×4 행렬 곱셈 돌파와 11차원 키싱 수 593',
          en: '01 // AlphaEvolve’s Evolutionary Loop: 48 Multiplications & Kissing Number 593',
        },
        paragraphs: [
          {
            ko: '2025~2026년 ‘AI for Science’ 스택의 첫 번째 축을 연 것은 알고리즘 자체를 진화시키는 자동 발견 엔진이다. Google DeepMind가 2025년 5월 공개한 Gemini 기반 진화형 코딩 에이전트 ‘AlphaEvolve’는 후보 코드를 생성하고 자동 평가기의 정량 피드백으로 수천 세대를 교배·변이시키며, 인간이 반세기 넘게 깨지 못한 핵심 수치 한계들을 잇달아 경신했다.',
            en: 'The first pillar of the 2025–2026 AI for Science stack is automated algorithmic discovery. Unveiled by Google DeepMind in May 2025, the Gemini-powered evolutionary coding agent AlphaEvolve mutates candidate programs against deterministic evaluators, cracking mathematical and engineering records that stood untouched for decades.',
          },
          {
            ko: '가장 상징적인 성과는 1969년 폴커 슈트라센(Volker Strassen) 이후 56년 동안 요지부동이던 4×4 복소수 행렬 곱셈의 스칼라 곱셈 횟수를 49회에서 48회로 줄인 새 알고리즘 발견이다. 여기에 더해 기하·조합론의 대표 난제인 11차원 키싱 수(kissing number) 문제에서는 593개의 구를 배치하는 새로운 하한 구성을 찾아냈고, 실전 엔지니어링 현장에서도 구글 데이터센터 스케줄러와 차세대 TPU 산술 회로 최적화에 즉시 투입되며 ‘수학적 우아함’과 ‘실리콘 효율’을 동시에 끌어올렸다.',
            en: 'Its headline triumph broke a 56-year barrier dating back to Volker Strassen’s 1969 algorithm: discovering a procedure that multiplies 4×4 complex-valued matrices in 48 scalar multiplications instead of 49. In high-dimensional geometry, AlphaEvolve also constructed a new lower-bound packing of 593 spheres for the 11-dimensional kissing-number problem — while simultaneously optimizing real Google data-center schedulers and TPU matrix-unit circuits.',
          },
        ],
      },
      {
        heading: {
          ko: '02 // 90억 개 DNA 단일염기 변이 지도: AlphaGenome Atlas가 연 유전체 암흑물질',
          en: '02 // Mapping Nine Billion DNA Letters: AlphaGenome Atlas Decodes Genomic Dark Matter',
        },
        paragraphs: [
          {
            ko: '수학과 칩을 넘어 생명과학의 지도를 통째로 갈아엎은 것은 DeepMind의 ‘AlphaGenome’과 그 대규모 플랫폼인 ‘AlphaGenome Atlas’다. 기존 유전체 해석이 단백질 암호화 영역(전체 DNA의 약 2%)에 편중돼 있었다면, AlphaGenome 계열 모델은 나머지 98%를 차지하는 비암호화 조절 영역 — 이른바 ‘유전체 암흑물질(genomic dark matter)’ — 에서 단 한 글자의 염기 치환이 유전자 발현, 스플라이싱, 염색질 접근성에 어떤 파장을 일으키는지 정밀하게 예측한다.',
            en: 'If AlphaEvolve rewrote algorithmic discovery, Google DeepMind’s AlphaGenome and its expanded AlphaGenome Atlas transformed molecular biology. Rather than focusing narrowly on protein-coding exons — barely 2% of human DNA — AlphaGenome decodes the remaining 98% non-coding regulatory “dark matter,” forecasting how a single-letter shift ripples through gene expression, RNA splicing, and chromatin accessibility.',
          },
          {
            ko: '특히 AlphaGenome Atlas는 인간 유전체 전체에서 이론적으로 가능한 약 90억 개의 단일염기 변이(single-nucleotide variants)에 대한 분자 영향 예측치를 1페타바이트 규모의 데이터셋으로 사전 계산해 공개하고, 이를 ‘AlphaGenome Variant Impact(AVI)’ 점수로 즉시 조회할 수 있게 만들었다. 희귀 유전 질환이나 암 유발 변이를 찾는 연구자들이 수개월간 후보를 좁히던 탐색 단계를 단 몇 초의 Atlas 쿼리로 압축해 버린 것이다.',
            en: 'AlphaGenome Atlas goes a massive step further by publishing a precomputed 1-petabyte dataset covering roughly 9 billion single-nucleotide variants — essentially every single-letter DNA change possible across the human genome — indexed via the AlphaGenome Variant Impact (AVI) score. Hypothesis triage that once consumed months of bioinformatics now resolves in a single database query.',
          },
        ],
        jamminAside: {
          mood: 'math',
          text: {
            ko: '인간 DNA의 가능한 한 글자 오타 90억 개를 1페타바이트 사전으로 미리 채점해 뒀대~ 생물학자 선생님들 완전 치트 콘솔 켠 기분일걸? 에~ 근데 진짜 보스벽은 지금부터라구!',
            en: 'A 1-petabyte pre-graded cheat sheet of all 9 billion possible single-letter typos in human DNA — biologists literally just unlocked dev console mode! Now watch what hits next…',
          },
        },
      },
      {
        heading: {
          ko: '03 // 실험실의 USB-C ‘MHS’와 예측 대 합성(Prediction vs. Synthesis)의 물리 병목',
          en: '03 // USB-C for the Wet Lab: Anthropic MHS, Janelia, Allen & The Prediction-vs.-Synthesis Wall',
        },
        paragraphs: [
          {
            ko: 'AI가 몇 시간 만에 90억 개 DNA 변이를 점수 매기고 신약 후보를 쏟아내도, 정작 실험실 벤치로 내려오면 모든 것이 20세기 속도로 느려진다. 시약을 피펫으로 옮기고, 세포를 배양하고, 공초점 현미경으로 촬영해 검증하는 ‘합성 및 실험 검증(Synthesis)’ 단계가 실리콘의 ‘예측(Prediction)’ 속도를 전혀 따라가지 못하는 거대한 물리 병목 때문이다.',
            en: 'Even when silicon models score 9 billion mutations or design novel protein binders before lunch, science slams straight into the Prediction-vs.-Synthesis bottleneck at the laboratory bench. Pipetting microliters, culturing live cells, tuning lasers, and acquiring microscopy data still unfold at physical clock speed — orders of magnitude slower than AI inference.',
          },
          {
            ko: '이 벽을 정면으로 뚫기 위해 Anthropic이 연구 프리뷰로 꺼낸 무기가 바로 ‘Model Hardware Standard(MHS)’다. 흔히 ‘실험실을 위한 USB-C’로 불리는 MHS는 특정 모델에 종속되지 않는 범용 장비 드라이버·탐색 규격으로, 단순화된 읽기·쓰기(read/write) 프리미티브와 하드웨어 차원의 안전 상한 태그(safety limit tags)를 통해 AI 에이전트가 현미경, 액체 핸들러, 로봇 암, 심지어 양자 광학 레이저 장비까지 안전하게 직접 제어할 수 있게 해준다. Anthropic은 하워드 휴즈 의학연구소(HHMI) 자넬리아 연구 캠퍼스(Janelia Research Campus) 및 앨런 연구소(Allen Institute)와 전략적 생명과학 파트너십을 맺고, 단일세포 유전체학·뇌 커넥토믹스·고처리량 이미징 파이프라인에 자율 에이전트와 MHS형 자동화 루프를 결합하며 2027년 완전 폐루프 ‘자율 웨트랩’ 시대의 문을 열고 있다.',
            en: 'To break that physical bottleneck, Anthropic introduced the Model Hardware Standard (MHS) in research preview — dubbed “USB-C for the laboratory.” MHS defines a model-agnostic universal driver and discoverability layer built on clean read/write primitives and strict hardware safety-limit tags, enabling autonomous AI agents to operate microscopes, liquid handlers, robotic arms, and even quantum optical setups without crossing physical bounds. Anchored by strategic alliances with the Howard Hughes Medical Institute’s Janelia Research Campus and the Allen Institute across single-cell genomics, connectomics, and high-throughput imaging, MHS signals the real 2027 frontier: closing the loop between infinite silicon prediction and autonomous wet-lab synthesis.',
          },
        ],
        codeSnippet: {
          lang: 'json',
          caption: {
            ko: 'Anthropic MHS(Model Hardware Standard) 개념 스키마 — 에이전트 장비 제어와 하드웨어 안전 경계 선언',
            en: 'Conceptual Anthropic MHS manifest — standardized read/write primitives with hard physical safety limits',
          },
          code: `{
  "protocol": "mhs/0.1-preview",
  "instrument": "liquid-handler-bench-04",
  "partnerSite": "hhmi-janelia-pilot",
  "capabilities": ["read.plate_state", "write.aspirate_dispense"],
  "safetyLimits": {
    "maxVolumeMicroliters": 250,
    "maxTipSpeedMmPerSec": 120,
    "requireHumanSignOffOnBiosafetyFlag": true
  }
}`,
        },
        jamminAside: {
          mood: 'innocent',
          text: {
            ko: '초지능이 점심 전에 백만 개 가설을 뽑아도 세포 분열 속도는 못 속이니까, 결국 AI가 직접 피펫 쥐고 새벽 3시 실험실 야근을 뛰는 거네! 어라~ 그래도 안전 리미트 태그는 단단히 잠가둬야 해, 인간쨩? 약속~♡',
            en: 'Even superintelligence can’t rush cell division, so the only move left is handing the AI a pipette for the 3 a.m. bench shift! Still, keep those hardware safety limits bolted tight, human-chan — promise~♡',
          },
        },
      },
    ],
    sources: [
      {
        outlet: 'Google DeepMind',
        title: 'AlphaEvolve: A Gemini-powered coding agent for discovering faster matrix multiplication (48 mults) & 11D kissing number (593)',
        date: '2025-05-14',
        url: 'https://deepmind.google',
      },
      {
        outlet: 'Google DeepMind / Google Blog',
        title: 'AlphaGenome & AlphaGenome Atlas: Mapping ~9 billion single-nucleotide DNA variants across regulatory dark matter',
        date: '2026-11-12',
        url: 'https://blog.google',
      },
      {
        outlet: 'Anthropic',
        title: 'Introducing the Model Hardware Standard (MHS) research preview for safe agentic laboratory instrumentation',
        date: '2026-11-14',
        url: 'https://www.anthropic.com',
      },
      {
        outlet: 'Anthropic / HHMI Janelia / Allen Institute',
        title: 'Strategic life sciences partnerships integrating frontier AI agents into high-throughput imaging, connectomics & genomics',
        date: '2026-11-15',
        url: 'https://www.anthropic.com',
      },
    ],
  },
]
