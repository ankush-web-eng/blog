import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blogs | Ankush's World",
  description: "Read the latest Blogs by Ankush",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="This is Ankush's Blog Website!"
        />
        <meta name="application-name" content="Blogs by Ankush" />

        <meta property="og:title" content="Ankush" />
        <meta
          property="og:description"
          content="This is Ankush's Blog Website!"
        />
        <meta property="og:image" content="/Ankush_pro.png" />
        <meta property="og:image:alt" content="Blogs by Ankush" />

        <meta name="twitter:title" content="Blogs by Ankush" />
        <meta
          name="twitter:description"
          content="This is Ankush's Blog Website!"
        />
        <meta name="twitter:image" content="/Ankush_pro.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="Ankush__57s" />

        <link rel="icon" type="image/png" href="/Ankush_pro.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#33F9FF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ankush"></meta>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
