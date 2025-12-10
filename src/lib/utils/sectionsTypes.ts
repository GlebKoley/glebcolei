import AboutMeBlock from '@/sections/AboutMeBlock';
import ConnectCardsBlock from '@/sections/ConnectCardsBlock';
import MainBanner from '@/sections/MainBanner';
import ProjectsBlock from '@/sections/ProjectsBlock';
import TechnologiesBlock from '@/sections/TechnologiesBlock';
import TextBlockWithAnimatedIcon from '@/sections/TextBlockWithAnimatedIcon';

import {
   MainBannerSlice,
   AboutBlockSlice,
   ProjectsBlockSlice,
   TechnologiesBlockSlice,
   ConnectCardsBlockSlice,
   TextBlockWithAnimatedIconSlice,
} from '../types/slices';

export type SectionMap = {
   main_banner: MainBannerSlice;
   about_me_block: AboutBlockSlice;
   projects_block: ProjectsBlockSlice;
   technologies_block: TechnologiesBlockSlice;
   connect_cards_block: ConnectCardsBlockSlice;
   text_block_with_animated_icon: TextBlockWithAnimatedIconSlice;
};

export const SECTIONS_TYPES: {
   [K in keyof SectionMap]: React.FC<{ data: SectionMap[K] }>;
} = {
   main_banner: MainBanner,
   about_me_block: AboutMeBlock,
   projects_block: ProjectsBlock,
   technologies_block: TechnologiesBlock,
   connect_cards_block: ConnectCardsBlock,
   text_block_with_animated_icon: TextBlockWithAnimatedIcon,
};
