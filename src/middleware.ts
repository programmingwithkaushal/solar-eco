import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authHeader = request.headers.get('authorization');

  // Hardcoded credentials for demonstration (admin / admin123)
  // In production, use environment variables and stronger auth
  const user = 'admin';
  const pwd = 'password123';
  const expectedAuth = `Basic ${Buffer.from(`${user}:${pwd}`).toString('base64')}`;

  if (request.nextUrl.pathname.startsWith('/admin') || request.nextUrl.pathname.startsWith('/api/admin')) {
    if (!authHeader || authHeader !== expectedAuth) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
