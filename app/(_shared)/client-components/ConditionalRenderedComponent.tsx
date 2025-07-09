"use client";

import { usePathname } from "next/navigation";
import  MobileMenu  from "./MobileMenu";
import  DocSearch  from "./DocSearch";
import  Footer  from "../server-components/Footer";
import { DocsSidebar } from "@/app/docs/(_shared)/server-components/DocsSideBar";
import { MobileDocsSidebar } from "@/app/docs/(_shared)/client-components/MobileDocsSideBar";


export function ConditionalMobileMenu() {
  const pathname = usePathname();
  
  // Don't show the general mobile menu on docs pages
  if (pathname.startsWith('/docs')) {
    return null;
  }
  
  return <MobileMenu />;
}

export function ConditionalDocsSearch() {
  const pathname = usePathname();
  
  // Don't show the general mobile menu on docs pages
  if (pathname.startsWith('/docs')) {
    return <DocSearch className="md:w-46 lg:w-60 hidden lg:block w-10" spanClassName="hidden  absolute left-[45px] top-[8px] lg:block md:block"/>;
  }
  
  return <DocSearch className="md:w-46 lg:w-60 sm:w-18 w-10" spanClassName="hidden lg:block md:block"/>;
} 

export function ConditionalFooter() {
  const pathname = usePathname();

  // Don't show the footer on docs pages
  if (pathname.startsWith("/docs")) {
    return null;
  }

  return <Footer />;
}
export function ConditionalParentLayoutStyle({ children, className }: { children: React.ReactNode; className?: string }) {
  const pathname = usePathname();

  // Don't render this component on docs pages
  if (pathname.startsWith("/docs")) {
    return <div className={className}>
            {children}
           </div>;
  }
    return <>{children}</>
  
}

export function ConditionalDocSideBar({ children, className }: { children: React.ReactNode; className?: string }) {
  const pathname = usePathname();

  // Don't show the sidebar on docs pages
  if (pathname.startsWith('/docs')) {
    return <DocsSidebar className={className}>{children}</DocsSidebar>;
  }
  
  return null;
};

export function ConditionalMobileDocsSidebar({ children, className }: { children: React.ReactNode; className?: string }) {
  const pathname = usePathname();

  // Don't show the mobile sidebar on docs pages
  if (pathname.startsWith('/docs')) {
    return (
      <div className="lg:hidden  z-100 block px-4 py-4 w-full sticky top-[64px] border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-border">
          <MobileDocsSidebar className={className}>{children}</MobileDocsSidebar>
      </div>
    )
  }
  
  return null;
};
