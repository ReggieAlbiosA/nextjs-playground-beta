import { NavItem } from '../types/nav';
import { NavItemRenderer } from '../client-components/NavItemRenderer';


interface NavSectionProps {
  title: string;
  items: NavItem[];
  onLinkClick?: () => void;
}

// This is a Server Component
export function NavSection({ title, items, onLinkClick }: NavSectionProps) {
  return (
    <section>
      <h3 className="mb-3 px-3 text-sm font-semibold text-foreground/70">
        {title}
      </h3>
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