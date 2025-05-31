import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import Script from "next/script";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const interMono = Inter_Tight({
  variable: "--font-inter-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smarty Software Studios",
  description:
    "Smarty Software Studios is a software development company that provides software development services to businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="a2b3cff2-fd17-4149-90cf-186ef7ecfcd6"
          strategy="afterInteractive"
        />
      </head>

      <body
        className={`${interSans.variable} ${interMono.variable} dark antialiased`}
      >
        <HeroHeader />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
