import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const baseProps: IconProps = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const CompassIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <circle cx="12" cy="12" r="9" />
    <polygon points="15.5 8.5 12.5 14.5 8.5 15.5 9.5 9.5" />
  </svg>
)

export const LibraryIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <rect x="4" y="4" width="6" height="16" rx="1.5" />
    <rect x="12" y="4" width="4" height="16" rx="1.5" />
    <path d="M18 4.5l3 15.2" />
  </svg>
)

export const PaletteIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M12 3a9 9 0 1 0 0 18c1.2 0 1.5-1 1.5-1.8 0-1.3-1-1.3-1-2.5 0-.8.6-1.2 1.3-1.2H16a5 5 0 0 0 5-5C21 6.4 17 3 12 3z" />
    <circle cx="7.5" cy="11" r="1" fill="currentColor" />
    <circle cx="10" cy="7.5" r="1" fill="currentColor" />
    <circle cx="14.5" cy="7.5" r="1" fill="currentColor" />
    <circle cx="17" cy="11" r="1" fill="currentColor" />
  </svg>
)

export const UserIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
  </svg>
)

export const UserCircleIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="10" r="3" />
    <path d="M6 19c1.2-2.2 3.5-3.5 6-3.5s4.8 1.3 6 3.5" />
  </svg>
)

export const PlusIcon = (props: IconProps) => (
  <svg {...baseProps} strokeWidth={2.4} {...props}>
    <path d="M12 5v14M5 12h14" />
  </svg>
)

export const SparklesIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
    <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />
  </svg>
)
