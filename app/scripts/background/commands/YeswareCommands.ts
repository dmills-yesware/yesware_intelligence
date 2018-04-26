import {Hash} from '../../types/YeswareTypes';
import {ToggleSidebarCommand} from './ToggleSidebarCommand';

const commands: Hash<Function> = {
  toggle_yesware: ToggleSidebarCommand.invoke
};

export class YeswareCommands {
  static install() {
    chrome.commands.onCommand.addListener(function(command) {
      commands[command] && commands[command]();
    });
  }
}
