import type { Metadata, Viewport } from "next";
import { DM_Mono, Fraunces, Manrope } from "next/font/google";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { BackToTop } from "@/components/site/back-to-top";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.polished-dental.net"),
  title: {
    default: "Polished Dental | Gentle Dentistry in Bismarck, ND",
    template: "%s | Polished Dental",
  },
  description: site.description,
  keywords: [
    "dentist Bismarck ND",
    "Polished Dental",
    "family dentist Bismarck",
    "cosmetic dentistry Bismarck",
    "CEREC crowns Bismarck",
    "dental implants Bismarck",
    "pediatric dentist Bismarck",
  ],
  authors: [{ name: "Polished Dental" }],
  creator: "Polished Dental",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.polished-dental.net",
    siteName: "Polished Dental",
    title: "Polished Dental | Gentle Dentistry in Bismarck, ND",
    description: site.description,
    images: [{ url: "/images/2025-our-doctors.jpg", width: 896, height: 597, alt: "The doctors of Polished Dental" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Polished Dental | Gentle Dentistry in Bismarck, ND",
    description: site.description,
    images: ["/images/2025-our-doctors.jpg"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a2922",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.name,
  url: "https://www.polished-dental.net",
  telephone: site.phone.plain,
  email: site.email,
  image: "https://www.polished-dental.net/images/2025-our-doctors.jpg",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "07:00",
      closes: "16:00",
    },
  ],
  sameAs: [site.social.facebook, site.social.instagram],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} ${dmMono.variable}`}>
      <body className="grain antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <BackToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
