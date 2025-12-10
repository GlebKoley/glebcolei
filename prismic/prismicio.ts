import { createClient as baseCreateClient, ClientConfig } from '@prismicio/client';
import { enableAutoPreviews } from '@prismicio/next';

export const createClient = (config: ClientConfig = {}) => {
   const repositoryName = process.env.PRISMIC_REPOSITORY_NAME;
   const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

   if (!repositoryName) {
      throw new Error('Missing PRISMIC_REPOSITORY_NAME');
   }

   if (!accessToken) {
      throw new Error('Missing PRISMIC_ACCESS_TOKEN');
   }

   const client = baseCreateClient(repositoryName, {
      accessToken,
      fetchOptions:
         process.env.NODE_ENV === 'production'
            ? { cache: 'force-cache', next: { tags: ['prismic'] } }
            : { next: { revalidate: 5 } },
      ...config,
   });

   enableAutoPreviews({ client });

   return client;
};
