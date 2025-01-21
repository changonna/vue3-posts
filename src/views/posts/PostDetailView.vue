<template>
	<div>
		<h2>{{ form.title }}</h2>
		<p>{{ form.content }}</p>
		<p class="text-muted">2020-01-01</p>
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
import { reactive, ref } from 'vue';
import { getPostById } from '@/api/posts';
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

const route = useRoute();

const id = parseInt(route.params.id);

/**
 * ref
 * 장점) 객체 할당 가능
 * 단점) form.value.title, form.value.content 처럼 .value를 붙여야한다.
 * ++ 장점) 일관성
 * 
 * reactive
 * 장점) form.title, form.content 처럼 바로 접근 가능
 * 단점) 객체 할당 불가능
 * 
 * --> 페이지 컴포넌트에서 웬만하면 ref를 사용하려고 한다.
 */
const form = ref({});
// let form = reactive({});

const fetchPost = () => {
	const data = getPostById(id);
	if(!data) {
		return {};
	}
	form.value = { ...data };
	// form.title = data.title;
	// form.content = data.content;
	
}
fetchPost();

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
