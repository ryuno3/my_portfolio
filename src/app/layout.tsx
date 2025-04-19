import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/section/footer/footer";
import Header from "@/components/section/header/header";
import { notoSerifJP, sawarabiMincho } from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "西野龍ノ介のポートフォリオ",
  description: "西野龍ノ介のポートフォリオです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="light">
      <body
        className={`${notoSerifJP.variable} ${sawarabiMincho.variable} antialiased bg-washi-50 text-sumi`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
