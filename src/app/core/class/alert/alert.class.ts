import { alertType } from '@app/core';
/**
 * Alert
 */
export class Alert {
  /**
   * Alert type
   */
  type: alertType;
  /**
   * Is alert dismissible
   */
  dismissible = true;
  /**
   * Dismiss time
   */
  dismissOnTimeout: number;
  /**
   * Message
   */
  message: string;
}
