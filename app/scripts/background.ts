import 'chromereload/devonly';
import {CSPHeaderRewriter} from './background/CSPHeaderRewriter';
import {YeswareContextMenus} from './background/YeswareContextMenus';

CSPHeaderRewriter.allowYeswareDomains();
YeswareContextMenus.install();
