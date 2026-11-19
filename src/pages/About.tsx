import { Link } from "react-router-dom"
import { usePageTitle } from "../usePageTitle"

export function About() {
  usePageTitle("About · Macnest")

  return (
    <div className="wrap page">
      <article className="page-intro reading">
        <p className="eyebrow">About</p>
        <h1>A quieter place to find Mac software.</h1>
        <div className="prose">
          <p>
            Macnest is a curated shelf of apps built for macOS. The aim is simple: help people find
            software that is useful, carefully made, and easy to miss among cross-platform tools and
            launch-week noise.
          </p>
          <p>
            Listings are chosen by hand. A download count isn’t enough, and neither is a splashy
            debut. If an app feels at home on the Mac — in its shortcuts, its windows, and the way it
            stays out of the way — it belongs in the conversation.
          </p>
          <p>
            Macnest is an independent project. Developers can{" "}
            <Link to="/submit">submit an app</Link>, and readers can start with{" "}
            <Link to="/discover">the shelf</Link>. We don’t sell placement.
          </p>
        </div>
      </article>
    </div>
  )
}
