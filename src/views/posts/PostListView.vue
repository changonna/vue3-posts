<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
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
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import { ref } from 'vue';
import { getPosts } from '@/api/posts';
import { useRouter } from 'vue-router';

const posts = ref([]);
const router = useRouter();

const fetchPosts = () => {
	posts.value = getPosts();
};
fetchPosts();

const goDetail = id => {
	// router.push(`/posts/${id}`);
	// 이름으로 params 보내서 이동
	router.push({
		name: 'PostDetail',
		params: { id },
		query: { queryString: 'hello' },
		hash: '#hashtag',
	});
};
</script>

<style lang="scss" scoped></style>
