
interface DocsSidebarProps {
  children: React.ReactNode;
}

export function DocsSidebar({ children }: DocsSidebarProps) {
  return (
    // This sidebar is hidden on mobile screens (`hidden md:block`)
    <aside className="hidden md:block w-64 h-screen fixed top-[4.1rem] border-r bg-background">
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto p-4">
          <nav className="space-y-6" aria-label="Documentation sidebar">
            {children}
          </nav>
        </div>
      </div>
    </aside>
  );
}