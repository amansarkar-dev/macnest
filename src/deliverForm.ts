export type FormNotice =
  | { tone: "ok"; body: string }
  | { tone: "err" | ""; title: string; body: string; copyText?: string }

function detailsText(data: Record<string, string>) {
  return Object.entries(data)
    .filter(([key]) => !key.startsWith("_") && key !== "website_url_confirm")
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n")
}

export async function deliverForm({
  form,
  endpoint,
  fallbackEmail,
  kind,
  subject,
  okMessage,
  setNotice,
  setSending,
  onReset,
}: {
  form: HTMLFormElement
  endpoint: string
  fallbackEmail: string
  kind: string
  subject: string
  okMessage: string
  setNotice: (notice: FormNotice) => void
  setSending: (sending: boolean) => void
  onReset?: () => void
}) {
  const data = Object.fromEntries(new FormData(form)) as Record<string, string>

  if (data.website_url_confirm) {
    form.reset()
    onReset?.()
    setNotice({ tone: "ok", body: okMessage })
    return
  }

  if (!form.checkValidity()) {
    form.reportValidity()
    return
  }

  data._kind = kind
  data._sent_at = new Date().toISOString()
  setSending(true)

  try {
    if (endpoint) {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      form.reset()
      onReset?.()
      setNotice({ tone: "ok", body: okMessage })
    } else if (fallbackEmail) {
      const body = detailsText(data)
      location.href = `mailto:${fallbackEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setNotice({
        tone: "",
        title: "Almost there.",
        body: "Your email app should have opened with your details. Please press send. We haven’t received anything until you do.",
      })
    } else {
      setNotice({
        tone: "err",
        title: "Not sent. This form isn’t connected yet.",
        body: "Nothing has been saved or received. Please check back soon.",
        copyText: detailsText(data),
      })
    }
  } catch {
    setNotice({
      tone: "err",
      title: "Something went wrong.",
      body: "Your submission wasn’t sent. Please try again in a moment.",
    })
  } finally {
    setSending(false)
  }
}
