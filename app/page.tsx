import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { HotelRoomEdit } from "@/components/hotel-room-edit"
import { Transformation } from "@/components/transformation"
import { Collections } from "@/components/collections"
import { HeroProducts } from "@/components/hero-products"
import { ScentCampaign } from "@/components/scent-campaign"
import { TheEdit } from "@/components/the-edit"
import { JournalSection } from "@/components/journal-section"
import { SocialProof } from "@/components/social-proof"
import { SundayEdit } from "@/components/sunday-edit"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Philosophy />
        <HotelRoomEdit />
        <Transformation />
        <Collections />
        <HeroProducts />
        <ScentCampaign />
        <TheEdit />
        <JournalSection />
        <SocialProof />
        <SundayEdit />
      </main>
      <SiteFooter />
    </>
  )
}
