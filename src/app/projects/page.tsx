import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects - Software Development Portfolio",
  description:
    "Explore our portfolio of successful software development projects including mobile apps, web applications, backend systems, and custom software solutions. See our expertise in action.",
  keywords: [
    "software development portfolio",
    "mobile app projects",
    "web development projects",
    "software projects",
    "app development portfolio",
    "custom software examples",
    "development case studies",
    "smarty software projects",
    "yazılım projeleri",
    "mobil uygulama örnekleri",
    "web projelerimiz",
  ],
  openGraph: {
    title: "Our Projects - Smarty Software Studios Portfolio",
    description:
      "Explore our portfolio of successful software development projects and see our expertise in mobile, web, and custom software solutions.",
    url: "https://smartystudios.com/projects",
  },
  twitter: {
    title: "Our Projects - Smarty Software Studios Portfolio",
    description:
      "Explore our portfolio of successful software development projects and see our expertise in mobile, web, and custom software solutions.",
  },
  alternates: {
    canonical: "https://smartystudios.com/projects",
  },
};

export default function Projects() {
  return <div>Projects</div>;
}
