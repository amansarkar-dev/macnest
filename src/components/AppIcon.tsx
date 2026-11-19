import type { CSSProperties } from "react"
import type { MacApp, Mark } from "../types"

export function AppIcon({ app, size = "md" }: { app: MacApp; size?: "sm" | "md" | "lg" | "xl" }) {
  return (
    <span
      className={`app-icon ${size}`}
      style={{ background: app.icon.bg, color: app.icon.fg, "--icon-bg": app.icon.bg } as CSSProperties}
      aria-hidden="true"
    >
      <MarkIcon mark={app.icon.mark} />
    </span>
  )
}

function MarkIcon({ mark }: { mark: Mark }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  }

  switch (mark) {
    case "spark":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M12 2.6 13.7 8.7 20 10.3 13.7 11.9 12 18 10.3 11.9 4 10.3 10.3 8.7Z" />
          <circle cx="18" cy="5.2" r="1.15" fill="currentColor" />
        </svg>
      )
    case "check":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="m8.2 12.2 2.6 2.6 5-5.2" />
        </svg>
      )
    case "camera":
      return (
        <svg {...common}>
          <path d="M8.2 7.2 9.4 5.4h5.2l1.2 1.8" />
          <rect x="4" y="7.2" width="16" height="11.2" rx="2.2" />
          <circle cx="12" cy="12.8" r="2.7" />
        </svg>
      )
    case "layers":
      return (
        <svg {...common}>
          <path d="m12 4 8 3.6L12 11.2 4 7.6Z" />
          <path d="m4 12 8 3.6 8-3.6" />
          <path d="m4 16 8 3.6 8-3.6" />
        </svg>
      )
    case "mail":
      return (
        <svg {...common}>
          <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
          <path d="m4.2 7 7.8 6 7.8-6" />
        </svg>
      )
    case "table":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M4 9.2h16M4 14.2h16M10 4v16" />
        </svg>
      )
    case "terminal":
      return (
        <svg {...common}>
          <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
          <path d="m7 9 3.2 2.8L7 14.6M12.2 15.2H17" />
        </svg>
      )
    case "snow":
      return (
        <svg {...common}>
          <path d="M12 3.5v17M5.2 7.2l13.6 9.6M18.8 7.2 5.2 16.8" />
          <path d="M12 7.2 10.4 5.2M12 7.2 13.6 5.2M12 16.8 10.4 18.8M12 16.8 13.6 18.8" />
        </svg>
      )
    case "wave":
      return (
        <svg {...common}>
          <path d="M3 14c1.6-4.2 3.2-4.2 4.8 0s3.2 4.2 4.8 0 3.2-4.2 4.8 0 3-4.2 3.6 0" />
        </svg>
      )
    case "cube":
      return (
        <svg {...common}>
          <path d="m12 3.2 8 4.2v8.2l-8 4.2-8-4.2V7.4Z" />
          <path d="M12 11.2v8.6M12 11.2 20 7.4M12 11.2 4 7.4" />
        </svg>
      )
    case "frame":
      return (
        <svg {...common}>
          <path d="M9 4.5H6.2A1.7 1.7 0 0 0 4.5 6.2V9M15 4.5h2.8a1.7 1.7 0 0 1 1.7 1.7V9M9 19.5H6.2a1.7 1.7 0 0 1-1.7-1.7V15M15 19.5h2.8a1.7 1.7 0 0 0 1.7-1.7V15" />
        </svg>
      )
    case "play":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="m10.2 9.1 5.2 2.9-5.2 2.9Z" fill="currentColor" stroke="none" />
        </svg>
      )
    case "brackets":
      return (
        <svg {...common}>
          <path d="M9.2 7 6 12l3.2 5M14.8 7 18 12l-3.2 5" />
        </svg>
      )
    case "sun":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3.2" />
          <path d="M12 3.6v2.1M12 18.3v2.1M3.6 12h2.1M18.3 12h2.1M6.1 6.1l1.5 1.5M16.4 16.4l1.5 1.5M17.9 6.1l-1.5 1.5M7.6 16.4 6.1 17.9" />
        </svg>
      )
    case "audio":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="10" width="2.5" height="4" rx="1" fill="currentColor" />
          <rect x="8.6" y="7" width="2.5" height="10" rx="1" fill="currentColor" />
          <rect x="13.2" y="4.5" width="2.5" height="15" rx="1" fill="currentColor" />
          <rect x="17.8" y="8" width="2.5" height="8" rx="1" fill="currentColor" />
        </svg>
      )
    case "indent":
      return (
        <svg {...common}>
          <path d="M4.5 7h15M7.5 12h12M10.5 17h9" />
        </svg>
      )
    case "sliders":
      return (
        <svg {...common}>
          <path d="M4 8h16M4 12h16M4 16h16" />
          <circle cx="15" cy="8" r="1.7" fill="var(--icon-bg, transparent)" />
          <circle cx="9" cy="12" r="1.7" fill="var(--icon-bg, transparent)" />
          <circle cx="13" cy="16" r="1.7" fill="var(--icon-bg, transparent)" />
        </svg>
      )
    case "type":
      return (
        <svg {...common}>
          <path d="M6 6.5h12M12 6.5v12M8.5 18.5h7" />
        </svg>
      )
    case "anchor":
      return (
        <svg {...common}>
          <circle cx="12" cy="6.2" r="2" />
          <path d="M12 8.2v10.2M8 12.4h8" />
          <path d="M7.2 14.8a4.8 4.8 0 0 0 9.6 0" />
        </svg>
      )
    case "dropper":
      return (
        <svg {...common}>
          <path d="m14 5 5 5" />
          <path d="m13.2 6.4-6.4 6.4a2.6 2.6 0 0 0 0 3.7l.5.5" />
          <path d="m8.2 15.6 2.3 2.3M7 19.2l-1.6 1.6" />
        </svg>
      )
    case "pulse":
      return (
        <svg {...common}>
          <path d="M3 12h3.6l2.2-5.2 4.2 10.4L15.2 12H21" />
        </svg>
      )
    case "route":
      return (
        <svg {...common}>
          <circle cx="6.5" cy="7" r="2" />
          <circle cx="17" cy="16.5" r="2" />
          <path d="M8.4 8.2c2.8.4 3.6 2.4 4.2 4.2.7 2 2 3.2 4.2 3.4" />
        </svg>
      )
    case "cup":
      return (
        <svg {...common}>
          <path d="M6 8h9.5v5.2a3.6 3.6 0 0 1-3.6 3.6H9.6A3.6 3.6 0 0 1 6 13.2Z" />
          <path d="M15.5 9.2h1.4a2.3 2.3 0 0 1 0 4.6H15.5" />
          <path d="M7 20.2h10" />
        </svg>
      )
    case "clapper":
      return (
        <svg {...common}>
          <rect x="3.8" y="8" width="16.4" height="11" rx="2" />
          <path d="m4.2 8 2.6-3.6h3.2L7.6 8M11.2 8l2.6-3.6h3.4L14.6 8" />
        </svg>
      )
    case "diamond":
      return (
        <svg {...common}>
          <path d="m12 3.2 7.2 8.8L12 20.8 4.8 12Z" />
        </svg>
      )
    case "chat":
      return (
        <svg {...common}>
          <path d="M5 6.2h13.2A1.8 1.8 0 0 1 20 8v6.2a1.8 1.8 0 0 1-1.8 1.8H9.2L5.2 19.6v-3.6H5A1.8 1.8 0 0 1 3.2 14.2V8A1.8 1.8 0 0 1 5 6.2Z" />
        </svg>
      )
    case "eyeoff":
      return (
        <svg {...common}>
          <path d="M3.5 12S6.8 7.2 12 7.2 20.5 12 20.5 12 17.2 16.8 12 16.8 3.5 12 3.5 12Z" />
          <circle cx="12" cy="12" r="2" />
          <path d="m5 18 14-12" />
        </svg>
      )
  }
}
