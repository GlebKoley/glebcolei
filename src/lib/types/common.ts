import type * as prismic from '@prismicio/client';

export type MetadataProps = {
   params: Promise<{ uid: string }>;
   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export interface PageParams {
   params: Promise<{ uid: string }>;
}

type LinkType = 'Any' | 'Document' | 'Media' | 'Web';

export type LevelType = 'high' | 'medium' | 'low';

export type Icon = {
   url: string;
   alt: string;
   id: string;
};

export interface Link {
   uid?: string;
   key: string;
   url: string;
   name: string;
   text: string;
   id: string;
   target?: string;
   link_type: LinkType;
}

export interface ButtonVariant extends Omit<Link, 'link_type' | 'name' | 'text' | 'url'> {
   data: {
      variant: 'btn-white' | 'btn-transparent-purple';
   };
}

export interface ButtonsGroup {
   link: Link;
   button_variant: ButtonVariant;
}

export type LinksWithIcons = {
   link: Link;
   icon: Icon;
}[];

export type ProjectsBlockCard = {
   data: prismic.RichTextField;
};

export interface TitleComponent {
   id: string;
   key: string;
   type: string;
   data: {
      title: prismic.RichTextField;
      button_variant: ButtonVariant;
      button: Link;
   };
}

export interface TechnologiesCardItem {
   id: string;
   key: string;
   type: string;
   uid: string;
   slug: string;
   data: {
      text: string;
      level: LevelType;
      link: Link;
      icon: Icon;
   };
}

export interface TechnologiesCard {
   id: string;
   key: string;
   type: string;
   uid: string;
   slug: string;
   data: {
      label: string;
      technologies_data: {
         technologies_item: TechnologiesCardItem;
      }[];
   };
}
