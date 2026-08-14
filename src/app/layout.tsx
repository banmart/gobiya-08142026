import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { brand } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gobiya.com"),
  title: {
    default: `${brand.name} — Forensic search practice`,
    template: `%s — ${brand.name}`,
  },
  description:
    "Gobiya is a forensic search practice. We trace what actually happens to your site — crawl, render, index, cite — and repair the cause rather than the symptom.",
  openGraph: {
    type: "website",
    siteName: brand.name,
    title: `${brand.name} — Forensic search practice`,
    description:
      "Diagnose the drop. Rebuild the rankings. Evidence-led SEO, generative search, and performance engineering.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Cabinet Grotesk — display face. Fontshare is free for commercial use. */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f%5B%5D=cabinet-grotesk@500,700&display=swap"
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
