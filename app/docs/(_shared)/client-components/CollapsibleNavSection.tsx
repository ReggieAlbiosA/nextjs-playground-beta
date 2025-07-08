"use client";

import React, { useState, useEffect } from "react";

import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import { NavItem } from "../types/nav";
import { NavItemRenderer } from "./NavItemRenderer";
import { cn } from "@/lib/utils";
import HoverPrefetchLink from "@/components/ui/hover-prefetch-link";

interface CollapsibleNavSectionProps {
  title: string;
  items: NavItem[];
  onLinkClick?: () => void; // For closing mobile menu
  icon?: React.ReactNode;
}

export function CollapsibleNavSection({ title, icon, items, onLinkClick }: CollapsibleNavSectionProps) {
  const pathname = usePathname();
  const sectionRootUrl = `/docs/${title.toLowerCase().replace(/\s+/g, '-')}`;

  // A section is considered "active" if the current URL is the section's root URL.
  const isSectionActive = pathname === sectionRootUrl;
  
  // A section is considered a "parent" if the current URL starts with the section's root URL.
  // This includes the section's root URL itself.
  const isParentActive = pathname.startsWith(sectionRootUrl);

  // The section is expanded if it's a parent, but not if it's the active section itself
  // unless the user has expanded it. We use a state that is managed by an effect.
  const [isExpanded, setIsExpanded] = useState(isParentActive && !isSectionActive);

  // This effect ensures that the section expands automatically when the user navigates
  // into it (i.e., to one of its children), and collapses when they navigate away.
  useEffect(() => {
    setIsExpanded(isParentActive);
  }, [pathname, isParentActive]);

  const handleToggle = () => {
    // When the user clicks the section header link:
    // 1. If the section page is already the active page, we prevent navigation
    //    and just toggle the expanded state. This allows collapsing the section.
    if (isSectionActive) {
      if (typeof window !== "undefined") {
        // Prevent navigation if possible
        window.event?.preventDefault();
      }
      setIsExpanded(prev => !prev);
    }
    // 2. Otherwise, we allow the <Link> component to navigate to the section's root URL.
    //    The `useEffect` above will then ensure the section is expanded.

    if (onLinkClick) {
      // Delay closing the mobile menu to allow navigation to start.
      setTimeout(() => onLinkClick(), 150);
    }
  };

  return (
    <section>
      <HoverPrefetchLink
        href={sectionRootUrl}
        onClick={handleToggle}
        className={cn(
          "flex items-center justify-between mb-3 px-3 text-sm font-semibold text-foreground/70 hover:text-foreground group",
          isSectionActive && "text-blue-600 dark:text-blue-400"
        )}
        aria-current={isSectionActive ? "page" : undefined}
      >
        <div className="flex items-center gap-2">
          {icon}
          <h2>{title}</h2>
        </div>
        <span className="ml-2 transition-transform duration-200 group-hover:scale-110">
          {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </span>
      </HoverPrefetchLink>
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
