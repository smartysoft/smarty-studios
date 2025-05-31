import { Cpu, Zap } from "lucide-react";
import Image from "next/image";

export default function WhoWeAreSection() {
  return (
    <section className="py-8 md:py-16">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          Who We Are
        </h2>
        <div className="relative">
          <div className="relative z-10 space-y-4 md:w-1/2">
            <p className="text-body">
              Smarty is a software development and consulting company helping{" "}
              <span className="text-title font-medium">
                fast-growing startups and enterprises
              </span>{" "}
              turn ideas into fully functional digital products. With a team of
              experienced engineers and product thinkers, we deliver frontend
              and backend solutions that scale — both technically and
              commercially.
            </p>
            <p>Founded by engineers, built for business impact.</p>

            <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="size-4" />
                  <h3 className="text-sm font-medium">Reliable Delivery</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  We deliver projects on time, with clean code and clear
                  communication — every single time.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Cpu className="size-4" />
                  <h3 className="text-sm font-medium">Smart Engineering</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Our team combines technical expertise with product thinking to
                  build scalable and sustainable solutions.
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
