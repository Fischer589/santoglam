import type { Metadata } from "next"
import { Fraunces, Manrope } from "next/font/google"
import "./globals.css"

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
})

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://santoglam.com"),
  title: "Santo Glam — Turn Your Bedroom Into a 5-Star Hotel Suite",
  description:
    "Curated hotel-quality objects for the bed, the vanity, and the ritual hour — the exact pieces reviewers repurchase. Free Prime shipping, easy returns, shop the edit.",
  openGraph: {
    title: "Santo Glam — Turn Your Bedroom Into a 5-Star Hotel Suite",
    description:
      "The curated edit of hotel-room objects real reviewers rebuy. Shop the bed, the vanity, and the ritual hour.",
    url: "https://santoglam.com",
    siteName: "Santo Glam",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santo Glam — Turn Your Bedroom Into a 5-Star Hotel Suite",
    description:
      "The curated edit of hotel-room objects real reviewers rebuy.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  )
}
