import {AddToCampaignMessageHandler} from './AddToCampaignMessageHandler';
import {PostMessageTypes} from '../../types/PostMessages';

type PostMessageHandler = (data: any) => void;

/**
 * Content script dispatcher for messages received from other windows,
 * sent via postMessage
 */
export class PostMessageHandlers {
  private static handlers: Map<string, PostMessageHandler>;

  static initialize() {
    console.log("initializing message listeners");

    this.handlers = new Map<PostMessageTypes, PostMessageHandler>()
      .set(PostMessageTypes.AddToCampaign, AddToCampaignMessageHandler.invoke);

    window.addEventListener("message", this.onMessage);
  }

  private static onMessage = (e: any) => {
    console.log("Received post message: ", e);
    let handler = PostMessageHandlers.handlers.get(e.data.type);
    handler && handler(e.data);
  }
}
