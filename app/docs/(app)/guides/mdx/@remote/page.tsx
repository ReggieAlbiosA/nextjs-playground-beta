// app/docs/page.tsx or app/docs/[slug]/page.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MDXRemote } from 'next-mdx-remote/rsc'


export default async function RemoteDocsPage() {
    const res = await fetch('https://raw.githubusercontent.com/torvalds/linux/master/README')
    const markdown = await res.text()


  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>Remote MDX Content</CardTitle>
        <CardDescription className="text-muted-foreground">
          This page fetches raw MDX from an external source, parses it on the server, and renders it
          within a layout component. This allows decoupling content from code, great for headless CMS.
        </CardDescription>
      </CardHeader>

      <CardContent className="prose prose-invert bg-card text-card-foreground flex mx-6 flex-col gap-6 rounded-xl border py-6 shadow-smo">
       <MDXRemote source={markdown} />
      </CardContent>
    </Card>
  );
}
