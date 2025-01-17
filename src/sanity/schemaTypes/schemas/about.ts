const about ={
      name: 'heroPage',
     title: 'Hero Page',
      type: 'document',
    fields: [
      {
        name: 'image',
       title: 'Image',
        type: 'image',
     options: {
          hotspot: true, 
        },
      },
      {
         name: 'para',
        title: 'Para',
         type: 'text',
      },
      {
         name: 'buttonText',
        title: 'Button Text',
         type: 'string',
      },
    ],


}

export default about