import { NavLink } from 'react-router-dom'
import {
  CompassIcon,
  LibraryIcon,
  PaletteIcon,
  UserIcon,
} from './icons'

const navItems = [
  { to: '/', label: 'Discover', icon: CompassIcon, end: true },
  { to: '/library', label: 'Library', icon: LibraryIcon },
  { to: '/moods', label: 'Moods', icon: PaletteIcon },
  { to: '/profile', label: 'Profile', icon: UserIcon },
]

type SidebarProps = {
  onNewMix?: () => void
}

export default function Sidebar({ onNewMix }: SidebarProps) {
  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col justify-between border-r border-curator-border bg-curator-panel/60 px-6 py-8 backdrop-blur-xl">
      <div className="flex flex-col gap-10">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Playbuddy</h1>
          <p className="mt-1 text-[10px] font-medium tracking-[0.22em] text-curator-muted">
            PREMIUM INTELLIGENCE
          </p>
        </div>

        <nav className="flex flex-col gap-1">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `nav-item relative ${isActive ? 'nav-item-active' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute -left-6 top-1/2 h-6 w-[2px] -translate-y-1/2 rounded-full bg-curator-accent shadow-glow-accent" />
                  )}
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                      isActive
                        ? 'bg-curator-accent/20 text-curator-accent-soft'
                        : 'bg-white/[0.03] text-white/70'
                    }`}
                  >
                    <Icon />
                  </span>
                  <span className="text-sm font-medium">{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      <button
        type="button"
        onClick={onNewMix}
        className="group relative overflow-hidden rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-curator-bg shadow-glow-accent transition hover:shadow-glow-soft"
      >
        <span className="relative z-10">New Mix</span>
        <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
      </button>
    </aside>
  )
}
