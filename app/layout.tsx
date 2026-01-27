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
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-51S9KC7GV0"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-51S9KC7GV0');
            `,
          }}
        />
      </head>
      <body className={`${plusJakarta.variable} ${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
