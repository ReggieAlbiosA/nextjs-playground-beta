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

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 not-prose">
      <Card>
        <CardHeader>
          <CardTitle>template.tsx</CardTitle>
          <CardDescription>
            This is a template component. The counter below is part of this
            template and will reset its state when you navigate between Page 1 and Page 2.
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
    </div>
  );
}