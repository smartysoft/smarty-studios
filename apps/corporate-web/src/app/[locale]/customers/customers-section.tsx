import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getTranslations } from "next-intl/server";

export default async function CustomersSection({
  isMainPage,
}: {
  isMainPage: boolean;
}) {
  const t = await getTranslations();

  return (
    <section className="bg-background pb-16 pt-16 md:pb-32  ">
      <div className="group relative m-auto max-w-5xl px-6">
        {isMainPage && (
          <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
            <Link
              href="/customers"
              className="block text-sm duration-150 hover:opacity-75"
            >
              <span>{t("customers.meetOurCustomers")}</span>

              <ChevronRight className="ml-1 inline-block size-3" />
            </Link>
          </div>
        )}

        <div
          className={`mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 sm:gap-x-16 sm:gap-y-14 ${
            isMainPage ? "group-hover:blur-xs group-hover:opacity-50" : ""
          }`}
        >
          <div className="flex">
            <a href="https://axya.co" target="_blank" rel="noopener noreferrer">
              <Image
                className="mx-auto h-7 w-fit"
                src="/axya-white.svg"
                alt="Axya Logo"
                height={28}
                width={112}
              />
            </a>
          </div>

          <div className="flex">
            <a
              href="https://paynet.com.tr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="mx-auto h-7 w-fit"
                src="/paynet-white.png"
                alt="Paynet Logo"
                height={28}
                width={112}
              />
            </a>
          </div>

          <div className="flex">
            <a
              href="https://shiftdelete.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="mx-auto h-7 w-fit"
                src="/sdn.webp"
                alt="SDN Logo"
                height={28}
                width={112}
              />
            </a>
          </div>

          <div className="flex">
            <a
              href="https://www.linkedin.com/company/rayonstudios"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="mx-auto h-7 w-fit"
                src="/rayon.png"
                alt="Rayon Logo"
                height={28}
                width={112}
              />
            </a>
          </div>

          <div className="flex">
            <a
              href="https://censys.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="mx-auto h-7 w-fit"
                src="/censys.png"
                alt="Censys Logo"
                height={28}
                width={112}
              />
            </a>
          </div>

          <div className="flex">
            <a
              href="https://ailylabs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="mx-auto h-7 w-fit"
                src="/aily-logo.svg"
                alt="Aily Logo"
                height={28}
                width={112}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
