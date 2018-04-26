import {IBackgroundMessage} from '../../types/BackgroundMessages';

/**
 * Sends the specified message to the currently active tab
 */
export class SendToActiveTab {
  static invoke(message: IBackgroundMessage) {
    function sendMessage(tabs: any) {
      // There should be exactly one active tab
      if (tabs.length !== 1) {
        throw "wat";
      }

      let tab = tabs[0];
      chrome.tabs.sendMessage(tab.id, message);
    }

    chrome.tabs.query({
      active: true,
      windowId: chrome.windows.WINDOW_ID_CURRENT
    }, sendMessage);
  }
}
