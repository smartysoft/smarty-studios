import CustomersSection from "./customers-section";
import React from "react";
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
      ? `Müşterilerimiz - Güvenilir Yazılım Geliştirme Ortakları | ${companyName}`
      : `Our Customers - Trusted Software Development Partners | ${companyName}`;

  const description =
    locale === "tr"
      ? `Memnun müşterilerimiz ve müşterilerimizle tanışın. ${companyName} startup'lardan kurumlara, kaliteli mobil uygulamalar, web geliştirme ve özel yazılım çözümleri sunar.`
      : `Meet our satisfied customers and clients. ${companyName} works with startups to enterprises, delivering quality mobile apps, web development, and custom software solutions.`;

  return {
    title,
    description,
    keywords:
      locale === "tr"
        ? [
            "yazılım geliştirme müşterileri",
            "memnun müşteriler",
            "müşteri referansları",
            "yazılım geliştirme ortakları",
            "mobil uygulama müşterileri",
            "web geliştirme müşterileri",
            "kurumsal yazılım müşterileri",
            "startup geliştirme ortakları",
            "smarty yazılım müşterileri",
            "başarılı projeler",
          ]
        : [
            "software development clients",
            "satisfied customers",
            "client testimonials",
            "software development partners",
            "mobile app clients",
            "web development customers",
            "enterprise software clients",
            "startup development partners",
            "smarty software clients",
          ],
    openGraph: {
      title: `${
        locale === "tr" ? "Müşterilerimiz" : "Our Customers"
      } - ${companyName}`,
      description:
        locale === "tr"
          ? "Memnun müşterilerimizle tanışın ve kaliteli yazılım geliştirme çözümleriyle işletmelerin nasıl başarılı olduğunu görün."
          : "Meet our satisfied customers and see how we help businesses succeed with quality software development solutions.",
      url: "https://smartystudios.com/customers",
    },
    twitter: {
      title: `${
        locale === "tr" ? "Müşterilerimiz" : "Our Customers"
      } - ${companyName}`,
      description:
        locale === "tr"
          ? "Memnun müşterilerimizle tanışın ve kaliteli yazılım geliştirme çözümleriyle işletmelerin nasıl başarılı olduğunu görün."
          : "Meet our satisfied customers and see how we help businesses succeed with quality software development solutions.",
    },
    alternates: {
      canonical: "https://smartystudios.com/customers",
    },
  };
}

export default async function Customers() {
  const t = await getTranslations();

  return (
    <section className="py-24 md:py-20 lg:py-32 ">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-6xl">
            {t("customers.pageTitle")}
          </h2>
          <p>{t("customers.pageSubtitle")}</p>
        </div>
      </div>
      <CustomersSection isMainPage={false} />
    </section>
  );
}
