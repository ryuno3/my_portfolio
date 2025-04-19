import { Noto_Serif_JP, Sawarabi_Mincho } from "next/font/google";

export const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const sawarabiMincho = Sawarabi_Mincho({
  variable: "--font-sawarabi-mincho",
  subsets: ["latin"],
  weight: ["400"],
});
