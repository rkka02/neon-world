import { useState } from 'react'
import { MessageCircle, Sparkles, X, Shuffle } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { JAMMIN_EMOTES } from '../data/emotes'
import { JAMMIN_RANDOM_QUIPS } from '../i18n/ui'

export function JamminCompanion() {
  const { t, jamminMood, jamminSpeech, triggerJammin, playSynth } = useApp()
  const [expanded, setExpanded] = useState(false)
  const [quipIndex, setQuipIndex] = useState(0)

  const currentEmote =
    JAMMIN_EMOTES.find((e) => e.mood === jamminMood) ?? JAMMIN_EMOTES[0]

  const cycleQuip = () => {
    playSynth('spark')
    const nextIdx = (quipIndex + 1) % JAMMIN_RANDOM_QUIPS.length
    setQuipIndex(nextIdx)
    const next = JAMMIN_RANDOM_QUIPS[nextIdx]
    triggerJammin(next.mood, next.text)
  }

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-2.5 sm:right-6 sm:bottom-6">
      {expanded && (
        <div
          className="speech-bubble neon-panel w-[310px] max-w-[calc(100vw-2rem)] rounded-2xl p-4 sm:w-[350px]"
          style={{ backgroundColor: 'var(--bg-card-solid)' }}
        >
          <div className="mb-2.5 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-[#ff5da2]/15 px-2 py-0.5 font-mono-tech text-[10px] font-bold text-[#ff5da2]">
                <Sparkles className="h-3 w-3" />
                JAMMIN-E LIVE
              </span>
              <span className="font-jp text-[11px] font-bold text-[#00f0ff]">
                {currentEmote.jpTag}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="cursor-pointer rounded-md p-1 opacity-70 hover:opacity-100"
              aria-label="Close Jammin-E companion dialog"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-start gap-3">
            <img
              src={currentEmote.file}
              alt={t(currentEmote.name)}
              className="h-20 w-20 shrink-0 rounded-xl border border-[#00f0ff]/40 object-cover shadow-md [image-rendering:pixelated]"
            />
            <p className="text-xs leading-relaxed font-medium" style={{ color: 'var(--text-primary)' }}>
              {t(jamminSpeech)}
            </p>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t pt-2.5" style={{ borderColor: 'var(--border-subtle)' }}>
            <div className="flex flex-wrap items-center gap-1">
              {JAMMIN_EMOTES.map((emote) => (
                <button
                  key={emote.id}
                  type="button"
                  onClick={() => {
                    playSynth('click')
                    triggerJammin(emote.mood, emote.caption)
                  }}
                  className="cursor-pointer overflow-hidden rounded-md border transition-transform hover:scale-110"
                  style={{
                    borderColor:
                      emote.mood === jamminMood ? '#c8ff00' : 'var(--border-subtle)',
                  }}
                  title={t(emote.name)}
                >
                  <img
                    src={emote.file}
                    alt={t(emote.name)}
                    className="h-7 w-7 object-cover [image-rendering:pixelated]"
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={cycleQuip}
              className="flex cursor-pointer items-center gap-1 rounded-lg bg-gradient-to-r from-[#4285f4] to-[#ff5da2] px-2.5 py-1 font-mono-tech text-[11px] font-bold text-white transition-transform hover:scale-105"
            >
              <Shuffle className="h-3 w-3" />
              <span>{t({ ko: '한마디 더!', en: 'Tease Me!' })}</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Mascot Trigger — compact circle on mobile, full pill on sm+ */}
      <button
        type="button"
        onClick={() => {
          playSynth('click')
          setExpanded((prev) => !prev)
        }}
        className="group relative flex cursor-pointer items-center gap-2.5 rounded-full border-2 border-[#c8ff00]/80 bg-[#0c142b] p-1 text-white shadow-[0_10px_28px_rgba(0,240,255,0.28)] transition-all hover:scale-105 hover:border-[#ff2e88] sm:py-1.5 sm:pr-4 sm:pl-1.5"
        aria-label="Poke Jammin-E live companion"
      >
        <img
          src={currentEmote.file}
          alt="Jammin-E"
          className="h-12 w-12 rounded-full border border-white/30 object-cover [image-rendering:pixelated] sm:h-11 sm:w-11"
        />
        <div className="hidden text-left leading-tight sm:block">
          <div className="flex items-center gap-1 font-mono-tech text-[10px] font-bold text-[#c8ff00]">
            <MessageCircle className="h-3 w-3" />
            <span>JAMMIN-E</span>
          </div>
          <div className="text-xs font-bold">
            {expanded
              ? t({ ko: '대화창 접기', en: 'Hide Chat' })
              : t({ ko: '잼민E 찔러보기♡', en: 'Poke Jammin-E♡' })}
          </div>
        </div>
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff2e88] text-[9px] font-black text-white">
          ✦
        </span>
      </button>
    </div>
  )
}
