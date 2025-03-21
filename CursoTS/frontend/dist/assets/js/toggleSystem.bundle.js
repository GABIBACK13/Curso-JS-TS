/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/toggleSystem/index.ts":
/*!***********************************!*\
  !*** ./src/toggleSystem/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const toggleControl_1 = __importDefault(__webpack_require__(/*! ./toggleControl */ "./src/toggleSystem/toggleControl.ts"));
const toggle = new toggleControl_1.default();
toggle.init();


/***/ }),

/***/ "./src/toggleSystem/toggleControl.ts":
/*!*******************************************!*\
  !*** ./src/toggleSystem/toggleControl.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Toggle {
    constructor() { }
    listner(element) {
        element.addEventListener("click", (e) => {
            const el = e.target;
            const box = document.body.querySelector(".box");
            el.classList.toggle("isActive");
            box.classList.toggle("active");
        });
    }
    init() {
        const divBtn = document.querySelector(".toggle-btn");
        if (!divBtn)
            return;
        this.listner(divBtn);
    }
}
exports["default"] = Toggle;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/toggleSystem/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=toggleSystem.bundle.js.map