<template>
  <div>
    <h2>게시글 목록</h2>
    <hr />
    <form @submit.prevent>
      <AppFilter
        v-model:title="params.title_like"
        v-model:limit="params._limit"
      ></AppFilter>
    </form>
    <hr class="my-4" />
    <div v-if="!posts.length">no data</div>
    <div v-else>
      <AppGrid :items="posts" col-class="col-4">
        <template #item="{ item }">
          <PostItem
            style="cursor: pointer"
            :title="item.title"
            :content="item.content"
            :createdAt="item.createdAt"
            @click="goDetail(item.id)"
          ></PostItem>
        </template>
      </AppGrid>
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
import AppGrid from '@/components/AppGrid.vue';
import PostItem from '@/components/posts/PostItem.vue';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import AppFilter from '@/components/AppFilter.vue';

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
    const { data, totalCount } = await getPosts(params.value);
    posts.value = data;
    pageCount.value = Math.ceil(totalCount / params.value._limit);
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
