

interface DocsSidebarProps {
  children: React.ReactNode;
  className?: string;  
}

export function DocsSidebar({ children, className }: DocsSidebarProps) {
  
  return (
    // This sidebar is hidden on mobile screens (`hidden md:block`)
    <aside className={`hidden lg:block  bg-background overflow-y-auto h-[calc(100vh-65px)]  left-0  border-r ${className}`}>
      <div className="flex flex-col  h-full">
        <div className="flex-1 p-4">
          <nav className="space-y-6" aria-label="Documentation sidebar">
            {children}
          </nav>
        </div>
      </div>
    </aside>
  );
}