import {Hash} from '../../types/YeswareTypes';
import {ToggleSidebarMessageHandler} from './ToggleSidebarMessageHandler';
import {MESSAGES} from '../../shared/Messages';

export class YeswareMessageHandlers {
  private static handlers: Hash<Function> = {};

  static initialize() {
    console.log("initializing message listeners");
    this.handlers[MESSAGES.TOGGLE_SIDEBAR] = ToggleSidebarMessageHandler.call;

    chrome.runtime.onMessage.addListener(this.onMessage);
  }

  private static onMessage = (message: string) => {
    console.log("Received message: ", message);
    YeswareMessageHandlers.handlers[message] && YeswareMessageHandlers.handlers[message]();
  }
}
