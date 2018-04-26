// Enable chromereload by uncommenting this line:
import 'chromereload/devonly';
import { SidebarManager } from "./content-scripts/SidebarManager";

console.log(`Hello Yesware!`);

// let sidebarContainer = document.body.appendChild(document.createElement("div"));
// let shadowSidebar = sidebarContainer.attachShadow({ mode: 'open' });
//
// const $shadowSidebar = $(shadowSidebar);

SidebarManager.insertSidebar();
SidebarManager.showRecord("David Mills", "dmills.test@gmail.com");


