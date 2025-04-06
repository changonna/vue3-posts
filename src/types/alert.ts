export type AlertType = 'error' | 'success';

export interface Alert {
  message: string;
  alertType: AlertType;
}
