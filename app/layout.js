import "./globals.css";
import * as React from "react";
import { Cairo } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

//Components
import Header from "@/components/header/Header";
import { metaData } from "@/data/meta-data";

//Integrations
import Script from "next/script"; //facebook pixel
import { GoogleTagManager } from "@next/third-parties/google"; //google tag manager

export const metadata = {
  title: metaData.title,
  description: metaData.description,

  //Basic
  generator: metaData.title,
  applicationName: metaData.title,
  referrer: "origin-when-cross-origin",
  keywords: metaData.keywords,
  authors: [
    { name: "Bernardo Braga" },
    { name: "Pedro H. Alencar" },
    { name: "hokup", url: "https://hokup.com.br" },
  ],
  creator: "hokup",
  publisher: "hokup",
  themeColor: metaData.themeColor,

  //Open Graph
  openGraph: {
    title: metaData.title,
    description: metaData.description,
    url: metaData.url,
    siteName: metaData.subtitle,
    images: [
      {
        url: metaData.metaImage,
        width: 1200,
        height: 600,
      },
      {
        url: metaData.metaImage,
        width: 1800,
        height: 1600,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '445479778092008');
              fbq('track', 'PageView');
            `}
      </Script>
      <GoogleTagManager gtmId="GTM-P29SXRS3" />
      <body className="bg-background-0">
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
