<template>
	<div>
		<h2>Home View</h2>
		<p>$route.path: {{ $route.path }}</p>
		<p>$route.name: {{ $route.name }}</p>
		<button class="btn btn-primary" @click="goAboutPage">About</button>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
console.log('route', route.path);

const goAboutPage = () => {
	router.push('/about');
};
</script>

<style lang="scss" scoped></style>
