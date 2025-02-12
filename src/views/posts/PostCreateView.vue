<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <PostForm
      @submit.prevent="clickSave"
      v-model:title="form.title"
      v-model:content="form.content"
    >
      <template #actions>
        <button type="button" class="btn btn-outline-dark" @click="goListPage">
          목록
        </button>
        <button class="btn btn-primary">저장</button>
      </template>
    </PostForm>
  </div>
</template>

<script setup lang="ts">
import { createPostById } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
import type { Post } from '@/types';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goListPage = () => {
  router.push({
    name: 'PostList',
  });
};

const form = ref({
  title: null,
  content: null,
});

const clickSave = async (e: Event) => {
  e.preventDefault();
  try {
    const post: Post = {
      ...form.value,
      createdAt: new Date().toLocaleDateString(),
    };
    await createPostById(post);

    router.push({ name: 'PostList' });
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="scss" scoped></style>
