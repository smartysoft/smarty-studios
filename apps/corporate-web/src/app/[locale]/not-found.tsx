// app/not-found.tsx

import Link from "next/link";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const companyName = t("company.name");

  return {
    title: `${t("notFound.title")} | ${companyName}`,
    description: t("notFound.description"),
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
