import { Metadata } from "next";
import { envFrontendConfig } from "../env/env.frontend";

const frontendUrl = envFrontendConfig.APP_FRONTEND;

const SEO: Metadata = {
  title: "Next.js Developer  @vivekcsein",
  description:
    "A production-grade Next.js frontend template for 2025, built with TypeScript, Tailwind CSS, Redux Toolkit, and optimized for scalability, performance, and developer experience.",
  keywords:
    "Next.js frontend template, TypeScript, Tailwind CSS, Redux Toolkit, scalable web architecture, production-ready React, Vivek CSEIN, 2025 web development, DX optimization",
  openGraph: {
    title:
      "Next.js Frontend Template - TypeScript, Tailwind, Redux | Vivek CSEIN",
    description:
      "Explore a modular, production-ready frontend template for 2025 using Next.js, TypeScript, Tailwind CSS, and Redux Toolkit. Built for performance and developer experience.",
    url: frontendUrl,
    siteName: "Sparkverse",
    images: [
      {
        url: `${frontendUrl}/api/og?title=Next.js Developer &subtitle=Elegant DX for Modern Web&author=Lamination Hub&theme=elegant`,
        width: 1200,
        height: 630,
        alt: "Next.js Frontend Template Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Next.js Frontend Template - TypeScript, Tailwind, Redux | Vivek CSEIN",
    description:
      "Modular, scalable, and production-ready frontend template for 2025. Built with Next.js, TypeScript, Tailwind CSS, and Redux Toolkit.",
    images: [`${frontendUrl}og-image.jpg`],
    creator: "@vivekcsein", // Replace with your Twitter handle
  },
  authors: [{ name: "Vivek CSEIN", url: frontendUrl }],
  creator: "Vivek CSEIN",
  publisher: "Vivek CSEIN",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      // maxSnippet: -1,
      // maxImagePreview: "large",
      // maxVideoPreview: -1,
    },
  },
};

export default SEO;
