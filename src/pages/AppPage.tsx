import { Link, useParams } from "react-router-dom"
import { AppCard } from "../components/AppCard"
import { AppIcon } from "../components/AppIcon"
import { categoryName, formatAdded, getApp, relatedApps } from "../data/apps"
import type { AppScreenshot } from "../types"
import { usePageTitle } from "../usePageTitle"
import { NotFound } from "./NotFound"

export function AppPage() {
  const { slug = "" } = useParams()
  const app = getApp(slug)
  usePageTitle(app ? `${app.name} · Macnest` : "Not found · Macnest")

  if (!app) return <NotFound />

  const related = relatedApps(app)
  const audience = app.audience?.trim() ?? ""
  const features = (app.features ?? []).map((item) => item.trim()).filter(Boolean)
  const screenshots = (app.screenshots ?? []).filter(isScreenshot)
  const showDetail = app.pricing.detail.trim().toLowerCase() !== app.pricing.label.trim().toLowerCase()
  const website = app.website.trim()

  const hasAside = Boolean(audience) || features.length > 0

  return (
    <div className="wrap page detail-page">
      <Link to="/discover" className="back">
        Discover
      </Link>

      <header className="detail-hero">
        <AppIcon app={app} size="xl" />
        <div className="detail-hero-copy">
          <div className="detail-kicker">
            <Link className="detail-chip" to={`/categories/${app.category}`}>
              {categoryName(app.category)}
            </Link>
            <p className="detail-byline">
              By {app.developer}
              <span className="detail-dot" aria-hidden="true" />
              Added {formatAdded(app.added, true)}
            </p>
          </div>
          <h1>{app.name}</h1>
          <p className="lede">{app.tagline}</p>
          {website && (
            <a className="btn btn-primary detail-site" href={website} target="_blank" rel="noreferrer">
              Official website
            </a>
          )}
        </div>
      </header>

      {screenshots.length > 0 && (
        <section className="detail-gallery" aria-label="Screenshots">
          <h2>Screenshots</h2>
          <div className="shot-grid" data-count={screenshots.length}>
            {screenshots.map((shot) => (
              <figure key={shot.src}>
                <img src={shot.src} alt={shot.alt} />
              </figure>
            ))}
          </div>
        </section>
      )}

      <div className="detail-stage">
        <div className={hasAside ? "detail-info is-split" : "detail-info"}>
          <section className="detail-card">
            <h2>What it does</h2>
            <p>{app.summary}</p>
          </section>
          {hasAside && (
            <div className="detail-stack">
              {audience && (
                <section className="detail-card">
                  <h2>Who it’s for</h2>
                  <p>{audience}</p>
                </section>
              )}
              {features.length > 0 && (
                <section className="detail-card">
                  <h2>Key features</h2>
                  <ul className="detail-list">
                    {features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          )}
        </div>
        <aside className="detail-card detail-price-card">
          <h2>Pricing</h2>
          <p className="detail-price">{app.pricing.label}</p>
          {showDetail && <p>{app.pricing.detail}</p>}
        </aside>
      </div>

      {related.length > 0 && (
        <section className="section detail-related">
          <h2>Related apps</h2>
          <div className="catalog">
            {related.map((item) => (
              <AppCard key={item.slug} app={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

function isScreenshot(shot: AppScreenshot) {
  return shot.src.trim().length > 0 && shot.alt.trim().length > 0
}
