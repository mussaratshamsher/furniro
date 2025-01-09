
import { Button } from '@/components/ui/button';
import { client } from '@/sanity/lib/client';  
import { urlFor } from '@/sanity/lib/image';  
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';  
import Link from 'next/link';
import { notFound } from 'next/navigation';   
import { FaStar, FaRegStar, FaHeart } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

interface Product {  
    title: string;  
    name: string;  
    id: string;  
    image: string;  
    description: string;  
    price: number;  
    yellowstars: number;
    graystars: number;
    details: string;
    category: string;
    tags: string;
    reviews: string;
}  
 
 const fetchProduct = async (id: string): Promise<Product | null> => {  
    const query = `*[_type == "product" && id == $id][0]{  
        title, name, id, image, description, price , details , yellowstars, graystars, 
        reviews, tags, category
    }`;  

    return await client.fetch(query, { id });  
};  
//    main function 
const ProductDetail = async ({ params }: { params: { id: string } }) => {  
    const product = await fetchProduct(params.id);  

    if (!product) {  
        notFound();  } 
 
    return (  
        <div className="text-gray-600 body-font overflow-hidden">
        <div className="max-w-[1440px] mb-2 md:mb-5 container mx-auto">
         <div className="lg:w-4/5 mx-auto p-1 md:p-0 grid xl:grid-cols-2">
           {/* products gallery  */}
     <div className='grid grid-cols-4 gap-1 md:gap-3 lg:gap-5'>
            <div className='col-span-1 xl:gap-2'>
          <div className='sm:h-32 md:h-44 xl:h-36 '> <Image src={urlFor(product.image).url()} alt={product.title} 
          width={500} height={500} className='rounded-md md:p-5 lg:p-1 xl:p-0'/> </div>
          <div className='sm:h-32 md:h-44 xl:h-36'> <Image src={urlFor(product.image).url()} alt={product.title} 
          width={500} height={500} className='rounded-md rotate-180 md:p-5 lg:p-1 xl:p-0'/> </div>
         <div className='sm:h-32 md:h-44 xl:h-36'> <Image src={urlFor(product.image).url()} alt={product.title}
          width={500} height={500} className='rounded-md rotate-90 md:p-5 lg:p-1 xl:p-0'/> </div>
           </div>
           <div className='col-span-3'>
           <Image src={urlFor(product.image).url()}  
          alt={product.title} width={500} height={500}  className='rounded-md'/> 
           </div>
           </div>
           {/* details  */}
      <div className="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
   <h1 className="text-gray-900 text-3xl title-font font-bold mb-1"> {product.title}</h1>
   <h2 className="text-base title-font text-gray-500 tracking-widest"> {product.name} </h2>
   <h2 className="text-base title-font tracking-widest"> {product.tags} </h2>
              
              <div className="flex py-2  ">
      <div className='flex'>
      <FaStar className='text-yellow-400' /><FaStar className='text-yellow-400' /><FaStar className='text-yellow-400' />
      <FaStar className='text-yellow-400' /> <FaRegStar className='text-gray-400'/></div> 
            <span className="text-gray-600 ml-3">{product.reviews} Reviews</span>
            
            <div className='flex'> <Facebook className='hover:text-[#b88f14]'/>
             <Twitter className='hover:text-[#b88f14]'/>
              <Instagram className='hover:text-[#b88f14]'/> </div>
             </div>
              <p className="leading-relaxed"> {product.description} </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                {/* color  */}
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2 border-gray-300 ml-1 bg-[#744c1d] rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2 border-gray-300 ml-1 bg-[#d2aa33] rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none" />
                </div>
                {/* size  */}
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              {/* price n buttons  */}
              <div className="flex flex-col md:flex-row gap-3 lg:gap-5">
         <span className="title-font font-medium text-2xl text-gray-900"> Rs.{product.price} </span>                            
                <div className='flex mb-1 md:mb-2 gap-3 lg:gap-5'> 
        <Link href='/cart'> <Button> <FaCartShopping className='hover:bg-black/60 hover:animate-pulse'/> 
        Add to Cart</Button></Link>
            
        <Button><FaHeart className='hover:bg-black/60 hover:animate-pulse'/> Shop Now</Button> 
               </div>
              </div>
              
            </div>
          </div>
          {/* section 2  */}
      <div className='py-2 md:py-5 lg:w-4/5 mx-auto p-2 md:p-0'>
          {/* image grid  */}
          <h1 className="text-gray-900 text-3xl title-font font-bold mb-1"> {product.category}</h1>
          <div className='grid grid-cols-2 gap-2 md:gap-5 lg:gap-10'>
              <Image src={urlFor(product.image).url()}  
          alt={product.title} width={500} height={500}  className='max-h-80'/> 
          <Image src={urlFor(product.image).url()}  
          alt={product.title} width={500} height={500}  className='max-h-80'/> 
              </div>
               {/* details */}
      <div className='text-black mt-3 '>
                <span className='underline text-lg md:text-2xl font-bold '> Details about Product</span> <br />
               <div className='flex justify-between text-center indent-20 mx-auto'> {product.details}</div>
            </div>
        </div>

        </div>
      </div>
  
    );  
};  

export default ProductDetail;