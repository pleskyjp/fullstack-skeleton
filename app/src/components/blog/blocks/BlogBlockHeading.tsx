import type { BlogBlockHeading } from '@/models/blog';

export const BlogBlockHeading = ({ block }: { block: BlogBlockHeading }) => (
  <h4 className="text-2xl leading-8 font-bold">{block.text}</h4>
);
