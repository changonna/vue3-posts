import type { Post } from '@/types';
import { posts } from '.';

export async function getPosts(
  params: Post,
): Promise<{ data: Post[]; totalCount: number }> {
  const response = await posts.get('/', { params });
  return {
    data: response.data,
    totalCount: response.headers['x-total-count'] || 0,
  };
}

export async function getPostById(id: Post['id']): Promise<Post> {
  const response = await posts.get(`${id}`);
  return response.data;
}

export async function createPostById(post: Omit<Post, 'id'>) {
  const response = await posts.post('/', post);
  return response.data;
}

export async function updatePostById(id: number, post: Post) {
  const response = await posts.put(`${id}`, post);
  return response.data;
}

export function deletePostById(id: number) {
  return posts.delete(`${id}`);
}
