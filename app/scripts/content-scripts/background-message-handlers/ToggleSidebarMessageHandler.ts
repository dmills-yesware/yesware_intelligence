import {SidebarManager} from '../SidebarManager';

export class ToggleSidebarMessageHandler {
  static invoke(data: any): void {
    SidebarManager.toggle();
  }
}
