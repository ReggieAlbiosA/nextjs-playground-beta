// /home/anon/Documents/WebDev/nextjs-playground-beta/app/server-components/Footer.tsx

import HoverPrefetchLink from "@/components/ui/hover-prefetch-link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p className="text-sm">
          &copy; {currentYear} Next.js Playground. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with ❤️ by{" "}
          <a
            href="https://github.com/ReggieAlbiosA/nextjs-playground-beta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Reggie Albios A.
          </a>
        </p>
        <nav className="flex justify-center space-x-4 mt-4" aria-label="Footer navigation">
          <HoverPrefetchLink href="/docs" className="text-sm hover:text-foreground/80">
            Docs
          </HoverPrefetchLink>
          <a
            href="https://github.com/ReggieAlbiosA/nextjs-playground-beta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-foreground/80"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
