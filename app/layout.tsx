import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist_Mono, Inter } from "next/font/google";
import { AskLauncher } from "@/components/ask-joe";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { profile } from "@/content/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jrossano.github.io"),
  title: {
    default: "Joe Rossano · Lead Software Engineer",
    template: "%s · Joe Rossano",
  },
  description:
    "Lead Software Engineer with over 25 years of experience. Native iOS since 2012. Currently leading Pay in 4 and Installment Loan iOS at JPMorganChase.",
  authors: [{ name: profile.name, url: profile.linkedin }],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} dark`}>
      <body className="min-h-screen bg-midnight font-sans text-cloud antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <AskLauncher />
      </body>
    </html>
  );
}
