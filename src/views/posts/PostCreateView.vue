<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <form action="">
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input
          v-model="form.title"
          type="email"
          class="form-control"
          id="title"
        />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">내용</label>
        <textarea
          v-model="form.content"
          class="form-control"
          id="content"
          rows="3"
        ></textarea>
      </div>
      <div class="pt-4">
        <button
          type="button"
          class="btn btn-outline-dark me-2"
          @click="goListPage"
        >
          목록
        </button>
        <button class="btn btn-primary" @click="clickSave">저장</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { createPostById } from '@/api/posts';
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
      createdAt: Date.now(),
    };
    await createPostById(post);

    router.push({ name: 'PostList' });
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="scss" scoped></style>
