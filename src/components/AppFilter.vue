<template>
  <div class="row g-3">
    <div class="col">
      <input
        :value="title"
        @input="$emit('update:title', $event.target.value)"
        type="text"
        class="form-control"
        placeholder="제목으로 검색하세요."
      />
    </div>
    <div class="col">
      <select
        :value="limit"
        @input="$emit('update:limit', $event.target.value)"
        class="form-select"
      >
        <option value="3">3개씩</option>
        <option value="6">6개씩</option>
        <option value="9">9개씩</option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  limit: {
    type: Number,
    required: true,
  },
});
defineEmits(['update:title', 'update:limit']);
</script>

<style scoped></style>
