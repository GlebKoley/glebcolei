const SITE_URL = 'https://glebcolei.com';

export const collectPagesMetadata = ({ metadata }) => {
   const { url = '/', meta_title, meta_description } = metadata;

   const isMainPage = url === '/';
   const pageUrl = isMainPage ? SITE_URL : `${SITE_URL}${url}`;

   const title = meta_title || 'Глеб — React разработчик | Качественная и надёжная разработка';
   const description =
      meta_description ||
      'Я Глеб — React разработчик, создаю качественные, поддерживаемые и эффективные решения. Работаю надёжно, в срок и без задержек.';

   return {
      title,
      description,
      metadataBase: new URL(SITE_URL),
      twitter: {
         title,
         description,
         card: 'summary_large_image',
      },
      alternates: {
         canonical: pageUrl,
         // languages: {
         //    'en-US': `${SITE_URL}/en${metadata?.url || '/'}`,
         //    'x-default': pageUrl,
         // },
      },
      openGraph: {
         title,
         description,
         height: 630,
         // `${SITE_URL}/favicon.ico`,
         width: 1200,
         url: pageUrl,
         locale: 'ru_RU',
         type: 'website',
         siteName: 'glebcolei',
         // image: `/api/og?title=${encodeURIComponent(metadata?.title || metadata?.seoTitle)}`,
      },
   };
};
