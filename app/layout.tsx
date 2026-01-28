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
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: "LazyRank - AI-Powered SEO Content Generation",
    description: "Votre contenu SEO, en pilote automatique. YOLO Mode activé.",
    url: "https://lazyrank.io",
    siteName: "LazyRank",
    type: "website",
    images: [
      {
        url: '/og-image',
        width: 1200,
        height: 630,
        alt: 'LazyRank - YOLO Mode',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LazyRank - AI-Powered SEO Content Generation",
    description: "Votre contenu SEO, en pilote automatique. YOLO Mode activé.",
    images: ['/og-image'],
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
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '818045241289783');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=818045241289783&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className={`${plusJakarta.variable} ${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
