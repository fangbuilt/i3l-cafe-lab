"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart"
import { Separator } from "@/components/ui/separator"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

export default function Home() {
  const chartData = [
    { day: "Monday", revenue: 120000 },
    { day: "Tuesday", revenue: 150000 },
    { day: "Wednesday", revenue: 100000 },
    { day: "Thursday", revenue: 180000 },
    { day: "Friday", revenue: 200000 }
  ]

  const chartConfig = {
    revenue: { label: "Revenue", color: "white" }
  } satisfies ChartConfig

  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="rounded-sm p-2">
        <CardContent className="p-1">
          <p className="text-xs text-muted-foreground">Merchant Balance</p>
          <h1 className="font-bold">Rp 3,674,870,-</h1>
        </CardContent>
      </Card>
      <Card className="rounded-sm p-2">
        <CardContent className="p-1">
          <p className="text-xs text-muted-foreground">Head Balance</p>
          <h1 className="font-bold">Rp 1,234,870,-</h1>
        </CardContent>
      </Card>
      <Card className="col-span-2 rounded-sm p-2">
        <CardContent className="p-1">
          <p className="text-xs text-muted-foreground">Weekly Sales</p>
          <Separator className="my-2" />
          <div className="flex justify-between">
            <div>
              <p className="font-bold">Rp 2,543,600,-</p>
              <p className="text-xs text-muted-foreground">Revenue</p>
            </div>
            <div>
              <p className="text-right font-bold">312</p>
              <p className="text-xs text-muted-foreground">Transactions</p>
            </div>
          </div>
          <ChartContainer config={chartConfig} className="mt-2">
            <LineChart accessibilityLayer data={chartData}>
              <CartesianGrid />
              <XAxis
                dataKey="day"
                tickMargin={10}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Line dataKey="revenue" fill="var(--color-revenue)" radius={4} />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card className="col-span-2 rounded-sm p-2">
        <CardContent className="p-1">
          <p className="text-xs text-muted-foreground">Monthly Sales</p>
        </CardContent>
      </Card>
      <Card className="rounded-sm p-2">
        <CardContent className="p-1">
          <p className="text-xs text-muted-foreground">Reimbursement</p>
        </CardContent>
      </Card>
      <Card className="rounded-sm p-2">
        <CardContent className="p-1">
          <p className="text-xs text-muted-foreground">Consignment</p>
        </CardContent>
      </Card>
      <Card className="col-span-2 rounded-sm p-2">
        <CardContent className="p-1">
          <p className="text-xs text-muted-foreground">Menu Ranking</p>
        </CardContent>
      </Card>
    </div>
  )
}
