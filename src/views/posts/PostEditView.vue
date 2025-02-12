<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <PostForm
      @submit.prevent="clickSave"
      v-model:title="form.title"
      v-model:content="form.content"
    >
      <template #actions>
        <button
          type="button"
          class="btn btn-outline-danger"
          @click="goDetailPage"
        >
          취소
        </button>
        <button class="btn btn-primary">저장</button>
      </template>
    </PostForm>
  </div>
</template>

<script setup lang="ts">
import { getPostById, updatePostById } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
import type { Post } from '@/types';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps({
  id: Number,
});

const router = useRouter();
const route = useRoute();
const id = props.id;
const form = ref({
  title: null,
  content: null,
});

const goDetailPage = () => {
  router.push({
    name: 'PostDetail',
    params: id,
  });
};

const fetchPost = async () => {
  try {
    const { data } = await getPostById(id);
    setForm(data);
  } catch (error) {
    console.error(error);
  }
};
fetchPost();

const setForm = ({ title, content, createdAt }: Post) => {
  form.value.title = title;
  form.value.content = content;
  form.value.createdAt = createdAt;
};

const getForm = () => {
  const newPost: Post = {
    ...form.value,
    createdAt: Date.now(),
  };
  return newPost;
};

const clickSave = async (e: Event) => {
  try {
    const newPost = getForm();
    await updatePostById(id, newPost);

    router.push({ name: 'PostDetail', params: { id } });
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="scss" scoped></style>
