import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Clock, ExternalLink, Sparkles, BookOpen } from 'lucide-react'
import { DISPATCHES } from '../data/dispatches'
import { JAMMIN_EMOTES } from '../data/emotes'
import { useApp } from '../context/AppContext'
import { UI_COPY } from '../i18n/ui'

export function DispatchDetailPage() {
  const { slug } = useParams()
  const { t, playSynth } = useApp()

  const idx = DISPATCHES.findIndex((d) => d.slug === slug)
  const dispatch = idx >= 0 ? DISPATCHES[idx] : null

  if (!dispatch) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-extrabold">404 // DISPATCH NOT FOUND</h1>
        <p className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
          {t({
            ko: '어라~ 이 문서는 아직 특이점 너머에 있나 봐! 목록으로 돌아가자~',
            en: 'Oops~ That dispatch hasn’t leaked from the Singularity yet! Head back to the archive~',
          })}
        </p>
        <Link
          to="/dispatches"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#00f0ff] px-5 py-2.5 text-sm font-extrabold text-[#070b16]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{t({ ko: '속보 아카이브로', en: 'Back to Dispatches' })}</span>
        </Link>
      </div>
    )
  }

  const prevDispatch = idx > 0 ? DISPATCHES[idx - 1] : null
  const nextDispatch = idx < DISPATCHES.length - 1 ? DISPATCHES[idx + 1] : null

  return (
    <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Link
        to="/dispatches"
        onClick={() => playSynth('click')}
        className="mb-6 inline-flex items-center gap-1.5 font-mono-tech text-xs font-bold text-[#00f0ff] hover:underline"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        <span>{t({ ko: '특이점 속보 목록으로', en: 'All Dispatches' })}</span>
      </Link>

      {/* Header Card */}
      <div className="neon-panel overflow-hidden rounded-3xl">
        {dispatch.coverImage && (
          <div className="relative h-60 w-full overflow-hidden border-b sm:h-72" style={{ borderColor: 'var(--border-subtle)' }}>
            <img
              src={dispatch.coverImage}
              alt={t(dispatch.title)}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070b16] via-[#070b16]/35 to-transparent" />
            <div className="absolute bottom-4 left-6 flex flex-wrap items-center gap-2">
              {dispatch.breaking && (
                <span className="rounded bg-[#ff2e88] px-2.5 py-0.5 font-mono-tech text-[11px] font-extrabold text-white">
                  BREAKING
                </span>
              )}
              <span className="rounded border border-[#00f0ff]/40 bg-[#070b16]/85 px-2.5 py-0.5 font-jp text-xs font-bold text-[#00f0ff]">
                {dispatch.jpStamp}
              </span>
              <span className="inline-flex items-center gap-1 rounded bg-black/60 px-2.5 py-0.5 font-mono-tech text-[11px] text-white">
                <Clock className="h-3 w-3" />
                {dispatch.date} · {dispatch.readTimeMin} min
              </span>
            </div>
          </div>
        )}

        <div className="p-6 sm:p-9">
          <h1 className="font-display text-2xl leading-tight font-extrabold sm:text-4xl">
            {t(dispatch.title)}
          </h1>
          <p className="mt-3 text-base leading-relaxed sm:text-lg" style={{ color: 'var(--text-secondary)' }}>
            {t(dispatch.subtitle)}
          </p>

          {/* Telemetry Stats */}
          {dispatch.stats && (
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {dispatch.stats.map((st) => (
                <div
                  key={st.value}
                  className="rounded-xl border p-3"
                  style={{
                    borderColor: 'var(--border-subtle)',
                    backgroundColor: 'var(--bg-elevated)',
                  }}
                >
                  <div className="font-mono-tech text-[10px] uppercase" style={{ color: 'var(--text-muted)' }}>
                    {t(st.label)}
                  </div>
                  <div className="font-mono-tech mt-1 text-sm font-extrabold text-[#00f0ff]">
                    {st.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Jammin-E TL;DR Banner */}
          <div
            className="mt-6 flex items-start gap-3.5 rounded-2xl border p-4"
            style={{
              borderColor: 'rgba(255, 93, 162, 0.45)',
              backgroundColor: 'rgba(255, 93, 162, 0.08)',
            }}
          >
            <img
              src="/art/emote-smug.png"
              alt="Jammin-E"
              className="h-14 w-14 shrink-0 rounded-xl border border-[#ff5da2]/50 object-cover [image-rendering:pixelated]"
            />
            <div>
              <div className="flex items-center gap-1.5 font-mono-tech text-xs font-extrabold text-[#ff5da2]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{t(UI_COPY.mesugakiTldrLabel)}</span>
              </div>
              <p className="mt-1 text-sm leading-relaxed font-medium">
                {t(dispatch.mesugakiTldr)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Body Sections */}
      <div className="mt-8 space-y-8">
        {dispatch.sections.map((section, i) => {
          const asideEmote = section.jamminAside
            ? JAMMIN_EMOTES.find((e) => e.mood === section.jamminAside?.mood) ?? JAMMIN_EMOTES[0]
            : null

          return (
            <section key={i} className="neon-panel rounded-2xl p-6 sm:p-8">
              <h2 className="font-display text-xl font-extrabold text-[#00f0ff] sm:text-2xl">
                {t(section.heading)}
              </h2>

              <div className="mt-4 space-y-4 text-[15px] leading-8" style={{ color: 'var(--text-primary)' }}>
                {section.paragraphs.map((p, idxP) => (
                  <p key={idxP}>{t(p)}</p>
                ))}
              </div>

              {section.codeSnippet && (
                <div className="mt-6 overflow-hidden rounded-xl border border-[#00f0ff]/30">
                  <div className="flex items-center justify-between bg-[#0b132b] px-4 py-2 font-mono-tech text-[11px] text-[#00f0ff]">
                    <span>{t(section.codeSnippet.caption)}</span>
                    <span className="uppercase opacity-70">{section.codeSnippet.lang}</span>
                  </div>
                  <pre
                    className="overflow-x-auto p-4 font-mono-tech text-xs leading-relaxed text-[#e2ecff]"
                    style={{ backgroundColor: 'var(--code-bg)' }}
                  >
                    <code>{section.codeSnippet.code}</code>
                  </pre>
                </div>
              )}

              {section.jamminAside && asideEmote && (
                <div
                  className="mt-6 flex items-start gap-3 rounded-2xl border border-dashed p-4"
                  style={{
                    borderColor: 'var(--accent-primary)',
                    backgroundColor: 'var(--badge-bg)',
                  }}
                >
                  <img
                    src={asideEmote.file}
                    alt={t(asideEmote.name)}
                    className="h-14 w-14 shrink-0 rounded-xl border border-[#00f0ff]/50 object-cover [image-rendering:pixelated]"
                  />
                  <div>
                    <div className="flex items-center gap-2 font-mono-tech text-[11px] font-extrabold text-[#00f0ff]">
                      <span>JAMMIN-E MARGINALIA</span>
                      <span className="font-jp text-[#ff5da2]">{asideEmote.jpTag}</span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed font-medium">
                      {t(section.jamminAside.text)}
                    </p>
                  </div>
                </div>
              )}
            </section>
          )
        })}
      </div>

      {/* Sources & Attribution Panel */}
      <section className="neon-panel mt-8 rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-2 font-mono-tech text-xs font-extrabold tracking-wider text-[#34a853] uppercase">
          <BookOpen className="h-4 w-4" />
          <span>{t(UI_COPY.sourcesLabel)}</span>
        </div>
        <div className="mt-4 space-y-3">
          {dispatch.sources.map((src, idxS) => (
            <div
              key={idxS}
              className="flex flex-wrap items-center justify-between gap-2 rounded-xl border p-3.5 text-sm"
              style={{
                borderColor: 'var(--border-subtle)',
                backgroundColor: 'var(--bg-elevated)',
              }}
            >
              <div>
                <div className="font-bold">
                  {src.outlet}
                  {src.author ? ` — ${src.author}` : ''}
                </div>
                <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                  {src.title} ({src.date})
                </div>
                {src.note && (
                  <div className="mt-1 text-xs italic" style={{ color: 'var(--text-muted)' }}>
                    {t(src.note)}
                  </div>
                )}
              </div>
              <a
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-lg border border-[#00f0ff]/40 px-3 py-1 font-mono-tech text-xs font-bold text-[#00f0ff] hover:bg-[#00f0ff] hover:text-[#070b16]"
              >
                <span>SOURCE</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Prev / Next */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {prevDispatch ? (
          <Link
            to={`/dispatches/${prevDispatch.slug}`}
            onClick={() => playSynth('click')}
            className="neon-panel neon-panel-interactive rounded-2xl p-4"
          >
            <div className="font-mono-tech text-[11px] text-[#00f0ff]">← PREV DISPATCH</div>
            <div className="mt-1 text-sm font-bold">{t(prevDispatch.title)}</div>
          </Link>
        ) : (
          <div />
        )}
        {nextDispatch && (
          <Link
            to={`/dispatches/${nextDispatch.slug}`}
            onClick={() => playSynth('click')}
            className="neon-panel neon-panel-interactive rounded-2xl p-4 text-right"
          >
            <div className="font-mono-tech text-[11px] text-[#ff5da2]">NEXT DISPATCH →</div>
            <div className="mt-1 text-sm font-bold">{t(nextDispatch.title)}</div>
          </Link>
        )}
      </div>
    </article>
  )
}
