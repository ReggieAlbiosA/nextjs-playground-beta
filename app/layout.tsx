// app/layout.tsx
import type { Metadata, Viewport  } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// * next imports

import { headers, cookies } from 'next/headers';
import Script from "next/script";
import HoverPrefetchLink from "@/components/ui/hover-prefetch-link";

// * dependencies
import { ThemeProvider } from "next-themes";
import { BookText, Github, Moon, Sun, BookOpen } from "lucide-react";

// * client components
import ThemeSwitcher from "./(_shared)/client-components/ThemeSwitcher";
import { ConditionalDocsSearch, ConditionalFooter, ConditionalMobileMenu, ConditionalParentLayoutStyle, ConditionalDocSideBar, ConditionalMobileDocsSidebar } from "./(_shared)/client-components/ConditionalRenderedComponent";
import { buildingYourApplicationItems, apiReferenceItems, guidesItems, architectureItems, communityItems } from "./docs/(_shared)/types/nav-data";
import { NonCollapsibleNavSection } from "./docs/(_shared)/client-components/NonCollapsibleNavSection";
import { CollapsibleNavSection } from "./docs/(_shared)/client-components/CollapsibleNavSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js App Router Playground",
  description: "A hands-on environment to explore the latest features of the Next.js App Router.",
};

export const viewport: Viewport = {
  colorScheme: 'light dark',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStorePromise = cookies();
  const headerListPromise = headers();

  // Await the promises to get the actual cookie and header objects
  const cookieStore = await cookieStorePromise;
  const headerList = await headerListPromise;

  const themeCookie = cookieStore.get('app-theme')?.value;
  // This line now works correctly because of your next.config.js
  const prefersColorScheme = headerList.get('Sec-CH-Prefers-Color-Scheme');

  // This variable will hold the final theme ('light' or 'dark') for the initial server render.
  let initialTheme: 'light' | 'dark' = 'light'; // A safe default

  // --- THEME RESOLUTION LOGIC ---
  // 1. Priority: Check for an explicit theme ('light' or 'dark') set by the user in the cookie.
  if (themeCookie === 'light' || themeCookie === 'dark') {
    initialTheme = themeCookie;
  }
  // 2. Fallback: If no explicit cookie, use the Client Hint from the browser OS theme.
  //    This covers the first-ever visit and cases where the cookie is set to 'system'.
  else if (prefersColorScheme === 'dark') {
    initialTheme = 'dark';
  }

   const sidebarContent = (
    <>
      <NonCollapsibleNavSection title="Getting Started" items={buildingYourApplicationItems} />
      <CollapsibleNavSection title="Guides" icon={<BookOpen size={16}/>} items={guidesItems} />
      <NonCollapsibleNavSection title="API Reference" items={apiReferenceItems} />
      <NonCollapsibleNavSection title="Architecture" items={architectureItems} />
      <NonCollapsibleNavSection title="Community" items={communityItems} />
    </>
  )

  return (
    // We pass the resolved theme to the <html> tag to prevent any flicker.
    <html
      lang="en"
      className={initialTheme}
      style={{ colorScheme: initialTheme }}
      suppressHydrationWarning
    >
      <head>
          <Script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js-"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getInitialTheme() {
                  const persistedTheme = document.cookie.match(/app-theme=([^;]+)/)?.[1];
                  if (persistedTheme && (persistedTheme === 'light' || persistedTheme === 'dark')) {
                    return persistedTheme;
                  }
                  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  return systemTheme;
                }
                const theme = getInitialTheme();
                document.documentElement.className = theme;
                document.documentElement.style.colorScheme = theme;
              })();
            `,
          }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="app-theme"
        >
          <ConditionalParentLayoutStyle className="grid grid-rows-[64px_1fr] lg:grid-cols-[300px_1fr] grid-cols-1">
          
            <header className="flex items-center justify-between   px-4 mx-auto sm:px-6 lg:px-8 sticky top-0 col-span-2 z-1000 w-full h-16 border-b  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">

                <HoverPrefetchLink href="/" className="text-lg font-bold" aria-label="Next.js Playground Home">
                  <span className="flex items-center gap-x-2">
                    <svg version="1.0" className="dark:fill-white fill-black" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><g transform="translate(0,256) scale(0.1,-0.1)" stroke="none"><path d="M1556 2374c-16-9-266-191-555-404-355-262-532-399-546-422-18-30-20-54-23-310-2-153 0-278 5-278 4 0 201 144 436 320 467 349 467 349 518 294 24-25 24-26 27-280l3-254-25-25c-45-45-77-35-206 60-63 47-121 85-129 85-8 0-90-57-182-126-167-125-169-127-169-164 0-52 12-81 50-118 29-29 408-325 488-381 40-28 98-37 143-22 54 18 468 339 504 389l30 44 3 690c3 812 14 735-121 835-46 34-96 67-111 73-39 15-106 12-140-6z"/></g></svg>
                    <span className="text-[1.2rem] font-bold">Next.js</span>
                    <span className="text-[1.2rem] font-light">Playground</span>
                  </span>
                </HoverPrefetchLink>

                <div className="flex items-center gap-2 ">
                  <nav className="items-center hidden gap-3 md:flex" aria-label="Primary">
                    <HoverPrefetchLink href="/">xlore_</HoverPrefetchLink>
                    <div className="w-px h-6 border-l border-border" aria-hidden="true" />
                    <HoverPrefetchLink href="/docs" className="flex items-center gap-1.5 text-sm transition-colors hover:text-foreground/80 px-2 py-1.5 rounded-md"><BookText size={16} /><span>Docs</span></HoverPrefetchLink>
                    <div className="w-px h-6 border-l border-border" aria-hidden="true" />
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/ReggieAlbiosA/nextjs-playground-beta"  className="flex items-center gap-1.5 text-sm transition-colors hover:text-foreground/80 px-2 py-1.5 rounded-md"><Github size={16} /><span>Github</span></a>
                    <div className="w-px h-6 border-l border-border" aria-hidden="true" />
                  </nav>

                  <ConditionalDocsSearch /> {/* Moved DocSearch here */}

                  <ThemeSwitcher>
                    {/* Placeholder for ThemeSwitcher icon */}
                    {initialTheme === "dark" ? (
                      <div className="grid place-items-center w-full h-full"><Moon size={16} /></div>
                    ) : (
                      <div className="grid place-items-center w-full h-full"><Sun size={16} /></div>
                    )}
                  </ThemeSwitcher>

                  
                  {/* Use conditional mobile menu instead of MobileMenu directly */}
                  <ConditionalMobileMenu />
                </div>
            </header>

                <ConditionalDocSideBar className="sticky top-16">
                  {sidebarContent}
                </ConditionalDocSideBar>

            <div className="flex-1">
                <ConditionalMobileDocsSidebar>
                  {sidebarContent}
                </ConditionalMobileDocsSidebar>
              {children}
            </div>

            <ConditionalFooter /> {/* Moved Footer here */}

          </ConditionalParentLayoutStyle>
        </ThemeProvider>
      </body>
    </html>
  );
}