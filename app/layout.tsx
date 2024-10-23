import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { metaConfig } from "@/lib/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = metaConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <meta name="description" content="Explore Ankush's latest blogs on tech, coding, and more. Stay updated with fresh content and insights." />
        <meta name="application-name" content="Blogs by Ankush" />
        <meta name="author" content="Ankush Singh" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Ankush, Ankush's Blogs, Tech Blogs, Ankush Singh, Coding, Programming, Tech Insights" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="Blogs by Ankush | Ankush Singh's World" />
        <meta property="og:description" content="Read the latest blogs and insights by Ankush on technology, coding, and more." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:alt" content="Blogs by Ankush" />
        <meta property="og:url" content="https://blog.ankushsingh.tech" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Blogs by Ankush" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content="Blogs by Ankush | Ankush Singh's World" />
        <meta name="twitter:description" content="Explore Ankush's blog to find the latest content on tech and more." />
        <meta name="twitter:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@whyankush07" />
        <meta name="twitter:creator" content="@whyankush07" />

        {/* Favicon and Manifest */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#33F9FF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ankush's Blog" />

        {/* Schema.org for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "url": "https://blog.ankushsingh.tech",
            "name": "Blogs by Ankush",
            "author": {
              "@type": "Person",
              "name": "Ankush Singh"
            },
            "description": "Read the latest blogs and insights by Ankush on technology, coding, and more.",
            "image": "https://blog.ankushsingh.tech/og-image.png",
          })}
        </script>

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
