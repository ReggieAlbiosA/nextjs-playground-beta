
interface DocsSidebarProps {
  children: React.ReactNode;
}

export function DocsSidebar({ children }: DocsSidebarProps) {
  return (
    // This sidebar is hidden on mobile screens (`hidden md:block`)
    <aside className="hidden md:block  bg-background overflow-y-auto fixed left-0 h-[calc(100%-4rem)] top-[4.1rem] border-r">
      <div className="flex flex-col h-full">
        <div className="flex-1 p-4">
          <nav className="space-y-6" aria-label="Documentation sidebar">
            {children}
          </nav>
        </div>
      </div>
    </aside>
  );
}