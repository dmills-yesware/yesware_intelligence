import 'chromereload/devonly';
import {CSPHeaderRewriter} from './background/utilities/CSPHeaderRewriter';
import {YeswareContextMenus} from './background/YeswareContextMenus';
import {YeswareCommands} from './background/YeswareCommands';

// This is the background bootstrapping code
CSPHeaderRewriter.allowYeswareDomains();
YeswareContextMenus.install();
YeswareCommands.install();
