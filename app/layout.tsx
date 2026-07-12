import type { Metadata } from "next";
import localFont from "next/font/local";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { config } from "@/lib/config";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: `${config.clinica.nombre} ${config.clinica.ciudad}`,
  description: config.hero.parrafo,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} ${dmSans.variable}`}
        style={{ margin: 0, background: "#0A0A0A" }}
      >
        {children}
      </body>
    </html>
  );
}
