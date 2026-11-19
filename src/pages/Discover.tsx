import { useSearchParams } from "react-router-dom"
import { AppCard } from "../components/AppCard"
import { SearchBar } from "../components/SearchBar"
import { apps, filterApps } from "../data/apps"
import { categories, type CategorySlug } from "../types"
import { usePageTitle } from "../usePageTitle"

export function Discover() {
  usePageTitle("Discover · Macnest")
  const [params, setParams] = useSearchParams()
  const query = params.get("q") ?? ""
  const requested = params.get("category") ?? ""
  const category = categories.some((item) => item.slug === requested)
    ? (requested as CategorySlug)
    : ""

  const scoped = category ? apps.filter((app) => app.category === category) : apps
  const results = filterApps(
    [...scoped].sort((a, b) => (a.featured ?? 99) - (b.featured ?? 99) || a.name.localeCompare(b.name)),
    query,
  )

  function write(nextQuery: string, nextCategory: string) {
    const next: Record<string, string> = {}
    if (nextQuery) next.q = nextQuery
    if (nextCategory) next.category = nextCategory
    setParams(next, { replace: true })
  }

  return (
    <div className="wrap page">
      <header className="page-intro">
        <p className="eyebrow">The shelf</p>
        <h1>Discover</h1>
        <p className="lede">
          Everything currently listed. Search by name, developer, or what the app is for.
        </p>
      </header>
      <SearchBar value={query} onChange={(value) => write(value, category)} />
      <div className="chips" role="toolbar" aria-label="Filter by category">
        <button
          type="button"
          className="chip"
          aria-pressed={category === ""}
          onClick={() => write(query, "")}
        >
          All
          <span>{apps.length}</span>
        </button>
        {categories.map((item) => {
          const count = apps.filter((app) => app.category === item.slug).length
          return (
            <button
              key={item.slug}
              type="button"
              className="chip"
              aria-pressed={category === item.slug}
              onClick={() => write(query, item.slug)}
            >
              {item.name}
              <span>{count}</span>
            </button>
          )
        })}
      </div>
      <p className="result-count" aria-live="polite">
        {results.length} {results.length === 1 ? "app" : "apps"}
      </p>
      {results.length === 0 ? (
        <div className="empty">
          <h2>Nothing on the shelf matches that.</h2>
          <p>Clear a filter, or try another word.</p>
        </div>
      ) : (
        <div className="catalog">
          {results.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      )}
    </div>
  )
}
