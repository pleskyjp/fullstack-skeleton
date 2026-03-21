import type { ComponentType } from 'react';
import { BlogBlockType, type BlogContentBlock } from '@/models/blog';
import { BlogBlockHeading } from './blocks/BlogBlockHeading';
import { BlogBlockText } from './blocks/BlogBlockText';
import { BlogBlockChecklist } from './blocks/BlogBlockChecklist';
import { BlogBlockBulletList } from './blocks/BlogBlockBulletList';
import { BlogBlockNumberedList } from './blocks/BlogBlockNumberedList';
import { BlogBlockQuote } from './blocks/BlogBlockQuote';
import { BlogBlockImage } from './blocks/BlogBlockImage';
import { BlogBlockYoutube } from './blocks/BlogBlockYoutube';
import { BlogBlockAuthorCard } from './blocks/BlogBlockAuthorCard';

const blockComponentMap: Record<string, ComponentType<{ block: never }>> = {
  [BlogBlockType.HEADING]: BlogBlockHeading as ComponentType<{ block: never }>,
  [BlogBlockType.TEXT]: BlogBlockText as ComponentType<{ block: never }>,
  [BlogBlockType.CHECKLIST]: BlogBlockChecklist as ComponentType<{ block: never }>,
  [BlogBlockType.BULLET_LIST]: BlogBlockBulletList as ComponentType<{ block: never }>,
  [BlogBlockType.NUMBERED_LIST]: BlogBlockNumberedList as ComponentType<{ block: never }>,
  [BlogBlockType.QUOTE]: BlogBlockQuote as ComponentType<{ block: never }>,
  [BlogBlockType.IMAGE]: BlogBlockImage as ComponentType<{ block: never }>,
  [BlogBlockType.YOUTUBE]: BlogBlockYoutube as ComponentType<{ block: never }>,
  [BlogBlockType.AUTHOR_CARD]: BlogBlockAuthorCard as ComponentType<{ block: never }>,
};

export const BlogContentRenderer = ({ blocks }: { blocks: BlogContentBlock[] }) => (
  <div className="flex flex-col gap-6">
    {blocks.map((block, i) => {
      const Component = blockComponentMap[block.__typename];
      return Component ? <Component key={i} block={block as never} /> : null;
    })}
  </div>
);
