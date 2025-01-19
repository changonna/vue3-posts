<template>
	<div>
		<h2>게시글 상세</h2>
		<hr class="my-4" />
		<p>params: {{ $route.params }}</p>
		<p>query: {{ $route.query }}</p>
		<p>hash: {{ $route.hash }}</p>
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.params);
console.log(route.query);
const test = route.query.test;
console.log('test:', test);

const id = ref(route.params.id);

watch(id, (to, from) => {
	console.log(to, from);
});
</script>

<style lang="scss" scoped></style>
