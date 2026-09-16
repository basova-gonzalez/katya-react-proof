import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const display = localFont({
  src: "../../../src/app/fonts/Geist-Variable.ttf",
  variable: "--font-display",
  display: "swap",
});

const mono = localFont({
  src: "../../../src/app/fonts/GeistMono-Variable.ttf",
  variable: "--font-mono",
  display: "swap",
});

const editorial = localFont({
  src: "../../../src/app/fonts/DMSerifDisplay-Regular.ttf",
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Katya — React UX/UI proof",
  description: "An independent React UX/UI prototype inspired by UNKNW's public site.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable} ${editorial.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
