import React from "react";
import ContactSection from "./contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Project Estimate - Free Software Development Quote",
  description:
    "Get a free estimate for your software development project. Contact Smarty Software Studios for mobile app development, web development, backend solutions, and custom software consulting quotes.",
  keywords: [
    "software development estimate",
    "project quote",
    "free software estimate",
    "mobile app development cost",
    "web development quote",
    "software consulting estimate",
    "custom software price",
    "development project cost",
    "app development quote",
    "yazılım geliştirme fiyat",
    "proje teklifi",
    "mobil uygulama fiyatı",
    "web tasarım fiyat",
  ],
  openGraph: {
    title: "Get Project Estimate - Smarty Software Studios",
    description:
      "Get a free estimate for your software development project. Professional quotes for mobile, web, and custom software solutions.",
    url: "https://smartystudios.com/estimate-project",
  },
  twitter: {
    title: "Get Project Estimate - Smarty Software Studios",
    description:
      "Get a free estimate for your software development project. Professional quotes for mobile, web, and custom software solutions.",
  },
  alternates: {
    canonical: "https://smartystudios.com/estimate-project",
  },
};

export default function EstimateProject() {
  return <ContactSection />;
}
