import Image from 'next/image'
import React from 'react'

export default function Services() {
  return (
    <div className='container mx-auto max-w-[1440px]'>
<div className='grid grid-cols-4 h-32 p-5 bg-[#f4dec6] my-2 lg:my-5'>
{/* grid 1  */}
<div className='grid grid-cols-3 gap-2'>
  <Image src={'/images/trophy.png'} alt="" width={500} height={500}/>
<div className='text-gray-500 col-span-2 text-xs'>
  <h1 className='font-bold text-sm text-black'>High Quality </h1>
 <h2> crafted from top materials</h2>
</div>
</div>
{/* grid 2  */}
<div className='grid grid-cols-3 gap-2'>
  <Image src={'/images/vector.png'} alt="" width={500} height={500}/>
<div className='text-gray-500 col-span-2 text-xs'>
  <h1 className='font-bold text-sm text-black'>High Quality </h1>
 <h2> crafted from top materials</h2>
</div>
</div>
{/* grid 3  */}
<div className='grid grid-cols-3 gap-2'>
  <Image src={'/images/shipping.png'} alt="" width={500} height={500}/>
<div className='text-gray-500 col-span-2 text-xs'>
  <h1 className='font-bold text-sm text-black'>High Quality </h1>
 <h2> crafted from top materials</h2>
</div>
</div>
{/* grid 4  */}
<div className='grid grid-cols-3 gap-2'>
  <Image src={'/images/support.png'} alt="" width={500} height={500}/>
<div className='text-gray-500 col-span-2 text-xs'>
  <h1 className='font-bold text-sm text-black'>High Quality </h1>
 <h2> crafted from top materials</h2>
</div>
</div>

</div>
    </div>
  )
}
