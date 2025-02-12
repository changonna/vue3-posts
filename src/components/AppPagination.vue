<template>
  <nav class="mt-5" aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="isPrevPage">
        <a class="page-link" aria-label="Previous" @click.prevent="prevPage()">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only"></span>
        </a>
      </li>
      <li
        v-for="page in pageCount"
        :key="page"
        class="page-item"
        :class="{ active: page === currentPage }"
      >
        <a class="page-link" @click.prevent="goPage(page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="isNextPage">
        <a class="page-link" aria-label="Next" @click.prevent="nextPage()">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only"></span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['updatePage']);

const isPrevPage = computed(() => ({ disabled: props.currentPage === 1 }));
const isNextPage = computed(() => ({
  disabled: props.currentPage === props.pageCount,
}));

const goPage = (page: number) => {
  emit('updatePage', page);
};
const prevPage = () => {
  if (props.currentPage > 1) {
    emit('updatePage', props.currentPage - 1);
  }
};
const nextPage = () => {
  if (props.currentPage < props.pageCount) {
    emit('updatePage', props.currentPage + 1);
  }
};
</script>

<style scoped></style>
