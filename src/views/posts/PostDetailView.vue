<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <p class="text-muted">{{ post.createdAt }}</p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          수정
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="deletePost">삭제</button>
      </div>
    </div>
    <!-- <p>params: {{ $route.params }}</p>
		<p>query: {{ $route.query }}</p>
		<p>hash: {{ $route.hash }}</p> -->
  </div>
</template>

<script setup lang="ts">
// import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { reactive, ref } from 'vue';
import { deletePostById, getPostById } from '@/api/posts';
import type { Post } from '@/types';

// const route = useRoute();
// console.log(route.params);
// console.log(route.query);
// const test = route.query.test;
// console.log('test:', test);

// const id = ref(route.params.id);

// watch(id, (to, from) => {
// 	console.log(to, from);
// });

const props = defineProps({
  id: String,
});

/**
 * ref
 * 장점) 객체 할당 가능
 * 단점) post.value.title, post.value.content 처럼 .value를 붙여야한다.
 * ++ 장점) 일관성
 *
 * reactive
 * 장점) post.title, post.content 처럼 바로 접근 가능
 * 단점) 객체 할당 불가능
 *
 * --> 페이지 컴포넌트에서 웬만하면 ref를 사용하려고 한다.
 */
let post = ref({});
// let post = reactive({});

const fetchPost = async () => {
  try {
    const { data } = await getPostById(props.id);
    setPost(data);
  } catch (error) {
    console.error(error);
  }
  // post.title = data.title;
  // post.content = data.content;
};
fetchPost();

const setPost = ({ title, content, createdAt }: Post) => {
  post.value.title = title;
  post.value.content = content;
  post.value.createdAt = createdAt;
};

// const goPrevPage = () => {
// 	router.push({
// 		name: 'PostDetail',
// 		params: {
// 			id: id.value - 1,
// 		},
// 	});
// };

const router = useRouter();
const goListPage = () => {
  router.push({
    name: 'PostList',
  });
};

const goEditPage = () => {
  router.push({
    name: 'PostEdit',
    params: {
      id: props.id,
    },
  });
};

const deletePost = async () => {
  try {
    if (confirm('정말 삭제하시겠습니까?') === false) {
      return;
    }
    const res = await deletePostById(props.id);
    router.push({ name: 'PostList' });
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="scss" scoped></style>
