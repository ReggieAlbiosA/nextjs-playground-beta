import { NavItem } from "./nav";

export const buildingYourApplicationItems: NavItem[] = [
  
  {
    title: "Installation",
    url: "/docs/getting-started/installation",
    description: "Set up your Next.js development environment.",
  },
  {
    title: "Project Structure",
    url: "/docs/getting-started/project-structure",
    description: "Understand the anatomy of a Next.js application.",
  },
  {
    title: "Layouts and Pages",
    url: "/docs/getting-started/layouts-and-pages",
    description: "Create UI by nesting layouts and pages.",
  },
  {
    title: "Linking and Navigating",
    url: "/docs/getting-started/linking-and-navigating",
    description: "Navigate between pages with the Link component and useRouter hook.",
  },
  {
    title: "Server and Client Components",
    url: "/docs/getting-started/server-and-client-components",
    description: "Learn the difference between Server and Client Components.",
  },
  {
    title: "Partial Prerendering",
    url: "/docs/getting-started/partial-prerendering",
    description: "Optimize performance with partially prerendered pages.",
  },
  {
    title: "Fetching Data",
    url: "/docs/getting-started/data-fetching",
    description: "Fetch data on the server with async/await.",
  },
  {
    title: "Updating Data",
    url: "/docs/getting-started/data-updating",
    description: "Update data with Server Actions.",
  },
  {
    title: "Caching and Revalidating",
    url: "/docs/getting-started/caching-and-revalidating",
    description: "Control how data is cached and revalidated.",
  },
  {
    title: "Error Handling",
    url: "/docs/getting-started/error-handling",
    description: "Handle errors gracefully.",
  },
  {
    title: "CSS",
    url: "/docs/getting-started/css",
    description: "Style your application with CSS Modules, Tailwind CSS, and more.",
  },
  {
    title: "Image Optimization",
    url: "/docs/getting-started/image-optimization",
    description: "Optimize images with the next/image component.",
  },
  {
    title: "Font Optimization",
    url: "/docs/getting-started/font-optimization",
    description: "Optimize fonts with the next/font module.",
  },
  {
    title: "Metadata and OG images",
    url: "/docs/getting-started/metadata",
    description: "Generate metadata and Open Graph images.",
  },
  {
    title: "Route Handlers and Middleware",
    url: "/docs/getting-started/route-handlers-and-middleware",
    description: "Create API endpoints and middleware.",
  },
  {
    title: "Deploying",
    url: "/docs/getting-started/deploying",
    description: "Deploy your Next.js application to production.",
  },
  {
    title: "Upgrading",
    url: "/docs/getting-started/upgrading",
    description: "Upgrade your Next.js application to the latest version.",
  },
];

export const guidesItems: NavItem[] = [
  {
    title: "Analytics",
    url: "/docs/guides/analytics",
    description: "Set up analytics to gain insights into your application's usage.",
  },
  {
    title: "Authentication",
    url: "/docs/guides/authentication",
    description: "Implement user authentication and manage sessions.",
  },
  {
    title: "Backend for Frontend",
    url: "/docs/guides/backend-for-frontend",
    description: "Build a dedicated backend for your frontend application.",
  },
  {
    title: "Caching",
    url: "/docs/guides/caching",
    description: "Learn how to cache data and responses for better performance.",
  },
  {
    title: "CI Build Caching",
    url: "/docs/guides/ci-build-caching",
    description: "Cache build outputs in your CI/CD pipeline to speed up deployments.",
  },
  {
    title: "Content Security Policy",
    url: "/docs/guides/content-security-policy",
    description: "Enhance your application's security with a Content Security Policy.",
  },
  {
    title: "CSS-in-JS",
    url: "/docs/guides/css-in-js",
    description: "Use your favorite CSS-in-JS libraries with Next.js.",
  },
  {
    title: "Custom Server",
    url: "/docs/guides/custom-server",
    description: "Create a custom server to extend Next.js's functionality.",
  },
  {
    title: "Data Security",
    url: "/docs/guides/data-security",
    description: "Learn best practices for securing your application's data.",
  },
  {
    title: "Debugging",
    url: "/docs/guides/debugging",
    description: "Debug your Next.js application effectively.",
  },
  {
    title: "Draft Mode",
    url: "/docs/guides/draft-mode",
    description: "Preview content from your headless CMS before publishing.",
  },
  {
    title: "Environment Variables",
    url: "/docs/guides/environment-variables",
    description: "Manage environment variables for different environments.",
  },
  {
    title: "Forms",
    url: "/docs/guides/forms",
    description: "Build and handle forms in your Next.js application.",
  },
  {
    title: "ISR",
    url: "/docs/guides/isr",
    description: "Use Incremental Static Regeneration to update static content.",
  },
  {
    title: "Instrumentation",
    url: "/docs/guides/instrumentation",
    description: "Add instrumentation to your application to monitor performance.",
  },
  {
    title: "Internationalization",
    url: "/docs/guides/internationalization",
    description: "Add internationalization (i18n) to your Next.js application.",
  },
  {
    title: "JSON-LD",
    url: "/docs/guides/json-ld",
    description: "Add structured data to your application with JSON-LD.",
  },
  {
    title: "Lazy Loading",
    url: "/docs/guides/lazy-loading",
    description: "Lazy load components and libraries to improve performance.",
  },
  {
    title: "Development Environment",
    url: "/docs/guides/development-environment",
    description: "Set up a local development environment for Next.js.",
  },
  {
    title: "MDX",
    url: "/docs/guides/mdx",
    description: "Use MDX to write JSX in your Markdown files.",
  },
  {
    title: "Memory Usage",
    url: "/docs/guides/memory-usage",
    description: "Monitor and optimize your application's memory usage.",
  },
  {
    title: "Migrating",
    url: "/docs/guides/migrating",
    description: "Migrate your existing application to Next.js.",
    items: [
      { title: "App Router", url: "/docs/guides/migrating/app-router", description: "Migrate from the Pages Router to the App Router." },
      { title: "Create React App", url: "/docs/guides/migrating/create-react-app", description: "Migrate from Create React App to Next.js." },
      { title: "Vite", url: "/docs/guides/migrating/vite", description: "Migrate from Vite to Next.js." },
    ], // This makes it a sub-parent link
    icon: "ArrowRight",
  },
  {
    title: "Multi-tenant",
    url: "/docs/guides/multi-tenant",
    description: "Build multi-tenant applications with Next.js.",
  },
  {
    title: "Multi-zones",
    url: "/docs/guides/multi-zones",
    description: "Deploy your Next.js application to multiple zones.",
  },
  {
    title: "OpenTelemetry",
    url: "/docs/guides/opentelemetry",
    description: "Use OpenTelemetry to instrument your application.",
  },
  {
    title: "Package Bundling",
    url: "/docs/guides/package-bundling",
    description: "Learn how Next.js bundles your application's code.",
  },
  {
    title: "Prefetching",
    url: "/docs/guides/prefetching",
    description: "Prefetch data and assets to improve performance.",
  },
  {
    title: "Production",
    url: "/docs/guides/production",
    description: "Optimize your Next.js application for production.",
  },
  {
    title: "PWAs",
    url: "/docs/guides/pwas",
    description: "Build Progressive Web Apps with Next.js.",
  },
  {
    title: "Redirecting",
    url: "/docs/guides/redirecting",
    description: "Redirect users from one page to another.",
  },
  {
    title: "Sass",
    url: "/docs/guides/sass",
    description: "Use Sass to style your Next.js application.",
  },
  {
    title: "Scripts",
    url: "/docs/guides/scripts",
    description: "Add third-party scripts to your Next.js application.",
  },
  {
    title: "Self-Hosting",
    url: "/docs/guides/self-hosting",
    description: "Self-host your Next.js application.",
  },
  {
    title: "SPAs",
    url: "/docs/guides/spas",
    description: "Build Single-Page Applications with Next.js.",
  },
  {
    title: "Static Exports",
    url: "/docs/guides/static-exports",
    description: "Export your Next.js application to static HTML files.",
  },
  {
    title: "Tailwind CSS",
    url: "/docs/guides/tailwind-css",
    description: "Use Tailwind CSS to style your Next.js application.",
  },
  {
    title: "Testing",
    url: "/docs/guides/testing",
    description: "Test your Next.js application with popular testing frameworks.",
    items: [
      { title: "Cypress", url: "/docs/guides/testing/cypress", description: "Set up and use Cypress for end-to-end testing." },
      { title: "Jest", url: "/docs/guides/testing/jest", description: "Set up and use Jest for unit testing." },
      { title: "Playwright", url: "/docs/guides/testing/playwright", description: "Set up and use Playwright for end-to-end testing." },
      { title: "Vitest", url: "/docs/guides/testing/vitest", description: "Set up and use Vitest for unit testing." },
    ], // This makes it a sub-parent link
    icon: "FlaskConical",
  },
  {
    title: "Third Party Libraries",
    url: "/docs/guides/third-party-libraries",
    description: "Use third-party libraries with Next.js.",
  },
  {
    title: "Upgrading",
    url: "/docs/guides/upgrading",
    description: "Upgrade your Next.js application to the latest version.",
    items: [
      { title: "Codemods" , url: "/docs/guides/upgrading/codemods", description: "Automate code transformations with codemods." },
      { title: "Version 14", url: "/docs/guides/upgrading/14", description: "Upgrade your Next.js application to Version 14." },
      { title: "Version 15", url: "/docs/guides/upgrading/15", description: "Upgrade your Next.js application to Version 15." },
    ], // This makes it a sub-parent link
    icon: "ArrowUpRight",
  },
  {
    title: "Videos",
    url: "/docs/guides/videos",
    description: "Watch videos to learn more about Next.js.",
  },
];


export const apiReferenceItems: NavItem[] = [
  
  { 
    title: "Directives",
    url: "/docs/api-reference/directives",
    description: "Learn about the directives that Next.js provides.",
    icon: "CodeXml",
    items: [
      { title: "use client", url: "/docs/api-reference/directives/use-client", description: "Mark a component as a Client Component." },
      { title: "use server", url: "/docs/api-reference/directives/use-server", description: "Mark a function as a Server Action." },
    ],
  },
  {
    title: "Components",
    url: "/docs/api-reference/components",
    description: "Learn about the built-in React components that Next.js provides.",
    icon: "Blocks",
    items: [
      { title: "Font", url: "/docs/api-reference/components/font", description: "Optimize and load custom fonts." },
      { title: "Image", url: "/docs/api-reference/components/image", description: "Optimize images with the Next.js Image component." },
      { title: "Link", url: "/docs/api-reference/components/link", description: "Navigate between pages with the Link component." },
      { title: "Script", url: "/docs/api-reference/components/script", description: "Optimize and load third-party scripts." },
    ],
  },
  {
    title: "File-system conventions",
    url: "/docs/api-reference/file-conventions",
    description: "Learn about the file-system conventions that Next.js uses.",
    icon: "Files",
    items: [
      { title: "default.js", url: "/docs/api-reference/file-conventions/default-js", description: "Define a fallback UI for Parallel Routes." },
      { title: "Dynamic Segments", url: "/docs/api-reference/file-conventions/dynamic-segments", description: "Create dynamic routes based on data." },
      { title: "error.js", url: "/docs/api-reference/file-conventions/error-js", description: "Define an error UI for a route segment." },
      { title: "generate-metadata.js", url: "/docs/api-reference/file-conventions/generate-metadata-js", description: "Generate static metadata for a route segment." },
      { title: "instrumentation-client.js", url: "/docs/api-reference/file-conventions/instrumentation-client-js", description: "Define client-side instrumentation for your application." },
      { title: "Intercepting Routes", url: "/docs/api-reference/file-conventions/intercepting-routes", description: "Intercept routes to show a different route in the URL." },
      { title: "layout.js", url: "/docs/api-reference/file-conventions/layout-js", description: "Define shared UI for a route segment and its children." },
      { title: "loading.js", url: "/docs/api-reference/file-conventions/loading-js", description: "Define a loading UI for a route segment." },
      { title: "mdx-components.js", url: "/docs/api-reference/file-conventions/mdx-components-js", description: "Customize MDX components for your application." },
      { title: "middleware.js", url: "/docs/api-reference/file-conventions/middleware-js", description: "Define middleware to run before a request is completed." },
      { title: "not-found.js", url: "/docs/api-reference/file-conventions/not-found-js", description: "Define a not found UI for a route segment." },
      { title: "page.js", url: "/docs/api-reference/file-conventions/page-js", description: "Define the unique UI of a route segment." },
      { title: "Parallel Routes", url: "/docs/api-reference/file-conventions/parallel-routes", description: "Render multiple routes in the same layout." },
      { title: "public", url: "/docs/api-reference/file-conventions/public", description: "Serve static assets from the public directory." },
      { title: "route.js", url: "/docs/api-reference/file-conventions/route-js", description: "Define an API endpoint for a route segment." },
      { title: "Route Groups", url: "/docs/api-reference/file-conventions/route-groups", description: "Organize routes without affecting the URL structure." },
      { title: "Route Segment Config", url: "/docs/api-reference/file-conventions/route-segment-config", description: "Configure the behavior of a route segment." },
      { title: "src", url: "/docs/api-reference/file-conventions/src", description: "Organize your application's source code." },
      { title: "template.js", url: "/docs/api-reference/file-conventions/template-js", description: "Define a template for a route segment." },
      { title: "unauthorized.js", url: "/docs/api-reference/file-conventions/unauthorized-js", description: "Define an unauthorized UI for a route segment." },
      {
        title: "Metadata Files",
        url: "/docs/api-reference/file-conventions/metadata-files",
        description: "Learn about the metadata files that Next.js uses.",
        icon: "FileJson2",
        items: [
          { title: "favicon, icon, and apple-icon", url: "/docs/api-reference/file-conventions/metadata-files/favicon-icon", description: "Configure favicons, icons, and Apple Touch icons." },
          { title: "manifest.json", url: "/docs/api-reference/file-conventions/metadata-files/manifest-json", description: "Configure the web app manifest for Progressive Web Apps." },
          { title: "opengraph-image", url: "/docs/api-reference/file-conventions/metadata-files/opengraph-image", description: "Generate Open Graph images for social media sharing." },
          { title: "robots.txt", url: "/docs/api-reference/file-conventions/metadata-files/robots-txt", description: "Configure search engine crawling behavior." },
          { title: "sitemap.xml", url: "/docs/api-reference/file-conventions/metadata-files/sitemap-xml", description: "Generate a sitemap for search engine optimization." },
        ],
      },
    ],
  },
   {
    title: "Functions",
    url: "/docs/api-reference/functions",
    description: "Learn about the functions that Next.js provides.",
    icon: "FunctionSquare",
    items: [
      { title: "cache", url: "/docs/api-reference/functions/cache", description: "Cache data for a given duration." },
      { title: "cacheLife", url: "/docs/api-reference/functions/cacheLife", description: "Control the cache lifetime of a data fetch." },
      { title: "cacheTag", url: "/docs/api-reference/functions/cacheTag", description: "Tag cached data for revalidation." },
      { title: "connection", url: "/docs/api-reference/functions/connection", description: "Access the underlying HTTP connection." },
      { title: "cookies", url: "/docs/api-reference/functions/cookies", description: "Access and manipulate cookies." },
      { title: "draftMode", url: "/docs/api-reference/functions/draftMode", description: "Enable or disable draft mode for content preview." },
      { title: "fetch", url: "/docs/api-reference/functions/fetch", description: "Fetch data with caching and revalidation capabilities." },
      { title: "forbidden", url: "/docs/api-reference/functions/forbidden", description: "Return a 403 Forbidden response." },
      { title: "generateImageMetadata", url: "/docs/api-reference/functions/generateImageMetadata", description: "Generate image metadata for dynamic Open Graph images." },
      { title: "generateMetadata", url: "/docs/api-reference/functions/generateMetadata", description: "Generate dynamic metadata for a page." },
      { title: "generateSitemaps", url: "/docs/api-reference/functions/generateSitemaps", description: "Generate sitemaps for your application." },
      { title: "generateStaticParams", url: "/docs/api-reference/functions/generateStaticParams", description: "Generate static paths for dynamic routes." },
      { title: "generateViewport", url: "/docs/api-reference/functions/generateViewport", description: "Generate viewport metadata for a page." },
      { title: "headers", url: "/docs/api-reference/functions/headers", description: "Access and manipulate HTTP headers." },
      { title: "ImageResponse", url: "/docs/api-reference/functions/ImageResponse", description: "Generate dynamic Open Graph images." },
      { title: "NextRequest", url: "/docs/api-reference/functions/NextRequest", description: "Extend the Web Request API for Next.js." },
      { title: "NextResponse", url: "/docs/api-reference/functions/NextResponse", description: "Extend the Web Response API for Next.js." },
      { title: "notFound", url: "/docs/api-reference/functions/notFound", description: "Render the not-found page." },
      { title: "permanentRedirect", url: "/docs/api-reference/functions/permanentRedirect", description: "Perform a permanent redirect (308)." },
      { title: "redirect", url: "/docs/api-reference/functions/redirect", description: "Perform a temporary redirect (307)." },
      { title: "revalidatePath", url: "/docs/api-reference/functions/revalidatePath", description: "Revalidate data for a given path." },
      { title: "revalidateTag", url: "/docs/api-reference/functions/revalidateTag", description: "Revalidate data for a given cache tag." },
      { title: "unauthorized", url: "/docs/api-reference/functions/unauthorized", description: "Return a 401 Unauthorized response." },
      { title: "unstable_cache", url: "/docs/api-reference/functions/unstable_cache", description: "Cache data with a custom key." },
      { title: "unstable_noStore", url: "/docs/api-reference/functions/unstable_noStore", description: "Opt out of data caching for a fetch request." },
      { title: "unstable_rethrow", url: "/docs/api-reference/functions/unstable_rethrow", description: "Rethrow an error after logging it." },
      { title: "useLinkStatus", url: "/docs/api-reference/functions/useLinkStatus", description: "Get the status of a link prefetch." },
      { title: "useParams", url: "/docs/api-reference/functions/useParams", description: "Access the current route's dynamic parameters." },
      { title: "usePathname", url: "/docs/api-reference/functions/usePathname", description: "Get the current URL's pathname." },
      { title: "useReportWebVitals", url: "/docs/api-reference/functions/useReportWebVitals", description: "Report Web Vitals metrics." },
      { title: "useRouter", url: "/docs/api-reference/functions/useRouter", description: "Access the Next.js router instance." },
      { title: "useSearchParams", url: "/docs/api-reference/functions/useSearchParams", description: "Access the current URL's search parameters." },
      { title: "useSelectedLayoutSegment", url: "/docs/api-reference/functions/useSelectedLayoutSegment", description: "Get the currently selected layout segment." },
      { title: "useSelectedLayoutSegments", url: "/docs/api-reference/functions/useSelectedLayoutSegments", description: "Get all currently selected layout segments." },
      { title: "userAgent", url: "/docs/api-reference/functions/userAgent", description: "Access the user agent string." },
    ],
  },
  {
    title: "Configuration",
    url: "/docs/api-reference/configuration",
    description: "Learn how to configure your Next.js application.",
    icon: "Settings",
    items: [
      { title: "next.config.js", url: "/docs/api-reference/configuration/next-config-js", description: "Configure your Next.js application." },
      { title: "TypeScript", url: "/docs/api-reference/configuration/typescript", description: "Configure TypeScript for your Next.js application." },
      { title: "ESLint", url: "/docs/api-reference/configuration/eslint", description: "Configure ESLint for your Next.js application." },
    ],
  },
  {
    title: "CLI",
    url: "/docs/api-reference/cli",
    description: "Learn how to use the Next.js CLI.",
    icon: "Terminal",
    items: [
      { title: "create-next-app", url: "/docs/api-reference/cli/create-next-app", description: "Create a new Next.js application." },
      { title: "next CLI", url: "/docs/api-reference/cli/next-cli", description: "Interact with your Next.js application from the command line." }
    ]
  },
  {
    title: "Edge Runtime",
    url: "/docs/api-reference/edge-runtime",
    description: "Learn about the Edge Runtime in Next.js, a lightweight runtime for serverless functions.",
  },
  {
    title: "Turbo",
    url: "/docs/api-reference/turbo",
    description: "Learn about Turbopack, the successor to Webpack, for faster builds.",
  }
];

export const architectureItems: NavItem[] = [
  {
    title: "Accessibility",
    url: "/docs/architecture/accessibility",
    description: "Learn how to make your Next.js application accessible to everyone.",
  },
  {
    title: "Fast Refresh",
    url: "/docs/architecture/refresh",
    description: "Get instant feedback on your changes with Fast Refresh.",
  },
  {
    title: "Next.js Compiler",
    url: "/docs/architecture/nextjs-compiler",
    description: "Learn about the Next.js compiler and how it optimizes your application.",
  },
  {
    title: "Supported Browsers",
    url: "/docs/architecture/supported-browsers",
    description: "Learn about the browsers that Next.js supports.",
  },
]

export const communityItems: NavItem[] = [
  {
    title: "Contributing Guide",
    url: "/docs/community/discord",
    description: "Learn how to contribute to the Next.js project through Discord and other channels.",
  },
  {
    title: "Rspack",
    url: "/docs/community/rspack",
    description: "Explore Rspack, a fast Rust-based web bundler, and its integration with Next.js.",
  },
]