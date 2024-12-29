import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: process.env.SANITYskYMyvyLLkN6DdYb7EN66LWxg66fmuZYNY9ULXBfF9PZQTS9UjrkmIB4lC1I11gu5Rnv0iF78UufwnT945PIRhf64g89TOsL5BGCO9exuPJAEi3DQXhARYBAMSV67pou10eiglk8KsMP1rgIx9NAtWLpZj38gKlqQs8OFk2M0ONmBUUz7PdO,  // Use the API token for authenticated requests
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
