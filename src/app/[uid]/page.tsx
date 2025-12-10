import type { Metadata } from 'next';

import { getPageDataByUid, getPrismicPagesData } from '@/lib/api/prismicApi';
import PageComponentsConstructor from '@/lib/pagesConstructor';
import { MetadataProps, PageParams } from '@/lib/types/common';
import { collectPagesMetadata } from '@/lib/utils/collectPagesMetadata';

export const generateStaticParams = async () => {
   const pages = await getPrismicPagesData({ isMainPage: false });

   return pages.map((page) => ({ uid: page.uid }));
};

export const generateMetadata = async ({ params }: MetadataProps): Promise<Metadata> => {
   const { uid } = await params;

   const {
      data: { url, meta_title, meta_description },
   } = await getPageDataByUid(uid);

   const pageMetadata = collectPagesMetadata({
      url,
      meta_title,
      meta_description,
   });

   return pageMetadata;
};

const Page = async ({ params }: PageParams) => {
   const { uid } = await params;

   const pageData = await getPageDataByUid(uid);

   return <PageComponentsConstructor slices={pageData?.data.slices} />;
};

export default Page;
