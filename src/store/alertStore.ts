import type { AlertType } from '@/types/alert';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAlertStore = defineStore('alertStore', () => {
  const isShowAlert = ref(false);
  const message = ref('');
  const vType = ref<AlertType>();

  const showAlert = (msg: string, type: AlertType = 'error') => {
    message.value = msg;
    vType.value = type;
    isShowAlert.value = true;

    setTimeout(() => {
      isShowAlert.value = false;
    }, 2000);
  };

  return { isShowAlert, message, vType, showAlert };
});
