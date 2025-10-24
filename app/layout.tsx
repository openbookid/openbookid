import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/navigation/header/header";

export const metadata: Metadata = {
  title: "Open Book ID",
  description:
    "An open, low-fee, censorship-resistant identification standard for publishing built on Solana.",
  keywords: [
    "Open Book ID",
    "ISBN",
    "Solana",
    "Transparent publishing",
    "lumedot",
    "Publishing identity",
  ],
  authors: [{ name: "Open Book ID", url: "https://openbookid.org" }],
  openGraph: {
    title: "Open Book ID — Global Publishing Identity on Solana",
    description:
      "Open source, censorship-resistant identification standard for global publishing.",
    url: "https://openbook.id",
    siteName: "Open Book ID",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@openbookid",
    creator: "@openbookid",
    title: "Open Book ID — Global publishing identity on Solana",
    description: "Open source, censorship-resistant identification standard for global publishing.",
    images: ["/og-openbookid.png"],
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
