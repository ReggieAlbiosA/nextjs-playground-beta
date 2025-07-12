"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogClose,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { buildingYourApplicationItems, apiReferenceItems, guidesItems, architectureItems, communityItems } from "@/app/docs/(_shared)/types/nav-data";
import { NavItem } from "@/app/docs/(_shared)/types/nav";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

type SearchResult = NavItem;

const flattenNavItems = (items: NavItem[]): NavItem[] => {
  return items.flatMap(item => {
    const children = item.items ? flattenNavItems(item.items) : [];
    return [item, ...children];
  });
};

const initialNavItems: NavItem[] = [
    { title: "Getting Started", url: "/docs/getting-started", description: "An overview of the fundamentals and project structure." },
    { title: "Guides", url: "/docs/guides", description: "Practical guides for building features with Next.js." },
    { title: "API Reference", url: "/docs/api-reference", description: "A detailed reference for the Next.js API." },
    { title: "Architecture", url: "/docs/architecture", description: "Learn about the architecture of Next.js."},
    { title: "Community", url: "/docs/community", description: "Join the community and contribute to Next.js." },
];

export default function DocSearch({ className, spanClassName }: { className?: string, spanClassName?: string }) {
  const [query, setQuery] = useState("");
  const [displayedItems, setDisplayedItems] = useState<SearchResult[]>(initialNavItems);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const router = useRouter();

  const allDocs: NavItem[] = useMemo(() => {
    const allItems = [
      ...buildingYourApplicationItems,
      ...apiReferenceItems,
      ...guidesItems,
      ...architectureItems,
      ...communityItems,
    ];
    return flattenNavItems(allItems);
  }, []);

  // Perform search and update displayed items
  useEffect(() => {
    if (query.length > 0) {
      const filteredResults = allDocs.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.url.toLowerCase().includes(query.toLowerCase())
      );
      setDisplayedItems(filteredResults);
    } else {
      setDisplayedItems(initialNavItems);
    }
    setSelectedIndex(0);
  }, [query, allDocs]);

  // Handle keyboard shortcuts for opening/closing
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setIsOpen(true);
      }
      if (event.key === "Escape" && isOpen) {
        event.preventDefault();
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Auto-focus input when dialog opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Scroll to selected item
  useEffect(() => {
    if (isOpen && displayedItems.length > 0 && listRef.current) {
        const itemElement = listRef.current.children[selectedIndex] as HTMLLIElement;
        if (itemElement) {
            itemElement.scrollIntoView({
                block: 'nearest',
            });
        }
    }
  }, [selectedIndex, isOpen, displayedItems]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setQuery("");
    setSelectedIndex(0);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      handleClose();
    } else {
      setIsOpen(open);
    }
  };

  const handleLinkClick = () => {
    handleClose();
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (displayedItems.length === 0) return;

    if (event.key === 'ArrowDown') {
        event.preventDefault();
        setSelectedIndex(prev => (prev + 1) % displayedItems.length);
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setSelectedIndex(prev => (prev - 1 + displayedItems.length) % displayedItems.length);
    } else if (event.key === 'Enter') {
        event.preventDefault();
        const selectedUrl = displayedItems[selectedIndex]?.url;
        if (selectedUrl) {
            router.push(selectedUrl);
            handleClose();
        }
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild className="">
            <Button
                variant="ghost"
                className={`relative bg-accent dark:hover:bg-accent/50 h-9 justify-start text-sm text-muted-foreground  ${className}`}
                onClick={handleOpen}
                >
                <Search className="mr-2 h-4 w-4" />
                <span className={`${spanClassName}`}>Search docs...</span>
                <kbd className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>
                </kbd>
            </Button>
        </DialogTrigger>
        <DialogContent aria-describedby={undefined} className="sm:max-w-2xl p-0 z-[2000] overflow-hidden top-[10%] translate-y-0" >
          <DialogHeader className="relative p-0 border-b">
            <VisuallyHidden>
              <DialogTitle className="text-base font-semibold">
                Search docs
              </DialogTitle>
            </VisuallyHidden>

            <div className="relative flex items-center">
              <Search className="absolute left-4 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                ref={inputRef}
                type="text"
                placeholder="Search documentation..."
                className="pl-12 pr-12 py-4 h-14 rounded-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-base bg-transparent"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleInputKeyDown}
                
              />
              <DialogClose
                asChild
                className="absolute right-4 h-8 w-8 p-0 hover:bg-muted rounded-full"
              >
              </DialogClose>
            </div>
          </DialogHeader>

          <div className="relative">
            {/* Results List */}
            {displayedItems.length > 0 && (
              <div className="max-h-96 overflow-y-auto">
                <ul ref={listRef} className="py-2">
                  {displayedItems.map((item, index) => (
                    <li key={`${item.url}-${index}`} className={cn(index === selectedIndex && "bg-accent")}>
                      <Link
                        href={item.url}
                        prefetch={true}
                        className="flex flex-col gap-1 px-4 py-3 text-sm hover:bg-accent hover:text-accent-foreground transition-colors duration-150 focus:bg-accent focus:text-accent-foreground focus:outline-none border-l-2 border-l-transparent hover:border-l-primary/50"
                        onClick={handleLinkClick}
                        tabIndex={-1}
                      >
                        <span className="font-medium text-foreground">
                          {item.title}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {item.url}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* No Results State */}
            {query.length > 0 && displayedItems.length === 0 && (
              <div className="px-4 py-8 text-center">
                <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-muted-foreground" />
                </div>
                <p className="text-sm font-medium text-foreground mb-2">
                  No results found for &quot;{query}&quot;
                </p>
                <p className="text-xs text-muted-foreground">
                  Try adjusting your search terms or check for typos
                </p>
              </div>
            )}
          </div>

          <div className="border-t bg-muted/30 px-4 py-3">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-4">
                <span>Navigate with ↑↓</span>
                <span>Select with ↵</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-background rounded border text-[10px]">ESC</kbd>
                <span>to close</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}