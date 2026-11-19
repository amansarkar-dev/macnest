import { Link } from "react-router-dom"
import { categoryName } from "../data/apps"
import type { MacApp } from "../types"
import { AppIcon } from "./AppIcon"

export function Shelf({ apps }: { apps: MacApp[] }) {
  return (
    <aside className="shelf" aria-label="Featured on the shelf">
      <p className="eyebrow">On the shelf</p>
      <ol>
        {apps.map((app, index) => (
          <li key={app.slug}>
            <Link to={`/apps/${app.slug}`}>
              <span className="idx">{String(index + 1).padStart(2, "0")}</span>
              <AppIcon app={app} size="sm" />
              <span>
                <strong>{app.name}</strong>
                <em>{categoryName(app.category)}</em>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </aside>
  )
}
