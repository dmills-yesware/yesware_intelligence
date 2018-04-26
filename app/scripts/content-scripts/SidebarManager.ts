import 'chromereload/devonly';
import * as $ from 'jquery';
import {DynamicFormUtility} from './DynamicFormUtility';
import _ = require('lodash');
import {Hash} from '../types/YeswareTypes';

/**
 * Basic Yesware Sidebar management utility methods
 */
export class SidebarManager {
  static insertSidebar() {
    $(document.body).append(`<div class="yw-sidebar-container">
                               <iframe name="yesware-sidebar"></iframe>
                             </div>`);
  }

  static hide() {
    $(".sidebar-container").removeClass("yw-sidebar-open");
  }

  static show() {
    $(".sidebar-container").addClass("yw-sidebar-open");
  }

  static displaySalesforceRecord(name: string, email: string) {
    this.postToSidebarIframe({
      from: [{
        email: email,
        name: name
      }]
    });
  }

  private static postToSidebarIframe(fields: Hash<any>) {
    let url = 'https://localdev.yetihut.com/api/v1/crm/sidebar?mode=sidebar&hasTaskList=true&platform=gmail&hasTelephony=true';

    let encodedFields: Hash<string> = {};
    Object.keys(fields).forEach(key => {
      let value = fields[key];
      if (typeof value === "object") {
        value = JSON.stringify(value);
      }
      encodedFields[key] = encodeURIComponent(value);
    });

    let inputFields = _.extend(encodedFields, {
      auth_token: 'B16BaMyeJACQxQcdYRre'
    });

    DynamicFormUtility.submit({
      action: url,
      target: 'yesware-sidebar'
    }, inputFields);
  }
}
