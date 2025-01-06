
import Hero from '@/components/hero/Hero'
import BrowseRange from '@/components/theme/BrowseRange'
import Designs from '@/components/theme/Designs'
import Furniture from '@/components/theme/Furniture'

import React from 'react'

export default function Home() {
  return (
    <div>

      <Hero />
      
{/* Carousel Component  */}
      <BrowseRange />

     {/* Room designs   */}
     <Designs />

     {/* Furiniro  Furniture  */}
    <Furniture />


    </div>
  )
}
