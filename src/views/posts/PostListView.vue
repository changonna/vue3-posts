<template>
  <div>
    <h2>게시글 목록</h2>
    <hr />
    <form @submit.prevent>
      <div class="row g-3">
        <div class="col">
          <input v-model="params.title_like" type="text" class="form-control" />
        </div>
        <div class="col">
          <select v-model="params._limit" class="form-select">
            <option value="3">3개씩</option>
            <option value="6">6개씩</option>
            <option value="9">9개씩</option>
          </select>
        </div>
      </div>
    </form>
    <hr class="my-4" />
    <div v-if="!posts.length">no data</div>
    <div v-else>
      <div class="row g-3">
        <div v-for="post in posts" :key="post.id" class="col-4">
          <PostItem
            style="cursor: pointer"
            :title="post.title"
            :content="post.content"
            :createdAt="post.createdAt"
            @click="goDetail(post.id)"
          ></PostItem>
        </div>
      </div>
      <AppPagination
        @update-page="page => (params._page = page)"
        v-model:pageCount="pageCount"
        v-model:currentPage="params._page"
      />
    </div>
    <hr class="my-5" />
  </div>
</template>

<script setup>
import { getPosts } from '@/api/posts';
import AppPagination from '@/components/AppPagination.vue';
import PostItem from '@/components/posts/PostItem.vue';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const posts = ref([]);
const router = useRouter();
const pageCount = ref(0);

const params = ref({
  _sort: 'createdAt',
  _order: 'desc',
  _page: 1,
  _limit: 3,
  title_like: '',
});

const fetchPosts = async () => {
  try {
    const { data, headers } = await getPosts(params.value);
    posts.value = data;
    pageCount.value = Math.ceil(headers['x-total-count'] / params.value._limit);
  } catch (error) {
    console.error(error);
  }
};
fetchPosts();

const goDetail = id => {
  // router.push(`/posts/${id}`);
  // 이름으로 params 보내서 이동
  router.push({
    name: 'PostDetail',
    params: { id },
    // query: { queryString: 'hello' },
    // hash: '#hashtag',
  });
};

watch(
  () => [params.value.title_like, params.value._limit],
  () => {
    params.value._page = 1;
    fetchPosts();
  },
);
watch(
  () => [params.value._page],
  () => {
    fetchPosts();
  },
);
</script>

<style lang="scss" scoped></style>
