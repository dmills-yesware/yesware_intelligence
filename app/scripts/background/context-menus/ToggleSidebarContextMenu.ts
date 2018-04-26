import {IContextMenu} from './YeswareContextMenus';
import Tab = chrome.tabs.Tab;
import OnClickData = chrome.contextMenus.OnClickData;
import {SendToggleSidebarMessage} from '../messages/SendToggleSidebarMessage';

export class ToggleSidebarContextMenu implements IContextMenu {
  title: string = "Toggle the Yesware Sidebar";
  id: string = "ToggleSidebarContextMenu";
  contexts: string[] = [ "page" ];
  onclick: ((info: OnClickData, tab: Tab) => void) = () => {
    console.log("Toggling sidebar via ContextMenu");
    SendToggleSidebarMessage.invoke();
  }
}
