<template>
  <Transition name="slide">
    <div
      v-if="isVisible"
      class="alert-area alert"
      :class="alertClass"
      role="alert"
    >
      {{ msg }}
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useAlertStore } from '@/store/alertStore';
import { computed } from 'vue';

const alertStore = useAlertStore();

const isVisible = computed(() => alertStore.isShowAlert);
const msg = computed(() => alertStore.message);
const alertClass = computed(() => {
  return alertStore.vType === 'error' ? 'alert-danger' : 'alert-success';
});
</script>

<style scoped>
.alert-area {
  position: fixed;
  top: 30px;
  right: 10px;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s;
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
}
</style>
