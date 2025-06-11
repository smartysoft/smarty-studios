import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "../globals.css";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import Script from "next/script";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

// Font configurations
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const interMono = Inter_Tight({
  variable: "--font-inter-mono",
  subsets: ["latin"],
});

// SEO Keywords
const SEO_KEYWORDS = [
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
];

// Company Information
const COMPANY_INFO = {
  name: "Smarty Software Studios",
  alternateName: ["Smarty Studios", "Smart Yazılım"],
  url: "https://smartystudios.com",
  twitter: "@smartysoftware",
  foundingDate: "2020",
  industry: "Software Development",
};

// Site Descriptions
const SITE_DESCRIPTIONS = {
  main: "Smarty Software Studios provides professional software development, consulting, mobile app development, web development, backend and frontend solutions. Expert software consulting services for businesses of all sizes.",
  short:
    "Professional software development, consulting, mobile and web development services. Expert solutions for your business needs.",
  twitter:
    "Professional software development, consulting, mobile and web development services.",
};

// Open Graph Configuration
const openGraphConfig = {
  type: "website" as const,
  locale: "en_US",
  url: COMPANY_INFO.url,
  siteName: COMPANY_INFO.name,
  title: `${COMPANY_INFO.name} - Professional Software Development & Consulting`,
  description: SITE_DESCRIPTIONS.short,
  images: [
    {
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: `${COMPANY_INFO.name} - Software Development Company`,
    },
  ],
};

// Twitter Card Configuration
const twitterConfig = {
  card: "summary_large_image" as const,
  title: `${COMPANY_INFO.name} - Professional Software Development`,
  description: SITE_DESCRIPTIONS.twitter,
  images: ["/og-image.jpg"],
  creator: COMPANY_INFO.twitter,
};

// Theme Configuration
const themeConfig = [
  { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  { media: "(prefers-color-scheme: dark)", color: "#000000" },
];

// Main Metadata Configuration
export const metadata: Metadata = {
  metadataBase: new URL(COMPANY_INFO.url),
  title: {
    default: `${COMPANY_INFO.name} - Professional Software Development & Consulting`,
    template: `%s | ${COMPANY_INFO.name}`,
  },
  description: SITE_DESCRIPTIONS.main,
  keywords: SEO_KEYWORDS,
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,

  // SEO Configuration
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

  // Social Media Configuration
  openGraph: openGraphConfig,
  twitter: twitterConfig,

  // Site Configuration
  alternates: {
    canonical: COMPANY_INFO.url,
  },
  category: "technology",
  classification: "Software Development Company",
  manifest: "/manifest.json",

  // Verification Codes
  verification: {
    google: "your-google-verification-code", // Google Search Console'dan alınacak
    yandex: "36c67b414cae9bcf", // Yandex Webmaster'dan alınacak
  },

  // Additional Meta Tags
  other: {
    "google-site-verification": "your-google-verification-code",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
};

// Viewport Configuration (moved from metadata)
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: themeConfig,
};

// Structured Data for SEO
const createStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_INFO.name,
  alternateName: COMPANY_INFO.alternateName,
  url: COMPANY_INFO.url,
  logo: `${COMPANY_INFO.url}/logo.png`,
  description: SITE_DESCRIPTIONS.short,
  foundingDate: COMPANY_INFO.foundingDate,
  industry: COMPANY_INFO.industry,
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
});

// Analytics Configuration
const ANALYTICS_CONFIG = {
  umamiSrc: "https://cloud.umami.is/script.js",
  websiteId: "a2b3cff2-fd17-4149-90cf-186ef7ecfcd6",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  // Validate locale parameter
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const structuredData = createStructuredData();

  return (
    <html lang={locale}>
      <head>
        {/* Analytics Script */}
        <Script
          defer
          src={ANALYTICS_CONFIG.umamiSrc}
          data-website-id={ANALYTICS_CONFIG.websiteId}
          strategy="afterInteractive"
        />

        {/* Structured Data for SEO */}
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
        <NextIntlClientProvider>
          <HeroHeader />
          {children}
          <FooterSection />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
