import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Counter from "./client-components/Counter";

export default function TemplateJsPreviewLayout({
  children,
  template,
}: {
  children: React.ReactNode;
  template: React.ReactNode;
}) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        <code>template.js</code> Preview
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        This page demonstrates the behavior of a <code>template.js</code> file in Next.js.
      </p>
      <div className="mt-8 not-prose">
        <Card>
          <CardHeader>
            <CardTitle>Layout.tsx</CardTitle>
            <CardDescription>
              This is a shared layout component. The counter below is part of this
              layout and should preserve its state when you navigate between Page 1 and Page 2.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Counter />
            <div className="flex space-x-4">
              <Button asChild>
                <Link href="/docs/api-reference/file-conventions/template-js/preview/page1">
                  Go to Page 1
                </Link>
              </Button>
              <Button asChild>
                <Link href="/docs/api-reference/file-conventions/template-js/preview/page2">
                  Go to Page 2
                </Link>
              </Button>
            </div>
            <div className="mt-4 p-4 border rounded-lg">
              {children}
            </div>
          </CardContent>
        </Card>
        {template}
      </div>
    </div>
  );
}