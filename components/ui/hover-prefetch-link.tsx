'use client'
 
import Link from 'next/link'
import { useState } from 'react'
 
function HoverPrefetchLink({
  href,
  children,
  onClick,
  className,
  rel,
  target
}: {
  href: string
  children: React.ReactNode
  onClick?: () => void
  className?: string
  rel?: string
  target?: string
}) {
  const [active, setActive] = useState(false)
 
  return (
    <Link
      href={href}
      prefetch={active ? null : false}
      onMouseEnter={() => setActive(true)}
      className={className}
      onClick={onClick}
      rel={rel}
      target={target}
    >
      {children}
    </Link>
  )
}

export default HoverPrefetchLink;