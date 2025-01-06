
import { client } from '@/sanity/lib/client';  
import { urlFor } from '@/sanity/lib/image';  
import Image from 'next/image';  
import { notFound } from 'next/navigation';   

interface Product {  
    title: string;  
    name: string;  
    id: string;  
    image: string;  
    description: string;  
    price: number;  
}  
 
const fetchProduct = async (id: string): Promise<Product | null> => {  
   console.log("Fetching product with ID:", id); 
    const query = `*[_type == "product" && id == $id][0]{  
        title, name, id, image, description, price ,detail , yellowstars, graystars, 
        
    }`;  

    return await client.fetch(query, { id });  
};  
  
const ProductDetail = async ({ params }: { params: { id: string } }) => {  
    const product = await fetchProduct(params.id); // Fetching product data based on ID from params  

    if (!product) {  
        notFound(); // Redirect to 404 if product is not found  
    }  

    return (  
        <div className='product-detail max-w-[1440px] container mx-auto'>  
            <h1 className='text-3xl'>{product.title}</h1>  
            <Image  
                src={urlFor(product.image).url()}  
                alt={product.title}  
                width={500}  
                height={500}  
            />  
            
            <h2 className='text-xl'>{product.name}</h2>  
            <p>{product.description}</p>  
            <h3 className='text-lg font-bold'>{product.price}</h3>  
        </div>  
    );  
};  

export default ProductDetail;