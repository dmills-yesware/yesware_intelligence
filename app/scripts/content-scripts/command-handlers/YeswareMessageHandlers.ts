import {Hash} from '../../types/YeswareTypes';
import {ToggleSidebarMessageHandler} from './ToggleSidebarMessageHandler';

const handlers: Hash<Function> = {
  toggle_sidebar: ToggleSidebarMessageHandler.call
};

export class YeswareMessageHandlers {
  static initialize() {
    console.log("initializing message listeners");
    chrome.runtime.onMessage.addListener(this.onMessage);
  }

  private static onMessage(message: string) {
    console.log("Received message: ", message);
    handlers[message] && handlers[message]();
  }
}
