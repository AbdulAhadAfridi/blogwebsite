export default {
  name: 'blogpage',
  type: 'document',
  title: 'Blogpage',
  fields: [
    {
      name: 'id',
      type: 'string',
      title: 'ID',
      description: 'A unique identifier for the blog page.',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true, // Enabling the hotspot feature
      },
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
    },
    {
      name: 'date',
      type: 'datetime',
      title: 'Date',
    },
  ],
};
