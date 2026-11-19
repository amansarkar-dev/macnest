import { useEffect } from "react"
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom"
import { Logo } from "./Logo"

export function Layout() {
  const navigate = useNavigate()
  const location = useLocation()
  const discoverOn = location.pathname === "/discover" || location.pathname.startsWith("/apps/")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (!(event.metaKey || event.ctrlKey) || event.key.toLowerCase() !== "k") return
      event.preventDefault()
      const input = document.getElementById("app-search")
      if (input instanceof HTMLInputElement) {
        input.focus()
        input.select()
        return
      }
      navigate("/discover", { state: { focusSearch: true } })
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [navigate])

  useEffect(() => {
    if (!location.state || typeof location.state !== "object") return
    if (!("focusSearch" in location.state) || !location.state.focusSearch) return
    const input = document.getElementById("app-search")
    if (input instanceof HTMLInputElement) input.focus()
  }, [location])

  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="wrap header-inner">
          <Logo />
          <nav className="nav-links" aria-label="Primary">
            <NavLink to="/discover" className={discoverOn ? "on" : undefined}>
              Discover
            </NavLink>
            <NavLink to="/categories">Categories</NavLink>
            <NavLink to="/recent">Recently Added</NavLink>
          </nav>
          <NavLink to="/submit" className="btn btn-primary header-cta">
            Submit an App
          </NavLink>
        </div>
      </header>
      <main id="content">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>A curated shelf of apps built for the Mac.</p>
          </div>
          <div className="footer-col">
            <p className="footer-title">Macnest</p>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/discover">Discover</NavLink>
            <NavLink to="/submit">Submit an App</NavLink>
          </div>
          <div className="footer-col">
            <p className="footer-title">Elsewhere</p>
            <a href="https://x.com" target="_blank" rel="noreferrer">
              X
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="mailto:hello@macnest.app">Email</a>
          </div>
        </div>
        <div className="wrap fine">© 2026 Macnest. Listings are chosen by hand.</div>
      </footer>
    </>
  )
}
