import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'pm28keub',
  dataset: 'production',
  cseCden: true,
});
