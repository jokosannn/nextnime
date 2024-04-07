import { NextResponse } from 'next/server'
import withAuth from './middleware/WithAuth'

export function mainMiddleware() {
  return NextResponse.next()
}

export default withAuth(mainMiddleware, ['/dashboard/profile', '/login', '/register'])
