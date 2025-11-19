import { getPrismicData } from '@/lib/api/prismicApi';
import PageComponentsConstructor from '@/lib/Constructor';
import { collectPagesMetadata } from '@/lib/utils/collectPagesMetadata';

export const generateMetadata = async () => {
   const page = await getPrismicData('main_page');

   const pageMetadata = collectPagesMetadata({
      metadata: page?.results?.[0]?.data,
   });

   return pageMetadata;
};

const MainPage = async () => {
   const pageData = await getPrismicData('main_page');

   return <PageComponentsConstructor slicesData={pageData.results?.[0].data} />;
};

export default MainPage;
