import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <Card className="bg-background/50 flex flex-col">
      <CardHeader className="space-y-4">
        <CardTitle className="flex items-center gap-2">
          About This Blog
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          This is an example "About" page for the hybrid MDX + TSX setup. It demonstrates how you can easily add static content pages within your Next.js application, leveraging the existing layout and styling.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 flex-1">
        <p className="text-muted-foreground">Our mission is to provide insightful articles and guides on the latest trends in technology, software development, and cybersecurity. We aim to be a valuable resource for developers and tech enthusiasts alike.</p>
      </CardContent>
    </Card>
  );
}