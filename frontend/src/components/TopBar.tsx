import { UserCircleIcon } from './icons'

type TopBarProps = {
  title: string
}

export default function TopBar({ title }: TopBarProps) {
  return (
    <header className="flex items-center justify-between px-10 pt-8">
      <h2 className="text-xl font-semibold text-curator-accent-soft">{title}</h2>
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-curator-border bg-white/[0.02] text-white/70 transition hover:text-white"
        aria-label="Profile"
      >
        <UserCircleIcon width={22} height={22} />
      </button>
    </header>
  )
}
