import { Routes, Route, Link, useLocation } from "react-router-dom"
import { Home } from "@/pages/Home"
import { About } from "@/pages/About"
import { ThemeToggle } from "@/components/theme-toggle"
import { Package, FileCode } from "lucide-react"

export function App() {
  const location = useLocation()

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar Navigation */}
      <aside className="flex w-56 shrink-0 flex-col border-r border-border/40">
        <div className="border-b border-border/40 p-4">
          <div className="flex items-center gap-2">
            <Package className="size-5 text-foreground" />
            <span className="text-sm font-semibold text-foreground">
              Vite Shadcn
            </span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">React Template</p>
        </div>

        <nav className="flex-1 p-3">
          <div className="space-y-0.5">
            <Link
              to="/"
              className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors ${
                location.pathname === "/"
                  ? "bg-muted font-medium text-foreground"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              <Package className="size-4" />
              Getting Started
            </Link>
            <Link
              to="/about"
              className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors ${
                location.pathname === "/about"
                  ? "bg-muted font-medium text-foreground"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              <FileCode className="size-4" />
              Components
            </Link>
          </div>
        </nav>

        <div className="border-t border-border/40 p-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Theme</span>
            <ThemeToggle />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
