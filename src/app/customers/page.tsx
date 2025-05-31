import CustomersSection from "@/app/customers/customers-section";
import React from "react";

export default function Customers() {
  return (
    <section className="py-12 md:py-20 lg:py-32">
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
      <CustomersSection isMainPage={false} />;
    </section>
  );
}
