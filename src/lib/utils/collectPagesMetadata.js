const SITE_URL = 'https://glebcolei.com';

export const collectPagesMetadata = ({ metadata }) => {
   const { url = '/', meta_title, meta_description } = metadata;

   const isMainPage = url === '/';
   const pageUrl = isMainPage ? SITE_URL : `${SITE_URL}${url}`;

   const title = meta_title || 'Глеб — React разработчик';
   const description =
      meta_description ||
      'Я создаю качественные, поддерживаемые и эффективные решения. Работаю надёжно, в срок и без задержек.';

   return {
      title,
      description,
      creator: 'Глеб Колей',
      publisher: 'Глеб Колей',
      metadataBase: new URL(SITE_URL),
      authors: [{ url: SITE_URL, name: 'Глеб Колей' }],
      twitter: {
         title,
         description,
         card: 'summary_large_image',
      },
      robots: {
         index: true,
         follow: true,
         googleBot: {
            index: true,
            follow: true,
         },
      },
      alternates: {
         canonical: pageUrl,
         languages: {
            'ru-RU': pageUrl,
            'x-default': SITE_URL,
         },
      },
      openGraph: {
         title,
         description,
         url: pageUrl,
         locale: 'ru_RU',
         type: 'website',
         siteName: 'glebcolei',
         images: [
            {
               height: 630,
               width: 1200,
               url: '/og-image.png',
               alt: 'Глеб Колей — React разработчик',
            },
         ],
      },
   };
};
