// import UserCard from './UserCard';
// import { getUsers } from './Services';
import { useEffect, useState } from 'react';
import type { Post } from './types';
import PostCard from './PostCard';
import { getPosts } from './Services';

export default function Exercise() {
  // const [users, setUsers] = useState<User[]>([]);
  //
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getPosts();

        // setUsers(data);

        setPosts(data);
      } catch (error) {
        console.error(
          '[Component] Gagal menampilkan data:',
          (error as Error).message
        );
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Post Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {posts.map((post: Post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </>
  );
}
