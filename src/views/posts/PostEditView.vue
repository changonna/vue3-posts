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
import { useAlertStore } from '@/store/alertStore';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const router = useRouter();
const route = useRoute();
const id = props.id;
const form = ref({
  id: 0,
  title: '',
  content: '',
});

const goDetailPage = () => {
  router.push({
    name: 'PostDetail',
    params: id,
  });
};

const fetchPost = async () => {
  try {
    const post = await getPostById(id);
    setForm(post);
  } catch (error) {
    console.error(error);
  }
};
fetchPost();

const setForm = ({ title, content }: Post) => {
  form.value.title = title;
  form.value.content = content;
  // form.value.createdAt = createdAt;
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

    alert('게시글이 수정되었습니다.', 'success');
    // router.push({ name: 'PostDetail', params: { id } });
  } catch (error) {
    alert('네트워크 오류가 발생했습니다.');
    console.error(error);
  }
};

// alert region
const alertStore = useAlertStore();
const alert = alertStore.showAlert;
// end region
</script>

<style lang="scss" scoped></style>
