export type Lang = 'ko' | 'en'
export type Theme = 'prism-night' | 'solar-zine'
export type JamminMood = 'smug' | 'wink' | 'hype' | 'innocent' | 'math'

export interface LocalizedText {
  ko: string
  en: string
}

export interface SourceCitation {
  outlet: string
  author?: string
  title: string
  date: string
  url: string
  note?: LocalizedText
}

export type DispatchCategory =
  | 'mathocalypse'
  | 'frontier'
  | 'reactions'
  | 'quantum'
  | 'manifesto'

export interface DispatchSection {
  heading: LocalizedText
  paragraphs: LocalizedText[]
  codeSnippet?: {
    lang: string
    caption: LocalizedText
    code: string
  }
  jamminAside?: {
    mood: JamminMood
    text: LocalizedText
  }
}

export interface Dispatch {
  slug: string
  category: DispatchCategory
  jpStamp: string
  date: string
  readTimeMin: number
  featured?: boolean
  breaking?: boolean
  accentColor: 'cyan' | 'pink' | 'gold' | 'mint' | 'blue'
  coverImage?: string
  title: LocalizedText
  subtitle: LocalizedText
  mesugakiTldr: LocalizedText
  stats?: Array<{
    label: LocalizedText
    value: string
  }>
  sections: DispatchSection[]
  sources: SourceCitation[]
}

export type BossStatus =
  | 'cleared-human'
  | 'lean-verified'
  | 'phase-one'
  | 'disputed'
  | 'chip-damage'
  | 'final-boss'

export interface RaidBoss {
  id: string
  name: LocalizedText
  jpTitle: string
  category: 'millennium' | 'legendary'
  yearProposed: number
  prizeUsd: string
  hpRemaining: number // 0 = cleared, 100 = untouched
  status: BossStatus
  statusLabel: LocalizedText
  leanLines?: string
  humanDigestionPct: number
  leadAttacker: string
  latestEventDate: string
  summary: LocalizedText
  jamminTaunt: LocalizedText
  attackLog: Array<{
    date: string
    actor: string
    event: LocalizedText
  }>
  sources: SourceCitation[]
}

export interface FrontierModel {
  id: string
  name: string
  lab: string
  releaseDate: string
  codenameJp: string
  role: LocalizedText
  accent: string
  inputPricePerM: number
  outputPricePerM: number
  cachedInputPerM: number
  contextWindow: string
  signatureStat: LocalizedText
  stats: {
    mathProof: number
    agenticOps: number
    velocity: number
    costValue: number
    longContext: number
  }
  highlights: LocalizedText[]
  jamminVerdict: LocalizedText
  sources: SourceCitation[]
}

export interface JamminEmote {
  id: string
  mood: JamminMood
  file: string
  name: LocalizedText
  jpTag: string
  caption: LocalizedText
  usage: LocalizedText
}

export interface GachaProphecy {
  id: string
  rarity: 'UR' | 'SSR' | 'SR' | 'R'
  year: string
  jpStamp: string
  title: LocalizedText
  description: LocalizedText
  jamminQuote: LocalizedText
  probabilityPct: number
}
