"use client";

import { usePathname } from "next/navigation";
import { MobileMenu } from "./MobileMenu";

export function ConditionalMobileMenu() {
  const pathname = usePathname();
  
  // Don't show the general mobile menu on docs pages
  if (pathname.startsWith('/docs')) {
    return null;
  }
  
  return <MobileMenu />;
}