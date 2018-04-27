import 'chromereload/devonly';
import {SidebarManager} from "./content-scripts/SidebarManager";
import {BackgroundMessageHandlers} from './content-scripts/background-message-handlers/BackgroundMessageHandlers';
import {PostMessageHandlers} from './content-scripts/post-messages/PostMessageHandlers';

// This is the content script bootstrapping code. It's is injected into every page.

SidebarManager.insertSidebar();
SidebarManager.displaySalesforceRecord("David Mills", "dmills.test@gmail.com");

BackgroundMessageHandlers.initialize();
PostMessageHandlers.initialize();
