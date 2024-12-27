import "./globals.css";
import { Reenie_Beanie } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const reenieBeanie = Reenie_Beanie({
  weight: "400",
  subsets: ["latin"],
});

const defaultUrl = "https://www.alesbucket.com";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "ale's bucket list",
  description: "things i wanna do before i die",
  openGraph: {
    title: "ale's bucket list",
    description: "things i wanna do before i die",
    url: defaultUrl,
    siteName: "ale's bucket list",
    images: [
      {
        url: `${defaultUrl}/sampleimg.png`,
        width: 1200,
        height: 630,
        alt: "ale's bucket list",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ale's bucket list",
    description: "things i wanna do before i die",
    images: [`${defaultUrl}/sampleimg.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="ale's bucket list" />
        <meta
          property="og:description"
          content="things i wanna do before i die"
        />
        <meta property="og:image" content={`${defaultUrl}/sampleimg.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={defaultUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ale's bucket list" />
        <meta
          name="twitter:description"
          content="things i wanna do before i die"
        />
        <meta name="twitter:image" content={`${defaultUrl}/sampleimg.png`} />
      </head>
      <body className={reenieBeanie.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
