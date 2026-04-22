import { useState, type FormEvent, type KeyboardEvent } from 'react'
import { PlusIcon, SparklesIcon } from '../components/icons'

const DEFAULT_VIBES = ['80s', 'female vocalist', 'pop']
const MIN_SONGS = 3

export default function Discover() {
  const [songInput, setSongInput] = useState('')
  const [songs, setSongs] = useState<string[]>([])
  const [vibes, setVibes] = useState<string[]>(DEFAULT_VIBES)
  const [activeVibes, setActiveVibes] = useState<Set<string>>(
    new Set(['female vocalist']),
  )
  const [description, setDescription] = useState('')

  const addSong = (e?: FormEvent) => {
    e?.preventDefault()
    const value = songInput.trim()
    if (!value) return
    setSongs((prev) => [...prev, value])
    setSongInput('')
  }

  const removeSong = (idx: number) => {
    setSongs((prev) => prev.filter((_, i) => i !== idx))
  }

  const toggleVibe = (vibe: string) => {
    setActiveVibes((prev) => {
      const next = new Set(prev)
      if (next.has(vibe)) next.delete(vibe)
      else next.add(vibe)
      return next
    })
  }

  const handleDescriptionKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && description.trim()) {
      e.preventDefault()
      const newVibe = description.trim().toLowerCase()
      if (!vibes.includes(newVibe)) {
        setVibes((prev) => [...prev, newVibe])
        setActiveVibes((prev) => new Set(prev).add(newVibe))
      }
      setDescription('')
    }
  }

  const canGenerate = songs.length >= MIN_SONGS

  const handleGenerate = () => {
    if (!canGenerate) return
    // Mock: no backend wired up yet
    // eslint-disable-next-line no-console
    console.log('Generating playlist with', {
      songs,
      vibes: Array.from(activeVibes),
      description,
    })
  }

  return (
    <div className="flex flex-1 items-start justify-center px-6 pb-16 pt-10">
      <section className="glass-panel w-full max-w-2xl px-10 py-10 animate-fade-up">
        <form onSubmit={addSong} className="flex items-center gap-3">
          <div className="flex-1">
            <input
              value={songInput}
              onChange={(e) => setSongInput(e.target.value)}
              placeholder="Add a song (e.g. Gal Costa - Me faz bem)"
              className="w-full rounded-full bg-white px-6 py-3 text-sm text-curator-bg placeholder:text-curator-muted/80 outline-none focus:ring-2 focus:ring-curator-accent/50"
            />
          </div>
          <button
            type="submit"
            aria-label="Add song"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-curator-accent/30 text-curator-accent-soft shadow-glow-accent transition hover:bg-curator-accent/45"
          >
            <PlusIcon />
          </button>
        </form>

        <p className="mt-3 text-center text-xs text-curator-muted">
          {songs.length < MIN_SONGS
            ? `Add at least ${MIN_SONGS} songs so I can build your playlist`
            : `${songs.length} songs added. You can keep going or generate now.`}
        </p>

        {songs.length > 0 && (
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {songs.map((song, idx) => (
              <li
                key={`${song}-${idx}`}
                className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/80"
              >
                <span>{song}</span>
                <button
                  type="button"
                  onClick={() => removeSong(idx)}
                  className="text-white/40 transition group-hover:text-white"
                  aria-label={`Remove ${song}`}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-10">
          <h3 className="text-base font-semibold">What vibe are you going for?</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {vibes.map((vibe) => {
              const isActive = activeVibes.has(vibe)
              return (
                <button
                  key={vibe}
                  type="button"
                  onClick={() => toggleVibe(vibe)}
                  className={`chip ${isActive ? 'chip-active' : ''}`}
                >
                  {vibe}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-6">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onKeyDown={handleDescriptionKey}
            placeholder="Describe your vibe…"
            rows={3}
            className="w-full resize-none rounded-2xl border border-curator-border bg-black/30 px-5 py-4 text-sm text-white placeholder:text-curator-muted outline-none focus:border-curator-accent/40 focus:ring-2 focus:ring-curator-accent/20"
          />
        </div>

        <button
          type="button"
          onClick={handleGenerate}
          disabled={!canGenerate}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-accent-gradient py-4 text-base font-semibold text-curator-bg shadow-glow-accent transition hover:shadow-glow-soft disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          Generate Playlist
          <SparklesIcon />
        </button>
      </section>
    </div>
  )
}
