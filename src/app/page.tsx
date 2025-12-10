import { getPrismicPagesData } from '@/lib/api/prismicApi';
import PageComponentsConstructor from '@/lib/pagesConstructor';
import { collectPagesMetadata } from '@/lib/utils/collectPagesMetadata';

export const generateMetadata = async () => {
   const page = await getPrismicPagesData({ isMainPage: true });

   const { url, meta_title, meta_description } = page[0].data;

   const pageMetadata = collectPagesMetadata({
      url,
      meta_title,
      meta_description,
   });

   return pageMetadata;
};

const MainPage = async () => {
   const pageData = await getPrismicPagesData({ isMainPage: true });

   return <PageComponentsConstructor slices={pageData[0].data.slices} />;
};

export default MainPage;
