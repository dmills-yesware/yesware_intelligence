import 'chromereload/devonly';
import {SidebarManager} from "./content-scripts/SidebarManager";
import {BackgroundMessageHandlers} from './content-scripts/background-message-handlers/BackgroundMessageHandlers';
import {PostMessageHandlers} from './content-scripts/post-messages/PostMessageHandlers';
import {TouchpointsManager} from './content-scripts/touchpoints/TouchpointsManager';

// This is the content script bootstrapping code. It's is injected into every page.

console.log("Hello Yesware!");

SidebarManager.insertSidebar();
SidebarManager.displaySalesforceRecord("dmills.test@gmail.com");

BackgroundMessageHandlers.initialize();
PostMessageHandlers.initialize();

TouchpointsManager.insertTouchpoints();
