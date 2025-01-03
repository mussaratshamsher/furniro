import { client } from '@/sanity/lib/client';  
import { urlFor } from '@/sanity/lib/image';  
import Image from 'next/image';  
import Link from 'next/link';  
import React from 'react';  

export default async function Products() { 

    interface Product {  
        title: string;  
        name: string;  
        id: string;  
        image: string; 
        description: string;  
        price: number ;
    }  
     
    const query = `*[_type == "product"]{  
        title, name, id, image, description, price  
    }`;  

    const sanityData:Product[] = await client.fetch(query);  

    return (  
        <div>  
            {/* Header */}  
            <div className='bg-[#f4dec6] w-full h-24 text-center py-7'>  
                <h1 className='text-3xl'>Furniro</h1>  
                <p>  
                    <Link href='/' className='font-bold'>Home</Link>  
                    <span className='text-gray-700'> Shop</span>  
                </p>  
            </div>  

            {/* Products List */}  
            <div className='grid grid-cols-4 lg:mx-20 py-5'>  
            {sanityData.map((product) => (  
            <div key={product.id} className='grid border-none rounded shadow-[#f4dec6] shadow-xl hover:bg-slate-50 text-center hover:scale-105 duration-500'>  
            <Link href={`/productdetails/${product.id}`}>  
            
            <Image src={urlFor(product.image).url()}  
             alt={product.title} width={500} height={500}  
           className='rounded hover:animate-pulse' />  
             <h1 className='text-2xl font-bold'>{product.title}</h1>  
            <h2 className='text-lg'>{product.name}</h2>  
             <p className='font-bold'>{product.price}</p>  
             </Link>  
             </div>  
          ))}  
        </div>  
     </div>  
    );  
}