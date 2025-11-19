import { createClient as baseCreateClient } from '@prismicio/client';
import { enableAutoPreviews } from '@prismicio/next';

import sm from '../slicemachine.config.json';

export const repositoryName = process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || sm.repositoryName;

export const createClient = (config = {}) => {
   const client = baseCreateClient(repositoryName, {
      fetchOptions:
         process.env.NODE_ENV === 'production'
            ? { cache: 'force-cache', next: { tags: ['prismic'] } }
            : { next: { revalidate: 5 } },
      ...config,
   });

   enableAutoPreviews({ client });

   return client;
};
