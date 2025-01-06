import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='max-w-[1440px] container mx-auto'>
        <hr className='mx-10'/>
<div className='grid grid-cols-1 md:grid-cols-6 px-auto py-5 gap-5 md:gap-0 md:p-5 lg:py-10 lg:px-28 mx-5 sm:mx-2 md:mx-0'>
    
    <div className='col-span-1 md:col-span-2'>
        <h1 className='font-bold text-xl lg:mb-5'><Link href='/'>Furniro</Link></h1>
<p className='text-gray-400'>500 Univeristy Drive suits 200 <br />Coral Gables,</p>
<p className='text-gray-400'>FL 33134 USA</p>
    </div>

<div>
<h1 className='text-gray-400 lg:mb-5'>Links</h1>
<ul className='font-bold'>
    <li className='mb-3'><Link href='/'>Home</Link></li>
    <li className='mb-3'><Link href='/product'></Link> Shop</li>
    <li className='mb-3'><Link href='/about'></Link>About</li>
    <li className='mb-3'><Link href='/contact'>Contact</Link></li>
</ul>
</div>

<div>
    <h1 className='text-gray-400 lg:mb-5'>Help</h1>
    <h1 className='font-bold mb-3'><Link href='/checkout'></Link>Payment Options</h1>
     <h1 className='font-bold mb-3'><Link href='account'></Link>Returns</h1>
     <h1>Privacy Policies</h1>
</div>

<div className='md:col-span-2'>
    <h1 className='text-gray-400 lg:mb-5'>Newsletter</h1>
   <form>
    <input type="text" placeholder='Enter Your Email Address' className='border-b border-black col-span-1'/>

    <button className='ml-2 font-bold '>SUBSCRIBE <hr className='border-black col-span-1 '/></button>
</form>
</div>

</div>

<hr className='mx-20'/>
<h1 className='py-2 lg:py-5 pl-10 lg:pl-20 '> 2025 Furniro. All rights reserved </h1>
    </div>
  )
}
