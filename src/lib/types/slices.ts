import type * as prismic from '@prismicio/client';

import { ButtonsGroup, ButtonVariant, Link, ProjectsBlockCard, TechnologiesCard, TitleComponent } from './common';

export interface MainBannerSlice {
   title: prismic.RichTextField;
   description: prismic.RichTextField;
   image: prismic.ImageField<never>;
   buttons_group: ButtonsGroup[];
}

export interface AboutBlockSlice {
   title_component: TitleComponent;
   left_card_data: {
      emoji: prismic.RichTextField;
      top_text: prismic.KeyTextField;
      main_text: prismic.KeyTextField;
      link: Link;
   }[];
   right_card_data: {
      card_main_text: prismic.KeyTextField;
      post_text: prismic.KeyTextField;
      bottom_text: prismic.KeyTextField;
      open_modal_data: prismic.RichTextField;
   }[];
   left_card_label_text: prismic.RichTextField;
   right_card_label_text: prismic.RichTextField;
}

export interface ProjectsBlockSlice {
   title_component: TitleComponent;
   cards: ProjectsBlockCard[];
}

export interface ConnectCardsBlockSlice {
   title: prismic.RichTextField;
   description: prismic.RichTextField;
   availability_text: prismic.KeyTextField;
   not_availability_text: prismic.KeyTextField;
   availability_subtext: prismic.RichTextField;
   button: Link;
   button_variant: ButtonVariant;
   Cards: {
      emoji: prismic.KeyTextField;
      title: prismic.KeyTextField;
      subtitle: prismic.KeyTextField;
      Link: Link;
   }[];
}

export interface TechnologiesBlockSlice {
   title_component: TitleComponent;
   cards: {
      technologies: TechnologiesCard;
   }[];
}

export interface TextBlockWithAnimatedIconSlice {
   title: prismic.RichTextField;
   description: prismic.RichTextField;
   button_link: Link;
   button_variant: ButtonVariant;
}

export type ConstructorSlice =
   | { id: string; slice_type: 'main_banner'; primary: MainBannerSlice }
   | { id: string; slice_type: 'about_me_block'; primary: AboutBlockSlice }
   | { id: string; slice_type: 'projects_block'; primary: ProjectsBlockSlice }
   | { id: string; slice_type: 'technologies_block'; primary: TechnologiesBlockSlice }
   | { id: string; slice_type: 'connect_cards_block'; primary: ConnectCardsBlockSlice }
   | { id: string; slice_type: 'text_block_with_animated_icon'; primary: TextBlockWithAnimatedIconSlice };
