import { LinkCard } from "../(_shared)/client-components/LinkCard";
import { buildingYourApplicationItems, guidesItems, apiReferenceItems, architectureItems, communityItems } from "../(_shared)/types/nav-data";
import { NavItem } from "../(_shared)/types/nav";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const allNavItems: NavItem[] = [
    { title: "Getting Started", url: "/docs/getting-started", description: "An overview of the fundamentals and project structure." },
    { title: "Guides", url: "/docs/guides", description: "Practical guides for building features with Next.js." },
    { title: "API Reference", url: "/docs/api-reference", description: "A detailed reference for the Next.js API." },
    { title: "Architecture", url: "/docs/architecture", description: "Learn about the architecture of Next.js."}, 
    { title: "Community", url: "/docs/community", description: "Join the community and contribute to Next.js." },
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
      const slug: string[] = item.url.split('/').filter((segment: string) => segment && segment !== 'docs');
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
    { title: "Getting Started", url: "/docs/getting-started", description: "An overview of the fundamentals and project structure." },
    { title: "Guides", url: "/docs/guides", description: "Practical guides for building features with Next.js." },
    { title: "API Reference", url: "/docs/api-reference", description: "A detailed reference for the Next.js API." },
    { title: "Architecture", url: "/docs/architecture", description: "Learn about the architecture of Next.js."}, 
    { title: "Community", url: "/docs/community", description: "Join the community and contribute to Next.js." },
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
      <div className="px-6 py-8 prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Documentation</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Welcome to the Next.js Playground documentation. Explore the sections below to learn about the latest features of the App Router.
        </p>
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
    <article className="prose px-6 py-8 dark:prose-invert max-w-none">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {activeItem.title}
        </h1>
        {activeItem.description && (
          <p className="mt-4 text-lg text-muted-foreground">
            {activeItem.description}
          </p>
        )}
      </header>

      {subItems.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {subItems.map((subItem) => (
            <LinkCard key={subItem.url} item={subItem} />
          ))}
        </div>
      )}

    
    </article>
  );
}
