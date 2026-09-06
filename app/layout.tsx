import type { Metadata } from "next"
import { Cormorant_Garamond, Jost } from "next/font/google"
import "./globals.css"

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
})

const sans = Jost({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://santoglam.com"),
  title: "SANTOGLAM — The Art of Living Well",
  description:
    "The feeling of a five-star stay, without leaving home. SantoGlam curates the objects, rituals, and details that make ordinary spaces feel extraordinary.",
  openGraph: {
    title: "SANTOGLAM — The Art of Living Well",
    description:
      "You don't need more things. You need better ones. SantoGlam curates the objects, rituals, and details that make ordinary spaces feel extraordinary.",
    url: "https://santoglam.com",
    siteName: "SANTOGLAM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SANTOGLAM — The Art of Living Well",
    description: "The feeling of a five-star stay, without leaving home.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
