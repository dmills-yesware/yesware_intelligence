import OnClickData = chrome.contextMenus.OnClickData;
import Tab = chrome.tabs.Tab;
import {ToggleSidebarContextMenu} from './ToggleSidebarContextMenu';
import {SearchYeswareContextMenu} from './SearchYeswareContextMenu';

export interface IContextMenu {
  title: string;
  id: string;
  contexts: string[];
  onclick: (info: OnClickData, tab: Tab) => void;
}

const contextMenus: IContextMenu[] = [
  new ToggleSidebarContextMenu(),
  new SearchYeswareContextMenu()
];

export class YeswareContextMenus {
  static install() {
    function installContextMenus() {
      contextMenus.forEach(contextMenu => {
        chrome.contextMenus.create(contextMenu);
      });
    }
    chrome.runtime.onInstalled.addListener(function () {
      installContextMenus();
    });
  }
}
