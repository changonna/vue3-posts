<template>
	<div class="card">
		<div class="card-body">
			<h5 class="card-title">{{ title }}</h5>
			<p class="card-text">
				{{ content }}
			</p>
			<p class="text-muted">{{ createdAt }}</p>
		</div>
	</div>
</template>

<script setup>
// import { toRef } from 'vue';

const props = defineProps({
	// post: {
	// 	type: Object,
	// 	required: true,
	// },
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
	},
	createdAt: {
		type: [String, Date, Number],
	},
});
// const { title, content, createdAt } = toRef(props.post);
</script>

<style lang="scss" scoped></style>
