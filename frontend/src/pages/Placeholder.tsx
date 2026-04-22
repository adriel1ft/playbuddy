type PlaceholderProps = {
  title: string
  description: string
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <div className="flex flex-1 items-center justify-center px-6 pb-20 pt-10">
      <div className="glass-panel w-full max-w-xl px-10 py-14 text-center animate-fade-up">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-curator-accent-soft/80">
          Em breve
        </p>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-white/60">{description}</p>
      </div>
    </div>
  )
}
