import "./globals.css";
import { Reenie_Beanie } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const reenieBeanie = Reenie_Beanie({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "ale's bucket list",
  description: "things i wanna do before i die",
  openGraph: {
    title: "ale's bucket list",
    description: "things i wanna do before i die",
    images: [
      {
        url: "/sampleimg.png",
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
    images: ["/sampleimg.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={reenieBeanie.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
