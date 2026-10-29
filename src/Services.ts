import type { Post, User } from './types';

const city = 'Jakarta';
const street = 'Jl. Kebon Jeruk';

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users.map((user: { name: string; email: string }) => ({
      name: user.name,
      email: user.email,
      city,
      street,
    }));
  } catch (error) {
    console.error('[Services] Gagal mengambil data:', (error as Error).message);
    throw error;
  }
};

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    const posts = await response.json();

    return posts.map((post: Post) => ({
      title: post.title,
      body: post.body,
    }));
  } catch (error) {
    console.error('[Services] Gagal mengambil data:', (error as Error).message);

    throw error;
  }
};
