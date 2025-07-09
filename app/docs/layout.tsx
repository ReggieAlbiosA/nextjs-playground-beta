export const metadata = {
  title: "Documentation - Next.js Playground",
  description: "Comprehensive Next.js documentation and guides",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
        <main>
            {children}
        </main>
  );
}8