"use client";

import { usePathname } from "next/navigation";
import { MobileMenu } from "./MobileMenu";
import { DocSearch } from "./DocSearch";

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
    return null;
  }
  
  return <DocSearch className="md:w-46 lg:w-60 sm:w-18 w-10" spanClassName="hidden lg:block md:block"/>;
} 