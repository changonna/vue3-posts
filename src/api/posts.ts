import type { Post } from '@/types';
import { posts } from '.';

export function getPosts(params): Promise<Post[]> {
  return posts.get('/', { params });
}

export function getPostById(id: Post['id']): Promise<Post | undefined> {
  return posts.get(id);
}

export function createPostById(post: Post) {
  return posts.post('/', post);
}

export function updatePostById(id: string, post: Post) {
  return posts.put(id, post);
}

export function deletePostById(id: string) {
  return posts.delete(id);
}
