import React from 'react'
import HeroBanner from '@/components/heropreview'
import ProgramPreview from '@/components/Programpreview'
import DaycareSection from '@/components/daycarepreview'

function page() {
  return (
    <div>
      <HeroBanner />
      <ProgramPreview />
      <DaycareSection />
    </div>
  )
}

export default page

