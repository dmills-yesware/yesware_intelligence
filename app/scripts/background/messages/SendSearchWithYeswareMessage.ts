import {SendToActiveTab} from './SendToActiveTab';
import {MessageTypes} from '../../types/BackgroundMessages';

/**
 * Sends the SEARCH_WITH_YESWARE message to the currently active tab
 */
export class SendSearchWithYeswareMessage {
  static invoke(searchTerm: string) {
    SendToActiveTab.invoke({
      type: MessageTypes.SearchWithYesware,
      data: searchTerm
    });
  }
}
