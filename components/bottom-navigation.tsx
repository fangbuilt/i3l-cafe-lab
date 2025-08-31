"use client"

import { NavItem } from "@/lib/types"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

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
              className="flex flex-col items-center py-1"
            >
              <div
                className={`rounded-full p-1 text-3xl transition-colors ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.icon}
              </div>
              <div
                className={`text-xs ${isActive(item.href) ? "font-semibold" : ""}`}
              >
                {item.label}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
