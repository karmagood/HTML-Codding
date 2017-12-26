/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Comments {
    constructor (container) {
        this.container = container;
        container
            .querySelector(".Comments__load-more")
            .addEventListener("click", () => {
                this.onShow (container);

                const wrapper = container.querySelector(".Comments__wrapper");

                const hidden = wrapper
                    .querySelectorAll(".Comments__comment_hidden");

                if (hidden.length) {
                    for (let i = 0; i < 2; i++) {
                        if (hidden[i]) {
                            hidden[i]
                                .classList
                                .remove("Comments__comment_hidden")
                        }
                    }

                    if (wrapper.querySelectorAll(".Comments__comment_hidden").length === 0) {
                        container
                            .querySelector(".Comments__load-more")
                            .classList
                            .add("Comments__load-more_hidden")
                    }
                }


            });
    };

    onShow () {}

    hideAllCommentsExceptFirst () {
        const {container} = this;

        const comments = container.querySelectorAll(".Comments__comment");

        for (let i= 1; i< comments.length; i++) {
            comments[i].classList.add("Comments__comment_hidden");
        }

        container
            .querySelector(".Comments__load-more")
            .classList
            .remove("Comments__load-more_hidden")

    }

}

/* harmony default export */ __webpack_exports__["a"] = (Comments);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ShowHide {
    constructor (container)  {
        const toggler = container.querySelector(".Show-hide__toggle");

        if (toggler) {
            toggler.addEventListener("click",  () => {
                if (container) {
                    const content = container.querySelector(".Show-hide__content")

                    if (content) {
                        if (content
                                .classList.contains("Show-hide__content_hidden")) {
                            this.onShow(container);
                        } else {
                            this.onHide(container);
                        }

                        content
                            .classList
                            .toggle("Show-hide__content_hidden")
                    }
                }

            })
        }
    };

    onHide ()  {}
    onShow () {}
}



/* harmony default export */ __webpack_exports__["a"] = (ShowHide);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Comments__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ShowHide__ = __webpack_require__(1);



const showHideEl = document.querySelectorAll(".Show-hide");

for (let i =0 ; i < showHideEl.length; i++) {
    const commentsEl = showHideEl[i].querySelector(".Comments");
    let comment;

    if (commentsEl) {
        comment = new __WEBPACK_IMPORTED_MODULE_0__Comments__["a" /* default */](commentsEl);
    }

    let toggler = new __WEBPACK_IMPORTED_MODULE_1__ShowHide__["a" /* default */](showHideEl[i]);

    toggler.onHide = (container) => {
        comment.hideAllCommentsExceptFirst();
    }

}


/***/ })
/******/ ]);