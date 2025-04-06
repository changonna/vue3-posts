import type { Alert, AlertType } from '@/types/alert';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAlertStore = defineStore('alertStore', () => {
  const alerts = ref<Alert[]>([]);

  const showAlert = (msg: string, type: AlertType = 'error') => {
    alerts.value.push({ message: msg, alertType: type });

    setTimeout(() => {
      alerts.value.shift();
    }, 2000);
  };

  return { showAlert, alerts };
});
