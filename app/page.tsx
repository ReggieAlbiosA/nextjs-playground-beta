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
      <section className="relative grid place-items-center w-full min-h-[800px]  py-20 md:py-32 lg:py-40">
        {/* Grid/dot background */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        {/* Radial gradient */}
        <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 h-[310px] w-[510px] rounded-full bg-blue-500/20 dark:bg-blue-500/10 opacity-50 blur-[75px]"></div>

        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                Next.js Playground
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A hands-on environment to explore the latest features of the App
                Router. Built for developers, by a developer.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <HoverPrefetchLink href="/docs">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </HoverPrefetchLink>
              </Button>
              <Button asChild variant="outline" size="lg">
                <HoverPrefetchLink
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/ReggieAlbiosA/nextjs-playground-beta"
                >
                  GitHub
                </HoverPrefetchLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 grid place-items-center md:py-24 lg:py-32 bg-muted/20 dark:bg-muted/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Key Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Built on the App Router
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                This playground is designed to demonstrate the core concepts and new primitives introduced in the Next.js App Router.
              </p>
          </div>
          <ul className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            <li className="grid gap-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Server className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Server Components</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Render components on the server for faster initial loads and
                less client-side JavaScript.
              </p>
            </li>
            <li className="grid gap-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Component className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Client Components</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Enable interactivity and state management on the client with
                the &quot;use client&quot; directive.
              </p>
            </li>
            <li className="grid gap-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Data Fetching</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Simplified data fetching with async/await in Server
                Components, with built-in caching.
              </p>
            </li>
            <li className="grid gap-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <FileCode className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold">File-based Routing</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Organize your application with a clear and intuitive
                file-system based routing system.
              </p>
            </li>
            <li className="grid gap-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Blocks className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Layouts</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Create shared UI   that persists between routes, preserving
                state and avoiding re-renders.
              </p>
            </li>
            <li className="grid gap-2">
              <div className="flex items-center gap-3"> 
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Wind className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Theming & Styling</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Styled with Tailwind CSS and includes a light/dark mode theme
                switcher.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24  grid place-items-center lg:py-32 border-t">
        <div className="container r gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to Dive In?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore the documentation to see how each feature is implemented
              and start experimenting on your own.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Button asChild size="lg">
              <HoverPrefetchLink href="/docs">Browse Documentation</HoverPrefetchLink>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
