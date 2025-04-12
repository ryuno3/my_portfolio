import type { Metadata } from "next";
import { Noto_Serif_JP, Sawarabi_Mincho } from "next/font/google";
import "./globals.css";
import Footer from "@/components/section/footer/footer";
import Header from "@/components/section/header/header";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const sawarabiMincho = Sawarabi_Mincho({
  variable: "--font-sawarabi-mincho",
  subsets: ["latin"],
  weight: ["400"],
});

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
    <html lang="ja">
      <body
        className={`${notoSerifJP.variable} ${sawarabiMincho.variable} antialiased bg-washi-50`}
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
