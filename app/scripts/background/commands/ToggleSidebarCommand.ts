import {SendToggleSidebarMessage} from '../messages/SendToggleSidebarMessage';

export class ToggleSidebarCommand {
  static call() {
    console.log("Toggling sidebar via Command");
    SendToggleSidebarMessage.call();
  }
}
