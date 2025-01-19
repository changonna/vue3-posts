<template>
	<div>
		<h2>제목</h2>
		<p>내용</p>
		<p class="text-muted">2020-01-01</p>
		<hr class="my-4" />
		<div class="row g-2">
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goPrevPage">이전글</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goNextPage">다음글</button>
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
				<button class="btn btn-outline-dark" @click="deletePage">삭제</button>
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
import { ref } from 'vue';

// const route = useRoute();
// console.log(route.params);
// console.log(route.query);
// const test = route.query.test;
// console.log('test:', test);

// const id = ref(route.params.id);

// watch(id, (to, from) => {
// 	console.log(to, from);
// });

const route = useRoute();

const id = route.params.id;

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
			id,
		},
	});
};

const deletePage = () => {
	// 삭제 요청
	// 페이지 이동
	router.push({
		name: 'PostList',
	});
};
</script>

<style lang="scss" scoped></style>
