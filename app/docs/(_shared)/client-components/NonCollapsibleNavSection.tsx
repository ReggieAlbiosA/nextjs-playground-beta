'use client';

import { usePathname } from 'next/navigation';
import { NavItem } from '../types/nav';
import { NavItemRenderer } from '../client-components/NavItemRenderer';
import { cn } from '@/lib/utils';
import HoverPrefetchLink from '@/components/ui/hover-prefetch-link';

interface NonCollapsibleNavSectionProps {
  title: string;
  items: NavItem[];
  onLinkClick?: () => void;
}

export function NonCollapsibleNavSection({ title, items, onLinkClick }: NonCollapsibleNavSectionProps) {
  const pathname = usePathname();
  const sectionRootUrl = `/docs/${title.toLowerCase().replace(/\s+/g, '-')}`;
  const isActive = pathname === sectionRootUrl;

  return (
    <section>
      <HoverPrefetchLink href={sectionRootUrl}>
        <h2
          className={cn(
            'mb-3 px-3 text-sm font-semibold text-foreground/70 hover:text-foreground',
            isActive && 'text-blue-600 dark:text-blue-400'
          )}
        >
          {title}
        </h2>
      </HoverPrefetchLink>
      <ul className="space-y-1">
        {items.map(item => (
          <NavItemRenderer
            key={item.url}
            item={item}
            onLinkClick={onLinkClick}
          />
        ))}
      </ul>
    </section>
  );
}