// This is now a React Server Component

import Link from "next/link"; // Link can be used in RSCs
import { buildingYourApplicationItems, apiReferenceItems } from "../types/nav-data";
import { NavItem } from "../types/nav";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const allNavItems = [...buildingYourApplicationItems, ...apiReferenceItems];

  function getAllSlugs(items: NavItem[]): { slug: string[] }[] {
    let paths: { slug: string[] }[] = [];

    for (const item of items) {
      // Example URL: /docs/routing/route-handlers -> slug: ['routing', 'route-handlers']
      const slug = item.url.split('/').filter(segment => segment && segment !== 'docs');
      paths.push({ slug });

      if (item.items) {
        paths = paths.concat(getAllSlugs(item.items));
      }
    }
    return paths;
  }

  // Return all slugs including the root /docs page
  return [{ slug: [] }, ...getAllSlugs(allNavItems)];
}

function findNavItem(
  items: NavItem[],
  pathname: string
): NavItem | null {
  for (const item of items) {
    // Exact match for a leaf node or a section header
    if (item.url === pathname) {
      return item;
    }

    // If it's a section with sub-items, check if the pathname starts with the section's URL
    // and then recursively search within its children.
    if (item.items && pathname.startsWith(item.url)) {
      const foundInSubItems = findNavItem(item.items, pathname);
      if (foundInSubItems) {
        return foundInSubItems;
      }
    }
  }
  return null;
}

export default async function DocsPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params;

  // Construct the full path for lookup, e.g., /docs/routing/route-handlers from the slug
  const currentPath = ['/docs', ...slug].join('/');

  // Combine all navigation items for searching
  const allNavItems: NavItem[] = [
    ...buildingYourApplicationItems,
    ...apiReferenceItems,
  ];

  const activeItem = findNavItem(allNavItems, currentPath);

  // Handle the root /docs page explicitly, as it has no entry in nav-data
  if (slug.length === 0) {
    return (
      <div className="prose dark:prose-invert">
        <h1>Documentation</h1>
        <p>Welcome to the Next.js Playground documentation.</p>
        <p>Please select a topic from the sidebar to get started.</p>
      </div>
    );
  }

  if (!activeItem) {
    return (
      notFound()
    );
  }

  return (
    <div className="prose dark:prose-invert ">
      <h1>{activeItem.title}</h1>
      {activeItem.items && activeItem.items.length > 0 && (
        <>
          <h2>Sub-sections:</h2>
          <ul>
            {activeItem.items.map((subItem) => ( // Re-implementing link rendering without NavItemRenderer
              <li key={subItem.url}>
                <Link href={subItem.url} className="text-blue-500 hover:underline">
                  {subItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
      <p>Content for "{activeItem.title}" goes here.</p>
    </div>
  );
}