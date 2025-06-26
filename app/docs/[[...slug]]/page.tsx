// This is now a React Server Component

import Link from "next/link"; // Link can be used in RSCs
import { buildingYourApplicationItems, apiReferenceItems, guidesItems, architectureItems, communityItems } from "../types/nav-data";
import { NavItem } from "../types/nav";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const allNavItems: NavItem[] = [
    { title: "Getting Started", url: "/docs/getting-started" },
    { title: "Guides", url: "/docs/guides" },
    { title: "API Reference", url: "/docs/api-reference" },
    { title: "Architecture", url: "/docs/architecture" },
    { title: "Community", url: "/docs/community" },
    ...buildingYourApplicationItems,
    ...guidesItems,
    ...apiReferenceItems,
    ...architectureItems,
    ...communityItems,
  ];

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
    { title: "Getting Started", url: "/docs/getting-started" },
    { title: "Guides", url: "/docs/guides" },
    { title: "API Reference", url: "/docs/api-reference" },
    { title: "Architecture", url: "/docs/architecture" },
    { title: "Community", url: "/docs/community" },
    ...buildingYourApplicationItems,
    ...guidesItems,
    ...apiReferenceItems,
    ...architectureItems,
    ...communityItems,
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

  let subItems: NavItem[] = activeItem.items || [];

  // If the active item is a section header (which we've added manually and has no `items`), find its children.
  if (subItems.length === 0) {
    const sectionItemsMap: { [key: string]: NavItem[] } = {
      "Getting Started": buildingYourApplicationItems,
      "Guides": guidesItems,
      "API Reference": apiReferenceItems,
      "Architecture": architectureItems,
      "Community": communityItems,
    };
    subItems = sectionItemsMap[activeItem.title] || [];
  }

  return (
    <div className="prose dark:prose-invert ">
      <h1>{activeItem.title}</h1>
      {subItems.length > 0 ? (
        <>
          <p>Content for "{activeItem.title}" goes here. Explore the sub-sections below.</p>
          <h2>Sub-sections:</h2>
          <ul>
            {subItems.map((subItem) => ( // Re-implementing link rendering without NavItemRenderer
              <li key={subItem.url}>
                <Link href={subItem.url} className="text-blue-500 hover:underline">
                  {subItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
         <p>Content for "{activeItem.title}" goes here.</p>
      )}
    </div>
  );
}