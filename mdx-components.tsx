import type { MDXComponents } from 'mdx/types'
import { Code } from 'bright'
import { cn } from '@/lib/utils'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use them
// anywhere now!

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g., to add styling.
    h1: ({ className, ...props }) => (
      <h1
        className={cn('mt-2 scroll-m-20 text-4xl font-bold tracking-tight', className)}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn(
          'mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
          className
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn('mt-8 scroll-m-20 text-2xl font-semibold tracking-tight', className)}
        {...props}
      />
    ),
    h4: ({ className, ...props }) => (
      <h4
        className={cn('mt-8 scroll-m-20 text-xl font-semibold tracking-tight', className)}
        {...props}
      />
    ),
    p: ({ className, ...props }) => (
      <p
        className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
        {...props}
      />
    ),
    ul: ({ className, ...props }) => (
      <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
    ),
    li: ({ className, ...props }) => (
      <li className={cn('mt-2', className)} {...props} />
    ),
    a: ({ className, ...props }) => (
      <a
        className={cn('font-medium text-primary underline underline-offset-4', className)}
        {...props}
      />
    ),
    // Import and register custom components to be used in MDX files.
    pre: Code,

    ...components,
  }
}
