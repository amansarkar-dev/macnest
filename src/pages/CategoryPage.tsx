import { Link, useParams } from "react-router-dom"
import { AppCard } from "../components/AppCard"
import { appsInCategory, categoryBySlug } from "../data/apps"
import { usePageTitle } from "../usePageTitle"
import { NotFound } from "./NotFound"

export function CategoryPage() {
  const { slug = "" } = useParams()
  const category = categoryBySlug(slug)
  usePageTitle(category ? `${category.name} · Macnest` : "Not found · Macnest")

  if (!category) return <NotFound />

  const list = appsInCategory(category.slug)

  return (
    <div className="wrap page">
      <header className="page-intro">
        <p className="eyebrow">
          <Link to="/categories">Categories</Link>
        </p>
        <h1>{category.name}</h1>
        <p className="lede">{category.description}</p>
      </header>
      <div className="catalog">
        {list.map((app) => (
          <AppCard key={app.slug} app={app} />
        ))}
      </div>
    </div>
  )
}
