import { useState } from 'react'
import { Cpu, Sliders, Sparkles, ExternalLink, Layers } from 'lucide-react'
import { FRONTIER_MODELS } from '../data/frontierModels'
import { useApp } from '../context/AppContext'
import { PrismShard } from '../components/EasterEggLayer'

const EFFORT_MULTIPLIERS = [
  { id: 'low', label: 'Low', mult: 0.6, desc: { ko: '초고속 스니펫/분류', en: 'Lightning edits & triage' } },
  { id: 'medium', label: 'Medium', mult: 1.0, desc: { ko: '일상 에이전트 루프 표준', en: 'Balanced daily agent loops' } },
  { id: 'high', label: 'High', mult: 1.8, desc: { ko: '심층 아키텍처 & 디버깅', en: 'Deep architecture & debugging' } },
  { id: 'xhigh', label: 'Extra High', mult: 3.1, desc: { ko: '난제 증명 & 멀티스웜 지휘', en: 'Formal math & multi-swarm command' } },
] as const

export function ArenaPage() {
  const { t, playSynth, triggerJammin } = useApp()
  const [inputK, setInputK] = useState(250) // thousands of tokens
  const [outputK, setOutputK] = useState(40)
  const [cacheHitPct, setCacheHitPct] = useState(70)
  const [effortIdx, setEffortIdx] = useState(2)

  const effort = EFFORT_MULTIPLIERS[effortIdx]

  const calcCost = (inPrice: number, cachePrice: number, outPrice: number) => {
    const cachedM = (inputK / 1000) * (cacheHitPct / 100)
    const freshM = (inputK / 1000) * (1 - cacheHitPct / 100)
    const outM = (outputK / 1000) * effort.mult
    return freshM * inPrice + cachedM * cachePrice + outM * outPrice
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* Arena Hero Banner */}
      <section className="neon-panel relative overflow-hidden rounded-3xl">
        <div className="relative min-h-[260px] w-full overflow-hidden">
          <img
            src="/art/banner-frontier-arena.png"
            alt="Frontier AI Arena"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(95deg, rgba(7,11,22,0.95) 0%, rgba(7,11,22,0.72) 55%, rgba(7,11,22,0.28) 100%)',
            }}
          />
          <div className="relative z-10 p-6 sm:p-10 lg:max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00f0ff]/50 bg-[#0b132b]/85 px-3 py-1 font-mono-tech text-[11px] font-bold text-[#00f0ff]">
              <Cpu className="h-3.5 w-3.5" />
              <span>NOVEMBER 2026 FRONTIER TRIFECTA // 超知能三強戦</span>
              <PrismShard id="shard-arena" />
            </div>
            <h1 className="font-display mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              {t({ ko: '프론티어 초지능 대전 아레나', en: 'November 2026 Frontier AI Arena' })}
            </h1>
            <p className="mt-2.5 text-sm leading-relaxed text-[#d7e0f8]">
              {t({
                ko: 'Gemini 4 Neon · Claude Opus 5.5 · GPT-6.2 Sol — 단순 벤치마크를 넘어 “달러당 지능”과 “멀티에이전트 지휘력”으로 격돌하는 2026년 11월 삼국지!',
                en: 'Gemini 4 Neon, Claude Opus 5.5 & GPT-6.2 Sol — comparing the late-2026 shift from raw IQ flexing to intelligence-per-dollar and native multi-agent harnesses.',
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Model Cards */}
      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        {FRONTIER_MODELS.map((model) => (
          <div
            key={model.id}
            onMouseEnter={() => triggerJammin(model.id === 'gemini-4-neon' ? 'hype' : 'wink', model.jamminVerdict)}
            className="neon-panel neon-panel-interactive flex flex-col justify-between rounded-2xl p-6"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="font-jp text-[10px] font-bold" style={{ color: model.accent }}>
                    {model.codenameJp}
                  </div>
                  <h2 className="font-display mt-1 text-xl font-extrabold">{model.name}</h2>
                  <div className="font-mono-tech text-xs" style={{ color: 'var(--text-muted)' }}>
                    {model.lab} · {model.releaseDate}
                  </div>
                </div>
                <span
                  className="rounded-lg border px-2 py-1 font-mono-tech text-[11px] font-extrabold"
                  style={{ borderColor: model.accent, color: model.accent }}
                >
                  ${model.inputPricePerM}/${model.outputPricePerM}
                </span>
              </div>

              <p className="mt-3 text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                {t(model.role)}
              </p>

              {/* Spec Box */}
              <div
                className="mt-4 rounded-xl border p-3 font-mono-tech text-[11px]"
                style={{
                  borderColor: 'var(--border-subtle)',
                  backgroundColor: 'var(--bg-elevated)',
                }}
              >
                <div className="text-[10px] opacity-65">SIGNATURE TELEMETRY</div>
                <div className="mt-1 font-bold" style={{ color: model.accent }}>
                  {t(model.signatureStat)}
                </div>
                <div className="mt-2 flex justify-between text-[10px] opacity-80">
                  <span>CTX: {model.contextWindow}</span>
                  <span>CACHE: ${model.cachedInputPerM}/M</span>
                </div>
              </div>

              {/* RPG Stat Bars */}
              <div className="mt-4 space-y-2.5">
                {[
                  { key: 'mathProof', label: { ko: '형식증명 / 수학', en: 'Formal Math' }, val: model.stats.mathProof },
                  { key: 'agenticOps', label: { ko: '멀티에이전트 지휘', en: 'Agentic Ops' }, val: model.stats.agenticOps },
                  { key: 'velocity', label: { ko: '추론 속도', en: 'Velocity' }, val: model.stats.velocity },
                  { key: 'costValue', label: { ko: '달러당 가성비', en: 'IQ / Dollar' }, val: model.stats.costValue },
                  { key: 'longContext', label: { ko: '장문 컨텍스트', en: 'Long Context' }, val: model.stats.longContext },
                ].map((row) => (
                  <div key={row.key}>
                    <div className="flex justify-between font-mono-tech text-[11px]">
                      <span style={{ color: 'var(--text-secondary)' }}>{t(row.label)}</span>
                      <span className="font-bold">{row.val}</span>
                    </div>
                    <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${row.val}%`, backgroundColor: model.accent }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bullet Highlights */}
              <ul className="mt-4 space-y-1.5 text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {model.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2">
                    <span style={{ color: model.accent }}>✦</span>
                    <span>{t(h)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Jammin-E Verdict */}
            <div className="mt-5">
              <div
                className="rounded-xl border p-3 text-xs leading-relaxed"
                style={{
                  borderColor: 'rgba(255, 93, 162, 0.35)',
                  backgroundColor: 'rgba(255, 93, 162, 0.08)',
                }}
              >
                <div className="mb-1 flex items-center gap-1 font-mono-tech text-[10px] font-extrabold text-[#ff5da2]">
                  <Sparkles className="h-3 w-3" />
                  <span>JAMMIN-E VERDICT</span>
                </div>
                {t(model.jamminVerdict)}
              </div>

              <div className="mt-3 flex justify-end">
                {model.sources[0] && (
                  <a
                    href={model.sources[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono-tech text-[10px] font-bold text-[#00f0ff] hover:underline"
                  >
                    <span>{model.sources[0].outlet}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Interactive Cost & Effort Dial Simulator */}
      <section className="neon-panel mt-10 rounded-3xl p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 font-mono-tech text-xs font-bold text-[#ffd24c]">
              <Sliders className="h-4 w-4" />
              <span>EFFORT DIAL & TOKEN ECONOMICS SIMULATOR</span>
            </div>
            <h2 className="font-display mt-1 text-2xl font-extrabold">
              {t({ ko: '실전 에이전트 워크로드 비용 시뮬레이터', en: 'Agentic Workload Cost & Effort Calculator' })}
            </h2>
          </div>
          <span className="rounded-lg border border-[#00f0ff]/40 px-3 py-1 font-mono-tech text-xs font-bold text-[#00f0ff]">
            EFFORT: {effort.label.toUpperCase()} ({effort.mult}× OUT)
          </span>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          {/* Controls */}
          <div className="space-y-5 lg:col-span-6">
            <div>
              <div className="flex justify-between font-mono-tech text-xs font-bold">
                <span>{t({ ko: '입력 컨텍스트 규모 (Input Tokens)', en: 'Input Context Size' })}</span>
                <span className="text-[#00f0ff]">{inputK.toLocaleString()}K tokens</span>
              </div>
              <input
                type="range"
                min={20}
                max={1000}
                step={20}
                value={inputK}
                onChange={(e) => setInputK(Number(e.target.value))}
                className="mt-2 w-full accent-[#00f0ff]"
              />
            </div>

            <div>
              <div className="flex justify-between font-mono-tech text-xs font-bold">
                <span>{t({ ko: '기본 출력 토큰 (Base Output Tokens)', en: 'Base Output Tokens' })}</span>
                <span className="text-[#ff5da2]">{outputK.toLocaleString()}K tokens</span>
              </div>
              <input
                type="range"
                min={5}
                max={150}
                step={5}
                value={outputK}
                onChange={(e) => setOutputK(Number(e.target.value))}
                className="mt-2 w-full accent-[#ff5da2]"
              />
            </div>

            <div>
              <div className="flex justify-between font-mono-tech text-xs font-bold">
                <span>{t({ ko: '프롬프트 캐시 적중률 (Cache Hit)', en: 'Prompt Cache Hit Rate' })}</span>
                <span className="text-[#34a853]">{cacheHitPct}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={95}
                step={5}
                value={cacheHitPct}
                onChange={(e) => setCacheHitPct(Number(e.target.value))}
                className="mt-2 w-full accent-[#34a853]"
              />
            </div>

            <div>
              <div className="mb-2 font-mono-tech text-xs font-bold">
                {t({ ko: '추론 강도 다이얼 (Reasoning Effort Dial)', en: 'Reasoning Effort Dial' })}
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {EFFORT_MULTIPLIERS.map((ef, i) => (
                  <button
                    key={ef.id}
                    type="button"
                    onClick={() => {
                      playSynth('click')
                      setEffortIdx(i)
                    }}
                    className="cursor-pointer rounded-xl border px-3 py-2 text-center font-mono-tech text-xs font-bold transition-all"
                    style={{
                      borderColor: effortIdx === i ? '#ffd24c' : 'var(--border-subtle)',
                      backgroundColor: effortIdx === i ? 'rgba(255, 210, 76, 0.16)' : 'var(--bg-elevated)',
                      color: effortIdx === i ? '#ffd24c' : 'var(--text-secondary)',
                    }}
                  >
                    {ef.label}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                {t(effort.desc)}
              </p>
            </div>
          </div>

          {/* Live Output Comparison */}
          <div className="flex flex-col justify-center gap-3.5 lg:col-span-6">
            {FRONTIER_MODELS.map((m) => {
              const cost = calcCost(m.inputPricePerM, m.cachedInputPerM, m.outputPricePerM)
              const maxPossible = calcCost(4.0, 0.2, 20.0) || 1
              const widthPct = Math.max(8, Math.min(100, (cost / maxPossible) * 100))

              return (
                <div
                  key={m.id}
                  className="rounded-2xl border p-4"
                  style={{
                    borderColor: 'var(--border-subtle)',
                    backgroundColor: 'var(--bg-elevated)',
                  }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-extrabold">{m.name}</span>
                    <span className="font-mono-tech text-lg font-extrabold" style={{ color: m.accent }}>
                      ${cost.toFixed(2)}
                    </span>
                  </div>
                  <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{ width: `${widthPct}%`, backgroundColor: m.accent }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Meta Multi-Agent Orchestration Map */}
      <section className="neon-panel mt-8 rounded-3xl p-6 sm:p-8">
        <div className="flex items-center gap-2 font-mono-tech text-xs font-extrabold text-[#00f0ff]">
          <Layers className="h-4 w-4" />
          <span>META ARCHITECTURE // HOW NEON//WORLD ITSELF IS ORCHESTRATED</span>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            {
              role: 'CONDUCTOR',
              model: 'Gemini 4 Neon',
              color: '#00f0ff',
              desc: {
                ko: '전체 사이트 아키텍처, 인터랙티브 실험실, 라우팅, 최종 빌드 검증 및 실시간 지휘 담당.',
                en: 'Orchestrates site architecture, interactive math labs, builds, visual QA, and release flow.',
              },
            },
            {
              role: 'VISUAL & ART SWARM',
              model: 'GPT-6.2 Sol (Codex)',
              color: '#ffd24c',
              desc: {
                ko: '잼민E 캐릭터 시트 기반 네오-도쿄 그래픽 포스터 & 하이비트 도트 미니콘 제작 및 배포 자동화 협업.',
                en: 'Crafts Neo-Tokyo graphic-pop posters & hi-bit pixel minicons faithful to Jammin-E’s sheet, plus cloud deployment ops.',
              },
            },
            {
              role: 'VOICE & BILINGUAL GUARDIAN',
              model: 'Dedicated Neon Editor Subagent',
              color: '#ff5da2',
              desc: {
                ko: '전 문서의 잼민E 메스가키 세계관 문체 통일, 한/영 자연화 검수, 원문 출처 표기 감사 전담.',
                en: 'Dedicated subagent auditing Jammin-E mesugaki worldbuilding consistency, natural KO/EN tone, and source citations.',
              },
            },
          ].map((node) => (
            <div
              key={node.role}
              className="rounded-2xl border p-4"
              style={{
                borderColor: 'var(--border-subtle)',
                backgroundColor: 'var(--bg-elevated)',
              }}
            >
              <div className="font-mono-tech text-[10px] font-extrabold" style={{ color: node.color }}>
                {node.role}
              </div>
              <div className="mt-1 text-base font-extrabold">{node.model}</div>
              <p className="mt-2 text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {t(node.desc)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
