import { Link } from "react-router-dom"
import { appsInCategory } from "../data/apps"
import { categories } from "../types"

export function CategoryIndex() {
  return (
    <ol className="cat-index">
      {categories.map((category, index) => {
        const count = appsInCategory(category.slug).length
        return (
          <li key={category.slug}>
            <Link to={`/categories/${category.slug}`}>
              <span className="idx">{String(index + 1).padStart(2, "0")}</span>
              <span className="cat-copy">
                <strong>{category.name}</strong>
                <em>{category.description}</em>
              </span>
              <span className="count">
                {count} {count === 1 ? "app" : "apps"}
              </span>
            </Link>
          </li>
        )
      })}
    </ol>
  )
}
