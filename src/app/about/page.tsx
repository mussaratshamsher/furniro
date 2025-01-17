import Furniture from '@/components/theme/Furniture'
import Image from 'next/image'
import React from 'react'

export default function about() {


  return (
  <div className='container mx-auto max-w-[1440px]'>
     <h1 className='text-2xl md:text-3xl font-bold text-center py-5'> About Furniro
     <hr className='border-[#bc9729] border-2 w-60 mx-auto'/></h1>

<div className='grid md:grid-cols-2 max-w-screen-lg md:gap-5 lg:gap-10 mx-auto'>
 
<Image src={''} alt='' width={500} height={500}/>  

<p className='flex justify-center hyphens-none whitespace-break-spaces p-5 mx-auto'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero soluta obcaecati quaerat nesciunt pariatur provident totam vitae quod maxime non, natus doloremque veritatis, cupiditate odit sit velit quidem consequuntur
Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consectetur odit numquam suscipit, modi molestias excepturi saepe inventore dolorum veritatis, doloremque impedit debitis hic reiciendis esse sed, velit sequi aliquid.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem amet eos minus laudantium, similique impedit praesentium excepturi, velit ab deleniti nihil dicta nisi, enim sed. Aliquid deserunt veniam repellat quos
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque excepturi iusto, est officiis sed laborum ipsam alias officia aperiam quasi rem esse perspiciatis placeat perferendis, quam dolore deserunt voluptatibus dolor
</p>
  </div>
 
  <h1 className='text-2xl md:text-3xl font-bold text-center'>About Our Services
    <hr className='border-[#bc9729] border-2 w-60 mx-auto'/></h1>

  <h2>component</h2>

  <h1 className='text-2xl md:text-3xl font-bold text-center'>Some of our Products & Style Decor
  <hr className='border-[#bc9729] border-2 w-60 mx-auto'/></h1>

  <Furniture/>
    </div>
  )
}
