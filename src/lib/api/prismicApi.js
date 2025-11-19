import { filter } from '@prismicio/client';

import { createClient } from '../../../prismic/prismicio';

const client = createClient();

const getApiPagesParams = (uid = null) => ({
   other_pages_metadata: {
      pageType: 'pages',
      method: 'getByUID',
      params: {
         uid,
      },
   },

   main_page: {
      pageType: 'pages',
      method: 'getByType',
      params: {
         filters: [filter.at('my.pages.url', '/')],
      },
   },

   other_pages: {
      pageType: 'pages',
      method: 'getAllByType',
      params: {
         filters: [filter.not('my.pages.url', '/')],
      },
   },
});

export const getPrismicData = (pageType = null, uid = null) => {
   if (!pageType) return null;

   const config = getApiPagesParams(uid)[pageType];

   if (!config) return null;

   const { method, params, pageType: type } = config;

   if (method === 'getByUID') {
      return client[method](type, params.uid);
   }

   return client[method](type, params);
};
