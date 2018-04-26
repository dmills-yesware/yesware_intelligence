import 'chromereload/devonly';
import {CSPHeaderRewriter} from './background/utilities/CSPHeaderRewriter';
import {YeswareContextMenus} from './background/context-menus/YeswareContextMenus';
import {YeswareCommands} from './background/commands/YeswareCommands';

// This is the background bootstrapping code
CSPHeaderRewriter.allowYeswareDomains();
YeswareContextMenus.install();
YeswareCommands.install();
