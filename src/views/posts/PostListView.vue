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
      <nav class="mt-5" aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: params._page === 1 }">
            <a class="page-link" aria-label="Previous" @click="prevPage()">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only"></span>
            </a>
          </li>
          <li
            v-for="page in pageCount"
            :key="page"
            class="page-item"
            :class="{ active: page === params._page }"
          >
            <a class="page-link" @click.prevent="goPage(page)">{{ page }}</a>
          </li>
          <li
            class="page-item"
            :class="{ disabled: params._page === pageCount }"
          >
            <a class="page-link" aria-label="Next" @click="nextPage()">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only"></span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <hr class="my-5" />
  </div>
</template>

<script setup>
import { getPosts } from '@/api/posts';
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

const goPage = page => {
  params.value._page = page;
};
const prevPage = () => {
  if (params.value._page > 1) {
    params.value._page--;
  }
};
const nextPage = () => {
  if (params.value._page < pageCount.value) {
    params.value._page++;
  }
};

watch(
  () => [params.value._page, params.value.title_like, params.value._limit],
  () => {
    params.value._page = 1;
    fetchPosts();
  },
);
</script>

<style lang="scss" scoped></style>
