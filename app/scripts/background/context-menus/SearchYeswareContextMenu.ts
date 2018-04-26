import {IContextMenu} from './YeswareContextMenus';
import Tab = chrome.tabs.Tab;
import OnClickData = chrome.contextMenus.OnClickData;
import {SendSearchWithYeswareMessage} from '../messages/SendSearchWithYeswareMessage';

export class SearchYeswareContextMenu implements IContextMenu {
  title: string = `Search Yesware for "%s"`;
  id: string = "SearchYeswareContextMenu";
  contexts: string[] = [ "selection" ];
  onclick: ((info: OnClickData, tab: Tab) => void) = (info, tab) => {
    SendSearchWithYeswareMessage.invoke(info.selectionText || "");
  }
}
