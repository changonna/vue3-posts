<template>
  <div>
    <img :src="imageSrc" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const prop = defineProps({
  imageString: {
    type: String,
  },
});

console.log('prop.imageString', prop.imageString);
const imageSrc = computed(
  () =>
    new URL(`../assets/images/${prop.imageString}.svg`, import.meta.url).href,
);
</script>

<style scoped></style>
