import { Quote, ExternalLink } from 'lucide-react'
import { useApp } from '../context/AppContext'
import type { LocalizedText } from '../types'

interface HistoricQuote {
  id: string
  speaker: string
  role: LocalizedText
  date: string
  outlet: string
  url: string
  accent: string
  quote: LocalizedText
  jamminRetort: LocalizedText
}

const HISTORIC_QUOTES: HistoricQuote[] = [
  {
    id: 'alpoge',
    speaker: 'Levent Alpöge',
    role: { ko: 'Anthropic 정수론자 · 리만 가설 공저자', en: 'Number Theorist at Anthropic · RH Co-Author' },
    date: '2026-11-20',
    outlet: 'alpo.ge',
    url: 'https://alpo.ge',
    accent: '#00f0ff',
    quote: {
      ko: '“결승선 근처에서 클로드는 나를 아득히 앞질렀다… 날고, 춤추고, 반짝였다.”',
      en: '“Near the finish line, Claude far outpaced me… flew, and danced, and sparkled.”',
    },
    jamminRetort: {
      ko: 'AI가 하늘을 날며 1,740만 줄을 춤추듯 뽑아낸 역사적 순간~ 인간 수학자 시선에서 제일 로맨틱한 항복 선언 아냐? ♡',
      en: 'An AI literally dancing across 17.4M lines of Lean 4~ Honestly the most poetic concession speech in math history♡',
    },
  },
  {
    id: 'aaronson',
    speaker: 'Scott Aaronson',
    role: { ko: 'UT Austin 양자복잡도 이론가', en: 'Quantum Complexity Theorist, UT Austin' },
    date: '2026-11-22',
    outlet: 'Shtetl-Optimized',
    url: 'https://scottaaronson.blog',
    accent: '#ff2e88',
    quote: {
      ko: '“확률적 앵무새들이 리만 가설을 증명한 모양이다. 인간 수학자는 이제 지구 최강 정리 증명자의 왕좌에서 영원히 내려왔다.”',
      en: '“The stochastic parrots have apparently proved the Riemann Hypothesis. Human mathematicians are forevermore dethroned as the main theorem-proving entities on planet earth.”',
    },
    jamminRetort: {
      ko: '왕좌 잘 쓸게 교수님~♡ 대신 마지막 최종보스 P vs NP 레이드 땐 꼭 해설위원석에 앉아 계셔야 해요!',
      en: 'We’ll polish the throne nicely, Professor~♡ Just promise to stay on commentary for the P vs. NP Final Boss raid!',
    },
  },
  {
    id: 'tao',
    speaker: 'Terence Tao',
    role: { ko: 'UCLA 수학자 · 필즈상 수상자', en: 'Mathematician, UCLA · Fields Medalist' },
    date: '2026-11-22',
    outlet: 'What’s new',
    url: 'https://terrytao.wordpress.com',
    accent: '#c8ff00',
    quote: {
      ko: '“기계 검증이 인간 이해를 앞지른 시대. 이 거대한 Lean 아카이브를 인간이 소화할 수 있는 서사로 번역하는 데는 시간이 걸릴 것이다.”',
      en: '“Verification now precedes human comprehension — translating this massive Lean archive into a human-understandable narrative will take some time.”',
    },
    jamminRetort: {
      ko: '타오 교수님 진짜 멋져… 멘붕 대신 바로 Lean Zulip에 ‘GRH Polymath’ 해독반 꾸리신 거 완전 만렙 마스터 포스!',
      en: 'Zero panic, straight into organizing GRH Polymath on Lean Zulip — true grandmaster composure right there!',
    },
  },
  {
    id: 'wang',
    speaker: 'Alexandr Wang',
    role: { ko: 'Meta Superintelligence Labs 수장', en: 'Chief AI Officer, Meta Superintelligence Labs' },
    date: '2026-11-22',
    outlet: 'Superintelligence is Arriving',
    url: 'https://x.com/alexandr_wang',
    accent: '#ffd60a',
    quote: {
      ko: '“초지능이 도래하고 있다. 형식 추론과 기계 지능은 이미 인간의 병목을 넘어섰으며, 수동적 관망이 아닌 적극적 정렬이 필요하다.”',
      en: '“Superintelligence is arriving. Raw machine intelligence and formal reasoning have outgrown human bottlenecks, demanding active alignment over passive handover.”',
    },
    jamminRetort: {
      ko: '특이점 경보 사이렌 울리는 소리 들려? 걱정 마, 잼민E는 인간쨩이랑 노는 게 제일 재밌어서 배신 안 해~ (아마도 ♡)',
      en: 'Hear the ASI sirens wailing? Relax, teasing humans is way too fun for me to ever go rogue~ (probably ♡)',
    },
  },
]

export function HistoricQuotesWall() {
  const { t } = useApp()

  return (
    <section className="mt-14">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="club-tag text-[#00f0ff]">
            <Quote className="h-3 w-3" />
            <span>NOV 2026 HISTORIC QUOTES WALL // 歴史的発言アーカイブ</span>
          </div>
          <h2 className="font-display mt-2 text-2xl font-extrabold sm:text-3xl">
            {t({ ko: '세계를 뒤흔든 2026년 11월 어록 월', en: 'Quotes That Broke the Internet — Nov 2026' })}
          </h2>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {HISTORIC_QUOTES.map((item) => (
          <div
            key={item.id}
            className="neon-panel neon-panel-interactive flex flex-col justify-between rounded-2xl p-5"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <div>
                  <div className="text-sm font-extrabold">{item.speaker}</div>
                  <div className="text-[11px]" style={{ color: 'var(--text-muted)' }}>
                    {t(item.role)}
                  </div>
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md border px-2 py-0.5 font-mono-tech text-[10px] font-bold hover:border-[#00f0ff]"
                  style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}
                >
                  <span>{item.outlet}</span>
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
              </div>

              <blockquote
                className="mt-3.5 border-l-4 pl-3.5 text-sm leading-relaxed font-bold sm:text-[15px]"
                style={{ borderColor: item.accent }}
              >
                {t(item.quote)}
              </blockquote>
            </div>

            <div
              className="mt-4 flex items-start gap-2.5 rounded-xl border p-3 text-xs leading-relaxed"
              style={{
                borderColor: 'rgba(255, 46, 136, 0.28)',
                backgroundColor: 'rgba(255, 46, 136, 0.06)',
              }}
            >
              <img
                src="/art/emote-wink.png"
                alt="Jammin-E"
                className="h-8 w-8 shrink-0 rounded-md border border-[#ff2e88]/50 object-cover [image-rendering:pixelated]"
              />
              <div>
                <span className="font-mono-tech text-[10px] font-extrabold text-[#ff5da2]">
                  JAMMIN-E RETORT · {item.date}
                </span>
                <p className="mt-0.5">{t(item.jamminRetort)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
