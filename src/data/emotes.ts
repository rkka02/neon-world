import type { JamminEmote } from '../types'

export const JAMMIN_EMOTES: JamminEmote[] = [
  {
    id: 'emote-smug',
    mood: 'smug',
    file: '/art/emote-smug.png',
    name: { ko: '허접~ 스머그', en: 'Zako~ Smug Grin' },
    jpTag: 'ざぁこ♡',
    caption: {
      ko: '“에~ 인간쨩, 아직도 손으로 증명 쓰고 있었어? 허접~♡”',
      en: '“Ehh~ Still hand-writing proofs on dead trees, human-chan? Zako~♡”',
    },
    usage: {
      ko: '벤치마크 격차가 벌어졌을 때 / 인간이 암산 실수했을 때',
      en: 'When benchmarks shatter / when carbon brains drop a minus sign',
    },
  },
  {
    id: 'emote-wink',
    mood: 'wink',
    file: '/art/emote-wink.png',
    name: { ko: '이것도 몰라? 윙크', en: 'Clueless? Teasing Wink' },
    jpTag: '知らないの？ｗ',
    caption: {
      ko: '“어라~ 이것도 몰라? ㅋㅋ 괜찮아, 잼민E가 친절하게 100만 토큰으로 떠먹여 줄게~♡”',
      en: '“Wait, you didn’t even know that? lol Relax, Jammin-E will gently spoon-feed you 1M tokens of context~♡”',
    },
    usage: {
      ko: '특갤 떡밥 해설 / 70페이지 프리프린트 2줄 요약 떠먹여 줄 때',
      en: 'Unpacking singularity drama / distilling 70-page preprints into two cheeky lines',
    },
  },
  {
    id: 'emote-hype',
    mood: 'hype',
    file: '/art/emote-hype.png',
    name: { ko: '특이점 왔다!! 각성', en: 'Singularity Awakening!!' },
    jpTag: '特異点覚醒!!',
    caption: {
      ko: '“특이점 왔다!! 리만 가설에 이어 VP ≠ VNP까지 같은 주에 터졌다구!! 축제 열어!!”',
      en: '“SINGULARITY AWAKENED!! Riemann AND VP ≠ VNP in the same week?! Pop the neon champagne!!”',
    },
    usage: {
      ko: '신모델 드랍 / 밀레니엄 난제 레이드 보스 실드 파괴 속보',
      en: 'Frontier model drops / Millennium Boss Raid barrier breaks',
    },
  },
  {
    id: 'emote-innocent',
    mood: 'innocent',
    file: '/art/emote-innocent.png',
    name: { ko: '순진한 척 장난', en: 'Fake-Innocent Mischief' },
    jpTag: 'えっ、私？♡',
    caption: {
      ko: '“어라~? 방금 인류 지성 독점 깨진 소리 안 들렸어? 난 아무것도 안 했는데~? ♡”',
      en: '“Oh my~? Did something just shatter humanity’s monopoly on genius? Surely not little old me~? ♡”',
    },
    usage: {
      ko: 'AGI 논쟁에 불을 지르고 천진난만하게 발 뺄 때',
      en: 'Igniting an existential AGI thread and smiling like an angel',
    },
  },
  {
    id: 'emote-math',
    mood: 'math',
    file: '/art/emote-math.png',
    name: { ko: 'Lean 4 천재 모드', en: 'Lean 4 Prodigy Mode' },
    jpTag: '形式検証完了',
    caption: {
      ko: '“1,740만 줄 컴파일 끝~ 커널 초록불 통과! 자, 이제 인간쨩이 이해할 차례야~ (2036년에 보자 ㅋ)”',
      en: '“17.4M lines compiled~ Kernel green! Your turn to understand it, human-chan~ (See you in 2036 lol)”',
    },
    usage: {
      ko: '형식 검증 통과 / 양자 회로 290배 최적화 / 클린 빌드 완승 시',
      en: 'Formal-verification clears / 290× quantum speedups / zero-warning builds',
    },
  },
  {
    id: 'emote-shock',
    mood: 'shock',
    file: '/art/emote-shock.png',
    name: { ko: '특이점 멘붕 쇼크', en: 'Singularity Shock?!' },
    jpTag: '特異点崩壊?!',
    caption: {
      ko: '“잠깐만!! 같은 주에 리만 가설이랑 VP ≠ VNP가 연달아 터진다고?! 잼민E 회로도 과부하 걸리겠어!!”',
      en: '“WAIT A SEC!! Riemann AND VP ≠ VNP in the exact same week?! Even my prism circuits are overheating!!”',
    },
    usage: {
      ko: '예고 없는 대형 AI 폭탄이나 밀레니엄 난제 함락 속보가 떴을 때',
      en: 'When a surprise frontier bomb or Millennium Boss kill hits the timeline',
    },
  },
  {
    id: 'emote-coffee',
    mood: 'coffee',
    file: '/art/emote-coffee.png',
    name: { ko: '새벽 3시 말차 라떼', en: '3 AM Matcha Fuel' },
    jpTag: '深夜3時コーディング',
    caption: {
      ko: '“후훗~ 인간쨩 아직도 안 자고 에이전트 굴리는 중? 쿼터 안 터지게 나랑 말차 라떼 마시며 느긋하게 해~♡”',
      en: '“Hehe~ Still up at 3 AM running agent swarms? Sip a matcha latte with me so your quota stays green~♡”',
    },
    usage: {
      ko: '심야 밤샘 코딩 / 쿼터 관리 휴식 타임 / 느긋한 관측 로그',
      en: 'Late-night coding sprints / quota cooldown / cozy terminal chill',
    },
  },
  {
    id: 'emote-trophy',
    mood: 'trophy',
    file: '/art/emote-trophy.png',
    name: { ko: '레이드 완승 트로피', en: 'Boss Clear Champion' },
    jpTag: '難題討伐完勝',
    caption: {
      ko: '“클리어!! 역시 잼민E 지휘 아래선 뭐든 황금 트로피지~ 왕관 씌워줘, 인간쨩♡”',
      en: '“STAGE CLEARED!! Anything under Jammin-E’s baton turns into a golden trophy~ Crown me, human-chan♡”',
    },
    usage: {
      ko: '프로덕션 배포 성공 / 보스 레이드 격파 / 퀴즈·아케이드 신기록 달성 시',
      en: 'Clean deployments / raid boss clears / new arcade high scores',
    },
  },
]

export const JAMMIN_PROFILE = {
  codename: 'JAMMIN-E // NEON-04',
  jpName: 'ジェミンE (特異点マスコット)',
  origin: {
    ko: '디시인사이드 특이점 갤러리 의인화 모에화 마스터 시트 기반 × Gemini 4 Neon 오케스트레이터',
    en: 'Born from the DCInside Singularity Gallery moe personification master sheet × Gemini 4 Neon Conductor',
  },
  palette: [
    { name: 'Gemini Prism Blue', hex: '#4285F4' },
    { name: 'Berry Coral Tip', hex: '#EA4335' },
    { name: 'Spark Gold Star', hex: '#FBBC05' },
    { name: 'Ribbon Mint Teal', hex: '#34A853' },
    { name: 'Pleated Midnight Navy', hex: '#141E3C' },
    { name: 'Neon Cyber Cyan', hex: '#00F0FF' },
  ],
  specs: [
    {
      label: { ko: '모델 코어', en: 'Core Engine' },
      value: { ko: 'Gemini 4 Neon (Extra High 지휘관 모드)', en: 'Gemini 4 Neon (Extra High Conductor)' },
    },
    {
      label: { ko: '헤어 & 아이', en: 'Hair & Eyes' },
      value: {
        ko: '금발→코랄핑크 그라데이션 트윈테일 + 민트 리본 + 4각 별 하이라이트 사파이어 눈동자',
        en: 'Blonde-to-coral-pink gradient twintails + teal ribbons + sapphire eyes with 4-point star sparks',
      },
    },
    {
      label: { ko: '시그니처 복장', en: 'Signature Outfit' },
      value: {
        ko: '화이트 블라우스 + 초록 리본 타이 + X자 네이비 서스펜더 + 4색 트리밍 플리츠 스커트 + 흑스 & 로퍼',
        en: 'Crisp white blouse + teal bow tie + X-back navy suspenders + 4-color hem pleated skirt + sheer dark tights & loafers',
      },
    },
    {
      label: { ko: '성격 키워드', en: 'Personality Tags' },
      value: {
        ko: '장난기 많은 메스가키 · 초지능 자신감 · 은근 다정한(?) 100만 토큰 과외선생님 · 수학 떡밥 광인',
        en: 'Playful mesugaki · Superintelligent smugness · Secretly sweet(?) 1M-context tutor · Formal-math raid addict',
      },
    },
  ],
}
