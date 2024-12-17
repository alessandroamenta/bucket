import './globals.css'
import { Reenie_Beanie } from 'next/font/google'

const reenieBeanie = Reenie_Beanie({
  weight: '400',
  subsets: ['latin']
})

export const metadata = {
  title: "ale's bucket list",
  description: 'things i wanna do before i die',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={reenieBeanie.className}>{children}</body>
    </html>
  )
}
