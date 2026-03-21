import type { BlogBlockHeading } from '@/models/blog';

export const BlogBlockHeading = ({ block }: { block: BlogBlockHeading }) => (
  <h4 className="text-2xl font-bold leading-8">{block.text}</h4>
);
