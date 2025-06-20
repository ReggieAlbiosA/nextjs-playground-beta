// app/docs/layout.tsx - Docs-specific layout with sidebar
import { DocsLayout } from "./components/DocsLayout";

export const metadata = {
  title: "Documentation - Next.js Playground",
  description: "Comprehensive Next.js documentation and guides",
};


export default function DocsLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}){


  return <DocsLayout>{children}</DocsLayout>;
}