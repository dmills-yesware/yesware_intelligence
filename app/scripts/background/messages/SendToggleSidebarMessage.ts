/**
 * Sends the TOGGLE_SIDEBAR message to the currently active tab
 */
import {SendToActiveTab} from './SendToActiveTab';
import {MessageTypes} from '../../types/BackgroundMessages';

export class SendToggleSidebarMessage {
  static invoke() {
    SendToActiveTab.invoke({
      type: MessageTypes.ToggleSidebar,
      data: null
    });
  }
}
