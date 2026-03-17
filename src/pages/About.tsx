import { Button } from "@/components/ui/button"
import { Package, Zap, Palette, Code2, Terminal, Check } from "lucide-react"

export function About() {
  return (
    <div className="max-w-4xl p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Getting Started
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Everything you need to build with this template
        </p>
      </div>

      {/* Tech Stack */}
      <section className="mb-8">
        <h2 className="mb-4 text-base font-medium text-foreground">
          Tech Stack
        </h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="rounded-lg border border-border/40 bg-muted/20 p-4">
            <div className="flex items-start gap-3">
              <div className="rounded-md border border-border/40 bg-background p-2">
                <Zap className="size-4 text-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-medium text-foreground">Vite</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Lightning-fast build tool and dev server
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border/40 bg-muted/20 p-4">
            <div className="flex items-start gap-3">
              <div className="rounded-md border border-border/40 bg-background p-2">
                <Code2 className="size-4 text-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-medium text-foreground">
                  React 19
                </h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Latest React with modern features
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border/40 bg-muted/20 p-4">
            <div className="flex items-start gap-3">
              <div className="rounded-md border border-border/40 bg-background p-2">
                <Package className="size-4 text-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-medium text-foreground">
                  TypeScript
                </h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Type-safe development experience
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border/40 bg-muted/20 p-4">
            <div className="flex items-start gap-3">
              <div className="rounded-md border border-border/40 bg-background p-2">
                <Palette className="size-4 text-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-medium text-foreground">
                  shadcn/ui
                </h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Beautifully designed components
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="mb-8">
        <h2 className="mb-4 text-base font-medium text-foreground">
          Quick Start
        </h2>
        <div className="space-y-4">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                1
              </div>
              <h3 className="text-sm font-medium text-foreground">
                Install dependencies
              </h3>
            </div>
            <div className="ml-7">
              <pre className="overflow-x-auto rounded border border-border/40 bg-background p-3 font-mono text-xs text-muted-foreground">
                <code>pnpm install</code>
              </pre>
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                2
              </div>
              <h3 className="text-sm font-medium text-foreground">
                Start development server
              </h3>
            </div>
            <div className="ml-7">
              <pre className="overflow-x-auto rounded border border-border/40 bg-background p-3 font-mono text-xs text-muted-foreground">
                <code>pnpm dev</code>
              </pre>
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                3
              </div>
              <h3 className="text-sm font-medium text-foreground">
                Add components
              </h3>
            </div>
            <div className="ml-7">
              <pre className="overflow-x-auto rounded border border-border/40 bg-background p-3 font-mono text-xs text-muted-foreground">
                <code>npx shadcn@latest add button card input</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-8">
        <h2 className="mb-4 text-base font-medium text-foreground">
          What's Included
        </h2>
        <div className="rounded-lg border border-border/40 bg-muted/20 p-5">
          <ul className="space-y-2.5">
            <li className="flex items-start gap-2 text-sm">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="text-muted-foreground">
                <span className="font-medium text-foreground">
                  Tailwind CSS 4
                </span>{" "}
                — Utility-first styling with modern features
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="text-muted-foreground">
                <span className="font-medium text-foreground">
                  React Router 7
                </span>{" "}
                — Client-side routing with declarative mode
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="text-muted-foreground">
                <span className="font-medium text-foreground">
                  Theme Support
                </span>{" "}
                — Light and dark modes built-in
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="text-muted-foreground">
                <span className="font-medium text-foreground">
                  ESLint & Prettier
                </span>{" "}
                — Code quality and formatting configured
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="text-muted-foreground">
                <span className="font-medium text-foreground">
                  Path Aliases
                </span>{" "}
                — Clean imports with @/ prefix
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="text-muted-foreground">
                <span className="font-medium text-foreground">
                  Lucide Icons
                </span>{" "}
                — Beautiful, consistent icon library
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Available Scripts */}
      <section className="mb-8">
        <h2 className="mb-4 text-base font-medium text-foreground">
          Available Scripts
        </h2>
        <div className="divide-y divide-border/40 rounded-lg border border-border/40 bg-muted/20">
          <div className="p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <code className="font-mono text-xs text-foreground">
                  pnpm dev
                </code>
                <p className="mt-1 text-xs text-muted-foreground">
                  Start development server with hot reload
                </p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <code className="font-mono text-xs text-foreground">
                  pnpm build
                </code>
                <p className="mt-1 text-xs text-muted-foreground">
                  Build optimized production bundle
                </p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <code className="font-mono text-xs text-foreground">
                  pnpm typecheck
                </code>
                <p className="mt-1 text-xs text-muted-foreground">
                  Run TypeScript type checking
                </p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <code className="font-mono text-xs text-foreground">
                  pnpm lint
                </code>
                <p className="mt-1 text-xs text-muted-foreground">
                  Run ESLint to check code quality
                </p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <code className="font-mono text-xs text-foreground">
                  pnpm format
                </code>
                <p className="mt-1 text-xs text-muted-foreground">
                  Format code with Prettier
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section>
        <h2 className="mb-4 text-base font-medium text-foreground">
          Next Steps
        </h2>
        <div className="rounded-lg border border-border/40 bg-muted/20 p-5">
          <p className="mb-4 text-sm text-muted-foreground">
            Ready to start building? Check out the component showcase and start
            adding your own pages.
          </p>
          <div className="flex gap-3">
            <Button>
              <Terminal />
              View Components
            </Button>
            <Button variant="outline">Read Documentation</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
