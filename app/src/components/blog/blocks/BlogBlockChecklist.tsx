import type { BlogBlockChecklist } from '@/models/blog';

export const BlogBlockChecklist = ({ block }: { block: BlogBlockChecklist }) => (
  <ul className="space-y-2">
    {(block.items ?? []).map((item, i) => (
      <li key={i} className="flex items-start gap-2">
        <span className="mt-1 text-green-500">&#10003;</span>
        <span>{item?.text}</span>
      </li>
    ))}
  </ul>
);
