'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'

const navbarIsNotActive = ['/login', '/register']

const Header = () => {
  const pathname = usePathname()
  return !navbarIsNotActive.includes(pathname) && <Navbar />
}

export default Header
