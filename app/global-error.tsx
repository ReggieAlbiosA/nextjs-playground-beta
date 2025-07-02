'use client'; // Error boundaries must be Client Components

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';
import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    // global-error must include html and body tags
    <html>
      <body>
        <main className="flex min-h-screen w-full flex-col items-center justify-center space-y-8 p-8 text-center bg-background">
          <div className="flex flex-col items-center space-y-4">
            <AlertTriangle
              className="h-20 w-20 text-destructive"
              aria-hidden="true"
            />
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight text-foreground">
                Something went wrong
              </h1>
              <p className="max-w-md text-muted-foreground">
                {error.message || "An unexpected error occurred. Please try again."}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Button onClick={() => reset()}>Try again</Button>
            <Button asChild variant="outline">
              <Link href="/" prefetch={true}>
                Return Home
              </Link>
            </Button>
          </div>
        </main>
      </body>
    </html>
  );
}
