"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

export type NavItem = {
  label: string
  href: string
  icon: React.ReactNode
}

type BottomNavigationProps = {
  items: NavItem[]
}

export default function BottomNavigation({ items }: BottomNavigationProps) {
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href
  return (
    <nav className="sticky bottom-0 mt-auto w-full border-t bg-background shadow">
      <ul className="flex">
        {items.map((item, index) => (
          <li key={index} className="flex-1">
            <Link
              href={item.href}
              className="flex flex-col items-center gap-1 py-2"
            >
              <div
                className={`rounded p-2 transition-colors ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.icon}
              </div>
              <div className="text-xs">{item.label}</div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
