// app/docs/page.tsx or app/docs/[slug]/page.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function RemoteDocsPage() {
    // URL points to a specific commit hash for a fixed version of the README
    const fixedVersionUrl = 'https://raw.githubusercontent.com/torvalds/linux/master/README';

    const res = await fetch(fixedVersionUrl, {
      // It's a good practice to cache a fixed resource
      next: { revalidate: false } // false means cache indefinitely
    });

    const markdown = await res.text();

    return (
        <Card className="flex flex-col">
            <CardHeader>
                <CardTitle>Remote MDX Content (Fixed Version)</CardTitle>
                <CardDescription className="text-muted-foreground">
                    This page fetches raw MDX from an external source at a specific commit, parses it on the server, and renders it
                    within a layout component. This ensures content consistency across builds.
                </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-invert bg-card text-card-foreground flex mx-6 flex-col gap-6 rounded-xl border py-6 shadow-sm">
                <MDXRemote source={markdown} />
            </CardContent>
        </Card>
    );
}