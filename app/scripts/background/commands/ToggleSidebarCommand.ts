import {SendToggleSidebarMessage} from '../messages/SendToggleSidebarMessage';

export class ToggleSidebarCommand {
  static invoke() {
    console.log("Toggling sidebar via Command");
    SendToggleSidebarMessage.invoke();
  }
}
