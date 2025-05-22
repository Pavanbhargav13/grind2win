import {
  HeartIcon,
  ChatBubbleLeftIcon,
  ArrowPathRoundedSquareIcon,
  ShareIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { useState } from 'react';

interface PostProps {
  username: string;
  timestamp: string;
  content: string;
  likes: number;
  comments: number;
  reposts: number;
  image?: string;
}

const Post = ({
  username,
  timestamp,
  content,
  likes,
  comments,
  reposts,
  image,
}: PostProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <article className="card mb-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
          <span className="text-accent font-semibold">{username[0].toUpperCase()}</span>
        </div>
        <div>
          <h3 className="font-semibold">{username}</h3>
          <time className="text-sm text-gray-400">{timestamp}</time>
        </div>
      </div>

      {/* Content */}
      <p className="mb-4">{content}</p>
      {image && (
        <div className="mb-4 rounded-xl overflow-hidden">
          <img src={image} alt="Post content" className="w-full h-auto" />
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-800">
        <button
          onClick={handleLike}
          className="flex items-center gap-1 text-sm hover:text-accent transition-colors"
        >
          {isLiked ? (
            <HeartIconSolid className="w-5 h-5 text-accent" />
          ) : (
            <HeartIcon className="w-5 h-5" />
          )}
          <span>{likesCount}</span>
        </button>

        <button className="flex items-center gap-1 text-sm hover:text-accent transition-colors">
          <ChatBubbleLeftIcon className="w-5 h-5" />
          <span>{comments}</span>
        </button>

        <button className="flex items-center gap-1 text-sm hover:text-accent transition-colors">
          <ArrowPathRoundedSquareIcon className="w-5 h-5" />
          <span>{reposts}</span>
        </button>

        <button className="flex items-center gap-1 text-sm hover:text-accent transition-colors">
          <ShareIcon className="w-5 h-5" />
        </button>
      </div>
    </article>
  );
};

export default Post;
