"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogClose,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { buildingYourApplicationItems, apiReferenceItems, guidesItems, architectureItems, communityItems } from "@/app/docs/types/nav-data";
import { NavItem } from "@/app/docs/types/nav";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";

type SearchResult = NavItem;

export default function DocSearch({ className, spanClassName }: { className?: string, spanClassName?: string }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const allDocs: NavItem[] = useMemo(() => {
    return [
      ...buildingYourApplicationItems,
      ...apiReferenceItems,
      ...guidesItems,
      ...architectureItems,
      ...communityItems,
    ];
  }, []);

  // Perform search synchronously on query change
  useEffect(() => {
    if (query.length > 0) {
      const filteredResults = allDocs.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.url.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [query, allDocs]);

  // Handle keyboard shortcuts
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
      // No timeout needed here, but a small delay can prevent focus issues
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setQuery("");
    setResults([]);
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

  return (
    <>
    
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild className="">
            <Button
                variant="ghost"
                className={`relative bg-accent dark:hover:bg-accent/50 h-9 justify-start text-sm text-muted-foreground ${className}`}
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
              />
              <DialogClose
                asChild
                className="absolute right-4 h-8 w-8 p-0 hover:bg-muted rounded-full"
              >
              </DialogClose>
            </div>
          </DialogHeader>

          <div className="relative">
            {/* Initial State (no query) */}
            {query.length === 0 && (
              <div className="px-4 py-6 text-center">
                <Search className="mx-auto h-12 w-12 text-muted-foreground/30 mb-4" />
                <p className="text-sm text-muted-foreground mb-2">
                  Search through the documentation
                </p>
                <p className="text-xs text-muted-foreground">
                  Start typing to find pages, components, and guides
                </p>
              </div>
            )}

            {/* Results List */}
            {results.length > 0 && (
              <div className="max-h-96 overflow-y-auto">
                <ul className="py-2">
                  {results.map((item, index) => (
                    <li key={`${item.url}-${index}`}>
                      <Link
                        href={item.url}
                        className="flex flex-col gap-1 px-4 py-3 text-sm hover:bg-accent hover:text-accent-foreground transition-colors duration-150 focus:bg-accent focus:text-accent-foreground focus:outline-none border-l-2 border-l-transparent hover:border-l-primary/50"
                        onClick={handleLinkClick}
                        tabIndex={0}
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
            {query.length > 0 && results.length === 0 && (
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