import * as _ from 'lodash';
import * as $ from 'jquery';
import {Hash} from '../../types/YeswareTypes';

export class DynamicFormUtility {
  /**
   * Injects, submits, and then removes an HTML <form>. Useful
   * for communicating with windows that aren't directly accessible
   * from an extension javascript context, or for form-based submissions.
   *
   * @param {Object} formAttributes - A hash of attributes to apply to
   *     the <form> tag.
   * @param {Object} inputFields - A hash of name/value pairs to be
   *     injected as hidden form inputs and be submitted as form data.
   */
  static submit(formAttributes: Hash<string>,
                inputFields: Hash<string>) {

    let attrs = _.extend({
      method: "post",
      target: "_blank",
      style: "display: none;"
    }, formAttributes);

    let $form = $("<form/>", attrs);

    _.each(_.keys(inputFields), function(key) {
      $form.append($("<input/>", {
        name: key,
        value: inputFields[key],
        type: "hidden"
      }));
    });

    $form
      .appendTo("body")
      .trigger("submit")
      .remove();
  }
}
