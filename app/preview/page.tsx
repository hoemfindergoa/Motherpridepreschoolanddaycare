import React from 'react'
import HeroBanner from '@/components/heropreview'
import ProgramPreview from '@/components/Programpreview'
import DaycareSection from '@/components/daycarepreview'
import FaqSection from '@/components/Faqsection'

function page() {
  return (
    <div>
      <HeroBanner />
      <ProgramPreview />
      <DaycareSection />
      <FaqSection/>
    </div>
  )
}

export default page

