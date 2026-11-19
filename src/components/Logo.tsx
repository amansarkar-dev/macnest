import { Link } from "react-router-dom"

export function Logo() {
  return (
    <Link to="/" className="logo">
      <svg viewBox="0 0 28 28" width="26" height="26" aria-hidden="true">
        <rect x="1.4" y="1.4" width="17.2" height="17.2" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <rect x="9.4" y="9.4" width="17.2" height="17.2" rx="4.5" fill="var(--bg)" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      Macnest
    </Link>
  )
}
