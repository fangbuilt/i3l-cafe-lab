import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PERMANENT_MENU_ITEMS } from "@/lib/constants"
import Image from "next/image"

export default function ExpensesPage() {
  const items = PERMANENT_MENU_ITEMS
  const tags = Array.from(new Set(items.map((item) => item.tag)))
  return (
    <>
      <div className="flex gap-2 overflow-x-auto mb-3 scrollbar-hide">
        {tags.map((tag, index) => (
          <Button key={index} className="rounded-full size-6 w-fit" variant="outline" size="sm">
            {tag}
          </Button>
        ))}
      </div>
      {items.map((item, index) => (

        <Card key={index} className="mb-2 rounded-sm">
          <CardContent className="flex justify-between items-center h-10 pl-4">
            <div className="flex items-center gap-3">
              <Image
                src={item.thumbnail === "" ? "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c31d80c939f3845a6cfab855" : item.thumbnail}
                alt={`${item.name}, a ${item.tag} item from i3L Cafe Lab`}
                width={60}
                height={60}
                className="aspect-square rounded object-cover"
              />
              <div className="flex flex-col items-start">
                <p className="truncate">{item.name}</p>
                <p className="text-xs text-muted-foreground">
                  Rp {item.price}
                </p>
              </div>
            </div>
            <Button
              variant="secondary"
              size="sm"
              className="size-6 rounded-full"
            >
              +
            </Button>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
