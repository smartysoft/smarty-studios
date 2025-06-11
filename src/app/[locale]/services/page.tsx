import ServicesSection from "@/app/[locale]/services/services-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development Services - Mobile, Web & Backend Solutions",
  description:
    "Comprehensive software development services including mobile app development, web development, backend solutions, frontend development, and custom software consulting. Expert developers for your business needs.",
  keywords: [
    "software development services",
    "mobile app development",
    "web development services",
    "backend development",
    "frontend development",
    "custom software solutions",
    "software consulting",
    "app development services",
    "web design services",
    "digital solutions",
    "yazılım geliştirme hizmetleri",
    "mobil uygulama geliştirme",
    "web tasarım hizmetleri",
    "backend çözümleri",
    "frontend geliştirme",
  ],
  openGraph: {
    title: "Software Development Services - Smarty Software Studios",
    description:
      "Professional software development services: mobile apps, web development, backend solutions, and custom software consulting.",
    url: "https://smartystudios.com/services",
  },
  twitter: {
    title: "Software Development Services - Smarty Software Studios",
    description:
      "Professional software development services: mobile apps, web development, backend solutions, and custom software consulting.",
  },

  alternates: {
    canonical: "https://smartystudios.com/services",
  },
};

export default function Services() {
  return <ServicesSection />;
}
