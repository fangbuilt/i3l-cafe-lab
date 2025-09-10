import { NavItem } from "./types"
import { BanknoteArrowDown, CreditCard, Home, Settings } from "lucide-react"

export const NAV_ITEMS = [
  { label: "Dashboard", href: "/", icon: <Home /> },
  { label: "Transaction", href: "/transaction", icon: <CreditCard /> },
  { label: "Settings", href: "/settings", icon: <Settings /> }
] satisfies NavItem[]