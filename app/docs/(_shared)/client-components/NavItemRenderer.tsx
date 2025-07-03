"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";
import { NavItem } from "../types/nav";

interface NavItemRendererProps {
  item: NavItem;
  level?: number;
  onLinkClick?: () => void; // Optional callback to close mobile menu
}

export function NavItemRenderer({ item, level = 0, onLinkClick }: NavItemRendererProps) {
  const pathname = usePathname();
  const hasChildren = item.items && item.items.length > 0;

  // A parent is active if the current path starts with its URL
  const isParentActive = hasChildren && pathname.startsWith(item.url);
  
  // A link is active if the current path is exactly its URL
  const isActive = pathname === item.url;
  
  const [isExpanded, setIsExpanded] = useState(isParentActive);
  const userAction = useRef(false);

  // This effect handles two cases:
  // 1. On initial load, it sets the expanded state based on the active path.
  // 2. On browser navigation (back/forward), it ensures the relevant parent section expands.
  // It is designed to NOT run when the user manually toggles a section, preventing it from
  // overriding the user's action.
  useEffect(() => {
    // If the state was changed by a user click, do nothing.
    if (userAction.current) {
      userAction.current = false; // Reset for next navigation
      return;
    }
    // If the path makes this item a parent, expand it.
    // This allows multiple sections to be open, as it never sets state to `false`.
    if (isParentActive) {
      setIsExpanded(true);
    }
  }, [pathname, isParentActive]);

  const IconComponent = item.icon ? (Icons[item.icon as keyof typeof Icons] as LucideIcon) : null;

  const handleClick = () => {
    if (hasChildren) {
      // Flag that the next state change is from a direct user action.
      userAction.current = true;
      setIsExpanded(prev => !prev);
    }
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <li className={cn(level > 0 && "pl-4")}>
      <Link
        href={item.url}
        prefetch={true}
        onClick={handleClick}
        className={cn(
          "flex w-full items-center justify-between rounded-md pl-2 pr-4 py-0.5 text-sm ",
          "duration-50 ease-in  max-w-max hover:opacity-80",
          (isActive || (isParentActive && !isExpanded)) && "text-blue-600 dark:text-blue-400 font-medium hover:opacity-100 "
        )}
        aria-current={isActive ? "page" : undefined}
        aria-expanded={hasChildren ? isExpanded : undefined}
      >
        <span className="flex items-center gap-2 flex-1 min-w-0">
          {IconComponent && <IconComponent size={16} />}
          <span className="truncate">{item.title}</span>
        </span>

        {hasChildren && (
          // The chevron is now just a visual indicator inside the link
          <span className="ml-2">
             {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </span>
        )}
      </Link>

      {hasChildren && isExpanded && (
        <ul className="mt-1 space-y-1">
          {item.items!.map(subItem => (
            <NavItemRenderer 
              key={subItem.url} 
              item={subItem} 
              level={level + 1}
              onLinkClick={onLinkClick}
            />
          ))}
        </ul>
      )}
    </li>
  );
}