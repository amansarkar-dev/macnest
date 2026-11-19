import { Link } from "react-router-dom"

export function DeveloperBand() {
  return (
    <section className="band">
      <div className="band-inner">
        <div>
          <p className="eyebrow">For developers</p>
          <h2>Built a great Mac app?</h2>
          <p>
            Macnest is for software that feels at home on macOS. If yours is thoughtful, native, and
            worth a place on someone’s dock, we’d like to see it.
          </p>
        </div>
        <Link to="/submit" className="btn btn-light">
          Submit your app
        </Link>
      </div>
    </section>
  )
}
