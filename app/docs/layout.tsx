import { DocsSidebar } from "./server-components/DocsSideBar";
import { MobileDocsSidebar } from "./client-components/MobileDocsSideBar";

export const metadata = {
  title: "Documentation - Next.js Playground",
  description: "Comprehensive Next.js documentation and guides",
};

import { NavSection } from "./server-components/NavSection";
import { buildingYourApplicationItems, apiReferenceItems } from "./types/nav-data";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  // This JSX is now pre-rendered on the server
  const sidebarContent = (
    <>
      <NavSection title="Getting Started" items={buildingYourApplicationItems} />
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