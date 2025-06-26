import WhoWeAreSection from "./who-we-are-section";
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
      ? `Hakkımızda - Uzman Yazılım Geliştirme Ekibi | ${companyName}`
      : `About Us - Expert Software Development Team | ${companyName}`;

  const description =
    locale === "tr"
      ? `${companyName} hakkında bilgi edinin - mobil uygulamalar, web geliştirme, backend çözümleri ve yazılım danışmanlık hizmetlerinde uzmanlaşmış profesyonel yazılım geliştirme ekibi.`
      : `Learn about ${companyName} - a professional software development team specializing in mobile apps, web development, backend solutions, and software consulting services.`;

  return {
    title,
    description,
    keywords:
      locale === "tr"
        ? [
            "smarty yazılım hakkında",
            "yazılım geliştirme ekibi",
            "uzman geliştiriciler",
            "yazılım danışmanlık ekibi",
            "mobil uygulama geliştiricileri",
            "web geliştirme uzmanları",
            "backend uzmanları",
            "frontend geliştiriciler",
          ]
        : [
            "about smarty software",
            "software development team",
            "expert developers",
            "software consulting team",
            "mobile app developers",
            "web development experts",
            "backend specialists",
            "frontend developers",
          ],
    openGraph: {
      title: `${locale === "tr" ? "Hakkımızda" : "About"} ${companyName} - ${
        locale === "tr" ? "Uzman Geliştirme Ekibi" : "Expert Development Team"
      }`,
      description:
        locale === "tr"
          ? "Mobil, web ve özel yazılım çözümlerinde uzmanlaşmış profesyonel yazılım geliştirme ekibi."
          : "Professional software development team specializing in mobile, web, and custom software solutions.",
      url: "https://smartystudios.com/about",
    },
    twitter: {
      title: `${locale === "tr" ? "Hakkımızda" : "About"} ${companyName} - ${
        locale === "tr" ? "Uzman Geliştirme Ekibi" : "Expert Development Team"
      }`,
      description:
        locale === "tr"
          ? "Mobil, web ve özel yazılım çözümlerinde uzmanlaşmış profesyonel yazılım geliştirme ekibi."
          : "Professional software development team specializing in mobile, web, and custom software solutions.",
    },
    alternates: {
      canonical: "https://smartystudios.com/about",
    },
  };
}

export default async function About() {
  const t = await getTranslations();

  return (
    <section className="py-24 md:py-20 lg:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-6xl">
            {t("about.pageTitle")}
          </h2>
          <p>{t("about.pageSubtitle")}</p>
        </div>
      </div>

      <WhoWeAreSection />
    </section>
  );
}
