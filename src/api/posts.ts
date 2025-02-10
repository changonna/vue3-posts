import type { Post } from '@/types';
import axios from 'axios';
import { ref } from 'vue';

export function getPosts(params): Promise<Post[]> {
  return axios.get('http://localhost:5000/posts', { params });
}

export function getPostById(id: number): Promise<Post | undefined> {
  return axios.get(`http://localhost:5000/posts/${id}`);
}

export function createPostById(post: Post) {
  return axios.post('http://localhost:5000/posts', post);
}

export function updatePostById(id: number, post: Post) {
  return axios.put(`http://localhost:5000/posts/${id}`, post);
}

export function deletePostById(id: number) {
  return axios.delete(`http://localhost:5000/posts/${id}`);
}
