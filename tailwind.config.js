/** @type {import('@tailwindcss/postcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        // フォントウェイトを明示的に定義
        normal: "400",
        bold: "700",
        semibold: "600",
      },
      colors: {
        washi: {
          50: "#f8f7f2", // 薄い和紙色
          100: "#efeee4", // 和紙色
          200: "#e0ddc7", // 少し濃い和紙色
        },
        asagi: "#58B2DC", // 浅葱色（明るい青）
        sumi: "#1C1C1C", // 墨色（黒）
        akane: "#CB4042", // 茜色（赤）
        kusagi: "#393F4C", // 草木染め（濃い紺色）
        yamabuki: "#F8B500", // 山吹色（黄色）
      },
      backgroundImage: {
        "washi-pattern": "url('/images/washi-texture.png')",
      },
    },
  },
  plugins: [],
};
