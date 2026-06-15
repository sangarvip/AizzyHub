import type { Metadata } from "next";
import "./globals.css";
import { Sora, Inter } from "next/font/google";
import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import { ThemeProvider } from "@/src/components/common/ThemeProvider";
import JsonLd from "@/src/components/common/JsonLd";
import Script from "next/script";
import { buildOrganizationSchema, buildWebSiteSchema, buildLocalBusinessSchema } from "@/src/lib/seo";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aizzyhub.com"),
  title: {
    default: "AizzyHub — Personal Finance, Investing & AI Finance Blog",
    template: "%s | AizzyHub",
  },
  description:
    "Free expert guides on personal finance, stock market investing, mutual funds, and AI-powered finance. Trusted by readers in the US, UK, Canada & Australia.",
  keywords: [
    "personal finance",
    "how to invest",
    "stock market investing",
    "mutual funds",
    "AI in finance",
    "financial planning",
    "investing for beginners",
    "fintech",
    "AizzyHub",
  ],
  alternates: {
    canonical: "https://www.aizzyhub.com",
    languages: {
      "en-US": "https://www.aizzyhub.com",
      "en-GB": "https://www.aizzyhub.com",
      "en-CA": "https://www.aizzyhub.com",
      "en-AU": "https://www.aizzyhub.com",
      "x-default": "https://www.aizzyhub.com",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "AizzyHub — Personal Finance, Investing & AI Finance Blog",
    description:
      "Free expert guides on personal finance, stock market investing, mutual funds, and AI-powered finance. Trusted by readers in the US, UK, Canada & Australia.",
    url: "https://www.aizzyhub.com",
    siteName: "AizzyHub",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.aizzyhub.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AizzyHub — Personal Finance & Investing Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AizzyHub — Personal Finance, Investing & AI Finance Blog",
    description:
      "Free expert guides on personal finance, stock market investing, and AI-powered finance. Trusted by readers in the US, UK, Canada & Australia.",
    site: "@aizzyhub",
    creator: "@aizzyhub",
    images: ["https://www.aizzyhub.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        {/* Preconnect to external origins for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://flagcdn.com" />
        {/* hreflang — geo targeting US, UK, CA, AU */}
        <link rel="alternate" hrefLang="en-US" href="https://www.aizzyhub.com" />
        <link rel="alternate" hrefLang="en-GB" href="https://www.aizzyhub.com" />
        <link rel="alternate" hrefLang="en-CA" href="https://www.aizzyhub.com" />
        <link rel="alternate" hrefLang="en-AU" href="https://www.aizzyhub.com" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.aizzyhub.com"
        />
        {/* Theme init — must run before paint to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
      try{
        var t=localStorage.getItem('theme');
        if(t==='dark'){
          document.documentElement.classList.add('dark')
        }else{
          document.documentElement.classList.remove('dark')
        }
      }catch(e){}
    })()`,
          }}
        />
        {/* Organization + WebSite + LocalBusiness schema */}
        <JsonLd schema={[buildOrganizationSchema(), buildWebSiteSchema(), buildLocalBusinessSchema()]} />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DHN53DNBB7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-DHN53DNBB7',{page_path:window.location.pathname});`}
        </Script>
      </head>
      <body className={`${sora.variable} ${inter.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
