import { DocsSidebar } from "./server-components/DocsSideBar";
import { MobileDocsSidebar } from "./client-components/MobileDocsSideBar";

export const metadata = {
  title: "Documentation - Next.js Playground",
  description: "Comprehensive Next.js documentation and guides",
};

import { NonCollapsibleNavSection } from "./client-components/NonCollapsibleNavSection"; // Renamed import
import { CollapsibleNavSection } from "./client-components/CollapsibleNavSection";
import { buildingYourApplicationItems, apiReferenceItems, guidesItems, architectureItems, communityItems } from "./types/nav-data";

import { BookOpen } from "lucide-react";


export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  // This JSX is now pre-rendered on the server
  const sidebarContent = (
    <>
      <NonCollapsibleNavSection title="Getting Started" items={buildingYourApplicationItems} />
      <CollapsibleNavSection title="Guides" icon={<BookOpen size={16}/>} items={guidesItems} />
      <NonCollapsibleNavSection title="API Reference" items={apiReferenceItems} />
      <NonCollapsibleNavSection title="Architecture" items={architectureItems} />
      <NonCollapsibleNavSection title="Community" items={communityItems} />
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
        <div className="px-4 py-4 w-full sticky top-[65px] border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-border md:hidden">
          <MobileDocsSidebar>
            {sidebarContent}
          </MobileDocsSidebar>
        </div>
        
        <main className="md:ml-64">
          <article className="container mx-auto px-4 py-8">
            {children}
          </article>
        </main>
      </div>
    </div>
  );
}