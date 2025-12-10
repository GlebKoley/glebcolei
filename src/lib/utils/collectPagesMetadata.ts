const SITE_URL = 'https://glebcolei.com';

interface CollectPagesMetadata {
   url: string;
   meta_title: string;
   meta_description: string;
}

export const collectPagesMetadata = ({ url, meta_title, meta_description }: CollectPagesMetadata) => {
   const isMainPage = url === '/';
   const pageUrl = isMainPage ? SITE_URL : `${SITE_URL}${url}`;

   const title = meta_title;
   const description = meta_description;

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
