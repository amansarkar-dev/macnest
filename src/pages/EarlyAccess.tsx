import { useEffect, useState, type FormEvent } from "react"
import { deliverForm, type FormNotice } from "../deliverForm"
import "../early-access.css"
import { formConfig } from "../formConfig"
import { usePageTitle } from "../usePageTitle"

const devOk = "Thank you. Your app has been submitted, and we’ll review it personally."
const waitlistOk = "You’re on the list. We’ll be in touch when Macnest opens."

export function EarlyAccess() {
  usePageTitle("Macnest – Great Mac apps deserve to be discovered")
  const [count, setCount] = useState(0)
  const [devNotice, setDevNotice] = useState<FormNotice | null>(null)
  const [waitlistNotice, setWaitlistNotice] = useState<FormNotice | null>(null)
  const [devSending, setDevSending] = useState(false)
  const [waitlistSending, setWaitlistSending] = useState(false)

  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]')
    if (!meta) return
    const previous = meta.getAttribute("content")
    meta.setAttribute(
      "content",
      "A curated discovery platform for the best macOS apps. Developers: submit your Mac app for consideration.",
    )
    return () => {
      if (previous != null) meta.setAttribute("content", previous)
    }
  }, [])

  function onDeveloperSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    void deliverForm({
      form: event.currentTarget,
      endpoint: formConfig.submitEndpoint,
      fallbackEmail: formConfig.fallbackEmail,
      kind: "developer_submission",
      subject: "Macnest app submission",
      okMessage: devOk,
      setNotice: setDevNotice,
      setSending: setDevSending,
      onReset: () => setCount(0),
    })
  }

  function onWaitlistSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    void deliverForm({
      form: event.currentTarget,
      endpoint: formConfig.waitlistEndpoint,
      fallbackEmail: formConfig.fallbackEmail,
      kind: "waitlist",
      subject: "Macnest waitlist",
      okMessage: waitlistOk,
      setNotice: setWaitlistNotice,
      setSending: setWaitlistSending,
    })
  }

  return (
    <div className="early-access">
      <div className="wrap">
        <div className="top">
          <img
            className="brand"
            src="/macnest-wordmark.png"
            alt="Macnest"
            width={1030}
            height={315}
          />
          <span className="pill">Early access</span>
        </div>

        <header className="hero" id="top">
          <h1>
            Great Mac apps deserve to be <em>discovered.</em>
          </h1>
          <p className="lede">
            We’re building a curated discovery platform for the best macOS apps. A place for Mac users to find their next favourite app.
          </p>
          <a className="btn" href="#submit">
            Submit your app ↓
          </a>
        </header>

        <section className="panel" id="submit">
          <div className="narrow">
            <div className="intro">
              <h2>Built a Mac app?</h2>
              <p>Submit your app for consideration. We’ll personally review every submission.</p>
            </div>
            <form id="devForm" noValidate onSubmit={onDeveloperSubmit}>
              <div className="two">
                <div>
                  <label htmlFor="name">Your name</label>
                  <input id="name" name="name" autoComplete="name" required placeholder="Ada Lovelace" />
                </div>
                <div>
                  <label htmlFor="email">Email address</label>
                  <input id="email" name="email" type="email" autoComplete="email" required placeholder="ada@studio.com" />
                </div>
              </div>
              <div className="two">
                <div>
                  <label htmlFor="app">App name</label>
                  <input id="app" name="app_name" required placeholder="Your app" />
                </div>
                <div>
                  <label htmlFor="site">App website</label>
                  <input
                    id="site"
                    name="app_website"
                    type="url"
                    inputMode="url"
                    required
                    placeholder="https://yourapp.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="desc">Short app description</label>
                <textarea
                  id="desc"
                  name="description"
                  maxLength={300}
                  required
                  placeholder="What does it do, and who is it for?"
                  onInput={(event) => setCount(event.currentTarget.value.length)}
                />
                <div className="count">
                  <span id="n">{count}</span>/300
                </div>
              </div>
              <div className="hp" aria-hidden="true">
                <label>
                  Leave empty
                  <input name="website_url_confirm" tabIndex={-1} autoComplete="off" />
                </label>
              </div>
              <button className="btn" type="submit" disabled={devSending}>
                {devSending ? "Sending…" : "Submit your app"}
              </button>
              <Notice notice={devNotice} />
            </form>
            <p className="fine">Free to submit. Every app is reviewed. Not every submission gets featured.</p>
          </div>
        </section>

        <section className="alt">
          <h2>Just here to discover great Mac apps?</h2>
          <p>Join the waitlist and we’ll let you know when Macnest opens.</p>
          <form className="wl" id="wlForm" noValidate onSubmit={onWaitlistSubmit}>
            <input
              type="email"
              name="email"
              required
              aria-label="Email address"
              autoComplete="email"
              placeholder="you@email.com"
            />
            <div className="hp" aria-hidden="true">
              <input name="website_url_confirm" tabIndex={-1} autoComplete="off" />
            </div>
            <button className="btn ghost" type="submit" disabled={waitlistSending}>
              {waitlistSending ? "Sending…" : "Join the waitlist"}
            </button>
          </form>
          <Notice notice={waitlistNotice} className="wlstatus" />
        </section>

        <footer>
          <span>© 2026 Macnest</span>
          <span>Made for the Mac, by people who love it.</span>
        </footer>
      </div>
    </div>
  )
}

function Notice({ notice, className = "" }: { notice: FormNotice | null; className?: string }) {
  const [copied, setCopied] = useState(false)
  const [copyFailed, setCopyFailed] = useState(false)

  if (!notice) {
    return <div className={`status ${className}`.trim()} role="status" aria-live="polite" />
  }

  const copyText = "copyText" in notice ? notice.copyText : undefined
  const title = "title" in notice ? notice.title : undefined

  return (
    <div className={`status show ${notice.tone} ${className}`.trim()} role="status" aria-live="polite">
      {title ? <b>{title}</b> : null}
      {notice.body}
      {copyText ? (
        <button
          type="button"
          className="btn ghost"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(copyText)
              setCopied(true)
              setCopyFailed(false)
            } catch {
              setCopyFailed(true)
              setCopied(false)
            }
          }}
        >
          {copyFailed ? "Copy failed" : copied ? "Copied" : "Copy my details"}
        </button>
      ) : null}
    </div>
  )
}
