"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet"
import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import { Minus, Plus, Trash2 } from "lucide-react"
import Image from "next/image"
import { useState, useMemo } from "react"

// Type for menu item (match with Convex schema)
type MenuItem = {
  _id: string
  tag: string
  item: string
  price: number
}

type CartItem = {
  _id: string
  item: string
  price: number
  quantity: number
}

const tagOrder = [
  "Coffee",
  "Non-Coffee",
  "Add-on",
  "Bottled",
  "Merch",
  "Consignment"
]

export default function TransactionPage() {
  const menu = useQuery(api.menu.get)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [cart, setCart] = useState<CartItem[]>([])
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  // Get unique tags
  const tags = useMemo(() => {
    if (!menu) return []
    return Array.from(new Set(menu.map((item) => item.tag)))
  }, [menu])

  // Filter and group menu items
  const groupedMenuItems = useMemo(() => {
    if (!menu) return {}

    const filteredItems = selectedTag
      ? menu.filter((item) => item.tag === selectedTag)
      : menu

    return filteredItems.reduce(
      (acc, item) => {
        if (!acc[item.tag]) {
          acc[item.tag] = []
        }
        acc[item.tag].push(item)
        return acc
      },
      {} as Record<string, MenuItem[]>
    )
  }, [menu, selectedTag])

  // Handle tag filter
  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag)
  }

  // Cart functions
  const addToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem._id === item._id
      )

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      } else {
        return [
          ...prevCart,
          {
            _id: item._id,
            item: item.item,
            price: item.price,
            quantity: 1
          }
        ]
      }
    })
    setIsSheetOpen(true)
  }

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCart((prevCart) => prevCart.filter((item) => item._id !== id))
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item._id === id ? { ...item, quantity: newQuantity } : item
        )
      )
    }
  }

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity * 1000,
    0
  )
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  if (!menu) return <div>Loading...</div>

  return (
    <>
      {/* Filter Tags */}
      <div className="mb-6 scrollbar-hide flex gap-2 overflow-x-auto">
        <Button
          onClick={() => setSelectedTag(null)}
          className={`w-fit rounded-full ${selectedTag === null ? "bg-primary text-primary-foreground" : ""}`}
          variant={selectedTag === null ? "default" : "outline"}
          size="sm"
        >
          All
        </Button>
        {tags.map((tag) => (
          <Button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`w-fit rounded-full ${selectedTag === tag ? "bg-primary text-primary-foreground" : ""}`}
            variant={selectedTag === tag ? "default" : "outline"}
            size="sm"
          >
            {tag}
          </Button>
        ))}
      </div>

      {/* Grouped Menu Items - sorted by tag order */}
      <div className="space-y-6">
        {tagOrder
          .filter(
            (tag) =>
              groupedMenuItems[tag] ||
              groupedMenuItems[tag.charAt(0).toUpperCase() + tag.slice(1)]
          )
          .map((tag) => {
            // Try both lowercase and capitalized versions
            const items =
              groupedMenuItems[tag] ||
              groupedMenuItems[tag.charAt(0).toUpperCase() + tag.slice(1)]

            const displayTag =
              Object.keys(groupedMenuItems).find(
                (key) => key.toLowerCase() === tag
              ) || tag

            return items ? (
              <div key={tag}>
                {/* Tag Title */}
                <h2 className="mb-3 text-lg font-semibold text-foreground">
                  {displayTag}
                </h2>

                {/* Items in this tag */}
                <div className="space-y-2">
                  {items.map(({ _id, tag, item, price }) => (
                    <Card key={_id} className="rounded-sm py-1">
                      <CardContent className="flex h-16 items-center justify-between px-2">
                        <div className="flex items-center gap-3">
                          <Image
                            src="https://i1.sndcdn.com/artworks-CKH5D8j1nndypLJj-aTiIaw-t1080x1080.jpg"
                            alt={`${item}, a ${tag} item from i3L Cafe Lab`}
                            width={60}
                            height={60}
                            className="aspect-square rounded object-cover"
                          />
                          <div className="flex flex-col items-start">
                            <p className="max-w-70 text-sm leading-tight font-medium">
                              {item}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Rp {(price * 1000).toLocaleString("id-ID")}
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="h-8 w-8 rounded-full"
                          onClick={() => addToCart({ _id, tag, item, price })}
                        >
                          +
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : null
          })}
      </div>

      {/* Empty state */}
      {Object.keys(groupedMenuItems).length === 0 && (
        <div className="py-8 text-center text-muted-foreground">
          No items found
        </div>
      )}

      {/* Cart Sheet */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent
          side="bottom"
          className="mx-auto h-[80vh] max-w-md overflow-y-scroll"
        >
          <SheetHeader className="pb-0">
            <SheetTitle className="text-left">
              Cart ({totalItems} {totalItems === 1 ? "item" : "items"})
            </SheetTitle>
          </SheetHeader>

          <div className="flex h-full flex-col px-4">
            {/* Cart Items */}
            <div className="mt-4 flex-1 space-y-2 overflow-y-auto">
              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-muted-foreground">
                  <p>Your cart is empty</p>
                  <p className="text-sm">Add items to get started</p>
                </div>
              ) : (
                cart.map((cartItem) => (
                  <Card key={cartItem._id} className="rounded-lg py-0">
                    <CardContent className="flex items-center justify-between p-2">
                      <div className="flex flex-1 flex-col">
                        <p className="w-56 truncate text-sm leading-tight font-medium">
                          {cartItem.item}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Rp {(cartItem.price * 1000).toLocaleString("id-ID")}{" "}
                          each
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Quantity Controls */}
                        <div className="flex items-center">
                          <Button
                            variant="secondary"
                            size="sm"
                            className="h-8 w-8 rounded-full"
                            onClick={() =>
                              updateQuantity(
                                cartItem._id,
                                cartItem.quantity - 1
                              )
                            }
                          >
                            <Minus />
                          </Button>

                          <span className="min-w-[2rem] text-center font-medium">
                            {cartItem.quantity}
                          </span>

                          <Button
                            variant="secondary"
                            size="sm"
                            className="h-8 w-8 rounded-full"
                            onClick={() =>
                              updateQuantity(
                                cartItem._id,
                                cartItem.quantity + 1
                              )
                            }
                          >
                            <Plus />
                          </Button>
                        </div>

                        {/* Remove Button */}
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 w-8 rounded-full text-destructive hover:text-destructive"
                          onClick={() => removeFromCart(cartItem._id)}
                        >
                          <Trash2 />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

            {/* Footer with Subtotal & Submit */}
            <SheetFooter className="">
              {cart.length > 0 && (
                <div className="space-y-4 border-t pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">Subtotal:</span>
                    <span className="text-lg font-bold">
                      Rp {subtotal.toLocaleString("id-ID")}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={clearCart}
                      className="flex-1"
                    >
                      Clear Cart
                    </Button>
                    <Button
                      className="flex-2"
                      onClick={() => {
                        console.log("Submitting order:", cart)
                        console.log("Total:", subtotal)
                        // Handle submit logic here
                        alert(
                          `Order submitted! Total: Rp ${subtotal.toLocaleString("id-ID")}`
                        )
                      }}
                    >
                      Submit Order
                    </Button>
                  </div>
                </div>
              )}
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
