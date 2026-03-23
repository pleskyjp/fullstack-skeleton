import type { ComponentType } from 'react';

import { BlogBlockType, type BlogContentBlock } from '@/models/blog';

import { BlogBlockAuthorCard } from './blocks/BlogBlockAuthorCard';
import { BlogBlockBulletList } from './blocks/BlogBlockBulletList';
import { BlogBlockChecklist } from './blocks/BlogBlockChecklist';
import { BlogBlockHeading } from './blocks/BlogBlockHeading';
import { BlogBlockImage } from './blocks/BlogBlockImage';
import { BlogBlockNumberedList } from './blocks/BlogBlockNumberedList';
import { BlogBlockQuote } from './blocks/BlogBlockQuote';
import { BlogBlockText } from './blocks/BlogBlockText';
import { BlogBlockYoutube } from './blocks/BlogBlockYoutube';

type BlockComponent = ComponentType<{ block: BlogContentBlock }>;

const blockComponentMap: Record<string, BlockComponent> = {
  [BlogBlockType.HEADING]: BlogBlockHeading as BlockComponent,
  [BlogBlockType.TEXT]: BlogBlockText as BlockComponent,
  [BlogBlockType.CHECKLIST]: BlogBlockChecklist as BlockComponent,
  [BlogBlockType.BULLET_LIST]: BlogBlockBulletList as BlockComponent,
  [BlogBlockType.NUMBERED_LIST]: BlogBlockNumberedList as BlockComponent,
  [BlogBlockType.QUOTE]: BlogBlockQuote as BlockComponent,
  [BlogBlockType.IMAGE]: BlogBlockImage as BlockComponent,
  [BlogBlockType.YOUTUBE]: BlogBlockYoutube as BlockComponent,
  [BlogBlockType.AUTHOR_CARD]: BlogBlockAuthorCard as BlockComponent,
};

export const BlogContentRenderer = ({ blocks }: { blocks: BlogContentBlock[] }) => (
  <div className="flex flex-col gap-6">
    {blocks.map((block, i) => {
      const Component = blockComponentMap[block.__typename];
      return Component ? <Component key={i} block={block} /> : null;
    })}
  </div>
);
