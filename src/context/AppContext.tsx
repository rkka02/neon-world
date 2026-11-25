import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import type { JamminMood, Lang, LocalizedText, Theme } from '../types'

interface AppContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
  t: (text: LocalizedText) => string
  theme: Theme
  toggleTheme: () => void
  soundEnabled: boolean
  toggleSound: () => void
  playSynth: (kind: 'click' | 'spark' | 'gacha' | 'beam') => void
  jamminMood: JamminMood
  jamminSpeech: LocalizedText
  triggerJammin: (mood: JamminMood, speech: LocalizedText) => void
  singularityHeat: number
  injectCompute: (delta?: number) => void
}

const DEFAULT_SPEECH: LocalizedText = {
  ko: '야호~ 인간쨩! 리만 가설 1,740만 줄도 못 읽고 여기까지 기어온 거야? 허접~♡ 그래도 관측소 구경은 시켜줄게!',
  en: 'Yaho~ Human-chan! Couldn’t even read 17.4M lines of the Riemann proof and crawled in here anyway? Zako~♡ Fine, I’ll give you the VIP observatory tour!',
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('neon-world-lang')
    return saved === 'en' || saved === 'ko' ? saved : 'ko'
  })

  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('neon-world-theme')
    return saved === 'solar-zine' || saved === 'prism-night' ? saved : 'prism-night'
  })

  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    return localStorage.getItem('neon-world-sound') === 'on'
  })

  const [jamminMood, setJamminMood] = useState<JamminMood>('smug')
  const [jamminSpeech, setJamminSpeech] = useState<LocalizedText>(DEFAULT_SPEECH)

  const [singularityHeat, setSingularityHeat] = useState<number>(() => {
    const saved = Number(localStorage.getItem('neon-world-heat'))
    return Number.isFinite(saved) && saved >= 88 ? Math.min(99.99, saved) : 94.26
  })

  useEffect(() => {
    localStorage.setItem('neon-world-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    localStorage.setItem('neon-world-theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('neon-world-sound', soundEnabled ? 'on' : 'off')
  }, [soundEnabled])

  useEffect(() => {
    localStorage.setItem('neon-world-heat', String(singularityHeat))
  }, [singularityHeat])

  const setLang = useCallback((next: Lang) => setLangState(next), [])
  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === 'ko' ? 'en' : 'ko'))
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'prism-night' ? 'solar-zine' : 'prism-night'))
  }, [])

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => !prev)
  }, [])

  const playSynth = useCallback(
    (kind: 'click' | 'spark' | 'gacha' | 'beam') => {
      if (!soundEnabled) return
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
        if (!AudioCtx) return
        const ctx = new AudioCtx()
        const now = ctx.currentTime
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.connect(gain)
        gain.connect(ctx.destination)

        if (kind === 'click') {
          osc.type = 'triangle'
          osc.frequency.setValueAtTime(660, now)
          osc.frequency.exponentialRampToValueAtTime(990, now + 0.06)
          gain.gain.setValueAtTime(0.06, now)
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07)
          osc.start(now)
          osc.stop(now + 0.08)
        } else if (kind === 'spark') {
          osc.type = 'sine'
          osc.frequency.setValueAtTime(523.25, now)
          osc.frequency.setValueAtTime(659.25, now + 0.05)
          osc.frequency.setValueAtTime(1046.5, now + 0.1)
          gain.gain.setValueAtTime(0.08, now)
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22)
          osc.start(now)
          osc.stop(now + 0.23)
        } else if (kind === 'gacha') {
          osc.type = 'square'
          const notes = [523, 659, 784, 1046, 1318]
          notes.forEach((n, idx) => {
            osc.frequency.setValueAtTime(n, now + idx * 0.055)
          })
          gain.gain.setValueAtTime(0.05, now)
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.36)
          osc.start(now)
          osc.stop(now + 0.38)
        } else {
          osc.type = 'sawtooth'
          osc.frequency.setValueAtTime(220, now)
          osc.frequency.exponentialRampToValueAtTime(1760, now + 0.28)
          gain.gain.setValueAtTime(0.07, now)
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32)
          osc.start(now)
          osc.stop(now + 0.34)
        }
      } catch {
        // Ignore audio errors on locked contexts
      }
    },
    [soundEnabled],
  )

  const triggerJammin = useCallback((mood: JamminMood, speech: LocalizedText) => {
    setJamminMood(mood)
    setJamminSpeech(speech)
  }, [])

  const injectCompute = useCallback(
    (delta = 0.18) => {
      setSingularityHeat((prev) => {
        const next = Math.min(99.99, Number((prev + delta).toFixed(2)))
        return next
      })
      playSynth('spark')
    },
    [playSynth],
  )

  const t = useCallback((text: LocalizedText) => text[lang], [lang])

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        t,
        theme,
        toggleTheme,
        soundEnabled,
        toggleSound,
        playSynth,
        jamminMood,
        jamminSpeech,
        triggerJammin,
        singularityHeat,
        injectCompute,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used inside AppProvider')
  return ctx
}
