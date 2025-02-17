<template>
  <div class="alert-area alert" :class="styleClass" role="alert">
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue';

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'error',
    validator: (value: string) => {
      return ['error', 'success'].includes(value);
    },
  },
});

const { message, type } = toRefs(props);

const styleClass = computed(() => {
  return type.value === 'error' ? 'alert-danger' : 'alert-success';
});
</script>

<style scoped>
.alert-area {
  position: fixed;
  top: 30px;
  right: 10px;
}
</style>
