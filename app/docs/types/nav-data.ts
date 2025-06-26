import { NavItem } from "./nav";

export const buildingYourApplicationItems: NavItem[] = [
  
  {
    title: "Installation",
    url: "/docs/getting-started/installation",
  },
  {
    title: "Project Structure",
    url: "/docs/getting-started/project-structure",
  },
  {
    title: "Layouts and Pages",
    url: "/docs/getting-started/layouts-and-pages",
  },
  {
    title: "Linking and Navigating",
    url: "/docs/building/linking-and-navigating",
  },
  {
    title: "Server and Client Components",
    url: "/docs/building/server-and-client-components",
  },
  {
    title: "Partial Prerendering",
    url: "/docs/building/partial-prerendering",
  },
  {
    title: "Fetching Data",
    url: "/docs/building/data-fetching",
  },
  {
    title: "Updating Data",
    url: "/docs/building/data-updating",
  },
  {
    title: "Caching and Revalidating",
    url: "/docs/building/caching-and-revalidating",
  },
  {
    title: "Error Handling",
    url: "/docs/building/error-handling",
  },
  {
    title: "CSS",
    url: "/docs/building/css",
  },
  {
    title: "Image Optimization",
    url: "/docs/building/image-optimization",
  },
  {
    title: "Font Optimization",
    url: "/docs/building/font-optimization",
  },
  {
    title: "Metadata and OG images",
    url: "/docs/building/metadata",
  },
  {
    title: "Route Handlers and Middleware",
    url: "/docs/building/route-handlers-and-middleware",
  },
  {
    title: "Deploying",
    url: "/docs/building/deploying",
  },
  {
    title: "Upgrading",
    url: "/docs/building/upgrading",
  },
];

export const guidesItems: NavItem[] = [
  {
    title: "Analytics",
    url: "/docs/guides/analytics",
  },
  {
    title: "Authentication",
    url: "/docs/guides/authentication",
  },
  {
    title: "Backend for Frontend",
    url: "/docs/guides/backend-for-frontend",
  },
  {
    title: "Caching",
    url: "/docs/guides/caching",
  },
  {
    title: "CI Build Caching",
    url: "/docs/guides/ci-build-caching",
  },
  {
    title: "Content Security Policy",
    url: "/docs/guides/content-security-policy",
  },
  {
    title: "CSS-in-JS",
    url: "/docs/guides/css-in-js",
  },
  {
    title: "Custom Server",
    url: "/docs/guides/custom-server",
  },
  {
    title: "Data Security",
    url: "/docs/guides/data-security",
  },
  {
    title: "Debugging",
    url: "/docs/guides/debugging",
  },
  {
    title: "Draft Mode",
    url: "/docs/guides/draft-mode",
  },
  {
    title: "Environment Variables",
    url: "/docs/guides/environment-variables",
  },
  {
    title: "Forms",
    url: "/docs/guides/forms",
  },
  {
    title: "ISR",
    url: "/docs/guides/isr",
  },
  {
    title: "Instrumentation",
    url: "/docs/guides/instrumentation",
  },
  {
    title: "Internationalization",
    url: "/docs/guides/internationalization",
  },
  {
    title: "JSON-LD",
    url: "/docs/guides/json-ld",
  },
  {
    title: "Lazy Loading",
    url: "/docs/guides/lazy-loading",
  },
  {
    title: "Development Environment",
    url: "/docs/guides/development-environment",
  },
  {
    title: "MDX",
    url: "/docs/guides/mdx",
  },
  {
    title: "Memory Usage",
    url: "/docs/guides/memory-usage",
  },
  {
    title: "Migrating",
    url: "/docs/guides/migrating",
    items: [
      { title: "App Router", url: "/docs/guides/migrating/app-router" },
      { title: "Create React App", url: "/docs/guides/migrating/create-react-app" },
      { title: "Vite", url: "/docs/guides/migrating/vite" },
    ], // This makes it a sub-parent link
    icon: "ArrowRight",
  },
  {
    title: "Multi-tenant",
    url: "/docs/guides/multi-tenant",
  },
  {
    title: "Multi-zones",
    url: "/docs/guides/multi-zones",
  },
  {
    title: "OpenTelemetry",
    url: "/docs/guides/opentelemetry",
  },
  {
    title: "Package Bundling",
    url: "/docs/guides/package-bundling",
  },
  {
    title: "Prefetching",
    url: "/docs/guides/prefetching",
  },
  {
    title: "Production",
    url: "/docs/guides/production",
  },
  {
    title: "PWAs",
    url: "/docs/guides/pwas",
  },
  {
    title: "Redirecting",
    url: "/docs/guides/redirecting",
  },
  {
    title: "Sass",
    url: "/docs/guides/sass",
  },
  {
    title: "Scripts",
    url: "/docs/guides/scripts",
  },
  {
    title: "Self-Hosting",
    url: "/docs/guides/self-hosting",
  },
  {
    title: "SPAs",
    url: "/docs/guides/spas",
  },
  {
    title: "Static Exports",
    url: "/docs/guides/static-exports",
  },
  {
    title: "Tailwind CSS",
    url: "/docs/guides/tailwind-css",
  },
  {
    title: "Testing",
    url: "/docs/guides/testing",
    items: [
      { title: "Cypress", url: "/docs/guides/testing/cypress" },
      { title: "Jest", url: "/docs/guides/testing/jest" },
      { title: "Playwright", url: "/docs/guides/testing/playwright" },
      { title: "Vitest", url: "/docs/guides/testing/vitest" },
    ], // This makes it a sub-parent link
    icon: "FlaskConical",
  },
  {
    title: "Third Party Libraries",
    url: "/docs/guides/third-party-libraries",
  },
  {
    title: "Upgrading",
    url: "/docs/guides/upgrading",
    items: [
      { title: "Codemods" , url: "/docs/guides/upgrading/codemods" },
      { title: "Version 14", url: "/docs/guides/upgrading/14" },
      { title: "Version 15", url: "/docs/guides/upgrading/15" },
    ], // This makes it a sub-parent link
    icon: "ArrowUpRight",
  },
  {
    title: "Videos",
    url: "/docs/guides/videos",
  },
];


export const apiReferenceItems: NavItem[] = [
  
  { 
    title: "Directives",
    url: "/docs/api-reference/directives",
    icon: "CodeXml",
    items: [
      { title: "use client", url: "/docs/api-reference/directives/use-client" },
      { title: "use server", url: "/docs/api-reference/directives/use-server" },
    ],
  },
  {
    title: "Components",
    url: "/docs/api-reference/components",
    icon: "Blocks",
    items: [
      { title: "Font", url: "/docs/api-reference/components/font" },
      { title: "Image", url: "/docs/api-reference/components/image" },
      { title: "Link", url: "/docs/api-reference/components/link" },
      { title: "Script", url: "/docs/api-reference/components/script" },
    ],
  },
  {
    title: "File-system conventions",
    url: "/docs/api-reference/file-conventions",
    icon: "Files",
    items: [
      { title: "default.js", url: "/docs/file-conventions/default-js" },
      { title: "Dynamic Segments", url: "/docs/file-conventions/dynamic-segments" },
      { title: "error.js", url: "/docs/file-conventions/error-js" },
      { title: "generate-metadata.js", url: "/docs/file-conventions/generate-metadata-js" },
      { title: "instrumentation-client.js", url: "/docs/file-conventions/instrumentation-client-js" },
      { title: "Intercepting Routes", url: "/docs/file-conventions/intercepting-routes" },
      { title: "layout.js", url: "/docs/file-conventions/layout-js" },
      { title: "loading.js", url: "/docs/file-conventions/loading-js" },
      { title: "mdx-components.js", url: "/docs/file-conventions/mdx-components-js" },
      { title: "middleware.js", url: "/docs/file-conventions/middleware-js" },
      { title: "not-found.js", url: "/docs/file-conventions/not-found-js" },
      { title: "page.js", url: "/docs/file-conventions/page-js" },
      { title: "Parallel Routes", url: "/docs/file-conventions/parallel-routes" },
      { title: "public", url: "/docs/file-conventions/public" },
      { title: "route.js", url: "/docs/file-conventions/route-js" },
      { title: "Route Groups", url: "/docs/file-conventions/route-groups" },
      { title: "Route Segment Config", url: "/docs/file-conventions/route-segment-config" },
      { title: "src", url: "/docs/file-conventions/src" },
      { title: "unauthorized.js", url: "/docs/file-conventions/unauthorized-js" },
      {
        title: "Metadata Files",
        url: "/docs/api-reference/metadata-files",
        icon: "FileJson2",
        items: [
          { title: "favicon, icon, and apple-icon", url: "/docs/api-reference/metadata-files/favicon-icon" },
          { title: "manifest.json", url: "/docs/api-reference/metadata-files/manifest-json" },
          { title: "opengraph-image", url: "/docs/api-reference/metadata-files/opengraph-image" },
          { title: "robots.txt", url: "/docs/api-reference/metadata-files/robots-txt" },
          { title: "sitemap.xml", url: "/docs/api-reference/metadata-files/sitemap-xml" },
        ],
      },
    ],
  },
   {
    title: "Functions",
    url: "/docs/api-reference/functions",
    icon: "FunctionSquare",
    items: [
      { title: "cache", url: "/docs/api-reference/functions/cache" },
      { title: "cacheLife", url: "/docs/api-reference/functions/cacheLife" },
      { title: "cacheTag", url: "/docs/api-reference/functions/cacheTag" },
      { title: "connection", url: "/docs/api-reference/functions/connection" },
      { title: "cookies", url: "/docs/api-reference/functions/cookies" },
      { title: "draftMode", url: "/docs/api-reference/functions/draftMode" },
      { title: "fetch", url: "/docs/api-reference/functions/fetch" },
      { title: "forbidden", url: "/docs/api-reference/functions/forbidden" },
      { title: "generateImageMetadata", url: "/docs/api-reference/functions/generateImageMetadata" },
      { title: "generateMetadata", url: "/docs/api-reference/functions/generateMetadata" },
      { title: "generateSitemaps", url: "/docs/api-reference/functions/generateSitemaps" },
      { title: "generateStaticParams", url: "/docs/api-reference/functions/generateStaticParams" },
      { title: "generateViewport", url: "/docs/api-reference/functions/generateViewport" },
      { title: "headers", url: "/docs/api-reference/functions/headers" },
      { title: "ImageResponse", url: "/docs/api-reference/functions/ImageResponse" },
      { title: "NextRequest", url: "/docs/api-reference/functions/NextRequest" },
      { title: "NextResponse", url: "/docs/api-reference/functions/NextResponse" },
      { title: "notFound", url: "/docs/api-reference/functions/notFound" },
      { title: "permanentRedirect", url: "/docs/api-reference/functions/permanentRedirect" },
      { title: "redirect", url: "/docs/api-reference/functions/redirect" },
      { title: "revalidatePath", url: "/docs/api-reference/functions/revalidatePath" },
      { title: "revalidateTag", url: "/docs/api-reference/functions/revalidateTag" },
      { title: "unauthorized", url: "/docs/api-reference/functions/unauthorized" },
      { title: "unstable_cache", url: "/docs/api-reference/functions/unstable_cache" },
      { title: "unstable_noStore", url: "/docs/api-reference/functions/unstable_noStore" },
      { title: "unstable_rethrow", url: "/docs/api-reference/functions/unstable_rethrow" },
      { title: "useLinkStatus", url: "/docs/api-reference/functions/useLinkStatus" },
      { title: "useParams", url: "/docs/api-reference/functions/useParams" },
      { title: "usePathname", url: "/docs/api-reference/functions/usePathname" },
      { title: "useReportWebVitals", url: "/docs/api-reference/functions/useReportWebVitals" },
      { title: "useRouter", url: "/docs/api-reference/functions/useRouter" },
      { title: "useSearchParams", url: "/docs/api-reference/functions/useSearchParams" },
      { title: "useSelectedLayoutSegment", url: "/docs/api-reference/functions/useSelectedLayoutSegment" },
      { title: "useSelectedLayoutSegments", url: "/docs/api-reference/functions/useSelectedLayoutSegments" },
      { title: "userAgent", url: "/docs/api-reference/functions/userAgent" },
    ],
  },
  {
    title: "Configuration",
    url: "/docs/api-reference/configuration",
    icon: "Settings",
    items: [
      { title: "next.config.js", url: "/docs/api-reference/configuration/next-config-js" },
      { title: "TypeScript", url: "/docs/api-reference/configuration/typescript" },
      { title: "ESLint", url: "/docs/api-reference/configuration/eslint" },
    ],
  },
  {
    title: "CLI",
    url: "/docs/api-reference/cli",
    icon: "Terminal",
    items: [
      { title: "create-next-app", url: "/docs/api-reference/cli/create-next-app" },
      { title: "next CLI", url: "/docs/api-reference/cli/next-cli" },
    ]
  },
  {
    title: "Edge Runtime",
    url: "/docs/api-reference/edge-runtime",
  },
  {
    title: "Turbo",
    url: "/docs/api-reference/turbo",
  }
];

export const architectureItems: NavItem[] = [
  {
    title: "Accessibility",
    url: "/docs/architecture/accessibility",
  },
  {
    title: "Fast Refresh",
    url: "/docs/architecture/refresh",
  },
  {
    title: "Next.js Compiler",
    url: "/docs/architecture/nextjs-compiler",
  },
  {
    title: "Supported Browsers",
    url: "/docs/architecture/supported-browsers",
  },
]

export const communityItems: NavItem[] = [
  {
    title: "Contributing Guide",
    url: "/docs/community/discord",
  },
  {
    title: "Rspack",
    url: "/docs/community/rspack",
  },
]