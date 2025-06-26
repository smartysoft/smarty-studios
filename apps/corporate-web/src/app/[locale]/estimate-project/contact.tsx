"use client";

import { Card } from "../../../components/ui/card";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations();

  useEffect(() => {
    const widgetScriptSrc = "https://tally.so/widgets/embed.js";

    const load = () => {
      // Load Tally embeds
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      if (typeof Tally !== "undefined") {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        Tally.loadEmbeds();
        return;
      }

      // Fallback if window.Tally is not available
      document
        .querySelectorAll("iframe[data-tally-src]:not([src])")
        .forEach((iframeEl) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          iframeEl.src = iframeEl.dataset.tallySrc;
        });
    };

    // If Tally is already loaded, load the embeds
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (typeof Tally !== "undefined") {
      load();
      return;
    }

    // If the Tally widget script is not loaded yet, load it
    if (document.querySelector(`script[src="${widgetScriptSrc}"]`) === null) {
      const script = document.createElement("script");
      script.src = widgetScriptSrc;
      script.onload = load;
      script.onerror = load;
      document.body.appendChild(script);
      return;
    }
  }, []);

  return (
    <section className="py-32">
      <div className="mx-auto max-w-3xl px-8 lg:px-0">
        <h1 className="text-center text-4xl font-semibold lg:text-5xl">
          {t("estimateProject.contactTitle")}
          <br />
          {t("estimateProject.contactSubtitle")}
        </h1>
        <p className="mt-4 text-center">
          {t("estimateProject.contactDescription")}
        </p>

        <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-8">
          <iframe
            data-tally-src="https://tally.so/embed/wQW48k?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="867"
            title="Estimate Project"
          ></iframe>
        </Card>
      </div>
    </section>
  );
}
