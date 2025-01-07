
// next.config.js  
const nextConfig = {  
    images: {  
      remotePatterns: [  
        {  
          // This matches the structure of the URLs for images from cdn.sanity.io  
          protocol: 'https',  
          hostname: 'cdn.sanity.io',  
          port: '',  // No port specified, you can omit this line or keep it empty  
          pathname: '/**',  // Allows any path, so all images can be accessed  
        },  
      ],  
    },  
  };  
  
  export default nextConfig;
 