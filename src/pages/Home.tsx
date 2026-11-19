import { useSearchParams } from "react-router-dom"
import { AppCard } from "../components/AppCard"
import { CategoryIndex } from "../components/CategoryIndex"
import { DeveloperBand } from "../components/DeveloperBand"
import { FeaturedCard } from "../components/FeaturedCard"
import { SearchBar } from "../components/SearchBar"
import { SectionHead } from "../components/SectionHead"
import { Shelf } from "../components/Shelf"
import { apps, featuredApps, filterApps, recentApps } from "../data/apps"
import { usePageTitle } from "../usePageTitle"

export function Home() {
  usePageTitle("Macnest — Discover apps that make your Mac better")
  const [params, setParams] = useSearchParams()
  const query = params.get("q") ?? ""
  const featured = featuredApps()
  const [lead, ...rest] = featured
  const featuredSlugs = new Set(featured.map((app) => app.slug))
  const recent = recentApps().filter((app) => !featuredSlugs.has(app.slug)).slice(0, 8)
  const results = filterApps(apps, query)

  function setQuery(next: string) {
    if (next) setParams({ q: next }, { replace: true })
    else setParams({}, { replace: true })
  }

  return (
    <div className="home">
      <div className="wrap">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Native macOS software, chosen by hand</p>
            <h1>
              Discover apps that
              <br />
              make your Mac better.
            </h1>
            <p className="lede">
              A curated shelf of useful, well-made Mac apps — including the ones that never quite
              make it onto a crowded homepage.
            </p>
            <SearchBar value={query} onChange={setQuery} />
            <p className="hero-note" aria-live="polite">
              {query.trim()
                ? `${results.length} matching ${results.length === 1 ? "app" : "apps"}`
                : `${apps.length} apps on the shelf`}
            </p>
          </div>
          {!query.trim() && <Shelf apps={featured} />}
        </section>

        {query.trim() ? (
          <section className="section" aria-label="Search results">
            <SectionHead eyebrow="Search" title={`Results for “${query.trim()}”`} />
            {results.length === 0 ? (
              <div className="empty">
                <h2>Nothing on the shelf matches that.</h2>
                <p>Try a developer, a category, or a shorter word.</p>
              </div>
            ) : (
              <div className="catalog">
                {results.map((app) => (
                  <AppCard key={app.slug} app={app} />
                ))}
              </div>
            )}
          </section>
        ) : (
          <>
            <section className="section" aria-labelledby="featured-title">
              <SectionHead
                eyebrow="Featured"
                title="Worth a place on the dock"
                titleId="featured-title"
                action={{ to: "/discover", label: "Browse the shelf" }}
              />
              {lead && <FeaturedCard app={lead} lead />}
              <div className="feature-grid">
                {rest.map((app) => (
                  <FeaturedCard key={app.slug} app={app} />
                ))}
              </div>
            </section>

            <section className="section" aria-labelledby="recent-title">
              <SectionHead
                eyebrow="New on Macnest"
                title="Recently added"
                titleId="recent-title"
                action={{ to: "/recent", label: "View all" }}
              />
              <div className="catalog">
                {recent.map((app) => (
                  <AppCard key={app.slug} app={app} showDate />
                ))}
              </div>
            </section>

            <section className="section" aria-labelledby="categories-title">
              <SectionHead eyebrow="Browse" title="Categories" titleId="categories-title" />
              <CategoryIndex />
            </section>
          </>
        )}
      </div>
      {!query.trim() && <DeveloperBand />}
    </div>
  )
}
