import { Link } from "react-router-dom"
import { usePageTitle } from "../usePageTitle"

export function NotFound() {
  usePageTitle("Not found · Macnest")

  return (
    <div className="wrap page">
      <div className="page-intro missing">
        <p className="eyebrow">404</p>
        <h1>That page isn’t on the shelf.</h1>
        <p className="lede">The link may be old, or the app hasn’t been listed.</p>
        <Link className="btn btn-primary" to="/">
          Back home
        </Link>
      </div>
    </div>
  )
}
