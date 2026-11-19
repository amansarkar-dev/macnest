import { CategoryIndex } from "../components/CategoryIndex"
import { usePageTitle } from "../usePageTitle"

export function Categories() {
  usePageTitle("Categories · Macnest")

  return (
    <div className="wrap page">
      <header className="page-intro">
        <p className="eyebrow">Browse</p>
        <h1>Categories</h1>
        <p className="lede">
          Six rooms, kept small on purpose. Productivity, developer tools, utilities, design, AI, and
          menu bar apps.
        </p>
      </header>
      <CategoryIndex />
    </div>
  )
}
