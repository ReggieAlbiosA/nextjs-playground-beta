"use client";

import { usePathname } from "next/navigation";
import  MobileMenu  from "./MobileMenu";
import  DocSearch  from "./DocSearch";
import  Footer  from "../server-components/Footer";


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
    return <DocSearch className="md:w-46 lg:w-60 hidden lg:block md:block w-10 " spanClassName="hidden  absolute left-[45px] top-[8px] lg:block md:block"/>;
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