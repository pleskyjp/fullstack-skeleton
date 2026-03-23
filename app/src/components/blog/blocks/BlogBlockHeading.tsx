import type { BlogBlockHeading as BlogBlockHeadingType } from '@/models/blog';

export const BlogBlockHeading = ({ block }: { block: BlogBlockHeadingType }) => (
  <h4 className="text-2xl leading-8 font-bold">{block.text}</h4>
);
