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
    items: [], // This makes it a sub-parent link
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
    items: [], // This makes it a sub-parent link
  },
  {
    title: "Third Party Libraries",
    url: "/docs/guides/third-party-libraries",
  },
  {
    title: "Upgrading",
    url: "/docs/guides/upgrading",
    items: [], // This makes it a sub-parent link
  },
  {
    title: "Videos",
    url: "/docs/guides/videos",
  },
];
