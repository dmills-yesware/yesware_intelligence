import * as $ from "jquery";

const containerClass = "yw-touchpoints-container";

export class TouchpointsManager {
  static insertTouchpoints() {
    let $container = $(`<div class="${containerClass}">
                           <iframe id="yesware-touchpoints"
                                   src="https://localdev-simon-says-touchpoints.yetihut.com/campaigns?auth_token=B16BaMyeJACQxQcdYRre">
                           </iframe>
                         </div>`);
    $(document.body).append($container);

    // Hacky hacky
    $container.on("click", e => {
      if ($(e.target).closest("#yesware-touchpoints").length > 0) {
        return;
      }

      this.hide();
    });
  }

  static hide() {
    $(`.${containerClass}`).hide();
  }

  static show() {
    $(`.${containerClass}`).show();
  }

  static addFromSalesforce(data: any) {
    // Chrome doesn't allow direct iframe access from the extension's context.
    // Instead, we can inject a <script> tag.
    let $script = $('<script>\
                           document.getElementById("yesware-touchpoints")\
                               .contentWindow.postMessage(\'' + JSON.stringify(data) + '\', "*");\
                       </script>');

    $script
      .appendTo("body")
      .remove();
  }
}
