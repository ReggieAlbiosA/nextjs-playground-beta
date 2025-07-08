import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SearchX } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="flex h-[calc(100vh-9rem)] w-full flex-col items-center justify-center space-y-8 p-8 text-center">
      
      <div className="flex flex-col items-center space-y-4">
        <SearchX
          className="h-20 w-20 text-muted-foreground"
          aria-hidden="true"
        />
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            404 - Not Found
          </h1>
          <p className="max-w-md text-muted-foreground">
            {/* The apostrophe in "couldn't" is replaced with &apos; to fix the error */}
            Sorry, we couldn&apos;t find the page you were looking for. It might have been moved or deleted.
          </p>
        </div>
      </div>

      <Button asChild>
        <Link href="/" prefetch={true}>Return Home</Link>
      </Button>

    </main>
  )
}