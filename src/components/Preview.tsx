import type { PreviewKind } from "../types"

export function Preview({ kind, title }: { kind: PreviewKind; title: string }) {
  return (
    <div className={`preview preview-${kind}`} aria-hidden="true">
      <div className="preview-bar">
        <span className="dots">
          <i />
          <i />
          <i />
        </span>
        <em>{title}</em>
      </div>
      <div className="preview-body">{body(kind)}</div>
    </div>
  )
}

function body(kind: PreviewKind) {
  switch (kind) {
    case "launcher":
      return (
        <div className="pv-launcher">
          <div className="pv-query">Open Things</div>
          <ul>
            <li className="is-on">
              <span>Things 3</span>
              <kbd>↵</kbd>
            </li>
            <li>
              <span>New to-do in Today</span>
              <kbd>⌘N</kbd>
            </li>
            <li>
              <span>Calendar</span>
              <kbd>⌘2</kbd>
            </li>
            <li>
              <span>Search notes</span>
              <kbd>⌘F</kbd>
            </li>
          </ul>
        </div>
      )
    case "tasks":
      return (
        <ul className="pv-tasks">
          <li className="done">Outline the release notes</li>
          <li>Reply to the design review</li>
          <li>Ship the menu bar fix</li>
          <li className="later">Someday · Archive old builds</li>
        </ul>
      )
    case "capture":
      return (
        <div className="pv-shot">
          <div className="pv-sel">
            <span>1440 × 900</span>
          </div>
        </div>
      )
    case "canvas":
      return (
        <div className="pv-canvas">
          <ul className="pv-layers">
            <li className="is-on">Poster</li>
            <li>Type</li>
            <li>Grain</li>
            <li>Background</li>
          </ul>
          <div className="pv-art">
            <b />
            <b />
            <b />
          </div>
        </div>
      )
    case "mail":
      return (
        <ul className="pv-mail">
          <li>
            <strong>Studio</strong>
            <em>9:41</em>
            <span>The build looks ready to ship</span>
          </li>
          <li>
            <strong>Nora Hale</strong>
            <em>8:12</em>
            <span>Notes from yesterday’s review</span>
          </li>
          <li>
            <strong>Billing</strong>
            <em>Mon</em>
            <span>Receipt for the annual license</span>
          </li>
        </ul>
      )
  }
}
