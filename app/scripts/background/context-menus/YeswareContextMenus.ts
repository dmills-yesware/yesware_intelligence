export class YeswareContextMenus {
  static install() {
    function installContextMenus() {
      chrome.contextMenus.create({
        title: "Toggle the Yesware Sidebar",
        id: "ToggleSidebar",
        contexts: ["page"]
      });

      chrome.contextMenus.create({
        title: `Search Yesware for "%s"`,
        id: "SearchInSidebar",
        contexts: ["selection"]
      });
    }

    chrome.runtime.onInstalled.addListener(function() {
      installContextMenus();
    });
  }
}
