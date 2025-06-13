import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware({
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
  localeDetection: routing.localeDetection,
  localePrefix: "always",
  pathnames: {
    "/how-to-downgrade-ios-26-to-stock": {
      en: "/how-to-downgrade-ios-26-to-stock",
      tr: "/ios-26-stock-sistemine-nasil-donulur",
    },
  },
});

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
