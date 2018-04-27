// Enable chromereload by uncommenting this line:
import 'chromereload/devonly';

import {SidebarManager} from './content-scripts/SidebarManager';

SidebarManager.insertSidebar();
SidebarManager.displaySalesforceRecord("dmills.test@gmail.com");
