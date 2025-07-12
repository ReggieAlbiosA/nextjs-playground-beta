"use client"
import React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface CustomBreadcrumbProps {
  pathname: string
  className?: string
}

export function CustomBreadcrumb({ 
  pathname, 
  className = ""
}: CustomBreadcrumbProps) {
  const segments = pathname.split("/").filter(Boolean)
  const total = segments.length
  
  // Don't show breadcrumb for home page or single level
  if (total <= 1) return null

  // Helper function to format segment text
  const formatSegment = (segment: string) => {
    return segment
      .replace(/-/g, " ")
      .replace(/_/g, " ")
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  // Helper function to build href
  const buildHref = (segmentIndex: number) => {
    return "/" + segments.slice(0, segmentIndex + 1).join("/")
  }

  // Get last 3 segments for desktop, last 2 for mobile
  const getVisibleSegments = (isMobile: boolean) => {
    const maxItems = isMobile ? 2 : 3
    const startIndex = Math.max(0, total - maxItems)
    
    return segments.slice(startIndex).map((segment, index) => ({
      segment,
      originalIndex: startIndex + index,
      isLast: startIndex + index === total - 1
    }))
  }

  const renderBreadcrumbItems = (isMobile: boolean) => {
    const visibleSegments = getVisibleSegments(isMobile)

    return (
      <>
        {visibleSegments.map((item) => (
          <React.Fragment key={`${item.segment}-${item.originalIndex}`}>
            <BreadcrumbItem>
              {item.isLast ? (
                <BreadcrumbPage className="font-medium max-w-[200px] truncate">
                  {formatSegment(item.segment)}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link 
                    href={buildHref(item.originalIndex)}
                    className="hover:text-foreground transition-colors max-w-[200px] truncate inline-block"
                  >
                    {formatSegment(item.segment)}
                  </Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            
            {/* Separator */}
            {!item.isLast && (
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
            )}
          </React.Fragment>
        ))}
      </>
    )
  }

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <Breadcrumb>
        <BreadcrumbList className="text-[1.1rem]">
          {/* Desktop view - last 3 segments */}
          <div className="hidden md:flex items-center gap-x-2">
            {renderBreadcrumbItems(false)}
          </div>
          
          {/* Mobile view - last 2 segments */}
          <div className="flex md:hidden items-center gap-x-2">
            {renderBreadcrumbItems(true)}
          </div>
        </BreadcrumbList>
      </Breadcrumb>
    </nav>
  )
}