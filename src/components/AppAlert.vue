<template>
  <TransitionGroup tag="div" name="slide" class="alert-area">
    <div
      v-for="({ message, alertType }, index) in alerts"
      :key="index"
      class="alert"
      :class="alertClass(alertType)"
      role="alert"
    >
      {{ message }}
    </div>
  </TransitionGroup>
</template>

<script setup lang="ts">
import { useAlertStore } from '@/store/alertStore';
import type { AlertType } from '@/types/alert';
import { computed } from 'vue';

const alertStore = useAlertStore();

const alerts = computed(() => alertStore.alerts);

const alertClass = (type: AlertType) => {
  return type === 'error' ? 'alert-danger' : 'alert-success';
};
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
