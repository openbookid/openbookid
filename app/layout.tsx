import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/navigation/header/header";

export const metadata: Metadata = {
  title: "OpenBook ID",
  description:
    "An open, low-fee, censorship-resistant identification standard for publishing built on Solana.",
  keywords: [
    "OpenBook ID",
    "ISBN",
    "Solana",
    "Transparent publishing",
    "lumedot",
    "Publishing identity",
  ],
  authors: [{ name: "OpenBook ID", url: "https://openbookid.org" }],
  openGraph: {
    title: "OpenBook ID — Global Publishing Identity on Solana",
    description:
      "Open source, censorship-resistant identification standard for global publishing.",
    url: "https://openbook.id",
    siteName: "OpenBook ID",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/image/og/default-og.png",
        width: 1200,
        height: 630,
        alt: "OpenBook ID",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@openbookid",
    creator: "@openbookid",
    title: "OpenBook ID — Global publishing identity on Solana",
    description:
      "Open source, censorship-resistant identification standard for global publishing.",
    images: ["/image/og/default-og.png"],
  },
  metadataBase: new URL("https://openbookid.org"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
