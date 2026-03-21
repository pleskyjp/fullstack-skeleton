import type { BlogBlockText } from '@/models/blog';

export const BlogBlockText = ({ block }: { block: BlogBlockText }) => (
  <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: block.body?.html ?? '' }} />
);
