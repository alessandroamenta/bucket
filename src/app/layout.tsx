import "./globals.css";
import { Reenie_Beanie } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const reenieBeanie = Reenie_Beanie({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://alesbucket.com"),
  title: "ale's bucket list",
  description: "things i wanna do before i die",
  openGraph: {
    title: "ale's bucket list",
    description: "things i wanna do before i die",
    siteName: "ale's bucket list",
    type: "website",
    images: [
      {
        url: "https://alesbucket.com/sampleimg.png",
        width: 1200,
        height: 630,
        alt: "ale's bucket list",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ale's bucket list",
    description: "things i wanna do before i die",
    creator: "@ale",
    images: ["https://alesbucket.com/sampleimg.png"],
  },
  other: {
    "og:image:type": "image/png",
    "og:url": "https://alesbucket.com",
    "og:type": "website",
    "twitter:image": "https://alesbucket.com/sampleimg.png",
    "twitter:card": "summary_large_image",
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
        <meta
          property="og:image"
          content="https://alesbucket.com/sampleimg.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="https://alesbucket.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ale's bucket list" />
        <meta
          name="twitter:description"
          content="things i wanna do before i die"
        />
        <meta
          name="twitter:image"
          content="https://alesbucket.com/sampleimg.png"
        />
      </head>
      <body className={reenieBeanie.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
