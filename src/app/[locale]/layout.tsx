import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "../globals.css";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getTranslations, getMessages } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

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

// Company Information Base2
const COMPANY_INFO_BASE = {
  url: "https://smartystudios.com",
  twitter: "@smartysoftware",
  foundingDate: "2020",
  industry: "Software Development",
};

// Generate dynamic metadata based on locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const companyName = t("company.name");
  const companyInfo = {
    ...COMPANY_INFO_BASE,
    name: companyName,
    alternateName:
      locale === "tr"
        ? ["Smarty Studios", "Smart Yazılım", "Smarty Yazılım"]
        : ["Smarty Studios", "Smart Yazılım"],
  };

  const siteDescriptions = {
    main:
      locale === "tr"
        ? `${companyName} profesyonel yazılım geliştirme, danışmanlık, mobil uygulama geliştirme, web geliştirme, backend ve frontend çözümleri sunar. Her büyüklükteki işletme için uzman yazılım danışmanlık hizmetleri.`
        : `${companyName} provides professional software development, consulting, mobile app development, web development, backend and frontend solutions. Expert software consulting services for businesses of all sizes.`,
    short:
      locale === "tr"
        ? "Profesyonel yazılım geliştirme, danışmanlık, mobil ve web geliştirme hizmetleri. İşiniz için uzman çözümler."
        : "Professional software development, consulting, mobile and web development services. Expert solutions for your business needs.",
    twitter:
      locale === "tr"
        ? "Profesyonel yazılım geliştirme, danışmanlık, mobil ve web geliştirme hizmetleri."
        : "Professional software development, consulting, mobile and web development services.",
  };

  // Open Graph Configuration
  const openGraphConfig = {
    type: "website" as const,
    locale: locale === "tr" ? "tr_TR" : "en_US",
    url: companyInfo.url,
    siteName: companyInfo.name,
    title: `${companyInfo.name} - ${
      locale === "tr"
        ? "Profesyonel Yazılım Geliştirme & Danışmanlık"
        : "Professional Software Development & Consulting"
    }`,
    description: siteDescriptions.short,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${companyInfo.name} - ${
          locale === "tr"
            ? "Yazılım Geliştirme Şirketi"
            : "Software Development Company"
        }`,
      },
    ],
  };

  // Twitter Card Configuration
  const twitterConfig = {
    card: "summary_large_image" as const,
    title: `${companyInfo.name} - ${
      locale === "tr"
        ? "Profesyonel Yazılım Geliştirme"
        : "Professional Software Development"
    }`,
    description: siteDescriptions.twitter,
    images: ["/og-image.jpg"],
    creator: companyInfo.twitter,
  };

  return {
    metadataBase: new URL(companyInfo.url),
    title: {
      default: `${companyInfo.name} - ${
        locale === "tr"
          ? "Profesyonel Yazılım Geliştirme & Danışmanlık"
          : "Professional Software Development & Consulting"
      }`,
      template: `%s | ${companyInfo.name}`,
    },
    description: siteDescriptions.main,
    keywords: SEO_KEYWORDS,
    authors: [{ name: companyInfo.name }],
    creator: companyInfo.name,
    publisher: companyInfo.name,

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
      canonical: companyInfo.url,
      languages: {
        tr: "https://smarty-studios.com/tr",
        en: "https://smarty-studios.com/en",
      },
    },
    category: "technology",
    classification:
      locale === "tr"
        ? "Yazılım Geliştirme Şirketi"
        : "Software Development Company",
    manifest: "/manifest.json",

    // Verification Codes
    verification: {
      google: "google-site-verification-code",
      yandex: "36c67b414cae9bcf",
    },

    // Additional Meta Tags
    other: {
      "google-site-verification": "google-site-verification-code",
      "msapplication-TileColor": "#000000",
      "msapplication-config": "/browserconfig.xml",
    },
  };
}

// Viewport Configuration (moved from metadata)
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

// Structured Data for SEO
const createStructuredData = (locale: string, companyName: string) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: companyName,
  alternateName:
    locale === "tr"
      ? ["Smarty Studios", "Smart Yazılım", "Smarty Yazılım"]
      : ["Smarty Studios", "Smart Yazılım"],
  url: COMPANY_INFO_BASE.url,
  logo: `${COMPANY_INFO_BASE.url}/logo.png`,
  description:
    locale === "tr"
      ? "Profesyonel yazılım geliştirme, danışmanlık, mobil ve web geliştirme hizmetleri. İşiniz için uzman çözümler."
      : "Professional software development, consulting, mobile and web development services. Expert solutions for your business needs.",
  foundingDate: COMPANY_INFO_BASE.foundingDate,
  industry: COMPANY_INFO_BASE.industry,
  serviceArea: "Global",
  services:
    locale === "tr"
      ? [
          "Yazılım Geliştirme",
          "Yazılım Danışmanlığı",
          "Mobil Uygulama Geliştirme",
          "Web Geliştirme",
          "Backend Geliştirme",
          "Frontend Geliştirme",
          "Özel Yazılım Çözümleri",
        ]
      : [
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
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const messages = await getMessages();

  if (!locale || !["tr", "en"].includes(locale)) {
    notFound();
  }

  const structuredData = createStructuredData(locale, t("company.name"));

  // Get translations for header
  const headerTranslations = {
    navbar: {
      services: t("navbar.services"),
      customers: t("navbar.customers"),
      about: t("navbar.about"),
    },
    estimateProject: {
      cta: t("estimateProject.cta"),
    },
  };

  return (
    <html lang={locale}>
      <head>
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="a4eaeb4f-ba1c-497e-bc97-61c943eb3bdc"
          type="text/javascript"
          async
        ></script>

        {/* Analytics Script */}
        <Script
          defer
          src={ANALYTICS_CONFIG.umamiSrc}
          data-website-id={ANALYTICS_CONFIG.websiteId}
          strategy="afterInteractive"
        />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body
        className={`${interSans.variable} ${interMono.variable} dark antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <HeroHeader translations={headerTranslations} />
          {children}
          <FooterSection />
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-4753ZHETCZ" />
        <GoogleTagManager gtmId="GTM-MDQD8KRG" />
      </body>
    </html>
  );
}
