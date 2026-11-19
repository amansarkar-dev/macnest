import { categories, type CategorySlug, type MacApp } from "../types"

export const apps: MacApp[] = [
  {
    slug: "raycast",
    name: "Raycast",
    developer: "Raycast",
    website: "https://www.raycast.com",
    category: "productivity",
    tagline: "A command bar for the things you do fifty times a day.",
    summary:
      "Raycast replaces the slow trip through Spotlight, Finder, and a pile of menu bar tools. Launch apps, run snippets, calculate, and keep the work you repeat a keystroke away.",
    pricing: { label: "Free / Pro", detail: "Freemium" },
    icon: { bg: "#161616", fg: "#f4f4f2", mark: "spark" },
    preview: "launcher",
    featured: 1,
    added: "2026-09-12",
  },
  {
    slug: "things-3",
    name: "Things 3",
    developer: "Cultured Code",
    website: "https://culturedcode.com/things/",
    category: "productivity",
    tagline: "A to-do app that knows when to stop adding features.",
    summary:
      "Things keeps today, upcoming, and someday in separate rooms. The Mac app is quick to file a task and calm enough that the list itself doesn’t become the work.",
    pricing: { label: "$49.99", detail: "One-time" },
    icon: { bg: "#2c6bed", fg: "#ffffff", mark: "check" },
    preview: "tasks",
    featured: 2,
    added: "2026-09-18",
  },
  {
    slug: "cleanshot-x",
    name: "CleanShot X",
    developer: "Make The Web",
    website: "https://cleanshot.com",
    category: "utilities",
    tagline: "Screenshots and short recordings, without the cleanup afterward.",
    summary:
      "CleanShot captures a window, a region, or a scrolling page and lets you annotate before anything hits the desktop. It is the utility people install and then forget the built-in tools.",
    pricing: { label: "Paid", detail: "Subscription" },
    icon: { bg: "#e25b2a", fg: "#fff8f4", mark: "camera" },
    preview: "capture",
    featured: 3,
    added: "2026-10-02",
  },
  {
    slug: "pixelmator-pro",
    name: "Pixelmator Pro",
    developer: "Pixelmator Team",
    website: "https://www.pixelmator.com/pro/",
    category: "design",
    tagline: "A full image editor that still feels like a Mac app.",
    summary:
      "Pixelmator Pro handles layers, color, and repair work in an interface that stays out of the file. It is the native alternative when a design task shouldn’t require a cross-platform suite.",
    pricing: { label: "$49.99", detail: "One-time" },
    icon: { bg: "#3c3834", fg: "#f3efe8", mark: "layers" },
    preview: "canvas",
    featured: 4,
    added: "2026-10-09",
  },
  {
    slug: "mimestream",
    name: "Mimestream",
    developer: "Mimestream",
    website: "https://mimestream.com",
    category: "productivity",
    tagline: "Gmail, rebuilt as a fast native Mac mail client.",
    summary:
      "Mimestream talks to Gmail’s API instead of forcing IMAP. Search is quick, shortcuts match the Mac, and the window doesn’t feel like a website stretched into an app.",
    pricing: { label: "Paid", detail: "Subscription" },
    icon: { bg: "#1f4f8a", fg: "#f4f7fb", mark: "mail" },
    preview: "mail",
    featured: 5,
    added: "2026-10-14",
  },
  {
    slug: "tableplus",
    name: "TablePlus",
    developer: "TablePlus",
    website: "https://tableplus.com",
    category: "developer-tools",
    tagline: "A native client for the databases you actually open.",
    summary:
      "TablePlus connects to Postgres, MySQL, SQLite, and the rest without a Java window. Editing rows, saving changes, and hopping between connections stays close to the metal.",
    pricing: { label: "Free / Pro", detail: "Freemium" },
    icon: { bg: "#1f6b5a", fg: "#f3faf7", mark: "table" },
    added: "2026-10-20",
  },
  {
    slug: "ghostty",
    name: "Ghostty",
    developer: "Mitchell Hashimoto",
    website: "https://ghostty.org",
    category: "developer-tools",
    tagline: "A terminal that takes the platform seriously.",
    summary:
      "Ghostty is fast, native on macOS, and configurable without a puzzle of config files you have to relearn. It is a daily driver for people who live in a shell and still want a Mac window.",
    pricing: { label: "Free", detail: "Open source" },
    icon: { bg: "#241f33", fg: "#f4f1ea", mark: "terminal" },
    added: "2026-11-09",
  },
  {
    slug: "ice",
    name: "Ice",
    developer: "Jordan Baird",
    website: "https://github.com/jordanbaird/Ice",
    category: "menubar",
    tagline: "Hide the menu bar items you don’t need right now.",
    summary:
      "Ice tucks overflowing menu bar icons behind a click. It is a small, free, and carefully made answer to a problem every long-time Mac user eventually has.",
    pricing: { label: "Free", detail: "Open source" },
    icon: { bg: "#d7e4f2", fg: "#1d3550", mark: "snow" },
    added: "2026-11-08",
  },
  {
    slug: "superwhisper",
    name: "Superwhisper",
    developer: "Superwhisper",
    website: "https://superwhisper.com",
    category: "ai",
    tagline: "Dictation that turns speech into text you can actually send.",
    summary:
      "Superwhisper records on your Mac, transcribes, and can tidy the result into a note, an email, or a prompt. It is built for people who think faster than they type.",
    pricing: { label: "Free / Pro", detail: "Freemium" },
    icon: { bg: "#5c3d8a", fg: "#f7f3fc", mark: "wave" },
    added: "2026-11-07",
  },
  {
    slug: "screen-studio",
    name: "Screen Studio",
    developer: "Screen Studio",
    website: "https://screen.studio",
    category: "utilities",
    tagline: "Product recordings that look edited without a timeline.",
    summary:
      "Screen Studio smooths the cursor, zooms to the action, and exports a polished recording of a Mac. It is aimed at people who ship demos more often than they open a video editor.",
    pricing: { label: "Paid", detail: "License" },
    icon: { bg: "#111111", fg: "#f5f5f5", mark: "clapper" },
    added: "2026-11-06",
  },
  {
    slug: "orbstack",
    name: "OrbStack",
    developer: "OrbStack",
    website: "https://orbstack.dev",
    category: "developer-tools",
    tagline: "Containers and Linux machines, without the heavy app.",
    summary:
      "OrbStack runs Docker containers and lightweight Linux VMs with a Mac-native interface and a much smaller footprint than the usual desktop runtime. Starting a project feels ordinary again.",
    pricing: { label: "Free / Pro", detail: "Freemium" },
    icon: { bg: "#123c72", fg: "#f3f7fc", mark: "cube" },
    added: "2026-11-05",
  },
  {
    slug: "shottr",
    name: "Shottr",
    developer: "Shottr",
    website: "https://shottr.cc",
    category: "utilities",
    tagline: "A precise screenshot tool for people who measure pixels.",
    summary:
      "Shottr is built for grabbing UI, reading text out of an image, and marking up a bug. It stays light, launches instantly, and respects the way designers and developers already work.",
    pricing: { label: "Free / Pro", detail: "Freemium" },
    icon: { bg: "#f2c14b", fg: "#2a2416", mark: "frame" },
    added: "2026-11-04",
  },
  {
    slug: "stats",
    name: "Stats",
    developer: "exelban",
    website: "https://github.com/exelban/stats",
    category: "menubar",
    tagline: "CPU, memory, disk, and battery, one click from the clock.",
    summary:
      "Stats puts live Mac hardware readings in the menu bar with graphs that stay readable. It is open source, detailed, and easy to ignore until something spikes.",
    pricing: { label: "Free", detail: "Open source" },
    icon: { bg: "#eceae4", fg: "#22211e", mark: "pulse" },
    added: "2026-11-03",
  },
  {
    slug: "macwhisper",
    name: "MacWhisper",
    developer: "Jordi Bruin",
    website: "https://goodsnooze.gumroad.com/l/macwhisper",
    category: "ai",
    tagline: "Local transcription for meetings, interviews, and voice notes.",
    summary:
      "MacWhisper runs speech-to-text on the Mac, including Whisper models that never have to leave the machine. Drop in audio and get a transcript you can search and export.",
    pricing: { label: "Free / Pro", detail: "Freemium" },
    icon: { bg: "#8c3d3d", fg: "#fbf4f2", mark: "audio" },
    added: "2026-11-02",
  },
  {
    slug: "lunar",
    name: "Lunar",
    developer: "Alin Panaitiu",
    website: "https://lunar.fyi",
    category: "utilities",
    tagline: "Brightness and contrast for the monitors macOS forgets.",
    summary:
      "Lunar controls external displays from the Mac, syncs brightness with the built-in screen, and handles the odd monitor that ignores hardware keys. A utility you notice only when it’s missing.",
    pricing: { label: "Free / Pro", detail: "Freemium" },
    icon: { bg: "#f0d7a8", fg: "#3a2e1b", mark: "sun" },
    added: "2026-11-01",
  },
  {
    slug: "bike",
    name: "Bike",
    developer: "Hog Bay Software",
    website: "https://www.hogbaysoftware.com/bike/",
    category: "productivity",
    tagline: "An outliner for thinking, not for managing a project.",
    summary:
      "Bike is a fast outliner with the typography of a writing app. Rows collapse, focus, and rearrange without the chrome of a notes platform or a task manager.",
    pricing: { label: "Paid", detail: "One-time" },
    icon: { bg: "#2f5d45", fg: "#f3faf6", mark: "indent" },
    added: "2026-10-30",
  },
  {
    slug: "nova",
    name: "Nova",
    developer: "Panic",
    website: "https://nova.app",
    category: "developer-tools",
    tagline: "Panic’s native editor for people who want a Mac IDE.",
    summary:
      "Nova is a code editor with extensions, Git, and a terminal, built by a company that has been making Mac software for decades. It is for developers who care how the tool feels at 11pm.",
    pricing: { label: "$99", detail: "One-time" },
    icon: { bg: "#c43b4a", fg: "#fff5f6", mark: "brackets" },
    added: "2026-10-28",
  },
  {
    slug: "sip",
    name: "Sip",
    developer: "Sip",
    website: "https://sipapp.io",
    category: "design",
    tagline: "A color picker that keeps a palette within reach.",
    summary:
      "Sip samples any pixel on the screen and formats the value the way your codebase expects. Palettes stay in the menu bar, ready for the next screen you’re matching.",
    pricing: { label: "Free / Pro", detail: "Freemium" },
    icon: { bg: "#e23d6b", fg: "#fff5f8", mark: "dropper" },
    added: "2026-10-26",
  },
  {
    slug: "hidden-bar",
    name: "Hidden Bar",
    developer: "Dwarves Foundation",
    website: "https://github.com/dwarvesf/hidden",
    category: "menubar",
    tagline: "A thinner way to collapse a crowded menu bar.",
    summary:
      "Hidden Bar splits menu bar icons into the ones you always want and the ones you sometimes do. It does one job, does it quietly, and stays free.",
    pricing: { label: "Free", detail: "Open source" },
    icon: { bg: "#4a4e57", fg: "#f4f5f7", mark: "eyeoff" },
    added: "2026-10-25",
  },
  {
    slug: "iina",
    name: "IINA",
    developer: "The IINA Project",
    website: "https://iina.io",
    category: "utilities",
    tagline: "The modern media player macOS should have shipped.",
    summary:
      "IINA plays almost anything, looks like a current Mac app, and supports picture-in-picture without a plugin hunt. It is the player people recommend and then stop thinking about.",
    pricing: { label: "Free", detail: "Open source" },
    icon: { bg: "#111111", fg: "#f6f6f6", mark: "play" },
    added: "2026-10-22",
  },
  {
    slug: "hookmark",
    name: "Hookmark",
    developer: "CogSci Apps",
    website: "https://hookproductivity.com",
    category: "productivity",
    tagline: "Link any file, mail, or note to the work it belongs with.",
    summary:
      "Hookmark creates bidirectional links between things on your Mac — a mail thread and a draft, a PDF and a task, a folder and a ticket. Context stays attached to the document.",
    pricing: { label: "Paid", detail: "License" },
    icon: { bg: "#245c63", fg: "#f2fbfb", mark: "anchor" },
    added: "2026-10-18",
  },
  {
    slug: "proxyman",
    name: "Proxyman",
    developer: "Proxyman",
    website: "https://proxyman.com",
    category: "developer-tools",
    tagline: "Inspect HTTP traffic in an app that feels native.",
    summary:
      "Proxyman captures requests from your Mac and the simulators around it. Breakpoints, rewrites, and a clear list make debugging a client less of a scavenger hunt.",
    pricing: { label: "Free / Pro", detail: "Freemium" },
    icon: { bg: "#0e6b57", fg: "#f3fbf8", mark: "route" },
    added: "2026-10-11",
  },
  {
    slug: "bartender",
    name: "Bartender",
    developer: "Surtees Studios",
    website: "https://www.macbartender.com",
    category: "menubar",
    tagline: "Decide which menu bar icons earn a permanent spot.",
    summary:
      "Bartender organizes the menu bar so status items appear when they matter and disappear when they don’t. It has been the polished version of this idea for years.",
    pricing: { label: "Paid", detail: "One-time" },
    icon: { bg: "#2b2b2b", fg: "#f6f3ee", mark: "sliders" },
    added: "2026-09-28",
  },
  {
    slug: "ia-writer",
    name: "iA Writer",
    developer: "Information Architects",
    website: "https://ia.net/writer",
    category: "productivity",
    tagline: "A writing window with almost nothing else in it.",
    summary:
      "iA Writer is a focused Markdown editor with reliable files, syntax highlighting for prose, and a point of view about distraction. It is for drafts, not for a second brain.",
    pricing: { label: "$49.99", detail: "One-time" },
    icon: { bg: "#f4f4f1", fg: "#1a1a1a", mark: "type" },
    added: "2026-09-22",
  },
  {
    slug: "sketch",
    name: "Sketch",
    developer: "Sketch",
    website: "https://www.sketch.com",
    category: "design",
    tagline: "The Mac-only design tool that never left the platform.",
    summary:
      "Sketch is still a native Mac app for interface design, symbols, and shared libraries. For teams that want the file on the machine, it remains a serious choice.",
    pricing: { label: "Paid", detail: "Subscription" },
    icon: { bg: "#f5c334", fg: "#2a2412", mark: "diamond" },
    added: "2026-09-15",
  },
  {
    slug: "enchanted",
    name: "Enchanted",
    developer: "August",
    website: "https://github.com/AugustDev/enchanted",
    category: "ai",
    tagline: "A native chat client for models running on your own terms.",
    summary:
      "Enchanted is a Mac app for talking to local and remote models, with conversations that live outside a browser tab. It is a small, focused front end for people who already have a model in mind.",
    pricing: { label: "Free", detail: "Open source" },
    icon: { bg: "#3a2f5c", fg: "#f6f3fb", mark: "chat" },
    added: "2026-11-10",
  },
  {
    slug: "amphetamine",
    name: "Amphetamine",
    developer: "William Gustafson",
    website: "https://apps.apple.com/app/amphetamine/id937984704",
    category: "utilities",
    tagline: "Keep the Mac awake for as long as the work needs.",
    summary:
      "Amphetamine prevents sleep while a download, a render, or a long-running script finishes. Triggers can follow an app, a display, or a timer, and then get out of the way.",
    pricing: { label: "Free", detail: "Free" },
    icon: { bg: "#f0efe9", fg: "#3a3228", mark: "cup" },
    added: "2026-09-08",
  },
]

const bySlug = new Map(apps.map((app) => [app.slug, app]))

export function getApp(slug: string) {
  return bySlug.get(slug)
}

export function categoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug)
}

export function categoryName(slug: CategorySlug) {
  return categories.find((category) => category.slug === slug)?.name ?? slug
}

export function appsInCategory(slug: CategorySlug) {
  return apps.filter((app) => app.category === slug)
}

export function featuredApps() {
  return apps
    .filter((app) => app.featured != null)
    .sort((a, b) => (a.featured ?? 0) - (b.featured ?? 0))
}

export function recentApps() {
  return [...apps].sort((a, b) => b.added.localeCompare(a.added))
}

export function filterApps(list: MacApp[], query: string) {
  const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
  if (tokens.length === 0) return list
  return list.filter((app) => {
    const haystack = [
      app.name,
      app.tagline,
      app.summary,
      app.developer,
      categoryName(app.category),
      app.pricing.label,
      app.pricing.detail,
    ]
      .join(" ")
      .toLowerCase()
    return tokens.every((token) => haystack.includes(token))
  })
}

export function relatedApps(app: MacApp, limit = 3) {
  const same = apps.filter((item) => item.category === app.category && item.slug !== app.slug)
  if (same.length >= limit) return same.slice(0, limit)
  const rest = apps.filter((item) => item.slug !== app.slug && item.category !== app.category)
  return [...same, ...rest].slice(0, limit)
}

export function formatAdded(iso: string, withYear = false) {
  const date = new Date(`${iso}T00:00:00`)
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    ...(withYear ? { year: "numeric" } : {}),
  })
}
