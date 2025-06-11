import { Cpu, Zap } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function WhoWeAreSection() {
  const t = await getTranslations();

  return (
    <section className="py-8 md:py-16">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          {t("about.whoWeAre.title")}
        </h2>
        <div className="relative">
          <div className="relative z-10 space-y-4 md:w-1/2">
            <p className="text-body">
              {t("about.whoWeAre.description1")}{" "}
              <span className="text-title font-medium">
                {t("about.whoWeAre.description1Highlight")}
              </span>{" "}
              {t("about.whoWeAre.description1Continue")}
            </p>
            <p>{t("about.whoWeAre.description2")}</p>

            <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="size-4" />
                  <h3 className="text-sm font-medium">
                    {t("about.whoWeAre.reliableDelivery.title")}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {t("about.whoWeAre.reliableDelivery.description")}
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Cpu className="size-4" />
                  <h3 className="text-sm font-medium">
                    {t("about.whoWeAre.smartEngineering.title")}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {t("about.whoWeAre.smartEngineering.description")}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
            <div
              aria-hidden
              className="bg-linear-to-l z-1 to-background absolute inset-0 hidden from-transparent to-55% md:block"
            ></div>
            <div className="border-border/50 relative rounded-2xl border border-dotted p-2">
              <Image
                src="/charts.webp"
                className="hidden rounded-[12px] dark:block"
                alt="payments illustration dark"
                width={1200}
                height={929}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
