import { Link, useParams } from "react-router-dom"
import { AppCard } from "../components/AppCard"
import { AppIcon } from "../components/AppIcon"
import { categoryName, formatAdded, getApp, relatedApps } from "../data/apps"
import { usePageTitle } from "../usePageTitle"
import { NotFound } from "./NotFound"

export function AppPage() {
  const { slug = "" } = useParams()
  const app = getApp(slug)
  usePageTitle(app ? `${app.name} · Macnest` : "Not found · Macnest")

  if (!app) return <NotFound />

  const related = relatedApps(app)
  const showDetail = app.pricing.detail.toLowerCase() !== app.pricing.label.toLowerCase()

  return (
    <div className="wrap page">
      <Link to="/discover" className="back">
        Discover
      </Link>
      <article className="detail">
        <AppIcon app={app} size="xl" />
        <div className="detail-copy">
          <p className="eyebrow">{categoryName(app.category)}</p>
          <h1>{app.name}</h1>
          <p className="lede">{app.tagline}</p>
          <p className="meta-line">
            <span>{app.pricing.label}</span>
            {showDetail && (
              <>
                <span className="dot" aria-hidden="true" />
                <span>{app.pricing.detail}</span>
              </>
            )}
            <span className="dot" aria-hidden="true" />
            <span>macOS</span>
            <span className="dot" aria-hidden="true" />
            <span>Added {formatAdded(app.added, true)}</span>
          </p>
          <p className="prose-lead">{app.summary}</p>
          <p className="by">
            By {app.developer}
          </p>
          <div className="detail-actions">
            <a className="btn btn-primary" href={app.website} target="_blank" rel="noreferrer">
              Visit website
            </a>
            <Link className="btn btn-ghost" to={`/categories/${app.category}`}>
              More in {categoryName(app.category)}
            </Link>
          </div>
        </div>
      </article>
      <section className="section">
        <h2>Also on the shelf</h2>
        <div className="catalog">
          {related.map((item) => (
            <AppCard key={item.slug} app={item} />
          ))}
        </div>
      </section>
    </div>
  )
}
