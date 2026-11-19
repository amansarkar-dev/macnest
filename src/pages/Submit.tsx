import { useState, type FormEvent } from "react"
import { categories } from "../types"
import { usePageTitle } from "../usePageTitle"

export function Submit() {
  usePageTitle("Submit an app · Macnest")
  const [sentName, setSentName] = useState("")
  const [error, setError] = useState("")

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") ?? "").trim()
    const website = String(data.get("website") ?? "").trim()
    const category = String(data.get("category") ?? "").trim()
    const description = String(data.get("description") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()

    if (!name || !website || !category || !email) {
      setError("Add the app name, website, category, and your email.")
      return
    }
    if (description.length < 20) {
      setError("Tell us a little more — at least a sentence about what the app does.")
      return
    }
    setError("")
    setSentName(name)
  }

  if (sentName) {
    return (
      <div className="wrap page">
        <div className="page-intro narrow thanks">
          <p className="eyebrow">Submission</p>
          <h1>Thanks — we’ll take a look.</h1>
          <p className="lede">
            Macnest is curated by hand. If {sentName} fits the shelf, you’ll hear from us.
          </p>
          <button type="button" className="btn btn-primary" onClick={() => setSentName("")}>
            Submit another
          </button>
          <p className="fine-inline">Preview build. This form doesn’t send anything yet.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="wrap page">
      <header className="page-intro narrow">
        <p className="eyebrow">For developers</p>
        <h1>Submit an app</h1>
        <p className="lede">
          Tell us about something you built for the Mac. We read every note. A submission is a
          request, not a guaranteed listing.
        </p>
      </header>
      <form className="form narrow" onSubmit={onSubmit}>
        <div className="form-row">
          <label className="field">
            App name
            <input name="name" required placeholder="Things 3" autoComplete="off" />
          </label>
          <label className="field">
            Website
            <input name="website" type="url" required placeholder="https://" autoComplete="url" />
          </label>
        </div>
        <div className="form-row">
          <label className="field">
            Category
            <select name="category" required defaultValue="">
              <option value="" disabled>
                Choose a category
              </option>
              {categories.map((category) => (
                <option key={category.slug} value={category.slug}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            Pricing
            <input name="pricing" placeholder="Free, paid, or freemium" autoComplete="off" />
          </label>
        </div>
        <label className="field">
          Short description
          <textarea
            name="description"
            required
            rows={5}
            placeholder="What it does, who it’s for, and why it belongs on a Mac."
          />
        </label>
        <label className="field">
          Your email
          <input name="email" type="email" required placeholder="you@studio.com" autoComplete="email" />
        </label>
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Submit your app
          </button>
          <p className="fine-inline">Preview build. This form doesn’t send anything yet.</p>
        </div>
      </form>
    </div>
  )
}
