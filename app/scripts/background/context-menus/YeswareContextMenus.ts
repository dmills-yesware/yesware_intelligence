import OnClickData = chrome.contextMenus.OnClickData;
import Tab = chrome.tabs.Tab;
import {ToggleSidebarContextMenu} from './ToggleSidebarContextMenu';

export interface IContextMenu {
  title: string;
  id: string;
  contexts: string[];
  onclick: (info: OnClickData, tab: Tab) => void;
}

const contextMenus: IContextMenu[] = [
  new ToggleSidebarContextMenu()
];

export class YeswareContextMenus {
  static install() {
    function installContextMenus() {
      contextMenus.forEach(contextMenu => {
        chrome.contextMenus.create(contextMenu);
      });
      // chrome.contextMenus.create({
      //   title: "Toggle the Yesware Sidebar",
      //   id: "ToggleSidebar",
      //   contexts: ["page"],
      //
      // });
      //
      // chrome.contextMenus.create({
      //   title: `Search Yesware for "%s"`,
      //   id: "SearchInSidebar",
      //   contexts: ["selection"]
      // });
    }

    chrome.runtime.onInstalled.addListener(function() {
      installContextMenus();
    });
  }
}
