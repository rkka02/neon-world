import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Lock, Sparkles, Trophy, Compass } from 'lucide-react'
import { useApp } from '../context/AppContext'

const SHARD_HINTS = [
  {
    id: 'shard-home',
    sector: { ko: '관측소 메인 (/)', en: 'Observatory Home (/)' },
    path: '/',
    hint: { ko: '특이점 속보 섹션 일본어 스탬프 옆 반짝이는 별을 찾아봐!', en: 'Look near the Japanese stamp above Breaking Dispatches!' },
  },
  {
    id: 'shard-boss',
    sector: { ko: '밀레니엄 난제 레이드 (/boss-raid)', en: 'Boss Raid (/boss-raid)' },
    path: '/boss-raid',
    hint: { ko: '상단 레이드 보드 배지 끝에 숨어 있어~', en: 'Hidden inside the top Raid Board badge pill~' },
  },
  {
    id: 'shard-arena',
    sector: { ko: '프론티어 대전 (/arena)', en: 'Frontier Arena (/arena)' },
    path: '/arena',
    hint: { ko: '삼국지 아레나 배너 배지 끝에서 반짝이는 중!', en: 'Sparkling right inside the Frontier Trifecta banner badge!' },
  },
  {
    id: 'shard-studio',
    sector: { ko: '잼민E 도감 (/jammin-e)', en: 'Jammin-E Studio (/jammin-e)' },
    path: '/jammin-e',
    hint: { ko: '지금 이 페이지 상단 일본어 타이틀 옆에 바로 있는데 못 봤어? ㅋ', en: 'Literally right next to the Japanese subtitle at the top of THIS page lol!' },
  },
]

export function ShardVipPassSection() {
  const { t, playSynth, triggerJammin } = useApp()
  const [shards, setShards] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem('neon-world-shards')
      return raw ? (JSON.parse(raw) as string[]) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    const sync = () => {
      try {
        const raw = localStorage.getItem('neon-world-shards')
        setShards(raw ? (JSON.parse(raw) as string[]) : [])
      } catch {
        // ignore
      }
    }
    window.addEventListener('neon-collect-shard', sync)
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener('neon-collect-shard', sync)
      window.removeEventListener('storage', sync)
    }
  }, [])

  const allFound = shards.length >= 4

  return (
    <div className="neon-panel rounded-3xl p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 font-mono-tech text-xs font-extrabold text-[#c8ff00]">
            {allFound ? <Trophy className="h-4 w-4 text-[#ffd60a]" /> : <Compass className="h-4 w-4" />}
            <span>EASTER EGG HUNT // HIDDEN PRISM SHARDS ({shards.length}/4)</span>
          </div>
          <h2 className="font-display mt-1 text-2xl font-extrabold">
            {allFound
              ? t({ ko: '✦ 창립 특이점 관측자 VIP 패스 해금 완료! ✦', en: '✦ FOUNDING SINGULARITY VIP PASS UNLOCKED! ✦' })
              : t({ ko: '숨겨진 프리즘 샤드 4개 찾기 챌린지', en: 'Hidden 4-Prism Shard Scavenger Hunt' })}
          </h2>
        </div>

        <button
          type="button"
          onClick={() => {
            playSynth('beam')
            window.dispatchEvent(new CustomEvent('neon-open-terminal'))
          }}
          className="cursor-pointer rounded-xl border-2 border-[#c8ff00] bg-[#11131e] px-3.5 py-2 font-mono-tech text-xs font-black text-[#c8ff00] shadow-[3px_3px_0px_#ff2e88] transition-transform hover:-translate-y-0.5"
        >
          &gt;_ OPEN SECRET SHELL
        </button>
      </div>

      {allFound ? (
        <div className="dark-surface mt-5 overflow-hidden rounded-2xl border-2 border-[#c8ff00] bg-gradient-to-br from-[#090a10] via-[#13182e] to-[#1a0d22] p-6 text-white shadow-[6px_6px_0px_#ff2e88]">
          <div className="flex flex-wrap items-center gap-5">
            <img
              src="/art/emote-trophy.png"
              alt="VIP Trophy Jammin-E"
              className="h-24 w-24 rounded-2xl border-2 border-[#c8ff00] object-cover [image-rendering:pixelated]"
            />
            <div className="flex-1 min-w-[220px]">
              <div className="inline-flex items-center gap-1.5 rounded bg-[#c8ff00] px-2 py-0.5 font-mono-tech text-[10px] font-black text-[#111116]">
                <Sparkles className="h-3 w-3" />
                NEON//WORLD VIP MEMBER #2026-11
              </div>
              <h3 className="font-display mt-2 text-2xl font-extrabold prism-text-darkbg">
                {t({ ko: '공식 특이점 특등석 관측자 인증서', en: 'CERTIFIED SINGULARITY FRONT-ROW OBSERVER' })}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[#d7e0f8] sm:text-sm">
                {t({
                  ko: '와… 진짜 4개 다 찾았네?! 허접 인간쨩인 줄 알았는데 눈썰미 완전 초지능급이잖아♡ 오늘부터 넌 잼민E 직속 VIP 관측자야!',
                  en: 'Whoa… You actually found all 4?! Thought you were a casual human-chan, turns out you’ve got superintelligent radar♡ Welcome to Jammin-E’s VIP inner circle!',
                })}
              </p>
              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('neon-overdrive'))
                  triggerJammin('trophy', {
                    ko: 'VIP 전용 오버드라이브 발사!! 왕관 쓰고 특이점 축제 즐기자구♡',
                    en: 'VIP Overdrive launched!! Put on the crown and celebrate the Singularity♡',
                  })
                }}
                className="mt-3 cursor-pointer rounded-lg bg-[#ff2e88] px-3.5 py-1.5 font-mono-tech text-[11px] font-black text-white hover:opacity-90"
              >
                ✦ TRIGGER VIP OVERDRIVE RAIN ✦
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {SHARD_HINTS.map((item) => {
            const found = shards.includes(item.id)
            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => playSynth('click')}
                className="flex items-start justify-between gap-3 rounded-2xl border p-4 transition-all hover:border-[#c8ff00]"
                style={{
                  borderColor: found ? '#2ee59d' : 'var(--border-subtle)',
                  backgroundColor: 'var(--bg-elevated)',
                }}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 font-mono-tech text-xs font-extrabold">
                    <span className={`whitespace-nowrap ${found ? 'text-[#2ee59d]' : 'text-[#ff5da2]'}`}>
                      {found ? '✦ COLLECTED' : '○ UNDISCOVERED'}
                    </span>
                    <span className="truncate">· {t(item.sector)}</span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {t(item.hint)}
                  </p>
                </div>
                {found ? (
                  <Sparkles className="h-4 w-4 shrink-0 text-[#2ee59d]" />
                ) : (
                  <Lock className="h-4 w-4 shrink-0 opacity-40" />
                )}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
