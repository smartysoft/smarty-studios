import CustomersSection from "@/app/[locale]/customers/customers-section";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Customers - Trusted Software Development Partners",
  description:
    "Meet our satisfied customers and clients. Smarty Software Studios works with startups to enterprises, delivering quality mobile apps, web development, and custom software solutions.",
  keywords: [
    "software development clients",
    "satisfied customers",
    "client testimonials",
    "software development partners",
    "mobile app clients",
    "web development customers",
    "enterprise software clients",
    "startup development partners",
    "smarty software clients",
    "müşterilerimiz",
    "yazılım müşterileri",
    "başarılı projeler",
  ],
  openGraph: {
    title: "Our Customers - Smarty Software Studios",
    description:
      "Meet our satisfied customers and see how we help businesses succeed with quality software development solutions.",
    url: "https://smartystudios.com/customers",
  },
  twitter: {
    title: "Our Customers - Smarty Software Studios",
    description:
      "Meet our satisfied customers and see how we help businesses succeed with quality software development solutions.",
  },
  alternates: {
    canonical: "https://smartystudios.com/customers",
  },
};

export default function Customers() {
  return (
    <section className="py-12 md:py-20 lg:py-32 ">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-6xl">
            Customers
          </h2>
          <p>
            We work with a wide range of customers, from startups to
            enterprises.
          </p>
        </div>
      </div>
      <CustomersSection isMainPage={false} />
    </section>
  );
}
