<template>
  <div
    v-if="isVisible"
    class="alert-area alert"
    :class="alertClass"
    role="alert"
  >
    {{ msg }}
  </div>
</template>

<script setup lang="ts">
import { useAlertStore } from '@/store/alertStore';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const alertStore = useAlertStore();
const { isShowAlert, message, vType } = storeToRefs(alertStore);

const isVisible = computed(() => isShowAlert.value);
const msg = computed(() => message.value);
const alertClass = computed(() => {
  return vType.value === 'error' ? 'alert-danger' : 'alert-success';
});
</script>

<style scoped>
.alert-area {
  position: fixed;
  top: 30px;
  right: 10px;
}
</style>
