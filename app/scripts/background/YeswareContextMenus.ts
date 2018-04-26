const CONTEXT_MENU_CONTENTS = {
  forWindows: [
    'foo',
    'bar',
    'baz'
  ],
  forSelection: [
    'Selection context menu'
  ]
};

export class YeswareContextMenus {
  static install() {
    function setUpContextMenus() {
      CONTEXT_MENU_CONTENTS.forWindows.forEach(function(commandId) {
        chrome.contextMenus.create({
          title: 'Show the Yesware sidebar',
          type: 'radio',
          id: 'A' + commandId,
          contexts: ['all']
        });
      });

      // CONTEXT_MENU_CONTENTS.forWindows.forEach(function(commandId) {
      //   chrome.contextMenus.create({
      //     title: 'B: ' + commandId,
      //     type: 'checkbox',
      //     id: 'B' + commandId,
      //     contexts: ['all']
      //   });
      // });

      CONTEXT_MENU_CONTENTS.forSelection.forEach(function(commandId) {
        chrome.contextMenus.create({
          type: "separator",
          id: 'sep1',
          contexts: ['selection']
        });
        chrome.contextMenus.create( {
          title: commandId + ' "%s"',
          id: commandId,
          contexts: ['selection']
        });
      });
    }

    chrome.runtime.onInstalled.addListener(function() {
      // When the app gets installed, set up the context menus
      setUpContextMenus();
    });
  }
}

