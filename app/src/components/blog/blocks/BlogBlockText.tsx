import type { BlogBlockText as BlogBlockTextType } from '@/models/blog';

export const BlogBlockText = ({ block }: { block: BlogBlockTextType }) => (
  <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: block.body?.html ?? '' }} />
);
