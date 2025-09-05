import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import BottomNavigation from "@/components/bottom-navigation"
import { NAV_ITEMS } from "@/lib/constants"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "i3L Cafe Lab",
  description: "i3L Cafe Lab Internal Tool"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col border">
            <main className="flex-1 space-y-4 p-4">
              <div className="grid grid-cols-3 items-center">
                <ModeToggle />
                <h1 className="font-bold text-center">Cafe Lab</h1>
                <p className="text-muted-foreground text-xs text-right">User: Bintang</p>
              </div>
              {children}
            </main>
            <BottomNavigation items={NAV_ITEMS} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
