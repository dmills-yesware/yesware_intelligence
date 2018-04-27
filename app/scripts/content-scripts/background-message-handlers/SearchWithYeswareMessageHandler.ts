import {SidebarManager} from '../SidebarManager';

export class SearchWithYeswareMessageHandler {
  static invoke(searchTerm: string) {
    SidebarManager.show();

    let isEmail = SearchWithYeswareMessageHandler.isEmail(searchTerm);
    let name = isEmail ? undefined : searchTerm;
    let email = isEmail ? searchTerm : undefined;
    SidebarManager.displaySalesforceRecord(name, email);
  }

  private static emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private static isEmail(s: string) {
    return this.emailRegex.test(s);
  }
}
