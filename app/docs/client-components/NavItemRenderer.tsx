"use client";

import { useState } from "react";
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

  const IconComponent = item.icon ? (Icons[item.icon as keyof typeof Icons] as LucideIcon) : null;

  const handleToggle = () => {
    setIsExpanded(prev => !prev);
  };

  const handleClick = () => {
    // If it's a leaf node and the callback exists, call it
    if (!hasChildren && onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <li className={cn(level > 0 && "pl-4")}>
      <div
        className={cn(
          "flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors",
          "hover:bg-accent hover:text-accent-foreground",
          (isActive || (isParentActive && !isExpanded)) && "bg-accent text-accent-foreground font-medium"
        )}
      >
        <Link
          href={item.url}
          className="flex items-center gap-2 flex-1 min-w-0"
          onClick={handleClick}
          aria-current={isActive ? "page" : undefined}
        >
          {IconComponent && <IconComponent size={16} />}
          <span className="truncate">{item.title}</span>
        </Link>

        {hasChildren && (
          <button
            onClick={handleToggle}
            className="p-1 hover:bg-background/50 rounded-sm ml-2"
            aria-label={`Toggle ${item.title} section`}
            aria-expanded={isExpanded}
          >
            {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
        )}
      </div>

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