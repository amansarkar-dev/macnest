import { Analytics } from "@vercel/analytics/react"
import { Route, Routes, useLocation } from "react-router-dom"
import { Layout } from "./components/Layout"
import { About } from "./pages/About"
import { AppPage } from "./pages/AppPage"
import { Categories } from "./pages/Categories"
import { CategoryPage } from "./pages/CategoryPage"
import { Discover } from "./pages/Discover"
import { EarlyAccess } from "./pages/EarlyAccess"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Recent } from "./pages/Recent"
import { Submit } from "./pages/Submit"

export default function App() {
  const { pathname } = useLocation()

  return (
    <>
      {pathname === "/" && <Analytics />}
      <Routes>
        <Route path="/" element={<EarlyAccess />} />
        <Route element={<Layout />}>
          <Route path="/shelf" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:slug" element={<CategoryPage />} />
          <Route path="/recent" element={<Recent />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/apps/:slug" element={<AppPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
