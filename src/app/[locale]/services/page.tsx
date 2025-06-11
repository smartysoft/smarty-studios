import ServicesSection from "@/app/[locale]/services/services-section";
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
      ? `Yazılım Geliştirme Hizmetleri - Mobil, Web & Backend Çözümleri | ${companyName}`
      : `Software Development Services - Mobile, Web & Backend Solutions | ${companyName}`;

  const description =
    locale === "tr"
      ? `Kapsamlı yazılım geliştirme hizmetleri: mobil uygulama geliştirme, web geliştirme, backend çözümleri, frontend geliştirme ve özel yazılım danışmanlığı. İşiniz için uzman geliştiriciler.`
      : `Comprehensive software development services including mobile app development, web development, backend solutions, frontend development, and custom software consulting. Expert developers for your business needs.`;

  return {
    title,
    description,
    keywords:
      locale === "tr"
        ? [
            "yazılım geliştirme hizmetleri",
            "mobil uygulama geliştirme",
            "web geliştirme hizmetleri",
            "backend geliştirme",
            "frontend geliştirme",
            "özel yazılım çözümleri",
            "yazılım danışmanlığı",
            "uygulama geliştirme hizmetleri",
            "web tasarım hizmetleri",
            "dijital çözümler",
          ]
        : [
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
            "technology consulting",
            "software engineering",
          ],
    openGraph: {
      title: `${
        locale === "tr"
          ? "Yazılım Geliştirme Hizmetleri"
          : "Software Development Services"
      } - ${companyName}`,
      description:
        locale === "tr"
          ? "Profesyonel yazılım geliştirme hizmetleri: mobil uygulamalar, web geliştirme, backend çözümleri ve özel yazılım danışmanlığı."
          : "Professional software development services: mobile apps, web development, backend solutions, and custom software consulting.",
      url: "https://smartystudios.com/services",
    },
    twitter: {
      title: `${
        locale === "tr"
          ? "Yazılım Geliştirme Hizmetleri"
          : "Software Development Services"
      } - ${companyName}`,
      description:
        locale === "tr"
          ? "Profesyonel yazılım geliştirme hizmetleri: mobil uygulamalar, web geliştirme, backend çözümleri ve özel yazılım danışmanlığı."
          : "Professional software development services: mobile apps, web development, backend solutions, and custom software consulting.",
    },
    alternates: {
      canonical: "https://smartystudios.com/services",
    },
  };
}

export default function Services() {
  return (
    <div>
      <ServicesSection />;
    </div>
  );
}
