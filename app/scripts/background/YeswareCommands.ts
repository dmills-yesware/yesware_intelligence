export class YeswareCommands {
  static install() {
    chrome.commands.onCommand.addListener(function(command) {
      console.log('Command:', command);
    });
  }
}
