import {MESSAGES} from '../../shared/Messages';

/**
 * Sends the TOGGLE_SIDEBAR message to the currently active tab
 */
export class SendToggleSidebarMessage {
  static call() {
    function sendToggleMessage(tabs: any) {
      // There should be exactly one active tab
      if (tabs.length !== 1) {
        throw "wat";
      }

      let tab = tabs[0];
      chrome.tabs.sendMessage(tab.id, MESSAGES.TOGGLE_SIDEBAR);
    }

    chrome.tabs.query({
      active: true,
      windowId: chrome.windows.WINDOW_ID_CURRENT
    }, sendToggleMessage);
  }
}
