import { Link } from "react-router-dom"

export function SectionHead({
  eyebrow,
  title,
  action,
  titleId,
}: {
  eyebrow: string
  title: string
  action?: { to: string; label: string }
  titleId?: string
}) {
  return (
    <div className="section-head">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={titleId}>{title}</h2>
      </div>
      {action && (
        <Link className="section-link" to={action.to}>
          {action.label}
        </Link>
      )}
    </div>
  )
}
