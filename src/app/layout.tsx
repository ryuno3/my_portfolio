import type { Metadata } from "next";
import { Noto_Serif_JP, Sawarabi_Mincho } from "next/font/google";
import "./globals.css";

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
  title: "portfolio",
  description: "西野龍ノ介のポートフォリオです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSerifJP.style} antialiased`}>{children}</body>
    </html>
  );
}
