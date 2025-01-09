
import Hero from '@/components/hero/Hero'
import BrowseRange from '@/components/theme/BrowseRange'
import DesignsServer from '@/components/theme/DesignsServer'
import Furniture from '@/components/theme/Furniture'

import React from 'react'

export default function Home() {
  return (
    <div>

      <Hero />
      
{/* Carousel Component  */}
      <BrowseRange />

     {/* Room designs   */}
    <DesignsServer />

     {/* Furiniro  Furniture  */}
    <Furniture />


    </div>
  )
}
