'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { href: '/selling', label: 'Selling Exploration' },
  { href: '/notes', label: 'Notes' },
  { href: '/web-apps', label: 'Web Apps' },
  { href: '/visual', label: 'Visual Work' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-[1100px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link 
          href="/" 
          className="font-serif text-2xl font-bold text-primary tracking-wide"
        >
          JI
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {navItems.map((item, index) => (
            <span key={item.href} className="flex items-center">
              <Link
                href={item.href}
                className={`hover:text-primary transition-colors ${
                  pathname === item.href ? 'text-primary' : 'text-foreground'
                }`}
              >
                {item.label}
              </Link>
              {index < navItems.length - 1 && (
                <span className="mx-3 text-muted-foreground">·</span>
              )}
            </span>
          ))}
        </nav>
        <nav className="md:hidden">
          <MobileNav />
        </nav>
      </div>
    </header>
  )
}

function MobileNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-card border border-border rounded-lg shadow-lg py-2 min-w-[200px]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 hover:bg-secondary transition-colors ${
                pathname === item.href ? 'text-primary' : 'text-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
