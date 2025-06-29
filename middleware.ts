import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/docs/api-reference/file-conventions/template-js/preview') {
    return NextResponse.redirect(new URL('/docs/api-reference/file-conventions/template-js/preview/page1', request.url))
  }
}
