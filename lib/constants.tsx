import { NavItem } from "./types"
import { BanknoteArrowDown, CreditCard, Home, Settings } from "lucide-react"
import ESPRESSO_ON_THE_ROCK from "../public/menu/espresso_on_the_rock.png"
import AMERICANO from "../public/menu/americano.png"
import LATTE from "../public/menu/latte.png"

export const NAV_ITEMS = [
  { label: "Dashboard", href: "/", icon: <Home /> },
  { label: "Transaction", href: "/transaction", icon: <CreditCard /> },
  { label: "Expenses", href: "/expenses", icon: <BanknoteArrowDown /> },
  { label: "Settings", href: "/settings", icon: <Settings /> }
] satisfies NavItem[]

export const PERMANENT_MENU_ITEMS = [
  {
    name: "Espresso on the Rock",
    price: 10000,
    thumbnail: ESPRESSO_ON_THE_ROCK,
    tag: "coffee"
  },
  { name: "Americano", price: 15000, thumbnail: AMERICANO, tag: "coffee" },
  { name: "Latte", price: 20000, thumbnail: LATTE, tag: "coffee" },
  { name: "Latte Aren", price: 20000, thumbnail: "", tag: "coffee" },
  { name: "Cinnamon Latte", price: 22000, thumbnail: "", tag: "coffee" },
  { name: "Spanish Latte", price: 20000, thumbnail: "", tag: "coffee" },
  { name: "Dirty Matcha", price: 24000, thumbnail: "", tag: "coffee" },
  { name: "Sweet Tea", price: 10000, thumbnail: "", tag: "non-coffee" },
  { name: "Chocolate", price: 22000, thumbnail: "", tag: "non-coffee" },
  { name: "Matcha Latte", price: 24000, thumbnail: "", tag: "non-coffee" },
  { name: "Ichigo Milkshake", price: 20000, thumbnail: "", tag: "non-coffee" },
  { name: "Hojicha Latte", price: 24000, thumbnail: "", tag: "non-coffee" },
  { name: "Jasmine Milk Tea", price: 13000, thumbnail: "", tag: "non-coffee" },
  { name: "Taro Milkshake", price: 20000, thumbnail: "", tag: "non-coffee" },
  { name: "Oat Milk", price: 3000, thumbnail: "", tag: "add-on" },
  { name: "Extra Shot", price: 6000, thumbnail: "", tag: "add-on" },
  {
    name: "Spanish Latte (Bottled)",
    price: 20000,
    thumbnail: "",
    tag: "bottled"
  },
  { name: "Latte Aren (Bottled)", price: 20000, thumbnail: "", tag: "bottled" },
  {
    name: "Cinnamon Latte (Bottled)",
    price: 22000,
    thumbnail: "",
    tag: "bottled"
  },
  { name: "Americano (Bottled)", price: 15000, thumbnail: "", tag: "bottled" },
  { name: "Ichigo Milkshake", price: 20000, thumbnail: "", tag: "bottled" },
  { name: "Chocolate (Bottled)", price: 22000, thumbnail: "", tag: "bottled" },
  { name: "Latte (Bottled)", price: 20000, thumbnail: "", tag: "bottled" },
  { name: "Melo", price: 12000, thumbnail: "", tag: "consignment" },
  { name: "Keychain (Small)", price: 35000, thumbnail: "", tag: "consignment" },
  { name: "Keychain (Big)", price: 40000, thumbnail: "", tag: "consignment" }
]
