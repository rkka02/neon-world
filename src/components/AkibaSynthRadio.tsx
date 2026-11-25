import { useEffect, useRef, useState } from 'react'
import { Disc3, Pause, Play, SkipForward } from 'lucide-react'
import { useApp } from '../context/AppContext'

interface Track {
  id: string
  name: string
  jp: string
  bpm: number
  wave: OscillatorType
  notes: number[]
  bass: number[]
}

const TRACKS: Track[] = [
  {
    id: 'akiba-lofi',
    name: 'AKIBA NIGHT LO-FI',
    jp: '秋葉原深夜ローファイ',
    bpm: 108,
    wave: 'triangle',
    notes: [523.25, 659.25, 783.99, 987.77, 880, 783.99, 659.25, 587.33],
    bass: [130.81, 130.81, 164.81, 164.81, 174.61, 174.61, 146.83, 196.0],
  },
  {
    id: 'riemann-raid',
    name: 'RIEMANN BOSS RAID 8-BIT',
    jp: 'リーマン討伐8ビット',
    bpm: 146,
    wave: 'square',
    notes: [440, 523.25, 659.25, 880, 783.99, 659.25, 587.33, 659.25],
    bass: [110, 110, 130.81, 130.81, 146.83, 146.83, 164.81, 130.81],
  },
  {
    id: 'seongsu-club',
    name: 'SEONGSU CLUB GROOVE',
    jp: '聖水ストリートグルーヴ',
    bpm: 124,
    wave: 'sawtooth',
    notes: [392.0, 493.88, 587.33, 783.99, 659.25, 587.33, 493.88, 440.0],
    bass: [98.0, 123.47, 146.83, 110.0, 130.81, 146.83, 123.47, 98.0],
  },
]

export function AkibaSynthRadio() {
  const { t } = useApp()
  const [playing, setPlaying] = useState(false)
  const [trackIdx, setTrackIdx] = useState(0)
  const ctxRef = useRef<AudioContext | null>(null)
  const timerRef = useRef<number | null>(null)
  const stepRef = useRef(0)

  const track = TRACKS[trackIdx]

  useEffect(() => {
    if (!playing) {
      if (timerRef.current) window.clearInterval(timerRef.current)
      timerRef.current = null
      return
    }

    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    if (!AudioCtx) return
    if (!ctxRef.current) ctxRef.current = new AudioCtx()
    const ctx = ctxRef.current
    if (ctx.state === 'suspended') ctx.resume()

    const intervalMs = Math.round((60 / track.bpm / 2) * 1000)

    const playStep = () => {
      const now = ctx.currentTime
      const step = stepRef.current % track.notes.length
      stepRef.current += 1

      // Lead synth
      const lead = ctx.createOscillator()
      const leadGain = ctx.createGain()
      lead.type = track.wave
      lead.frequency.setValueAtTime(track.notes[step], now)
      leadGain.gain.setValueAtTime(0.032, now)
      leadGain.gain.exponentialRampToValueAtTime(0.001, now + intervalMs / 1000)
      lead.connect(leadGain)
      leadGain.connect(ctx.destination)
      lead.start(now)
      lead.stop(now + intervalMs / 1000)

      // Bass pulse every 2 steps
      if (step % 2 === 0) {
        const bass = ctx.createOscillator()
        const bassGain = ctx.createGain()
        bass.type = 'triangle'
        bass.frequency.setValueAtTime(track.bass[step], now)
        bassGain.gain.setValueAtTime(0.045, now)
        bassGain.gain.exponentialRampToValueAtTime(0.001, now + (intervalMs * 1.8) / 1000)
        bass.connect(bassGain)
        bassGain.connect(ctx.destination)
        bass.start(now)
        bass.stop(now + (intervalMs * 1.8) / 1000)
      }
    }

    playStep()
    timerRef.current = window.setInterval(playStep, intervalMs)

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [playing, track])

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
      ctxRef.current?.close().catch(() => {})
    }
  }, [])

  return (
    <div
      className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border-2 p-3"
      style={{
        borderColor: playing ? '#c8ff00' : 'var(--border-subtle)',
        backgroundColor: 'var(--bg-card)',
      }}
    >
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-xl border-2 border-[#111116] bg-[#c8ff00] text-[#111116] shadow-[2px_2px_0px_#ff2e88] transition-transform hover:scale-105"
          aria-label={playing ? 'Pause 8-bit synth radio' : 'Play 8-bit synth radio'}
        >
          {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-current" />}
        </button>

        <div className="min-w-0">
          <div className="flex items-center gap-1.5 font-mono-tech text-[10px] font-extrabold text-[#ff2e88]">
            <Disc3 className={`h-3 w-3 ${playing ? 'animate-spin' : ''}`} />
            <span>8-BIT SYNTH RADIO // {track.bpm} BPM</span>
          </div>
          <div className="truncate font-mono-tech text-xs font-extrabold">
            {track.name}{' '}
            <span className="font-jp text-[10px] font-bold opacity-65">({track.jp})</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {playing && (
          <div className="flex h-4 items-end gap-0.5 px-1">
            {[10, 16, 8, 14, 12].map((h, i) => (
              <span
                key={i}
                className="w-1 animate-pulse rounded-sm bg-[#c8ff00]"
                style={{ height: `${h}px`, animationDelay: `${i * 110}ms` }}
              />
            ))}
          </div>
        )}
        <button
          type="button"
          onClick={() => setTrackIdx((i) => (i + 1) % TRACKS.length)}
          className="flex cursor-pointer items-center gap-1 rounded-lg border px-2.5 py-1 font-mono-tech text-[10px] font-bold transition-colors hover:border-[#00f0ff] hover:text-[#00f0ff]"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          <SkipForward className="h-3 w-3" />
          <span>{t({ ko: '트랙 변경', en: 'NEXT' })}</span>
        </button>
      </div>
    </div>
  )
}
