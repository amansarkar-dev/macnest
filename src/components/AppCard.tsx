import { Link } from "react-router-dom"
import { categoryName, formatAdded } from "../data/apps"
import type { MacApp } from "../types"
import { AppIcon } from "./AppIcon"

export function AppCard({ app, showDate = false }: { app: MacApp; showDate?: boolean }) {
  return (
    <Link to={`/apps/${app.slug}`} className="app-card">
      <div className="app-card-top">
        <AppIcon app={app} size="md" />
        <div className="app-card-copy">
          {showDate && <p className="added">{formatAdded(app.added)}</p>}
          <h3>{app.name}</h3>
          <p className="tagline">{app.tagline}</p>
        </div>
      </div>
      <p className="app-card-meta">
        <span>{categoryName(app.category)}</span>
        <span>{app.pricing.label}</span>
      </p>
    </Link>
  )
}
