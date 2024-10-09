import ProviderContainer from "@/provider/ProviderContainer";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quickSand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tourizto",
  description: "Travel media",

  openGraph: {
    title: "Tourizto",
    description: "Travel media",
    url: "http://loacalhost:3000",
    siteName: "Tourizto",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/logo.png" sizes="any" />
      <body className={quickSand.className}>
        <ProviderContainer>{children}</ProviderContainer>
      </body>
    </html>
  );
}
