import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Check, Copy, Download, Trash2, ArrowRight } from "lucide-react"

export function Home() {
  return (
    <div className="max-w-6xl p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Component Showcase
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui components integrated with Vite, React 19, and TypeScript
        </p>
      </div>

      {/* Component Grid */}
      <div className="space-y-8">
        {/* Button Variants */}
        <section>
          <div className="mb-4">
            <h2 className="mb-1 text-sm font-medium text-foreground">
              Button Variants
            </h2>
            <p className="text-xs text-muted-foreground">
              Multiple variants for different contexts
            </p>
          </div>
          <div className="rounded-lg border border-border/40 bg-muted/20 p-6">
            <div className="flex flex-wrap gap-3">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>
        </section>

        {/* Button Sizes */}
        <section>
          <div className="mb-4">
            <h2 className="mb-1 text-sm font-medium text-foreground">
              Button Sizes
            </h2>
            <p className="text-xs text-muted-foreground">
              From extra small to large
            </p>
          </div>
          <div className="rounded-lg border border-border/40 bg-muted/20 p-6">
            <div className="flex flex-wrap items-center gap-3">
              <Button size="xs">Extra Small</Button>
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>
        </section>

        {/* Buttons with Icons */}
        <section>
          <div className="mb-4">
            <h2 className="mb-1 text-sm font-medium text-foreground">
              Buttons with Icons
            </h2>
            <p className="text-xs text-muted-foreground">
              Icons from lucide-react
            </p>
          </div>
          <div className="rounded-lg border border-border/40 bg-muted/20 p-6">
            <div className="flex flex-wrap gap-3">
              <Button>
                <Check />
                Confirm
              </Button>
              <Button variant="outline">
                <Copy />
                Copy
              </Button>
              <Button variant="secondary">
                <Download />
                Download
              </Button>
              <Button variant="destructive">
                <Trash2 />
                Delete
              </Button>
              <Button variant="ghost">
                Continue
                <ArrowRight />
              </Button>
            </div>
          </div>
        </section>

        {/* Icon Buttons */}
        <section>
          <div className="mb-4">
            <h2 className="mb-1 text-sm font-medium text-foreground">
              Icon Buttons
            </h2>
            <p className="text-xs text-muted-foreground">
              Square buttons for icon-only actions
            </p>
          </div>
          <div className="rounded-lg border border-border/40 bg-muted/20 p-6">
            <div className="flex flex-wrap items-center gap-3">
              <Button size="icon-xs" variant="outline">
                <Copy />
              </Button>
              <Button size="icon-sm" variant="outline">
                <Copy />
              </Button>
              <Button size="icon" variant="outline">
                <Copy />
              </Button>
              <Button size="icon-lg" variant="outline">
                <Copy />
              </Button>
            </div>
          </div>
        </section>

        {/* Button States */}
        <section>
          <div className="mb-4">
            <h2 className="mb-1 text-sm font-medium text-foreground">
              Button States
            </h2>
            <p className="text-xs text-muted-foreground">
              Disabled and loading states
            </p>
          </div>
          <div className="rounded-lg border border-border/40 bg-muted/20 p-6">
            <div className="flex flex-wrap gap-3">
              <Button disabled>Disabled</Button>
              <Button variant="outline" disabled>
                Disabled Outline
              </Button>
              <Button variant="secondary" disabled>
                Disabled Secondary
              </Button>
            </div>
          </div>
        </section>

        {/* Theme Toggle Component */}
        <section>
          <div className="mb-4">
            <h2 className="mb-1 text-sm font-medium text-foreground">
              Theme Toggle
            </h2>
            <p className="text-xs text-muted-foreground">
              Custom component for light/dark mode switching
            </p>
          </div>
          <div className="rounded-lg border border-border/40 bg-muted/20 p-6">
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <span className="text-sm text-muted-foreground">
                Toggle between light and dark themes
              </span>
            </div>
          </div>
        </section>

        {/* Usage Example */}
        <section>
          <div className="mb-4">
            <h2 className="mb-1 text-sm font-medium text-foreground">
              Quick Start
            </h2>
            <p className="text-xs text-muted-foreground">
              Import and use components in your app
            </p>
          </div>
          <div className="rounded-lg border border-border/40 bg-muted/20 p-6">
            <pre className="overflow-x-auto rounded border border-border/40 bg-background/50 p-4 font-mono text-xs text-muted-foreground">
              <code>{`import { Button } from "@/components/ui/button"

export function MyComponent() {
  return (
    <Button variant="default">
      Click me
    </Button>
  )
}`}</code>
            </pre>
          </div>
        </section>
      </div>
    </div>
  )
}
