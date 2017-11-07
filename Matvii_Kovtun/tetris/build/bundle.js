/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const WORLD_HEIGHT = 32;
/* harmony export (immutable) */ __webpack_exports__["d"] = WORLD_HEIGHT;

const WORLD_WIDTH = 10;
/* harmony export (immutable) */ __webpack_exports__["e"] = WORLD_WIDTH;

const EMPTY = 0;
/* harmony export (immutable) */ __webpack_exports__["b"] = EMPTY;

const BLOCK = 1;
/* harmony export (immutable) */ __webpack_exports__["a"] = BLOCK;

const FROZEN = 2;
/* harmony export (immutable) */ __webpack_exports__["c"] = FROZEN;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Piece__ = __webpack_require__(2);







class Board {
    constructor(width, height) {
        this.direction = "bottom";

        document.body.addEventListener("keydown", this.handleKeys, false);
        this.activePiece = undefined;
        this.width = width;
        this.height = height;
        this.world = Array(this.height)
            .fill()
            .map(() => new Array(this.width).fill(__WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* EMPTY */]));

        this.score = 0;
    }

    handleKeys (ev) {
        // console.log(ev);
        switch (ev.keyCode) {
            case 39: return this.direction = "right";
            case 37: return this.direction = "left";
            case 38: return this.direction = "top";
            case 40: return this.direction = "bottom";
            default: return
        }
    };

    renderWorldCell(cell) {
        switch (cell) {
            case __WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* EMPTY */] :
                return `<div class="World__cell"></div>`
            case __WEBPACK_IMPORTED_MODULE_0__config_js__["a" /* BLOCK */]:
                return `<div class="World__cell World__cell_block"></div>`
            case __WEBPACK_IMPORTED_MODULE_0__config_js__["c" /* FROZEN */]:
                return `<div class="World__cell World__cell_frozen"></div>`
            default :
                return `<div class="World__cell World__cell_wtf">A!</div>`
        }
    };


    renderWorld() {
        return `
            <div class="World">
                ${this.world.map(row => `
                    <div class="World__row">
                        ${row.map((cell) =>  this.renderWorldCell(cell)).join("")}
                    </div>`).join("")}
            </div>
        `
    };

    setActivePiece(piece) {
        this.activePiece = piece;
    }

    renderPiece(piece, type) {
        piece.coordinates.forEach(([x, y]) => this.world[x][y] = type);
    }

    destroyLayers() {
        let rowsToDestroy = [];
        for (let i = this.height - 1; i >= 0; --i){
            let emptyRow = true;
            let frozenRow = true;
            for (let j = 0; j < this.width; ++j){
                if (this.world[i][j] !== 0) emptyRow = false;
                if (this.world[i][j] !== 2) frozenRow = false;

            }
            if (frozenRow) rowsToDestroy.push(i);
            if (emptyRow) break;
        }

        if (rowsToDestroy.length === 0) return 0;
        console.log(rowsToDestroy);
        
        

        for (let i = 0 ; i < rowsToDestroy.length; ++i)
            for (let j = 0; j < this.width; ++j) this.world[rowsToDestroy[i]][j] = 0;
    
        let lastDestroyed = rowsToDestroy[rowsToDestroy.length - 1];
        for (let i = lastDestroyed; i >= 0; --i){
            for (let j = 0 ; j < this.width; ++j){
                if (this.world[i][j] === 2){
                    this.world[i][j] = 0;
                    this.world[i + rowsToDestroy.length][j] = 2;
                }

            }
        }
        
    }

    getNewPos(piece) {
        let new_coords = [];
        for (let i = 0; i < piece.coordinates.length; ++i){
            let new_x = piece.coordinates[i][0] + 1;
            let new_y = piece.coordinates[i][1];
            // console.log(new_x, new_y);
            
            
            if (new_x >= __WEBPACK_IMPORTED_MODULE_0__config_js__["d" /* WORLD_HEIGHT */]) return false;
            if (this.world[new_x][new_y] === 2) return false;
            new_coords.push([new_x, new_y]);
        }
        return new_coords;
    }

    dropThePiece() {


        let new_coords = this.getNewPos(this.activePiece);
        // console.log(new_coords);
        
        
        if (new_coords !== false) {
            this.renderPiece(this.activePiece, __WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* EMPTY */]);
            this.activePiece.coordinates = new_coords;
            this.renderPiece(this.activePiece, __WEBPACK_IMPORTED_MODULE_0__config_js__["a" /* BLOCK */]);
        }else{
            this.renderPiece(this.activePiece, __WEBPACK_IMPORTED_MODULE_0__config_js__["c" /* FROZEN */]);
            this.destroyLayers();
            this.activePiece = new __WEBPACK_IMPORTED_MODULE_1__Piece__["a" /* default */]();
        }




    }


}


const mainFunc = () => {
    let b = new Board(__WEBPACK_IMPORTED_MODULE_0__config_js__["e" /* WORLD_WIDTH */], __WEBPACK_IMPORTED_MODULE_0__config_js__["d" /* WORLD_HEIGHT */]);
    let p = new __WEBPACK_IMPORTED_MODULE_1__Piece__["a" /* default */]();

    b.setActivePiece(p);

    setInterval(
        () => {

            b.dropThePiece();
            document.body.innerHTML = b.renderWorld();
        },
        10
    );
}


mainFunc();






/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BasicPiece__ = __webpack_require__(3);



class Piece extends __WEBPACK_IMPORTED_MODULE_1__BasicPiece__["a" /* default */] {
    constructor() {
        super();
        let y = this.getRandom(0, __WEBPACK_IMPORTED_MODULE_0__config__["e" /* WORLD_WIDTH */]);
        let root = [1, y];

        this.coordinates = [[root[0] - 1, root[1]], root, [root[0] + 1, root[1]]];
        this.color = this.getRandomColor();
    };
}


/* harmony default export */ __webpack_exports__["a"] = (Piece);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const HAXADECIMAL_LETTERS  = '0123456789ABCDEF';

class BasicPiece {
    getRandom (from, to) {
        return from + Math.floor(Math.random() * to);
    }

    getRandomColor() {
        return '#' + Array(6)
            .fill()
            .map( () => HAXADECIMAL_LETTERS[this.getRandom(0, 16)])
            .join("")
    };

    rotate () {

    };
}

/* harmony default export */ __webpack_exports__["a"] = (BasicPiece);

/***/ })
/******/ ]);