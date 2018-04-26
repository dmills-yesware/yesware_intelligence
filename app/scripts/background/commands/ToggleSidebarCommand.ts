export class ToggleSidebarCommand {
  static call() {
    function sendToggleMessage(tabs: any) {
      // There should be exactly one active tab
      if (tabs.length !== 1) {
        throw "wat";
      }

      let tab = tabs[0];
      chrome.tabs.sendMessage(tab.id, "toggle_sidebar");
    }

    chrome.tabs.query({ active: true,
      windowId: chrome.windows.WINDOW_ID_CURRENT
    }, sendToggleMessage);
  }
}
