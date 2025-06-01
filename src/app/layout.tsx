import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import Script from "next/script";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const interMono = Inter_Tight({
  variable: "--font-inter-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Smarty Software Studios - Professional Software Development & Consulting",
    template: "%s | Smarty Software Studios",
  },
  description:
    "Smarty Software Studios provides professional software development, consulting, mobile app development, web development, backend and frontend solutions. Expert software consulting services for businesses of all sizes.",
  keywords: [
    "software development",
    "software consulting",
    "mobile app development",
    "web development",
    "backend development",
    "frontend development",
    "smarty software",
    "smarty studios",
    "smart yazılım",
    "yazılım geliştirme",
    "mobil uygulama",
    "web tasarım",
    "software solutions",
    "custom software",
    "app development",
    "digital solutions",
    "technology consulting",
    "software engineering",
  ],
  authors: [{ name: "Smarty Software Studios" }],
  creator: "Smarty Software Studios",
  publisher: "Smarty Software Studios",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smartystudios.com",
    siteName: "Smarty Software Studios",
    title:
      "Smarty Software Studios - Professional Software Development & Consulting",
    description:
      "Professional software development, consulting, mobile and web development services. Expert solutions for your business needs.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Smarty Software Studios - Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smarty Software Studios - Professional Software Development",
    description:
      "Professional software development, consulting, mobile and web development services.",
    images: ["/og-image.jpg"],
    creator: "@smartysoftware",
  },
  alternates: {
    canonical: "https://smartystudios.com",
  },
  category: "technology",
  classification: "Software Development Company",
  other: {
    "google-site-verification": "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Smarty Software Studios",
    alternateName: ["Smarty Studios", "Smart Yazılım"],
    url: "https://smartystudios.com",
    logo: "https://smartystudios.com/logo.png",
    description:
      "Professional software development, consulting, mobile app development, web development, backend and frontend solutions.",
    foundingDate: "2020",
    industry: "Software Development",
    serviceArea: "Global",
    services: [
      "Software Development",
      "Software Consulting",
      "Mobile App Development",
      "Web Development",
      "Backend Development",
      "Frontend Development",
      "Custom Software Solutions",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Turkish"],
    },
    sameAs: [
      "https://linkedin.com/company/smarty-software-studios",
      "https://twitter.com/smartysoftware",
    ],
  };

  return (
    <html lang="en">
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="a2b3cff2-fd17-4149-90cf-186ef7ecfcd6"
          strategy="afterInteractive"
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body
        className={`${interSans.variable} ${interMono.variable} dark antialiased`}
      >
        <HeroHeader />

        {children}
        <FooterSection />
      </body>
    </html>
  );
}
