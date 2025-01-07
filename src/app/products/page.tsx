// import { Button } from '@/components/ui/button';
// import { client } from '@/sanity/lib/client';  
// import { urlFor } from '@/sanity/lib/image';  
// import {  ChevronRight } from 'lucide-react';
// import { FaCartShopping } from "react-icons/fa6";
// import Image from 'next/image';  
// import Link from 'next/link';  
// import React from 'react';  

// export default async function Products() { 

//     interface Product {  
//         title: string;  
//         name: string;  
//         id: string;  
//         image: string; 
//         description: string;  
//         price: number ;
//     }  
     
//     const query = `*[_type == "product"]{  
//         title, name, id, image, description, price  
//     }`;  

//     const sanityData:Product[] = await client.fetch(query);  

//     return (  
//         <div>  
//             {/* Header */}  
//             <div className='bg-[#f4dec6] w-full h-24 text-center py-7'>  
//                 <h1 className='text-xl lg:text-3xl'>Furniro</h1>  
//                 <p className='flex justify-center'>  
//                 <Link href='/' className='font-bold'>Home</Link><b> <ChevronRight/> </b>
//                 <span className='text-gray-700'><Link href='/products'> Shop</Link></span>  
//                 </p>  
//             </div>  

//             {/* Products List */}  
//             <div className='grid grid-cols-4 mx-2 lg:mx-10 py-5 gap-3 lg:gap-5'>  
//             {sanityData.map((product) => (  
//             <div key={product.id} className='grid border-none rounded shadow-[#f4dec6] shadow-lg
//              hover:bg-slate-50 text-center lg:mb-0 z-10 group'>  
//             <Link href={`/productdetails/${product.id}`}>  
      
//             <Image src={urlFor(product.image).url()}  
//              alt={product.title} width={500} height={500}  
//            className='rounded gorup-hover:scale-125 duration-500' />  
//              <h1 className='text-xs font-semibold lg:text-2xl lg:font-bold'>{product.title}</h1>  
//             <h2 className='text-xs lg:text-lg'>{product.name}</h2>  
//              <p className='font-medium text-sm lg:font-bold'>Rs.{product.price}</p>  
//              </Link>  
//              <Button> <FaCartShopping className='hover:bg-black/70 hover:animate-pulse'/> Add to Cart</Button>
               
//            </div>  
//           ))}  
//         </div>  
//      </div>  
//     );  
// }