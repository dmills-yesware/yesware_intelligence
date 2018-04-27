import {ToggleSidebarMessageHandler} from './ToggleSidebarMessageHandler';
import {SearchWithYeswareMessageHandler} from './SearchWithYeswareMessageHandler';
import {IBackgroundMessage, MessageTypes} from '../../types/BackgroundMessages';

type BackgroundMessageHandler = (data: any) => void;

/**
 * Content script dispatcher for messages sent from the background page
 */
export class BackgroundMessageHandlers {
  private static handlers: Map<MessageTypes, BackgroundMessageHandler>;

  static initialize() {
    console.log("initializing message listeners");

    this.handlers = new Map<MessageTypes, BackgroundMessageHandler>()
      .set(MessageTypes.ToggleSidebar, ToggleSidebarMessageHandler.invoke)
      .set(MessageTypes.SearchWithYesware, SearchWithYeswareMessageHandler.invoke);

    chrome.runtime.onMessage.addListener(this.onMessage);
  }

  private static onMessage = (message: IBackgroundMessage) => {
    console.log("Received message: ", message);
    let handler = BackgroundMessageHandlers.handlers.get(message.type);
    handler && handler(message.data);
  }
}
