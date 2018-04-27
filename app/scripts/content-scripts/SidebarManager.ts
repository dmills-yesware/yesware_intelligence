import 'chromereload/devonly';
import * as $ from 'jquery';
import _ = require('lodash');
import {Hash} from '../types/YeswareTypes';
import {DynamicFormUtility} from './utilities/DynamicFormUtility';

const containerClass = "yw-sidebar-container";

/**
 * Basic Yesware Sidebar management utility methods
 */
export class SidebarManager {
  private static isFirstLoad: boolean = true;

  static insertSidebar() {
    // let sidebarContainer = document.body.appendChild(document.createElement("div"));
    // let shadowSidebar = sidebarContainer.attachShadow({ mode: 'open' });
    //
    // const $shadowSidebar = $(shadowSidebar);

    $(document.body).append(`<div class="${containerClass}">
                               <iframe id="yesware-sidebar" name="yesware-sidebar"></iframe>
                             </div>`);
  }

  static toggle() {
    $(`.${containerClass}`).toggleClass("yw-sidebar-open");
  }

  static hide() {
    $(`.${containerClass}`).removeClass("yw-sidebar-open");
  }

  static show() {
    $(`.${containerClass}`).addClass("yw-sidebar-open");
  }

  static displaySalesforceRecord(searchTerm: string|undefined) {
    this.postToSidebarIframe({
      search: {
        term: searchTerm
      }
    });
  }

  private static postToSidebarIframe(fields: Hash<any>) {
    if (this.isFirstLoad) {
      this.isFirstLoad = false;

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

    } else {

      let encodedData = encodeURIComponent(JSON.stringify(fields))
        .replace(/'/g, "%27")
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29");

      // Chrome doesn't allow direct iframe access from the extension's context.
      // Instead, we can inject a <script> tag.
      let $script = $('<script>\
                           document.getElementById("yesware-sidebar")\
                               .contentWindow.postMessage(\'' + encodedData + '\', "*");\
                       </script>');

      $script
        .appendTo("body")
        .remove();
    }
  }
}
