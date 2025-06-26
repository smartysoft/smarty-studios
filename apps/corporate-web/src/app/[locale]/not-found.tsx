// app/not-found.tsx

import Link from "next/link";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale });
  const companyName = t("company.name");

  return {
    title:
      locale === "tr"
        ? `404 - Sayfa Bulunamadı | ${companyName}`
        : `404 - Page Not Found | ${companyName}`,
    description:
      locale === "tr"
        ? "Aradığınız sayfa bulunamadı. Ana sayfaya dönmek veya diğer hizmetlerimizi keşfetmek için tıklayın."
        : "The page you are looking for could not be found. Click to return to the homepage or explore our other services.",
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function NotFound() {
  const t = await getTranslations();

  return (
    <div
      className="flex flex-col items-center justify-center px-4"
      style={{ height: "500px" }}
    >
      <h1 className="text-4xl font-bold mb-4">{t("notFound.title")}</h1>
      <p className="text-lg text-center mb-8">{t("notFound.description")}</p>

      <Link
        href="/"
        className="text-blue-500 hover:text-blue-700 transition-colors"
      >
        {t("notFound.backToHome")}
      </Link>
    </div>
  );
}
