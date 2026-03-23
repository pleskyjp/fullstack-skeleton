import type { BlogBlockBulletList as BlogBlockBulletListType } from '@/models/blog';

export const BlogBlockBulletList = ({ block }: { block: BlogBlockBulletListType }) => (
  <ul className="list-disc space-y-1 pl-6">
    {(block.items ?? []).map((item, i) => (
      <li key={i}>{item?.text}</li>
    ))}
  </ul>
);
