const hero = {
    name: 'heroPage',
    title: 'Hero Page',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Hero Image',
        type: 'image',
        options: {
          hotspot: true, 
        },
      },
      {
        name: 'subtitle1',
        title: 'Hero Subtitle1',
        type: 'string',
      },
      {
        name: 'title',
        title: 'Hero Title',
        type: 'string',
      },
      {
        name: 'subtitle',
        title: 'Hero Subtitle',
        type: 'text',
      },
      {
        name: 'buttonText',
        title: 'Button Text',
        type: 'string',
      },
    ],
  };

  export default hero