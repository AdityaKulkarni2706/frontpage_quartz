import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Quartz",
  description: "Created by MakeCats",
  generator: "",
  icons: {
    icon: [
      {
        url: "/crystal.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/crystal.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/crystal.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-mono antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
