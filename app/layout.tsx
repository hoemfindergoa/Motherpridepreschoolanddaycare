import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from "@vercel/analytics/react"
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/sonner"
import Navbar from './navbar/navbar';
import { SpeedInsights } from "@vercel/speed-insights/next"
import logo from '../public/logo.png';
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'MothersPride Preschool & Daycare - A Loving Start For Every Little Learner',
  description: 'MothersPride Preschool & Daycare offers a warm, caring space where children learn with joy, confidence, affection, and age-appropriate guidance.',
  images: [
    {
      url: logo,
}
  ],
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <head>
     {/* <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script> */}
     <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"/>
      </head>
      <body className='bg-[#fff9f5] text-slate-800'>
        <Navbar/>

        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <main className='relative isolate'>
              <Analytics/>
              <SpeedInsights/>
            </main>
          <div className='relative isolate'>
            {children}
          </div>
          </ThemeProvider>
          <Toaster />
          <Footer />
          {/* <Sessioprovider/> */}

      </body>
    </html>
  )
} 
