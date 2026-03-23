import type { BlogBlockYoutube } from '@/models/blog';

export const BlogBlockYoutube = ({ block }: { block: BlogBlockYoutube }) => {
  const url = block.videoUrl?.url;
  const videoId = url?.match(/(?:v=|\/embed\/|youtu\.be\/)([^&?/]+)/)?.[1];
  if (!videoId) return null;

  return (
    <div className="aspect-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        className="h-full w-full rounded-lg"
        allowFullScreen
        title="YouTube video"
      />
    </div>
  );
};
