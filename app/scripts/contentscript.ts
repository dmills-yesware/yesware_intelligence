// Enable chromereload by uncommenting this line:
import 'chromereload/devonly';
import * as $ from "jquery";

console.log(`Hello World! Content script`);

$("body").append(`<div>Hello World</div>`);
