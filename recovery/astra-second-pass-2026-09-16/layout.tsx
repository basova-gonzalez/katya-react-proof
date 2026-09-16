import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const display = localFont({
  src: "./fonts/Geist-Variable.ttf",
  variable: "--font-display",
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
});

const mono = localFont({
  src: "./fonts/GeistMono-Variable.ttf",
  variable: "--font-mono",
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});

const editorial = localFont({
  src: "./fonts/BodoniModa-Variable.ttf",
  variable: "--font-editorial",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const metadata: Metadata = {
  title: "Katya — React UX/UI proof",
  description:
    "An independent React UX/UI prototype by Katya: a GONZIK to KABAGO visual study and one idea for keeping website and LLM context in sync. Not affiliated with UNKNW.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Katya — React UX/UI proof",
    description:
      "An independent React UX/UI prototype. Not affiliated with or endorsed by UNKNW.",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Katya — React UX/UI proof",
  description:
    "An independent React UX/UI prototype demonstrating visual design and a shared publishing flow for website and LLM context. Not affiliated with UNKNW.",
  isAccessibleForFree: true,
  inLanguage: "en",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${mono.variable} ${editorial.variable} h-full`}
    >
      <body className="min-h-full">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
