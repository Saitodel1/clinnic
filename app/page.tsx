"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ValueBlock } from "@/components/value-block"
import { ServicesSection } from "@/components/services-section"
import { InteractiveSection } from "@/components/interactive-section"
import { DoctorsSection } from "@/components/doctors-section"
import { ClinicSection } from "@/components/clinic-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ValueBlock />
      <ServicesSection />
      <InteractiveSection />
      <DoctorsSection />
      <ClinicSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
