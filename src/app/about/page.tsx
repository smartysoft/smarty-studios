import WhoWeAreSection from "@/app/about/who-we-are-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Expert Software Development Team",
  description:
    "Learn about Smarty Software Studios - a professional software development team specializing in mobile apps, web development, backend solutions, and software consulting services.",
  keywords: [
    "about smarty software",
    "software development team",
    "expert developers",
    "software consulting team",
    "mobile app developers",
    "web development experts",
    "backend specialists",
    "frontend developers",
    "smart yazılım hakkında",
    "yazılım geliştirme ekibi",
  ],
  openGraph: {
    title: "About Smarty Software Studios - Expert Development Team",
    description:
      "Professional software development team specializing in mobile, web, and custom software solutions.",
    url: "https://smartystudios.com/about",
  },
  twitter: {
    title: "About Smarty Software Studios - Expert Development Team",
    description:
      "Professional software development team specializing in mobile, web, and custom software solutions.",
  },
  alternates: {
    canonical: "https://smartystudios.com/about",
  },
};

export default function About() {
  return (
    <section className="py-12 md:py-20 lg:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-6xl">
            About Us
          </h2>
          <p>
            We don&apos;t just write code — we build reliable, scalable, and
            smart digital solutions.
          </p>
        </div>
      </div>

      <WhoWeAreSection />
    </section>
  );
}
