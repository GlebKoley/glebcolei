import { Client, filter } from '@prismicio/client';

import { createClient } from '../../../prismic/prismicio';

const client: Client = createClient();

export const getPageDataByUid = (uid: string) => {
   return client.getByUID('pages', uid);
};

export const getPrismicPagesData = ({ isMainPage = false }: { isMainPage: boolean }) => {
   const filterOption = isMainPage ? [filter.at('my.pages.url', '/')] : [filter.not('my.pages.url', '/')];

   return client.getAllByType('pages', {
      filters: filterOption,
   });
};
