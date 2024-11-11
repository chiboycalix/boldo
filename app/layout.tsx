import type { Metadata } from "next";
import { Open_Sans, Manrope } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boldo",
  description: "Boldo Landing Page",
};

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" })
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
