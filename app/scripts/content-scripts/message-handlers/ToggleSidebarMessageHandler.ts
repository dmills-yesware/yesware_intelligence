import {SidebarManager} from '../SidebarManager';

export class ToggleSidebarMessageHandler {
  static call() {
    SidebarManager.toggle();
  }
}
