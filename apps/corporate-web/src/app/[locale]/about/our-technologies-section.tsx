import TechnologiesList from "@/components/technologies-list";
import { getTranslations } from "next-intl/server";

const techStack = [
  {
    name: "Next.js",
    logo: "/next.svg",
  },
  {
    name: "React",
    logo: "/react.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "/tailwindcss.svg",
  },
  {
    name: "Material UI",
    logo: "/mui.svg",
  },
  {
    name: "Turborepo",
    logo: "/turborepo.svg",
  },
];

export default async function OurTechnologiesSection() {
  const t = await getTranslations();

  return (
    <section className="py-8 md:py-16">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="flex flex-col justify-center gap-12">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white mb-6">
            {t("about.whoWeAre.usedTechnologies.title")}
          </h2>

          <TechnologiesList techStack={techStack} />
        </div>
      </div>
    </section>
  );
}
