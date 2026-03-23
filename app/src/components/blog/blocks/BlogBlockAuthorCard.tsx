import Image from 'next/image';

import type { BlogBlockAuthorCard as BlogBlockAuthorCardType } from '@/models/blog';

export const BlogBlockAuthorCard = ({ block }: { block: BlogBlockAuthorCardType }) => (
  <div className="flex gap-4 rounded-lg bg-gray-50 p-6">
    {block.photo[0]?.url && (
      <Image
        src={block.photo[0].url}
        alt={block.title ?? ''}
        width={80}
        height={80}
        className="h-20 w-20 rounded-full object-cover"
      />
    )}
    <div>
      <p className="text-lg font-bold">{block.title}</p>
      {block.position && <p className="mb-2 text-sm text-gray-500">{block.position}</p>}
      {block.bio && <p className="text-sm text-gray-700">{block.bio}</p>}
    </div>
  </div>
);
