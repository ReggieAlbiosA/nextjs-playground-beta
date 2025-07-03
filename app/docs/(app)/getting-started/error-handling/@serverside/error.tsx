'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useEffect } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service like Sentry, LogRocket, etc.
    console.error("Caught in error.tsx:", error);
  }, [error]);

  return (
    <Card className="bg-destructive/10 border-destructive/50 shadow-lg h-[800px]">
      <CardHeader className="flex flex-row items-center gap-4 pb-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-destructive/20">
            <AlertTriangle className="w-6 h-6 text-destructive" />
        </div>
        <div>
            <CardTitle className="text-destructive">Server-Side Error</CardTitle>
            <CardDescription className="text-destructive/90">
              This component encountered an unexpected error.
            </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-destructive/90">
          The `error.tsx` file is designed to catch and handle unexpected issues that occur during server-side rendering, preventing a full page crash.
        </p>
        
        <div className="p-3 rounded-md bg-destructive/10 border border-destructive/20">
          <p className="text-sm font-semibold text-destructive">Error Details:</p>
          <code className="block mt-1 text-xs text-destructive/80 bg-transparent p-0">
            {error.message}
          </code>
        </div>

        <div className="flex items-center gap-4">
          <Button onClick={() => reset()} variant="destructive" className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </Button>
          <p className="text-xs text-destructive/70">
            This will attempt to re-render the component.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}