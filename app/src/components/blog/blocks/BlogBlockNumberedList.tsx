import type { BlogBlockNumberedList as BlogBlockNumberedListType } from '@/models/blog';

export const BlogBlockNumberedList = ({ block }: { block: BlogBlockNumberedListType }) => (
  <ol className="list-decimal space-y-1 pl-6">
    {(block.items ?? []).map((item, i) => (
      <li key={i}>{item?.text}</li>
    ))}
  </ol>
);
