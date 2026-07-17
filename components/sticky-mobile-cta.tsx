"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-paper/95 p-3 backdrop-blur-md lg:hidden">
      <a
        href="#hotel"
        className="flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-cream"
      >
        Shop The Edit
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  )
}
