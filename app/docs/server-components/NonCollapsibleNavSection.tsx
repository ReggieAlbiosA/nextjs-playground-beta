import { NavItem } from '../types/nav';
import { NavItemRenderer } from '../client-components/NavItemRenderer';
import Link from 'next/link';


interface NonCollapsibleNavSectionProps {
  title: string;
  items: NavItem[];
  onLinkClick?: () => void;
}

// This is a Server Component
export function NonCollapsibleNavSection({ title, items, onLinkClick }: NonCollapsibleNavSectionProps) {
  return (
    <section>
      <Link href={`/docs/${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <h3 className="mb-3 px-3 text-sm font-semibold text-foreground/70 hover:text-foreground">
          {title}
        </h3>
      </Link>
      <ul className="space-y-1">
        {items.map(item => (
          // We render the Client Component here for each item
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