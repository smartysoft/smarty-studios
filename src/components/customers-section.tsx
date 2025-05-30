import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CustomersSection({
  isMainPage,
}: {
  isMainPage: boolean;
}) {
  return (
    <section className="bg-background pb-16 pt-16 md:pb-32">
      <div className="group relative m-auto max-w-5xl px-6">
        {isMainPage && (
          <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
            <Link
              href="/customers"
              className="block text-sm duration-150 hover:opacity-75"
            >
              <span> Meet Our Customers</span>

              <ChevronRight className="ml-1 inline-block size-3" />
            </Link>
          </div>
        )}

        <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
          <div className="flex">
            <Image
              className="mx-auto h-7 w-fit"
              src="/axya-white.svg"
              alt="Axya Logo"
              height="20"
              width={100}
            />
          </div>

          <div className="flex">
            <Image
              className="mx-auto h-7 w-fit"
              src="/paynet-white.png"
              alt="Paynet Logo"
              height="20"
              width={100}
            />
          </div>

          <div className="flex">
            <Image
              className="mx-auto h-7  w-fit"
              src="/sdn.webp"
              alt="SDN Logo"
              height="150"
              width={300}
            />
          </div>

          <div className="flex">
            <Image
              className="mx-auto h-7 w-fit"
              src="/rayon.png"
              alt="Rayon Logo"
              height="150"
              width={300}
            />
          </div>

          <div className="flex">
            <Image
              className="mx-auto h-7 w-fit"
              src="/censys.png"
              alt="Censys Logo"
              height="150"
              width={300}
            />
          </div>

          <div className="flex">
            <Image
              className="mx-auto h-7 w-fit"
              src="/aily-logo.svg"
              alt="Aily Logo"
              height="150"
              width={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
