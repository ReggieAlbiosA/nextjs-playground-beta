"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import { NavItem } from "../types/nav";
import { NavItemRenderer } from "./NavItemRenderer";

interface CollapsibleNavSectionProps {
  title: string;
  items: NavItem[];
  onLinkClick?: () => void; // For closing mobile menu
  icon?: React.ReactNode;
}

export function CollapsibleNavSection({ title, icon, items, onLinkClick }: CollapsibleNavSectionProps) {
  const pathname = usePathname();
  // Determine initial expanded state based on current path
  const sectionRootUrl = `/docs/${title.toLowerCase().replace(/\s+/g, '-')}`;
  const isPathActive = pathname.startsWith(sectionRootUrl);
  const [isExpanded, setIsExpanded] = useState(isPathActive);

  // Effect to expand if a child item becomes active due to navigation
  useEffect(() => {
   setIsExpanded(isPathActive);
  }, [pathname, isPathActive]); // Only depend on pathname and its derived active state

  const handleLinkClick = (e: React.MouseEvent) => {
    // If the clicked link is the root of this section AND the current path is already within this section,
    // then we want to toggle the collapse state without navigating.
    // Otherwise, let the Link component handle navigation, and the useEffect will update isExpanded.
    if (pathname.startsWith(sectionRootUrl) && e.currentTarget.getAttribute('href') === sectionRootUrl) {
      e.preventDefault(); // Prevent navigation
      setIsExpanded(prev => !prev); // Toggle collapse state
    }

    // Always call onLinkClick for mobile menu closure, regardless of navigation or toggle
    if (onLinkClick) {
      onLinkClick(); // Close mobile menu
    }
  };

  return (
    <section>
      <Link
        href={sectionRootUrl}
        onClick={handleLinkClick}
        className="flex items-center justify-between mb-3 px-3 text-sm font-semibold text-foreground/70 hover:text-foreground group"
      >
        <div className="flex items-center gap-2">
            {icon}
            <h3>{title}</h3>
        </div>
        <span className="ml-2 transition-transform duration-200 group-hover:scale-110">
          {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </span>
      </Link>
      {isExpanded && (
        <ul className="space-y-1">
          {items.map(item => (
            <NavItemRenderer
              key={item.url}
              item={item}
              onLinkClick={onLinkClick}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
