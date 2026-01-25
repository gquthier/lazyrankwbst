import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lazyrank.io"),
  title: "LazyRank - AI-Powered SEO Content Generation",
  description: "Generate SEO-optimized content at scale. AI-powered article generation, keyword research, and content strategy for modern marketers.",
  keywords: ["SEO", "AI content", "content generation", "keyword research", "content marketing"],
  openGraph: {
    title: "LazyRank - AI-Powered SEO Content Generation",
    description: "Generate SEO-optimized content at scale with AI.",
    url: "https://lazyrank.io",
    siteName: "LazyRank",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LazyRank - AI-Powered SEO Content Generation",
    description: "Generate SEO-optimized content at scale with AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakarta.variable} ${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
