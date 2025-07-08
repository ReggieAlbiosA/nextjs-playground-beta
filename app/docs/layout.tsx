import { DocsSidebar } from "./(_shared)/server-components/DocsSideBar";
import { MobileDocsSidebar } from "./(_shared)/client-components/MobileDocsSideBar";

export const metadata = {
  title: "Documentation - Next.js Playground",
  description: "Comprehensive Next.js documentation and guides",
};

import { NonCollapsibleNavSection } from "./(_shared)/client-components/NonCollapsibleNavSection";
import { CollapsibleNavSection } from "./(_shared)/client-components/CollapsibleNavSection";
import { buildingYourApplicationItems, apiReferenceItems, guidesItems, architectureItems, communityItems } from "./(_shared)/types/nav-data";

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
  )
  
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
            {children}
        </main>

      </div>
    </div>
  );
}