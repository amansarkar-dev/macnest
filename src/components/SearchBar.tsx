export function SearchBar({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) {
  return (
    <form className="search" role="search" onSubmit={(event) => event.preventDefault()}>
      <label className="sr-only" htmlFor="app-search">
        Search apps
      </label>
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <circle cx="11" cy="11" r="6.25" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="m16 16 3.2 3.2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
      <input
        id="app-search"
        type="search"
        placeholder="Find your next favorite Mac app..."
        value={value}
        autoComplete="off"
        onChange={(event) => onChange(event.target.value)}
      />
      {value ? (
        <button type="button" className="icon-btn" onClick={() => onChange("")} aria-label="Clear search">
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path d="m7 7 10 10M17 7 7 17" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        </button>
      ) : (
        <kbd className="kbd">⌘K</kbd>
      )}
    </form>
  )
}
