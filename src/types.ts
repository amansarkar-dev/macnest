export const categories = [
  {
    slug: "productivity",
    name: "Productivity",
    description: "Writing, tasks, mail, and tools that protect a few hours of real attention.",
  },
  {
    slug: "developer-tools",
    name: "Developer Tools",
    description: "Editors, databases, terminals, and the quiet utilities around a build.",
  },
  {
    slug: "utilities",
    name: "Utilities",
    description: "Capture, windows, files, and the small apps you open without thinking.",
  },
  {
    slug: "design",
    name: "Design",
    description: "Image, color, and interface tools with a point of view.",
  },
  {
    slug: "ai",
    name: "AI",
    description: "Native apps that put models to work without leaving the desktop.",
  },
  {
    slug: "menubar",
    name: "Menubar Apps",
    description: "Software that lives at the top of the screen and stays out of the way.",
  },
] as const

export type CategorySlug = (typeof categories)[number]["slug"]

export type Mark =
  | "spark"
  | "check"
  | "camera"
  | "layers"
  | "mail"
  | "table"
  | "terminal"
  | "snow"
  | "wave"
  | "cube"
  | "frame"
  | "play"
  | "brackets"
  | "sun"
  | "audio"
  | "indent"
  | "sliders"
  | "type"
  | "anchor"
  | "dropper"
  | "pulse"
  | "route"
  | "cup"
  | "clapper"
  | "diamond"
  | "chat"
  | "eyeoff"

export type PreviewKind = "launcher" | "tasks" | "capture" | "canvas" | "mail"

export type MacApp = {
  slug: string
  name: string
  developer: string
  website: string
  category: CategorySlug
  tagline: string
  summary: string
  pricing: { label: string; detail: string }
  icon: { bg: string; fg: string; mark: Mark }
  preview?: PreviewKind
  featured?: number
  added: string
}
