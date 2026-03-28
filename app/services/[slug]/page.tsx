import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetailPage } from "@/components/service-detail-page"
import { getServiceBySlug, services } from "@/lib/services"

type ServicePageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      title: "Услуга не найдена",
    }
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <Header />
      <ServiceDetailPage service={service} />
      <Footer />
    </>
  )
}
