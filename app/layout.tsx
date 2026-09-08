import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from "@vercel/analytics/react"
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/sonner"
import { SpeedInsights } from "@vercel/speed-insights/next"
import logo from '../public/logo.png';
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'MothersHood Preschool & Daycare | Play School & Early Learning',
  description: 'MothersHood Preschool & Daycare provides nurturing preschool and daycare programs for children aged 2 to 6 years, including Play Group, Nursery, Lower Kindergarten and Upper Kindergarten with joyful, hands-on early learning.',
  keywords: "MothersHood Preschool, MothersHood Preschool and Daycare, MothersHood Daycare, MothersHood School, MothersHood Play School, preschool, preschool school, preschool near me, best preschool, best preschool near me, play school, best play school, best play school near me, play school near me, daycare, best daycare, best daycare near me, daycare near me, preschool and daycare, preschool daycare, kids daycare, daycare for kids, child daycare, childcare, child care center, preschool for kids, preschool for children, kids school, children school, school for kids, early childhood education, early childhood learning, early education, early learning, early years education, early years learning, child development, child education, child centered learning, school readiness, confident school readiness, kindergarten readiness, foundational learning, foundation learning, foundational education, preschool education, preschool learning, preschool activities, preschool programs, preschool curriculum, preschool admission, preschool admissions, school admission, daycare admission, play group, playgroup, play group school, playgroup school, playgroup admission, playgroup for kids, playgroup for toddlers, playgroup 2 to 3 years, preschool for 2 year old, preschool for 3 year old, preschool for 4 year old, preschool for 5 year old, preschool for 6 year old, nursery, nursery school, nursery class, nursery admission, nursery education, nursery learning, nursery school near me, nursery 3 to 4 years, lower kindergarten, lower kindergarten school, LKG, LKG school, LKG admission, LKG classes, LKG education, LKG 4 to 5 years, upper kindergarten, upper kindergarten school, UKG, UKG school, UKG admission, UKG classes, UKG education, UKG 5 to 6 years, kindergarten, kindergarten school, kindergarten admission, kindergarten classes, early learning center, early learning centre, learning center for kids, learning centre for children, hands on learning, hands-on learning, playful learning, play based learning, play-based learning, sensory play, sensory learning, social development, early social development, confidence building, child confidence, self expression, self-expression, independence learning, curiosity learning, academic readiness, early academic readiness, foundational skills, learning skills, communication skills, social skills, creative learning, creative education, activity based learning, activity-based learning, experiential learning, experiential education, joyful learning, joyful education, fun learning for kids, hands on activities for kids, preschool activities for kids, toddler activities, toddler learning, toddler school, school for toddlers, infant daycare, toddler daycare, preschool daycare center, safe daycare, safe preschool, secure daycare, secure preschool, child safety, daycare safety, daycare supervision, safe supervision, daycare routine, comforting routine, daycare play and rest, daycare for preschool children, full day daycare, preschool care, quality daycare, nurturing daycare, nurturing preschool, caring preschool, child friendly preschool, child friendly daycare, supportive learning environment, warm learning environment, engaging learning environment, positive learning environment, parent preschool, parent daycare, parent communication, parent teacher communication, parent engagement, preschool parent support, preschool school visit, school visit, preschool tour, daycare visit, preschool enquiry, preschool inquiry, preschool admission process, daycare admission process, preschool timings, daycare timings, preschool fees, daycare fees, preschool FAQ, daycare FAQ, preschool hygiene, daycare hygiene, preschool cleanliness, daycare cleanliness, early childhood care, early childhood development, holistic child development, emotional development, physical development, cognitive development, language development, social emotional learning, school preparation, formal school preparation, preparation for school, confident learners, independent learners, curious learners, happy children, happy learning, safe learning environment, trusted preschool, quality preschool, premium preschool, modern preschool, professional preschool, experienced teachers, trained teachers, caring teachers, preschool teachers, early childhood educators, preschool education center, preschool learning center, children's learning center, kids learning center",
  authors: [{ name: 'MothersHood Preschool & Daycare' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://motherhoodpreschoolanddaycare.com/',
  },
  openGraph: {
    type: 'website',
    title: 'MothersHood Preschool & Daycare | Play School & Early Learning',
    description: 'Nurturing preschool and daycare programs for children aged 2 to 6 years, including Play Group, Nursery, Lower Kindergarten and Upper Kindergarten.',
    url: 'https://motherhoodpreschoolanddaycare.com/',
    siteName: 'MothersHood Preschool & Daycare',
    locale: 'en_IN',
    images: [
      {
        url: logo.src,
      }
    ],
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script> */}
        <meta name="google-site-verification" content="cSfkzpIXzAbo936of1cXTRozABMvdhxVNBu5onvZGsg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </head>
      <body className='bg-[#fff9f5] text-slate-800'>
        {/* <Navbar/> */}

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className='relative isolate'>
            <Analytics />
            <SpeedInsights />
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
