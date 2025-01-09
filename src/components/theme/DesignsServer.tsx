  
import { client } from '@/sanity/lib/client';  
import Designs from './Designs';  

export default async function DesignsServer() { 

    const designsQuery = `*[_type == "designs"]{  
        title, subtitle, button, image1, image2, image3, image4 }`;  

    const sanityData = await client.fetch(designsQuery);  
    const [designsData] = sanityData;  

    return<Designs designsData={designsData} />;

}