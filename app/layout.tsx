import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DevPreview from "@/components/DevPreview";

export const metadata: Metadata = {
  title: "AM Studios — Cinema for Brands",
  description:
    "Cinematic AI production agency for premium brands. Film-quality video campaigns in 48 hours.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700&family=Outfit:wght@300;400;500;600;700&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col bg-[#FAF9F7]">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <DevPreview />
        </Providers>
      </body>
    </html>
  );
}
