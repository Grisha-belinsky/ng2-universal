"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Grisha on 8/5/2017.
 */
require("angular2-universal-polyfills");
var browser_1 = require("angular2-universal/browser");
var browser_module_1 = require("./browser.module");
var bootloader_1 = require("@angularclass/bootloader");
exports.platformRef = browser_1.platformUniversalDynamic();
function main() {
    return exports.platformRef.bootstrapModule(browser_module_1.MainModule);
}
exports.main = main;
// Bootstrap
bootloader_1.bootloader(main);
//# sourceMappingURL=client.js.map