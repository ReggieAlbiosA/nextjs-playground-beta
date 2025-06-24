import { DocsSidebar } from "./server-components/DocsSideBar";
import { MobileDocsSidebar } from "./client-components/MobileDocsSideBar";
import { NavSection } from "./server-components/NavSection";
import type { NavItem } from "./types/nav"; // Make sure to have this type definition

export const metadata = {
  title: "Documentation - Next.js Playground",
  description: "Comprehensive Next.js documentation and guides",
};

// Data remains on the server
const buildingYourApplicationItems: NavItem[] = [
     {
    title: "Routing",
    url: "/docs/routing",
    icon: "Route",
    items: [
      { title: "Route Handlers", url: "/docs/routing/route-handlers" },
      { title: "Middleware", url: "/docs/routing/middleware" },
    ]
  },
  {
    title: "Data Fetching",
    url: "/docs/data-fetching",
    icon: "RefreshCcw",
    items: [
      { title: "Server Actions and Mutations", url: "/docs/data-fetching/server-actions" },
    ]
  },
  {
    title: "Deep Dive",
    url: "/docs/deep-dive",
    icon: "Droplets",
    items: [
      { title: "Caching", url: "/docs/deep-dive/caching" }
    ]
  }
];

const apiReferenceItems: NavItem[] = [
    {
    title: "Directives",
    url: "/docs/api-reference/directives",
    icon: "CodeXml",
    items: [
      { title: "use client", url: "/docs/api-reference/directives/use-client" },
      { title: "use server", url: "/docs/api-reference/directives/use-server" },
    ]
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
    ]
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
        ]
      }
    ]
  },
];


export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  // This JSX is now pre-rendered on the server
  const sidebarContent = (
    <>
      <NavSection title="Building Your Application" items={buildingYourApplicationItems} />
      <NavSection title="API Reference" items={apiReferenceItems} />
    </>
  );

  // The mobile sidebar needs a way to close itself when a link is clicked.
  // We can't easily pass the 'closeMenu' function through the `children` prop
  // from the MobileDocsSidebar to the NavItemRenderer.
  // A more advanced solution would use React Context to provide the `closeMenu` function.
  // For simplicity, the `NavItemRenderer` handles its own state, and the user
  // can click the overlay to close the mobile menu. The provided solution prioritizes
  // the server-rendering aspect of your request.

  return (
    <div className="flex">
      <DocsSidebar>
        {sidebarContent}
      </DocsSidebar>

      <div className="flex-1">
        <div className="px-4 py-4 w-full border-b border-border md:hidden">
          <MobileDocsSidebar>
            {sidebarContent}
          </MobileDocsSidebar>
        </div>
        
        {/* Main content area needs to account for the fixed sidebar width on desktop */}
        <main className="md:ml-64">
          <section className="container mx-auto px-4 py-8">
            {children}
          </section>
        </main>
      </div>
    </div>
  );
}