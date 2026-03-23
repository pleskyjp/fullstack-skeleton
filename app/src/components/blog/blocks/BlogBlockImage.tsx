import Image from 'next/image';

import type { BlogBlockImage as BlogBlockImageType } from '@/models/blog';

export const BlogBlockImage = ({ block }: { block: BlogBlockImageType }) => {
  const img = block.image[0];
  if (!img?.url) return null;

  return (
    <figure>
      <Image
        src={img.url}
        alt={block.caption ?? ''}
        width={img.width ?? 800}
        height={img.height ?? 450}
        className="w-full rounded-lg"
      />
      {block.caption && <figcaption className="mt-2 text-center text-sm text-gray-500">{block.caption}</figcaption>}
    </figure>
  );
};
