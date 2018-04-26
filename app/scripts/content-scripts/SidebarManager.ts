import 'chromereload/devonly';
import * as $ from 'jquery';
import {DynamicFormUtility} from './DynamicFormUtility';
import _ = require('lodash');
import {Hash} from '../types/YeswareTypes';

export class SidebarManager {
  static insertSidebar() {
    console.log('insertSidebar');

    $(document.body).append(`<div class="sidebar-container">
                               <iframe name="yesware-sidebar"></iframe>
                             </div>`);
  }

  static showRecord(name: string, email: string) {
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
