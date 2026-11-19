import { useState } from 'react';
import type { Post } from './types';

export default function PostCard(props: Post) {
  const { title, body } = props;

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className={`${isClicked ? 'bg-blue-100' : 'bg-white'} p-6 rounded-lg shadow hover:shadow-md transition-shadow`}
      onClick={() => setIsClicked(true)}
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{body}</p>
    </div>
  );
}
