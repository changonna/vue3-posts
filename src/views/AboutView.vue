<template>
	<div>
		<h2>About View</h2>
		<p>$route.path: {{ $route.path }}</p>
		<p>$route.name: {{ $route.name }}</p>
		<button class="btn btn-primary" @click="$router.push('/')">Home</button>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
