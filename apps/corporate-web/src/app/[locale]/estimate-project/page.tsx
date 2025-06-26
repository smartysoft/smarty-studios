import React from "react";
import ContactSection from "./contact";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const companyName = t("company.name");

  const title =
    locale === "tr"
      ? `Proje Teklifi Alın - Ücretsiz Yazılım Geliştirme Fiyat Teklifi | ${companyName}`
      : `Get Project Estimate - Free Software Development Quote | ${companyName}`;

  const description =
    locale === "tr"
      ? `Yazılım geliştirme projeniz için ücretsiz teklif alın. Mobil uygulama geliştirme, web geliştirme, backend çözümleri ve özel yazılım danışmanlık teklifleri için ${companyName} ile iletişime geçin.`
      : `Get a free estimate for your software development project. Contact ${companyName} for mobile app development, web development, backend solutions, and custom software consulting quotes.`;

  return {
    title,
    description,
    keywords:
      locale === "tr"
        ? [
            "yazılım geliştirme teklifi",
            "proje fiyat teklifi",
            "ücretsiz yazılım teklifi",
            "mobil uygulama geliştirme maliyeti",
            "web geliştirme teklifi",
            "yazılım danışmanlık teklifi",
            "özel yazılım fiyatı",
            "geliştirme projesi maliyeti",
            "uygulama geliştirme teklifi",
          ]
        : [
            "software development estimate",
            "project quote",
            "free software estimate",
            "mobile app development cost",
            "web development quote",
            "software consulting estimate",
            "custom software price",
            "development project cost",
            "app development quote",
          ],
    openGraph: {
      title: `${
        locale === "tr" ? "Proje Teklifi Al" : "Get Project Estimate"
      } - ${companyName}`,
      description:
        locale === "tr"
          ? "Yazılım geliştirme projeniz için ücretsiz teklif alın. Mobil, web ve özel yazılım çözümleri için profesyonel teklifler."
          : "Get a free estimate for your software development project. Professional quotes for mobile, web, and custom software solutions.",
      url: "https://smartystudios.com/estimate-project",
    },
    twitter: {
      title: `${
        locale === "tr" ? "Proje Teklifi Al" : "Get Project Estimate"
      } - ${companyName}`,
      description:
        locale === "tr"
          ? "Yazılım geliştirme projeniz için ücretsiz teklif alın. Mobil, web ve özel yazılım çözümleri için profesyonel teklifler."
          : "Get a free estimate for your software development project. Professional quotes for mobile, web, and custom software solutions.",
    },
    alternates: {
      canonical: "https://smartystudios.com/estimate-project",
    },
  };
}

export default function EstimateProject() {
  return <ContactSection />;
}
