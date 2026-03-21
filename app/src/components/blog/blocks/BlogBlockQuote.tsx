import Image from 'next/image';
import type { BlogBlockQuote } from '@/models/blog';

export const BlogBlockQuote = ({ block }: { block: BlogBlockQuote }) => (
  <blockquote className="flex flex-col gap-3 rounded-3xl bg-gray-50 p-5">
    <p className="text-center text-lg leading-6">{block.text}</p>
    {block.authorName && (
      <div className="flex items-center justify-center gap-3">
        {block.authorPhoto[0]?.url && (
          <Image src={block.authorPhoto[0].url} alt={block.authorName} width={60} height={60} className="rounded-full object-cover" />
        )}
        <div className="text-left">
          <p className="text-2xl font-bold leading-7">{block.authorName}</p>
          {block.authorPosition && <p className="text-base text-gray-500">{block.authorPosition}</p>}
        </div>
      </div>
    )}
  </blockquote>
);
