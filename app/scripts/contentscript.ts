import 'chromereload/devonly';
import {SidebarManager} from "./content-scripts/SidebarManager";
import {YeswareMessageHandlers} from './content-scripts/message-handlers/YeswareMessageHandlers';

// This is the content script bootstrapping code. It's is injected into every page.

SidebarManager.insertSidebar();
SidebarManager.displaySalesforceRecord("David Mills", "dmills.test@gmail.com");

YeswareMessageHandlers.initialize();
