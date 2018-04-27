import {SidebarManager} from '../SidebarManager';

export class SearchWithYeswareMessageHandler {
  static invoke(searchTerm: string) {
    SidebarManager.show();
    SidebarManager.displaySalesforceRecord(searchTerm, searchTerm);
  }
}
