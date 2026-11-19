import { Link } from "react-router-dom"
import { categoryName } from "../data/apps"
import type { MacApp } from "../types"
import { AppIcon } from "./AppIcon"
import { Preview } from "./Preview"

export function FeaturedCard({ app, lead = false }: { app: MacApp; lead?: boolean }) {
  const showDetail = app.pricing.detail.toLowerCase() !== app.pricing.label.toLowerCase()

  return (
    <Link to={`/apps/${app.slug}`} className={lead ? "feature feature-lead" : "feature"}>
      <div className="feature-copy">
        <AppIcon app={app} size={lead ? "lg" : "md"} />
        <h3>{app.name}</h3>
        <p className="meta-line">
          <span>{categoryName(app.category)}</span>
          <span className="dot" aria-hidden="true" />
          <span>{app.pricing.label}</span>
          {showDetail && (
            <>
              <span className="dot" aria-hidden="true" />
              <span>{app.pricing.detail}</span>
            </>
          )}
        </p>
        <p className="summary">{app.tagline}</p>
        <p className="by">{app.developer}</p>
      </div>
      {app.preview && <Preview kind={app.preview} title={app.name} />}
    </Link>
  )
}
