'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  // Version ultra simple pour débugger
  return (
    <Link 
      href={href}
      className={`
        relative
        ${isActive ? `
          border-b-2 border-white
          sm:border-blue-900
          md:border-b-4
        ` : ''}
      `}
    >
      {children}
    </Link>
  )
}

export default NavLink