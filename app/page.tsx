import HoverPrefetchLink from "@/components/ui/hover-prefetch-link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Blocks,
  Component,
  Database,
  FileCode,
  Server,
  Wind,
} from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative grid place-items-center w-full min-h-[900px] py-20 md:py-32 lg:py-40 overflow-hidden">
        {/* Enhanced Grid/dot background */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        {/* Multiple radial gradients for depth */}
        <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 h-[310px] w-[510px] rounded-full bg-blue-500/20 dark:bg-blue-500/10 opacity-50 blur-[75px] animate-pulse"></div>
        <div className="absolute left-1/4 top-1/4 -z-10 h-[200px] w-[300px] rounded-full bg-purple-500/15 dark:bg-purple-500/8 opacity-40 blur-[60px] animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute right-1/4 bottom-1/4 -z-10 h-[250px] w-[400px] rounded-full bg-cyan-500/15 dark:bg-cyan-500/8 opacity-30 blur-[70px] animate-pulse" style={{animationDelay: '2s'}}></div>

        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-8 text-center">
            {/* Enhanced badge */}
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              App Router Ready
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent animate-in fade-in-50 slide-in-from-bottom-5 duration-1000">
                Next.js Playground
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl leading-relaxed animate-in fade-in-50 slide-in-from-bottom-5 duration-1000 delay-200">
                A hands-on environment to explore the latest features of the App
                Router. Built for developers, by a developer.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in-50 slide-in-from-bottom-5 duration-1000 delay-300">
              <Button asChild size="lg" className="group relative overflow-hidden">
                <HoverPrefetchLink href="/docs">
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </HoverPrefetchLink>
              </Button>
              <Button asChild variant="outline" size="lg" className="group border-2 hover:border-primary/50 transition-colors">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/ReggieAlbiosA/nextjs-playground-beta"
                  className="flex items-center"
                >
                  <svg className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 grid place-items-center md:py-24 lg:py-32 bg-gradient-to-b from-muted/20 via-muted/10 to-background dark:from-muted/10 dark:via-muted/5 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
            <div className="inline-block rounded-full bg-gradient-to-r from-primary/20 to-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20 backdrop-blur-sm">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Built on the App Router
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              This playground is designed to demonstrate the core concepts and
              new primitives introduced in the Next.js App Router.
            </p>
          </div>
          
          <div className="mx-auto grid max-w-6xl items-start gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {[
              {
                icon: Server,
                title: "Server Components",
                description: "Render components on the server for faster initial loads and less client-side JavaScript.",
                color: "bg-blue-500/10 text-blue-600 dark:text-blue-400"
              },
              {
                icon: Component,
                title: "Client Components",
                description: "Enable interactivity and state management on the client with the \"use client\" directive.",
                color: "bg-green-500/10 text-green-600 dark:text-green-400"
              },
              {
                icon: Database,
                title: "Data Fetching",
                description: "Simplified data fetching with async/await in Server Components, with built-in caching.",
                color: "bg-purple-500/10 text-purple-600 dark:text-purple-400"
              },
              {
                icon: FileCode,
                title: "File-based Routing",
                description: "Organize your application with a clear and intuitive file-system based routing system.",
                color: "bg-orange-500/10 text-orange-600 dark:text-orange-400"
              },
              {
                icon: Blocks,
                title: "Layouts",
                description: "Create shared UI that persists between routes, preserving state and avoiding re-renders.",
                color: "bg-pink-500/10 text-pink-600 dark:text-pink-400"
              },
              {
                icon: Wind,
                title: "Theming & Styling",
                description: "Styled with Tailwind CSS and includes a light/dark mode theme switcher.",
                color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"
              }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="group relative p-6 rounded-xl border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 grid place-items-center lg:py-32 border-t border-border/50 bg-gradient-to-t from-muted/20 to-background dark:from-muted/10 dark:to-background">
        <div className="container px-4 text-center md:px-6">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Ready to Dive In?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore the documentation to see how each feature is implemented
                and start experimenting on your own.
              </p>
            </div>
            
            <div className="mx-auto w-full max-w-sm">
              <Button asChild size="lg" className="w-full group relative overflow-hidden">
                <HoverPrefetchLink href="/docs">
                  <span className="relative z-10 flex items-center justify-center">
                    Browse Documentation
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </HoverPrefetchLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}