"use client"

import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Slider from "react-slick";

export default async function Designs() {

   const designsQuery = `*[_type == "designs"]{
        title, subtitle,
        button, image, image1, image2, image3, image4 }`
       const sanityData = await client.fetch(designsQuery)
       const[designsData] = sanityData;

       const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
      };

  return (
    <div className='max-w-[1440px] container mx-auto'>
<div className='bg-[#f4dec6] h-[850px] md:h-[1100px] lg:h-[620px] grid md:grid-cols-2 lg:grid-cols-3 p-2 lg:p-5 mb-2 md:mb-5 lg:mb-10'>

<div className='grid1 p-2 lg:p-5 xl:p-2 mt-2 md:mt-32 lg:mt-0'>
<h1 className='font-semibold lg:font-extrabold font-xl md:text-2xl lg:text-5xl lg:mt-10 text-center'>{designsData.title}</h1>
<h2 className='mt-2 lg:mt-14 text-center'>{designsData.subtitle} </h2>
<Link href='/products'><Button className='bg-[#b88f14] hover:animate-pulse mt-2 lg:mt-10'>{designsData.button}</Button> </Link>
</div>

<div className='grid2 p-2 lg:p-5 xl:p-2'>
<Image src={urlFor(designsData.image).url()} 
 alt={designsData.title} width={2000} height={2000} className='w-60 md:w-60 lg:w-96 mx-10 md:mx-20 lg:mx-0'/> 
</div>

<div className='grid-3 slider p-2 lg:p-5 xl:p-2 md:col-span-2 lg:col-span-1 md:ml-20 lg:ml-0'>

<Slider {...settings}>
      <div>
        <Image src={urlFor(designsData.image1).url()} 
               alt={designsData.title} width={2000} 
               height={2000} className='w-60 md:w-[400px] lg:w-96 mx-5 md:mx-20 lg:mx-0'/> 
      </div>
      <div>
      <Image src={urlFor(designsData.image2).url()} 
               alt={designsData.title} width={2000} 
               height={2000} className='w-60 md:w-[400px] lg:w-96 mx-10 md:mx-20 lg:mx-0'/> 
      </div>
      <div>
      <Image src={urlFor(designsData.image3).url()} 
               alt={designsData.title} width={2000} 
               height={2000} className='w-60 md:w-[400px] lg:w-96 mx-10 md:mx-20 lg:mx-0'/> 
      </div>
      <div>
      <Image src={urlFor(designsData.image4).url()} 
               alt={designsData.title} width={2000} 
               height={2000} className='w-60 md:w-[400px] lg:w-96 mx-10 md:mx-20 lg:mx-0'/> 
      </div>
        
    </Slider>

</div>

</div>

</div>
  )
}
