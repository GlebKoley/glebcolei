import { getPrismicData } from '@/lib/api/prismicApi';
import PageComponentsConstructor from '@/lib/Constructor';
import { collectPagesMetadata } from '@/lib/utils/collectPagesMetadata';

export const generateStaticParams = async () => {
   const pages = await getPrismicData('other_pages');

   return pages.map((page) => ({ uid: page.uid }));
};

export const generateMetadata = async ({ params }) => {
   const { uid } = await params;
   const page = await getPrismicData('other_pages_metadata', uid);

   const pageMetadata = collectPagesMetadata({
      metadata: page.data,
   });

   return pageMetadata;
};

const Page = async ({ params }) => {
   const { uid } = await params;
   const pageData = await getPrismicData('other_pages_metadata', uid);

   return <PageComponentsConstructor slicesData={pageData?.data} />;
};

export default Page;
