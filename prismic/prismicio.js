import { createClient as baseCreateClient } from '@prismicio/client';
import { enableAutoPreviews } from '@prismicio/next';

export const createClient = (config = {}) => {
   const client = baseCreateClient(process.env.PRISMIC_REPOSITORY_NAME, {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      fetchOptions:
         process.env.NODE_ENV === 'production'
            ? { cache: 'force-cache', next: { tags: ['prismic'] } }
            : { next: { revalidate: 5 } },
      ...config,
   });

   enableAutoPreviews({ client });

   return client;
};
