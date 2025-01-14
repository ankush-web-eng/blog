import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { metaConfig } from "@/lib/config";
import { ScrollBarProps } from "@/context/Scrollbar";
import Head from "@/lib/head";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = metaConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head />
      <body className={inter.className}>
        <ScrollBarProps>
          <NextTopLoader
            showSpinner={false}
            color="#5eead4"
          />
          {children}
        </ScrollBarProps>
      </body>
    </html>
  );
}
