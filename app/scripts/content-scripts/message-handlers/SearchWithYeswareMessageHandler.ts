import {SidebarManager} from '../SidebarManager';

export class SearchWithYeswareMessageHandler {
  static invoke(data: string) {
    SidebarManager.displaySalesforceRecord(data, data);
  }
}
