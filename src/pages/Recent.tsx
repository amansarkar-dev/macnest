import { AppCard } from "../components/AppCard"
import { recentApps } from "../data/apps"
import { usePageTitle } from "../usePageTitle"

export function Recent() {
  usePageTitle("Recently added · Macnest")
  const apps = recentApps()

  return (
    <div className="wrap page">
      <header className="page-intro">
        <p className="eyebrow">New on Macnest</p>
        <h1>Recently added</h1>
        <p className="lede">
          The latest apps to land on the shelf — newest first. New here doesn’t always mean new to
          the world.
        </p>
      </header>
      <div className="catalog">
        {apps.map((app) => (
          <AppCard key={app.slug} app={app} showDate />
        ))}
      </div>
    </div>
  )
}
