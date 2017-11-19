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
/******/ 	return __webpack_require__(__webpack_require__.s = 120);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isPlaceholder__ = __webpack_require__(34);
/* harmony export (immutable) */ __webpack_exports__["a"] = _curry2;



/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(a) ? f2 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_b) {
          return fn(a, _b);
        });
      default:
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(a) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(b) ? f2 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(a) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_a) {
          return fn(_a, b);
        }) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(b) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isPlaceholder__ = __webpack_require__(34);
/* harmony export (immutable) */ __webpack_exports__["a"] = _curry1;


/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isPlaceholder__["a" /* default */])(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isPlaceholder__ = __webpack_require__(34);
/* harmony export (immutable) */ __webpack_exports__["a"] = _curry3;




/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(a) ? f3 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function (_b, _c) {
          return fn(a, _b, _c);
        });
      case 2:
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(a) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(b) ? f3 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(a) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function (_a, _c) {
          return fn(_a, b, _c);
        }) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(b) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function (_b, _c) {
          return fn(a, _b, _c);
        }) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_c) {
          return fn(a, b, _c);
        });
      default:
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(a) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(b) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(c) ? f3 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(a) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(b) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function (_a, _b) {
          return fn(_a, _b, c);
        }) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(a) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(c) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function (_a, _c) {
          return fn(_a, b, _c);
        }) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(b) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(c) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function (_b, _c) {
          return fn(a, _b, _c);
        }) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(a) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_a) {
          return fn(_a, b, c);
        }) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(b) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_b) {
          return fn(a, _b, c);
        }) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(c) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArray__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isTransformer__ = __webpack_require__(55);
/* harmony export (immutable) */ __webpack_exports__["a"] = _dispatchable;



/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer [xf] to return a new transformer (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */
function _dispatchable(methodNames, xf, fn) {
  return function () {
    if (arguments.length === 0) {
      return fn();
    }
    var args = Array.prototype.slice.call(arguments, 0);
    var obj = args.pop();
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isArray__["a" /* default */])(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, args);
        }
        idx += 1;
      }
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isTransformer__["a" /* default */])(obj)) {
        var transducer = xf.apply(null, args);
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  init: function () {
    return this.xf['@@transducer/init']();
  },
  result: function (result) {
    return this.xf['@@transducer/result'](result);
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_curryN__ = __webpack_require__(31);





/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      var sumArgs = (...args) => R.sum(args);
 *
 *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
var curryN = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_curry2__["a" /* default */])(function curryN(length, fn) {
  if (length === 1) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry1__["a" /* default */])(fn);
  }
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(length, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__internal_curryN__["a" /* default */])(length, [], fn));
});
/* harmony default export */ __webpack_exports__["a"] = (curryN);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _has;
function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_map__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_reduce__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_xmap__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__curryN__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__keys__ = __webpack_require__(13);








/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex
 * @example
 *
 *      var double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */
var map = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['fantasy-land/map', 'map'], __WEBPACK_IMPORTED_MODULE_4__internal_xmap__["a" /* default */], function map(fn, functor) {
  switch (Object.prototype.toString.call(functor)) {
    case '[object Function]':
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__curryN__["a" /* default */])(functor.length, function () {
        return fn.call(this, functor.apply(this, arguments));
      });
    case '[object Object]':
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__internal_reduce__["a" /* default */])(function (acc, key) {
        acc[key] = fn(functor[key]);
        return acc;
      }, {}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__keys__["a" /* default */])(functor));
    default:
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_map__["a" /* default */])(fn, functor);
  }
}));
/* harmony default export */ __webpack_exports__["a"] = (map);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_equals__ = __webpack_require__(186);



/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      var a = {}; a.v = a;
 *      var b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */
var equals = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function equals(a, b) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_equals__["a" /* default */])(a, b, [], []);
});
/* harmony default export */ __webpack_exports__["a"] = (equals);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArrayLike__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xwrap__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bind__ = __webpack_require__(68);
/* harmony export (immutable) */ __webpack_exports__["a"] = _reduce;




function _arrayReduce(xf, acc, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    acc = xf['@@transducer/step'](acc, list[idx]);
    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }
    idx += 1;
  }
  return xf['@@transducer/result'](acc);
}

function _iterableReduce(xf, acc, iter) {
  var step = iter.next();
  while (!step.done) {
    acc = xf['@@transducer/step'](acc, step.value);
    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }
    step = iter.next();
  }
  return xf['@@transducer/result'](acc);
}

function _methodReduce(xf, acc, obj, methodName) {
  return xf['@@transducer/result'](obj[methodName](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__bind__["a" /* default */])(xf['@@transducer/step'], xf), acc));
}

var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';

function _reduce(fn, acc, list) {
  if (typeof fn === 'function') {
    fn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__xwrap__["a" /* default */])(fn);
  }
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isArrayLike__["a" /* default */])(list)) {
    return _arrayReduce(fn, acc, list);
  }
  if (typeof list['fantasy-land/reduce'] === 'function') {
    return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
  }
  if (list[symIterator] != null) {
    return _iterableReduce(fn, acc, list[symIterator]());
  }
  if (typeof list.next === 'function') {
    return _iterableReduce(fn, acc, list);
  }
  if (typeof list.reduce === 'function') {
    return _methodReduce(fn, acc, list, 'reduce');
  }

  throw new TypeError('reduce: list must be array or iterable');
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _concat;
/**
 * Private `concat` function to merge two array-like objects.
 *
 * @private
 * @param {Array|Arguments} [set1=[]] An array-like object.
 * @param {Array|Arguments} [set2=[]] An array-like object.
 * @return {Array} A new, merged array.
 * @example
 *
 *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 */
function _concat(set1, set2) {
  set1 = set1 || [];
  set2 = set2 || [];
  var idx;
  var len1 = set1.length;
  var len2 = set2.length;
  var result = [];

  idx = 0;
  while (idx < len1) {
    result[result.length] = set1[idx];
    idx += 1;
  }
  idx = 0;
  while (idx < len2) {
    result[result.length] = set2[idx];
    idx += 1;
  }
  return result;
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry3__ = __webpack_require__(2);



/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */
var slice = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry3__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__["a" /* default */])('slice', function slice(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));
/* harmony default export */ __webpack_exports__["a"] = (slice);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _arity;
function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };
    case 1:
      return function (a0) {
        return fn.apply(this, arguments);
      };
    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments);
      };
    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments);
      };
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };
    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_isArguments__ = __webpack_require__(85);




// cover IE < 9 keys issues
var hasEnumBug = ! /*#__PURE__*/{ toString: null }.propertyIsEnumerable('toString');
var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
// Safari bug
var hasArgsEnumBug = /*#__PURE__*/function () {
  'use strict';

  return arguments.propertyIsEnumerable('length');
}();

var contains = function contains(list, item) {
  var idx = 0;
  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }
    idx += 1;
  }
  return false;
};

/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
var _keys = typeof Object.keys === 'function' && !hasArgsEnumBug ? function keys(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
} : function keys(obj) {
  if (Object(obj) !== obj) {
    return [];
  }
  var prop, nIdx;
  var ks = [];
  var checkArgsLength = hasArgsEnumBug && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_isArguments__["a" /* default */])(obj);
  for (prop in obj) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(prop, obj) && (!checkArgsLength || prop !== 'length')) {
      ks[ks.length] = prop;
    }
  }
  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;
    while (nIdx >= 0) {
      prop = nonEnumerableProps[nIdx];
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(prop, obj) && !contains(ks, prop)) {
        ks[ks.length] = prop;
      }
      nIdx -= 1;
    }
  }
  return ks;
};
var keys = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(_keys);
/* harmony default export */ __webpack_exports__["a"] = (keys);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_reduce__ = __webpack_require__(9);



/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *      //          -               -10
 *      //         / \              / \
 *      //        -   4           -6   4
 *      //       / \              / \
 *      //      -   3   ==>     -3   3
 *      //     / \              / \
 *      //    -   2           -1   2
 *      //   / \              / \
 *      //  0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */
var reduce = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__internal_reduce__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (reduce);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
/* harmony default export */ __webpack_exports__["a"] = (Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _reduced;
function _reduced(x) {
  return x && x['@@transducer/reduced'] ? x : {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);


/**
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 *
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> (* -> a)
 * @param {*} val The value to wrap in a function
 * @return {Function} A Function :: * -> val.
 * @example
 *
 *      var t = R.always('Tee');
 *      t(); //=> 'Tee'
 */
var always = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function always(val) {
  return function () {
    return val;
  };
});
/* harmony default export */ __webpack_exports__["a"] = (always);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__indexOf__ = __webpack_require__(84);
/* harmony export (immutable) */ __webpack_exports__["a"] = _contains;


function _contains(a, list) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__indexOf__["a" /* default */])(list, a, 0) >= 0;
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns the larger of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.maxBy, R.min
 * @example
 *
 *      R.max(789, 123); //=> 789
 *      R.max('a', 'b'); //=> 'b'
 */
var max = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function max(a, b) {
  return b > a ? b : a;
});
/* harmony default export */ __webpack_exports__["a"] = (max);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> a | Undefined
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 */
var path = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function path(paths, obj) {
  var val = obj;
  var idx = 0;
  while (idx < paths.length) {
    if (val == null) {
      return;
    }
    val = val[paths[idx]];
    idx += 1;
  }
  return val;
});
/* harmony default export */ __webpack_exports__["a"] = (path);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArray__ = __webpack_require__(15);
/* harmony export (immutable) */ __webpack_exports__["a"] = _checkForMethod;


/**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the ramda
 * implementation.
 *
 * @private
 * @param {Function} fn ramda implemtation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */
function _checkForMethod(methodname, fn) {
  return function () {
    var length = arguments.length;
    if (length === 0) {
      return fn();
    }
    var obj = arguments[length - 1];
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isArray__["a" /* default */])(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
  };
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isString;
function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isFunction__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curryN__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toString__ = __webpack_require__(26);





/**
 * Turns a named method with a specified arity into a function that can be
 * called directly supplied with arguments and a target object.
 *
 * The returned function is curried and accepts `arity + 1` parameters where
 * the final parameter is the target object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
 * @param {Number} arity Number of arguments the returned function should take
 *        before the target object.
 * @param {String} method Name of the method to call.
 * @return {Function} A new curried function.
 * @see R.construct
 * @example
 *
 *      var sliceFrom = R.invoker(1, 'slice');
 *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
 *      var sliceFrom6 = R.invoker(2, 'slice')(6);
 *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
 * @symb R.invoker(0, 'method')(o) = o['method']()
 * @symb R.invoker(1, 'method')(a, o) = o['method'](a)
 * @symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)
 */
var invoker = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function invoker(arity, method) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__curryN__["a" /* default */])(arity + 1, function () {
    var target = arguments[arity];
    if (target != null && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_isFunction__["a" /* default */])(target[method])) {
      return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
    }
    throw new TypeError(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__toString__["a" /* default */])(target) + ' does not have a method named "' + method + '"');
  });
});
/* harmony default export */ __webpack_exports__["a"] = (invoker);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isString__ = __webpack_require__(22);



/**
 * Returns the nth element of the given list or string. If n is negative the
 * element at index length + n is returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> a | Undefined
 * @sig Number -> String -> String
 * @param {Number} offset
 * @param {*} list
 * @return {*}
 * @example
 *
 *      var list = ['foo', 'bar', 'baz', 'quux'];
 *      R.nth(1, list); //=> 'bar'
 *      R.nth(-1, list); //=> 'quux'
 *      R.nth(-99, list); //=> undefined
 *
 *      R.nth(2, 'abc'); //=> 'c'
 *      R.nth(3, 'abc'); //=> ''
 * @symb R.nth(-1, [a, b, c]) = c
 * @symb R.nth(0, [a, b, c]) = a
 * @symb R.nth(1, [a, b, c]) = b
 */
var nth = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function nth(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_isString__["a" /* default */])(list) ? list.charAt(idx) : list[idx];
});
/* harmony default export */ __webpack_exports__["a"] = (nth);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prop__ = __webpack_require__(57);




/**
 * Returns a new list by plucking the same named property off all objects in
 * the list supplied.
 *
 * `pluck` will work on
 * any [functor](https://github.com/fantasyland/fantasy-land#functor) in
 * addition to arrays, as it is equivalent to `R.map(R.prop(k), f)`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => k -> f {k: v} -> f v
 * @param {Number|String} key The key name to pluck off of each object.
 * @param {Array} f The array or functor to consider.
 * @return {Array} The list of values for the given key.
 * @see R.props
 * @example
 *
 *      R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
 *      R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
 *      R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
 * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
 * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
 */
var pluck = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function pluck(p, list) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__map__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__prop__["a" /* default */])(p), list);
});
/* harmony default export */ __webpack_exports__["a"] = (pluck);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_toString__ = __webpack_require__(198);



/**
 * Returns the string representation of the given value. `eval`'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * `toString` methods do not satisfy this requirement.
 *
 * If the given value is an `[object Object]` with a `toString` method other
 * than `Object.prototype.toString`, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable `toString` method. For example:
 *
 *     function Point(x, y) {
 *       this.x = x;
 *       this.y = y;
 *     }
 *
 *     Point.prototype.toString = function() {
 *       return 'new Point(' + this.x + ', ' + this.y + ')';
 *     };
 *
 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category String
 * @sig * -> String
 * @param {*} val
 * @return {String}
 * @example
 *
 *      R.toString(42); //=> '42'
 *      R.toString('abc'); //=> '"abc"'
 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
 */
var toString = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function toString(val) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_toString__["a" /* default */])(val, []);
});
/* harmony default export */ __webpack_exports__["a"] = (toString);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Adds two values.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @see R.subtract
 * @example
 *
 *      R.add(2, 3);       //=>  5
 *      R.add(7)(10);      //=> 17
 */
var add = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function add(a, b) {
  return Number(a) + Number(b);
});
/* harmony default export */ __webpack_exports__["a"] = (add);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig String -> a -> {k: v} -> {k: v}
 * @param {String} prop The property name to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @see R.dissoc
 * @example
 *
 *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 */
var assoc = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function assoc(prop, val, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop] = val;
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (assoc);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(5);



/**
 * Returns a new function much like the supplied one, except that the first two
 * arguments' order is reversed.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((a, b, c, ...) -> z) -> (b -> a -> c -> ... -> z)
 * @param {Function} fn The function to invoke with its first two parameters reversed.
 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
 * @example
 *
 *      var mergeThree = (a, b, c) => [].concat(a, b, c);
 *
 *      mergeThree(1, 2, 3); //=> [1, 2, 3]
 *
 *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
 * @symb R.flip(f)(a, b, c) = f(b, a, c)
 */
var flip = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function flip(fn) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(fn.length, function (a, b) {
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = b;
    args[1] = a;
    return fn.apply(this, args);
  });
});
/* harmony default export */ __webpack_exports__["a"] = (flip);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _containsWith;
function _containsWith(pred, x, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arity__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isPlaceholder__ = __webpack_require__(34);
/* harmony export (immutable) */ __webpack_exports__["a"] = _curryN;



/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curryN(length, received, fn) {
  return function () {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length && (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(result)) {
        left -= 1;
      }
      combinedIdx += 1;
    }
    return left <= 0 ? fn.apply(this, combined) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__arity__["a" /* default */])(left, _curryN(length, combined, fn));
  };
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArray__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isString__ = __webpack_require__(22);




/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */
var _isArrayLike = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function isArrayLike(x) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isArray__["a" /* default */])(x)) {
    return true;
  }
  if (!x) {
    return false;
  }
  if (typeof x !== 'object') {
    return false;
  }
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isString__["a" /* default */])(x)) {
    return false;
  }
  if (x.nodeType === 1) {
    return !!x.length;
  }
  if (x.length === 0) {
    return true;
  }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});
/* harmony default export */ __webpack_exports__["a"] = (_isArrayLike);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isFunction;
function _isFunction(x) {
  return Object.prototype.toString.call(x) === '[object Function]';
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isPlaceholder;
function _isPlaceholder(a) {
       return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _map;
function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);
  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }
  return result;
}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map__ = __webpack_require__(7);



/**
 * Returns a lens for the given getter and setter functions. The getter "gets"
 * the value of the focus; the setter "sets" the value of the focus. The setter
 * should not mutate the data structure.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig (s -> a) -> ((a, s) -> s) -> Lens s a
 * @param {Function} getter
 * @param {Function} setter
 * @return {Lens}
 * @see R.view, R.set, R.over, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lens(R.prop('x'), R.assoc('x'));
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */
var lens = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function lens(getter, setter) {
  return function (toFunctorFn) {
    return function (target) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__map__["a" /* default */])(function (focus) {
        return setter(focus, target);
      }, toFunctorFn(getter(target)));
    };
  };
});
/* harmony default export */ __webpack_exports__["a"] = (lens);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__liftN__ = __webpack_require__(96);



/**
 * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other
 * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.liftN
 * @example
 *
 *      var madd3 = R.lift((a, b, c) => a + b + c);
 *
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 *
 *      var madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
 *
 *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
 */
var lift = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function lift(fn) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__liftN__["a" /* default */])(fn.length, fn);
});
/* harmony default export */ __webpack_exports__["a"] = (lift);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isObject__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mergeWithKey__ = __webpack_require__(56);




/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to the key and associated values
 *   using the resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWithKey, R.mergeDeep, R.mergeDeepWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeDeepWithKey(concatValues,
 *                         { a: true, c: { thing: 'foo', values: [10, 20] }},
 *                         { b: true, c: { thing: 'bar', values: [15, 35] }});
 *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
 */
var mergeDeepWithKey = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function mergeDeepWithKey(fn, lObj, rObj) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__mergeWithKey__["a" /* default */])(function (k, lVal, rVal) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_isObject__["a" /* default */])(lVal) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_isObject__["a" /* default */])(rVal)) {
      return mergeDeepWithKey(fn, lVal, rVal);
    } else {
      return fn(k, lVal, rVal);
    }
  }, lObj, rObj);
});
/* harmony default export */ __webpack_exports__["a"] = (mergeDeepWithKey);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly `n` parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} n The desired arity of the new function.
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity `n`.
 * @see R.binary, R.unary
 * @example
 *
 *      var takesTwoArgs = (a, b) => [a, b];
 *
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = R.nAry(1, takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only `n` arguments are passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.nAry(0, f)(a, b) = f()
 * @symb R.nAry(1, f)(a, b) = f(a)
 * @symb R.nAry(2, f)(a, b) = f(a, b)
 */
var nAry = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function nAry(n, fn) {
  switch (n) {
    case 0:
      return function () {
        return fn.call(this);
      };
    case 1:
      return function (a0) {
        return fn.call(this, a0);
      };
    case 2:
      return function (a0, a1) {
        return fn.call(this, a0, a1);
      };
    case 3:
      return function (a0, a1, a2) {
        return fn.call(this, a0, a1, a2);
      };
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.call(this, a0, a1, a2, a3);
      };
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.call(this, a0, a1, a2, a3, a4);
      };
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.call(this, a0, a1, a2, a3, a4, a5);
      };
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
      };
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
      };
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
      };
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      };
    default:
      throw new Error('First argument to nAry must be a non-negative integer no greater than ten');
  }
});
/* harmony default export */ __webpack_exports__["a"] = (nAry);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curryN__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_has__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_reduce__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_xreduceBy__ = __webpack_require__(212);






/**
 * Groups the elements of the list according to the result of calling
 * the String-returning function `keyFn` on each element and reduces the elements
 * of each group to a single value via the reducer function `valueFn`.
 *
 * This function is basically a more general [`groupBy`](#groupBy) function.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category List
 * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}
 * @param {Function} valueFn The function that reduces the elements of each group to a single
 *        value. Receives two values, accumulator for a particular group and the current element.
 * @param {*} acc The (initial) accumulator value for each group.
 * @param {Function} keyFn The function that maps the list's element into a key.
 * @param {Array} list The array to group.
 * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
 *         `valueFn` for elements which produced that key when passed to `keyFn`.
 * @see R.groupBy, R.reduce
 * @example
 *
 *      var reduceToNamesBy = R.reduceBy((acc, student) => acc.concat(student.name), []);
 *      var namesByGrade = reduceToNamesBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Lucy', score: 92},
 *                      {name: 'Drew', score: 85},
 *                      // ...
 *                      {name: 'Bart', score: 62}];
 *      namesByGrade(students);
 *      // {
 *      //   'A': ['Lucy'],
 *      //   'B': ['Drew']
 *      //   // ...,
 *      //   'F': ['Bart']
 *      // }
 */
var reduceBy = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curryN__["a" /* default */])(4, [], /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_4__internal_xreduceBy__["a" /* default */], function reduceBy(valueFn, valueAcc, keyFn, list) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__internal_reduce__["a" /* default */])(function (acc, elt) {
    var key = keyFn(elt);
    acc[key] = valueFn(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_has__["a" /* default */])(key, acc) ? acc[key] : valueAcc, elt);
    return acc;
  }, {}, list);
}));
/* harmony default export */ __webpack_exports__["a"] = (reduceBy);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_complement__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(48);




/**
 * The complement of [`filter`](#filter).
 *
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      var isOdd = (n) => n % 2 === 1;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
var reject = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function reject(pred, filterable) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__filter__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_complement__["a" /* default */])(pred), filterable);
});
/* harmony default export */ __webpack_exports__["a"] = (reject);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isString__ = __webpack_require__(22);



/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      R.reverse([1, 2]);     //=> [2, 1]
 *      R.reverse([1]);        //=> [1]
 *      R.reverse([]);         //=> []
 *
 *      R.reverse('abc');      //=> 'cba'
 *      R.reverse('ab');       //=> 'ba'
 *      R.reverse('a');        //=> 'a'
 *      R.reverse('');         //=> ''
 */
var reverse = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function reverse(list) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_isString__["a" /* default */])(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse();
});
/* harmony default export */ __webpack_exports__["a"] = (reverse);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_reduce__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map__ = __webpack_require__(7);





/**
 * ap applies a list of functions to a list of values.
 *
 * Dispatches to the `ap` method of the second argument, if present. Also
 * treats curried functions as applicatives.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig [a -> b] -> [a] -> [b]
 * @sig Apply f => f (a -> b) -> f a -> f b
 * @sig (a -> b -> c) -> (a -> b) -> (a -> c)
 * @param {*} applyF
 * @param {*} applyX
 * @return {*}
 * @example
 *
 *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
 *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
 *
 *      // R.ap can also be used as S combinator
 *      // when only two functions are passed
 *      R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'
 * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]
 */
var ap = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function ap(applyF, applyX) {
  return typeof applyX['fantasy-land/ap'] === 'function' ? applyX['fantasy-land/ap'](applyF) : typeof applyF.ap === 'function' ? applyF.ap(applyX) : typeof applyF === 'function' ? function (x) {
    return applyF(x)(applyX(x));
  } :
  // else
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_reduce__["a" /* default */])(function (acc, f) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */])(acc, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__map__["a" /* default */])(f, applyX));
  }, [], applyF);
});
/* harmony default export */ __webpack_exports__["a"] = (ap);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_makeFlat__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_xchain__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map__ = __webpack_require__(7);






/**
 * `chain` maps a function over a list and concatenates the results. `chain`
 * is also known as `flatMap` in some libraries
 *
 * Dispatches to the `chain` method of the second argument, if present,
 * according to the [FantasyLand Chain spec](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain m => (a -> m b) -> m a -> m b
 * @param {Function} fn The function to map with
 * @param {Array} list The list to map over
 * @return {Array} The result of flat-mapping `list` with `fn`
 * @example
 *
 *      var duplicate = n => [n, n];
 *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
 *
 *      R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
 */
var chain = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['fantasy-land/chain', 'chain'], __WEBPACK_IMPORTED_MODULE_3__internal_xchain__["a" /* default */], function chain(fn, monad) {
  if (typeof monad === 'function') {
    return function (x) {
      return fn(monad(x))(x);
    };
  }
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_makeFlat__["a" /* default */])(false)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__map__["a" /* default */])(fn, monad));
}));
/* harmony default export */ __webpack_exports__["a"] = (chain);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reverse__ = __webpack_require__(42);
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;



/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipe
 * @example
 *
 *      var classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
 *      var yellGreeting = R.compose(R.toUpper, classyGreeting);
 *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
 *
 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
 */
function compose() {
  if (arguments.length === 0) {
    throw new Error('compose requires at least one argument');
  }
  return __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* default */].apply(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__reverse__["a" /* default */])(arguments));
}

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isArray__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_isFunction__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_isString__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toString__ = __webpack_require__(26);






/**
 * Returns the result of concatenating the given lists or strings.
 *
 * Note: `R.concat` expects both arguments to be of the same type,
 * unlike the native `Array.prototype.concat` method. It will throw
 * an error if you `concat` an Array with a non-Array value.
 *
 * Dispatches to the `concat` method of the first argument, if present.
 * Can also concatenate two members of a [fantasy-land
 * compatible semigroup](https://github.com/fantasyland/fantasy-land#semigroup).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @sig String -> String -> String
 * @param {Array|String} firstList The first list
 * @param {Array|String} secondList The second list
 * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of
 * `secondList`.
 *
 * @example
 *
 *      R.concat('ABC', 'DEF'); // 'ABCDEF'
 *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 *      R.concat([], []); //=> []
 */
var concat = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function concat(a, b) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_isArray__["a" /* default */])(a)) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_isArray__["a" /* default */])(b)) {
      return a.concat(b);
    }
    throw new TypeError(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__toString__["a" /* default */])(b) + ' is not an array');
  }
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__internal_isString__["a" /* default */])(a)) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__internal_isString__["a" /* default */])(b)) {
      return a + b;
    }
    throw new TypeError(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__toString__["a" /* default */])(b) + ' is not a string');
  }
  if (a != null && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_isFunction__["a" /* default */])(a['fantasy-land/concat'])) {
    return a['fantasy-land/concat'](b);
  }
  if (a != null && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_isFunction__["a" /* default */])(a.concat)) {
    return a.concat(b);
  }
  throw new TypeError(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__toString__["a" /* default */])(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
});
/* harmony default export */ __webpack_exports__["a"] = (concat);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(5);



/**
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one
 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curryN
 * @example
 *
 *      var addFourNumbers = (a, b, c, d) => a + b + c + d;
 *
 *      var curriedAddFourNumbers = R.curry(addFourNumbers);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
var curry = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function curry(fn) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(fn.length, fn);
});
/* harmony default export */ __webpack_exports__["a"] = (curry);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_filter__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_isObject__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_reduce__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__internal_xfilter__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__keys__ = __webpack_require__(13);








/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
var filter = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['filter'], __WEBPACK_IMPORTED_MODULE_5__internal_xfilter__["a" /* default */], function (pred, filterable) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__internal_isObject__["a" /* default */])(filterable) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__internal_reduce__["a" /* default */])(function (acc, key) {
    if (pred(filterable[key])) {
      acc[key] = filterable[key];
    }
    return acc;
  }, {}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__keys__["a" /* default */])(filterable)) :
  // else
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_filter__["a" /* default */])(pred, filterable);
}));
/* harmony default export */ __webpack_exports__["a"] = (filter);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_identity__ = __webpack_require__(52);



/**
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      R.identity(1); //=> 1
 *
 *      var obj = {};
 *      R.identity(obj) === obj; //=> true
 * @symb R.identity(a) = a
 */
var identity = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__internal_identity__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (identity);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objectAssign__ = __webpack_require__(191);


/* harmony default export */ __webpack_exports__["a"] = (typeof Object.assign === 'function' ? Object.assign : __WEBPACK_IMPORTED_MODULE_0__objectAssign__["a" /* default */]);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _filter;
function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];

  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }
    idx += 1;
  }
  return result;
}

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _identity;
function _identity(x) {
  return x;
}

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Determine if the passed argument is an integer.
 *
 * @private
 * @param {*} n
 * @category Type
 * @return {Boolean}
 */
/* harmony default export */ __webpack_exports__["a"] = (Number.isInteger || function _isInteger(n) {
  return n << 0 === n;
});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isObject;
function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
}

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isTransformer;
function _isTransformer(obj) {
  return typeof obj['@@transducer/step'] === 'function';
}

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(6);



/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the key
 * and the values associated with the key in each object, with the result being
 * used as the value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWithKey, R.merge, R.mergeWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeWithKey(concatValues,
 *                     { a: true, thing: 'foo', values: [10, 20] },
 *                     { b: true, thing: 'bar', values: [15, 35] });
 *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
 * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
 */
var mergeWithKey = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function mergeWithKey(fn, l, r) {
  var result = {};
  var k;

  for (k in l) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(k, l)) {
      result[k] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(k, r) ? fn(k, l[k], r[k]) : l[k];
    }
  }

  for (k in r) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(k, r) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(k, result)) {
      result[k] = r[k];
    }
  }

  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (mergeWithKey);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path__ = __webpack_require__(20);



/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig s -> {s: a} -> a | Undefined
 * @param {String} p The property name
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 */

var prop = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function prop(p, obj) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__path__["a" /* default */])([p], obj);
});
/* harmony default export */ __webpack_exports__["a"] = (prop);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slice__ = __webpack_require__(11);




/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */
var tail = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry1__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__["a" /* default */])('tail', /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__slice__["a" /* default */])(1, Infinity)));
/* harmony default export */ __webpack_exports__["a"] = (tail);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xtake__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slice__ = __webpack_require__(11);





/**
 * Returns the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `take` method).
 *
 * Dispatches to the `take` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*}
 * @see R.drop
 * @example
 *
 *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(3, 'ramda');               //=> 'ram'
 *
 *      var personnel = [
 *        'Dave Brubeck',
 *        'Paul Desmond',
 *        'Eugene Wright',
 *        'Joe Morello',
 *        'Gerry Mulligan',
 *        'Bob Bates',
 *        'Joe Dodge',
 *        'Ron Crotty'
 *      ];
 *
 *      var takeFive = R.take(5);
 *      takeFive(personnel);
 *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
 * @symb R.take(-1, [a, b]) = [a, b]
 * @symb R.take(0, [a, b]) = []
 * @symb R.take(1, [a, b]) = [a]
 * @symb R.take(2, [a, b]) = [a, b]
 */
var take = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['take'], __WEBPACK_IMPORTED_MODULE_2__internal_xtake__["a" /* default */], function take(n, xs) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__slice__["a" /* default */])(0, n < 0 ? Infinity : n, xs);
}));
/* harmony default export */ __webpack_exports__["a"] = (take);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);


/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 *      R.type(undefined); //=> "Undefined"
 */
var type = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function type(val) {
  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
});
/* harmony default export */ __webpack_exports__["a"] = (type);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__identity__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uniqBy__ = __webpack_require__(114);



/**
 * Returns a new list containing only one copy of each element in the original
 * list. [`R.equals`](#equals) is used to determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
 *      R.uniq([1, '1']);     //=> [1, '1']
 *      R.uniq([[42], [42]]); //=> [[42]]
 */
var uniq = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__uniqBy__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__identity__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (uniq);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adjust__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__always__ = __webpack_require__(17);




/**
 * Returns a new copy of the array with the element at the provided index
 * replaced with the given value.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} idx The index to update.
 * @param {*} x The value to exist at the given index of the returned array.
 * @param {Array|Arguments} list The source array-like object to be updated.
 * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`.
 * @see R.adjust
 * @example
 *
 *      R.update(1, 11, [0, 1, 2]);     //=> [0, 11, 2]
 *      R.update(1)(11)([0, 1, 2]);     //=> [0, 11, 2]
 * @symb R.update(-1, a, [b, c]) = [b, a]
 * @symb R.update(0, a, [b, c]) = [a, c]
 * @symb R.update(1, a, [b, c]) = [b, a]
 */
var update = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function update(idx, x, list) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__adjust__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__always__["a" /* default */])(x), idx, list);
});
/* harmony default export */ __webpack_exports__["a"] = (update);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry3__ = __webpack_require__(2);



/**
 * Applies a function to the value at the given index of an array, returning a
 * new copy of the array with the element at the given index replaced with the
 * result of the function application.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig (a -> a) -> Number -> [a] -> [a]
 * @param {Function} fn The function to apply.
 * @param {Number} idx The index.
 * @param {Array|Arguments} list An array-like object whose value
 *        at the supplied index will be replaced.
 * @return {Array} A copy of the supplied array-like object with
 *         the element at index `idx` replaced with the value
 *         returned by applying `fn` to the existing element.
 * @see R.update
 * @example
 *
 *      R.adjust(R.add(10), 1, [1, 2, 3]);     //=> [1, 12, 3]
 *      R.adjust(R.add(10))(1)([1, 2, 3]);     //=> [1, 12, 3]
 * @symb R.adjust(f, -1, [a, b]) = [a, f(b)]
 * @symb R.adjust(f, 0, [a, b]) = [f(a), b]
 */
var adjust = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry3__["a" /* default */])(function adjust(fn, idx, list) {
  if (idx >= list.length || idx < -list.length) {
    return list;
  }
  var start = idx < 0 ? list.length : 0;
  var _idx = start + idx;
  var _list = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */])(list);
  _list[_idx] = fn(list[_idx]);
  return _list;
});
/* harmony default export */ __webpack_exports__["a"] = (adjust);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns `true` if both arguments are `true`; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if it is falsy, otherwise the second argument.
 * @see R.both
 * @example
 *
 *      R.and(true, true); //=> true
 *      R.and(true, false); //=> false
 *      R.and(false, true); //=> false
 *      R.and(false, false); //=> false
 */
var and = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function and(a, b) {
  return a && b;
});
/* harmony default export */ __webpack_exports__["a"] = (and);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xany__ = __webpack_require__(88);




/**
 * Returns `true` if at least one of elements of the list match the predicate,
 * `false` otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
 *         otherwise.
 * @see R.all, R.none, R.transduce
 * @example
 *
 *      var lessThan0 = R.flip(R.lt)(0);
 *      var lessThan2 = R.flip(R.lt)(2);
 *      R.any(lessThan0)([1, 2]); //=> false
 *      R.any(lessThan2)([1, 2]); //=> true
 */
var any = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['any'], __WEBPACK_IMPORTED_MODULE_2__internal_xany__["a" /* default */], function any(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (fn(list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}));
/* harmony default export */ __webpack_exports__["a"] = (any);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Applies function `fn` to the argument list `args`. This is useful for
 * creating a fixed-arity function from a variadic function. `fn` should be a
 * bound function if context is significant.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> a) -> [*] -> a
 * @param {Function} fn The function which will be called with `args`
 * @param {Array} args The arguments to call `fn` with
 * @return {*} result The result, equivalent to `fn(...args)`
 * @see R.call, R.unapply
 * @example
 *
 *      var nums = [1, 2, 3, -99, 42, 6, 7];
 *      R.apply(Math.max, nums); //=> 42
 * @symb R.apply(f, [a, b, c]) = f(a, b, c)
 */
var apply = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function apply(fn, args) {
  return fn.apply(this, args);
});
/* harmony default export */ __webpack_exports__["a"] = (apply);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_isArray__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_isInteger__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assoc__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isNil__ = __webpack_require__(92);







/**
 * Makes a shallow clone of an object, setting or overriding the nodes required
 * to create the given path, and placing the specific value at the tail end of
 * that path. Note that this copies and flattens prototype properties onto the
 * new object as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> {a}
 * @param {Array} path the path to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except along the specified path.
 * @see R.dissocPath
 * @example
 *
 *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
 *
 *      // Any missing or non-object keys in path will be overridden
 *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
 */
var assocPath = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function assocPath(path, val, obj) {
  if (path.length === 0) {
    return val;
  }
  var idx = path[0];
  if (path.length > 1) {
    var nextObj = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__isNil__["a" /* default */])(obj) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(idx, obj) ? obj[idx] : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__internal_isInteger__["a" /* default */])(path[1]) ? [] : {};
    val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);
  }
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__internal_isInteger__["a" /* default */])(idx) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_isArray__["a" /* default */])(obj)) {
    var arr = [].concat(obj);
    arr[idx] = val;
    return arr;
  } else {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__assoc__["a" /* default */])(idx, val, obj);
  }
});
/* harmony default export */ __webpack_exports__["a"] = (assocPath);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      var log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */
var bind = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function bind(fn, thisObj) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(fn.length, function () {
    return fn.apply(thisObj, arguments);
  });
});
/* harmony default export */ __webpack_exports__["a"] = (bind);

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chain__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__compose__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(7);
/* harmony export (immutable) */ __webpack_exports__["a"] = composeK;




/**
 * Returns the right-to-left Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.composeK(h, g, f)` is equivalent to `R.compose(R.chain(h), R.chain(g), f)`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((y -> m z), (x -> m y), ..., (a -> m b)) -> (a -> m z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipeK
 * @example
 *
 *       //  get :: String -> Object -> Maybe *
 *       var get = R.curry((propName, obj) => Maybe(obj[propName]))
 *
 *       //  getStateCode :: Maybe String -> Maybe String
 *       var getStateCode = R.composeK(
 *         R.compose(Maybe.of, R.toUpper),
 *         get('state'),
 *         get('address'),
 *         get('user'),
 *       );
 *       getStateCode({"user":{"address":{"state":"ny"}}}); //=> Maybe.Just("NY")
 *       getStateCode({}); //=> Maybe.Nothing()
 * @symb R.composeK(f, g, h)(a) = R.chain(f, R.chain(g, h(a)))
 */
function composeK() {
  if (arguments.length === 0) {
    throw new Error('composeK requires at least one argument');
  }
  var init = Array.prototype.slice.call(arguments);
  var last = init.pop();
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__compose__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__compose__["a" /* default */].apply(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__chain__["a" /* default */], init)), last);
}

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curry__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nAry__ = __webpack_require__(39);




/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type. The arity of the function
 * returned is specified to allow using variadic constructor functions.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Function
 * @sig Number -> (* -> {*}) -> (* -> {*})
 * @param {Number} n The arity of the constructor function.
 * @param {Function} Fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @example
 *
 *      // Variadic Constructor function
 *      function Salad() {
 *        this.ingredients = arguments;
 *      }
 *
 *      Salad.prototype.recipe = function() {
 *        var instructions = R.map(ingredient => 'Add a dollop of ' + ingredient, this.ingredients);
 *        return R.join('\n', instructions);
 *      };
 *
 *      var ThreeLayerSalad = R.constructN(3, Salad);
 *
 *      // Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
 *      var salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup');
 *
 *      console.log(salad.recipe());
 *      // Add a dollop of Mayonnaise
 *      // Add a dollop of Potato Chips
 *      // Add a dollop of Ketchup
 */
var constructN = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function constructN(n, Fn) {
  if (n > 10) {
    throw new Error('Constructor with greater than ten arguments');
  }
  if (n === 0) {
    return function () {
      return new Fn();
    };
  }
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__curry__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__nAry__["a" /* default */])(n, function ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    switch (arguments.length) {
      case 1:
        return new Fn($0);
      case 2:
        return new Fn($0, $1);
      case 3:
        return new Fn($0, $1, $2);
      case 4:
        return new Fn($0, $1, $2, $3);
      case 5:
        return new Fn($0, $1, $2, $3, $4);
      case 6:
        return new Fn($0, $1, $2, $3, $4, $5);
      case 7:
        return new Fn($0, $1, $2, $3, $4, $5, $6);
      case 8:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
      case 9:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
      case 10:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
    }
  }));
});
/* harmony default export */ __webpack_exports__["a"] = (constructN);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_map__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curryN__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__max__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pluck__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reduce__ = __webpack_require__(14);







/**
 * Accepts a converging function and a list of branching functions and returns
 * a new function. When invoked, this new function is applied to some
 * arguments, each branching function is applied to those same arguments. The
 * results of each branching function are passed as arguments to the converging
 * function to produce the return value.
 *
 * @func
 * @memberOf R
 * @since v0.4.2
 * @category Function
 * @sig ((x1, x2, ...) -> z) -> [((a, b, ...) -> x1), ((a, b, ...) -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} after A function. `after` will be invoked with the return values of
 *        `fn1` and `fn2` as its arguments.
 * @param {Array} functions A list of functions.
 * @return {Function} A new function.
 * @see R.useWith
 * @example
 *
 *      var average = R.converge(R.divide, [R.sum, R.length])
 *      average([1, 2, 3, 4, 5, 6, 7]) //=> 4
 *
 *      var strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
 *      strangeConcat("Yodel") //=> "YODELyodel"
 *
 * @symb R.converge(f, [g, h])(a, b) = f(g(a, b), h(a, b))
 */
var converge = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function converge(after, fns) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__curryN__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__max__["a" /* default */], 0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__pluck__["a" /* default */])('length', fns)), function () {
    var args = arguments;
    var context = this;
    return after.apply(context, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_map__["a" /* default */])(function (fn) {
      return fn.apply(context, args);
    }, fns));
  });
});
/* harmony default export */ __webpack_exports__["a"] = (converge);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`;
 * otherwise the first argument is returned.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {a} default The default value.
 * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 * @example
 *
 *      var defaultTo42 = R.defaultTo(42);
 *
 *      defaultTo42(null);  //=> 42
 *      defaultTo42(undefined);  //=> 42
 *      defaultTo42('Ramda');  //=> 'Ramda'
 *      // parseInt('string') results in NaN
 *      defaultTo42(parseInt('string')); //=> 42
 */
var defaultTo = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function defaultTo(d, v) {
  return v == null || v !== v ? d : v;
});
/* harmony default export */ __webpack_exports__["a"] = (defaultTo);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_contains__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Objects and Arrays are compared in terms of
 * value equality, not reference equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.differenceWith, R.symmetricDifference, R.symmetricDifferenceWith, R.without
 * @example
 *
 *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
 *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
 *      R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]
 */
var difference = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function difference(first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_contains__["a" /* default */])(first[idx], second) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_contains__["a" /* default */])(first[idx], out)) {
      out[out.length] = first[idx];
    }
    idx += 1;
  }
  return out;
});
/* harmony default export */ __webpack_exports__["a"] = (difference);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_containsWith__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry3__ = __webpack_require__(2);



/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Duplication is determined according to the
 * value returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.difference, R.symmetricDifference, R.symmetricDifferenceWith
 * @example
 *
 *      var cmp = (x, y) => x.a === y.a;
 *      var l1 = [{a: 1}, {a: 2}, {a: 3}];
 *      var l2 = [{a: 3}, {a: 4}];
 *      R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
 */
var differenceWith = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry3__["a" /* default */])(function differenceWith(pred, first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_containsWith__["a" /* default */])(pred, first[idx], second) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_containsWith__["a" /* default */])(pred, first[idx], out)) {
      out.push(first[idx]);
    }
    idx += 1;
  }
  return out;
});
/* harmony default export */ __webpack_exports__["a"] = (differenceWith);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns a new object that does not contain a `prop` property.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Object
 * @sig String -> {k: v} -> {k: v}
 * @param {String} prop The name of the property to dissociate
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original but without the specified property
 * @see R.assoc
 * @example
 *
 *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
 */
var dissoc = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function dissoc(prop, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  delete result[prop];
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (dissoc);

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xdrop__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slice__ = __webpack_require__(11);





/**
 * Returns all but the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `drop` method).
 *
 * Dispatches to the `drop` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*} A copy of list without the first `n` elements
 * @see R.take, R.transduce, R.dropLast, R.dropWhile
 * @example
 *
 *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(3, 'ramda');               //=> 'da'
 */
var drop = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['drop'], __WEBPACK_IMPORTED_MODULE_2__internal_xdrop__["a" /* default */], function drop(n, xs) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__slice__["a" /* default */])(Math.max(0, n), Infinity, xs);
}));
/* harmony default export */ __webpack_exports__["a"] = (drop);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xdropRepeatsWith__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__last__ = __webpack_require__(94);





/**
 * Returns a new list without any consecutively repeating elements. Equality is
 * determined by applying the supplied predicate to each pair of consecutive elements. The
 * first element in a series of equal elements will be preserved.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig ((a, a) -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *      var l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
 *      R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]
 */
var dropRepeatsWith = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_2__internal_xdropRepeatsWith__["a" /* default */], function dropRepeatsWith(pred, list) {
  var result = [];
  var idx = 1;
  var len = list.length;
  if (len !== 0) {
    result[0] = list[0];
    while (idx < len) {
      if (!pred(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__last__["a" /* default */])(result), list[idx])) {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
  }
  return result;
}));
/* harmony default export */ __webpack_exports__["a"] = (dropRepeatsWith);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isArguments__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_isArray__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_isObject__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_isString__ = __webpack_require__(22);






/**
 * Returns the empty value of its argument's type. Ramda defines the empty
 * value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other
 * types are supported if they define `<Type>.empty`,
 * `<Type>.prototype.empty` or implement the
 * [FantasyLand Monoid spec](https://github.com/fantasyland/fantasy-land#monoid).
 *
 * Dispatches to the `empty` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> a
 * @param {*} x
 * @return {*}
 * @example
 *
 *      R.empty(Just(42));      //=> Nothing()
 *      R.empty([1, 2, 3]);     //=> []
 *      R.empty('unicorns');    //=> ''
 *      R.empty({x: 1, y: 2});  //=> {}
 */
var empty = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function empty(x) {
  return x != null && typeof x['fantasy-land/empty'] === 'function' ? x['fantasy-land/empty']() : x != null && x.constructor != null && typeof x.constructor['fantasy-land/empty'] === 'function' ? x.constructor['fantasy-land/empty']() : x != null && typeof x.empty === 'function' ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === 'function' ? x.constructor.empty() : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_isArray__["a" /* default */])(x) ? [] : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__internal_isString__["a" /* default */])(x) ? '' : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__internal_isObject__["a" /* default */])(x) ? {} : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_isArguments__["a" /* default */])(x) ? function () {
    return arguments;
  }() :
  // else
  void 0;
});
/* harmony default export */ __webpack_exports__["a"] = (empty);

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns true if its arguments are identical, false otherwise. Values are
 * identical if they reference the same memory. `NaN` is identical to `NaN`;
 * `0` and `-0` are not identical.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      var o = {};
 *      R.identical(o, o); //=> true
 *      R.identical(1, 1); //=> true
 *      R.identical(1, '1'); //=> false
 *      R.identical([], []); //=> false
 *      R.identical(0, -0); //=> false
 *      R.identical(NaN, NaN); //=> true
 */
var identical = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function identical(a, b) {
  // SameValue algorithm
  if (a === b) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
});
/* harmony default export */ __webpack_exports__["a"] = (identical);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cloneRegExp__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type__ = __webpack_require__(60);
/* harmony export (immutable) */ __webpack_exports__["a"] = _clone;



/**
 * Copies an object.
 *
 * @private
 * @param {*} value The value to be copied
 * @param {Array} refFrom Array containing the source references
 * @param {Array} refTo Array containing the copied source references
 * @param {Boolean} deep Whether or not to perform deep cloning.
 * @return {*} The copied value.
 */
function _clone(value, refFrom, refTo, deep) {
  var copy = function copy(copiedValue) {
    var len = refFrom.length;
    var idx = 0;
    while (idx < len) {
      if (value === refFrom[idx]) {
        return refTo[idx];
      }
      idx += 1;
    }
    refFrom[idx + 1] = value;
    refTo[idx + 1] = copiedValue;
    for (var key in value) {
      copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
    }
    return copiedValue;
  };
  switch (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__type__["a" /* default */])(value)) {
    case 'Object':
      return copy({});
    case 'Array':
      return copy([]);
    case 'Date':
      return new Date(value.valueOf());
    case 'RegExp':
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cloneRegExp__["a" /* default */])(value);
    default:
      return value;
  }
}

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _cloneRegExp;
function _cloneRegExp(pattern) {
                                  return new RegExp(pattern.source, (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '') + (pattern.sticky ? 'y' : '') + (pattern.unicode ? 'u' : ''));
}

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _complement;
function _complement(f) {
  return function () {
    return !f.apply(this, arguments);
  };
}

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arity__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curry2__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = _createPartialApplicator;



function _createPartialApplicator(concat) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function (fn, args) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__arity__["a" /* default */])(Math.max(0, fn.length - args.length), function () {
      return fn.apply(this, concat(args, arguments));
    });
  });
}

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__equals__ = __webpack_require__(8);
/* harmony export (immutable) */ __webpack_exports__["a"] = _indexOf;


function _indexOf(list, a, idx) {
  var inf, item;
  // Array.prototype.indexOf doesn't exist below IE9
  if (typeof list.indexOf === 'function') {
    switch (typeof a) {
      case 'number':
        if (a === 0) {
          // manually crawl the list to distinguish between +0 and -0
          inf = 1 / a;
          while (idx < list.length) {
            item = list[idx];
            if (item === 0 && 1 / item === inf) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        } else if (a !== a) {
          // NaN
          while (idx < list.length) {
            item = list[idx];
            if (typeof item === 'number' && item !== item) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        }
        // non-zero numbers can utilise Set
        return list.indexOf(a, idx);

      // all these types can utilise Set
      case 'string':
      case 'boolean':
      case 'function':
      case 'undefined':
        return list.indexOf(a, idx);

      case 'object':
        if (a === null) {
          // null can utilise Set
          return list.indexOf(a, idx);
        }
    }
  }
  // anything else not covered above, defer to R.equals
  while (idx < list.length) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__equals__["a" /* default */])(list[idx], a)) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__has__ = __webpack_require__(6);


var toString = Object.prototype.toString;
var _isArguments = function () {
  return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
    return toString.call(x) === '[object Arguments]';
  } : function _isArguments(x) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__has__["a" /* default */])('callee', x);
  };
};

/* harmony default export */ __webpack_exports__["a"] = (_isArguments);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isNumber;
function _isNumber(x) {
  return Object.prototype.toString.call(x) === '[object Number]';
}

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArrayLike__ = __webpack_require__(32);
/* harmony export (immutable) */ __webpack_exports__["a"] = _makeFlat;


/**
 * `_makeFlat` is a helper function that returns a one-level or fully recursive
 * function based on the flag passed in.
 *
 * @private
 */
function _makeFlat(recursive) {
  return function flatt(list) {
    var value, jlen, j;
    var result = [];
    var idx = 0;
    var ilen = list.length;

    while (idx < ilen) {
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isArrayLike__["a" /* default */])(list[idx])) {
        value = recursive ? flatt(list[idx]) : list[idx];
        j = 0;
        jlen = value.length;
        while (j < jlen) {
          result[result.length] = value[j];
          j += 1;
        }
      } else {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
    return result;
  };
}

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduced__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(4);




var XAny = /*#__PURE__*/function () {
  function XAny(f, xf) {
    this.xf = xf;
    this.f = f;
    this.any = false;
  }
  XAny.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XAny.prototype['@@transducer/result'] = function (result) {
    if (!this.any) {
      result = this.xf['@@transducer/step'](result, false);
    }
    return this.xf['@@transducer/result'](result);
  };
  XAny.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.any = true;
      result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__reduced__["a" /* default */])(this.xf['@@transducer/step'](result, true));
    }
    return result;
  };

  return XAny;
}();

var _xany = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xany(f, xf) {
  return new XAny(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xany);

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(4);



var XDropRepeatsWith = /*#__PURE__*/function () {
  function XDropRepeatsWith(pred, xf) {
    this.xf = xf;
    this.pred = pred;
    this.lastValue = undefined;
    this.seenFirstValue = false;
  }

  XDropRepeatsWith.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XDropRepeatsWith.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].result;
  XDropRepeatsWith.prototype['@@transducer/step'] = function (result, input) {
    var sameAsLast = false;
    if (!this.seenFirstValue) {
      this.seenFirstValue = true;
    } else if (this.pred(this.lastValue, input)) {
      sameAsLast = true;
    }
    this.lastValue = input;
    return sameAsLast ? result : this.xf['@@transducer/step'](result, input);
  };

  return XDropRepeatsWith;
}();

var _xdropRepeatsWith = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xdropRepeatsWith(pred, xf) {
  return new XDropRepeatsWith(pred, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xdropRepeatsWith);

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _xwrap;
var XWrap = /*#__PURE__*/function () {
  function XWrap(fn) {
    this.f = fn;
  }
  XWrap.prototype['@@transducer/init'] = function () {
    throw new Error('init not implemented on XWrap');
  };
  XWrap.prototype['@@transducer/result'] = function (acc) {
    return acc;
  };
  XWrap.prototype['@@transducer/step'] = function (acc, x) {
    return this.f(acc, x);
  };

  return XWrap;
}();

function _xwrap(fn) {
  return new XWrap(fn);
}

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * See if an object (`val`) is an instance of the supplied constructor. This
 * function will check up the inheritance chain, if any.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Type
 * @sig (* -> {*}) -> a -> Boolean
 * @param {Object} ctor A constructor
 * @param {*} val The value to test
 * @return {Boolean}
 * @example
 *
 *      R.is(Object, {}); //=> true
 *      R.is(Number, 1); //=> true
 *      R.is(Object, 1); //=> false
 *      R.is(String, 's'); //=> true
 *      R.is(String, new String('')); //=> true
 *      R.is(Object, new String('')); //=> true
 *      R.is(Object, 's'); //=> false
 *      R.is(Number, {}); //=> false
 */
var is = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function is(Ctor, val) {
  return val != null && val.constructor === Ctor || val instanceof Ctor;
});
/* harmony default export */ __webpack_exports__["a"] = (is);

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);


/**
 * Checks if the input value is `null` or `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
 * @example
 *
 *      R.isNil(null); //=> true
 *      R.isNil(undefined); //=> true
 *      R.isNil(0); //=> false
 *      R.isNil([]); //=> false
 */
var isNil = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function isNil(x) {
  return x == null;
});
/* harmony default export */ __webpack_exports__["a"] = (isNil);

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__converge__ = __webpack_require__(71);



/**
 * juxt applies a list of functions to a list of values.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Function
 * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
 * @param {Array} fns An array of functions
 * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.
 * @see R.applySpec
 * @example
 *
 *      var getRange = R.juxt([Math.min, Math.max]);
 *      getRange(3, 4, 9, -3); //=> [-3, 9]
 * @symb R.juxt([f, g, h])(a, b) = [f(a, b), g(a, b), h(a, b)]
 */
var juxt = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function juxt(fns) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__converge__["a" /* default */])(function () {
    return Array.prototype.slice.call(arguments, 0);
  }, fns);
});
/* harmony default export */ __webpack_exports__["a"] = (juxt);

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nth__ = __webpack_require__(24);


/**
 * Returns the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.init, R.head, R.tail
 * @example
 *
 *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
 *      R.last([]); //=> undefined
 *
 *      R.last('abc'); //=> 'c'
 *      R.last(''); //=> ''
 */
var last = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__nth__["a" /* default */])(-1);
/* harmony default export */ __webpack_exports__["a"] = (last);

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isNumber__ = __webpack_require__(86);



/**
 * Returns the number of elements in the array by returning `list.length`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [a] -> Number
 * @param {Array} list The array to inspect.
 * @return {Number} The length of the array.
 * @example
 *
 *      R.length([]); //=> 0
 *      R.length([1, 2, 3]); //=> 3
 */
var length = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function length(list) {
  return list != null && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_isNumber__["a" /* default */])(list.length) ? list.length : NaN;
});
/* harmony default export */ __webpack_exports__["a"] = (length);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_reduce__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ap__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__curryN__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map__ = __webpack_require__(7);






/**
 * "lifts" a function to be the specified arity, so that it may "map over" that
 * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig Number -> (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.lift, R.ap
 * @example
 *
 *      var madd3 = R.liftN(3, (...args) => R.sum(args));
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 */
var liftN = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function liftN(arity, fn) {
  var lifted = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__curryN__["a" /* default */])(arity, fn);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__curryN__["a" /* default */])(arity, function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__ap__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__map__["a" /* default */])(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
});
/* harmony default export */ __webpack_exports__["a"] = (liftN);

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sum__ = __webpack_require__(111);



/**
 * Returns the mean of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @see R.median
 * @example
 *
 *      R.mean([2, 7, 9]); //=> 6
 *      R.mean([]); //=> NaN
 */
var mean = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function mean(list) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__sum__["a" /* default */])(list) / list.length;
});
/* harmony default export */ __webpack_exports__["a"] = (mean);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_has__ = __webpack_require__(6);




/**
 * A customisable version of [`R.memoize`](#memoize). `memoizeWith` takes an
 * additional function that will be applied to a given argument set and used to
 * create the cache key under which the results of the function to be memoized
 * will be stored. Care must be taken when implementing key generation to avoid
 * clashes that may overwrite previous entries erroneously.
 *
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Function
 * @sig (*... -> String) -> (*... -> a) -> (*... -> a)
 * @param {Function} fn The function to generate the cache key.
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @see R.memoize
 * @example
 *
 *      let count = 0;
 *      const factorial = R.memoizeWith(R.identity, n => {
 *        count += 1;
 *        return R.product(R.range(1, n + 1));
 *      });
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      count; //=> 1
 */
var memoizeWith = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function memoizeWith(mFn, fn) {
  var cache = {};
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(fn.length, function () {
    var key = mFn.apply(this, arguments);
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_has__["a" /* default */])(key, cache)) {
      cache[key] = fn.apply(this, arguments);
    }
    return cache[key];
  });
});
/* harmony default export */ __webpack_exports__["a"] = (memoizeWith);

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Multiplies two numbers. Equivalent to `a * b` but curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a * b`.
 * @see R.divide
 * @example
 *
 *      var double = R.multiply(2);
 *      var triple = R.multiply(3);
 *      double(3);       //=>  6
 *      triple(4);       //=> 12
 *      R.multiply(2, 5);  //=> 10
 */
var multiply = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function multiply(a, b) {
  return a * b;
});
/* harmony default export */ __webpack_exports__["a"] = (multiply);

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);


/**
 * A function that returns the `!` of its argument. It will return `true` when
 * passed false-y value, and `false` when passed a truth-y one.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig * -> Boolean
 * @param {*} a any value
 * @return {Boolean} the logical inverse of passed argument.
 * @see R.complement
 * @example
 *
 *      R.not(true); //=> false
 *      R.not(false); //=> true
 *      R.not(0); //=> true
 *      R.not(1); //=> false
 */
var not = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function not(a) {
  return !a;
});
/* harmony default export */ __webpack_exports__["a"] = (not);

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Creates an object containing a single key:value pair.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @sig String -> a -> {String:a}
 * @param {String} key
 * @param {*} val
 * @return {Object}
 * @see R.pair
 * @example
 *
 *      var matchPhrases = R.compose(
 *        R.objOf('must'),
 *        R.map(R.objOf('match_phrase'))
 *      );
 *      matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
 */
var objOf = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function objOf(key, val) {
  var obj = {};
  obj[key] = val;
  return obj;
});
/* harmony default export */ __webpack_exports__["a"] = (objOf);

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns `true` if one or both of its arguments are `true`. Returns `false`
 * if both arguments are `false`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if truthy, otherwise the second argument.
 * @see R.either
 * @example
 *
 *      R.or(true, true); //=> true
 *      R.or(true, false); //=> true
 *      R.or(false, true); //=> true
 *      R.or(false, false); //=> false
 */
var or = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function or(a, b) {
  return a || b;
});
/* harmony default export */ __webpack_exports__["a"] = (or);

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


// `Identity` is a functor that holds a single value, where `map` simply
// transforms the held value with the provided function.
var Identity = function (x) {
  return { value: x, map: function (f) {
      return Identity(f(x));
    } };
};

/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the result of applying the given function to
 * the focused value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> (a -> a) -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *
 *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
 */
var over = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function over(lens, f, x) {
  // The value returned by the getter function is first transformed with `f`,
  // then set as the value of an `Identity`. This is then mapped over with the
  // setter function of the lens.
  return lens(function (y) {
    return Identity(f(y));
  })(x).value;
});
/* harmony default export */ __webpack_exports__["a"] = (over);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Similar to `pick` except that this one includes a `key: undefined` pair for
 * properties that don't exist.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.pick
 * @example
 *
 *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
 */
var pickAll = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function pickAll(names, obj) {
  var result = {};
  var idx = 0;
  var len = names.length;
  while (idx < len) {
    var name = names[idx];
    result[name] = obj[name];
    idx += 1;
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (pickAll);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_pipe__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reduce__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tail__ = __webpack_require__(58);
/* harmony export (immutable) */ __webpack_exports__["a"] = pipe;





/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      var f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */
function pipe() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(arguments[0].length, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__internal_pipe__["a" /* default */], arguments[0], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__tail__["a" /* default */])(arguments)));
}

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_pipeP__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reduce__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tail__ = __webpack_require__(58);
/* harmony export (immutable) */ __webpack_exports__["a"] = pipeP;





/**
 * Performs left-to-right composition of one or more Promise-returning
 * functions. The leftmost function may have any arity; the remaining functions
 * must be unary.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a -> Promise b), (b -> Promise c), ..., (y -> Promise z)) -> (a -> Promise z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.composeP
 * @example
 *
 *      //  followersForUser :: String -> Promise [User]
 *      var followersForUser = R.pipeP(db.getUserById, db.getFollowers);
 */
function pipeP() {
  if (arguments.length === 0) {
    throw new Error('pipeP requires at least one argument');
  }
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(arguments[0].length, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__internal_pipeP__["a" /* default */], arguments[0], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__tail__["a" /* default */])(arguments)));
}

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Returns a new list with the given element at the front, followed by the
 * contents of the list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The item to add to the head of the output list.
 * @param {Array} list The array to add to the tail of the output list.
 * @return {Array} A new array.
 * @see R.append
 * @example
 *
 *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
 */
var prepend = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function prepend(el, list) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */])([el], list);
});
/* harmony default export */ __webpack_exports__["a"] = (prepend);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * Similar to [`reduce`](#reduce), except moves through the input list from the
 * right to the left.
 *
 * The iterator function receives two values: *(value, acc)*, while the arguments'
 * order of `reduce`'s iterator function is *(acc, value)*.
 *
 * Note: `R.reduceRight` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduceRight` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> b) -> b -> [a] -> b
 * @param {Function} fn The iterator function. Receives two values, the current element from the array
 *        and the accumulator.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.addIndex
 * @example
 *
 *      R.reduceRight(R.subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2
 *      //    -               -2
 *      //   / \              / \
 *      //  1   -            1   3
 *      //     / \              / \
 *      //    2   -     ==>    2  -1
 *      //       / \              / \
 *      //      3   -            3   4
 *      //         / \              / \
 *      //        4   0            4   0
 *
 * @symb R.reduceRight(f, a, [b, c, d]) = f(b, f(c, f(d, a)))
 */
var reduceRight = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function reduceRight(fn, acc, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    acc = fn(list[idx], acc);
    idx -= 1;
  }
  return acc;
});
/* harmony default export */ __webpack_exports__["a"] = (reduceRight);

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Removes the sub-list of `list` starting at index `start` and containing
 * `count` elements. _Note that this is not destructive_: it returns a copy of
 * the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @param {Number} start The position to start removing elements
 * @param {Number} count The number of elements to remove
 * @param {Array} list The list to remove from
 * @return {Array} A new Array with `count` elements from `start` removed.
 * @example
 *
 *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
 */
var remove = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function remove(start, count, list) {
  var result = Array.prototype.slice.call(list, 0);
  result.splice(start, count);
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (remove);

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ap__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prepend__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reduceRight__ = __webpack_require__(108);






/**
 * Transforms a [Traversable](https://github.com/fantasyland/fantasy-land#traversable)
 * of [Applicative](https://github.com/fantasyland/fantasy-land#applicative) into an
 * Applicative of Traversable.
 *
 * Dispatches to the `sequence` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)
 * @param {Function} of
 * @param {*} traversable
 * @return {*}
 * @see R.traverse
 * @example
 *
 *      R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
 *      R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()
 *
 *      R.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]
 *      R.sequence(R.of, Nothing());       //=> [Nothing()]
 */
var sequence = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function sequence(of, traversable) {
  return typeof traversable.sequence === 'function' ? traversable.sequence(of) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reduceRight__["a" /* default */])(function (x, acc) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ap__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__prepend__["a" /* default */], x), acc);
  }, of([]), traversable);
});
/* harmony default export */ __webpack_exports__["a"] = (sequence);

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduce__ = __webpack_require__(14);



/**
 * Adds together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The sum of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.sum([2,4,6,8,100,1]); //=> 121
 */
var sum = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__add__["a" /* default */], 0);
/* harmony default export */ __webpack_exports__["a"] = (sum);

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drop__ = __webpack_require__(76);



/**
 * Returns a new list containing the last `n` elements of the given list.
 * If `n > list.length`, returns a list of `list.length` elements.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements to return.
 * @param {Array} xs The collection to consider.
 * @return {Array}
 * @see R.dropLast
 * @example
 *
 *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(3, 'ramda');               //=> 'mda'
 */
var takeLast = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function takeLast(n, xs) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__drop__["a" /* default */])(n >= 0 ? xs.length - n : 0, xs);
});
/* harmony default export */ __webpack_exports__["a"] = (takeLast);

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Calls an input function `n` times, returning an array containing the results
 * of those function calls.
 *
 * `fn` is passed one argument: The current value of `n`, which begins at `0`
 * and is gradually incremented to `n - 1`.
 *
 * @func
 * @memberOf R
 * @since v0.2.3
 * @category List
 * @sig (Number -> a) -> Number -> [a]
 * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
 * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.
 * @return {Array} An array containing the return values of all calls to `fn`.
 * @see R.repeat
 * @example
 *
 *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
 * @symb R.times(f, 0) = []
 * @symb R.times(f, 1) = [f(0)]
 * @symb R.times(f, 2) = [f(0), f(1)]
 */
var times = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function times(fn, n) {
  var len = Number(n);
  var idx = 0;
  var list;

  if (len < 0 || isNaN(len)) {
    throw new RangeError('n must be a non-negative number');
  }
  list = new Array(len);
  while (idx < len) {
    list[idx] = fn(idx);
    idx += 1;
  }
  return list;
});
/* harmony default export */ __webpack_exports__["a"] = (times);

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_Set__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied function to
 * each list element. Prefers the first item if the supplied function produces
 * the same value on two items. [`R.equals`](#equals) is used for comparison.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> b) -> [a] -> [a]
 * @param {Function} fn A function used to produce a value to use during comparisons.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
 */
var uniqBy = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function uniqBy(fn, list) {
  var set = new __WEBPACK_IMPORTED_MODULE_0__internal_Set__["a" /* default */]();
  var result = [];
  var idx = 0;
  var appliedItem, item;

  while (idx < list.length) {
    item = list[idx];
    appliedItem = fn(item);
    if (set.add(appliedItem)) {
      result.push(item);
    }
    idx += 1;
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (uniqBy);

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_containsWith__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied predicate to
 * two list elements. Prefers the first item if two items compare equal based
 * on the predicate.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category List
 * @sig ((a, a) -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      var strEq = R.eqBy(String);
 *      R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
 *      R.uniqWith(strEq)([{}, {}]);       //=> [{}]
 *      R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
 *      R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
 */
var uniqWith = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function uniqWith(pred, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var item;
  while (idx < len) {
    item = list[idx];
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_containsWith__["a" /* default */])(pred, item, result)) {
      result[result.length] = item;
    }
    idx += 1;
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (uniqWith);

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(5);



/**
 * Accepts a function `fn` and a list of transformer functions and returns a
 * new curried function. When the new function is invoked, it calls the
 * function `fn` with parameters consisting of the result of calling each
 * supplied handler on successive arguments to the new function.
 *
 * If more arguments are passed to the returned function than transformer
 * functions, those arguments are passed directly to `fn` as additional
 * parameters. If you expect additional arguments that don't need to be
 * transformed, although you can ignore them, it's best to pass an identity
 * function so that the new function reports the correct arity.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((x1, x2, ...) -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} fn The function to wrap.
 * @param {Array} transformers A list of transformer functions
 * @return {Function} The wrapped function.
 * @see R.converge
 * @example
 *
 *      R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
 *      R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
 *      R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
 *      R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
 * @symb R.useWith(f, [g, h])(a, b) = f(g(a), h(b))
 */
var useWith = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function useWith(fn, transformers) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(transformers.length, function () {
    var args = [];
    var idx = 0;
    while (idx < transformers.length) {
      args.push(transformers[idx].call(this, arguments[idx]));
      idx += 1;
    }
    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
  });
});
/* harmony default export */ __webpack_exports__["a"] = (useWith);

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys__ = __webpack_require__(13);



/**
 * Returns a list of all the enumerable own properties of the supplied object.
 * Note that the order of the output array is not guaranteed across different
 * JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own properties.
 * @see R.valuesIn, R.keys
 * @example
 *
 *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
 */
var values = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function values(obj) {
  var props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__keys__["a" /* default */])(obj);
  var len = props.length;
  var vals = [];
  var idx = 0;
  while (idx < len) {
    vals[idx] = obj[props[idx]];
    idx += 1;
  }
  return vals;
});
/* harmony default export */ __webpack_exports__["a"] = (values);

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(6);



/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec. Each of the spec's own properties must be a predicate function.
 * Each predicate is applied to the value of the corresponding property of the
 * test object. `where` returns true if all the predicates return true, false
 * otherwise.
 *
 * `where` is well suited to declaratively expressing constraints for other
 * functions such as [`filter`](#filter) and [`find`](#find).
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Object
 * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @see R.propSatisfies, R.whereEq
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = R.where({
 *        a: R.equals('foo'),
 *        b: R.complement(R.equals('bar')),
 *        x: R.gt(R.__, 10),
 *        y: R.lt(R.__, 20)
 *      });
 *
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
 *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
 */
var where = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function where(spec, testObj) {
  for (var prop in spec) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(prop, spec) && !spec[prop](testObj[prop])) {
      return false;
    }
  }
  return true;
});
/* harmony default export */ __webpack_exports__["a"] = (where);

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__F__ = __webpack_require__(121);
/* unused harmony reexport F */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__T__ = __webpack_require__(122);
/* unused harmony reexport T */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(123);
/* unused harmony reexport __ */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add__ = __webpack_require__(27);
/* unused harmony reexport add */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addIndex__ = __webpack_require__(124);
/* unused harmony reexport addIndex */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__adjust__ = __webpack_require__(63);
/* unused harmony reexport adjust */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__all__ = __webpack_require__(125);
/* unused harmony reexport all */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__allPass__ = __webpack_require__(126);
/* unused harmony reexport allPass */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__always__ = __webpack_require__(17);
/* unused harmony reexport always */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__and__ = __webpack_require__(64);
/* unused harmony reexport and */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__any__ = __webpack_require__(65);
/* unused harmony reexport any */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__anyPass__ = __webpack_require__(127);
/* unused harmony reexport anyPass */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ap__ = __webpack_require__(43);
/* unused harmony reexport ap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aperture__ = __webpack_require__(128);
/* unused harmony reexport aperture */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__append__ = __webpack_require__(129);
/* unused harmony reexport append */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__apply__ = __webpack_require__(66);
/* unused harmony reexport apply */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__applySpec__ = __webpack_require__(130);
/* unused harmony reexport applySpec */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__applyTo__ = __webpack_require__(131);
/* unused harmony reexport applyTo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ascend__ = __webpack_require__(132);
/* unused harmony reexport ascend */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__assoc__ = __webpack_require__(28);
/* unused harmony reexport assoc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__assocPath__ = __webpack_require__(67);
/* unused harmony reexport assocPath */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__binary__ = __webpack_require__(133);
/* unused harmony reexport binary */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__bind__ = __webpack_require__(68);
/* unused harmony reexport bind */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__both__ = __webpack_require__(134);
/* unused harmony reexport both */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__call__ = __webpack_require__(135);
/* unused harmony reexport call */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__chain__ = __webpack_require__(44);
/* unused harmony reexport chain */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__clamp__ = __webpack_require__(136);
/* unused harmony reexport clamp */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__clone__ = __webpack_require__(137);
/* unused harmony reexport clone */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__comparator__ = __webpack_require__(138);
/* unused harmony reexport comparator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__complement__ = __webpack_require__(139);
/* unused harmony reexport complement */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__compose__ = __webpack_require__(45);
/* unused harmony reexport compose */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__composeK__ = __webpack_require__(69);
/* unused harmony reexport composeK */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__composeP__ = __webpack_require__(140);
/* unused harmony reexport composeP */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__concat__ = __webpack_require__(46);
/* unused harmony reexport concat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__cond__ = __webpack_require__(141);
/* unused harmony reexport cond */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__construct__ = __webpack_require__(142);
/* unused harmony reexport construct */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__constructN__ = __webpack_require__(70);
/* unused harmony reexport constructN */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__contains__ = __webpack_require__(143);
/* unused harmony reexport contains */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__converge__ = __webpack_require__(71);
/* unused harmony reexport converge */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__countBy__ = __webpack_require__(144);
/* unused harmony reexport countBy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__curry__ = __webpack_require__(47);
/* unused harmony reexport curry */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__curryN__ = __webpack_require__(5);
/* unused harmony reexport curryN */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__dec__ = __webpack_require__(145);
/* unused harmony reexport dec */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__defaultTo__ = __webpack_require__(72);
/* unused harmony reexport defaultTo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__descend__ = __webpack_require__(146);
/* unused harmony reexport descend */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__difference__ = __webpack_require__(73);
/* unused harmony reexport difference */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__differenceWith__ = __webpack_require__(74);
/* unused harmony reexport differenceWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__dissoc__ = __webpack_require__(75);
/* unused harmony reexport dissoc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__dissocPath__ = __webpack_require__(147);
/* unused harmony reexport dissocPath */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__divide__ = __webpack_require__(148);
/* unused harmony reexport divide */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__drop__ = __webpack_require__(76);
/* unused harmony reexport drop */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__dropLast__ = __webpack_require__(149);
/* unused harmony reexport dropLast */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__dropLastWhile__ = __webpack_require__(150);
/* unused harmony reexport dropLastWhile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__dropRepeats__ = __webpack_require__(151);
/* unused harmony reexport dropRepeats */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__dropRepeatsWith__ = __webpack_require__(77);
/* unused harmony reexport dropRepeatsWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__dropWhile__ = __webpack_require__(152);
/* unused harmony reexport dropWhile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__either__ = __webpack_require__(153);
/* unused harmony reexport either */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__empty__ = __webpack_require__(78);
/* unused harmony reexport empty */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__endsWith__ = __webpack_require__(154);
/* unused harmony reexport endsWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__eqBy__ = __webpack_require__(155);
/* unused harmony reexport eqBy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__eqProps__ = __webpack_require__(156);
/* unused harmony reexport eqProps */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__equals__ = __webpack_require__(8);
/* unused harmony reexport equals */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__evolve__ = __webpack_require__(157);
/* unused harmony reexport evolve */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__filter__ = __webpack_require__(48);
/* unused harmony reexport filter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__find__ = __webpack_require__(158);
/* unused harmony reexport find */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__findIndex__ = __webpack_require__(159);
/* unused harmony reexport findIndex */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__findLast__ = __webpack_require__(160);
/* unused harmony reexport findLast */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__findLastIndex__ = __webpack_require__(161);
/* unused harmony reexport findLastIndex */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__flatten__ = __webpack_require__(162);
/* unused harmony reexport flatten */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__flip__ = __webpack_require__(29);
/* unused harmony reexport flip */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__forEach__ = __webpack_require__(163);
/* unused harmony reexport forEach */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__forEachObjIndexed__ = __webpack_require__(164);
/* unused harmony reexport forEachObjIndexed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__fromPairs__ = __webpack_require__(165);
/* unused harmony reexport fromPairs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__groupBy__ = __webpack_require__(166);
/* unused harmony reexport groupBy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__groupWith__ = __webpack_require__(167);
/* unused harmony reexport groupWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__gt__ = __webpack_require__(168);
/* unused harmony reexport gt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__gte__ = __webpack_require__(169);
/* unused harmony reexport gte */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__has__ = __webpack_require__(170);
/* unused harmony reexport has */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__hasIn__ = __webpack_require__(171);
/* unused harmony reexport hasIn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__head__ = __webpack_require__(172);
/* unused harmony reexport head */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__identical__ = __webpack_require__(79);
/* unused harmony reexport identical */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__identity__ = __webpack_require__(49);
/* unused harmony reexport identity */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__ifElse__ = __webpack_require__(173);
/* unused harmony reexport ifElse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__inc__ = __webpack_require__(174);
/* unused harmony reexport inc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__indexBy__ = __webpack_require__(175);
/* unused harmony reexport indexBy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__indexOf__ = __webpack_require__(176);
/* unused harmony reexport indexOf */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__init__ = __webpack_require__(177);
/* unused harmony reexport init */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__innerJoin__ = __webpack_require__(178);
/* unused harmony reexport innerJoin */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__insert__ = __webpack_require__(179);
/* unused harmony reexport insert */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__insertAll__ = __webpack_require__(180);
/* unused harmony reexport insertAll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__intersection__ = __webpack_require__(216);
/* unused harmony reexport intersection */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__intersperse__ = __webpack_require__(217);
/* unused harmony reexport intersperse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__into__ = __webpack_require__(218);
/* unused harmony reexport into */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__invert__ = __webpack_require__(219);
/* unused harmony reexport invert */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__invertObj__ = __webpack_require__(220);
/* unused harmony reexport invertObj */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__invoker__ = __webpack_require__(23);
/* unused harmony reexport invoker */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__is__ = __webpack_require__(91);
/* unused harmony reexport is */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__isEmpty__ = __webpack_require__(221);
/* unused harmony reexport isEmpty */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__isNil__ = __webpack_require__(92);
/* unused harmony reexport isNil */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__join__ = __webpack_require__(222);
/* unused harmony reexport join */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100__juxt__ = __webpack_require__(93);
/* unused harmony reexport juxt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101__keys__ = __webpack_require__(13);
/* unused harmony reexport keys */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102__keysIn__ = __webpack_require__(223);
/* unused harmony reexport keysIn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103__last__ = __webpack_require__(94);
/* unused harmony reexport last */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104__lastIndexOf__ = __webpack_require__(224);
/* unused harmony reexport lastIndexOf */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_105__length__ = __webpack_require__(95);
/* unused harmony reexport length */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_106__lens__ = __webpack_require__(36);
/* unused harmony reexport lens */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_107__lensIndex__ = __webpack_require__(225);
/* unused harmony reexport lensIndex */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_108__lensPath__ = __webpack_require__(226);
/* unused harmony reexport lensPath */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_109__lensProp__ = __webpack_require__(227);
/* unused harmony reexport lensProp */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_110__lift__ = __webpack_require__(37);
/* unused harmony reexport lift */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_111__liftN__ = __webpack_require__(96);
/* unused harmony reexport liftN */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_112__lt__ = __webpack_require__(228);
/* unused harmony reexport lt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_113__lte__ = __webpack_require__(229);
/* unused harmony reexport lte */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_114__map__ = __webpack_require__(7);
/* unused harmony reexport map */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_115__mapAccum__ = __webpack_require__(230);
/* unused harmony reexport mapAccum */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_116__mapAccumRight__ = __webpack_require__(231);
/* unused harmony reexport mapAccumRight */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_117__mapObjIndexed__ = __webpack_require__(232);
/* unused harmony reexport mapObjIndexed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_118__match__ = __webpack_require__(233);
/* unused harmony reexport match */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_119__mathMod__ = __webpack_require__(234);
/* unused harmony reexport mathMod */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_120__max__ = __webpack_require__(19);
/* unused harmony reexport max */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_121__maxBy__ = __webpack_require__(235);
/* unused harmony reexport maxBy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_122__mean__ = __webpack_require__(97);
/* unused harmony reexport mean */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_123__median__ = __webpack_require__(236);
/* unused harmony reexport median */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_124__memoize__ = __webpack_require__(237);
/* unused harmony reexport memoize */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_125__memoizeWith__ = __webpack_require__(98);
/* unused harmony reexport memoizeWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_126__merge__ = __webpack_require__(238);
/* unused harmony reexport merge */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_127__mergeAll__ = __webpack_require__(239);
/* unused harmony reexport mergeAll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_128__mergeDeepLeft__ = __webpack_require__(240);
/* unused harmony reexport mergeDeepLeft */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_129__mergeDeepRight__ = __webpack_require__(241);
/* unused harmony reexport mergeDeepRight */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_130__mergeDeepWith__ = __webpack_require__(242);
/* unused harmony reexport mergeDeepWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_131__mergeDeepWithKey__ = __webpack_require__(38);
/* unused harmony reexport mergeDeepWithKey */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_132__mergeWith__ = __webpack_require__(243);
/* unused harmony reexport mergeWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_133__mergeWithKey__ = __webpack_require__(56);
/* unused harmony reexport mergeWithKey */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_134__min__ = __webpack_require__(244);
/* unused harmony reexport min */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_135__minBy__ = __webpack_require__(245);
/* unused harmony reexport minBy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_136__modulo__ = __webpack_require__(246);
/* unused harmony reexport modulo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_137__multiply__ = __webpack_require__(99);
/* unused harmony reexport multiply */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_138__nAry__ = __webpack_require__(39);
/* unused harmony reexport nAry */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_139__negate__ = __webpack_require__(247);
/* unused harmony reexport negate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_140__none__ = __webpack_require__(248);
/* unused harmony reexport none */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_141__not__ = __webpack_require__(100);
/* unused harmony reexport not */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_142__nth__ = __webpack_require__(24);
/* unused harmony reexport nth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_143__nthArg__ = __webpack_require__(249);
/* unused harmony reexport nthArg */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_144__o__ = __webpack_require__(250);
/* unused harmony reexport o */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_145__objOf__ = __webpack_require__(101);
/* unused harmony reexport objOf */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_146__of__ = __webpack_require__(251);
/* unused harmony reexport of */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_147__omit__ = __webpack_require__(252);
/* unused harmony reexport omit */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_148__once__ = __webpack_require__(253);
/* unused harmony reexport once */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_149__or__ = __webpack_require__(102);
/* unused harmony reexport or */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_150__over__ = __webpack_require__(103);
/* unused harmony reexport over */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_151__pair__ = __webpack_require__(254);
/* unused harmony reexport pair */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_152__partial__ = __webpack_require__(255);
/* unused harmony reexport partial */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_153__partialRight__ = __webpack_require__(256);
/* unused harmony reexport partialRight */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_154__partition__ = __webpack_require__(257);
/* unused harmony reexport partition */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_155__path__ = __webpack_require__(20);
/* unused harmony reexport path */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_156__pathEq__ = __webpack_require__(258);
/* unused harmony reexport pathEq */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_157__pathOr__ = __webpack_require__(259);
/* unused harmony reexport pathOr */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_158__pathSatisfies__ = __webpack_require__(260);
/* unused harmony reexport pathSatisfies */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_159__pick__ = __webpack_require__(261);
/* unused harmony reexport pick */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_160__pickAll__ = __webpack_require__(104);
/* unused harmony reexport pickAll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_161__pickBy__ = __webpack_require__(262);
/* unused harmony reexport pickBy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_162__pipe__ = __webpack_require__(105);
/* unused harmony reexport pipe */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_163__pipeK__ = __webpack_require__(263);
/* unused harmony reexport pipeK */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_164__pipeP__ = __webpack_require__(106);
/* unused harmony reexport pipeP */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_165__pluck__ = __webpack_require__(25);
/* unused harmony reexport pluck */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_166__prepend__ = __webpack_require__(107);
/* unused harmony reexport prepend */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_167__product__ = __webpack_require__(264);
/* unused harmony reexport product */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_168__project__ = __webpack_require__(265);
/* unused harmony reexport project */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_169__prop__ = __webpack_require__(57);
/* unused harmony reexport prop */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_170__propEq__ = __webpack_require__(266);
/* unused harmony reexport propEq */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_171__propIs__ = __webpack_require__(267);
/* unused harmony reexport propIs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_172__propOr__ = __webpack_require__(268);
/* unused harmony reexport propOr */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_173__propSatisfies__ = __webpack_require__(269);
/* unused harmony reexport propSatisfies */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_174__props__ = __webpack_require__(270);
/* unused harmony reexport props */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_175__range__ = __webpack_require__(271);
/* unused harmony reexport range */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_176__reduce__ = __webpack_require__(14);
/* unused harmony reexport reduce */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_177__reduceBy__ = __webpack_require__(40);
/* unused harmony reexport reduceBy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_178__reduceRight__ = __webpack_require__(108);
/* unused harmony reexport reduceRight */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_179__reduceWhile__ = __webpack_require__(272);
/* unused harmony reexport reduceWhile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_180__reduced__ = __webpack_require__(273);
/* unused harmony reexport reduced */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_181__reject__ = __webpack_require__(41);
/* unused harmony reexport reject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_182__remove__ = __webpack_require__(109);
/* unused harmony reexport remove */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_183__repeat__ = __webpack_require__(274);
/* unused harmony reexport repeat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_184__replace__ = __webpack_require__(275);
/* unused harmony reexport replace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_185__reverse__ = __webpack_require__(42);
/* unused harmony reexport reverse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_186__scan__ = __webpack_require__(276);
/* unused harmony reexport scan */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_187__sequence__ = __webpack_require__(110);
/* unused harmony reexport sequence */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_188__set__ = __webpack_require__(277);
/* unused harmony reexport set */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_189__slice__ = __webpack_require__(11);
/* unused harmony reexport slice */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_190__sort__ = __webpack_require__(278);
/* unused harmony reexport sort */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_191__sortBy__ = __webpack_require__(279);
/* unused harmony reexport sortBy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_192__sortWith__ = __webpack_require__(280);
/* unused harmony reexport sortWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_193__split__ = __webpack_require__(281);
/* unused harmony reexport split */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_194__splitAt__ = __webpack_require__(282);
/* unused harmony reexport splitAt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_195__splitEvery__ = __webpack_require__(283);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_195__splitEvery__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_196__splitWhen__ = __webpack_require__(284);
/* unused harmony reexport splitWhen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_197__startsWith__ = __webpack_require__(285);
/* unused harmony reexport startsWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_198__subtract__ = __webpack_require__(286);
/* unused harmony reexport subtract */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_199__sum__ = __webpack_require__(111);
/* unused harmony reexport sum */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_200__symmetricDifference__ = __webpack_require__(287);
/* unused harmony reexport symmetricDifference */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_201__symmetricDifferenceWith__ = __webpack_require__(288);
/* unused harmony reexport symmetricDifferenceWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_202__tail__ = __webpack_require__(58);
/* unused harmony reexport tail */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_203__take__ = __webpack_require__(59);
/* unused harmony reexport take */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_204__takeLast__ = __webpack_require__(112);
/* unused harmony reexport takeLast */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_205__takeLastWhile__ = __webpack_require__(289);
/* unused harmony reexport takeLastWhile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_206__takeWhile__ = __webpack_require__(290);
/* unused harmony reexport takeWhile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_207__tap__ = __webpack_require__(291);
/* unused harmony reexport tap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_208__test__ = __webpack_require__(292);
/* unused harmony reexport test */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_209__times__ = __webpack_require__(113);
/* unused harmony reexport times */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_210__toLower__ = __webpack_require__(293);
/* unused harmony reexport toLower */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_211__toPairs__ = __webpack_require__(294);
/* unused harmony reexport toPairs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_212__toPairsIn__ = __webpack_require__(295);
/* unused harmony reexport toPairsIn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_213__toString__ = __webpack_require__(26);
/* unused harmony reexport toString */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_214__toUpper__ = __webpack_require__(296);
/* unused harmony reexport toUpper */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_215__transduce__ = __webpack_require__(297);
/* unused harmony reexport transduce */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_216__transpose__ = __webpack_require__(298);
/* unused harmony reexport transpose */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_217__traverse__ = __webpack_require__(299);
/* unused harmony reexport traverse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_218__trim__ = __webpack_require__(300);
/* unused harmony reexport trim */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_219__tryCatch__ = __webpack_require__(301);
/* unused harmony reexport tryCatch */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_220__type__ = __webpack_require__(60);
/* unused harmony reexport type */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_221__unapply__ = __webpack_require__(302);
/* unused harmony reexport unapply */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_222__unary__ = __webpack_require__(303);
/* unused harmony reexport unary */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_223__uncurryN__ = __webpack_require__(304);
/* unused harmony reexport uncurryN */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_224__unfold__ = __webpack_require__(305);
/* unused harmony reexport unfold */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_225__union__ = __webpack_require__(306);
/* unused harmony reexport union */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_226__unionWith__ = __webpack_require__(307);
/* unused harmony reexport unionWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_227__uniq__ = __webpack_require__(61);
/* unused harmony reexport uniq */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_228__uniqBy__ = __webpack_require__(114);
/* unused harmony reexport uniqBy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_229__uniqWith__ = __webpack_require__(115);
/* unused harmony reexport uniqWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_230__unless__ = __webpack_require__(308);
/* unused harmony reexport unless */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_231__unnest__ = __webpack_require__(309);
/* unused harmony reexport unnest */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_232__until__ = __webpack_require__(310);
/* unused harmony reexport until */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_233__update__ = __webpack_require__(62);
/* unused harmony reexport update */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_234__useWith__ = __webpack_require__(116);
/* unused harmony reexport useWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_235__values__ = __webpack_require__(117);
/* unused harmony reexport values */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_236__valuesIn__ = __webpack_require__(311);
/* unused harmony reexport valuesIn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_237__view__ = __webpack_require__(312);
/* unused harmony reexport view */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_238__when__ = __webpack_require__(313);
/* unused harmony reexport when */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_239__where__ = __webpack_require__(118);
/* unused harmony reexport where */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_240__whereEq__ = __webpack_require__(314);
/* unused harmony reexport whereEq */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_241__without__ = __webpack_require__(315);
/* unused harmony reexport without */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_242__xprod__ = __webpack_require__(316);
/* unused harmony reexport xprod */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_243__zip__ = __webpack_require__(317);
/* unused harmony reexport zip */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_244__zipObj__ = __webpack_require__(318);
/* unused harmony reexport zipObj */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_245__zipWith__ = __webpack_require__(319);
/* unused harmony reexport zipWith */























































































































































































































































/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_luxon__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_luxon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_luxon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda__ = __webpack_require__(119);



const generateCalendarModel = (day, startDay = 0) => {
    const DAYS_AT_THE_WEEK = 7;
    const date = __WEBPACK_IMPORTED_MODULE_0_luxon__["DateTime"].fromJSDate(day);
    const numberOfDays = date.daysInMonth;

    // Скоректуємо день початку тиждня відповідно стартового дня
    // (тиждень може розпочинатись з понеділка, вівторка, чи будь-якого іншого дня)
    let weekday = (DAYS_AT_THE_WEEK - (startDay - date.set({day: 1}).weekday)) % DAYS_AT_THE_WEEK;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ramda__["a" /* splitEvery */])(DAYS_AT_THE_WEEK)
        ([
            ...Array(weekday).fill(), // "Prefix array"
            ...Array(numberOfDays).fill().map((el, i) => i+1) // Calendar
        ])
};

const render = (calendarModel) => {
    return calendarModel.map ( row => `
        <div class="week">${row.map (day => `<span class="day">${day || ""}</span>`).join("") }</div>
    `).join("")
}

for ( let i = 0; i < 12; i++) {
    document.body.innerHTML += render(generateCalendarModel(new Date( new Date().setMonth(i) ), 1 ));
}


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__always__ = __webpack_require__(17);


/**
 * A function that always returns `false`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.always, R.T
 * @example
 *
 *      R.F(); //=> false
 */
var F = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__always__["a" /* default */])(false);
/* unused harmony default export */ var _unused_webpack_default_export = (F);

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__always__ = __webpack_require__(17);


/**
 * A function that always returns `true`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.always, R.F
 * @example
 *
 *      R.T(); //=> true
 */
var T = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__always__["a" /* default */])(true);
/* unused harmony default export */ var _unused_webpack_default_export = (T);

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * A special placeholder value used to specify "gaps" within curried functions,
 * allowing partial application of any combination of arguments, regardless of
 * their positions.
 *
 * If `g` is a curried ternary function and `_` is `R.__`, the following are
 * equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2, _)(1, 3)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @constant
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @example
 *
 *      var greet = R.replace('{name}', R.__, 'Hello, {name}!');
 *      greet('Alice'); //=> 'Hello, Alice!'
 */
/* unused harmony default export */ var _unused_webpack_default_export = ({ '@@functional/placeholder': true });

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curryN__ = __webpack_require__(5);




/**
 * Creates a new list iteration function from an existing one by adding two new
 * parameters to its callback function: the current index, and the entire list.
 *
 * This would turn, for instance, [`R.map`](#map) function into one that
 * more closely resembles `Array.prototype.map`. Note that this will only work
 * for functions in which the iteration callback function is the first
 * parameter, and where the list is the last parameter. (This latter might be
 * unimportant if the list parameter is not used.)
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Function
 * @category List
 * @sig ((a ... -> b) ... -> [a] -> *) -> (a ..., Int, [a] -> b) ... -> [a] -> *)
 * @param {Function} fn A list iteration function that does not pass index or list to its callback
 * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
 * @example
 *
 *      var mapIndexed = R.addIndex(R.map);
 *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
 *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
 */
var addIndex = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry1__["a" /* default */])(function addIndex(fn) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__curryN__["a" /* default */])(fn.length, function () {
    var idx = 0;
    var origFn = arguments[0];
    var list = arguments[arguments.length - 1];
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = function () {
      var result = origFn.apply(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */])(arguments, [idx, list]));
      idx += 1;
      return result;
    };
    return fn.apply(this, args);
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (addIndex);

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xall__ = __webpack_require__(199);




/**
 * Returns `true` if all elements of the list match the predicate, `false` if
 * there are any that don't.
 *
 * Dispatches to the `all` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
 *         otherwise.
 * @see R.any, R.none, R.transduce
 * @example
 *
 *      var equals3 = R.equals(3);
 *      R.all(equals3)([3, 3, 3, 3]); //=> true
 *      R.all(equals3)([3, 3, 1, 3]); //=> false
 */
var all = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['all'], __WEBPACK_IMPORTED_MODULE_2__internal_xall__["a" /* default */], function all(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (!fn(list[idx])) {
      return false;
    }
    idx += 1;
  }
  return true;
}));
/* unused harmony default export */ var _unused_webpack_default_export = (all);

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__max__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pluck__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reduce__ = __webpack_require__(14);






/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if every one of the provided predicates is satisfied
 * by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.anyPass
 * @example
 *
 *      var isQueen = R.propEq('rank', 'Q');
 *      var isSpade = R.propEq('suit', '♠︎');
 *      var isQueenOfSpades = R.allPass([isQueen, isSpade]);
 *
 *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
 *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
 */
var allPass = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function allPass(preds) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__max__["a" /* default */], 0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__pluck__["a" /* default */])('length', preds)), function () {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (!preds[idx].apply(this, arguments)) {
        return false;
      }
      idx += 1;
    }
    return true;
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (allPass);

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__max__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pluck__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reduce__ = __webpack_require__(14);






/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if at least one of the provided predicates is
 * satisfied by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.allPass
 * @example
 *
 *      var isClub = R.propEq('suit', '♣');
 *      var isSpade = R.propEq('suit', '♠');
 *      var isBlackCard = R.anyPass([isClub, isSpade]);
 *
 *      isBlackCard({rank: '10', suit: '♣'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♠'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♦'}); //=> false
 */
var anyPass = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function anyPass(preds) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__max__["a" /* default */], 0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__pluck__["a" /* default */])('length', preds)), function () {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (preds[idx].apply(this, arguments)) {
        return true;
      }
      idx += 1;
    }
    return false;
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (anyPass);

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_aperture__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_xaperture__ = __webpack_require__(200);





/**
 * Returns a new list, composed of n-tuples of consecutive elements. If `n` is
 * greater than the length of the list, an empty list is returned.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @param {Number} n The size of the tuples to create
 * @param {Array} list The list to split into `n`-length tuples
 * @return {Array} The resulting list of `n`-length tuples
 * @see R.transduce
 * @example
 *
 *      R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
 *      R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
 *      R.aperture(7, [1, 2, 3, 4, 5]); //=> []
 */
var aperture = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_3__internal_xaperture__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__internal_aperture__["a" /* default */]));
/* unused harmony default export */ var _unused_webpack_default_export = (aperture);

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Returns a new list containing the contents of the given list, followed by
 * the given element.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The element to add to the end of the new list.
 * @param {Array} list The list of elements to add a new item to.
 *        list.
 * @return {Array} A new list containing the elements of the old list followed by `el`.
 * @see R.prepend
 * @example
 *
 *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
 *      R.append('tests', []); //=> ['tests']
 *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
 */
var append = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function append(el, list) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */])(list, [el]);
});
/* unused harmony default export */ var _unused_webpack_default_export = (append);

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apply__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curryN__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__max__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pluck__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reduce__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__values__ = __webpack_require__(117);









/**
 * Given a spec object recursively mapping properties to functions, creates a
 * function producing an object of the same structure, by mapping each property
 * to the result of calling its associated function with the supplied arguments.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig {k: ((a, b, ..., m) -> v)} -> ((a, b, ..., m) -> {k: v})
 * @param {Object} spec an object recursively mapping properties to functions for
 *        producing the values for these properties.
 * @return {Function} A function that returns an object of the same structure
 * as `spec', with each property set to the value returned by calling its
 * associated function with the supplied arguments.
 * @see R.converge, R.juxt
 * @example
 *
 *      var getMetrics = R.applySpec({
 *        sum: R.add,
 *        nested: { mul: R.multiply }
 *      });
 *      getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
 * @symb R.applySpec({ x: f, y: { z: g } })(a, b) = { x: f(a, b), y: { z: g(a, b) } }
 */
var applySpec = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function applySpec(spec) {
  spec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__map__["a" /* default */])(function (v) {
    return typeof v == 'function' ? v : applySpec(v);
  }, spec);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__curryN__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_4__max__["a" /* default */], 0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__pluck__["a" /* default */])('length', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__values__["a" /* default */])(spec))), function () {
    var args = arguments;
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__map__["a" /* default */])(function (f) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__apply__["a" /* default */])(f, args);
    }, spec);
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (applySpec);

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
* Takes a value and applies a function to it.
*
* This function is also known as the `thrush` combinator.
*
* @func
* @memberOf R
 * @since v0.25.0
* @category Function
* @sig a -> (a -> b) -> b
* @param {*} x The value
* @param {Function} f The function to apply
* @return {*} The result of applying `f` to `x`
* @example
*
*      var t42 = R.applyTo(42);
*      t42(R.identity); //=> 42
*      t42(R.add(1)); //=> 43
*/
var applyTo = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function applyTo(x, f) {
  return f(x);
});
/* unused harmony default export */ var _unused_webpack_default_export = (applyTo);

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Makes an ascending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) < fn(b), `1` if fn(b) < fn(a), otherwise `0`
 * @see R.descend
 * @example
 *
 *      var byAge = R.ascend(R.prop('age'));
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByYoungestFirst = R.sort(byAge, people);
 */
var ascend = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function ascend(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa < bb ? -1 : aa > bb ? 1 : 0;
});
/* unused harmony default export */ var _unused_webpack_default_export = (ascend);

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nAry__ = __webpack_require__(39);



/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 2 parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (* -> c) -> (a, b -> c)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 2.
 * @see R.nAry, R.unary
 * @example
 *
 *      var takesThreeArgs = function(a, b, c) {
 *        return [a, b, c];
 *      };
 *      takesThreeArgs.length; //=> 3
 *      takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
 *
 *      var takesTwoArgs = R.binary(takesThreeArgs);
 *      takesTwoArgs.length; //=> 2
 *      // Only 2 arguments are passed to the wrapped function
 *      takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
 * @symb R.binary(f)(a, b, c) = f(a, b)
 */
var binary = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function binary(fn) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__nAry__["a" /* default */])(2, fn);
});
/* unused harmony default export */ var _unused_webpack_default_export = (binary);

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isFunction__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__and__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lift__ = __webpack_require__(37);





/**
 * A function which calls the two provided functions and returns the `&&`
 * of the results.
 * It returns the result of the first function if it is false-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * false-y value.
 *
 * In addition to functions, `R.both` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f A predicate
 * @param {Function} g Another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
 * @see R.and
 * @example
 *
 *      var gt10 = R.gt(R.__, 10)
 *      var lt20 = R.lt(R.__, 20)
 *      var f = R.both(gt10, lt20);
 *      f(15); //=> true
 *      f(30); //=> false
 */
var both = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function both(f, g) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_isFunction__["a" /* default */])(f) ? function _both() {
    return f.apply(this, arguments) && g.apply(this, arguments);
  } : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lift__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__and__["a" /* default */])(f, g);
});
/* unused harmony default export */ var _unused_webpack_default_export = (both);

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry__ = __webpack_require__(47);


/**
 * Returns the result of calling its first argument with the remaining
 * arguments. This is occasionally useful as a converging function for
 * [`R.converge`](#converge): the first branch can produce a function while the
 * remaining branches produce values to be passed to that function as its
 * arguments.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig (*... -> a),*... -> a
 * @param {Function} fn The function to apply to the remaining arguments.
 * @param {...*} args Any number of positional arguments.
 * @return {*}
 * @see R.apply
 * @example
 *
 *      R.call(R.add, 1, 2); //=> 3
 *
 *      var indentN = R.pipe(R.repeat(' '),
 *                           R.join(''),
 *                           R.replace(/^(?!$)/gm));
 *
 *      var format = R.converge(R.call, [
 *                                  R.pipe(R.prop('indent'), indentN),
 *                                  R.prop('value')
 *                              ]);
 *
 *      format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
 * @symb R.call(f, a, b) = f(a, b)
 */
var call = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curry__["a" /* default */])(function call(fn) {
  return fn.apply(this, Array.prototype.slice.call(arguments, 1));
});
/* unused harmony default export */ var _unused_webpack_default_export = (call);

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Restricts a number to be within a range.
 *
 * Also works for other ordered types such as Strings and Dates.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Relation
 * @sig Ord a => a -> a -> a -> a
 * @param {Number} minimum The lower limit of the clamp (inclusive)
 * @param {Number} maximum The upper limit of the clamp (inclusive)
 * @param {Number} value Value to be clamped
 * @return {Number} Returns `minimum` when `val < minimum`, `maximum` when `val > maximum`, returns `val` otherwise
 * @example
 *
 *      R.clamp(1, 10, -5) // => 1
 *      R.clamp(1, 10, 15) // => 10
 *      R.clamp(1, 10, 4)  // => 4
 */
var clamp = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function clamp(min, max, value) {
  if (min > max) {
    throw new Error('min must not be greater than max in clamp(min, max, value)');
  }
  return value < min ? min : value > max ? max : value;
});
/* unused harmony default export */ var _unused_webpack_default_export = (clamp);

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_clone__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry1__ = __webpack_require__(1);



/**
 * Creates a deep copy of the value which may contain (nested) `Array`s and
 * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are
 * assigned by reference rather than copied
 *
 * Dispatches to a `clone` method if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {*} -> {*}
 * @param {*} value The object or array to clone
 * @return {*} A deeply cloned copy of `val`
 * @example
 *
 *      var objects = [{}, {}, {}];
 *      var objectsClone = R.clone(objects);
 *      objects === objectsClone; //=> false
 *      objects[0] === objectsClone[0]; //=> false
 */
var clone = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry1__["a" /* default */])(function clone(value) {
  return value != null && typeof value.clone === 'function' ? value.clone() : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_clone__["a" /* default */])(value, [], [], true);
});
/* unused harmony default export */ var _unused_webpack_default_export = (clone);

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);


/**
 * Makes a comparator function out of a function that reports whether the first
 * element is less than the second.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((a, b) -> Boolean) -> ((a, b) -> Number)
 * @param {Function} pred A predicate function of arity two which will return `true` if the first argument
 * is less than the second, `false` otherwise
 * @return {Function} A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`
 * @example
 *
 *      var byAge = R.comparator((a, b) => a.age < b.age);
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByIncreasingAge = R.sort(byAge, people);
 */
var comparator = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function comparator(pred) {
  return function (a, b) {
    return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
  };
});
/* unused harmony default export */ var _unused_webpack_default_export = (comparator);

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lift__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__not__ = __webpack_require__(100);



/**
 * Takes a function `f` and returns a function `g` such that if called with the same arguments
 * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
 *
 * `R.complement` may be applied to any functor
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> *) -> (*... -> Boolean)
 * @param {Function} f
 * @return {Function}
 * @see R.not
 * @example
 *
 *      var isNotNil = R.complement(R.isNil);
 *      isNil(null); //=> true
 *      isNotNil(null); //=> false
 *      isNil(7); //=> false
 *      isNotNil(7); //=> true
 */
var complement = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lift__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__not__["a" /* default */]);
/* unused harmony default export */ var _unused_webpack_default_export = (complement);

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipeP__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reverse__ = __webpack_require__(42);
/* unused harmony export default */



/**
 * Performs right-to-left composition of one or more Promise-returning
 * functions. The rightmost function may have any arity; the remaining
 * functions must be unary.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((y -> Promise z), (x -> Promise y), ..., (a -> Promise b)) -> (a -> Promise z)
 * @param {...Function} functions The functions to compose
 * @return {Function}
 * @see R.pipeP
 * @example
 *
 *      var db = {
 *        users: {
 *          JOE: {
 *            name: 'Joe',
 *            followers: ['STEVE', 'SUZY']
 *          }
 *        }
 *      }
 *
 *      // We'll pretend to do a db lookup which returns a promise
 *      var lookupUser = (userId) => Promise.resolve(db.users[userId])
 *      var lookupFollowers = (user) => Promise.resolve(user.followers)
 *      lookupUser('JOE').then(lookupFollowers)
 *
 *      //  followersForUser :: String -> Promise [UserId]
 *      var followersForUser = R.composeP(lookupFollowers, lookupUser);
 *      followersForUser('JOE').then(followers => console.log('Followers:', followers))
 *      // Followers: ["STEVE","SUZY"]
 */
function composeP() {
  if (arguments.length === 0) {
    throw new Error('composeP requires at least one argument');
  }
  return __WEBPACK_IMPORTED_MODULE_0__pipeP__["a" /* default */].apply(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__reverse__["a" /* default */])(arguments));
}

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__max__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reduce__ = __webpack_require__(14);






/**
 * Returns a function, `fn`, which encapsulates `if/else, if/else, ...` logic.
 * `R.cond` takes a list of [predicate, transformer] pairs. All of the arguments
 * to `fn` are applied to each of the predicates in turn until one returns a
 * "truthy" value, at which point `fn` returns the result of applying its
 * arguments to the corresponding transformer. If none of the predicates
 * matches, `fn` returns undefined.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Logic
 * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
 * @param {Array} pairs A list of [predicate, transformer]
 * @return {Function}
 * @example
 *
 *      var fn = R.cond([
 *        [R.equals(0),   R.always('water freezes at 0°C')],
 *        [R.equals(100), R.always('water boils at 100°C')],
 *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
 *      ]);
 *      fn(0); //=> 'water freezes at 0°C'
 *      fn(50); //=> 'nothing special happens at 50°C'
 *      fn(100); //=> 'water boils at 100°C'
 */
var cond = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry1__["a" /* default */])(function cond(pairs) {
  var arity = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__max__["a" /* default */], 0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* default */])(function (pair) {
    return pair[0].length;
  }, pairs));
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(arity, function () {
    var idx = 0;
    while (idx < pairs.length) {
      if (pairs[idx][0].apply(this, arguments)) {
        return pairs[idx][1].apply(this, arguments);
      }
      idx += 1;
    }
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (cond);

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constructN__ = __webpack_require__(70);



/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> {*}) -> (* -> {*})
 * @param {Function} fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @see R.invoker
 * @example
 *
 *      // Constructor function
 *      function Animal(kind) {
 *        this.kind = kind;
 *      };
 *      Animal.prototype.sighting = function() {
 *        return "It's a " + this.kind + "!";
 *      }
 *
 *      var AnimalConstructor = R.construct(Animal)
 *
 *      // Notice we no longer need the 'new' keyword:
 *      AnimalConstructor('Pig'); //=> {"kind": "Pig", "sighting": function (){...}};
 *
 *      var animalTypes = ["Lion", "Tiger", "Bear"];
 *      var animalSighting = R.invoker(0, 'sighting');
 *      var sightNewAnimal = R.compose(animalSighting, AnimalConstructor);
 *      R.map(sightNewAnimal, animalTypes); //=> ["It's a Lion!", "It's a Tiger!", "It's a Bear!"]
 */
var construct = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function construct(Fn) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constructN__["a" /* default */])(Fn.length, Fn);
});
/* unused harmony default export */ var _unused_webpack_default_export = (construct);

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_contains__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Returns `true` if the specified value is equal, in [`R.equals`](#equals)
 * terms, to at least one element of the given list; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Boolean
 * @param {Object} a The item to compare against.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
 * @see R.any
 * @example
 *
 *      R.contains(3, [1, 2, 3]); //=> true
 *      R.contains(4, [1, 2, 3]); //=> false
 *      R.contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
 *      R.contains([42], [[42]]); //=> true
 */
var contains = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__internal_contains__["a" /* default */]);
/* unused harmony default export */ var _unused_webpack_default_export = (contains);

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reduceBy__ = __webpack_require__(40);


/**
 * Counts the elements of a list according to how many match each value of a
 * key generated by the supplied function. Returns an object mapping the keys
 * produced by `fn` to the number of occurrences in the list. Note that all
 * keys are coerced to strings because of how JavaScript objects work.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig (a -> String) -> [a] -> {*}
 * @param {Function} fn The function used to map values to keys.
 * @param {Array} list The list to count elements from.
 * @return {Object} An object mapping keys to number of occurrences in the list.
 * @example
 *
 *      var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
 *      R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
 *
 *      var letters = ['a', 'b', 'A', 'a', 'B', 'c'];
 *      R.countBy(R.toLower)(letters);   //=> {'a': 3, 'b': 2, 'c': 1}
 */
var countBy = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__reduceBy__["a" /* default */])(function (acc, elem) {
  return acc + 1;
}, 0);
/* unused harmony default export */ var _unused_webpack_default_export = (countBy);

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add__ = __webpack_require__(27);


/**
 * Decrements its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n - 1
 * @see R.inc
 * @example
 *
 *      R.dec(42); //=> 41
 */
var dec = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__add__["a" /* default */])(-1);
/* unused harmony default export */ var _unused_webpack_default_export = (dec);

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Makes a descending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) > fn(b), `1` if fn(b) > fn(a), otherwise `0`
 * @see R.ascend
 * @example
 *
 *      var byAge = R.descend(R.prop('age'));
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByOldestFirst = R.sort(byAge, people);
 */
var descend = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function descend(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa > bb ? -1 : aa < bb ? 1 : 0;
});
/* unused harmony default export */ var _unused_webpack_default_export = (descend);

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isInteger__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assoc__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dissoc__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__remove__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__update__ = __webpack_require__(62);







/**
 * Makes a shallow clone of an object, omitting the property at the given path.
 * Note that this copies and flattens prototype properties onto the new object
 * as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.11.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {k: v} -> {k: v}
 * @param {Array} path The path to the value to omit
 * @param {Object} obj The object to clone
 * @return {Object} A new object without the property at path
 * @see R.assocPath
 * @example
 *
 *      R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
 */
var dissocPath = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function dissocPath(path, obj) {
  switch (path.length) {
    case 0:
      return obj;
    case 1:
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_isInteger__["a" /* default */])(path[0]) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__remove__["a" /* default */])(path[0], 1, obj) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dissoc__["a" /* default */])(path[0], obj);
    default:
      var head = path[0];
      var tail = Array.prototype.slice.call(path, 1);
      if (obj[head] == null) {
        return obj;
      } else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_isInteger__["a" /* default */])(path[0])) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__update__["a" /* default */])(head, dissocPath(tail, obj[head]), obj);
      } else {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__assoc__["a" /* default */])(head, dissocPath(tail, obj[head]), obj);
      }
  }
});
/* unused harmony default export */ var _unused_webpack_default_export = (dissocPath);

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Divides two numbers. Equivalent to `a / b`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a / b`.
 * @see R.multiply
 * @example
 *
 *      R.divide(71, 100); //=> 0.71
 *
 *      var half = R.divide(R.__, 2);
 *      half(42); //=> 21
 *
 *      var reciprocal = R.divide(1);
 *      reciprocal(4);   //=> 0.25
 */
var divide = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function divide(a, b) {
  return a / b;
});
/* unused harmony default export */ var _unused_webpack_default_export = (divide);

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_dropLast__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_xdropLast__ = __webpack_require__(203);





/**
 * Returns a list containing all but the last `n` elements of the given `list`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements of `list` to skip.
 * @param {Array} list The list of elements to consider.
 * @return {Array} A copy of the list with only the first `list.length - n` elements
 * @see R.takeLast, R.drop, R.dropWhile, R.dropLastWhile
 * @example
 *
 *      R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(3, 'ramda');               //=> 'ra'
 */
var dropLast = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_3__internal_xdropLast__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__internal_dropLast__["a" /* default */]));
/* unused harmony default export */ var _unused_webpack_default_export = (dropLast);

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_dropLastWhile__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_xdropLastWhile__ = __webpack_require__(204);





/**
 * Returns a new list excluding all the tailing elements of a given list which
 * satisfy the supplied predicate function. It passes each value from the right
 * to the supplied predicate function, skipping elements until the predicate
 * function returns a `falsy` value. The predicate function is applied to one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} predicate The function to be called on each element
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array without any trailing elements that return `falsy` values from the `predicate`.
 * @see R.takeLastWhile, R.addIndex, R.drop, R.dropWhile
 * @example
 *
 *      var lteThree = x => x <= 3;
 *
 *      R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
 *
 *      R.dropLastWhile(x => x !== 'd' , 'Ramda'); //=> 'Ramd'
 */
var dropLastWhile = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_3__internal_xdropLastWhile__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__internal_dropLastWhile__["a" /* default */]));
/* unused harmony default export */ var _unused_webpack_default_export = (dropLastWhile);

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xdropRepeatsWith__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropRepeatsWith__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__equals__ = __webpack_require__(8);






/**
 * Returns a new list without any consecutively repeating elements.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *     R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
 */
var dropRepeats = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_xdropRepeatsWith__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_4__equals__["a" /* default */]), /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dropRepeatsWith__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_4__equals__["a" /* default */])));
/* unused harmony default export */ var _unused_webpack_default_export = (dropRepeats);

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xdropWhile__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slice__ = __webpack_require__(11);





/**
 * Returns a new list excluding the leading elements of a given list which
 * satisfy the supplied predicate function. It passes each value to the supplied
 * predicate function, skipping elements while the predicate function returns
 * `true`. The predicate function is applied to one argument: *(value)*.
 *
 * Dispatches to the `dropWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} fn The function called per iteration.
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array.
 * @see R.takeWhile, R.transduce, R.addIndex
 * @example
 *
 *      var lteTwo = x => x <= 2;
 *
 *      R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
 *
 *      R.dropWhile(x => x !== 'd' , 'Ramda'); //=> 'da'
 */
var dropWhile = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['dropWhile'], __WEBPACK_IMPORTED_MODULE_2__internal_xdropWhile__["a" /* default */], function dropWhile(pred, xs) {
  var idx = 0;
  var len = xs.length;
  while (idx < len && pred(xs[idx])) {
    idx += 1;
  }
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__slice__["a" /* default */])(idx, Infinity, xs);
}));
/* unused harmony default export */ var _unused_webpack_default_export = (dropWhile);

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isFunction__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lift__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__or__ = __webpack_require__(102);





/**
 * A function wrapping calls to the two functions in an `||` operation,
 * returning the result of the first function if it is truth-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * truth-y value.
 *
 * In addition to functions, `R.either` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f a predicate
 * @param {Function} g another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
 * @see R.or
 * @example
 *
 *      var gt10 = x => x > 10;
 *      var even = x => x % 2 === 0;
 *      var f = R.either(gt10, even);
 *      f(101); //=> true
 *      f(8); //=> true
 */
var either = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function either(f, g) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_isFunction__["a" /* default */])(f) ? function _either() {
    return f.apply(this, arguments) || g.apply(this, arguments);
  } : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lift__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__or__["a" /* default */])(f, g);
});
/* unused harmony default export */ var _unused_webpack_default_export = (either);

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equals__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__takeLast__ = __webpack_require__(112);




/**
 * Checks if a list ends with the provided values
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> Boolean
 * @sig String -> Boolean
 * @param {*} suffix
 * @param {*} list
 * @return {Boolean}
 * @example
 *
 *      R.endsWith('c', 'abc')                //=> true
 *      R.endsWith('b', 'abc')                //=> false
 *      R.endsWith(['c'], ['a', 'b', 'c'])    //=> true
 *      R.endsWith(['b'], ['a', 'b', 'c'])    //=> false
 */
var endsWith = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function (suffix, list) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__equals__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__takeLast__["a" /* default */])(suffix.length, list), suffix);
});
/* unused harmony default export */ var _unused_webpack_default_export = (endsWith);

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equals__ = __webpack_require__(8);



/**
 * Takes a function and two values in its domain and returns `true` if the
 * values map to the same value in the codomain; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Relation
 * @sig (a -> b) -> a -> a -> Boolean
 * @param {Function} f
 * @param {*} x
 * @param {*} y
 * @return {Boolean}
 * @example
 *
 *      R.eqBy(Math.abs, 5, -5); //=> true
 */
var eqBy = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function eqBy(f, x, y) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__equals__["a" /* default */])(f(x), f(y));
});
/* unused harmony default export */ var _unused_webpack_default_export = (eqBy);

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equals__ = __webpack_require__(8);



/**
 * Reports whether two objects have the same value, in [`R.equals`](#equals)
 * terms, for the specified property. Useful as a curried predicate.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig k -> {k: v} -> {k: v} -> Boolean
 * @param {String} prop The name of the property to compare
 * @param {Object} obj1
 * @param {Object} obj2
 * @return {Boolean}
 *
 * @example
 *
 *      var o1 = { a: 1, b: 2, c: 3, d: 4 };
 *      var o2 = { a: 10, b: 20, c: 3, d: 40 };
 *      R.eqProps('a', o1, o2); //=> false
 *      R.eqProps('c', o1, o2); //=> true
 */
var eqProps = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function eqProps(prop, obj1, obj2) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__equals__["a" /* default */])(obj1[prop], obj2[prop]);
});
/* unused harmony default export */ var _unused_webpack_default_export = (eqProps);

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Creates a new object by recursively evolving a shallow copy of `object`,
 * according to the `transformation` functions. All non-primitive properties
 * are copied by reference.
 *
 * A `transformation` function will not be invoked if its corresponding key
 * does not exist in the evolved object.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {k: (v -> v)} -> {k: v} -> {k: v}
 * @param {Object} transformations The object specifying transformation functions to apply
 *        to the object.
 * @param {Object} object The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *
 *      var tomato  = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
 *      var transformations = {
 *        firstName: R.trim,
 *        lastName: R.trim, // Will not get invoked.
 *        data: {elapsed: R.add(1), remaining: R.add(-1)}
 *      };
 *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
 */
var evolve = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function evolve(transformations, object) {
  var result = {};
  var transformation, key, type;
  for (key in object) {
    transformation = transformations[key];
    type = typeof transformation;
    result[key] = type === 'function' ? transformation(object[key]) : transformation && type === 'object' ? evolve(transformation, object[key]) : object[key];
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (evolve);

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xfind__ = __webpack_require__(207);




/**
 * Returns the first element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Dispatches to the `find` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 *        desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
 *      R.find(R.propEq('a', 4))(xs); //=> undefined
 */
var find = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['find'], __WEBPACK_IMPORTED_MODULE_2__internal_xfind__["a" /* default */], function find(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx += 1;
  }
}));
/* unused harmony default export */ var _unused_webpack_default_export = (find);

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xfindIndex__ = __webpack_require__(208);




/**
 * Returns the index of the first element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.findIndex(R.propEq('a', 2))(xs); //=> 1
 *      R.findIndex(R.propEq('a', 4))(xs); //=> -1
 */
var findIndex = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_2__internal_xfindIndex__["a" /* default */], function findIndex(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}));
/* unused harmony default export */ var _unused_webpack_default_export = (findIndex);

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xfindLast__ = __webpack_require__(209);




/**
 * Returns the last element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
 *      R.findLast(R.propEq('a', 4))(xs); //=> undefined
 */
var findLast = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_2__internal_xfindLast__["a" /* default */], function findLast(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx -= 1;
  }
}));
/* unused harmony default export */ var _unused_webpack_default_export = (findLast);

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xfindLastIndex__ = __webpack_require__(210);




/**
 * Returns the index of the last element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
 *      R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
 */
var findLastIndex = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_2__internal_xfindLastIndex__["a" /* default */], function findLastIndex(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn(list[idx])) {
      return idx;
    }
    idx -= 1;
  }
  return -1;
}));
/* unused harmony default export */ var _unused_webpack_default_export = (findLastIndex);

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_makeFlat__ = __webpack_require__(87);



/**
 * Returns a new list by pulling every item out of it (and all its sub-arrays)
 * and putting them in a new array, depth-first.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b]
 * @param {Array} list The array to consider.
 * @return {Array} The flattened list.
 * @see R.unnest
 * @example
 *
 *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
 *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 */
var flatten = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_makeFlat__["a" /* default */])(true));
/* unused harmony default export */ var _unused_webpack_default_export = (flatten);

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Iterate over an input `list`, calling a provided function `fn` for each
 * element in the list.
 *
 * `fn` receives one argument: *(value)*.
 *
 * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.forEach` method. For more
 * details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
 *
 * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
 * the original array. In some libraries this function is named `each`.
 *
 * Dispatches to the `forEach` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> *) -> [a] -> [a]
 * @param {Function} fn The function to invoke. Receives one argument, `value`.
 * @param {Array} list The list to iterate over.
 * @return {Array} The original list.
 * @see R.addIndex
 * @example
 *
 *      var printXPlusFive = x => console.log(x + 5);
 *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
 *      // logs 6
 *      // logs 7
 *      // logs 8
 * @symb R.forEach(f, [a, b, c]) = [a, b, c]
 */
var forEach = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__["a" /* default */])('forEach', function forEach(fn, list) {
  var len = list.length;
  var idx = 0;
  while (idx < len) {
    fn(list[idx]);
    idx += 1;
  }
  return list;
}));
/* unused harmony default export */ var _unused_webpack_default_export = (forEach);

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys__ = __webpack_require__(13);



/**
 * Iterate over an input `object`, calling a provided function `fn` for each
 * key and value in the object.
 *
 * `fn` receives three argument: *(value, key, obj)*.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Object
 * @sig ((a, String, StrMap a) -> Any) -> StrMap a -> StrMap a
 * @param {Function} fn The function to invoke. Receives three argument, `value`, `key`, `obj`.
 * @param {Object} obj The object to iterate over.
 * @return {Object} The original object.
 * @example
 *
 *      var printKeyConcatValue = (value, key) => console.log(key + ':' + value);
 *      R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
 *      // logs x:1
 *      // logs y:2
 * @symb R.forEachObjIndexed(f, {x: a, y: b}) = {x: a, y: b}
 */
var forEachObjIndexed = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function forEachObjIndexed(fn, obj) {
  var keyList = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__keys__["a" /* default */])(obj);
  var idx = 0;
  while (idx < keyList.length) {
    var key = keyList[idx];
    fn(obj[key], key, obj);
    idx += 1;
  }
  return obj;
});
/* unused harmony default export */ var _unused_webpack_default_export = (forEachObjIndexed);

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);


/**
 * Creates a new object from a list key-value pairs. If a key appears in
 * multiple pairs, the rightmost pair is included in the object.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [[k,v]] -> {k: v}
 * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
 * @return {Object} The object made by pairing up `keys` and `values`.
 * @see R.toPairs, R.pair
 * @example
 *
 *      R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
 */
var fromPairs = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function fromPairs(pairs) {
  var result = {};
  var idx = 0;
  while (idx < pairs.length) {
    result[pairs[idx][0]] = pairs[idx][1];
    idx += 1;
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (fromPairs);

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reduceBy__ = __webpack_require__(40);




/**
 * Splits a list into sub-lists stored in an object, based on the result of
 * calling a String-returning function on each element, and grouping the
 * results according to values returned.
 *
 * Dispatches to the `groupBy` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> String) -> [a] -> {String: [a]}
 * @param {Function} fn Function :: a -> String
 * @param {Array} list The array to group
 * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
 *         that produced that key when passed to `fn`.
 * @see R.transduce
 * @example
 *
 *      var byGrade = R.groupBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Abby', score: 84},
 *                      {name: 'Eddy', score: 58},
 *                      // ...
 *                      {name: 'Jack', score: 69}];
 *      byGrade(students);
 *      // {
 *      //   'A': [{name: 'Dianne', score: 99}],
 *      //   'B': [{name: 'Abby', score: 84}]
 *      //   // ...,
 *      //   'F': [{name: 'Eddy', score: 58}]
 *      // }
 */
var groupBy = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__["a" /* default */])('groupBy', /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reduceBy__["a" /* default */])(function (acc, item) {
  if (acc == null) {
    acc = [];
  }
  acc.push(item);
  return acc;
}, null)));
/* unused harmony default export */ var _unused_webpack_default_export = (groupBy);

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Takes a list and returns a list of lists where each sublist's elements are
 * all satisfied pairwise comparison according to the provided function.
 * Only adjacent elements are passed to the comparison function.
 *
 * @func
 * @memberOf R
 * @since v0.21.0
 * @category List
 * @sig ((a, a) → Boolean) → [a] → [[a]]
 * @param {Function} fn Function for determining whether two given (adjacent)
 *        elements should be in the same group
 * @param {Array} list The array to group. Also accepts a string, which will be
 *        treated as a list of characters.
 * @return {List} A list that contains sublists of elements,
 *         whose concatenations are equal to the original list.
 * @example
 *
 * R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3], [5], [8], [13], [21]]
 *
 * R.groupWith((a, b) => a + 1 === b, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0, 1], [1, 2, 3], [5], [8], [13], [21]]
 *
 * R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3, 5], [8], [13, 21]]
 *
 * R.groupWith(R.eqBy(isVowel), 'aestiou')
 * //=> ['ae', 'st', 'iou']
 */
var groupWith = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function (fn, list) {
  var res = [];
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    var nextidx = idx + 1;
    while (nextidx < len && fn(list[nextidx - 1], list[nextidx])) {
      nextidx += 1;
    }
    res.push(list.slice(idx, nextidx));
    idx = nextidx;
  }
  return res;
});
/* unused harmony default export */ var _unused_webpack_default_export = (groupWith);

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns `true` if the first argument is greater than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.lt
 * @example
 *
 *      R.gt(2, 1); //=> true
 *      R.gt(2, 2); //=> false
 *      R.gt(2, 3); //=> false
 *      R.gt('a', 'z'); //=> false
 *      R.gt('z', 'a'); //=> true
 */
var gt = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function gt(a, b) {
  return a > b;
});
/* unused harmony default export */ var _unused_webpack_default_export = (gt);

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns `true` if the first argument is greater than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.lte
 * @example
 *
 *      R.gte(2, 1); //=> true
 *      R.gte(2, 2); //=> true
 *      R.gte(2, 3); //=> false
 *      R.gte('a', 'z'); //=> false
 *      R.gte('z', 'a'); //=> true
 */
var gte = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function gte(a, b) {
  return a >= b;
});
/* unused harmony default export */ var _unused_webpack_default_export = (gte);

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(6);



/**
 * Returns whether or not an object has an own property with the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      var hasName = R.has('name');
 *      hasName({name: 'alice'});   //=> true
 *      hasName({name: 'bob'});     //=> true
 *      hasName({});                //=> false
 *
 *      var point = {x: 0, y: 0};
 *      var pointHas = R.has(R.__, point);
 *      pointHas('x');  //=> true
 *      pointHas('y');  //=> true
 *      pointHas('z');  //=> false
 */
var has = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */]);
/* unused harmony default export */ var _unused_webpack_default_export = (has);

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns whether or not an object or its prototype chain has a property with
 * the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      function Rectangle(width, height) {
 *        this.width = width;
 *        this.height = height;
 *      }
 *      Rectangle.prototype.area = function() {
 *        return this.width * this.height;
 *      };
 *
 *      var square = new Rectangle(2, 2);
 *      R.hasIn('width', square);  //=> true
 *      R.hasIn('area', square);  //=> true
 */
var hasIn = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function hasIn(prop, obj) {
  return prop in obj;
});
/* unused harmony default export */ var _unused_webpack_default_export = (hasIn);

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nth__ = __webpack_require__(24);


/**
 * Returns the first element of the given list or string. In some libraries
 * this function is named `first`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {Array|String} list
 * @return {*}
 * @see R.tail, R.init, R.last
 * @example
 *
 *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
 *      R.head([]); //=> undefined
 *
 *      R.head('abc'); //=> 'a'
 *      R.head(''); //=> ''
 */
var head = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__nth__["a" /* default */])(0);
/* unused harmony default export */ var _unused_webpack_default_export = (head);

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(5);



/**
 * Creates a function that will process either the `onTrue` or the `onFalse`
 * function depending upon the result of the `condition` predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
 * @param {Function} condition A predicate function
 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
 * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
 * @return {Function} A new unary function that will process either the `onTrue` or the `onFalse`
 *                    function depending upon the result of the `condition` predicate.
 * @see R.unless, R.when
 * @example
 *
 *      var incCount = R.ifElse(
 *        R.has('count'),
 *        R.over(R.lensProp('count'), R.inc),
 *        R.assoc('count', 1)
 *      );
 *      incCount({});           //=> { count: 1 }
 *      incCount({ count: 1 }); //=> { count: 2 }
 */
var ifElse = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function ifElse(condition, onTrue, onFalse) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
    return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (ifElse);

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add__ = __webpack_require__(27);


/**
 * Increments its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n + 1
 * @see R.dec
 * @example
 *
 *      R.inc(42); //=> 43
 */
var inc = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__add__["a" /* default */])(1);
/* unused harmony default export */ var _unused_webpack_default_export = (inc);

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reduceBy__ = __webpack_require__(40);


/**
 * Given a function that generates a key, turns a list of objects into an
 * object indexing the objects by the given key. Note that if multiple
 * objects generate the same value for the indexing key only the last value
 * will be included in the generated object.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> String) -> [{k: v}] -> {k: {k: v}}
 * @param {Function} fn Function :: a -> String
 * @param {Array} array The array of objects to index
 * @return {Object} An object indexing each array element by the given property.
 * @example
 *
 *      var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
 *      R.indexBy(R.prop('id'), list);
 *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
 */
var indexBy = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__reduceBy__["a" /* default */])(function (acc, elem) {
  return elem;
}, null);
/* unused harmony default export */ var _unused_webpack_default_export = (indexBy);

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_indexOf__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_isArray__ = __webpack_require__(15);




/**
 * Returns the position of the first occurrence of an item in an array, or -1
 * if the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.lastIndexOf
 * @example
 *
 *      R.indexOf(3, [1,2,3,4]); //=> 2
 *      R.indexOf(10, [1,2,3,4]); //=> -1
 */
var indexOf = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function indexOf(target, xs) {
  return typeof xs.indexOf === 'function' && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_isArray__["a" /* default */])(xs) ? xs.indexOf(target) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_indexOf__["a" /* default */])(xs, target, 0);
});
/* unused harmony default export */ var _unused_webpack_default_export = (indexOf);

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slice__ = __webpack_require__(11);


/**
 * Returns all but the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.last, R.head, R.tail
 * @example
 *
 *      R.init([1, 2, 3]);  //=> [1, 2]
 *      R.init([1, 2]);     //=> [1]
 *      R.init([1]);        //=> []
 *      R.init([]);         //=> []
 *
 *      R.init('abc');  //=> 'ab'
 *      R.init('ab');   //=> 'a'
 *      R.init('a');    //=> ''
 *      R.init('');     //=> ''
 */
var init = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__slice__["a" /* default */])(0, -1);
/* unused harmony default export */ var _unused_webpack_default_export = (init);

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_containsWith__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_filter__ = __webpack_require__(51);




/**
 * Takes a predicate `pred`, a list `xs`, and a list `ys`, and returns a list
 * `xs'` comprising each of the elements of `xs` which is equal to one or more
 * elements of `ys` according to `pred`.
 *
 * `pred` must be a binary function expecting an element from each list.
 *
 * `xs`, `ys`, and `xs'` are treated as sets, semantically, so ordering should
 * not be significant, but since `xs'` is ordered the implementation guarantees
 * that its values are in the same order as they appear in `xs`. Duplicates are
 * not removed, so `xs'` may contain duplicates if `xs` contains duplicates.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Relation
 * @sig ((a, b) -> Boolean) -> [a] -> [b] -> [a]
 * @param {Function} pred
 * @param {Array} xs
 * @param {Array} ys
 * @return {Array}
 * @see R.intersection
 * @example
 *
 *      R.innerJoin(
 *        (record, id) => record.id === id,
 *        [{id: 824, name: 'Richie Furay'},
 *         {id: 956, name: 'Dewey Martin'},
 *         {id: 313, name: 'Bruce Palmer'},
 *         {id: 456, name: 'Stephen Stills'},
 *         {id: 177, name: 'Neil Young'}],
 *        [177, 456, 999]
 *      );
 *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
 */
var innerJoin = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry3__["a" /* default */])(function innerJoin(pred, xs, ys) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_filter__["a" /* default */])(function (x) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_containsWith__["a" /* default */])(pred, x, ys);
  }, xs);
});
/* unused harmony default export */ var _unused_webpack_default_export = (innerJoin);

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Inserts the supplied element into the list, at the specified `index`. _Note that

 * this is not destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} index The position to insert the element
 * @param {*} elt The element to insert into the Array
 * @param {Array} list The list to insert into
 * @return {Array} A new Array with `elt` inserted at `index`.
 * @example
 *
 *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
 */
var insert = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function insert(idx, elt, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  var result = Array.prototype.slice.call(list, 0);
  result.splice(idx, 0, elt);
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (insert);

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Inserts the sub-list into the list, at the specified `index`. _Note that this is not
 * destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig Number -> [a] -> [a] -> [a]
 * @param {Number} index The position to insert the sub-list
 * @param {Array} elts The sub-list to insert into the Array
 * @param {Array} list The list to insert the sub-list into
 * @return {Array} A new Array with `elts` inserted starting at `index`.
 * @example
 *
 *      R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
 */
var insertAll = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function insertAll(idx, elts, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  return [].concat(Array.prototype.slice.call(list, 0, idx), elts, Array.prototype.slice.call(list, idx));
});
/* unused harmony default export */ var _unused_webpack_default_export = (insertAll);

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contains__ = __webpack_require__(18);


var _Set = /*#__PURE__*/function () {
  function _Set() {
    /* globals Set */
    this._nativeSet = typeof Set === 'function' ? new Set() : null;
    this._items = {};
  }

  // until we figure out why jsdoc chokes on this
  // @param item The item to add to the Set
  // @returns {boolean} true if the item did not exist prior, otherwise false
  //
  _Set.prototype.add = function (item) {
    return !hasOrAdd(item, true, this);
  };

  //
  // @param item The item to check for existence in the Set
  // @returns {boolean} true if the item exists in the Set, otherwise false
  //
  _Set.prototype.has = function (item) {
    return hasOrAdd(item, false, this);
  };

  //
  // Combines the logic for checking whether an item is a member of the set and
  // for adding a new item to the set.
  //
  // @param item       The item to check or add to the Set instance.
  // @param shouldAdd  If true, the item will be added to the set if it doesn't
  //                   already exist.
  // @param set        The set instance to check or add to.
  // @return {boolean} true if the item already existed, otherwise false.
  //
  return _Set;
}();

function hasOrAdd(item, shouldAdd, set) {
  var type = typeof item;
  var prevSize, newSize;
  switch (type) {
    case 'string':
    case 'number':
      // distinguish between +0 and -0
      if (item === 0 && 1 / item === -Infinity) {
        if (set._items['-0']) {
          return true;
        } else {
          if (shouldAdd) {
            set._items['-0'] = true;
          }
          return false;
        }
      }
      // these types can all utilise the native Set
      if (set._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set._nativeSet.size;
          set._nativeSet.add(item);
          newSize = set._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set._nativeSet.has(item);
        }
      } else {
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = {};
            set._items[type][item] = true;
          }
          return false;
        } else if (item in set._items[type]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type][item] = true;
          }
          return false;
        }
      }

    case 'boolean':
      // set._items['boolean'] holds a two element array
      // representing [ falseExists, trueExists ]
      if (type in set._items) {
        var bIdx = item ? 1 : 0;
        if (set._items[type][bIdx]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type][bIdx] = true;
          }
          return false;
        }
      } else {
        if (shouldAdd) {
          set._items[type] = item ? [false, true] : [true, false];
        }
        return false;
      }

    case 'function':
      // compare functions for reference equality
      if (set._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set._nativeSet.size;
          set._nativeSet.add(item);
          newSize = set._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set._nativeSet.has(item);
        }
      } else {
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = [item];
          }
          return false;
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__contains__["a" /* default */])(item, set._items[type])) {
          if (shouldAdd) {
            set._items[type].push(item);
          }
          return false;
        }
        return true;
      }

    case 'undefined':
      if (set._items[type]) {
        return true;
      } else {
        if (shouldAdd) {
          set._items[type] = true;
        }
        return false;
      }

    case 'object':
      if (item === null) {
        if (!set._items['null']) {
          if (shouldAdd) {
            set._items['null'] = true;
          }
          return false;
        }
        return true;
      }
    /* falls through */
    default:
      // reduce the search size of heterogeneous sets by creating buckets
      // for each type.
      type = Object.prototype.toString.call(item);
      if (!(type in set._items)) {
        if (shouldAdd) {
          set._items[type] = [item];
        }
        return false;
      }
      // scan through all previously applied items
      if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__contains__["a" /* default */])(item, set._items[type])) {
        if (shouldAdd) {
          set._items[type].push(item);
        }
        return false;
      }
      return true;
  }
}

// A simple Set type that honours R.equals semantics
/* harmony default export */ __webpack_exports__["a"] = (_Set);

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _aperture;
function _aperture(n, list) {
  var idx = 0;
  var limit = list.length - (n - 1);
  var acc = new Array(limit >= 0 ? limit : 0);
  while (idx < limit) {
    acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
    idx += 1;
  }
  return acc;
}

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _arrayFromIterator;
function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
}

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__take__ = __webpack_require__(59);
/* harmony export (immutable) */ __webpack_exports__["a"] = dropLast;


function dropLast(n, xs) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__take__["a" /* default */])(n < xs.length ? xs.length - n : 0, xs);
}

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slice__ = __webpack_require__(11);
/* harmony export (immutable) */ __webpack_exports__["a"] = dropLastWhile;


function dropLastWhile(pred, xs) {
  var idx = xs.length - 1;
  while (idx >= 0 && pred(xs[idx])) {
    idx -= 1;
  }
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__slice__["a" /* default */])(0, idx + 1, xs);
}

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrayFromIterator__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containsWith__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__functionName__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__has__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identical__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__keys__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__type__ = __webpack_require__(60);
/* harmony export (immutable) */ __webpack_exports__["a"] = _equals;








/**
 * private _uniqContentEquals function.
 * That function is checking equality of 2 iterator contents with 2 assumptions
 * - iterators lengths are the same
 * - iterators values are unique
 *
 * false-positive result will be returned for comparision of, e.g.
 * - [1,2,3] and [1,2,3,4]
 * - [1,1,1] and [1,2,3]
 * */

function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__arrayFromIterator__["a" /* default */])(aIterator);
  var b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__arrayFromIterator__["a" /* default */])(bIterator);

  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  }

  // if *a* array contains any element that is not included in *b*
  return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__containsWith__["a" /* default */])(function (b, aItem) {
    return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__containsWith__["a" /* default */])(eq, aItem, b);
  }, b, a);
}

function _equals(a, b, stackA, stackB) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__identical__["a" /* default */])(a, b)) {
    return true;
  }

  var typeA = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__type__["a" /* default */])(a);

  if (typeA !== __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__type__["a" /* default */])(b)) {
    return false;
  }

  if (a == null || b == null) {
    return false;
  }

  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
  }

  switch (typeA) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__functionName__["a" /* default */])(a.constructor) === 'Promise') {
        return a === b;
      }
      break;
    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__identical__["a" /* default */])(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case 'Date':
      if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__identical__["a" /* default */])(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case 'Error':
      return a.name === b.name && a.message === b.message;
    case 'RegExp':
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }
      break;
  }

  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }

  switch (typeA) {
    case 'Map':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
    case 'Set':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
    case 'Arguments':
    case 'Array':
    case 'Object':
    case 'Boolean':
    case 'Number':
    case 'String':
    case 'Date':
    case 'Error':
    case 'RegExp':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'ArrayBuffer':
      break;
    default:
      // Values of other types are only equal if identical.
      return false;
  }

  var keysA = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__keys__["a" /* default */])(a);
  if (keysA.length !== __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__keys__["a" /* default */])(b).length) {
    return false;
  }

  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);

  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__has__["a" /* default */])(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false;
    }
    idx -= 1;
  }
  return true;
}

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forceReduced__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArrayLike__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reduce__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__xfBase__ = __webpack_require__(4);





var preservingReduced = function (xf) {
  return {
    '@@transducer/init': __WEBPACK_IMPORTED_MODULE_3__xfBase__["a" /* default */].init,
    '@@transducer/result': function (result) {
      return xf['@@transducer/result'](result);
    },
    '@@transducer/step': function (result, input) {
      var ret = xf['@@transducer/step'](result, input);
      return ret['@@transducer/reduced'] ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__forceReduced__["a" /* default */])(ret) : ret;
    }
  };
};

var _flatCat = function _xcat(xf) {
  var rxf = preservingReduced(xf);
  return {
    '@@transducer/init': __WEBPACK_IMPORTED_MODULE_3__xfBase__["a" /* default */].init,
    '@@transducer/result': function (result) {
      return rxf['@@transducer/result'](result);
    },
    '@@transducer/step': function (result, input) {
      return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isArrayLike__["a" /* default */])(input) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reduce__["a" /* default */])(rxf, result, [input]) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reduce__["a" /* default */])(rxf, result, input);
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (_flatCat);

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _forceReduced;
function _forceReduced(x) {
  return {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
}

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _functionName;
function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
}

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isRegExp;
function _isRegExp(x) {
  return Object.prototype.toString.call(x) === '[object RegExp]';
}

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__has__ = __webpack_require__(6);
/* harmony export (immutable) */ __webpack_exports__["a"] = _objectAssign;


// Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
function _objectAssign(target) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var output = Object(target);
  var idx = 1;
  var length = arguments.length;
  while (idx < length) {
    var source = arguments[idx];
    if (source != null) {
      for (var nextKey in source) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__has__["a" /* default */])(nextKey, source)) {
          output[nextKey] = source[nextKey];
        }
      }
    }
    idx += 1;
  }
  return output;
}

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _of;
function _of(x) {
  return [x];
}

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _pipe;
function _pipe(f, g) {
  return function () {
    return g.call(this, f.apply(this, arguments));
  };
}

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _pipeP;
function _pipeP(f, g) {
  return function () {
    var ctx = this;
    return f.apply(ctx, arguments).then(function (x) {
      return g.call(ctx, x);
    });
  };
}

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _quote;
function _quote(s) {
  var escaped = s.replace(/\\/g, '\\\\').replace(/[\b]/g, '\\b') // \b matches word boundary; [\b] matches backspace
  .replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\0/g, '\\0');

  return '"' + escaped.replace(/"/g, '\\"') + '"';
}

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assign__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identity__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isArrayLike__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isTransformer__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objOf__ = __webpack_require__(101);
/* harmony export (immutable) */ __webpack_exports__["a"] = _stepCat;






var _stepCatArray = {
  '@@transducer/init': Array,
  '@@transducer/step': function (xs, x) {
    xs.push(x);
    return xs;
  },
  '@@transducer/result': __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */]
};
var _stepCatString = {
  '@@transducer/init': String,
  '@@transducer/step': function (a, b) {
    return a + b;
  },
  '@@transducer/result': __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */]
};
var _stepCatObject = {
  '@@transducer/init': Object,
  '@@transducer/step': function (result, input) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__assign__["a" /* default */])(result, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isArrayLike__["a" /* default */])(input) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__objOf__["a" /* default */])(input[0], input[1]) : input);
  },
  '@@transducer/result': __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */]
};

function _stepCat(obj) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__isTransformer__["a" /* default */])(obj)) {
    return obj;
  }
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isArrayLike__["a" /* default */])(obj)) {
    return _stepCatArray;
  }
  if (typeof obj === 'string') {
    return _stepCatString;
  }
  if (typeof obj === 'object') {
    return _stepCatObject;
  }
  throw new Error('Cannot create transformer for ' + obj);
}

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
 */
var pad = function pad(n) {
  return (n < 10 ? '0' : '') + n;
};

var _toISOString = typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {
  return d.toISOString();
} : function _toISOString(d) {
  return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
};

/* harmony default export */ __webpack_exports__["a"] = (_toISOString);

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contains__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quote__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toISOString__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__keys__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reject__ = __webpack_require__(41);
/* harmony export (immutable) */ __webpack_exports__["a"] = _toString;







function _toString(x, seen) {
  var recur = function recur(y) {
    var xs = seen.concat([x]);
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__contains__["a" /* default */])(y, xs) ? '<Circular>' : _toString(y, xs);
  };

  //  mapPairs :: (Object, [String]) -> [String]
  var mapPairs = function (obj, keys) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__map__["a" /* default */])(function (k) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__quote__["a" /* default */])(k) + ': ' + recur(obj[k]);
    }, keys.slice().sort());
  };

  switch (Object.prototype.toString.call(x)) {
    case '[object Arguments]':
      return '(function() { return arguments; }(' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__map__["a" /* default */])(recur, x).join(', ') + '))';
    case '[object Array]':
      return '[' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__map__["a" /* default */])(recur, x).concat(mapPairs(x, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reject__["a" /* default */])(function (k) {
        return (/^\d+$/.test(k)
        );
      }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__keys__["a" /* default */])(x)))).join(', ') + ']';
    case '[object Boolean]':
      return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
    case '[object Date]':
      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__quote__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__toISOString__["a" /* default */])(x))) + ')';
    case '[object Null]':
      return 'null';
    case '[object Number]':
      return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
    case '[object String]':
      return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__quote__["a" /* default */])(x);
    case '[object Undefined]':
      return 'undefined';
    default:
      if (typeof x.toString === 'function') {
        var repr = x.toString();
        if (repr !== '[object Object]') {
          return repr;
        }
      }
      return '{' + mapPairs(x, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__keys__["a" /* default */])(x)).join(', ') + '}';
  }
}

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduced__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(4);




var XAll = /*#__PURE__*/function () {
  function XAll(f, xf) {
    this.xf = xf;
    this.f = f;
    this.all = true;
  }
  XAll.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XAll.prototype['@@transducer/result'] = function (result) {
    if (this.all) {
      result = this.xf['@@transducer/step'](result, true);
    }
    return this.xf['@@transducer/result'](result);
  };
  XAll.prototype['@@transducer/step'] = function (result, input) {
    if (!this.f(input)) {
      this.all = false;
      result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__reduced__["a" /* default */])(this.xf['@@transducer/step'](result, false));
    }
    return result;
  };

  return XAll;
}();

var _xall = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xall(f, xf) {
  return new XAll(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xall);

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__concat__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(4);




var XAperture = /*#__PURE__*/function () {
  function XAperture(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XAperture.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XAperture.prototype['@@transducer/result'] = function (result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };
  XAperture.prototype['@@transducer/step'] = function (result, input) {
    this.store(input);
    return this.full ? this.xf['@@transducer/step'](result, this.getCopy()) : result;
  };
  XAperture.prototype.store = function (input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };
  XAperture.prototype.getCopy = function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__concat__["a" /* default */])(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos));
  };

  return XAperture;
}();

var _xaperture = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function _xaperture(n, xf) {
  return new XAperture(n, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xaperture);

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flatCat__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(7);




var _xchain = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xchain(f, xf) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* default */])(f, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__flatCat__["a" /* default */])(xf));
});
/* harmony default export */ __webpack_exports__["a"] = (_xchain);

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(4);



var XDrop = /*#__PURE__*/function () {
  function XDrop(n, xf) {
    this.xf = xf;
    this.n = n;
  }
  XDrop.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XDrop.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].result;
  XDrop.prototype['@@transducer/step'] = function (result, input) {
    if (this.n > 0) {
      this.n -= 1;
      return result;
    }
    return this.xf['@@transducer/step'](result, input);
  };

  return XDrop;
}();

var _xdrop = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xdrop(n, xf) {
  return new XDrop(n, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xdrop);

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(4);



var XDropLast = /*#__PURE__*/function () {
  function XDropLast(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XDropLast.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XDropLast.prototype['@@transducer/result'] = function (result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };
  XDropLast.prototype['@@transducer/step'] = function (result, input) {
    if (this.full) {
      result = this.xf['@@transducer/step'](result, this.acc[this.pos]);
    }
    this.store(input);
    return result;
  };
  XDropLast.prototype.store = function (input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };

  return XDropLast;
}();

var _xdropLast = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xdropLast(n, xf) {
  return new XDropLast(n, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xdropLast);

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduce__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(4);




var XDropLastWhile = /*#__PURE__*/function () {
  function XDropLastWhile(fn, xf) {
    this.f = fn;
    this.retained = [];
    this.xf = xf;
  }
  XDropLastWhile.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XDropLastWhile.prototype['@@transducer/result'] = function (result) {
    this.retained = null;
    return this.xf['@@transducer/result'](result);
  };
  XDropLastWhile.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.retain(result, input) : this.flush(result, input);
  };
  XDropLastWhile.prototype.flush = function (result, input) {
    result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__reduce__["a" /* default */])(this.xf['@@transducer/step'], result, this.retained);
    this.retained = [];
    return this.xf['@@transducer/step'](result, input);
  };
  XDropLastWhile.prototype.retain = function (result, input) {
    this.retained.push(input);
    return result;
  };

  return XDropLastWhile;
}();

var _xdropLastWhile = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xdropLastWhile(fn, xf) {
  return new XDropLastWhile(fn, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xdropLastWhile);

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(4);



var XDropWhile = /*#__PURE__*/function () {
  function XDropWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XDropWhile.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XDropWhile.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].result;
  XDropWhile.prototype['@@transducer/step'] = function (result, input) {
    if (this.f) {
      if (this.f(input)) {
        return result;
      }
      this.f = null;
    }
    return this.xf['@@transducer/step'](result, input);
  };

  return XDropWhile;
}();

var _xdropWhile = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xdropWhile(f, xf) {
  return new XDropWhile(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xdropWhile);

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(4);



var XFilter = /*#__PURE__*/function () {
  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFilter.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XFilter.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].result;
  XFilter.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
  };

  return XFilter;
}();

var _xfilter = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xfilter(f, xf) {
  return new XFilter(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xfilter);

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduced__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(4);




var XFind = /*#__PURE__*/function () {
  function XFind(f, xf) {
    this.xf = xf;
    this.f = f;
    this.found = false;
  }
  XFind.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XFind.prototype['@@transducer/result'] = function (result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, void 0);
    }
    return this.xf['@@transducer/result'](result);
  };
  XFind.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.found = true;
      result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__reduced__["a" /* default */])(this.xf['@@transducer/step'](result, input));
    }
    return result;
  };

  return XFind;
}();

var _xfind = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xfind(f, xf) {
  return new XFind(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xfind);

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduced__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(4);




var XFindIndex = /*#__PURE__*/function () {
  function XFindIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.found = false;
  }
  XFindIndex.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XFindIndex.prototype['@@transducer/result'] = function (result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, -1);
    }
    return this.xf['@@transducer/result'](result);
  };
  XFindIndex.prototype['@@transducer/step'] = function (result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.found = true;
      result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__reduced__["a" /* default */])(this.xf['@@transducer/step'](result, this.idx));
    }
    return result;
  };

  return XFindIndex;
}();

var _xfindIndex = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xfindIndex(f, xf) {
  return new XFindIndex(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xfindIndex);

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(4);



var XFindLast = /*#__PURE__*/function () {
  function XFindLast(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFindLast.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XFindLast.prototype['@@transducer/result'] = function (result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.last));
  };
  XFindLast.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.last = input;
    }
    return result;
  };

  return XFindLast;
}();

var _xfindLast = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xfindLast(f, xf) {
  return new XFindLast(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xfindLast);

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(4);



var XFindLastIndex = /*#__PURE__*/function () {
  function XFindLastIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.lastIdx = -1;
  }
  XFindLastIndex.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XFindLastIndex.prototype['@@transducer/result'] = function (result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.lastIdx));
  };
  XFindLastIndex.prototype['@@transducer/step'] = function (result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.lastIdx = this.idx;
    }
    return result;
  };

  return XFindLastIndex;
}();

var _xfindLastIndex = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xfindLastIndex(f, xf) {
  return new XFindLastIndex(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xfindLastIndex);

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(4);



var XMap = /*#__PURE__*/function () {
  function XMap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XMap.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XMap.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].result;
  XMap.prototype['@@transducer/step'] = function (result, input) {
    return this.xf['@@transducer/step'](result, this.f(input));
  };

  return XMap;
}();

var _xmap = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xmap(f, xf) {
  return new XMap(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xmap);

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curryN__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__has__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(4);




var XReduceBy = /*#__PURE__*/function () {
  function XReduceBy(valueFn, valueAcc, keyFn, xf) {
    this.valueFn = valueFn;
    this.valueAcc = valueAcc;
    this.keyFn = keyFn;
    this.xf = xf;
    this.inputs = {};
  }
  XReduceBy.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XReduceBy.prototype['@@transducer/result'] = function (result) {
    var key;
    for (key in this.inputs) {
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__has__["a" /* default */])(key, this.inputs)) {
        result = this.xf['@@transducer/step'](result, this.inputs[key]);
        if (result['@@transducer/reduced']) {
          result = result['@@transducer/value'];
          break;
        }
      }
    }
    this.inputs = null;
    return this.xf['@@transducer/result'](result);
  };
  XReduceBy.prototype['@@transducer/step'] = function (result, input) {
    var key = this.keyFn(input);
    this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
    this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
    return result;
  };

  return XReduceBy;
}();

var _xreduceBy = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curryN__["a" /* default */])(4, [], function _xreduceBy(valueFn, valueAcc, keyFn, xf) {
  return new XReduceBy(valueFn, valueAcc, keyFn, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xreduceBy);

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduced__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(4);




var XTake = /*#__PURE__*/function () {
  function XTake(n, xf) {
    this.xf = xf;
    this.n = n;
    this.i = 0;
  }
  XTake.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XTake.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].result;
  XTake.prototype['@@transducer/step'] = function (result, input) {
    this.i += 1;
    var ret = this.n === 0 ? result : this.xf['@@transducer/step'](result, input);
    return this.n >= 0 && this.i >= this.n ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__reduced__["a" /* default */])(ret) : ret;
  };

  return XTake;
}();

var _xtake = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xtake(n, xf) {
  return new XTake(n, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xtake);

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduced__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(4);




var XTakeWhile = /*#__PURE__*/function () {
  function XTakeWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTakeWhile.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XTakeWhile.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].result;
  XTakeWhile.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__reduced__["a" /* default */])(result);
  };

  return XTakeWhile;
}();

var _xtakeWhile = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xtakeWhile(f, xf) {
  return new XTakeWhile(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xtakeWhile);

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(4);



var XTap = /*#__PURE__*/function () {
  function XTap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTap.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XTap.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].result;
  XTap.prototype['@@transducer/step'] = function (result, input) {
    this.f(input);
    return this.xf['@@transducer/step'](result, input);
  };

  return XTap;
}();

var _xtap = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xtap(f, xf) {
  return new XTap(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xtap);

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_contains__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_filter__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flip__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__uniq__ = __webpack_require__(61);






/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The list of elements found in both `list1` and `list2`.
 * @see R.innerJoin
 * @example
 *
 *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
 */
var intersection = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function intersection(list1, list2) {
  var lookupList, filteredList;
  if (list1.length > list2.length) {
    lookupList = list1;
    filteredList = list2;
  } else {
    lookupList = list2;
    filteredList = list1;
  }
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__uniq__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_filter__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__flip__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__internal_contains__["a" /* default */])(lookupList), filteredList));
});
/* unused harmony default export */ var _unused_webpack_default_export = (intersection);

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Creates a new list with the separator interposed between elements.
 *
 * Dispatches to the `intersperse` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} separator The element to add to the list.
 * @param {Array} list The list to be interposed.
 * @return {Array} The new list.
 * @example
 *
 *      R.intersperse('n', ['ba', 'a', 'a']); //=> ['ba', 'n', 'a', 'n', 'a']
 */
var intersperse = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__["a" /* default */])('intersperse', function intersperse(separator, list) {
  var out = [];
  var idx = 0;
  var length = list.length;
  while (idx < length) {
    if (idx === length - 1) {
      out.push(list[idx]);
    } else {
      out.push(list[idx], separator);
    }
    idx += 1;
  }
  return out;
}));
/* unused harmony default export */ var _unused_webpack_default_export = (intersperse);

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_clone__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_isTransformer__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_reduce__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_stepCat__ = __webpack_require__(196);






/**
 * Transforms the items of the list with the transducer and appends the
 * transformed items to the accumulator using an appropriate iterator function
 * based on the accumulator type.
 *
 * The accumulator can be an array, string, object or a transformer. Iterated
 * items will be appended to arrays and concatenated to strings. Objects will
 * be merged directly or 2-item arrays will be merged as key, value pairs.
 *
 * The accumulator can also be a transformer object that provides a 2-arity
 * reducing iterator function, step, 0-arity initial value function, init, and
 * 1-arity result extraction function result. The step function is used as the
 * iterator function in reduce. The result function is used to convert the
 * final accumulator into the return type and in most cases is R.identity. The
 * init function is used to provide the initial accumulator.
 *
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the
 * transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig a -> (b -> b) -> [c] -> a
 * @param {*} acc The initial accumulator value.
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *
 *      R.into([], transducer, numbers); //=> [2, 3]
 *
 *      var intoArray = R.into([]);
 *      intoArray(transducer, numbers); //=> [2, 3]
 */
var into = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry3__["a" /* default */])(function into(acc, xf, list) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_isTransformer__["a" /* default */])(acc) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__internal_reduce__["a" /* default */])(xf(acc), acc['@@transducer/init'](), list) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__internal_reduce__["a" /* default */])(xf(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__internal_stepCat__["a" /* default */])(acc)), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_clone__["a" /* default */])(acc, [], [], false), list);
});
/* unused harmony default export */ var _unused_webpack_default_export = (into);

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keys__ = __webpack_require__(13);




/**
 * Same as [`R.invertObj`](#invertObj), however this accounts for objects with
 * duplicate values by putting the values into an array.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: [ s, ... ]}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object with keys in an array.
 * @see R.invertObj
 * @example
 *
 *      var raceResultsByFirstName = {
 *        first: 'alice',
 *        second: 'jake',
 *        third: 'alice',
 *      };
 *      R.invert(raceResultsByFirstName);
 *      //=> { 'alice': ['first', 'third'], 'jake':['second'] }
 */
var invert = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function invert(obj) {
  var props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__keys__["a" /* default */])(obj);
  var len = props.length;
  var idx = 0;
  var out = {};

  while (idx < len) {
    var key = props[idx];
    var val = obj[key];
    var list = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(val, out) ? out[val] : out[val] = [];
    list[list.length] = key;
    idx += 1;
  }
  return out;
});
/* unused harmony default export */ var _unused_webpack_default_export = (invert);

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys__ = __webpack_require__(13);



/**
 * Returns a new object with the keys of the given object as values, and the
 * values of the given object, which are coerced to strings, as keys. Note
 * that the last key found is preferred when handling the same value.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: s}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object
 * @see R.invert
 * @example
 *
 *      var raceResults = {
 *        first: 'alice',
 *        second: 'jake'
 *      };
 *      R.invertObj(raceResults);
 *      //=> { 'alice': 'first', 'jake':'second' }
 *
 *      // Alternatively:
 *      var raceResults = ['alice', 'jake'];
 *      R.invertObj(raceResults);
 *      //=> { 'alice': '0', 'jake':'1' }
 */
var invertObj = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function invertObj(obj) {
  var props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__keys__["a" /* default */])(obj);
  var len = props.length;
  var idx = 0;
  var out = {};

  while (idx < len) {
    var key = props[idx];
    out[obj[key]] = key;
    idx += 1;
  }
  return out;
});
/* unused harmony default export */ var _unused_webpack_default_export = (invertObj);

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__empty__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equals__ = __webpack_require__(8);




/**
 * Returns `true` if the given value is its type's empty value; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> Boolean
 * @param {*} x
 * @return {Boolean}
 * @see R.empty
 * @example
 *
 *      R.isEmpty([1, 2, 3]);   //=> false
 *      R.isEmpty([]);          //=> true
 *      R.isEmpty('');          //=> true
 *      R.isEmpty(null);        //=> false
 *      R.isEmpty({});          //=> true
 *      R.isEmpty({length: 0}); //=> false
 */
var isEmpty = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function isEmpty(x) {
  return x != null && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__equals__["a" /* default */])(x, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__empty__["a" /* default */])(x));
});
/* unused harmony default export */ var _unused_webpack_default_export = (isEmpty);

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__invoker__ = __webpack_require__(23);


/**
 * Returns a string made by inserting the `separator` between each element and
 * concatenating all the elements into a single string.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig String -> [a] -> String
 * @param {Number|String} separator The string used to separate the elements.
 * @param {Array} xs The elements to join into a string.
 * @return {String} str The string made by concatenating `xs` with `separator`.
 * @see R.split
 * @example
 *
 *      var spacer = R.join(' ');
 *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
 *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
 */
var join = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__invoker__["a" /* default */])(1, 'join');
/* unused harmony default export */ var _unused_webpack_default_export = (join);

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);


/**
 * Returns a list containing the names of all the properties of the supplied
 * object, including prototype properties.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own and prototype properties.
 * @see R.keys, R.valuesIn
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.keysIn(f); //=> ['x', 'y']
 */
var keysIn = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function keysIn(obj) {
  var prop;
  var ks = [];
  for (prop in obj) {
    ks[ks.length] = prop;
  }
  return ks;
});
/* unused harmony default export */ var _unused_webpack_default_export = (keysIn);

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isArray__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equals__ = __webpack_require__(8);




/**
 * Returns the position of the last occurrence of an item in an array, or -1 if
 * the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.indexOf
 * @example
 *
 *      R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
 *      R.lastIndexOf(10, [1,2,3,4]); //=> -1
 */
var lastIndexOf = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function lastIndexOf(target, xs) {
  if (typeof xs.lastIndexOf === 'function' && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_isArray__["a" /* default */])(xs)) {
    return xs.lastIndexOf(target);
  } else {
    var idx = xs.length - 1;
    while (idx >= 0) {
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__equals__["a" /* default */])(xs[idx], target)) {
        return idx;
      }
      idx -= 1;
    }
    return -1;
  }
});
/* unused harmony default export */ var _unused_webpack_default_export = (lastIndexOf);

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lens__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__update__ = __webpack_require__(62);





/**
 * Returns a lens whose focus is the specified index.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Number -> Lens s a
 * @param {Number} n
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *
 *      R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
 *      R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
 *      R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
 */
var lensIndex = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function lensIndex(n) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lens__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__nth__["a" /* default */])(n), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__update__["a" /* default */])(n));
});
/* unused harmony default export */ var _unused_webpack_default_export = (lensIndex);

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assocPath__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lens__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__path__ = __webpack_require__(20);





/**
 * Returns a lens whose focus is the specified path.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @typedefn Idx = String | Int
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig [Idx] -> Lens s a
 * @param {Array} path The path to use.
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var xHeadYLens = R.lensPath(['x', 0, 'y']);
 *
 *      R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> 2
 *      R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
 *      R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
 */
var lensPath = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function lensPath(p) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lens__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__path__["a" /* default */])(p), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__assocPath__["a" /* default */])(p));
});
/* unused harmony default export */ var _unused_webpack_default_export = (lensPath);

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assoc__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lens__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prop__ = __webpack_require__(57);





/**
 * Returns a lens whose focus is the specified property.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig String -> Lens s a
 * @param {String} k
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */
var lensProp = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function lensProp(k) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lens__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__prop__["a" /* default */])(k), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__assoc__["a" /* default */])(k));
});
/* unused harmony default export */ var _unused_webpack_default_export = (lensProp);

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns `true` if the first argument is less than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.gt
 * @example
 *
 *      R.lt(2, 1); //=> false
 *      R.lt(2, 2); //=> false
 *      R.lt(2, 3); //=> true
 *      R.lt('a', 'z'); //=> true
 *      R.lt('z', 'a'); //=> false
 */
var lt = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function lt(a, b) {
  return a < b;
});
/* unused harmony default export */ var _unused_webpack_default_export = (lt);

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns `true` if the first argument is less than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.gte
 * @example
 *
 *      R.lte(2, 1); //=> false
 *      R.lte(2, 2); //=> true
 *      R.lte(2, 3); //=> true
 *      R.lte('a', 'z'); //=> true
 *      R.lte('z', 'a'); //=> false
 */
var lte = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function lte(a, b) {
  return a <= b;
});
/* unused harmony default export */ var _unused_webpack_default_export = (lte);

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * The `mapAccum` function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from left to right, and returning a final value of this
 * accumulator together with the new list.
 *
 * The iterator function receives two arguments, *acc* and *value*, and should
 * return a tuple *[acc, value]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig ((acc, x) -> (acc, y)) -> acc -> [x] -> (acc, [y])
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.addIndex, R.mapAccumRight
 * @example
 *
 *      var digits = ['1', '2', '3', '4'];
 *      var appender = (a, b) => [a + b, a + b];
 *
 *      R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]
 * @symb R.mapAccum(f, a, [b, c, d]) = [
 *   f(f(f(a, b)[0], c)[0], d)[0],
 *   [
 *     f(a, b)[1],
 *     f(f(a, b)[0], c)[1],
 *     f(f(f(a, b)[0], c)[0], d)[1]
 *   ]
 * ]
 */
var mapAccum = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function mapAccum(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var tuple = [acc];
  while (idx < len) {
    tuple = fn(tuple[0], list[idx]);
    result[idx] = tuple[1];
    idx += 1;
  }
  return [tuple[0], result];
});
/* unused harmony default export */ var _unused_webpack_default_export = (mapAccum);

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * The `mapAccumRight` function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from right to left, and returning a final value of this
 * accumulator together with the new list.
 *
 * Similar to [`mapAccum`](#mapAccum), except moves through the input list from
 * the right to the left.
 *
 * The iterator function receives two arguments, *value* and *acc*, and should
 * return a tuple *[value, acc]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig ((x, acc) -> (y, acc)) -> acc -> [x] -> ([y], acc)
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.addIndex, R.mapAccum
 * @example
 *
 *      var digits = ['1', '2', '3', '4'];
 *      var append = (a, b) => [a + b, a + b];
 *
 *      R.mapAccumRight(append, 5, digits); //=> [['12345', '2345', '345', '45'], '12345']
 * @symb R.mapAccumRight(f, a, [b, c, d]) = [
 *   [
 *     f(b, f(c, f(d, a)[0])[0])[1],
 *     f(c, f(d, a)[0])[1],
 *     f(d, a)[1],
 *   ]
 *   f(b, f(c, f(d, a)[0])[0])[0],
 * ]
 */
var mapAccumRight = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function mapAccumRight(fn, acc, list) {
  var idx = list.length - 1;
  var result = [];
  var tuple = [acc];
  while (idx >= 0) {
    tuple = fn(list[idx], tuple[0]);
    result[idx] = tuple[1];
    idx -= 1;
  }
  return [result, tuple[0]];
});
/* unused harmony default export */ var _unused_webpack_default_export = (mapAccumRight);

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_reduce__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keys__ = __webpack_require__(13);




/**
 * An Object-specific version of [`map`](#map). The function is applied to three
 * arguments: *(value, key, obj)*. If only the value is significant, use
 * [`map`](#map) instead.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig ((*, String, Object) -> *) -> Object -> Object
 * @param {Function} fn
 * @param {Object} obj
 * @return {Object}
 * @see R.map
 * @example
 *
 *      var values = { x: 1, y: 2, z: 3 };
 *      var prependKeyAndDouble = (num, key, obj) => key + (num * 2);
 *
 *      R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }
 */
var mapObjIndexed = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function mapObjIndexed(fn, obj) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_reduce__["a" /* default */])(function (acc, key) {
    acc[key] = fn(obj[key], key, obj);
    return acc;
  }, {}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__keys__["a" /* default */])(obj));
});
/* unused harmony default export */ var _unused_webpack_default_export = (mapObjIndexed);

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Tests a regular expression against a String. Note that this function will
 * return an empty array when there are no matches. This differs from
 * [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
 * which returns `null` when there are no matches.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig RegExp -> String -> [String | Undefined]
 * @param {RegExp} rx A regular expression.
 * @param {String} str The string to match against
 * @return {Array} The list of matches or empty array.
 * @see R.test
 * @example
 *
 *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
 *      R.match(/a/, 'b'); //=> []
 *      R.match(/a/, null); //=> TypeError: null does not have a method named "match"
 */
var match = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function match(rx, str) {
  return str.match(rx) || [];
});
/* unused harmony default export */ var _unused_webpack_default_export = (match);

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isInteger__ = __webpack_require__(53);



/**
 * `mathMod` behaves like the modulo operator should mathematically, unlike the
 * `%` operator (and by extension, [`R.modulo`](#modulo)). So while
 * `-17 % 5` is `-2`, `mathMod(-17, 5)` is `3`. `mathMod` requires Integer
 * arguments, and returns NaN when the modulus is zero or negative.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} m The dividend.
 * @param {Number} p the modulus.
 * @return {Number} The result of `b mod a`.
 * @see R.modulo
 * @example
 *
 *      R.mathMod(-17, 5);  //=> 3
 *      R.mathMod(17, 5);   //=> 2
 *      R.mathMod(17, -5);  //=> NaN
 *      R.mathMod(17, 0);   //=> NaN
 *      R.mathMod(17.2, 5); //=> NaN
 *      R.mathMod(17, 5.3); //=> NaN
 *
 *      var clock = R.mathMod(R.__, 12);
 *      clock(15); //=> 3
 *      clock(24); //=> 0
 *
 *      var seventeenMod = R.mathMod(17);
 *      seventeenMod(3);  //=> 2
 *      seventeenMod(4);  //=> 1
 *      seventeenMod(10); //=> 7
 */
var mathMod = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function mathMod(m, p) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_isInteger__["a" /* default */])(m)) {
    return NaN;
  }
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_isInteger__["a" /* default */])(p) || p < 1) {
    return NaN;
  }
  return (m % p + p) % p;
});
/* unused harmony default export */ var _unused_webpack_default_export = (mathMod);

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Takes a function and two values, and returns whichever value produces the
 * larger result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.max, R.minBy
 * @example
 *
 *      //  square :: Number -> Number
 *      var square = n => n * n;
 *
 *      R.maxBy(square, -3, 2); //=> -3
 *
 *      R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
 *      R.reduce(R.maxBy(square), 0, []); //=> 0
 */
var maxBy = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function maxBy(f, a, b) {
  return f(b) > f(a) ? b : a;
});
/* unused harmony default export */ var _unused_webpack_default_export = (maxBy);

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mean__ = __webpack_require__(97);



/**
 * Returns the median of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @see R.mean
 * @example
 *
 *      R.median([2, 9, 7]); //=> 7
 *      R.median([7, 2, 10, 9]); //=> 8
 *      R.median([]); //=> NaN
 */
var median = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function median(list) {
  var len = list.length;
  if (len === 0) {
    return NaN;
  }
  var width = 2 - len % 2;
  var idx = (len - width) / 2;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__mean__["a" /* default */])(Array.prototype.slice.call(list, 0).sort(function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }).slice(idx, idx + width));
});
/* unused harmony default export */ var _unused_webpack_default_export = (median);

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__memoizeWith__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toString__ = __webpack_require__(26);



/**
 * Creates a new function that, when invoked, caches the result of calling `fn`
 * for a given argument set and returns the result. Subsequent calls to the
 * memoized `fn` with the same argument set will not result in an additional
 * call to `fn`; instead, the cached result for that set of arguments will be
 * returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (*... -> a) -> (*... -> a)
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @see R.memoizeWith
 * @deprecated since v0.25.0
 * @example
 *
 *      let count = 0;
 *      const factorial = R.memoize(n => {
 *        count += 1;
 *        return R.product(R.range(1, n + 1));
 *      });
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      count; //=> 1
 */
var memoize = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__memoizeWith__["a" /* default */])(function () {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toString__["a" /* default */])(arguments);
});
/* unused harmony default export */ var _unused_webpack_default_export = (memoize);

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_assign__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects,
 * the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepRight, R.mergeWith, R.mergeWithKey
 * @example
 *
 *      R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
 *      //=> { 'name': 'fred', 'age': 40 }
 *
 *      var resetToDefault = R.merge(R.__, {x: 0});
 *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
 * @symb R.merge({ x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: 5, z: 3 }
 */
var merge = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function merge(l, r) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_assign__["a" /* default */])({}, l, r);
});
/* unused harmony default export */ var _unused_webpack_default_export = (merge);

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_assign__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry1__ = __webpack_require__(1);



/**
 * Merges a list of objects together into one object.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig [{k: v}] -> {k: v}
 * @param {Array} list An array of objects
 * @return {Object} A merged object.
 * @see R.reduce
 * @example
 *
 *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
 *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
 * @symb R.mergeAll([{ x: 1 }, { y: 2 }, { z: 3 }]) = { x: 1, y: 2, z: 3 }
 */
var mergeAll = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry1__["a" /* default */])(function mergeAll(list) {
  return __WEBPACK_IMPORTED_MODULE_0__internal_assign__["a" /* default */].apply(null, [{}].concat(list));
});
/* unused harmony default export */ var _unused_webpack_default_export = (mergeAll);

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mergeDeepWithKey__ = __webpack_require__(38);



/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the first object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepRight, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepLeft({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                      { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}
 */
var mergeDeepLeft = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function mergeDeepLeft(lObj, rObj) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__mergeDeepWithKey__["a" /* default */])(function (k, lVal, rVal) {
    return lVal;
  }, lObj, rObj);
});
/* unused harmony default export */ var _unused_webpack_default_export = (mergeDeepLeft);

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mergeDeepWithKey__ = __webpack_require__(38);



/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepLeft, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                       { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
 */
var mergeDeepRight = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function mergeDeepRight(lObj, rObj) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__mergeDeepWithKey__["a" /* default */])(function (k, lVal, rVal) {
    return rVal;
  }, lObj, rObj);
});
/* unused harmony default export */ var _unused_webpack_default_export = (mergeDeepRight);

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mergeDeepWithKey__ = __webpack_require__(38);



/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to associated values using the
 *   resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig ((a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWith, R.mergeDeep, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepWith(R.concat,
 *                      { a: true, c: { values: [10, 20] }},
 *                      { b: true, c: { values: [15, 35] }});
 *      //=> { a: true, b: true, c: { values: [10, 20, 15, 35] }}
 */
var mergeDeepWith = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function mergeDeepWith(fn, lObj, rObj) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__mergeDeepWithKey__["a" /* default */])(function (k, lVal, rVal) {
    return fn(lVal, rVal);
  }, lObj, rObj);
});
/* unused harmony default export */ var _unused_webpack_default_export = (mergeDeepWith);

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mergeWithKey__ = __webpack_require__(56);



/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the values
 * associated with the key in each object, with the result being used as the
 * value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig ((a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWith, R.merge, R.mergeWithKey
 * @example
 *
 *      R.mergeWith(R.concat,
 *                  { a: true, values: [10, 20] },
 *                  { b: true, values: [15, 35] });
 *      //=> { a: true, b: true, values: [10, 20, 15, 35] }
 */
var mergeWith = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function mergeWith(fn, l, r) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__mergeWithKey__["a" /* default */])(function (_, _l, _r) {
    return fn(_l, _r);
  }, l, r);
});
/* unused harmony default export */ var _unused_webpack_default_export = (mergeWith);

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns the smaller of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.minBy, R.max
 * @example
 *
 *      R.min(789, 123); //=> 123
 *      R.min('a', 'b'); //=> 'a'
 */
var min = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function min(a, b) {
  return b < a ? b : a;
});
/* unused harmony default export */ var _unused_webpack_default_export = (min);

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Takes a function and two values, and returns whichever value produces the
 * smaller result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.min, R.maxBy
 * @example
 *
 *      //  square :: Number -> Number
 *      var square = n => n * n;
 *
 *      R.minBy(square, -3, 2); //=> 2
 *
 *      R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
 *      R.reduce(R.minBy(square), Infinity, []); //=> Infinity
 */
var minBy = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function minBy(f, a, b) {
  return f(b) < f(a) ? b : a;
});
/* unused harmony default export */ var _unused_webpack_default_export = (minBy);

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Divides the first parameter by the second and returns the remainder. Note
 * that this function preserves the JavaScript-style behavior for modulo. For
 * mathematical modulo see [`mathMod`](#mathMod).
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The value to the divide.
 * @param {Number} b The pseudo-modulus
 * @return {Number} The result of `b % a`.
 * @see R.mathMod
 * @example
 *
 *      R.modulo(17, 3); //=> 2
 *      // JS behavior:
 *      R.modulo(-17, 3); //=> -2
 *      R.modulo(17, -3); //=> 2
 *
 *      var isOdd = R.modulo(R.__, 2);
 *      isOdd(42); //=> 0
 *      isOdd(21); //=> 1
 */
var modulo = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function modulo(a, b) {
  return a % b;
});
/* unused harmony default export */ var _unused_webpack_default_export = (modulo);

/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);


/**
 * Negates its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number}
 * @example
 *
 *      R.negate(42); //=> -42
 */
var negate = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function negate(n) {
  return -n;
});
/* unused harmony default export */ var _unused_webpack_default_export = (negate);

/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_complement__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_xany__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__any__ = __webpack_require__(65);






/**
 * Returns `true` if no elements of the list match the predicate, `false`
 * otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is not satisfied by every element, `false` otherwise.
 * @see R.all, R.any
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *      var isOdd = n => n % 2 === 1;
 *
 *      R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
 *      R.none(isOdd, [1, 3, 5, 7, 8, 11]); //=> false
 */
var none = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_complement__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_dispatchable__["a" /* default */])(['any'], __WEBPACK_IMPORTED_MODULE_3__internal_xany__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__any__["a" /* default */])));
/* unused harmony default export */ var _unused_webpack_default_export = (none);

/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nth__ = __webpack_require__(24);




/**
 * Returns a function which returns its nth argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig Number -> *... -> *
 * @param {Number} n
 * @return {Function}
 * @example
 *
 *      R.nthArg(1)('a', 'b', 'c'); //=> 'b'
 *      R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
 * @symb R.nthArg(-1)(a, b, c) = c
 * @symb R.nthArg(0)(a, b, c) = a
 * @symb R.nthArg(1)(a, b, c) = b
 */
var nthArg = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function nthArg(n) {
  var arity = n < 0 ? 1 : n + 1;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(arity, function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__nth__["a" /* default */])(n, arguments);
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (nthArg);

/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * `o` is a curried composition function that returns a unary function.
 * Like [`compose`](#compose), `o` performs right-to-left function composition.
 * Unlike [`compose`](#compose), the rightmost function passed to `o` will be
 * invoked with only one argument.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Function
 * @sig (b -> c) -> (a -> b) -> a -> c
 * @param {Function} f
 * @param {Function} g
 * @return {Function}
 * @see R.compose, R.pipe
 * @example
 *
 *      var classyGreeting = name => "The name's " + name.last + ", " + name.first + " " + name.last
 *      var yellGreeting = R.o(R.toUpper, classyGreeting);
 *      yellGreeting({first: 'James', last: 'Bond'}); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.o(R.multiply(10), R.add(10))(-4) //=> 60
 *
 * @symb R.o(f, g, x) = f(g(x))
 */
var o = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function o(f, g, x) {
  return f(g(x));
});
/* unused harmony default export */ var _unused_webpack_default_export = (o);

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_of__ = __webpack_require__(192);



/**
 * Returns a singleton array containing the value provided.
 *
 * Note this `of` is different from the ES6 `of`; See
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> [a]
 * @param {*} x any value
 * @return {Array} An array wrapping `x`.
 * @example
 *
 *      R.of(null); //=> [null]
 *      R.of([42]); //=> [[42]]
 */
var of = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__internal_of__["a" /* default */]);
/* unused harmony default export */ var _unused_webpack_default_export = (of);

/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [String] -> {String: *} -> {String: *}
 * @param {Array} names an array of String property names to omit from the new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with properties from `names` not on it.
 * @see R.pick
 * @example
 *
 *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
 */
var omit = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function omit(names, obj) {
  var result = {};
  var index = {};
  var idx = 0;
  var len = names.length;

  while (idx < len) {
    index[names[idx]] = 1;
    idx += 1;
  }

  for (var prop in obj) {
    if (!index.hasOwnProperty(prop)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (omit);

/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry1__ = __webpack_require__(1);



/**
 * Accepts a function `fn` and returns a function that guards invocation of
 * `fn` such that `fn` can only ever be called once, no matter how many times
 * the returned function is invoked. The first value calculated is returned in
 * subsequent invocations.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a... -> b) -> (a... -> b)
 * @param {Function} fn The function to wrap in a call-only-once wrapper.
 * @return {Function} The wrapped function.
 * @example
 *
 *      var addOneOnce = R.once(x => x + 1);
 *      addOneOnce(10); //=> 11
 *      addOneOnce(addOneOnce(50)); //=> 11
 */
var once = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry1__["a" /* default */])(function once(fn) {
  var called = false;
  var result;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(fn.length, function () {
    if (called) {
      return result;
    }
    called = true;
    result = fn.apply(this, arguments);
    return result;
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (once);

/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Takes two arguments, `fst` and `snd`, and returns `[fst, snd]`.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category List
 * @sig a -> b -> (a,b)
 * @param {*} fst
 * @param {*} snd
 * @return {Array}
 * @see R.objOf, R.of
 * @example
 *
 *      R.pair('foo', 'bar'); //=> ['foo', 'bar']
 */
var pair = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function pair(fst, snd) {
  return [fst, snd];
});
/* unused harmony default export */ var _unused_webpack_default_export = (pair);

/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_createPartialApplicator__ = __webpack_require__(83);



/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided initially followed by the arguments provided to `g`.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [a, b, c, ...] -> ((d, e, f, ..., n) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partialRight
 * @example
 *
 *      var multiply2 = (a, b) => a * b;
 *      var double = R.partial(multiply2, [2]);
 *      double(2); //=> 4
 *
 *      var greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      var sayHello = R.partial(greet, ['Hello']);
 *      var sayHelloToMs = R.partial(sayHello, ['Ms.']);
 *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partial(f, [a, b])(c, d) = f(a, b, c, d)
 */
var partial = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_createPartialApplicator__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */]);
/* unused harmony default export */ var _unused_webpack_default_export = (partial);

/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_createPartialApplicator__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flip__ = __webpack_require__(29);




/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided to `g` followed by the arguments provided initially.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [d, e, f, ..., n] -> ((a, b, c, ...) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partial
 * @example
 *
 *      var greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      var greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
 *
 *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partialRight(f, [a, b])(c, d) = f(c, d, a, b)
 */
var partialRight = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_createPartialApplicator__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__flip__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */]));
/* unused harmony default export */ var _unused_webpack_default_export = (partialRight);

/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filter__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__juxt__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reject__ = __webpack_require__(41);




/**
 * Takes a predicate and a list or other `Filterable` object and returns the
 * pair of filterable objects of the same type of elements which do and do not
 * satisfy, the predicate, respectively. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
 * @param {Function} pred A predicate to determine which side the element belongs to.
 * @param {Array} filterable the list (or other filterable) to partition.
 * @return {Array} An array, containing first the subset of elements that satisfy the
 *         predicate, and second the subset of elements that do not satisfy.
 * @see R.filter, R.reject
 * @example
 *
 *      R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
 *      // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
 *
 *      R.partition(R.contains('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
 *      // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
 */
var partition = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__juxt__["a" /* default */])([__WEBPACK_IMPORTED_MODULE_0__filter__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__reject__["a" /* default */]]);
/* unused harmony default export */ var _unused_webpack_default_export = (partition);

/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equals__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__path__ = __webpack_require__(20);




/**
 * Determines whether a nested path on an object has a specific value, in
 * [`R.equals`](#equals) terms. Most likely used to filter a list.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Relation
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> Boolean
 * @param {Array} path The path of the nested property to use
 * @param {*} val The value to compare the nested property with
 * @param {Object} obj The object to check the nested property in
 * @return {Boolean} `true` if the value equals the nested object property,
 *         `false` otherwise.
 * @example
 *
 *      var user1 = { address: { zipCode: 90210 } };
 *      var user2 = { address: { zipCode: 55555 } };
 *      var user3 = { name: 'Bob' };
 *      var users = [ user1, user2, user3 ];
 *      var isFamous = R.pathEq(['address', 'zipCode'], 90210);
 *      R.filter(isFamous, users); //=> [ user1 ]
 */
var pathEq = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function pathEq(_path, val, obj) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__equals__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__path__["a" /* default */])(_path, obj), val);
});
/* unused harmony default export */ var _unused_webpack_default_export = (pathEq);

/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultTo__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__path__ = __webpack_require__(20);




/**
 * If the given, non-null object has a value at the given path, returns the
 * value at that path. Otherwise returns the provided default value.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig a -> [Idx] -> {a} -> a
 * @param {*} d The default value.
 * @param {Array} p The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path` of the supplied object or the default value.
 * @example
 *
 *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
 */
var pathOr = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function pathOr(d, p, obj) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__defaultTo__["a" /* default */])(d, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__path__["a" /* default */])(p, obj));
});
/* unused harmony default export */ var _unused_webpack_default_export = (pathOr);

/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path__ = __webpack_require__(20);



/**
 * Returns `true` if the specified object property at given path satisfies the
 * given predicate; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Logic
 * @typedefn Idx = String | Int
 * @sig (a -> Boolean) -> [Idx] -> {a} -> Boolean
 * @param {Function} pred
 * @param {Array} propPath
 * @param {*} obj
 * @return {Boolean}
 * @see R.propSatisfies, R.path
 * @example
 *
 *      R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
 */
var pathSatisfies = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function pathSatisfies(pred, propPath, obj) {
  return propPath.length > 0 && pred(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__path__["a" /* default */])(propPath, obj));
});
/* unused harmony default export */ var _unused_webpack_default_export = (pathSatisfies);

/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns a partial copy of an object containing only the keys specified. If
 * the key does not exist, the property is ignored.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.omit, R.props
 * @example
 *
 *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
 */
var pick = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function pick(names, obj) {
  var result = {};
  var idx = 0;
  while (idx < names.length) {
    if (names[idx] in obj) {
      result[names[idx]] = obj[names[idx]];
    }
    idx += 1;
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (pick);

/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns a partial copy of an object containing only the keys that satisfy
 * the supplied predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig ((v, k) -> Boolean) -> {k: v} -> {k: v}
 * @param {Function} pred A predicate to determine whether or not a key
 *        should be included on the output object.
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties that satisfy `pred`
 *         on it.
 * @see R.pick, R.filter
 * @example
 *
 *      var isUpperCase = (val, key) => key.toUpperCase() === key;
 *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
 */
var pickBy = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function pickBy(test, obj) {
  var result = {};
  for (var prop in obj) {
    if (test(obj[prop], prop, obj)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (pickBy);

/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__composeK__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reverse__ = __webpack_require__(42);
/* unused harmony export default */



/**
 * Returns the left-to-right Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.pipeK(f, g, h)` is equivalent to `R.pipe(f, R.chain(g), R.chain(h))`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((a -> m b), (b -> m c), ..., (y -> m z)) -> (a -> m z)
 * @param {...Function}
 * @return {Function}
 * @see R.composeK
 * @example
 *
 *      //  parseJson :: String -> Maybe *
 *      //  get :: String -> Object -> Maybe *
 *
 *      //  getStateCode :: Maybe String -> Maybe String
 *      var getStateCode = R.pipeK(
 *        parseJson,
 *        get('user'),
 *        get('address'),
 *        get('state'),
 *        R.compose(Maybe.of, R.toUpper)
 *      );
 *
 *      getStateCode('{"user":{"address":{"state":"ny"}}}');
 *      //=> Just('NY')
 *      getStateCode('[Invalid JSON]');
 *      //=> Nothing()
 * @symb R.pipeK(f, g, h)(a) = R.chain(h, R.chain(g, f(a)))
 */
function pipeK() {
  if (arguments.length === 0) {
    throw new Error('pipeK requires at least one argument');
  }
  return __WEBPACK_IMPORTED_MODULE_0__composeK__["a" /* default */].apply(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__reverse__["a" /* default */])(arguments));
}

/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__multiply__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduce__ = __webpack_require__(14);



/**
 * Multiplies together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The product of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.product([2,4,6,8,100,1]); //=> 38400
 */
var product = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__multiply__["a" /* default */], 1);
/* unused harmony default export */ var _unused_webpack_default_export = (product);

/***/ }),
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_map__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identity__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pickAll__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__useWith__ = __webpack_require__(116);





/**
 * Reasonable analog to SQL `select` statement.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @category Relation
 * @sig [k] -> [{k: v}] -> [{k: v}]
 * @param {Array} props The property names to project
 * @param {Array} objs The objects to query
 * @return {Array} An array of objects with just the `props` properties.
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
 *      var kids = [abby, fred];
 *      R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
 */
var project = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__useWith__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__internal_map__["a" /* default */], [__WEBPACK_IMPORTED_MODULE_2__pickAll__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */]]); // passing `identity` gives correct arity
/* unused harmony default export */ var _unused_webpack_default_export = (project);

/***/ }),
/* 266 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equals__ = __webpack_require__(8);



/**
 * Returns `true` if the specified object property is equal, in
 * [`R.equals`](#equals) terms, to the given value; `false` otherwise.
 * You can test multiple properties with [`R.where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig String -> a -> Object -> Boolean
 * @param {String} name
 * @param {*} val
 * @param {*} obj
 * @return {Boolean}
 * @see R.whereEq, R.propSatisfies, R.equals
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond'};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown'};
 *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
 *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};
 *      var kids = [abby, fred, rusty, alois];
 *      var hasBrownHair = R.propEq('hair', 'brown');
 *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
 */
var propEq = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function propEq(name, val, obj) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__equals__["a" /* default */])(val, obj[name]);
});
/* unused harmony default export */ var _unused_webpack_default_export = (propEq);

/***/ }),
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is__ = __webpack_require__(91);



/**
 * Returns `true` if the specified object property is of the given type;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Type
 * @sig Type -> String -> Object -> Boolean
 * @param {Function} type
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.is, R.propSatisfies
 * @example
 *
 *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
 *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
 *      R.propIs(Number, 'x', {});            //=> false
 */
var propIs = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function propIs(type, name, obj) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__is__["a" /* default */])(type, obj[name]);
});
/* unused harmony default export */ var _unused_webpack_default_export = (propIs);

/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(6);



/**
 * If the given, non-null object has an own property with the specified name,
 * returns the value of that property. Otherwise returns the provided default
 * value.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Object
 * @sig a -> String -> Object -> a
 * @param {*} val The default value.
 * @param {String} p The name of the property to return.
 * @param {Object} obj The object to query.
 * @return {*} The value of given property of the supplied object or the default value.
 * @example
 *
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var favorite = R.prop('favoriteLibrary');
 *      var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
 *
 *      favorite(alice);  //=> undefined
 *      favoriteWithDefault(alice);  //=> 'Ramda'
 */
var propOr = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function propOr(val, p, obj) {
  return obj != null && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(p, obj) ? obj[p] : val;
});
/* unused harmony default export */ var _unused_webpack_default_export = (propOr);

/***/ }),
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Returns `true` if the specified object property satisfies the given
 * predicate; `false` otherwise. You can test multiple properties with
 * [`R.where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Logic
 * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
 * @param {Function} pred
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.where, R.propEq, R.propIs
 * @example
 *
 *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
 */
var propSatisfies = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function propSatisfies(pred, name, obj) {
  return pred(obj[name]);
});
/* unused harmony default export */ var _unused_webpack_default_export = (propSatisfies);

/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Acts as multiple `prop`: array of keys in, array of values out. Preserves
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> [v]
 * @param {Array} ps The property names to fetch
 * @param {Object} obj The object to query
 * @return {Array} The corresponding values or partially applied function.
 * @example
 *
 *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
 *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
 *
 *      var fullName = R.compose(R.join(' '), R.props(['first', 'last']));
 *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
 */
var props = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function props(ps, obj) {
  var len = ps.length;
  var out = [];
  var idx = 0;

  while (idx < len) {
    out[idx] = obj[ps[idx]];
    idx += 1;
  }

  return out;
});
/* unused harmony default export */ var _unused_webpack_default_export = (props);

/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isNumber__ = __webpack_require__(86);



/**
 * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> Number -> [Number]
 * @param {Number} from The first number in the list.
 * @param {Number} to One more than the last number in the list.
 * @return {Array} The list of numbers in tthe set `[a, b)`.
 * @example
 *
 *      R.range(1, 5);    //=> [1, 2, 3, 4]
 *      R.range(50, 53);  //=> [50, 51, 52]
 */
var range = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function range(from, to) {
  if (!(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_isNumber__["a" /* default */])(from) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_isNumber__["a" /* default */])(to))) {
    throw new TypeError('Both arguments to range must be numbers');
  }
  var result = [];
  var n = from;
  while (n < to) {
    result.push(n);
    n += 1;
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (range);

/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curryN__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_reduce__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_reduced__ = __webpack_require__(16);




/**
 * Like [`reduce`](#reduce), `reduceWhile` returns a single item by iterating
 * through the list, successively calling the iterator function. `reduceWhile`
 * also takes a predicate that is evaluated before each step. If the predicate
 * returns `false`, it "short-circuits" the iteration and returns the current
 * value of the accumulator.
 *
 * @func
 * @memberOf R
 * @since v0.22.0
 * @category List
 * @sig ((a, b) -> Boolean) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} pred The predicate. It is passed the accumulator and the
 *        current element.
 * @param {Function} fn The iterator function. Receives two values, the
 *        accumulator and the current element.
 * @param {*} a The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced
 * @example
 *
 *      var isOdd = (acc, x) => x % 2 === 1;
 *      var xs = [1, 3, 5, 60, 777, 800];
 *      R.reduceWhile(isOdd, R.add, 0, xs); //=> 9
 *
 *      var ys = [2, 4, 6]
 *      R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
 */
var reduceWhile = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curryN__["a" /* default */])(4, [], function _reduceWhile(pred, fn, a, list) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_reduce__["a" /* default */])(function (acc, x) {
    return pred(acc, x) ? fn(acc, x) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_reduced__["a" /* default */])(acc);
  }, a, list);
});
/* unused harmony default export */ var _unused_webpack_default_export = (reduceWhile);

/***/ }),
/* 273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_reduced__ = __webpack_require__(16);



/**
 * Returns a value wrapped to indicate that it is the final value of the reduce
 * and transduce functions. The returned value should be considered a black
 * box: the internal structure is not guaranteed to be stable.
 *
 * Note: this optimization is unavailable to functions not explicitly listed
 * above. For instance, it is not currently supported by
 * [`reduceRight`](#reduceRight).
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category List
 * @sig a -> *
 * @param {*} x The final value of the reduce.
 * @return {*} The wrapped value.
 * @see R.reduce, R.transduce
 * @example
 *
 *     R.reduce(
 *       (acc, item) => item > 3 ? R.reduced(acc) : acc.concat(item),
 *       [],
 *       [1, 2, 3, 4, 5]) // [1, 2, 3]
 */
var reduced = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__internal_reduced__["a" /* default */]);
/* unused harmony default export */ var _unused_webpack_default_export = (reduced);

/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__always__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__times__ = __webpack_require__(113);




/**
 * Returns a fixed list of size `n` containing a specified identical value.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig a -> n -> [a]
 * @param {*} value The value to repeat.
 * @param {Number} n The desired size of the output list.
 * @return {Array} A new array containing `n` `value`s.
 * @see R.times
 * @example
 *
 *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
 *
 *      var obj = {};
 *      var repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
 *      repeatedObjs[0] === repeatedObjs[1]; //=> true
 * @symb R.repeat(a, 0) = []
 * @symb R.repeat(a, 1) = [a]
 * @symb R.repeat(a, 2) = [a, a]
 */
var repeat = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function repeat(value, n) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__times__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__always__["a" /* default */])(value), n);
});
/* unused harmony default export */ var _unused_webpack_default_export = (repeat);

/***/ }),
/* 275 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Replace a substring or regex match in a string with a replacement.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category String
 * @sig RegExp|String -> String -> String -> String
 * @param {RegExp|String} pattern A regular expression or a substring to match.
 * @param {String} replacement The string to replace the matches with.
 * @param {String} str The String to do the search and replacement in.
 * @return {String} The result.
 * @example
 *
 *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *
 *      // Use the "g" (global) flag to replace all occurrences:
 *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
 */
var replace = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function replace(regex, replacement, str) {
  return str.replace(regex, replacement);
});
/* unused harmony default export */ var _unused_webpack_default_export = (replace);

/***/ }),
/* 276 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Scan is similar to [`reduce`](#reduce), but returns a list of successively
 * reduced values from the left
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> [a]
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {Array} A list of all intermediately reduced values.
 * @see R.reduce
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
 * @symb R.scan(f, a, [b, c]) = [a, f(a, b), f(f(a, b), c)]
 */
var scan = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function scan(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [acc];
  while (idx < len) {
    acc = fn(acc, list[idx]);
    result[idx + 1] = acc;
    idx += 1;
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (scan);

/***/ }),
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__always__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__over__ = __webpack_require__(103);




/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the given value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> a -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
 *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
 */
var set = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function set(lens, v, x) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__over__["a" /* default */])(lens, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__always__["a" /* default */])(v), x);
});
/* unused harmony default export */ var _unused_webpack_default_export = (set);

/***/ }),
/* 278 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns a copy of the list, sorted according to the comparator function,
 * which should accept two values at a time and return a negative number if the
 * first value is smaller, a positive number if it's larger, and zero if they
 * are equal. Please note that this is a **copy** of the list. It does not
 * modify the original.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, a) -> Number) -> [a] -> [a]
 * @param {Function} comparator A sorting function :: a -> b -> Int
 * @param {Array} list The list to sort
 * @return {Array} a new array with its elements sorted by the comparator function.
 * @example
 *
 *      var diff = function(a, b) { return a - b; };
 *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
 */
var sort = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function sort(comparator, list) {
  return Array.prototype.slice.call(list, 0).sort(comparator);
});
/* unused harmony default export */ var _unused_webpack_default_export = (sort);

/***/ }),
/* 279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Sorts the list according to the supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord b => (a -> b) -> [a] -> [a]
 * @param {Function} fn
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted by the keys generated by `fn`.
 * @example
 *
 *      var sortByFirstItem = R.sortBy(R.prop(0));
 *      var sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
 *      var pairs = [[-1, 1], [-2, 2], [-3, 3]];
 *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var bob = {
 *        name: 'Bob',
 *        age: -10
 *      };
 *      var clara = {
 *        name: 'clara',
 *        age: 314.159
 *      };
 *      var people = [clara, bob, alice];
 *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
 */
var sortBy = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function sortBy(fn, list) {
  return Array.prototype.slice.call(list, 0).sort(function (a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (sortBy);

/***/ }),
/* 280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Sorts a list according to a list of comparators.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Relation
 * @sig [(a, a) -> Number] -> [a] -> [a]
 * @param {Array} functions A list of comparator functions.
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted according to the comarator functions.
 * @example
 *
 *      var alice = {
 *        name: 'alice',
 *        age: 40
 *      };
 *      var bob = {
 *        name: 'bob',
 *        age: 30
 *      };
 *      var clara = {
 *        name: 'clara',
 *        age: 40
 *      };
 *      var people = [clara, bob, alice];
 *      var ageNameSort = R.sortWith([
 *        R.descend(R.prop('age')),
 *        R.ascend(R.prop('name'))
 *      ]);
 *      ageNameSort(people); //=> [alice, clara, bob]
 */
var sortWith = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function sortWith(fns, list) {
  return Array.prototype.slice.call(list, 0).sort(function (a, b) {
    var result = 0;
    var i = 0;
    while (result === 0 && i < fns.length) {
      result = fns[i](a, b);
      i += 1;
    }
    return result;
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (sortWith);

/***/ }),
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__invoker__ = __webpack_require__(23);


/**
 * Splits a string into an array of strings based on the given
 * separator.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig (String | RegExp) -> String -> [String]
 * @param {String|RegExp} sep The pattern.
 * @param {String} str The string to separate into an array.
 * @return {Array} The array of strings from `str` separated by `str`.
 * @see R.join
 * @example
 *
 *      var pathComponents = R.split('/');
 *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
 *
 *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
 */
var split = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__invoker__["a" /* default */])(1, 'split');
/* unused harmony default export */ var _unused_webpack_default_export = (split);

/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__length__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slice__ = __webpack_require__(11);




/**
 * Splits a given list or string at a given index.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig Number -> [a] -> [[a], [a]]
 * @sig Number -> String -> [String, String]
 * @param {Number} index The index where the array/string is split.
 * @param {Array|String} array The array/string to be split.
 * @return {Array}
 * @example
 *
 *      R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
 *      R.splitAt(5, 'hello world');      //=> ['hello', ' world']
 *      R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
 */
var splitAt = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function splitAt(index, array) {
  return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__slice__["a" /* default */])(0, index, array), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__slice__["a" /* default */])(index, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__length__["a" /* default */])(array), array)];
});
/* unused harmony default export */ var _unused_webpack_default_export = (splitAt);

/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slice__ = __webpack_require__(11);



/**
 * Splits a collection into slices of the specified length.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @sig Number -> String -> [String]
 * @param {Number} n
 * @param {Array} list
 * @return {Array}
 * @example
 *
 *      R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
 *      R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
 */
var splitEvery = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function splitEvery(n, list) {
  if (n <= 0) {
    throw new Error('First argument to splitEvery must be a positive integer');
  }
  var result = [];
  var idx = 0;
  while (idx < list.length) {
    result.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__slice__["a" /* default */])(idx, idx += n, list));
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (splitEvery);

/***/ }),
/* 284 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Takes a list and a predicate and returns a pair of lists with the following properties:
 *
 *  - the result of concatenating the two output lists is equivalent to the input list;
 *  - none of the elements of the first output list satisfies the predicate; and
 *  - if the second output list is non-empty, its first element satisfies the predicate.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [[a], [a]]
 * @param {Function} pred The predicate that determines where the array is split.
 * @param {Array} list The array to be split.
 * @return {Array}
 * @example
 *
 *      R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
 */
var splitWhen = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function splitWhen(pred, list) {
  var idx = 0;
  var len = list.length;
  var prefix = [];

  while (idx < len && !pred(list[idx])) {
    prefix.push(list[idx]);
    idx += 1;
  }

  return [prefix, Array.prototype.slice.call(list, idx)];
});
/* unused harmony default export */ var _unused_webpack_default_export = (splitWhen);

/***/ }),
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equals__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__take__ = __webpack_require__(59);




/**
 * Checks if a list starts with the provided values
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> Boolean
 * @sig String -> Boolean
 * @param {*} prefix
 * @param {*} list
 * @return {Boolean}
 * @example
 *
 *      R.startsWith('a', 'abc')                //=> true
 *      R.startsWith('b', 'abc')                //=> false
 *      R.startsWith(['a'], ['a', 'b', 'c'])    //=> true
 *      R.startsWith(['b'], ['a', 'b', 'c'])    //=> false
 */
var startsWith = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function (prefix, list) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__equals__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__take__["a" /* default */])(prefix.length, list), prefix);
});
/* unused harmony default export */ var _unused_webpack_default_export = (startsWith);

/***/ }),
/* 286 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Subtracts its second argument from its first argument.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a - b`.
 * @see R.add
 * @example
 *
 *      R.subtract(10, 8); //=> 2
 *
 *      var minus5 = R.subtract(R.__, 5);
 *      minus5(17); //=> 12
 *
 *      var complementaryAngle = R.subtract(90);
 *      complementaryAngle(30); //=> 60
 *      complementaryAngle(72); //=> 18
 */
var subtract = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function subtract(a, b) {
  return Number(a) - Number(b);
});
/* unused harmony default export */ var _unused_webpack_default_export = (subtract);

/***/ }),
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__concat__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__difference__ = __webpack_require__(73);




/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifferenceWith, R.difference, R.differenceWith
 * @example
 *
 *      R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
 *      R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]
 */
var symmetricDifference = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function symmetricDifference(list1, list2) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__concat__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__difference__["a" /* default */])(list1, list2), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__difference__["a" /* default */])(list2, list1));
});
/* unused harmony default export */ var _unused_webpack_default_export = (symmetricDifference);

/***/ }),
/* 288 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__concat__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__differenceWith__ = __webpack_require__(74);




/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both. Duplication is determined according to the value
 * returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifference, R.difference, R.differenceWith
 * @example
 *
 *      var eqA = R.eqBy(R.prop('a'));
 *      var l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
 *      var l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
 *      R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
 */
var symmetricDifferenceWith = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function symmetricDifferenceWith(pred, list1, list2) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__concat__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__differenceWith__["a" /* default */])(pred, list1, list2), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__differenceWith__["a" /* default */])(pred, list2, list1));
});
/* unused harmony default export */ var _unused_webpack_default_export = (symmetricDifferenceWith);

/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slice__ = __webpack_require__(11);



/**
 * Returns a new list containing the last `n` elements of a given list, passing
 * each value to the supplied predicate function, and terminating when the
 * predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} fn The function called per iteration.
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropLastWhile, R.addIndex
 * @example
 *
 *      var isNotOne = x => x !== 1;
 *
 *      R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
 *
 *      R.takeLastWhile(x => x !== 'R' , 'Ramda'); //=> 'amda'
 */
var takeLastWhile = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function takeLastWhile(fn, xs) {
  var idx = xs.length - 1;
  while (idx >= 0 && fn(xs[idx])) {
    idx -= 1;
  }
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__slice__["a" /* default */])(idx + 1, Infinity, xs);
});
/* unused harmony default export */ var _unused_webpack_default_export = (takeLastWhile);

/***/ }),
/* 290 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xtakeWhile__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slice__ = __webpack_require__(11);





/**
 * Returns a new list containing the first `n` elements of a given list,
 * passing each value to the supplied predicate function, and terminating when
 * the predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * Dispatches to the `takeWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} fn The function called per iteration.
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropWhile, R.transduce, R.addIndex
 * @example
 *
 *      var isNotFour = x => x !== 4;
 *
 *      R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
 *
 *      R.takeWhile(x => x !== 'd' , 'Ramda'); //=> 'Ram'
 */
var takeWhile = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['takeWhile'], __WEBPACK_IMPORTED_MODULE_2__internal_xtakeWhile__["a" /* default */], function takeWhile(fn, xs) {
  var idx = 0;
  var len = xs.length;
  while (idx < len && fn(xs[idx])) {
    idx += 1;
  }
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__slice__["a" /* default */])(0, idx, xs);
}));
/* unused harmony default export */ var _unused_webpack_default_export = (takeWhile);

/***/ }),
/* 291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xtap__ = __webpack_require__(215);




/**
 * Runs the given function with the supplied object, then returns the object.
 *
 * Acts as a transducer if a transformer is given as second parameter.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a -> *) -> a -> a
 * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
 * @param {*} x
 * @return {*} `x`.
 * @example
 *
 *      var sayX = x => console.log('x is ' + x);
 *      R.tap(sayX, 100); //=> 100
 *      // logs 'x is 100'
 * @symb R.tap(f, a) = a
 */
var tap = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_2__internal_xtap__["a" /* default */], function tap(fn, x) {
  fn(x);
  return x;
}));
/* unused harmony default export */ var _unused_webpack_default_export = (tap);

/***/ }),
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_cloneRegExp__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_isRegExp__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toString__ = __webpack_require__(26);





/**
 * Determines whether a given string matches a given regular expression.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category String
 * @sig RegExp -> String -> Boolean
 * @param {RegExp} pattern
 * @param {String} str
 * @return {Boolean}
 * @see R.match
 * @example
 *
 *      R.test(/^x/, 'xyz'); //=> true
 *      R.test(/^y/, 'xyz'); //=> false
 */
var test = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function test(pattern, str) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_isRegExp__["a" /* default */])(pattern)) {
    throw new TypeError('‘test’ requires a value of type RegExp as its first argument; received ' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__toString__["a" /* default */])(pattern));
  }
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_cloneRegExp__["a" /* default */])(pattern).test(str);
});
/* unused harmony default export */ var _unused_webpack_default_export = (test);

/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__invoker__ = __webpack_require__(23);


/**
 * The lower case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to lower case.
 * @return {String} The lower case version of `str`.
 * @see R.toUpper
 * @example
 *
 *      R.toLower('XYZ'); //=> 'xyz'
 */
var toLower = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__invoker__["a" /* default */])(0, 'toLowerCase');
/* unused harmony default export */ var _unused_webpack_default_export = (toLower);

/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(6);



/**
 * Converts an object into an array of key, value arrays. Only the object's
 * own properties are used.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own properties.
 * @see R.fromPairs
 * @example
 *
 *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
 */
var toPairs = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function toPairs(obj) {
  var pairs = [];
  for (var prop in obj) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(prop, obj)) {
      pairs[pairs.length] = [prop, obj[prop]];
    }
  }
  return pairs;
});
/* unused harmony default export */ var _unused_webpack_default_export = (toPairs);

/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);


/**
 * Converts an object into an array of key, value arrays. The object's own
 * properties and prototype properties are used. Note that the order of the
 * output array is not guaranteed to be consistent across different JS
 * platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own
 *         and prototype properties.
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
 */
var toPairsIn = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function toPairsIn(obj) {
  var pairs = [];
  for (var prop in obj) {
    pairs[pairs.length] = [prop, obj[prop]];
  }
  return pairs;
});
/* unused harmony default export */ var _unused_webpack_default_export = (toPairsIn);

/***/ }),
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__invoker__ = __webpack_require__(23);


/**
 * The upper case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to upper case.
 * @return {String} The upper case version of `str`.
 * @see R.toLower
 * @example
 *
 *      R.toUpper('abc'); //=> 'ABC'
 */
var toUpper = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__invoker__["a" /* default */])(0, 'toUpperCase');
/* unused harmony default export */ var _unused_webpack_default_export = (toUpper);

/***/ }),
/* 297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_reduce__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_xwrap__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curryN__ = __webpack_require__(5);




/**
 * Initializes a transducer using supplied iterator function. Returns a single
 * item by iterating through the list, successively calling the transformed
 * iterator function and passing it an accumulator value and the current value
 * from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It will be
 * wrapped as a transformer to initialize the transducer. A transformer can be
 * passed directly in place of an iterator function. In both cases, iteration
 * may be stopped early with the [`R.reduced`](#reduced) function.
 *
 * A transducer is a function that accepts a transformer and returns a
 * transformer and can be composed directly.
 *
 * A transformer is an an object that provides a 2-arity reducing iterator
 * function, step, 0-arity initial value function, init, and 1-arity result
 * extraction function, result. The step function is used as the iterator
 * function in reduce. The result function is used to convert the final
 * accumulator into the return type and in most cases is
 * [`R.identity`](#identity). The init function can be used to provide an
 * initial accumulator, but is ignored by transduce.
 *
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (c -> c) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array. Wrapped as transformer, if necessary, and used to
 *        initialize the transducer
 * @param {*} acc The initial accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced, R.into
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
 *
 *      var isOdd = (x) => x % 2 === 1;
 *      var firstOddTransducer = R.compose(R.filter(isOdd), R.take(1));
 *      R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 100)); //=> [1]
 */
var transduce = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__curryN__["a" /* default */])(4, function transduce(xf, fn, acc, list) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_reduce__["a" /* default */])(xf(typeof fn === 'function' ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_xwrap__["a" /* default */])(fn) : fn), acc, list);
});
/* unused harmony default export */ var _unused_webpack_default_export = (transduce);

/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);


/**
 * Transposes the rows and columns of a 2D list.
 * When passed a list of `n` lists of length `x`,
 * returns a list of `x` lists of length `n`.
 *
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [[a]] -> [[a]]
 * @param {Array} list A 2D list
 * @return {Array} A 2D list
 * @example
 *
 *      R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
 *      R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 *
 *      // If some of the rows are shorter than the following rows, their elements are skipped:
 *      R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]
 * @symb R.transpose([[a], [b], [c]]) = [a, b, c]
 * @symb R.transpose([[a, b], [c, d]]) = [[a, c], [b, d]]
 * @symb R.transpose([[a, b], [c]]) = [[a, c], [b]]
 */
var transpose = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function transpose(outerlist) {
  var i = 0;
  var result = [];
  while (i < outerlist.length) {
    var innerlist = outerlist[i];
    var j = 0;
    while (j < innerlist.length) {
      if (typeof result[j] === 'undefined') {
        result[j] = [];
      }
      result[j].push(innerlist[j]);
      j += 1;
    }
    i += 1;
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (transpose);

/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sequence__ = __webpack_require__(110);




/**
 * Maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
 * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
 * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative
 * into an Applicative of Traversable.
 *
 * Dispatches to the `traverse` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)
 * @param {Function} of
 * @param {Function} f
 * @param {*} traversable
 * @return {*}
 * @see R.sequence
 * @example
 *
 *      // Returns `Nothing` if the given divisor is `0`
 *      safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)
 *
 *      R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Just([5, 2.5, 2])
 *      R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Nothing
 */
var traverse = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function traverse(of, f, traversable) {
  return typeof traversable['fantasy-land/traverse'] === 'function' ? traversable['fantasy-land/traverse'](f, of) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__sequence__["a" /* default */])(of, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__map__["a" /* default */])(f, traversable));
});
/* unused harmony default export */ var _unused_webpack_default_export = (traverse);

/***/ }),
/* 300 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);


var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' + '\u2029\uFEFF';
var zeroWidth = '\u200b';
var hasProtoTrim = typeof String.prototype.trim === 'function';
/**
 * Removes (strips) whitespace from both ends of the string.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to trim.
 * @return {String} Trimmed version of `str`.
 * @example
 *
 *      R.trim('   xyz  '); //=> 'xyz'
 *      R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
 */
var _trim = !hasProtoTrim || /*#__PURE__*/ws.trim() || ! /*#__PURE__*/zeroWidth.trim() ? function trim(str) {
  var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
  var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
  return str.replace(beginRx, '').replace(endRx, '');
} : function trim(str) {
  return str.trim();
};
var trim = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(_trim);
/* unused harmony default export */ var _unused_webpack_default_export = (trim);

/***/ }),
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_concat__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_curry2__ = __webpack_require__(0);




/**
 * `tryCatch` takes two functions, a `tryer` and a `catcher`. The returned
 * function evaluates the `tryer`; if it does not throw, it simply returns the
 * result. If the `tryer` *does* throw, the returned function evaluates the
 * `catcher` function and returns its result. Note that for effective
 * composition with this function, both the `tryer` and `catcher` functions
 * must return the same type of results.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig (...x -> a) -> ((e, ...x) -> a) -> (...x -> a)
 * @param {Function} tryer The function that may throw.
 * @param {Function} catcher The function that will be evaluated if `tryer` throws.
 * @return {Function} A new function that will catch exceptions and send then to the catcher.
 * @example
 *
 *      R.tryCatch(R.prop('x'), R.F)({x: true}); //=> true
 *      R.tryCatch(R.prop('x'), R.F)(null);      //=> false
 */
var tryCatch = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__internal_curry2__["a" /* default */])(function _tryCatch(tryer, catcher) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(tryer.length, function () {
    try {
      return tryer.apply(this, arguments);
    } catch (e) {
      return catcher.apply(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_concat__["a" /* default */])([e], arguments));
    }
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (tryCatch);

/***/ }),
/* 302 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);


/**
 * Takes a function `fn`, which takes a single array argument, and returns a
 * function which:
 *
 *   - takes any number of positional arguments;
 *   - passes these arguments to `fn` as an array; and
 *   - returns the result.
 *
 * In other words, `R.unapply` derives a variadic function from a function which
 * takes an array. `R.unapply` is the inverse of [`R.apply`](#apply).
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Function
 * @sig ([*...] -> a) -> (*... -> a)
 * @param {Function} fn
 * @return {Function}
 * @see R.apply
 * @example
 *
 *      R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
 * @symb R.unapply(f)(a, b) = f([a, b])
 */
var unapply = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function unapply(fn) {
  return function () {
    return fn(Array.prototype.slice.call(arguments, 0));
  };
});
/* unused harmony default export */ var _unused_webpack_default_export = (unapply);

/***/ }),
/* 303 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nAry__ = __webpack_require__(39);



/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 1 parameter. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (* -> b) -> (a -> b)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 1.
 * @see R.binary, R.nAry
 * @example
 *
 *      var takesTwoArgs = function(a, b) {
 *        return [a, b];
 *      };
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = R.unary(takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only 1 argument is passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.unary(f)(a, b, c) = f(a)
 */
var unary = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function unary(fn) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__nAry__["a" /* default */])(1, fn);
});
/* unused harmony default export */ var _unused_webpack_default_export = (unary);

/***/ }),
/* 304 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(5);



/**
 * Returns a function of arity `n` from a (manually) curried function.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Function
 * @sig Number -> (a -> b) -> (a -> c)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to uncurry.
 * @return {Function} A new function.
 * @see R.curry
 * @example
 *
 *      var addFour = a => b => c => d => a + b + c + d;
 *
 *      var uncurriedAddFour = R.uncurryN(4, addFour);
 *      uncurriedAddFour(1, 2, 3, 4); //=> 10
 */
var uncurryN = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function uncurryN(depth, fn) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(depth, function () {
    var currentDepth = 1;
    var value = fn;
    var idx = 0;
    var endIdx;
    while (currentDepth <= depth && typeof value === 'function') {
      endIdx = currentDepth === depth ? arguments.length : idx + value.length;
      value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
      currentDepth += 1;
      idx = endIdx;
    }
    return value;
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (uncurryN);

/***/ }),
/* 305 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Builds a list from a seed value. Accepts an iterator function, which returns
 * either false to stop iteration or an array of length 2 containing the value
 * to add to the resulting list and the seed to be used in the next call to the
 * iterator function.
 *
 * The iterator function receives one argument: *(seed)*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (a -> [b]) -> * -> [b]
 * @param {Function} fn The iterator function. receives one argument, `seed`, and returns
 *        either false to quit iteration or an array of length two to proceed. The element
 *        at index 0 of this array will be added to the resulting array, and the element
 *        at index 1 will be passed to the next call to `fn`.
 * @param {*} seed The seed value.
 * @return {Array} The final list.
 * @example
 *
 *      var f = n => n > 50 ? false : [-n, n + 10];
 *      R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
 * @symb R.unfold(f, x) = [f(x)[0], f(f(x)[1])[0], f(f(f(x)[1])[1])[0], ...]
 */
var unfold = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function unfold(fn, seed) {
  var pair = fn(seed);
  var result = [];
  while (pair && pair.length) {
    result[result.length] = pair[0];
    pair = fn(pair[1]);
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (unfold);

/***/ }),
/* 306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compose__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__uniq__ = __webpack_require__(61);





/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @example
 *
 *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
 */
var union = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])( /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__compose__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__uniq__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */]));
/* unused harmony default export */ var _unused_webpack_default_export = (union);

/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uniqWith__ = __webpack_require__(115);




/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list. Duplication is determined according to the value returned by
 * applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [*] -> [*] -> [*]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @see R.union
 * @example
 *
 *      var l1 = [{a: 1}, {a: 2}];
 *      var l2 = [{a: 1}, {a: 4}];
 *      R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
 */
var unionWith = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry3__["a" /* default */])(function unionWith(pred, list1, list2) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__uniqWith__["a" /* default */])(pred, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */])(list1, list2));
});
/* unused harmony default export */ var _unused_webpack_default_export = (unionWith);

/***/ }),
/* 308 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is not satisfied, the function will return the result of
 * calling the `whenFalseFn` function with the same argument. If the predicate
 * is satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred        A predicate function
 * @param {Function} whenFalseFn A function to invoke when the `pred` evaluates
 *                               to a falsy value.
 * @param {*}        x           An object to test with the `pred` function and
 *                               pass to `whenFalseFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenFalseFn`.
 * @see R.ifElse, R.when
 * @example
 *
 *      let safeInc = R.unless(R.isNil, R.inc);
 *      safeInc(null); //=> null
 *      safeInc(1); //=> 2
 */
var unless = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function unless(pred, whenFalseFn, x) {
  return pred(x) ? x : whenFalseFn(x);
});
/* unused harmony default export */ var _unused_webpack_default_export = (unless);

/***/ }),
/* 309 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_identity__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chain__ = __webpack_require__(44);



/**
 * Shorthand for `R.chain(R.identity)`, which removes one level of nesting from
 * any [Chain](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain c => c (c a) -> c a
 * @param {*} list
 * @return {*}
 * @see R.flatten, R.chain
 * @example
 *
 *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
 *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
 */
var unnest = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__chain__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__internal_identity__["a" /* default */]);
/* unused harmony default export */ var _unused_webpack_default_export = (unnest);

/***/ }),
/* 310 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Takes a predicate, a transformation function, and an initial value,
 * and returns a value of the same type as the initial value.
 * It does so by applying the transformation until the predicate is satisfied,
 * at which point it returns the satisfactory value.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred A predicate function
 * @param {Function} fn The iterator function
 * @param {*} init Initial value
 * @return {*} Final value that satisfies predicate
 * @example
 *
 *      R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128
 */
var until = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function until(pred, fn, init) {
  var val = init;
  while (!pred(val)) {
    val = fn(val);
  }
  return val;
});
/* unused harmony default export */ var _unused_webpack_default_export = (until);

/***/ }),
/* 311 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(1);


/**
 * Returns a list of all the properties, including prototype properties, of the
 * supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own and prototype properties.
 * @see R.values, R.keysIn
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.valuesIn(f); //=> ['X', 'Y']
 */
var valuesIn = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function valuesIn(obj) {
  var prop;
  var vs = [];
  for (prop in obj) {
    vs[vs.length] = obj[prop];
  }
  return vs;
});
/* unused harmony default export */ var _unused_webpack_default_export = (valuesIn);

/***/ }),
/* 312 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


// `Const` is a functor that effectively ignores the function given to `map`.
var Const = function (x) {
  return { value: x, 'fantasy-land/map': function () {
      return this;
    } };
};

/**
 * Returns a "view" of the given data structure, determined by the given lens.
 * The lens's focus determines which portion of the data structure is visible.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> s -> a
 * @param {Lens} lens
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});  //=> 1
 *      R.view(xLens, {x: 4, y: 2});  //=> 4
 */
var view = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function view(lens, x) {
  // Using `Const` effectively ignores the setter function of the `lens`,
  // leaving the value returned by the getter function unmodified.
  return lens(Const)(x).value;
});
/* unused harmony default export */ var _unused_webpack_default_export = (view);

/***/ }),
/* 313 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is satisfied, the function will return the result of calling
 * the `whenTrueFn` function with the same argument. If the predicate is not
 * satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred       A predicate function
 * @param {Function} whenTrueFn A function to invoke when the `condition`
 *                              evaluates to a truthy value.
 * @param {*}        x          An object to test with the `pred` function and
 *                              pass to `whenTrueFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.
 * @see R.ifElse, R.unless
 * @example
 *
 *      // truncate :: String -> String
 *      var truncate = R.when(
 *        R.propSatisfies(R.gt(R.__, 10), 'length'),
 *        R.pipe(R.take(10), R.append('…'), R.join(''))
 *      );
 *      truncate('12345');         //=> '12345'
 *      truncate('0123456789ABC'); //=> '0123456789…'
 */
var when = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function when(pred, whenTrueFn, x) {
  return pred(x) ? whenTrueFn(x) : x;
});
/* unused harmony default export */ var _unused_webpack_default_export = (when);

/***/ }),
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equals__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__where__ = __webpack_require__(118);





/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec, false otherwise. An object satisfies the spec if, for each of the
 * spec's own properties, accessing that property of the object gives the same
 * value (in [`R.equals`](#equals) terms) as accessing that property of the
 * spec.
 *
 * `whereEq` is a specialization of [`where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @sig {String: *} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @see R.propEq, R.where
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = R.whereEq({a: 1, b: 2});
 *
 *      pred({a: 1});              //=> false
 *      pred({a: 1, b: 2});        //=> true
 *      pred({a: 1, b: 2, c: 3});  //=> true
 *      pred({a: 1, b: 1});        //=> false
 */
var whereEq = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function whereEq(spec, testObj) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__where__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__equals__["a" /* default */], spec), testObj);
});
/* unused harmony default export */ var _unused_webpack_default_export = (whereEq);

/***/ }),
/* 315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_contains__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flip__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reject__ = __webpack_require__(41);





/**
 * Returns a new list without values in the first argument.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @param {Array} list1 The values to be removed from `list2`.
 * @param {Array} list2 The array to remove values from.
 * @return {Array} The new array without values in `list1`.
 * @see R.transduce, R.difference
 * @example
 *
 *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
 */
var without = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function (xs, list) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reject__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__flip__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__internal_contains__["a" /* default */])(xs), list);
});
/* unused harmony default export */ var _unused_webpack_default_export = (without);

/***/ }),
/* 316 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Creates a new list out of the two supplied by creating each possible pair
 * from the lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The list made by combining each possible pair from
 *         `as` and `bs` into pairs (`[a, b]`).
 * @example
 *
 *      R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 * @symb R.xprod([a, b], [c, d]) = [[a, c], [a, d], [b, c], [b, d]]
 */
var xprod = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function xprod(a, b) {
  // = xprodWith(prepend); (takes about 3 times as long...)
  var idx = 0;
  var ilen = a.length;
  var j;
  var jlen = b.length;
  var result = [];
  while (idx < ilen) {
    j = 0;
    while (j < jlen) {
      result[result.length] = [a[idx], b[j]];
      j += 1;
    }
    idx += 1;
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (xprod);

/***/ }),
/* 317 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Creates a new list out of the two supplied by pairing up equally-positioned
 * items from both lists. The returned list is truncated to the length of the
 * shorter of the two input lists.
 * Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`.
 * @example
 *
 *      R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 * @symb R.zip([a, b, c], [d, e, f]) = [[a, d], [b, e], [c, f]]
 */
var zip = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function zip(a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = [a[idx], b[idx]];
    idx += 1;
  }
  return rv;
});
/* unused harmony default export */ var _unused_webpack_default_export = (zip);

/***/ }),
/* 318 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Creates a new object out of a list of keys and a list of values.
 * Key/value pairing is truncated to the length of the shorter of the two lists.
 * Note: `zipObj` is equivalent to `pipe(zip, fromPairs)`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [String] -> [*] -> {String: *}
 * @param {Array} keys The array that will be properties on the output object.
 * @param {Array} values The list of values on the output object.
 * @return {Object} The object made by pairing up same-indexed elements of `keys` and `values`.
 * @example
 *
 *      R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
 */
var zipObj = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function zipObj(keys, values) {
  var idx = 0;
  var len = Math.min(keys.length, values.length);
  var out = {};
  while (idx < len) {
    out[keys[idx]] = values[idx];
    idx += 1;
  }
  return out;
});
/* unused harmony default export */ var _unused_webpack_default_export = (zipObj);

/***/ }),
/* 319 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(2);


/**
 * Creates a new list out of the two supplied by applying the function to each
 * equally-positioned pair in the lists. The returned list is truncated to the
 * length of the shorter of the two input lists.
 *
 * @function
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> c) -> [a] -> [b] -> [c]
 * @param {Function} fn The function used to combine the two elements into one value.
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by combining same-indexed elements of `list1` and `list2`
 *         using `fn`.
 * @example
 *
 *      var f = (x, y) => {
 *        // ...
 *      };
 *      R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
 *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
 * @symb R.zipWith(fn, [a, b, c], [d, e, f]) = [fn(a, d), fn(b, e), fn(c, f)]
 */
var zipWith = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function zipWith(fn, a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = fn(a[idx], b[idx]);
    idx += 1;
  }
  return rv;
});
/* unused harmony default export */ var _unused_webpack_default_export = (zipWith);

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var hasOwnProperty = {}.hasOwnProperty;
var _has = function _has(it, key) {
  return hasOwnProperty.call(it, key);
};

var _fails = function _fails(exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

var _core = createCommonjsModule(function (module) {
  var core = module.exports = { version: '2.5.1' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var _isObject = function _isObject(it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function _anObject(it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var document = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document) && _isObject(document.createElement);
var _domCreate = function _domCreate(it) {
  return is ? document.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function _toPrimitive(it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP$1 = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP$1(O, P, Attributes);
  } catch (e) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
  f: f
};

var _propertyDesc = function _propertyDesc(bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var id = 0;
var px = Math.random();
var _uid = function _uid(key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _redefine = createCommonjsModule(function (module) {
  var SRC = _uid('src');
  var TO_STRING = 'toString';
  var $toString = Function[TO_STRING];
  var TPL = ('' + $toString).split(TO_STRING);

  _core.inspectSource = function (it) {
    return $toString.call(it);
  };

  (module.exports = function (O, key, val, safe) {
    var isFunction = typeof val == 'function';
    if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
    if (O[key] === val) return;
    if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    if (O === _global) {
      O[key] = val;
    } else if (!safe) {
      delete O[key];
      _hide(O, key, val);
    } else if (O[key]) {
      O[key] = val;
    } else {
      _hide(O, key, val);
    }
    // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, TO_STRING, function toString() {
    return typeof this == 'function' && this[SRC] || $toString.call(this);
  });
});

var _aFunction = function _aFunction(it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function _ctx(fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function () /* ...args */{
    return fn.apply(that, arguments);
  };
};

var PROTOTYPE$1 = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE$1];
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE$1] || (exports[PROTOTYPE$1] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // extend global
    if (target) _redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) _hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
_global.core = _core;
// type bitmap
$export.F = 1; // forced
$export.G = 2; // global
$export.S = 4; // static
$export.P = 8; // proto
$export.B = 16; // bind
$export.W = 32; // wrap
$export.U = 64; // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

var _meta = createCommonjsModule(function (module) {
  var META = _uid('meta');

  var setDesc = _objectDp.f;
  var id = 0;
  var isExtensible = Object.isExtensible || function () {
    return true;
  };
  var FREEZE = !_fails(function () {
    return isExtensible(Object.preventExtensions({}));
  });
  var setMeta = function setMeta(it) {
    setDesc(it, META, { value: {
        i: 'O' + ++id, // object ID
        w: {} // weak collections IDs
      } });
  };
  var fastKey = function fastKey(it, create) {
    // return primitive with prefix
    if (!_isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!_has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      setMeta(it);
      // return object ID
    }return it[META].i;
  };
  var getWeak = function getWeak(it, create) {
    if (!_has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      setMeta(it);
      // return hash weak collections IDs
    }return it[META].w;
  };
  // add metadata on freeze-family methods calling
  var onFreeze = function onFreeze(it) {
    if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
    return it;
  };
  var meta = module.exports = {
    KEY: META,
    NEED: false,
    fastKey: fastKey,
    getWeak: getWeak,
    onFreeze: onFreeze
  };
});

var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});
var _shared = function _shared(key) {
  return store[key] || (store[key] = {});
};

var _wks = createCommonjsModule(function (module) {
  var store = _shared('wks');

  var _Symbol = _global.Symbol;
  var USE_SYMBOL = typeof _Symbol == 'function';

  var $exports = module.exports = function (name) {
    return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : _uid)('Symbol.' + name));
  };

  $exports.store = store;
});

var def = _objectDp.f;

var TAG = _wks('toStringTag');

var _setToStringTag = function _setToStringTag(it, tag, stat) {
  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

var f$1 = _wks;

var _wksExt = {
	f: f$1
};

var _library = false;

var defineProperty$1 = _objectDp.f;
var _wksDefine = function _wksDefine(name) {
  var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty$1($Symbol, name, { value: _wksExt.f(name) });
};

var toString = {}.toString;

var _cof = function _cof(it) {
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function _defined(it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings


var _toIobject = function _toIobject(it) {
  return _iobject(_defined(it));
};

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function _toInteger(it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength

var min = Math.min;
var _toLength = function _toLength(it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function _toAbsoluteIndex(index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes


var _arrayIncludes = function _arrayIncludes(IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }return !IS_INCLUDES && -1;
  };
};

var shared = _shared('keys');

var _sharedKey = function _sharedKey(key) {
  return shared[key] || (shared[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO = _sharedKey('IE_PROTO');

var _objectKeysInternal = function _objectKeysInternal(object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) {
    if (key != IE_PROTO) _has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys
  while (names.length > i) {
    if (_has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)


var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var f$2 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$2
};

var f$3 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$3
};

// all enumerable object keys, includes symbols


var _enumKeys = function _enumKeys(it) {
  var result = _objectKeys(it);
  var getSymbols = _objectGops.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = _objectPie.f;
    var i = 0;
    var key;
    while (symbols.length > i) {
      if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }
  }return result;
};

// 7.2.2 IsArray(argument)

var _isArray = Array.isArray || function isArray(arg) {
  return _cof(arg) == 'Array';
};

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  _anObject(O);
  var keys = _objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) {
    _objectDp.f(O, P = keys[i++], Properties[P]);
  }return O;
};

var document$1 = _global.document;
var _html = document$1 && document$1.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])


var IE_PROTO$1 = _sharedKey('IE_PROTO');
var Empty = function Empty() {/* empty */};
var PROTOTYPE$2 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = _enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;
  while (i--) {
    delete _createDict[PROTOTYPE$2][_enumBugKeys[i]];
  }return _createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$2] = _anObject(O);
    result = new Empty();
    Empty[PROTOTYPE$2] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = _createDict();
  return Properties === undefined ? result : _objectDps(result, Properties);
};

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

var f$5 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return _objectKeysInternal(O, hiddenKeys);
};

var _objectGopn = {
  f: f$5
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

var gOPN$1 = _objectGopn.f;
var toString$1 = {}.toString;

var windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return gOPN$1(it);
  } catch (e) {
    return windowNames.slice();
  }
};

var f$4 = function getOwnPropertyNames(it) {
  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(_toIobject(it));
};

var _objectGopnExt = {
  f: f$4
};

var gOPD$1 = Object.getOwnPropertyDescriptor;

var f$6 = _descriptors ? gOPD$1 : function getOwnPropertyDescriptor(O, P) {
  O = _toIobject(O);
  P = _toPrimitive(P, true);
  if (_ie8DomDefine) try {
    return gOPD$1(O, P);
  } catch (e) {/* empty */}
  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
};

var _objectGopd = {
  f: f$6
};

'use strict';
// ECMAScript 6 symbols shim


var META = _meta.KEY;

var gOPD = _objectGopd.f;
var dP = _objectDp.f;
var gOPN = _objectGopnExt.f;
var $Symbol = _global.Symbol;
var $JSON = _global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = _wks('_hidden');
var TO_PRIMITIVE = _wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = _shared('symbol-registry');
var AllSymbols = _shared('symbols');
var OPSymbols = _shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = _global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = _descriptors && _fails(function () {
  return _objectCreate(dP({}, 'a', {
    get: function get$$1() {
      return dP(this, 'a', { value: 7 }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function wrap(tag) {
  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty$$1(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  _anObject(it);
  key = _toPrimitive(key, true);
  _anObject(D);
  if (_has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!_has(it, HIDDEN)) dP(it, HIDDEN, _propertyDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
    }return setSymbolDesc(it, key, D);
  }return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  _anObject(it);
  var keys = _enumKeys(P = _toIobject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) {
    $defineProperty(it, key = keys[i++], P[key]);
  }return it;
};
var $create = function create$$1(it, P) {
  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = _toPrimitive(key, true));
  if (this === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = _toIobject(it);
  key = _toPrimitive(key, true);
  if (it === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(_toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : _toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function _Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function $set(value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, _propertyDesc(1, value));
    };
    if (_descriptors && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  _redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  _objectGopd.f = $getOwnPropertyDescriptor;
  _objectDp.f = $defineProperty;
  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
  _objectPie.f = $propertyIsEnumerable;
  _objectGops.f = $getOwnPropertySymbols;

  if (_descriptors && !_library) {
    _redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  _wksExt.f = function (name) {
    return wrap(_wks(name));
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols =
// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
  _wks(es6Symbols[j++]);
}for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) {
  _wksDefine(wellKnownSymbols[k++]);
}_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function _for(key) {
    return _has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) {
      if (SymbolRegistry[key] === sym) return key;
    }
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
});

_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) {
      args.push(arguments[i++]);
    }replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !_isArray(replacer)) replacer = function replacer(key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
_setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
_setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
_setToStringTag(_global.JSON, 'JSON', true);

// getting tag from 19.1.3.6 Object.prototype.toString()

var TAG$1 = _wks('toStringTag');
// ES3 wrong here
var ARG = _cof(function () {
  return arguments;
}()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {/* empty */}
};

var _classof = function _classof(it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
  // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
  // builtinTag case
  : ARG ? _cof(O)
  // ES3 arguments fallback
  : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

'use strict';
// 19.1.3.6 Object.prototype.toString()

var test = {};
test[_wks('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  _redefine(Object.prototype, 'toString', function toString() {
    return '[object ' + _classof(this) + ']';
  }, true);
}

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
_export(_export.S, 'Object', { create: _objectCreate });

// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperties: _objectDps });

// most Object methods by ES6 should accept primitives


var _objectSap = function _objectSap(KEY, exec) {
  var fn = (_core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  _export(_export.S + _export.F * _fails(function () {
    fn(1);
  }), 'Object', exp);
};

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)

var $getOwnPropertyDescriptor$1 = _objectGopd.f;

_objectSap('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor$1(_toIobject(it), key);
  };
});

// 7.1.13 ToObject(argument)

var _toObject = function _toObject(it) {
  return Object(_defined(it));
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


var IE_PROTO$2 = _sharedKey('IE_PROTO');
var ObjectProto$1 = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = _toObject(O);
  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }return O instanceof Object ? ObjectProto$1 : null;
};

// 19.1.2.9 Object.getPrototypeOf(O)


_objectSap('getPrototypeOf', function () {
  return function getPrototypeOf$$1(it) {
    return _objectGpo(_toObject(it));
  };
});

// 19.1.2.14 Object.keys(O)


_objectSap('keys', function () {
  return function keys(it) {
    return _objectKeys(_toObject(it));
  };
});

// 19.1.2.7 Object.getOwnPropertyNames(O)
_objectSap('getOwnPropertyNames', function () {
  return _objectGopnExt.f;
});

// 19.1.2.5 Object.freeze(O)

var meta = _meta.onFreeze;

_objectSap('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && _isObject(it) ? $freeze(meta(it)) : it;
  };
});

// 19.1.2.17 Object.seal(O)

var meta$1 = _meta.onFreeze;

_objectSap('seal', function ($seal) {
  return function seal(it) {
    return $seal && _isObject(it) ? $seal(meta$1(it)) : it;
  };
});

// 19.1.2.15 Object.preventExtensions(O)

var meta$2 = _meta.onFreeze;

_objectSap('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && _isObject(it) ? $preventExtensions(meta$2(it)) : it;
  };
});

// 19.1.2.12 Object.isFrozen(O)


_objectSap('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return _isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

// 19.1.2.13 Object.isSealed(O)


_objectSap('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return _isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

// 19.1.2.11 Object.isExtensible(O)


_objectSap('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return _isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

'use strict';
// 19.1.2.1 Object.assign(target, source, ...)


var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = _toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = _objectGops.f;
  var isEnum = _objectPie.f;
  while (aLen > index) {
    var S = _iobject(arguments[index++]);
    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
  }return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)


_export(_export.S + _export.F, 'Object', { assign: _objectAssign });

// 7.2.9 SameValue(x, y)
var _sameValue = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

// 19.1.3.10 Object.is(value1, value2)

_export(_export.S, 'Object', { is: _sameValue });

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */

var check = function check(O, proto) {
  _anObject(O);
  if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
var _setProto = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }
    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

// 19.1.3.19 Object.setPrototypeOf(O, proto)

_export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

// true  -> String#at
// false -> String#codePointAt
var _stringAt = function _stringAt(TO_STRING) {
  return function (that, pos) {
    var s = String(_defined(that));
    var i = _toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _iterators = {};

'use strict';

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function () {
  return this;
});

var _iterCreate = function _iterCreate(Constructor, NAME, next) {
  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
  _setToStringTag(Constructor, NAME + ' Iterator');
};

'use strict';

var ITERATOR = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

var _iterDefine = function _iterDefine(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  _iterCreate(Constructor, NAME, next);
  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }return function entries() {
      return new Constructor(this, kind);
    };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      _setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!_library && !_has(IteratorPrototype, ITERATOR)) _hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() {
      return $native.call(this);
    };
  }
  // Define iterator
  if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    _hide(proto, ITERATOR, $default);
  }
  // Plug for library
  _iterators[NAME] = $default;
  _iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) _redefine(proto, key, methods[key]);
    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

'use strict';
var $at = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = _wks('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) _hide(ArrayProto, UNSCOPABLES, {});
var _addToUnscopables = function _addToUnscopables(key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

var _iterStep = function _iterStep(done, value) {
  return { value: value, done: !!done };
};

'use strict';

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = _toIobject(iterated); // target
  this._i = 0; // next index
  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return _iterStep(1);
  }
  if (kind == 'keys') return _iterStep(0, index);
  if (kind == 'values') return _iterStep(0, O[index]);
  return _iterStep(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
_iterators.Arguments = _iterators.Array;

_addToUnscopables('keys');
_addToUnscopables('values');
_addToUnscopables('entries');

var ITERATOR$1 = _wks('iterator');
var TO_STRING_TAG = _wks('toStringTag');
var ArrayValues = _iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = _objectKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = _global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR$1]) _hide(proto, ITERATOR$1, ArrayValues);
    if (!proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
    _iterators[NAME] = ArrayValues;
    if (explicit) for (key in es6_array_iterator) {
      if (!proto[key]) _redefine(proto, key, es6_array_iterator[key], true);
    }
  }
}

var iterator = _wksExt.f('iterator');

// 20.1.2.4 Number.isNaN(number)


_export(_export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)


_export(_export.S, 'Array', { isArray: _isArray });

// call something on iterator step with safe closing on error

var _iterCall = function _iterCall(iterator, fn, value, entries) {
  try {
    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) _anObject(ret.call(iterator));
    throw e;
  }
};

// check on default Array iterator

var ITERATOR$2 = _wks('iterator');
var ArrayProto$1 = Array.prototype;

var _isArrayIter = function _isArrayIter(it) {
  return it !== undefined && (_iterators.Array === it || ArrayProto$1[ITERATOR$2] === it);
};

'use strict';

var _createProperty = function _createProperty(object, index, value) {
  if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));else object[index] = value;
};

var ITERATOR$3 = _wks('iterator');

var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$3] || it['@@iterator'] || _iterators[_classof(it)];
};

var ITERATOR$4 = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$4]();
  riter['return'] = function () {
    SAFE_CLOSING = true;
  };
  // eslint-disable-next-line no-throw-literal
  
} catch (e) {/* empty */}

var _iterDetect = function _iterDetect(exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR$4]();
    iter.next = function () {
      return { done: safe = true };
    };
    arr[ITERATOR$4] = function () {
      return iter;
    };
    exec(arr);
  } catch (e) {/* empty */}
  return safe;
};

'use strict';

_export(_export.S + _export.F * !_iterDetect(function (iter) {
  
}), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = _toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = core_getIteratorMethod(O);
    var length, result, step, iterator;
    if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = _toLength(O.length);
      for (result = new C(length); length > index; index++) {
        _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

'use strict';

// WebKit Array.of isn't generic
_export(_export.S + _export.F * _fails(function () {
  function F() {/* empty */}
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of() /* ...args */{
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) {
      _createProperty(result, index, arguments[index++]);
    }result.length = aLen;
    return result;
  }
});

'use strict';

var _strictMethod = function _strictMethod(method, arg) {
  return !!method && _fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () {/* empty */}, 1) : method.call(null);
  });
};

'use strict';
// 22.1.3.13 Array.prototype.join(separator)


var arrayJoin = [].join;

// fallback for not array-like strings
_export(_export.P + _export.F * (_iobject != Object || !_strictMethod(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(_toIobject(this), separator === undefined ? ',' : separator);
  }
});

'use strict';

var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
_export(_export.P + _export.F * _fails(function () {
  if (_html) arraySlice.call(_html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = _toLength(this.length);
    var klass = _cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = _toAbsoluteIndex(begin, len);
    var upTo = _toAbsoluteIndex(end, len);
    var size = _toLength(upTo - start);
    var cloned = Array(size);
    var i = 0;
    for (; i < size; i++) {
      cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
    }return cloned;
  }
});

'use strict';

var $sort = [].sort;
var test$1 = [1, 2, 3];

_export(_export.P + _export.F * (_fails(function () {
  // IE8-
  test$1.sort(undefined);
}) || !_fails(function () {
  // V8 bug
  test$1.sort(null);
  // Old WebKit
}) || !_strictMethod($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined ? $sort.call(_toObject(this)) : $sort.call(_toObject(this), _aFunction(comparefn));
  }
});

var SPECIES = _wks('species');

var _arraySpeciesConstructor = function _arraySpeciesConstructor(original) {
  var C;
  if (_isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
    if (_isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }return C === undefined ? Array : C;
};

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)


var _arraySpeciesCreate = function _arraySpeciesCreate(original, length) {
  return new (_arraySpeciesConstructor(original))(length);
};

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex


var _arrayMethods = function _arrayMethods(TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || _arraySpeciesCreate;
  return function ($this, callbackfn, that) {
    var O = _toObject($this);
    var self = _iobject(O);
    var f = _ctx(callbackfn, that, 3);
    var length = _toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (; length > index; index++) {
      if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);
        if (TYPE) {
          if (IS_MAP) result[index] = res; // map
          else if (res) switch (TYPE) {
              case 3:
                return true; // some
              case 5:
                return val; // find
              case 6:
                return index; // findIndex
              case 2:
                result.push(val); // filter
            } else if (IS_EVERY) return false; // every
        }
      }
    }return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

'use strict';

var $forEach = _arrayMethods(0);
var STRICT = _strictMethod([].forEach, true);

_export(_export.P + _export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});

'use strict';

var $map = _arrayMethods(1);

_export(_export.P + _export.F * !_strictMethod([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});

'use strict';

var $filter = _arrayMethods(2);

_export(_export.P + _export.F * !_strictMethod([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});

'use strict';

var $some = _arrayMethods(3);

_export(_export.P + _export.F * !_strictMethod([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});

'use strict';

var $every = _arrayMethods(4);

_export(_export.P + _export.F * !_strictMethod([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});

var _arrayReduce = function _arrayReduce(that, callbackfn, aLen, memo, isRight) {
  _aFunction(callbackfn);
  var O = _toObject(that);
  var self = _iobject(O);
  var length = _toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (; isRight ? index >= 0 : length > index; index += i) {
    if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
  }return memo;
};

'use strict';

_export(_export.P + _export.F * !_strictMethod([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return _arrayReduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

'use strict';

_export(_export.P + _export.F * !_strictMethod([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return _arrayReduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

'use strict';

var $indexOf = _arrayIncludes(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

_export(_export.P + _export.F * (NEGATIVE_ZERO || !_strictMethod($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
    // convert -0 to +0
    ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
  }
});

'use strict';

var $native$1 = [].lastIndexOf;
var NEGATIVE_ZERO$1 = !!$native$1 && 1 / [1].lastIndexOf(1, -0) < 0;

_export(_export.P + _export.F * (NEGATIVE_ZERO$1 || !_strictMethod($native$1)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO$1) return $native$1.apply(this, arguments) || 0;
    var O = _toIobject(this);
    var length = _toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, _toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (; index >= 0; index--) {
      if (index in O) if (O[index] === searchElement) return index || 0;
    }return -1;
  }
});

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
'use strict';

var _arrayCopyWithin = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = _toObject(this);
  var len = _toLength(O.length);
  var to = _toAbsoluteIndex(target, len);
  var from = _toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : _toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];else delete O[to];
    to += inc;
    from += inc;
  }return O;
};

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)


_export(_export.P, 'Array', { copyWithin: _arrayCopyWithin });

_addToUnscopables('copyWithin');

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
'use strict';

var _arrayFill = function fill(value /* , start = 0, end = @length */) {
  var O = _toObject(this);
  var length = _toLength(O.length);
  var aLen = arguments.length;
  var index = _toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : _toAbsoluteIndex(end, length);
  while (endPos > index) {
    O[index++] = value;
  }return O;
};

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)


_export(_export.P, 'Array', { fill: _arrayFill });

_addToUnscopables('fill');

'use strict';
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

var $find = _arrayMethods(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () {
  forced = false;
});
_export(_export.P + _export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
_addToUnscopables(KEY);

'use strict';
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

var $find$1 = _arrayMethods(6);
var KEY$1 = 'findIndex';
var forced$1 = true;
// Shouldn't skip holes
if (KEY$1 in []) Array(1)[KEY$1](function () {
  forced$1 = false;
});
_export(_export.P + _export.F * forced$1, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
_addToUnscopables(KEY$1);

'use strict';

var SPECIES$1 = _wks('species');

var _setSpecies = function _setSpecies(KEY) {
  var C = _global[KEY];
  if (_descriptors && C && !C[SPECIES$1]) _objectDp.f(C, SPECIES$1, {
    configurable: true,
    get: function get() {
      return this;
    }
  });
};

_setSpecies('Array');

// 7.2.8 IsRegExp(argument)


var MATCH = _wks('match');
var _isRegexp = function _isRegexp(it) {
  var isRegExp;
  return _isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : _cof(it) == 'RegExp');
};

// helper for String#{startsWith, endsWith, includes}


var _stringContext = function _stringContext(that, searchString, NAME) {
  if (_isRegexp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(_defined(that));
};

var MATCH$1 = _wks('match');
var _failsIsRegexp = function _failsIsRegexp(KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH$1] = false;
      return !'/./'[KEY](re);
    } catch (f) {/* empty */}
  }return true;
};

// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
'use strict';

var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

_export(_export.P + _export.F * _failsIsRegexp(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = _stringContext(this, searchString, STARTS_WITH);
    var index = _toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
  }
});

var _entryVirtual = function _entryVirtual(CONSTRUCTOR) {
  var C = _core[CONSTRUCTOR];
  return C.virtual || C.prototype;
};

var startsWith = _entryVirtual('String').startsWith;

// 20.2.2.34 Math.trunc(x)


_export(_export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

// these aren't really private, but nor are they really useful to document

/**
 * @private
 */
var LuxonError = function (_Error) {
  inherits(LuxonError, _Error);

  function LuxonError() {
    classCallCheck(this, LuxonError);
    return possibleConstructorReturn(this, (LuxonError.__proto__ || Object.getPrototypeOf(LuxonError)).apply(this, arguments));
  }

  return LuxonError;
}(Error);

/**
 * @private
 */


var InvalidDateTimeError = function (_LuxonError) {
  inherits(InvalidDateTimeError, _LuxonError);

  function InvalidDateTimeError(reason) {
    classCallCheck(this, InvalidDateTimeError);
    return possibleConstructorReturn(this, (InvalidDateTimeError.__proto__ || Object.getPrototypeOf(InvalidDateTimeError)).call(this, 'Invalid DateTime: ' + reason));
  }

  return InvalidDateTimeError;
}(LuxonError);

/**
 * @private
 */
var InvalidIntervalError = function (_LuxonError2) {
  inherits(InvalidIntervalError, _LuxonError2);

  function InvalidIntervalError(reason) {
    classCallCheck(this, InvalidIntervalError);
    return possibleConstructorReturn(this, (InvalidIntervalError.__proto__ || Object.getPrototypeOf(InvalidIntervalError)).call(this, 'Invalid Interval: ' + reason));
  }

  return InvalidIntervalError;
}(LuxonError);

/**
 * @private
 */
var InvalidDurationError = function (_LuxonError3) {
  inherits(InvalidDurationError, _LuxonError3);

  function InvalidDurationError(reason) {
    classCallCheck(this, InvalidDurationError);
    return possibleConstructorReturn(this, (InvalidDurationError.__proto__ || Object.getPrototypeOf(InvalidDurationError)).call(this, 'Invalid Duration: ' + reason));
  }

  return InvalidDurationError;
}(LuxonError);

/**
 * @private
 */
var ConflictingSpecificationError = function (_LuxonError4) {
  inherits(ConflictingSpecificationError, _LuxonError4);

  function ConflictingSpecificationError() {
    classCallCheck(this, ConflictingSpecificationError);
    return possibleConstructorReturn(this, (ConflictingSpecificationError.__proto__ || Object.getPrototypeOf(ConflictingSpecificationError)).apply(this, arguments));
  }

  return ConflictingSpecificationError;
}(LuxonError);

/**
 * @private
 */
var InvalidUnitError = function (_LuxonError5) {
  inherits(InvalidUnitError, _LuxonError5);

  function InvalidUnitError(unit) {
    classCallCheck(this, InvalidUnitError);
    return possibleConstructorReturn(this, (InvalidUnitError.__proto__ || Object.getPrototypeOf(InvalidUnitError)).call(this, 'Invalid unit ' + unit));
  }

  return InvalidUnitError;
}(LuxonError);

/**
 * @private
 */
var InvalidArgumentError = function (_LuxonError6) {
  inherits(InvalidArgumentError, _LuxonError6);

  function InvalidArgumentError() {
    classCallCheck(this, InvalidArgumentError);
    return possibleConstructorReturn(this, (InvalidArgumentError.__proto__ || Object.getPrototypeOf(InvalidArgumentError)).apply(this, arguments));
  }

  return InvalidArgumentError;
}(LuxonError);

/**
 * @private
 */
var ZoneIsAbstractError = function (_LuxonError7) {
  inherits(ZoneIsAbstractError, _LuxonError7);

  function ZoneIsAbstractError() {
    classCallCheck(this, ZoneIsAbstractError);
    return possibleConstructorReturn(this, (ZoneIsAbstractError.__proto__ || Object.getPrototypeOf(ZoneIsAbstractError)).call(this, 'Zone is an abstract class'));
  }

  return ZoneIsAbstractError;
}(LuxonError);

/* eslint no-unused-vars: "off" */
/**
 * @interface
*/
var Zone = function () {
  function Zone() {
    classCallCheck(this, Zone);
  }

  createClass(Zone, [{
    key: 'offset',


    /**
     * Return the offset in minutes for this zone at the specified timestamp.
     * @abstract
     * @param {number} ts - Epoch milliseconds for which to compute the offset
     * @return {number}
     */
    value: function offset(ts) {
      throw new ZoneIsAbstractError();
    }

    /**
     * Return whether this Zone is equal to another zoner
     * @abstract
     * @param {Zone} otherZone - the zone to compare
     * @return {boolean}
     */

  }, {
    key: 'equals',
    value: function equals(otherZone) {
      throw new ZoneIsAbstractError();
    }

    /**
     * Return whether this Zone is valid.
     * @abstract
     * @return {boolean}
     */

  }, {
    key: 'type',

    /**
     * The type of zone
     * @abstract
     * @return {string}
     */
    get: function get$$1() {
      throw new ZoneIsAbstractError();
    }

    /**
     * The name of this zone.
     * @abstract
     * @return {string}
     */

  }, {
    key: 'name',
    get: function get$$1() {
      throw new ZoneIsAbstractError();
    }

    /**
     * Returns whether the offset is known to be fixed for the whole year.
     * @abstract
     * @return {boolean}
     */

  }, {
    key: 'universal',
    get: function get$$1() {
      throw new ZoneIsAbstractError();
    }

    /**
     * Returns the offset's common name (such as EST) at the specified timestamp
     * @abstract
     * @param {number} ts - Epoch milliseconds for which to get the name
     * @param {Object} opts - Options to affect the format
     * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
     * @param {string} opts.localeCode - What locale to return the offset name in. Defaults to us-en
     * @return {string}
     */

  }, {
    key: 'isValid',
    get: function get$$1() {
      throw new ZoneIsAbstractError();
    }
  }], [{
    key: 'offsetName',
    value: function offsetName(ts, opts) {
      throw new ZoneIsAbstractError();
    }
  }]);
  return Zone;
}();

var singleton = null;

/**
 * @private
 */

var LocalZone = function (_Zone) {
  inherits(LocalZone, _Zone);

  function LocalZone() {
    classCallCheck(this, LocalZone);
    return possibleConstructorReturn(this, (LocalZone.__proto__ || Object.getPrototypeOf(LocalZone)).apply(this, arguments));
  }

  createClass(LocalZone, [{
    key: 'offsetName',
    value: function offsetName(ts, _ref) {
      var format = _ref.format,
          locale = _ref.locale;

      return Util.parseZoneInfo(ts, format, locale);
    }
  }, {
    key: 'offset',
    value: function offset(ts) {
      return -new Date(ts).getTimezoneOffset();
    }
  }, {
    key: 'equals',
    value: function equals(otherZone) {
      return otherZone.type === 'local';
    }
  }, {
    key: 'type',
    get: function get$$1() {
      return 'local';
    }
  }, {
    key: 'name',
    get: function get$$1() {
      if (Util.hasIntl()) {
        return new Intl.DateTimeFormat().resolvedOptions().timeZone;
      } else return 'local';
    }
  }, {
    key: 'universal',
    get: function get$$1() {
      return false;
    }
  }, {
    key: 'isValid',
    get: function get$$1() {
      return true;
    }
  }], [{
    key: 'instance',
    get: function get$$1() {
      if (singleton === null) {
        singleton = new LocalZone();
      }
      return singleton;
    }
  }]);
  return LocalZone;
}(Zone);

var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};

function hackyOffset(dtf, date) {
  var formatted = dtf.format(date),
      parsed = /(\d+)\/(\d+)\/(\d+), (\d+):(\d+):(\d+)/.exec(formatted),
      _parsed = slicedToArray(parsed, 7),
      fMonth = _parsed[1],
      fDay = _parsed[2],
      fYear = _parsed[3],
      fHour = _parsed[4],
      fMinute = _parsed[5],
      fSecond = _parsed[6];

  return [fYear, fMonth, fDay, fHour, fMinute, fSecond];
}

function partsOffset(dtf, date) {
  var formatted = dtf.formatToParts(date),
      filled = [];
  for (var i = 0; i < formatted.length; i++) {
    var _formatted$i = formatted[i],
        type = _formatted$i.type,
        value = _formatted$i.value,
        pos = typeToPos[type];


    if (!Util.isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }
  return filled;
}

function isValid(zone) {
  try {
    new Intl.DateTimeFormat('en-US', { timeZone: zone }).format();
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * @private
 */

var IANAZone = function (_Zone) {
  inherits(IANAZone, _Zone);
  createClass(IANAZone, null, [{
    key: 'isValidSpecier',
    value: function isValidSpecier(s) {
      return s && s.match(/[a-z_]+\/[a-z_]+/i);
    }
  }]);

  function IANAZone(name) {
    classCallCheck(this, IANAZone);

    var _this = possibleConstructorReturn(this, (IANAZone.__proto__ || Object.getPrototypeOf(IANAZone)).call(this));

    _this.zoneName = name;
    _this.valid = isValid(name);
    return _this;
  }

  createClass(IANAZone, [{
    key: 'offsetName',
    value: function offsetName(ts, _ref) {
      var format = _ref.format,
          locale = _ref.locale;

      return Util.parseZoneInfo(ts, format, locale, this.zoneName);
    }
  }, {
    key: 'offset',
    value: function offset(ts) {
      var date = new Date(ts),
          dtf = new Intl.DateTimeFormat('en-US', {
        hour12: false,
        timeZone: this.zoneName,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }),
          _ref2 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date),
          _ref3 = slicedToArray(_ref2, 6),
          fYear = _ref3[0],
          fMonth = _ref3[1],
          fDay = _ref3[2],
          fHour = _ref3[3],
          fMinute = _ref3[4],
          fSecond = _ref3[5],
          asUTC = Date.UTC(fYear, fMonth - 1, fDay, fHour, fMinute, fSecond);

      var asTS = date.valueOf();
      asTS -= asTS % 1000;
      return (asUTC - asTS) / (60 * 1000);
    }
  }, {
    key: 'equals',
    value: function equals(otherZone) {
      return otherZone.type === 'iana' && otherZone.zoneName === this.zoneName;
    }
  }, {
    key: 'type',
    get: function get$$1() {
      return 'iana';
    }
  }, {
    key: 'name',
    get: function get$$1() {
      return this.zoneName;
    }
  }, {
    key: 'universal',
    get: function get$$1() {
      return false;
    }
  }, {
    key: 'isValid',
    get: function get$$1() {
      return this.valid;
    }
  }]);
  return IANAZone;
}(Zone);

var singleton$1 = null;

function hoursMinutesOffset(z) {
  var hours = Math.trunc(z.fixed / 60),
      minutes = Math.abs(z.fixed % 60),
      sign = hours > 0 ? '+' : '-',
      base = sign + Math.abs(hours);
  return minutes > 0 ? base + ':' + Util.padStart(minutes, 2) : base;
}

/**
 * @private
 */

var FixedOffsetZone = function (_Zone) {
  inherits(FixedOffsetZone, _Zone);
  createClass(FixedOffsetZone, null, [{
    key: 'instance',
    value: function instance(offset) {
      return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
    }
  }, {
    key: 'parseSpecifier',
    value: function parseSpecifier(s) {
      if (s) {
        var r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
        if (r) {
          return new FixedOffsetZone(Util.signedOffset(r[1], r[2]));
        }
      }
      return null;
    }
  }, {
    key: 'utcInstance',
    get: function get$$1() {
      if (singleton$1 === null) {
        singleton$1 = new FixedOffsetZone(0);
      }
      return singleton$1;
    }
  }]);

  function FixedOffsetZone(offset) {
    classCallCheck(this, FixedOffsetZone);

    var _this = possibleConstructorReturn(this, (FixedOffsetZone.__proto__ || Object.getPrototypeOf(FixedOffsetZone)).call(this));

    _this.fixed = offset;
    return _this;
  }

  createClass(FixedOffsetZone, [{
    key: 'offsetName',
    value: function offsetName() {
      return this.name;
    }
  }, {
    key: 'offset',
    value: function offset() {
      return this.fixed;
    }
  }, {
    key: 'equals',
    value: function equals(otherZone) {
      return otherZone.type === 'fixed' && otherZone.fixed === this.fixed;
    }
  }, {
    key: 'type',
    get: function get$$1() {
      return 'fixed';
    }
  }, {
    key: 'name',
    get: function get$$1() {
      return this.fixed === 0 ? 'UTC' : 'UTC' + hoursMinutesOffset(this);
    }
  }, {
    key: 'universal',
    get: function get$$1() {
      return true;
    }
  }, {
    key: 'isValid',
    get: function get$$1() {
      return true;
    }
  }]);
  return FixedOffsetZone;
}(Zone);

/**
 * @private
 */

var Formats = function Formats() {
  classCallCheck(this, Formats);
};

Formats.DATE_SHORT = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
};

Formats.DATE_MED = {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
};

Formats.DATE_FULL = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

Formats.DATE_HUGE = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long'
};

Formats.TIME_SIMPLE = {
  hour: 'numeric',
  minute: '2-digit'
};

Formats.TIME_WITH_SECONDS = {
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit'
};

Formats.TIME_WITH_SHORT_OFFSET = {
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'short'
};

Formats.TIME_WITH_LONG_OFFSET = {
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'long'
};

Formats.TIME_24_SIMPLE = {
  hour: 'numeric',
  minute: '2-digit',
  hour12: false
};

/**
 * {@link toLocaleString}; format like '09:30:23', always 24-hour.
 */
Formats.TIME_24_WITH_SECONDS = {
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
};

/**
 * {@link toLocaleString}; format like '09:30:23 EDT', always 24-hour.
 */
Formats.TIME_24_WITH_SHORT_OFFSET = {
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
  timeZoneName: 'short'
};

/**
 * {@link toLocaleString}; format like '09:30:23 Eastern Daylight Time', always 24-hour.
 */
Formats.TIME_24_WITH_LONG_OFFSET = {
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
  timeZoneName: 'long'
};

/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
 */
Formats.DATETIME_SHORT = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit'
};

/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
 */
Formats.DATETIME_SHORT_WITH_SECONDS = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit'
};

Formats.DATETIME_MED = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit'
};

Formats.DATETIME_MED_WITH_SECONDS = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit'
};

Formats.DATETIME_FULL = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  timeZoneName: 'short'
};

Formats.DATETIME_FULL_WITH_SECONDS = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'short'
};

Formats.DATETIME_HUGE = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  hour: 'numeric',
  minute: '2-digit',
  timeZoneName: 'long'
};

Formats.DATETIME_HUGE_WITH_SECONDS = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'long'
};

function stringify(obj) {
  return JSON.stringify(obj, Object.keys(obj).sort());
}

/**
 * @private
 */

var English = function () {
  function English() {
    classCallCheck(this, English);
  }

  createClass(English, null, [{
    key: 'months',
    value: function months(length) {
      switch (length) {
        case 'narrow':
          return English.monthsNarrow;
        case 'short':
          return English.monthsShort;
        case 'long':
          return English.monthsLong;
        case 'numeric':
          return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        case '2-digit':
          return ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        default:
          return null;
      }
    }
  }, {
    key: 'weekdays',
    value: function weekdays(length) {
      switch (length) {
        case 'narrow':
          return English.weekdaysNarrow;
        case 'short':
          return English.weekdaysShort;
        case 'long':
          return English.weekdaysLong;
        case 'numeric':
          return ['1', '2', '3', '4', '5', '6', '7'];
        default:
          return null;
      }
    }
  }, {
    key: 'eras',
    value: function eras(length) {
      switch (length) {
        case 'narrow':
          return English.erasNarrow;
        case 'short':
          return English.erasShort;
        case 'long':
          return English.erasLong;
        default:
          return null;
      }
    }
  }, {
    key: 'meridiemForDateTime',
    value: function meridiemForDateTime(dt) {
      return English.meridiems[dt.hour < 12 ? 0 : 1];
    }
  }, {
    key: 'weekdayForDateTime',
    value: function weekdayForDateTime(dt, length) {
      return English.weekdays(length)[dt.weekday - 1];
    }
  }, {
    key: 'monthForDateTime',
    value: function monthForDateTime(dt, length) {
      return English.months(length)[dt.month - 1];
    }
  }, {
    key: 'eraForDateTime',
    value: function eraForDateTime(dt, length) {
      return English.eras(length)[dt.year < 0 ? 0 : 1];
    }
  }, {
    key: 'formatString',
    value: function formatString(knownFormat) {
      // these all have the offsets removed because we don't have access to them
      // without all the intl stuff this is backfilling
      var filtered = Util.pick(knownFormat, ['weekday', 'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName', 'hour12']),
          key = stringify(filtered),
          dateTimeHuge = 'EEEE, LLLL d, yyyy, h:mm a';
      switch (key) {
        case stringify(Formats.DATE_SHORT):
          return 'M/d/yyyy';
        case stringify(Formats.DATE_MED):
          return 'LLL d, yyyy';
        case stringify(Formats.DATE_FULL):
          return 'LLLL d, yyyy';
        case stringify(Formats.DATE_HUGE):
          return 'EEEE, LLLL d, yyyy';
        case stringify(Formats.TIME_SIMPLE):
          return 'h:mm a';
        case stringify(Formats.TIME_WITH_SECONDS):
          return 'h:mm:ss a';
        case stringify(Formats.TIME_WITH_SHORT_OFFSET):
          return 'h:mm a';
        case stringify(Formats.TIME_WITH_LONG_OFFSET):
          return 'h:mm a';
        case stringify(Formats.TIME_24_SIMPLE):
          return 'HH:mm';
        case stringify(Formats.TIME_24_WITH_SECONDS):
          return 'HH:mm:ss';
        case stringify(Formats.TIME_24_WITH_SHORT_OFFSET):
          return 'HH:mm';
        case stringify(Formats.TIME_24_WITH_LONG_OFFSET):
          return 'HH:mm';
        case stringify(Formats.DATETIME_SHORT):
          return 'M/d/yyyy, h:mm a';
        case stringify(Formats.DATETIME_MED):
          return 'LLL d, yyyy, h:mm a';
        case stringify(Formats.DATETIME_FULL):
          return 'LLLL d, yyyy, h:mm a';
        case stringify(Formats.DATETIME_HUGE):
          return dateTimeHuge;
        case stringify(Formats.DATETIME_SHORT_WITH_SECONDS):
          return 'M/d/yyyy, h:mm:ss a';
        case stringify(Formats.DATETIME_MED_WITH_SECONDS):
          return 'LLL d, yyyy, h:mm:ss a';
        case stringify(Formats.DATETIME_FULL_WITH_SECONDS):
          return 'LLLL d, yyyy, h:mm:ss a';
        case stringify(Formats.DATETIME_HUGE_WITH_SECONDS):
          return 'EEEE, LLLL d, yyyy, h:mm:ss a';
        default:
          return dateTimeHuge;
      }
    }
  }, {
    key: 'monthsLong',
    get: function get$$1() {
      return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    }
  }, {
    key: 'monthsShort',
    get: function get$$1() {
      return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    }
  }, {
    key: 'monthsNarrow',
    get: function get$$1() {
      return ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
    }
  }, {
    key: 'weekdaysLong',
    get: function get$$1() {
      return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    }
  }, {
    key: 'weekdaysShort',
    get: function get$$1() {
      return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    }
  }, {
    key: 'weekdaysNarrow',
    get: function get$$1() {
      return ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    }
  }, {
    key: 'meridiems',
    get: function get$$1() {
      return ['AM', 'PM'];
    }
  }, {
    key: 'erasLong',
    get: function get$$1() {
      return ['Before Christ', 'Anno Domini'];
    }
  }, {
    key: 'erasShort',
    get: function get$$1() {
      return ['BC', 'AD'];
    }
  }, {
    key: 'erasNarrow',
    get: function get$$1() {
      return ['B', 'A'];
    }
  }]);
  return English;
}();

function stringifyTokens(splits, tokenToString) {
  var s = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = splits[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var token = _step.value;

      if (token.literal) {
        s += token.val;
      } else {
        s += tokenToString(token.val);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return s;
}

/**
 * @private
 */

var Formatter = function () {
  createClass(Formatter, null, [{
    key: 'create',
    value: function create(locale) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var formatOpts = Object.assign({}, { round: true }, opts);
      return new Formatter(locale, formatOpts);
    }
  }, {
    key: 'parseFormat',
    value: function parseFormat(fmt) {
      var current = null,
          currentFull = '',
          bracketed = false;
      var splits = [];
      for (var i = 0; i < fmt.length; i++) {
        var c = fmt.charAt(i);
        if (c === "'") {
          if (currentFull.length > 0) {
            splits.push({ literal: bracketed, val: currentFull });
          }
          current = null;
          currentFull = '';
          bracketed = !bracketed;
        } else if (bracketed) {
          currentFull += c;
        } else if (c === current) {
          currentFull += c;
        } else {
          if (currentFull.length > 0) {
            splits.push({ literal: false, val: currentFull });
          }
          currentFull = c;
          current = c;
        }
      }

      if (currentFull.length > 0) {
        splits.push({ literal: bracketed, val: currentFull });
      }

      return splits;
    }
  }]);

  function Formatter(locale, formatOpts) {
    classCallCheck(this, Formatter);

    this.opts = formatOpts;
    this.loc = locale;
  }

  createClass(Formatter, [{
    key: 'formatDateTime',
    value: function formatDateTime(dt) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
      return df.format();
    }
  }, {
    key: 'formatDateTimeParts',
    value: function formatDateTimeParts(dt) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
      return df.formatToParts();
    }
  }, {
    key: 'resolvedOptions',
    value: function resolvedOptions(dt) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
      return df.resolvedOptions();
    }
  }, {
    key: 'num',
    value: function num(n) {
      var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var opts = Object.assign({}, this.opts);

      if (p > 0) {
        opts.padTo = p;
      }

      return this.loc.numberFormatter(opts).format(n);
    }
  }, {
    key: 'formatDateTimeFromString',
    value: function formatDateTimeFromString(dt, fmt) {
      var _this = this;

      var knownEnglish = this.loc.listingMode() === 'en';
      var string = function string(opts, extract) {
        return _this.loc.extract(dt, opts, extract);
      },
          formatOffset = function formatOffset(opts) {
        if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
          return 'Z';
        }

        var hours = Util.towardZero(dt.offset / 60),
            minutes = Math.abs(dt.offset % 60),
            sign = hours >= 0 ? '+' : '-',
            base = '' + sign + Math.abs(hours);

        switch (opts.format) {
          case 'short':
            return '' + sign + _this.num(Math.abs(hours), 2) + ':' + _this.num(minutes, 2);
          case 'narrow':
            return minutes > 0 ? base + ':' + minutes : base;
          case 'techie':
            return '' + sign + _this.num(Math.abs(hours), 2) + _this.num(minutes, 2);
          default:
            throw new RangeError('Value format ' + opts.format + ' is out of range for property format');
        }
      },
          meridiem = function meridiem() {
        return knownEnglish ? English.meridiemForDateTime(dt) : string({ hour: 'numeric', hour12: true }, 'dayperiod');
      },
          month = function month(length, standalone) {
        return knownEnglish ? English.monthForDateTime(dt, length) : string(standalone ? { month: length } : { month: length, day: 'numeric' }, 'month');
      },
          weekday = function weekday(length, standalone) {
        return knownEnglish ? English.weekdayForDateTime(dt, length) : string(standalone ? { weekday: length } : { weekday: length, month: 'long', day: 'numeric' }, 'weekday');
      },
          era = function era(length) {
        return knownEnglish ? English.eraForDateTime(dt, length) : string({ era: length }, 'era');
      },
          tokenToString = function tokenToString(token) {
        var outputCal = _this.loc.outputCalendar;

        // Where possible: http://cldr.unicode.org/translation/date-time#TOC-Stand-Alone-vs.-Format-Styles
        switch (token) {
          // ms
          case 'S':
            return _this.num(dt.millisecond);
          case 'SSS':
            return _this.num(dt.millisecond, 3);
          // seconds
          case 's':
            return _this.num(dt.second);
          case 'ss':
            return _this.num(dt.second, 2);
          // minutes
          case 'm':
            return _this.num(dt.minute);
          case 'mm':
            return _this.num(dt.minute, 2);
          // hours
          case 'h':
            return _this.num(dt.hour === 12 ? 12 : dt.hour % 12);
          case 'hh':
            return _this.num(dt.hour === 12 ? 12 : dt.hour % 12, 2);
          case 'H':
            return _this.num(dt.hour);
          case 'HH':
            return _this.num(dt.hour, 2);
          // offset
          case 'Z':
            // like +6
            return formatOffset({ format: 'narrow', allowZ: true });
          case 'ZZ':
            // like +06:00
            return formatOffset({ format: 'short', allowZ: true });
          case 'ZZZ':
            // like +0600
            return formatOffset({ format: 'techie', allowZ: false });
          case 'ZZZZ':
            // like EST
            return dt.offsetNameShort;
          case 'ZZZZZ':
            // like Eastern Standard Time
            return dt.offsetNameLong;
          // zone
          case 'z':
            return dt.zoneName;
          // like America/New_York
          // meridiems
          case 'a':
            return meridiem();
          // dates
          case 'd':
            return outputCal ? string({ day: 'numeric' }, 'day') : _this.num(dt.day);
          case 'dd':
            return outputCal ? string({ day: '2-digit' }, 'day') : _this.num(dt.day, 2);
          // weekdays - standalone
          case 'c':
            // like 1
            return _this.num(dt.weekday);
          case 'ccc':
            // like 'Tues'
            return weekday('short', true);
          case 'cccc':
            // like 'Tuesday'
            return weekday('long', true);
          case 'ccccc':
            // like 'T'
            return weekday('narrow', true);
          // weekdays - format
          case 'E':
            // like 1
            return _this.num(dt.weekday);
          case 'EEE':
            // like 'Tues'
            return weekday('short', false);
          case 'EEEE':
            // like 'Tuesday'
            return weekday('long', false);
          case 'EEEEE':
            // like 'T'
            return weekday('narrow', false);
          // months - standalone
          case 'L':
            // like 1
            return outputCal ? string({ month: 'numeric', day: 'numeric' }, 'month') : _this.num(dt.month);
          case 'LL':
            // like 01, doesn't seem to work
            return outputCal ? string({ month: '2-digit', day: 'numeric' }, 'month') : _this.num(dt.month, 2);
          case 'LLL':
            // like Jan
            return month('short', true);
          case 'LLLL':
            // like January
            return month('long', true);
          case 'LLLLL':
            // like J
            return month('narrow', true);
          // months - format
          case 'M':
            // like 1
            return outputCal ? string({ month: 'numeric' }, 'month') : _this.num(dt.month);
          case 'MM':
            // like 01
            return outputCal ? string({ month: '2-digit' }, 'month') : _this.num(dt.month, 2);
          case 'MMM':
            // like Jan
            return month('short', false);
          case 'MMMM':
            // like January
            return month('long', false);
          case 'MMMMM':
            // like J
            return month('narrow', false);
          // years
          case 'y':
            // like 2014
            return outputCal ? string({ year: 'numeric' }, 'year') : _this.num(dt.year);
          case 'yy':
            // like 14
            return outputCal ? string({ year: '2-digit' }, 'year') : _this.num(dt.year.toString().slice(-2), 2);
          case 'yyyy':
            // like 0012
            return outputCal ? string({ year: 'numeric' }, 'year') : _this.num(dt.year, 4);
          // eras
          case 'G':
            // like AD
            return era('short');
          case 'GG':
            // like Anno Domini
            return era('long');
          case 'GGGGG':
            return era('narrow');
          case 'kk':
            return _this.num(dt.weekYear.toString().slice(-2), 2);
          case 'kkkk':
            return _this.num(dt.weekYear, 4);
          case 'W':
            return _this.num(dt.weekNumber);
          case 'WW':
            return _this.num(dt.weekNumber, 2);
          case 'o':
            return _this.num(dt.ordinal);
          case 'ooo':
            return _this.num(dt.ordinal, 3);
          // macros
          case 'D':
            return _this.formatDateTime(dt, DateTime.DATE_SHORT);
          case 'DD':
            return _this.formatDateTime(dt, DateTime.DATE_MED);
          case 'DDD':
            return _this.formatDateTime(dt, DateTime.DATE_FULL);
          case 'DDDD':
            return _this.formatDateTime(dt, DateTime.DATE_HUGE);
          case 't':
            return _this.formatDateTime(dt, DateTime.TIME_SIMPLE);
          case 'tt':
            return _this.formatDateTime(dt, DateTime.TIME_WITH_SECONDS);
          case 'ttt':
            return _this.formatDateTime(dt, DateTime.TIME_WITH_SHORT_OFFSET);
          case 'tttt':
            return _this.formatDateTime(dt, DateTime.TIME_WITH_LONG_OFFSET);
          case 'T':
            return _this.formatDateTime(dt, DateTime.TIME_24_SIMPLE);
          case 'TT':
            return _this.formatDateTime(dt, DateTime.TIME_24_WITH_SECONDS);
          case 'TTT':
            return _this.formatDateTime(dt, DateTime.TIME_24_WITH_SHORT_OFFSET);
          case 'TTTT':
            return _this.formatDateTime(dt, DateTime.TIME_24_WITH_LONG_OFFSET);
          case 'f':
            return _this.formatDateTime(dt, DateTime.DATETIME_SHORT);
          case 'ff':
            return _this.formatDateTime(dt, DateTime.DATETIME_MED);
          case 'fff':
            return _this.formatDateTime(dt, DateTime.DATETIME_FULL);
          case 'ffff':
            return _this.formatDateTime(dt, DateTime.DATETIME_HUGE);
          case 'F':
            return _this.formatDateTime(dt, DateTime.DATETIME_SHORT_WITH_SECONDS);
          case 'FF':
            return _this.formatDateTime(dt, DateTime.DATETIME_MED_WITH_SECONDS);
          case 'FFF':
            return _this.formatDateTime(dt, DateTime.DATETIME_FULL_WITH_SECONDS);
          case 'FFFF':
            return _this.formatDateTime(dt, DateTime.DATETIME_HUGE_WITH_SECONDS);

          default:
            return token;
        }
      };

      return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
    }
  }, {
    key: 'formatDurationFromString',
    value: function formatDurationFromString(dur, fmt) {
      var _this2 = this;

      var tokenToField = function tokenToField(token) {
        switch (token[0]) {
          case 'S':
            return 'millisecond';
          case 's':
            return 'second';
          case 'm':
            return 'minute';
          case 'h':
            return 'hour';
          case 'd':
            return 'day';
          case 'M':
            return 'month';
          case 'y':
            return 'year';
          default:
            return null;
        }
      },
          tokenToString = function tokenToString(lildur) {
        return function (token) {
          var mapped = tokenToField(token);
          if (mapped) {
            return _this2.num(lildur.get(mapped), token.length);
          } else {
            return token;
          }
        };
      },
          tokens = Formatter.parseFormat(fmt),
          realTokens = tokens.reduce(function (found, _ref) {
        var literal = _ref.literal,
            val = _ref.val;
        return literal ? found : found.concat(val);
      }, []),
          collapsed = dur.shiftTo.apply(dur, toConsumableArray(realTokens.map(tokenToField).filter(function (t) {
        return t;
      })));
      return stringifyTokens(tokens, tokenToString(collapsed));
    }
  }]);
  return Formatter;
}();

var localeCache = {};
var sysLocaleCache = null;

function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else if (Util.hasIntl()) {
    sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
    return sysLocaleCache;
  } else {
    sysLocaleCache = 'en-US';
    return sysLocaleCache;
  }
}

function intlConfigString(locale, numberingSystem, outputCalendar) {
  if (Util.hasIntl()) {
    locale = Array.isArray(locale) ? locale : [locale];

    if (outputCalendar || numberingSystem) {
      locale = locale.map(function (l) {
        l += '-u';

        if (outputCalendar) {
          l += '-ca-' + outputCalendar;
        }

        if (numberingSystem) {
          l += '-nu-' + numberingSystem;
        }
        return l;
      });
    }
    return locale;
  } else {
    return [];
  }
}

function mapMonths(f) {
  var ms = [];
  for (var i = 1; i <= 12; i++) {
    var dt = DateTime.utc(2016, i, 1);
    ms.push(f(dt));
  }
  return ms;
}

function mapWeekdays(f) {
  var ms = [];
  for (var i = 1; i <= 7; i++) {
    var dt = DateTime.utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }
  return ms;
}

function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  var mode = loc.listingMode(defaultOK);

  if (mode === 'error') {
    return null;
  } else if (mode === 'en') {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}

/**
 * @private
 */

var PolyNumberFormatter = function () {
  function PolyNumberFormatter(opts) {
    classCallCheck(this, PolyNumberFormatter);

    this.padTo = opts.padTo || 0;
    this.round = opts.round || false;
  }

  createClass(PolyNumberFormatter, [{
    key: 'format',
    value: function format(i) {
      var maybeRounded = this.round ? Math.round(i) : i;
      return Util.padStart(maybeRounded.toString(), this.padTo);
    }
  }]);
  return PolyNumberFormatter;
}();

var PolyDateFormatter = function () {
  function PolyDateFormatter(dt, intl, opts) {
    classCallCheck(this, PolyDateFormatter);

    this.opts = opts;
    this.hasIntl = Util.hasIntl();

    var z = void 0;
    if (dt.zone.universal) {
      // if we have a fixed-offset zone that isn't actually UTC,
      // (like UTC+8), we need to make do with just displaying
      // the time in UTC; the formatter doesn't know how to handle UTC+8
      this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1000);
      z = 'UTC';
    } else if (dt.zone.type === 'local') {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }

    if (this.hasIntl) {
      var realIntlOpts = Object.assign({}, this.opts);
      if (z) {
        realIntlOpts.timeZone = z;
      }
      this.dtf = new Intl.DateTimeFormat(intl, realIntlOpts);
    }
  }

  createClass(PolyDateFormatter, [{
    key: 'format',
    value: function format() {
      if (this.hasIntl) {
        return this.dtf.format(this.dt.toJSDate());
      } else {
        var tokenFormat = English.formatString(this.opts),
            loc = Locale.create('en-US');
        return Formatter.create(loc).formatDateTimeFromString(this.dt, tokenFormat);
      }
    }
  }, {
    key: 'formatToParts',
    value: function formatToParts() {
      if (this.hasIntl && Util.hasFormatToParts()) {
        return this.dtf.formatToParts(this.dt.toJSDate());
      } else {
        // This is kind of a cop out. We actually could do this for English. However, we couldn't do it for intl strings
        // and IMO it's too weird to have an uncanny valley like that
        return [];
      }
    }
  }, {
    key: 'resolvedOptions',
    value: function resolvedOptions() {
      if (this.hasIntl) {
        return this.dtf.resolvedOptions();
      } else {
        return {
          locale: 'en-US',
          numberingSystem: 'latn',
          outputCalendar: 'gregory'
        };
      }
    }
  }]);
  return PolyDateFormatter;
}();

/**
 * @private
 */

var Locale = function () {
  createClass(Locale, null, [{
    key: 'fromOpts',
    value: function fromOpts(opts) {
      return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
    }
  }, {
    key: 'create',
    value: function create(locale, numberingSystem, outputCalendar) {
      var defaultToEN = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      var specifiedLocale = locale || Settings.defaultLocale,

      // the system locale is useful for human readable strings but annoying for parsing known formats
      localeR = specifiedLocale || (defaultToEN ? 'en-US' : systemLocale()),
          numberingSystemR = numberingSystem || Settings.defaultNumberingSystem,
          outputCalendarR = outputCalendar || Settings.defaultOutputCalendar,
          cacheKey = localeR + '|' + numberingSystemR + '|' + outputCalendarR + '|' + specifiedLocale,
          cached = localeCache[cacheKey];

      if (cached) {
        return cached;
      } else {
        var fresh = new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
        localeCache[cacheKey] = fresh;
        return fresh;
      }
    }
  }, {
    key: 'resetCache',
    value: function resetCache() {
      sysLocaleCache = null;
      localeCache = {};
    }
  }, {
    key: 'fromObject',
    value: function fromObject() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          locale = _ref.locale,
          numberingSystem = _ref.numberingSystem,
          outputCalendar = _ref.outputCalendar;

      return Locale.create(locale, numberingSystem, outputCalendar);
    }
  }]);

  function Locale(locale, numbering, outputCalendar, specifiedLocale) {
    classCallCheck(this, Locale);

    Object.defineProperty(this, 'locale', { value: locale, enumerable: true });
    Object.defineProperty(this, 'numberingSystem', {
      value: numbering,
      enumerable: true
    });
    Object.defineProperty(this, 'outputCalendar', {
      value: outputCalendar,
      enumerable: true
    });
    Object.defineProperty(this, 'intl', {
      value: intlConfigString(this.locale, this.numberingSystem, this.outputCalendar),
      enumerable: false
    });

    // cached usefulness
    Object.defineProperty(this, 'weekdaysCache', {
      value: { format: {}, standalone: {} },
      enumerable: false
    });
    Object.defineProperty(this, 'monthsCache', {
      value: { format: {}, standalone: {} },
      enumerable: false
    });
    Object.defineProperty(this, 'meridiemCache', {
      value: null,
      enumerable: false,
      writable: true
    });
    Object.defineProperty(this, 'eraCache', {
      value: {},
      enumerable: false,
      writable: true
    });
    Object.defineProperty(this, 'specifiedLocale', { value: specifiedLocale, enumerable: true });
  }

  // todo: cache me


  createClass(Locale, [{
    key: 'listingMode',
    value: function listingMode() {
      var defaultOk = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var hasIntl = Util.hasIntl(),
          hasFTP = hasIntl && Util.hasFormatToParts(),
          isActuallyEn = this.locale === 'en' || this.locale.toLowerCase() === 'en-us' || hasIntl && Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith('en-us'),
          hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === 'latn') && (this.outputCalendar === null || this.outputCalendar === 'gregory');

      if (!hasFTP && !(isActuallyEn && hasNoWeirdness) && !defaultOk) {
        return 'error';
      } else if (!hasFTP || isActuallyEn && hasNoWeirdness) {
        return 'en';
      } else {
        return 'intl';
      }
    }
  }, {
    key: 'clone',
    value: function clone(alts) {
      if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
        return this;
      } else {
        return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
      }
    }
  }, {
    key: 'redefaultToEN',
    value: function redefaultToEN() {
      var alts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.clone(Object.assign({}, alts, { defaultToEN: true }));
    }
  }, {
    key: 'months',
    value: function months(length) {
      var _this = this;

      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var defaultOK = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      return listStuff(this, length, defaultOK, English.months, function () {
        var intl = format ? { month: length, day: 'numeric' } : { month: length },
            formatStr = format ? 'format' : 'standalone';
        if (!_this.monthsCache[formatStr][length]) {
          _this.monthsCache[formatStr][length] = mapMonths(function (dt) {
            return _this.extract(dt, intl, 'month');
          });
        }
        return _this.monthsCache[formatStr][length];
      });
    }
  }, {
    key: 'weekdays',
    value: function weekdays(length) {
      var _this2 = this;

      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var defaultOK = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      return listStuff(this, length, defaultOK, English.weekdays, function () {
        var intl = format ? { weekday: length, year: 'numeric', month: 'long', day: 'numeric' } : { weekday: length },
            formatStr = format ? 'format' : 'standalone';
        if (!_this2.weekdaysCache[formatStr][length]) {
          _this2.weekdaysCache[formatStr][length] = mapWeekdays(function (dt) {
            return _this2.extract(dt, intl, 'weekday');
          });
        }
        return _this2.weekdaysCache[formatStr][length];
      });
    }
  }, {
    key: 'meridiems',
    value: function meridiems() {
      var _this3 = this;

      var defaultOK = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      return listStuff(this, undefined, defaultOK, function () {
        return English.meridiems;
      }, function () {
        // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
        // for AM and PM. This is probably wrong, but it's makes parsing way easier.
        if (!_this3.meridiemCache) {
          var intl = { hour: 'numeric', hour12: true };
          _this3.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(function (dt) {
            return _this3.extract(dt, intl, 'dayperiod');
          });
        }

        return _this3.meridiemCache;
      });
    }
  }, {
    key: 'eras',
    value: function eras(length) {
      var _this4 = this;

      var defaultOK = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      return listStuff(this, length, defaultOK, English.eras, function () {
        var intl = { era: length };

        // This is utter bullshit. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
        // to definitely enumerate them.
        if (!_this4.eraCache[length]) {
          _this4.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map(function (dt) {
            return _this4.extract(dt, intl, 'era');
          });
        }

        return _this4.eraCache[length];
      });
    }
  }, {
    key: 'extract',
    value: function extract(dt, intlOpts, field) {
      var df = this.dtFormatter(dt, intlOpts),
          results = df.formatToParts(),
          matching = results.find(function (m) {
        return m.type.toLowerCase() === field;
      });

      return matching ? matching.value : null;
    }
  }, {
    key: 'numberFormatter',
    value: function numberFormatter() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var intlOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (Util.hasIntl()) {
        var realIntlOpts = Object.assign({ useGrouping: false }, intlOpts);

        if (opts.padTo > 0) {
          realIntlOpts.minimumIntegerDigits = opts.padTo;
        }

        if (opts.round) {
          realIntlOpts.maximumFractionDigits = 0;
        }

        return new Intl.NumberFormat(this.intl, realIntlOpts);
      } else {
        return new PolyNumberFormatter(opts);
      }
    }
  }, {
    key: 'dtFormatter',
    value: function dtFormatter(dt) {
      var intlOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return new PolyDateFormatter(dt, this.intl, intlOpts);
    }
  }, {
    key: 'equals',
    value: function equals(other) {
      return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
    }
  }]);
  return Locale;
}();

var now = function now() {
  return new Date().valueOf();
};
var defaultZone = null;
var defaultLocale = null;
var defaultNumberingSystem = null;
var defaultOutputCalendar = null;
var throwOnInvalid = false;

/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */
var Settings = function () {
  function Settings() {
    classCallCheck(this, Settings);
  }

  createClass(Settings, null, [{
    key: 'resetCaches',


    /**
     * Reset Luxon's global caches. Should only be necessary in testing scenarios.
     * @return {void}
     */
    value: function resetCaches() {
      Locale.resetCache();
    }
  }, {
    key: 'now',

    /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */
    get: function get$$1() {
      return now;
    }

    /**
     * Set the callback for returning the current timestamp.
     * @type {function}
     */
    ,
    set: function set$$1(n) {
      now = n;
    }

    /**
     * Get the default time zone to create DateTimes in.
     * @type {string}
     */

  }, {
    key: 'defaultZoneName',
    get: function get$$1() {
      return (defaultZone || LocalZone.instance).name;
    }

    /**
     * Set the default time zone to create DateTimes in. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set$$1(z) {
      defaultZone = Util.normalizeZone(z);
    }

    /**
     * Get the default time zone object to create DateTimes in. Does not affect existing instances.
     * @type {Zone}
     */

  }, {
    key: 'defaultZone',
    get: function get$$1() {
      return defaultZone || LocalZone.instance;
    }

    /**
     * Get the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: 'defaultLocale',
    get: function get$$1() {
      return defaultLocale;
    }

    /**
     * Set the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set$$1(locale) {
      defaultLocale = locale;
    }

    /**
     * Get the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: 'defaultNumberingSystem',
    get: function get$$1() {
      return defaultNumberingSystem;
    }

    /**
     * Set the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set$$1(numberingSystem) {
      defaultNumberingSystem = numberingSystem;
    }

    /**
     * Get the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: 'defaultOutputCalendar',
    get: function get$$1() {
      return defaultOutputCalendar;
    }

    /**
     * Set the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set$$1(outputCalendar) {
      defaultOutputCalendar = outputCalendar;
    }

    /**
     * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {Zone}
     */

  }, {
    key: 'throwOnInvalid',
    get: function get$$1() {
      return throwOnInvalid;
    }

    /**
     * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {Zone}
     */
    ,
    set: function set$$1(t) {
      throwOnInvalid = t;
    }
  }]);
  return Settings;
}();

/**
 * @private
 */

var Util = function () {
  function Util() {
    classCallCheck(this, Util);
  }

  createClass(Util, null, [{
    key: 'friendlyDuration',
    value: function friendlyDuration(duration) {
      if (Util.isNumber(duration)) {
        return Duration.fromMillis(duration);
      } else if (duration instanceof Duration) {
        return duration;
      } else if (duration instanceof Object) {
        return Duration.fromObject(duration);
      } else {
        throw new InvalidArgumentError('Unknown duration argument');
      }
    }
  }, {
    key: 'friendlyDateTime',
    value: function friendlyDateTime(dateTimeish) {
      if (dateTimeish instanceof DateTime) {
        return dateTimeish;
      } else if (dateTimeish.valueOf && Util.isNumber(dateTimeish.valueOf())) {
        return DateTime.fromJSDate(dateTimeish);
      } else if (dateTimeish instanceof Object) {
        return DateTime.fromObject(dateTimeish);
      } else {
        throw new InvalidArgumentError('Unknown datetime argument');
      }
    }
  }, {
    key: 'maybeArray',
    value: function maybeArray(thing) {
      return Array.isArray(thing) ? thing : [thing];
    }
  }, {
    key: 'isUndefined',
    value: function isUndefined(o) {
      return typeof o === 'undefined';
    }
  }, {
    key: 'isNumber',
    value: function isNumber(o) {
      return typeof o === 'number';
    }
  }, {
    key: 'isString',
    value: function isString(o) {
      return typeof o === 'string';
    }
  }, {
    key: 'isDate',
    value: function isDate(o) {
      return Object.prototype.toString.call(o) === '[object Date]';
    }
  }, {
    key: 'numberBetween',
    value: function numberBetween(thing, bottom, top) {
      return Util.isNumber(thing) && thing >= bottom && thing <= top;
    }
  }, {
    key: 'padStart',
    value: function padStart(input) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

      return ('0'.repeat(n) + input).slice(-n);
    }
  }, {
    key: 'padEnd',
    value: function padEnd(input) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 9;

      return (input + '0'.repeat(n)).slice(0, n);
    }
  }, {
    key: 'towardZero',
    value: function towardZero(input) {
      return input < 0 ? Math.ceil(input) : Math.floor(input);
    }

    // http://stackoverflow.com/a/15030117

  }, {
    key: 'flatten',
    value: function flatten(arr) {
      return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? Util.flatten(toFlatten) : toFlatten);
      }, []);
    }
  }, {
    key: 'bestBy',
    value: function bestBy(arr, by, compare) {
      return arr.reduce(function (best, next) {
        var pair = [by(next), next];
        if (!best) {
          return pair;
        } else if (compare.apply(null, [best[0], pair[0]]) === best[0]) {
          return best;
        } else {
          return pair;
        }
      }, null)[1];
    }
  }, {
    key: 'pick',
    value: function pick(obj, keys) {
      return keys.reduce(function (a, k) {
        a[k] = obj[k];
        return a;
      }, {});
    }
  }, {
    key: 'isLeapYear',
    value: function isLeapYear(year) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }
  }, {
    key: 'daysInYear',
    value: function daysInYear(year) {
      return Util.isLeapYear(year) ? 366 : 365;
    }
  }, {
    key: 'daysInMonth',
    value: function daysInMonth(year, month) {
      if (month === 2) {
        return Util.isLeapYear(year) ? 29 : 28;
      } else {
        return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
      }
    }
  }, {
    key: 'parseZoneInfo',
    value: function parseZoneInfo(ts, offsetFormat, locale) {
      var timeZone = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      var date = new Date(ts),
          intl = {
        hour12: false,
        // avoid AM/PM
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      };

      if (timeZone) {
        intl.timeZone = timeZone;
      }

      var modified = Object.assign({ timeZoneName: offsetFormat }, intl),
          hasIntl = Util.hasIntl();

      if (hasIntl && Util.hasFormatToParts()) {
        var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function (m) {
          return m.type.toLowerCase() === 'timezonename';
        });
        return parsed ? parsed.value : null;
      } else if (hasIntl) {
        // this probably doesn't work for all locales
        var without = new Intl.DateTimeFormat(locale, intl).format(date),
            included = new Intl.DateTimeFormat(locale, modified).format(date),
            diffed = included.substring(without.length),
            trimmed = diffed.replace(/^[, ]+/, '');
        return trimmed;
      } else {
        return null;
      }
    }
  }, {
    key: 'normalizeZone',
    value: function normalizeZone(input) {
      if (Util.isUndefined(input) || input === null) {
        return LocalZone.instance;
      } else if (input instanceof Zone) {
        return input;
      } else if (Util.isString(input)) {
        var lowered = input.toLowerCase();
        if (lowered === 'local') return LocalZone.instance;else if (lowered === 'utc') return FixedOffsetZone.utcInstance;else if (IANAZone.isValidSpecier(lowered)) return new IANAZone(input);else return FixedOffsetZone.parseSpecifier(lowered) || Settings.defaultZone;
      } else if (Util.isNumber(input)) {
        return FixedOffsetZone.instance(input);
      } else if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input.offset) {
        // This is dumb, but the instanceof check above doesn't seem to really work
        // so we're duck checking it
        return input;
      } else {
        return Settings.defaultZone;
      }
    }
  }, {
    key: 'normalizeObject',
    value: function normalizeObject(obj, normalizer) {
      var ignoreUnknown = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var normalized = {};
      for (var u in obj) {
        if (obj.hasOwnProperty(u)) {
          var v = obj[u];
          if (v !== null && !Util.isUndefined(v) && !Number.isNaN(v)) {
            var mapped = normalizer(u, ignoreUnknown);
            if (mapped) {
              normalized[mapped] = v;
            }
          }
        }
      }
      return normalized;
    }
  }, {
    key: 'timeObject',
    value: function timeObject(obj) {
      return Util.pick(obj, ['hour', 'minute', 'second', 'millisecond']);
    }
  }, {
    key: 'untruncateYear',
    value: function untruncateYear(year) {
      if (year > 99) {
        return year;
      } else return year > 60 ? 1900 + year : 2000 + year;
    }

    // signedOffset('-5', '30') -> -330

  }, {
    key: 'signedOffset',
    value: function signedOffset(offHourStr, offMinuteStr) {
      var offHour = parseInt(offHourStr, 10) || 0,
          offMin = parseInt(offMinuteStr, 10) || 0,
          offMinSigned = offHour < 0 ? -offMin : offMin;
      return offHour * 60 + offMinSigned;
    }
  }, {
    key: 'hasIntl',
    value: function hasIntl() {
      return typeof Intl !== 'undefined' && Intl.DateTimeFormat;
    }
  }, {
    key: 'hasFormatToParts',
    value: function hasFormatToParts() {
      return !Util.isUndefined(Intl.DateTimeFormat.prototype.formatToParts);
    }
  }]);
  return Util;
}();

function combineRegexes() {
  for (var _len = arguments.length, regexes = Array(_len), _key = 0; _key < _len; _key++) {
    regexes[_key] = arguments[_key];
  }

  var full = regexes.reduce(function (f, r) {
    return f + r.source;
  }, '');
  return RegExp(full);
}

function combineExtractors() {
  for (var _len2 = arguments.length, extractors = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    extractors[_key2] = arguments[_key2];
  }

  return function (m) {
    return extractors.reduce(function (_ref, ex) {
      var _ref2 = slicedToArray(_ref, 3),
          mergedVals = _ref2[0],
          mergedZone = _ref2[1],
          cursor = _ref2[2];

      var _ex = ex(m, cursor),
          _ex2 = slicedToArray(_ex, 3),
          val = _ex2[0],
          zone = _ex2[1],
          next = _ex2[2];

      return [Object.assign(mergedVals, val), mergedZone || zone, next];
    }, [{}, null, 1]).slice(0, 2);
  };
}

function parse(s) {
  if (s == null) {
    return [null, null];
  }

  for (var _len3 = arguments.length, patterns = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    patterns[_key3 - 1] = arguments[_key3];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = patterns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = slicedToArray(_step.value, 2),
          regex = _step$value[0],
          extractor = _step$value[1];

      var m = regex.exec(s);
      if (m) {
        return extractor(m);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return [null, null];
}

function simpleParse() {
  for (var _len4 = arguments.length, keys = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    keys[_key4] = arguments[_key4];
  }

  return function (match, cursor) {
    var ret = {};
    var i = void 0;

    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = parseInt(match[cursor + i]);
    }
    return [ret, null, cursor + i];
  };
}

// ISO parsing
var isoTimeRegex = /(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,9}))?)?)?(?:(Z)|([+-]\d\d)(?::?(\d\d))?)?)?$/;
var isoYmdRegex = /^([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
var isoWeekRegex = /^(\d{4})-?W(\d\d)-?(\d)/;
var isoOrdinalRegex = /^(\d{4})-?(\d{3})/;
var extractISOWeekData = simpleParse('weekYear', 'weekNumber', 'weekDay');
var extractISOOrdinalData = simpleParse('year', 'ordinal');

function extractISOYmd(match, cursor) {
  var item = {
    year: parseInt(match[cursor]),
    month: parseInt(match[cursor + 1]) || 1,
    day: parseInt(match[cursor + 2]) || 1
  };

  return [item, null, cursor + 3];
}

function extractISOTime(match, cursor) {
  var local = !match[cursor + 4] && !match[cursor + 5],
      fullOffset = Util.signedOffset(match[cursor + 5], match[cursor + 6]),
      nanosecond = Util.padEnd(match[cursor + 3] || '0'),
      item = {
    hour: parseInt(match[cursor]) || 0,
    minute: parseInt(match[cursor + 1]) || 0,
    second: parseInt(match[cursor + 2]) || 0,
    millisecond: Math.round(parseInt(nanosecond) / 1000000)
  },
      zone = local ? null : new FixedOffsetZone(fullOffset);

  return [item, zone, cursor + 7];
}

// ISO duration parsing

var isoDuration = /^P(?:(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?|(\d+)W)$/;

function extractISODuration(match) {
  var _match = slicedToArray(match, 8),
      yearStr = _match[1],
      monthStr = _match[2],
      dayStr = _match[3],
      hourStr = _match[4],
      minuteStr = _match[5],
      secondStr = _match[6],
      weekStr = _match[7];

  return {
    years: parseInt(yearStr),
    months: parseInt(monthStr),
    weeks: parseInt(weekStr),
    days: parseInt(dayStr),
    hours: parseInt(hourStr),
    minutes: parseInt(minuteStr),
    seconds: parseInt(secondStr)
  };
}

// These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that
var obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};

function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  var result = {
    year: yearStr.length === 2 ? Util.untruncateYear(parseInt(yearStr)) : parseInt(yearStr),
    month: English.monthsShort.indexOf(monthStr) + 1,
    day: parseInt(dayStr),
    hour: parseInt(hourStr),
    minute: parseInt(minuteStr)
  };

  if (secondStr) result.second = parseInt(secondStr);
  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3 ? English.weekdaysLong.indexOf(weekdayStr) + 1 : English.weekdaysShort.indexOf(weekdayStr) + 1;
  }

  return result;
}

// RFC 2822/5322
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function extractRFC2822(match) {
  var _match2 = slicedToArray(match, 12),
      weekdayStr = _match2[1],
      dayStr = _match2[2],
      monthStr = _match2[3],
      yearStr = _match2[4],
      hourStr = _match2[5],
      minuteStr = _match2[6],
      secondStr = _match2[7],
      obsOffset = _match2[8],
      milOffset = _match2[9],
      offHourStr = _match2[10],
      offMinuteStr = _match2[11],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);

  var offset = void 0;
  if (obsOffset) {
    offset = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset = 0;
  } else {
    offset = Util.signedOffset(offHourStr, offMinuteStr);
  }

  return [result, new FixedOffsetZone(offset)];
}

function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').trim();
}

// http date

var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/;
var rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/;
var ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function extractRFC1123Or850(match) {
  var _match3 = slicedToArray(match, 8),
      weekdayStr = _match3[1],
      dayStr = _match3[2],
      monthStr = _match3[3],
      yearStr = _match3[4],
      hourStr = _match3[5],
      minuteStr = _match3[6],
      secondStr = _match3[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);

  return [result, FixedOffsetZone.utcInstance];
}

function extractASCII(match) {
  var _match4 = slicedToArray(match, 8),
      weekdayStr = _match4[1],
      monthStr = _match4[2],
      dayStr = _match4[3],
      hourStr = _match4[4],
      minuteStr = _match4[5],
      secondStr = _match4[6],
      yearStr = _match4[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);

  return [result, FixedOffsetZone.utcInstance];
}

/**
 * @private
 */

var RegexParser = function () {
  function RegexParser() {
    classCallCheck(this, RegexParser);
  }

  createClass(RegexParser, null, [{
    key: 'parseISODate',
    value: function parseISODate(s) {
      return parse(s, [combineRegexes(isoYmdRegex, isoTimeRegex), combineExtractors(extractISOYmd, extractISOTime)], [combineRegexes(isoWeekRegex, isoTimeRegex), combineExtractors(extractISOWeekData, extractISOTime)], [combineRegexes(isoOrdinalRegex, isoTimeRegex), combineExtractors(extractISOOrdinalData, extractISOTime)]);
    }
  }, {
    key: 'parseRFC2822Date',
    value: function parseRFC2822Date(s) {
      return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
    }
  }, {
    key: 'parseHTTPDate',
    value: function parseHTTPDate(s) {
      return parse(s, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
    }
  }, {
    key: 'parseISODuration',
    value: function parseISODuration(s) {
      return parse(s, [isoDuration, extractISODuration]);
    }
  }]);
  return RegexParser;
}();

var INVALID$1 = 'Invalid Duration';

var lowOrderMatrix = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1000
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1000
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1000 },
  minutes: { seconds: 60, milliseconds: 60 * 1000 },
  seconds: { milliseconds: 1000 }
};
var casualMatrix = Object.assign({
  years: {
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1000
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix);
var daysInYearAccurate = 146097.0 / 400;
var daysInMonthAccurate = 146097.0 / 4800;
var accurateMatrix = Object.assign({
  years: {
    months: 12,
    weeks: daysInYearAccurate / 7,
    days: daysInYearAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000
  },
  months: {
    weeks: daysInMonthAccurate / 7,
    days: daysInMonthAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix);

var orderedUnits$1 = ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'];

function clone$1(dur, alts) {
  var clear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  // deep merge for vals
  var conf = {
    values: clear ? alts.values : Object.assign(dur.values, alts.values || {}),
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
  };
  return new Duration(conf);
}

function isHighOrderNegative(obj) {
  // only rule is that the highest-order part must be non-negative
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = orderedUnits$1[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var k = _step.value;

      if (obj[k]) return obj[k] < 0;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return false;
}

/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime.plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link fromMillis}, {@link fromObject}, or {@link fromISO}.
 * * **Unit values** See the {@link years}, {@link months}, {@link weeks}, {@link days}, {@link hours}, {@link minutes}, {@link seconds}, {@link milliseconds} accessors.
 * * **Configuration** See  {@link locale} and {@link numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link plus}, {@link minus}, {@link normalize}, {@link set}, {@link reconfigure}, {@link shiftTo}, and {@link negate}.
 * * **Output** To convert the Duration into other representations, see {@link as}, {@link toISO}, {@link toFormat}, and {@link toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */
var Duration = function () {
  /**
   * @private
   */
  function Duration(config) {
    classCallCheck(this, Duration);

    var accurate = config.conversionAccuracy === 'longterm' || false;

    Object.defineProperty(this, 'values', {
      value: config.values,
      enumerable: true
    });
    Object.defineProperty(this, 'loc', {
      value: config.loc || Locale.create(),
      enumerable: true
    });
    Object.defineProperty(this, 'conversionAccuracy', {
      value: accurate ? 'longterm' : 'casual',
      enumerable: true
    });
    Object.defineProperty(this, 'invalidReason', {
      value: config.invalidReason || null,
      enumerable: false
    });
    Object.defineProperty(this, 'matrix', {
      value: accurate ? accurateMatrix : casualMatrix,
      enumerable: false
    });
  }

  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [obj.locale='en-US'] - the locale to use
   * @param {string} obj.numberingSystem - the numbering system to use
   * @param {string} [obj.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */


  createClass(Duration, [{
    key: 'toFormat',


    /**
     * Returns a string representation of this Duration formatted according to the specified format string.
     * @param {string} fmt - the format string
     * @param {object} opts - options
     * @param {boolean} opts.round - round numerical values
     * @return {string}
     */
    value: function toFormat(fmt) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.isValid ? Formatter.create(this.loc, opts).formatDurationFromString(this, fmt) : INVALID$1;
    }

    /**
     * Returns a Javascript object with this Duration's values.
     * @param opts - options for generating the object
     * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
     * @return {object}
     */

  }, {
    key: 'toObject',
    value: function toObject() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.isValid) return {};

      var base = Object.assign({}, this.values);

      if (opts.includeConfig) {
        base.conversionAccuracy = this.conversionAccuracy;
        base.numberingSystem = this.loc.numberingSystem;
        base.locale = this.loc.locale;
      }
      return base;
    }

    /**
     * Returns an ISO 8601-compliant string representation of this Duration.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
     * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
     * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
     * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
     * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
     * @return {string}
     */

  }, {
    key: 'toISO',
    value: function toISO() {
      // we could use the formatter, but this is an easier way to get the minimum string
      if (!this.isValid) return null;

      var s = 'P',
          norm = this.normalize();

      // ISO durations are always positive, so take the absolute value
      norm = isHighOrderNegative(norm.values) ? norm.negate() : norm;

      if (norm.years > 0) s += norm.years + 'Y';
      if (norm.months > 0) s += norm.months + 'M';
      if (norm.days > 0 || norm.weeks > 0) s += norm.days + norm.weeks * 7 + 'D';
      if (norm.hours > 0 || norm.minutes > 0 || norm.seconds > 0 || norm.milliseconds > 0) s += 'T';
      if (norm.hours > 0) s += norm.hours + 'H';
      if (norm.minutes > 0) s += norm.minutes + 'M';
      if (norm.seconds > 0) s += norm.seconds + 'S';
      return s;
    }

    /**
     * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
     * @return {string}
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      return this.toISO();
    }

    /**
     * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
     * @return {string}
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this.toISO();
    }

    /**
     * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
     * @param {Duration|number|object} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     * @return {Duration}
     */

  }, {
    key: 'plus',
    value: function plus(duration) {
      if (!this.isValid) return this;

      var dur = Util.friendlyDuration(duration),
          result = {};

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = orderedUnits$1[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var k = _step2.value;

          var val = dur.get(k) + this.get(k);
          if (val !== 0) {
            result[k] = val;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return clone$1(this, { values: result }, true);
    }

    /**
     * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
     * @param {Duration|number|object} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     * @return {Duration}
     */

  }, {
    key: 'minus',
    value: function minus(duration) {
      if (!this.isValid) return this;

      var dur = Util.friendlyDuration(duration);
      return this.plus(dur.negate());
    }

    /**
     * Get the value of unit.
     * @param {string} unit - a unit such as 'minute' or 'day'
     * @example Duration.fromObject({years: 2, days: 3}).years //=> 2
     * @example Duration.fromObject({years: 2, days: 3}).months //=> 0
     * @example Duration.fromObject({years: 2, days: 3}).days //=> 3
     * @return {number}
     */

  }, {
    key: 'get',
    value: function get$$1(unit) {
      return this[Duration.normalizeUnit(unit)];
    }

    /**
     * "Set" the values of specified units. Return a newly-constructed Duration.
     * @param {object} values - a mapping of units to numbers
     * @example dur.set({ years: 2017 })
     * @example dur.set({ hours: 8, minutes: 30 })
     * @return {Duration}
     */

  }, {
    key: 'set',
    value: function set$$1(values) {
      var mixed = Object.assign(this.values, Util.normalizeObject(values, Duration.normalizeUnit));
      return clone$1(this, { values: mixed });
    }

    /**
     * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
     * @example dur.reconfigure({ locale: 'en-GB' })
     * @return {Duration}
     */

  }, {
    key: 'reconfigure',
    value: function reconfigure() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          locale = _ref.locale,
          numberingSystem = _ref.numberingSystem,
          conversionAccuracy = _ref.conversionAccuracy;

      var loc = this.loc.clone({ locale: locale, numberingSystem: numberingSystem }),
          opts = { loc: loc };

      if (conversionAccuracy) {
        opts.conversionAccuracy = conversionAccuracy;
      }

      return clone$1(this, opts);
    }

    /**
     * Return the length of the duration in the specified unit.
     * @param {string} unit - a unit such as 'minutes' or 'days'
     * @example Duration.fromObject({years: 1}).as('days') //=> 365
     * @example Duration.fromObject({years: 1}).as('months') //=> 12
     * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
     * @return {number}
     */

  }, {
    key: 'as',
    value: function as(unit) {
      return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
    }

    /**
     * Reduce this Duration to its canonical representation in its current units.
     * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
     * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
     * @return {Duration}
     */

  }, {
    key: 'normalize',
    value: function normalize() {
      if (!this.isValid) return this;

      var neg = isHighOrderNegative(this.values),
          dur = neg ? this.negate() : this,
          shifted = dur.shiftTo.apply(dur, toConsumableArray(Object.keys(this.values)));
      return neg ? shifted.negate() : shifted;
    }

    /**
     * Convert this Duration into its representation in a different set of units.
     * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
     * @return {Duration}
     */

  }, {
    key: 'shiftTo',
    value: function shiftTo() {
      for (var _len = arguments.length, units = Array(_len), _key = 0; _key < _len; _key++) {
        units[_key] = arguments[_key];
      }

      if (!this.isValid) return this;

      if (units.length === 0) {
        return this;
      }

      units = units.map(function (u) {
        return Duration.normalizeUnit(u);
      });

      var built = {},
          accumulated = {},
          vals = this.toObject();
      var lastUnit = void 0;

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = orderedUnits$1[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var k = _step3.value;

          if (units.indexOf(k) >= 0) {
            built[k] = 0;
            lastUnit = k;

            // anything we haven't boiled down yet should get boiled to this unit
            for (var ak in accumulated) {
              if (accumulated.hasOwnProperty(ak)) {
                built[k] += this.matrix[ak][k] * accumulated[ak];
              }
              delete accumulated[ak];
            }

            // plus anything that's already in this unit
            if (Util.isNumber(vals[k])) {
              built[k] += vals[k];
            }

            // plus anything further down the chain that should be rolled up in to this
            for (var down in vals) {
              if (orderedUnits$1.indexOf(down) > orderedUnits$1.indexOf(k)) {
                var conv = this.matrix[k][down],
                    added = Math.floor(vals[down] / conv);
                built[k] += added;
                vals[down] -= added * conv;
              }
            }
            // otherwise, keep it in the wings to boil it later
          } else if (Util.isNumber(vals[k])) {
            accumulated[k] = vals[k];
          }
        }

        // anything leftover becomes the decimal for the last unit
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      if (lastUnit) {
        for (var key in accumulated) {
          if (accumulated.hasOwnProperty(key)) {
            built[lastUnit] += accumulated[key] / this.matrix[lastUnit][key];
          }
        }
      }

      return clone$1(this, { values: built }, true);
    }

    /**
     * Return the negative of this Duration.
     * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
     * @return {Duration}
     */

  }, {
    key: 'negate',
    value: function negate() {
      if (!this.isValid) return this;
      var negated = {};
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = Object.keys(this.values)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var k = _step4.value;

          negated[k] = -this.values[k];
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return clone$1(this, { values: negated });
    }

    /**
     * Get the years.
     * @return {number}
     */

  }, {
    key: 'equals',


    /**
     * Equality check
     * Two Durations are equal iff they have the same units and the same values for each unit.
     * @param {Duration} other
     * @return {boolean}
     */
    value: function equals(other) {
      if (!this.isValid || !other.isValid) {
        return false;
      }

      if (!this.loc.equals(other.loc)) {
        return false;
      }

      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = orderedUnits$1[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var u = _step5.value;

          if (this.values[u] !== other.values[u]) {
            return false;
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      return true;
    }
  }, {
    key: 'locale',


    /**
     * Get  the locale of a Duration, such 'en-GB'
     * @return {string}
     */
    get: function get$$1() {
      return this.loc.locale;
    }

    /**
     * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
     *
     * @return {string}
     */

  }, {
    key: 'numberingSystem',
    get: function get$$1() {
      return this.loc.numberingSystem;
    }
  }, {
    key: 'years',
    get: function get$$1() {
      return this.isValid ? this.values.years || 0 : NaN;
    }

    /**
     * Get the months.
     * @return {number}
     */

  }, {
    key: 'months',
    get: function get$$1() {
      return this.isValid ? this.values.months || 0 : NaN;
    }

    /**
     * Get the weeks
     * @return {number}
     */

  }, {
    key: 'weeks',
    get: function get$$1() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }

    /**
     * Get the days.
     * @return {number
     */

  }, {
    key: 'days',
    get: function get$$1() {
      return this.isValid ? this.values.days || 0 : NaN;
    }

    /**
     * Get the hours.
     * @return {number}
     */

  }, {
    key: 'hours',
    get: function get$$1() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }

    /**
     * Get the minutes.
     * @return {number}
     */

  }, {
    key: 'minutes',
    get: function get$$1() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }

    /**
     * Get the seconds.
     * @return {number}
     */

  }, {
    key: 'seconds',
    get: function get$$1() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }

    /**
     * Get the milliseconds.
     * @return {number}
     */

  }, {
    key: 'milliseconds',
    get: function get$$1() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }

    /**
     * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
     * on invalid DateTimes or Intervals.
     * @return {boolean}
     */

  }, {
    key: 'isValid',
    get: function get$$1() {
      return this.invalidReason === null;
    }

    /**
     * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
     * @return {string}
     */

  }, {
    key: 'invalidReason',
    get: function get$$1() {
      return this.invalidReason;
    }
  }], [{
    key: 'fromMillis',
    value: function fromMillis(count, opts) {
      return Duration.fromObject(Object.assign({ milliseconds: count }, opts));
    }

    /**
     * Create an DateTime from a Javascript object with keys like 'years' and 'hours'.
     * @param {Object} obj - the object to create the DateTime from
     * @param {number} obj.years
     * @param {number} obj.months
     * @param {number} obj.weeks
     * @param {number} obj.days
     * @param {number} obj.hours
     * @param {number} obj.minutes
     * @param {number} obj.seconds
     * @param {number} obj.milliseconds
     * @param {string} [obj.locale='en-US'] - the locale to use
     * @param {string} obj.numberingSystem - the numbering system to use
     * @param {string} [obj.conversionAccuracy='casual'] - the conversion system to use
     * @return {Duration}
     */

  }, {
    key: 'fromObject',
    value: function fromObject(obj) {
      return new Duration({
        values: Util.normalizeObject(obj, Duration.normalizeUnit, true),
        loc: Locale.fromObject(obj),
        conversionAccuracy: obj.conversionAccuracy
      });
    }

    /**
     * Create a DateTime from an ISO 8601 duration string.
     * @param {string} text - text to parse
     * @param {Object} opts - options for parsing
     * @param {string} [obj.locale='en-US'] - the locale to use
     * @param {string} obj.numberingSystem - the numbering system to use
     * @param {string} [obj.conversionAccuracy='casual'] - the conversion system to use
     * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
     * @example Duration.fromISO('P3Y6M4DT12H30M5S').toObject() //=> { years: 3, months: 6, day: 4, hours: 12, minutes: 30, seconds: 5 }
     * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
     * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
     * @return {Duration}
     */

  }, {
    key: 'fromISO',
    value: function fromISO(text, opts) {
      var obj = Object.assign(RegexParser.parseISODuration(text), opts);
      return Duration.fromObject(obj);
    }

    /**
     * Create an invalid Duration.
     * @param {string} reason - reason this is invalid
     * @return {Duration}
     */

  }, {
    key: 'invalid',
    value: function invalid(reason) {
      if (!reason) {
        throw new InvalidArgumentError('need to specify a reason the DateTime is invalid');
      }
      if (Settings.throwOnInvalid) {
        throw new InvalidDurationError(reason);
      } else {
        return new Duration({ invalidReason: reason });
      }
    }

    /**
     * @private
     */

  }, {
    key: 'normalizeUnit',
    value: function normalizeUnit(unit) {
      var ignoreUnknown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var normalized = {
        year: 'years',
        years: 'years',
        month: 'months',
        months: 'months',
        week: 'weeks',
        weeks: 'weeks',
        day: 'days',
        days: 'days',
        hour: 'hours',
        hours: 'hours',
        minute: 'minutes',
        minutes: 'minutes',
        second: 'seconds',
        seconds: 'seconds',
        millisecond: 'milliseconds',
        milliseconds: 'milliseconds'
      }[unit ? unit.toLowerCase() : unit];

      if (!ignoreUnknown && !normalized) throw new InvalidUnitError(unit);

      return normalized;
    }
  }]);
  return Duration;
}();

var INVALID$2 = 'Invalid Interval';

function validateStartEnd(start, end) {
  return !!start && !!end && start.isValid && end.isValid && start <= end;
}

/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link fromDateTimes}, {@link after}, {@link before}, or {@link fromISO}.
 * * **Accessors** Use {@link start} and {@link end} to get the start and end.
 * * **Interogation** To analyze the Interval, use {@link count}, {@link length}, {@link hasSame}, {@link contains}, {@link isAfter}, or {@link isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link set}, {@link splitAt}, {@link splitBy}, {@link divideEqually}, {@link merge}, {@link xor}, {@link union}, {@link intersection}, or {@link difference}.
 * * **Comparison** To compare this Interval to another one, use {@link equals}, {@link overlaps}, {@link abutsStart}, {@link abutsEnd}, {@link engulfs}
 * * **Output*** To convert the Interval into other representations, see {@link toString}, {@link toISO}, {@link toFormat}, and {@link toDuration}.
 */
var Interval = function () {
  /**
   * @private
   */
  function Interval(config) {
    classCallCheck(this, Interval);

    Object.defineProperty(this, 's', { value: config.start, enumerable: true });
    Object.defineProperty(this, 'e', { value: config.end, enumerable: true });
    Object.defineProperty(this, 'invalidReason', {
      value: config.invalidReason || null,
      enumerable: false
    });
  }

  /**
   * Create an invalid Interval.
   * @return {Interval}
   */


  createClass(Interval, [{
    key: 'length',


    /**
     * Returns the length of the Interval in the specified unit.
     * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
     * @return {number}
     */
    value: function length() {
      var unit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'milliseconds';

      return this.isValid ? this.toDuration.apply(this, [unit]).get(unit) : NaN;
    }

    /**
     * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
     * Unlike {@link length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
     * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
     * @param {string} [unit='milliseconds'] - the unit of time to count.
     * @return {number}
     */

  }, {
    key: 'count',
    value: function count() {
      var unit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'milliseconds';

      if (!this.isValid) return NaN;
      var start = this.start.startOf(unit),
          end = this.end.startOf(unit);
      return Math.floor(end.diff(start, unit).get(unit)) + 1;
    }

    /**
     * Returns whether this Interval's start and end are both in the same unit of time
     * @param {string} unit - the unit of time to check sameness on
     * @return {boolean}
     */

  }, {
    key: 'hasSame',
    value: function hasSame(unit) {
      return this.isValid ? this.e.minus(1).hasSame(this.s, unit) : false;
    }

    /**
     * Return whether this Interval has the same start and end DateTimes.
     * @return {boolean}
     */

  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return this.s.valueOf() === this.e.valueOf();
    }

    /**
     * Return this Interval's start is after the specified DateTime.
     * @param {DateTime} dateTime
     * @return {boolean}
     */

  }, {
    key: 'isAfter',
    value: function isAfter(dateTime) {
      if (!this.isValid) return false;
      return this.s > dateTime;
    }

    /**
     * Return this Interval's end is before the specified DateTime.
     * @param {Datetime} dateTime
     * @return {boolean}
     */

  }, {
    key: 'isBefore',
    value: function isBefore(dateTime) {
      if (!this.isValid) return false;
      return this.e.plus(1) < dateTime;
    }

    /**
     * Return this Interval contains the specified DateTime.
     * @param {DateTime} dateTime
     * @return {boolean}
     */

  }, {
    key: 'contains',
    value: function contains(dateTime) {
      if (!this.isValid) return false;
      return this.s <= dateTime && this.e > dateTime;
    }

    /**
     * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
     * @param {object} values - the values to set
     * @param {DateTime} values.start - the starting DateTime
     * @param {DateTime} values.end - the ending DateTime
     * @return {Interval}
     */

  }, {
    key: 'set',
    value: function set$$1() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          start = _ref.start,
          end = _ref.end;

      if (!this.isValid) return this;
      return Interval.fromDateTimes(start || this.s, end || this.e);
    }

    /**
     * Split this Interval at each of the specified DateTimes
     * @param {...DateTimes} dateTimes - the unit of time to count.
     * @return {[Interval]}
     */

  }, {
    key: 'splitAt',
    value: function splitAt() {
      if (!this.isValid) return [];

      for (var _len = arguments.length, dateTimes = Array(_len), _key = 0; _key < _len; _key++) {
        dateTimes[_key] = arguments[_key];
      }

      var sorted = dateTimes.map(Util.friendlyDateTime).sort(),
          results = [];
      var s = this.s,
          i = 0;


      while (s < this.e) {
        var added = sorted[i] || this.e,
            next = +added > +this.e ? this.e : added;
        results.push(Interval.fromDateTimes(s, next));
        s = next;
        i += 1;
      }

      return results;
    }

    /**
     * Split this Interval into smaller Intervals, each of the specified length.
     * Left over time is grouped into a smaller interval
     * @param {Duration|number|object} duration - The length of each resulting interval.
     * @return {[Interval]}
     */

  }, {
    key: 'splitBy',
    value: function splitBy(duration) {
      if (!this.isValid) return [];
      var dur = Util.friendlyDuration(duration),
          results = [];
      var s = this.s,
          added = void 0,
          next = void 0;


      while (s < this.e) {
        added = s.plus(dur);
        next = +added > +this.e ? this.e : added;
        results.push(Interval.fromDateTimes(s, next));
        s = next;
      }

      return results;
    }

    /**
     * Split this Interval into the specified number of smaller intervals.
     * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
     * @return {[Interval]}
     */

  }, {
    key: 'divideEqually',
    value: function divideEqually(numberOfParts) {
      if (!this.isValid) return [];
      return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
    }

    /**
     * Return whether this Interval overlaps with the specified Interval
     * @param {Interval} other
     * @return {boolean}
     */

  }, {
    key: 'overlaps',
    value: function overlaps(other) {
      return this.e > other.s && this.s < other.e;
    }

    /**
     * Return whether this Interval's end is adjacent to the specified Interval's start.
     * @param {Interval} other
     * @return {boolean}
     */

  }, {
    key: 'abutsStart',
    value: function abutsStart(other) {
      if (!this.isValid) return false;
      return +this.e === +other.s;
    }

    /**
     * Return whether this Interval's start is adjacent to the specified Interval's end.
     * @param {Interval} other
     * @return {boolean}
     */

  }, {
    key: 'abutsEnd',
    value: function abutsEnd(other) {
      if (!this.isValid) return false;
      return +other.e === +this.s;
    }

    /**
     * Return whether this Interval engulfs the start and end of the specified Interval.
     * @param {Interval} other
     * @return {boolean}
     */

  }, {
    key: 'engulfs',
    value: function engulfs(other) {
      if (!this.isValid) return false;
      return this.s <= other.s && this.e >= other.e;
    }

    /**
     * Return whether this Interval has the same start and end as the specified Interval.
     * @param {Interval} other
     * @return {boolean}
     */

  }, {
    key: 'equals',
    value: function equals(other) {
      return this.s.equals(other.s) && this.e.equals(other.e);
    }

    /**
     * Return an Interval representing the intersection of this Interval and the specified Interval.
     * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
     * @param {Interval} other
     * @return {Interval}
     */

  }, {
    key: 'intersection',
    value: function intersection(other) {
      if (!this.isValid) return this;
      var s = this.s > other.s ? this.s : other.s,
          e = this.e < other.e ? this.e : other.e;

      if (s > e) {
        return null;
      } else {
        return Interval.fromDateTimes(s, e);
      }
    }

    /**
     * Return an Interval representing the union of this Interval and the specified Interval.
     * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
     * @param {Interval} other
     * @return {Interval}
     */

  }, {
    key: 'union',
    value: function union(other) {
      if (!this.isValid) return this;
      var s = this.s < other.s ? this.s : other.s,
          e = this.e > other.e ? this.e : other.e;
      return Interval.fromDateTimes(s, e);
    }

    /**
     * Merge an array of Intervals into a equivalent minimal set of Intervals.
     * Combines overlapping and adjacent Intervals.
     * @param {[Interval]} intervals
     * @return {[Interval]}
     */

  }, {
    key: 'difference',


    /**
     * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
     * @param {...Interval} intervals
     * @return {Interval}
     */
    value: function difference() {
      var _this = this;

      for (var _len2 = arguments.length, intervals = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        intervals[_key2] = arguments[_key2];
      }

      return Interval.xor([this].concat(intervals)).map(function (i) {
        return _this.intersection(i);
      }).filter(function (i) {
        return i && !i.isEmpty();
      });
    }

    /**
     * Returns a string representation of this Interval appropriate for debugging.
     * @return {string}
     */

  }, {
    key: 'toString',
    value: function toString() {
      if (!this.isValid) return INVALID$2;
      return '[' + this.s.toISO() + ' \u2013 ' + this.e.toISO() + ')';
    }

    /**
     * Returns an ISO 8601-compliant string representation of this Interval.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @param {object} opts - The same options as {@link DateTime.toISO}
     * @return {string}
     */

  }, {
    key: 'toISO',
    value: function toISO(opts) {
      if (!this.isValid) return INVALID$2;
      return this.s.toISO(opts) + '/' + this.e.toISO(opts);
    }

    /**
     * Returns a string representation of this Interval formatted according to the specified format string.
     * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime.toFormat} for details.
     * @param {object} opts - options
     * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
     * @return {string}
     */

  }, {
    key: 'toFormat',
    value: function toFormat(dateFormat) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$separator = _ref2.separator,
          separator = _ref2$separator === undefined ? ' – ' : _ref2$separator;

      if (!this.isValid) return INVALID$2;
      return '' + this.s.toFormat(dateFormat) + separator + this.e.toFormat(dateFormat);
    }

    /**
     * Return a Duration representing the time spanned by this interval.
     * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
     * @param {Object} opts - options that affect the creation of the Duration
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
     * @return {Duration}
     */

  }, {
    key: 'toDuration',
    value: function toDuration(unit, opts) {
      if (!this.isValid) {
        return Duration.invalid(this.invalidReason);
      }
      return this.e.diff(this.s, unit, opts);
    }
  }, {
    key: 'start',


    /**
     * Returns the start of the Interval
     * @return {DateTime}
     */
    get: function get$$1() {
      return this.isValid ? this.s : null;
    }

    /**
     * Returns the end of the Interval
     * @return {DateTime}
     */

  }, {
    key: 'end',
    get: function get$$1() {
      return this.isValid ? this.e : null;
    }

    /**
     * Returns whether this Interval's end is at least its start, i.e. that the Interval isn't 'backwards'.
     * @return {boolean}
     */

  }, {
    key: 'isValid',
    get: function get$$1() {
      return this.invalidReason === null;
    }

    /**
     * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
     * @return {string}
     */

  }, {
    key: 'invalidReason',
    get: function get$$1() {
      return this.invalidReason;
    }
  }], [{
    key: 'invalid',
    value: function invalid(reason) {
      if (!reason) {
        throw new InvalidArgumentError('need to specify a reason the DateTime is invalid');
      }
      if (Settings.throwOnInvalid) {
        throw new InvalidIntervalError(reason);
      } else {
        return new Interval({ invalidReason: reason });
      }
    }

    /**
     * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
     * @param {DateTime|object|Date} start
     * @param {DateTime|object|Date} end
     * @return {Interval}
     */

  }, {
    key: 'fromDateTimes',
    value: function fromDateTimes(start, end) {
      var builtStart = Util.friendlyDateTime(start),
          builtEnd = Util.friendlyDateTime(end);

      return new Interval({
        start: builtStart,
        end: builtEnd,
        invalidReason: validateStartEnd(builtStart, builtEnd) ? null : 'invalid endpoints'
      });
    }

    /**
     * Create an Interval from a start DateTime and a Duration to extend to.
     * @param {DateTime|object|Date} start
     * @param {Duration|number|object} duration - the length of the Interval.
     * @return {Interval}
     */

  }, {
    key: 'after',
    value: function after(start, duration) {
      var dur = Util.friendlyDuration(duration),
          dt = Util.friendlyDateTime(start);
      return Interval.fromDateTimes(dt, dt.plus(dur));
    }

    /**
     * Create an Interval from an end DateTime and a Duration to extend backwards to.
     * @param {DateTime|object|Date} end
     * @param {Duration|number|object} duration - the length of the Interval.
     * @return {Interval}
     */

  }, {
    key: 'before',
    value: function before(end, duration) {
      var dur = Util.friendlyDuration(duration),
          dt = Util.friendlyDateTime(end);
      return Interval.fromDateTimes(dt.minus(dur), dt);
    }

    /**
     * Create an Interval from an ISO 8601 string
     * @param {string} string - the ISO string to parse
     * @param {object} opts - options to pass {@see DateTime.fromISO}
     * @return {Interval}
     */

  }, {
    key: 'fromISO',
    value: function fromISO(string, opts) {
      if (string) {
        var _string$split = string.split(/\//),
            _string$split2 = slicedToArray(_string$split, 2),
            s = _string$split2[0],
            e = _string$split2[1];

        if (s && e) {
          return Interval.fromDateTimes(DateTime.fromISO(s, opts), DateTime.fromISO(e, opts));
        }
      }
      return Interval.invalid('invalid ISO format');
    }
  }, {
    key: 'merge',
    value: function merge(intervals) {
      var _intervals$sort$reduc = intervals.sort(function (a, b) {
        return a.s - b.s;
      }).reduce(function (_ref3, item) {
        var _ref4 = slicedToArray(_ref3, 2),
            sofar = _ref4[0],
            current = _ref4[1];

        if (!current) {
          return [sofar, item];
        } else if (current.overlaps(item) || current.abutsStart(item)) {
          return [sofar, current.union(item)];
        } else {
          return [sofar.concat([current]), item];
        }
      }, [[], null]),
          _intervals$sort$reduc2 = slicedToArray(_intervals$sort$reduc, 2),
          found = _intervals$sort$reduc2[0],
          final = _intervals$sort$reduc2[1];

      if (final) {
        found.push(final);
      }
      return found;
    }

    /**
     * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
     * @param {[Interval]} intervals
     * @return {[Interval]}
     */

  }, {
    key: 'xor',
    value: function xor(intervals) {
      var start = null,
          currentCount = 0;
      var results = [],
          ends = intervals.map(function (i) {
        return [{ time: i.s, type: 's' }, { time: i.e, type: 'e' }];
      }),
          arr = Util.flatten(ends).sort(function (a, b) {
        return a.time - b.time;
      });

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var i = _step.value;

          currentCount += i.type === 's' ? 1 : -1;

          if (currentCount === 1) {
            start = i.time;
          } else {
            if (start && +start !== +i.time) {
              results.push(Interval.fromDateTimes(start, i.time));
            }

            start = null;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return Interval.merge(results);
    }
  }]);
  return Interval;
}();

/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */
var Info = function () {
  function Info() {
    classCallCheck(this, Info);
  }

  createClass(Info, null, [{
    key: 'hasDST',

    /**
     * Return whether the specified zone contains a DST.
     * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
     * @return {boolean}
     */
    value: function hasDST() {
      var zone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Settings.defaultZone;

      var proto = DateTime.local().setZone(zone).set({ month: 12 });

      return !zone.universal && proto.offset !== proto.set({ month: 6 }).offset;
    }

    /**
     * Return an array of standalone month names.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
     * @param {object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @param {string} [opts.outputCalendar='gregory'] - the calendar
     * @example Info.months()[0] //=> 'January'
     * @example Info.months('short')[0] //=> 'Jan'
     * @example Info.months('numeric')[0] //=> '1'
     * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
     * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
     * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
     * @return {[string]}
     */

  }, {
    key: 'months',
    value: function months() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'long';

      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$locale = _ref.locale,
          locale = _ref$locale === undefined ? null : _ref$locale,
          _ref$numberingSystem = _ref.numberingSystem,
          numberingSystem = _ref$numberingSystem === undefined ? null : _ref$numberingSystem,
          _ref$outputCalendar = _ref.outputCalendar,
          outputCalendar = _ref$outputCalendar === undefined ? 'gregory' : _ref$outputCalendar;

      return Locale.create(locale, numberingSystem, outputCalendar).months(length);
    }

    /**
     * Return an array of format month names.
     * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
     * changes the string.
     * See {@link months}
     * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
     * @param {object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.numbering=null] - the numbering system
     * @param {string} [opts.outputCalendar='gregory'] - the calendar
     * @return {[string]}
     */

  }, {
    key: 'monthsFormat',
    value: function monthsFormat() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'long';

      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$locale = _ref2.locale,
          locale = _ref2$locale === undefined ? null : _ref2$locale,
          _ref2$numberingSystem = _ref2.numberingSystem,
          numberingSystem = _ref2$numberingSystem === undefined ? null : _ref2$numberingSystem,
          _ref2$outputCalendar = _ref2.outputCalendar,
          outputCalendar = _ref2$outputCalendar === undefined ? 'gregory' : _ref2$outputCalendar;

      return Locale.create(locale, numberingSystem, outputCalendar).months(length, true);
    }

    /**
     * Return an array of standalone week names.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
     * @param {object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.numbering=null] - the numbering system
     * @param {string} [opts.outputCalendar='gregory'] - the calendar
     * @example Info.weekdays()[0] //=> 'Monday'
     * @example Info.weekdays('short')[0] //=> 'Mon'
     * @example Info.weekdays('short', 'fr-CA')[0] //=> 'lun.'
     * @example Info.weekdays('short', 'ar')[0] //=> 'الاثنين'
     * @return {[string]}
     */

  }, {
    key: 'weekdays',
    value: function weekdays() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'long';

      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref3$locale = _ref3.locale,
          locale = _ref3$locale === undefined ? null : _ref3$locale,
          _ref3$numberingSystem = _ref3.numberingSystem,
          numberingSystem = _ref3$numberingSystem === undefined ? null : _ref3$numberingSystem;

      return Locale.create(locale, numberingSystem, null).weekdays(length);
    }

    /**
     * Return an array of format week names.
     * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
     * changes the string.
     * See {@link weekdays}
     * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
     * @param {object} opts - options
     * @param {string} [opts.locale=null] - the locale code
     * @param {string} [opts.numbering=null] - the numbering system
     * @param {string} [opts.outputCalendar='gregory'] - the calendar
     * @return {[string]}
     */

  }, {
    key: 'weekdaysFormat',
    value: function weekdaysFormat() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'long';

      var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref4$locale = _ref4.locale,
          locale = _ref4$locale === undefined ? null : _ref4$locale,
          _ref4$numberingSystem = _ref4.numberingSystem,
          numberingSystem = _ref4$numberingSystem === undefined ? null : _ref4$numberingSystem;

      return Locale.create(locale, numberingSystem, null).weekdays(length, true);
    }

    /**
     * Return an array of meridiems.
     * @param {object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @example Info.meridiems() //=> [ 'AM', 'PM' ]
     * @example Info.meridiems('de') //=> [ 'vorm.', 'nachm.' ]
     * @return {[string]}
     */

  }, {
    key: 'meridiems',
    value: function meridiems() {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref5$locale = _ref5.locale,
          locale = _ref5$locale === undefined ? null : _ref5$locale;

      return Locale.create(locale).meridiems();
    }

    /**
     * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
     * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
     * @param {object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @example Info.eras() //=> [ 'BC', 'AD' ]
     * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
     * @example Info.eras('long', 'fr') //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
     * @return {[string]}
     */

  }, {
    key: 'eras',
    value: function eras() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'short';

      var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref6$locale = _ref6.locale,
          locale = _ref6$locale === undefined ? null : _ref6$locale;

      return Locale.create(locale, null, 'gregory').eras(length);
    }

    /**
     * Return the set of available features in this environment.
     * Some features of Luxon are not available in all environments. For example, on older browsers, timezone support is not available. Use this function to figure out if that's the case.
     * Keys:
     * * `timezones`: whether this environment supports IANA timezones
     * * `intlTokens`: whether this environment supports internationalized token-based formatting/parsing
     * * `intl`: whether this environment supports general internationalization
     * @example Info.feature() //=> { intl: true, intlTokens: false, timezones: true }
     * @return {object}
     */

  }, {
    key: 'features',
    value: function features() {
      var intl = false,
          intlTokens = false,
          zones = false;

      if (Util.hasIntl()) {
        intl = true;
        intlTokens = Util.hasFormatToParts();

        try {
          zones = new Intl.DateTimeFormat('en', { timeZone: 'America/New_York' }).resolvedOptions().timeZone === 'America/New_York';
        } catch (e) {
          zones = false;
        }
      }

      return { intl: intl, intlTokens: intlTokens, zones: zones };
    }
  }]);
  return Info;
}();

var MISSING_FTP = 'missing Intl.DateTimeFormat.formatToParts support';

function intUnit(regex) {
  var post = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (i) {
    return i;
  };

  return { regex: regex, deser: function deser(_ref) {
      var _ref2 = slicedToArray(_ref, 1),
          s = _ref2[0];

      return post(parseInt(s));
    } };
}

function fixListRegex(s) {
  // make dots optional and also make them literal
  return s.replace(/\./, '\\.?');
}

function stripInsensitivities(s) {
  return s.replace(/\./, '').toLowerCase();
}

function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join('|')),
      deser: function deser(_ref3) {
        var _ref4 = slicedToArray(_ref3, 1),
            s = _ref4[0];

        return strings.findIndex(function (i) {
          return stripInsensitivities(s) === stripInsensitivities(i);
        }) + startIndex;
      }
    };
  }
}

function offset(regex, groups) {
  return { regex: regex, deser: function deser(_ref5) {
      var _ref6 = slicedToArray(_ref5, 3),
          h = _ref6[1],
          m = _ref6[2];

      return Util.signedOffset(h, m);
    }, groups: groups };
}

function simple(regex) {
  return { regex: regex, deser: function deser(_ref7) {
      var _ref8 = slicedToArray(_ref7, 1),
          s = _ref8[0];

      return s;
    } };
}

function unitForToken(token, loc) {
  var one = /\d/,
      two = /\d\d/,
      three = /\d{3}/,
      four = /\d{4}/,
      oneOrTwo = /\d\d?/,
      oneToThree = /\d\d?\d?/,
      twoToFour = /\d\d(?:\d{2})?/,
      literal = function literal(t) {
    return { regex: RegExp(t.val), deser: function deser(_ref9) {
        var _ref10 = slicedToArray(_ref9, 1),
            s = _ref10[0];

        return s;
      }, literal: true };
  },
      unitate = function unitate(t) {
    if (token.literal) {
      return literal(t);
    }

    switch (t.val) {
      // era
      case 'G':
        return oneOf(loc.eras('short', false), 0);
      case 'GG':
        return oneOf(loc.eras('long', false), 0);
      // years
      case 'yyyy':
        return intUnit(four);
      case 'yy':
        return intUnit(twoToFour, Util.untruncateYear);
      // months
      case 'M':
        return intUnit(oneOrTwo);
      case 'MM':
        return intUnit(two);
      case 'MMM':
        return oneOf(loc.months('short', false, false), 1);
      case 'MMMM':
        return oneOf(loc.months('long', false, false), 1);
      case 'L':
        return intUnit(oneOrTwo);
      case 'LL':
        return intUnit(two);
      case 'LLL':
        return oneOf(loc.months('short', true, false), 1);
      case 'LLLL':
        return oneOf(loc.months('long', true, false), 1);
      // dates
      case 'd':
        return intUnit(oneOrTwo);
      case 'dd':
        return intUnit(two);
      // ordinals
      case 'o':
        return intUnit(oneToThree);
      case 'ooo':
        return intUnit(three);
      // time
      case 'HH':
        return intUnit(two);
      case 'H':
        return intUnit(oneOrTwo);
      case 'hh':
        return intUnit(two);
      case 'h':
        return intUnit(oneOrTwo);
      case 'mm':
        return intUnit(two);
      case 'm':
        return intUnit(oneOrTwo);
      case 's':
        return intUnit(oneOrTwo);
      case 'ss':
        return intUnit(two);
      case 'S':
        return intUnit(oneToThree);
      case 'SSS':
        return intUnit(three);
      // meridiem
      case 'a':
        return oneOf(loc.meridiems(), 0);
      // weekYear (k)
      case 'kkkk':
        return intUnit(four);
      case 'kk':
        return intUnit(twoToFour, Util.untruncateYear);
      // weekNumber (W)
      case 'W':
        return intUnit(oneOrTwo);
      case 'WW':
        return intUnit(two);
      // weekdays
      case 'E':
      case 'c':
        return intUnit(one);
      case 'EEE':
        return oneOf(loc.weekdays('short', false, false), 1);
      case 'EEEE':
        return oneOf(loc.weekdays('long', false, false), 1);
      case 'ccc':
        return oneOf(loc.weekdays('short', true, false), 1);
      case 'cccc':
        return oneOf(loc.weekdays('long', true, false), 1);
      // offset/zone
      case 'Z':
      case 'ZZ':
        return offset(/([+-]\d{1,2})(?::(\d{2}))?/, 2);
      case 'ZZZ':
        return offset(/([+-]\d{1,2})(\d{2})?/, 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are
      case 'z':
        return simple(/[A-Za-z_]+\/[A-Za-z_]+/);
      default:
        return literal(t);
    }
  };

  var unit = unitate(token) || {
    invalidReason: MISSING_FTP
  };

  unit.token = token;

  return unit;
}

function buildRegex(units) {
  var re = units.map(function (u) {
    return u.regex;
  }).reduce(function (f, r) {
    return f + '(' + r.source + ')';
  }, '');
  return ['^' + re + '$', units];
}

function match(input, regex, handlers) {
  var matches = input.match(regex);

  if (matches) {
    var all = {};
    var matchIndex = 1;
    for (var i in handlers) {
      if (handlers.hasOwnProperty(i)) {
        var h = handlers[i],
            groups = h.groups ? h.groups + 1 : 1;
        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }
        matchIndex += groups;
      }
    }
    return [matches, all];
  } else {
    return [matches, {}];
  }
}

function dateTimeFromMatches(matches) {
  var toField = function toField(token) {
    switch (token) {
      case 'S':
        return 'millisecond';
      case 's':
        return 'second';
      case 'm':
        return 'minute';
      case 'h':
      case 'H':
        return 'hour';
      case 'd':
        return 'day';
      case 'o':
        return 'ordinal';
      case 'L':
      case 'M':
        return 'month';
      case 'y':
        return 'year';
      case 'E':
      case 'c':
        return 'weekday';
      case 'W':
        return 'weekNumber';
      case 'k':
        return 'weekYear';
      default:
        return null;
    }
  };

  var zone = void 0;
  if (!Util.isUndefined(matches.Z)) {
    zone = new FixedOffsetZone(matches.Z);
  } else if (!Util.isUndefined(matches.z)) {
    zone = new IANAZone(matches.z);
  } else {
    zone = null;
  }

  if (!Util.isUndefined(matches.h) && matches.a === 1) {
    matches.h += 12;
  }

  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }

  var vals = Object.keys(matches).reduce(function (r, k) {
    var f = toField(k);
    if (f) {
      r[f] = matches[k];
    }

    return r;
  }, {});

  return [vals, zone];
}

/**
 * @private
 */

var TokenParser = function () {
  function TokenParser(loc) {
    classCallCheck(this, TokenParser);

    Object.defineProperty(this, 'loc', { value: loc, enumerable: true });
  }

  createClass(TokenParser, [{
    key: 'explainParse',
    value: function explainParse(input, format) {
      var _this = this;

      var tokens = Formatter.parseFormat(format),
          units = tokens.map(function (t) {
        return unitForToken(t, _this.loc);
      }),
          disqualifyingUnit = units.find(function (t) {
        return t.invalidReason;
      });

      if (disqualifyingUnit) {
        return { input: input, tokens: tokens, invalidReason: disqualifyingUnit.invalidReason };
      } else {
        var _buildRegex = buildRegex(units),
            _buildRegex2 = slicedToArray(_buildRegex, 2),
            regexString = _buildRegex2[0],
            handlers = _buildRegex2[1],
            regex = RegExp(regexString, 'i'),
            _match = match(input, regex, handlers),
            _match2 = slicedToArray(_match, 2),
            rawMatches = _match2[0],
            matches = _match2[1],
            _ref11 = matches ? dateTimeFromMatches(matches) : [null, null],
            _ref12 = slicedToArray(_ref11, 2),
            result = _ref12[0],
            zone = _ref12[1];

        return { input: input, tokens: tokens, regex: regex, rawMatches: rawMatches, matches: matches, result: result, zone: zone };
      }
    }
  }, {
    key: 'parseDateTime',
    value: function parseDateTime(input, format) {
      var _explainParse = this.explainParse(input, format),
          result = _explainParse.result,
          zone = _explainParse.zone,
          invalidReason = _explainParse.invalidReason;

      return [result, zone, invalidReason];
    }
  }]);
  return TokenParser;
}();

var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
var leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function dayOfWeek(year, month, day) {
  var js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return js === 0 ? 7 : js;
}

function lastWeekNumber(weekYear) {
  var p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7,
      last = weekYear - 1,
      p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}

function computeOrdinal(year, month, day) {
  return day + (Util.isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}

function uncomputeOrdinal(year, ordinal) {
  var table = Util.isLeapYear(year) ? leapLadder : nonLeapLadder,
      month0 = table.findIndex(function (i) {
    return i < ordinal;
  }),
      day = ordinal - table[month0];
  return { month: month0 + 1, day: day };
}

/**
 * @private
 */

var Conversions = function () {
  function Conversions() {
    classCallCheck(this, Conversions);
  }

  createClass(Conversions, null, [{
    key: 'gregorianToWeek',
    value: function gregorianToWeek(gregObj) {
      var year = gregObj.year,
          month = gregObj.month,
          day = gregObj.day,
          ordinal = computeOrdinal(year, month, day),
          weekday = dayOfWeek(year, month, day);


      var weekNumber = Math.floor((ordinal - weekday + 10) / 7),
          weekYear = void 0;

      if (weekNumber < 1) {
        weekYear = year - 1;
        weekNumber = lastWeekNumber(weekYear);
      } else if (weekNumber > lastWeekNumber(year)) {
        weekYear = year + 1;
        weekNumber = 1;
      } else {
        weekYear = year;
      }

      return Object.assign({ weekYear: weekYear, weekNumber: weekNumber, weekday: weekday }, Util.timeObject(gregObj));
    }
  }, {
    key: 'weekToGregorian',
    value: function weekToGregorian(weekData) {
      var weekYear = weekData.weekYear,
          weekNumber = weekData.weekNumber,
          weekday = weekData.weekday,
          weekdayOfJan4 = dayOfWeek(weekYear, 1, 4),
          daysInYear = Util.daysInYear(weekYear);

      var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3,
          year = void 0;

      if (ordinal < 1) {
        year = weekYear - 1;
        ordinal += Util.daysInYear(year);
      } else if (ordinal > daysInYear) {
        year = weekYear + 1;
        ordinal -= Util.daysInYear(year);
      } else {
        year = weekYear;
      }

      var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal),
          month = _uncomputeOrdinal.month,
          day = _uncomputeOrdinal.day;

      return Object.assign({ year: year, month: month, day: day }, Util.timeObject(weekData));
    }
  }, {
    key: 'gregorianToOrdinal',
    value: function gregorianToOrdinal(gregData) {
      var year = gregData.year,
          month = gregData.month,
          day = gregData.day,
          ordinal = computeOrdinal(year, month, day);


      return Object.assign({ year: year, ordinal: ordinal }, Util.timeObject(gregData));
    }
  }, {
    key: 'ordinalToGregorian',
    value: function ordinalToGregorian(ordinalData) {
      var year = ordinalData.year,
          ordinal = ordinalData.ordinal,
          _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal),
          month = _uncomputeOrdinal2.month,
          day = _uncomputeOrdinal2.day;

      return Object.assign({ year: year, month: month, day: day }, Util.timeObject(ordinalData));
    }
  }, {
    key: 'hasInvalidWeekData',
    value: function hasInvalidWeekData(obj) {
      var validYear = Util.isNumber(obj.weekYear),
          validWeek = Util.numberBetween(obj.weekNumber, 1, lastWeekNumber(obj.weekYear)),
          validWeekday = Util.numberBetween(obj.weekday, 1, 7);

      if (!validYear) {
        return 'weekYear out of range';
      } else if (!validWeek) {
        return 'week out of range';
      } else if (!validWeekday) {
        return 'weekday out of range';
      } else return false;
    }
  }, {
    key: 'hasInvalidOrdinalData',
    value: function hasInvalidOrdinalData(obj) {
      var validYear = Util.isNumber(obj.year),
          validOrdinal = Util.numberBetween(obj.ordinal, 1, Util.daysInYear(obj.year));

      if (!validYear) {
        return 'year out of range';
      } else if (!validOrdinal) {
        return 'ordinal out of range';
      } else return false;
    }
  }, {
    key: 'hasInvalidGregorianData',
    value: function hasInvalidGregorianData(obj) {
      var validYear = Util.isNumber(obj.year),
          validMonth = Util.numberBetween(obj.month, 1, 12),
          validDay = Util.numberBetween(obj.day, 1, Util.daysInMonth(obj.year, obj.month));

      if (!validYear) {
        return 'year out of range';
      } else if (!validMonth) {
        return 'month out of range';
      } else if (!validDay) {
        return 'day out of range';
      } else return false;
    }
  }, {
    key: 'hasInvalidTimeData',
    value: function hasInvalidTimeData(obj) {
      var validHour = Util.numberBetween(obj.hour, 0, 23),
          validMinute = Util.numberBetween(obj.minute, 0, 59),
          validSecond = Util.numberBetween(obj.second, 0, 59),
          validMillisecond = Util.numberBetween(obj.millisecond, 0, 999);

      if (!validHour) {
        return 'hour out of range';
      } else if (!validMinute) {
        return 'minute out of range';
      } else if (!validSecond) {
        return 'second out of range';
      } else if (!validMillisecond) {
        return 'millisecond out of range';
      } else return false;
    }
  }]);
  return Conversions;
}();

var INVALID = 'Invalid DateTime';
var INVALID_INPUT = 'invalid input';
var UNSUPPORTED_ZONE = 'unsupported zone';
var UNPARSABLE = 'unparsable';

function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = Conversions.gregorianToWeek(dt.c);
  }
  return dt.weekData;
}

function clone(inst, alts) {
  var current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalidReason: inst.invalidReason
  };
  return new DateTime(Object.assign({}, current, alts, { old: current }));
}

function fixOffset(localTS, o, tz) {
  // Our UTC time is just a guess because our offset is just a guess
  var utcGuess = localTS - o * 60 * 1000;

  // Test whether the zone matches the offset for this ts
  var o2 = tz.offset(utcGuess);

  // If so, offset didn't change and we're done
  if (o === o2) {
    return [utcGuess, o];
  }

  // If not, change the ts by the difference in the offset
  utcGuess -= (o2 - o) * 60 * 1000;

  // If that gives us the local time we want, we're done
  var o3 = tz.offset(utcGuess);
  if (o2 === o3) {
    return [utcGuess, o2];
  }

  // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time
  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
}

function tsToObj(ts, offset) {
  ts += offset * 60 * 1000;

  var d = new Date(ts);

  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds()
  };
}

function objToLocalTS(obj) {
  var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond);

  // javascript is stupid and i hate it
  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setFullYear(obj.year);
  }
  return +d;
}

function objToTS(obj, offset, zone) {
  return fixOffset(objToLocalTS(obj), offset, zone);
}

function adjustTime(inst, dur) {
  var oPre = inst.o,
      c = Object.assign({}, inst.c, {
    year: inst.c.year + dur.years,
    month: inst.c.month + dur.months,
    day: inst.c.day + dur.days + dur.weeks * 7
  }),
      millisToAdd = Duration.fromObject({
    hours: dur.hours,
    minutes: dur.minutes,
    seconds: dur.seconds,
    milliseconds: dur.milliseconds
  }).as('milliseconds'),
      localTS = objToLocalTS(c);

  var _fixOffset = fixOffset(localTS, oPre, inst.zone),
      _fixOffset2 = slicedToArray(_fixOffset, 2),
      ts = _fixOffset2[0],
      o = _fixOffset2[1];

  if (millisToAdd !== 0) {
    ts += millisToAdd;
    // that could have changed the offset by going over a DST, but we want to keep the ts the same
    o = inst.zone.offset(ts);
  }

  return { ts: ts, o: o };
}

function parseDataToDateTime(parsed, parsedZone, opts) {
  var setZone = opts.setZone,
      zone = opts.zone;

  if (parsed && Object.keys(parsed).length !== 0) {
    var interpretationZone = parsedZone || zone,
        inst = DateTime.fromObject(Object.assign(parsed, opts, {
      zone: interpretationZone
    }));
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(UNPARSABLE);
  }
}

function techFormat(dt, format) {
  return dt.isValid ? Formatter.create(Locale.create('en-US')).formatDateTimeFromString(dt, format) : null;
}

var defaultUnitValues = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
};
var defaultWeekUnitValues = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
};
var defaultOrdinalUnitValues = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
};

function isoTimeFormat(dateTime, suppressSecs, suppressMillis) {
  return suppressSecs && dateTime.second === 0 && dateTime.millisecond === 0 ? 'HH:mmZ' : suppressMillis && dateTime.millisecond === 0 ? 'HH:mm:ssZZ' : 'HH:mm:ss.SSSZZ';
}

var orderedUnits = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'];

var orderedWeekUnits = ['weekYear', 'weekNumber', 'weekday', 'hour', 'minute', 'second', 'millisecond'];

var orderedOrdinalUnits = ['year', 'ordinal', 'hour', 'minute', 'second', 'millisecond'];

function normalizeUnit(unit) {
  var ignoreUnknown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var normalized = {
    year: 'year',
    years: 'year',
    month: 'month',
    months: 'month',
    day: 'day',
    days: 'day',
    hour: 'hour',
    hours: 'hour',
    minute: 'minute',
    minutes: 'minute',
    second: 'second',
    seconds: 'second',
    millisecond: 'millisecond',
    milliseconds: 'millisecond',
    weekday: 'weekday',
    weekdays: 'weekday',
    weeknumber: 'weekNumber',
    weeksnumber: 'weekNumber',
    weeknumbers: 'weekNumber',
    weekyear: 'weekYear',
    weekyears: 'weekYear',
    ordinal: 'ordinal'
  }[unit ? unit.toLowerCase() : unit];

  if (!ignoreUnknown && !normalized) throw new InvalidUnitError(unit);

  return normalized;
}

/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link local}, {@link utc}, and (most flexibly) {@link fromObject}. To create one from a standard string format, use {@link fromISO}, {@link fromHTTP}, and {@link fromRFC2822}. To create one from a custom string format, use {@link fromString}. To create one from a native JS date, use {@link fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link toObject}), use the {@link year}, {@link month},
 * {@link day}, {@link hour}, {@link minute}, {@link second}, {@link millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link weekYear}, {@link weekNumber}, and {@link weekday} accessors.
 * * **Configuration** See the {@link locale} and {@link numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link set}, {@link reconfigure}, {@link setZone}, {@link setLocale}, {@link plus}, {@link minus}, {@link endOf}, {@link startOf}, {@link toUTC}, and {@link toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link toJSON}, {@link toISO}, {@link toHTTP}, {@link toObject}, {@link toRFC2822}, {@link toString}, {@link toLocaleString}, {@link toFormat}, {@link valueOf} and {@link toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */
var DateTime = function () {
  /**
   * @access private
   */
  function DateTime(config) {
    classCallCheck(this, DateTime);

    var zone = config.zone || Settings.defaultZone,
        invalidReason = config.invalidReason || (Number.isNaN(config.ts) ? INVALID_INPUT : null) || (!zone.isValid ? UNSUPPORTED_ZONE : null);

    Object.defineProperty(this, 'ts', {
      value: config.ts || Settings.now(),
      enumerable: true
    });

    Object.defineProperty(this, 'zone', {
      value: zone,
      enumerable: true
    });

    Object.defineProperty(this, 'loc', {
      value: config.loc || Locale.create(),
      enumerable: true
    });

    Object.defineProperty(this, 'invalidReason', {
      value: invalidReason,
      enumerable: false
    });

    Object.defineProperty(this, 'weekData', {
      writable: true, // !!!
      value: null,
      enumerable: false
    });

    if (!invalidReason) {
      var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(this.zone),
          c = unchanged ? config.old.c : tsToObj(this.ts, this.zone.offset(this.ts)),
          o = unchanged ? config.old.o : this.zone.offset(this.ts);

      Object.defineProperty(this, 'c', { value: c });
      Object.defineProperty(this, 'o', { value: o });
    }
  }

  // CONSTRUCT

  /**
   * Create a local DateTime
   * @param {number} year - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, i.e. a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, i.e. a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, i.e. a number between 0 and 999
   * @example DateTime.local()                            //~> now
   * @example DateTime.local(2017)                        //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                     //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12)                 //~> 2017-03-12T00:00:00
   * @example DateTime.local(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.675
   * @return {DateTime}
   */


  createClass(DateTime, [{
    key: 'get',


    // INFO

    /**
     * Get the value of unit.
     * @param {string} unit - a unit such as 'minute' or 'day'
     * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
     * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
     * @return {number}
     */
    value: function get$$1(unit) {
      return this[unit];
    }

    /**
     * Returns whether the DateTime is valid. Invalid DateTimes occur when:
     * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
     * * The DateTime was created by an operation on another invalid date
     * @return {boolean}
     */

  }, {
    key: 'resolvedLocaleOpts',


    /**
     * Returns the resolved Intl options for this DateTime.
     * This is useful in understanding the behavior of formatting methods
     * @param {object} opts - the same options as toLocaleString
     * @return {object}
     */
    value: function resolvedLocaleOpts() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _Formatter$create$res = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this),
          locale = _Formatter$create$res.locale,
          numberingSystem = _Formatter$create$res.numberingSystem,
          calendar = _Formatter$create$res.calendar;

      return { locale: locale, numberingSystem: numberingSystem, outputCalendar: calendar };
    }

    // TRANSFORM

    /**
     * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
     *
     * Equivalent to {@link setZone}('utc')
     * @param {number} [offset=0] - optionally, an offset from UTC in minutes
     * @param {object} [opts={}] - options to pass to `setZone()`
     * @return {DateTime}
     */

  }, {
    key: 'toUTC',
    value: function toUTC() {
      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.setZone(FixedOffsetZone.instance(offset), opts);
    }

    /**
     * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
     *
     * Equivalent to `setZone('local')`
     * @return {DateTime}
     */

  }, {
    key: 'toLocal',
    value: function toLocal() {
      return this.setZone(new LocalZone());
    }

    /**
     * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
     *
     * By default, the setter keeps the underlying time the same (as in, the same UTC timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link plus}. You may wish to use {@link toLocal} and {@link toUTC} which provide simple convenience wrappers for commonly used zones.
     * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'utc+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link Zone} class.
     * @param {object} opts - options
     * @param {boolean} [opts.keepCalendarTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
     * @return {DateTime}
     */

  }, {
    key: 'setZone',
    value: function setZone(zone) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$keepCalendarTime = _ref.keepCalendarTime,
          keepCalendarTime = _ref$keepCalendarTime === undefined ? false : _ref$keepCalendarTime;

      zone = Util.normalizeZone(zone);
      if (zone.equals(this.zone)) {
        return this;
      } else if (!zone.isValid) {
        return DateTime.invalid(UNSUPPORTED_ZONE);
      } else {
        var newTS = keepCalendarTime ? this.ts + (this.o - zone.offset(this.ts)) * 60 * 1000 : this.ts;
        return clone(this, { ts: newTS, zone: zone });
      }
    }

    /**
     * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
     * @param {object} properties - the properties to set
     * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
     * @return {DateTime}
     */

  }, {
    key: 'reconfigure',
    value: function reconfigure() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          locale = _ref2.locale,
          numberingSystem = _ref2.numberingSystem,
          outputCalendar = _ref2.outputCalendar;

      var loc = this.loc.clone({ locale: locale, numberingSystem: numberingSystem, outputCalendar: outputCalendar });
      return clone(this, { loc: loc });
    }

    /**
     * "Set" the locale. Returns a newly-constructed DateTime.
     * Just a convenient alias for reconfigure({ locale })
     * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
     * @return {DateTime}
     */

  }, {
    key: 'setLocale',
    value: function setLocale(locale) {
      return this.reconfigure({ locale: locale });
    }

    /**
     * "Set" the values of specified units. Returns a newly-constructed DateTime.
     * @param {object} values - a mapping of units to numbers
     * @example dt.set({ year: 2017 })
     * @example dt.set({ hour: 8, minute: 30 })
     * @example dt.set({ weekday: 5 })
     * @example dt.set({ year: 2005, ordinal: 234 })
     * @example dt.set({ outputCalendar: 'beng', zone: 'utc' })
     * @return {DateTime}
     */

  }, {
    key: 'set',
    value: function set$$1(values) {
      if (!this.isValid) return this;

      var normalized = Util.normalizeObject(values, normalizeUnit),
          settingWeekStuff = !Util.isUndefined(normalized.weekYear) || !Util.isUndefined(normalized.weekNumber) || !Util.isUndefined(normalized.weekday);

      var mixed = void 0;
      if (settingWeekStuff) {
        mixed = Conversions.weekToGregorian(Object.assign(Conversions.gregorianToWeek(this.c), normalized));
      } else if (!Util.isUndefined(normalized.ordinal)) {
        mixed = Conversions.ordinalToGregorian(Object.assign(Conversions.gregorianToOrdinal(this.c), normalized));
      } else {
        mixed = Object.assign(this.toObject(), normalized);

        // if we didn't set the day but we ended up on an overflow date,
        // use the last day of the right month
        if (Util.isUndefined(normalized.day)) {
          mixed.day = Math.min(Util.daysInMonth(mixed.year, mixed.month), mixed.day);
        }
      }

      var _objToTS = objToTS(mixed, this.o, this.zone),
          _objToTS2 = slicedToArray(_objToTS, 2),
          ts = _objToTS2[0],
          o = _objToTS2[1];

      return clone(this, { ts: ts, o: o });
    }

    /**
     * Add a period of time to this DateTime and return the resulting DateTime
     *
     * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
     * @param {Duration|number|object} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     * @example DateTime.local().plus(123) //~> in 123 milliseconds
     * @example DateTime.local().plus({ minutes: 15 }) //~> in 15 minutes
     * @example DateTime.local().plus({ days: 1 }) //~> this time tomorrow
     * @example DateTime.local().plus({ hours: 3, minutes: 13 }) //~> in 1 hr, 13 min
     * @example DateTime.local().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 1 hr, 13 min
     * @return {DateTime}
     */

  }, {
    key: 'plus',
    value: function plus(duration) {
      if (!this.isValid) return this;
      var dur = Util.friendlyDuration(duration);
      return clone(this, adjustTime(this, dur));
    }

    /**
     * Subtract a period of time to this DateTime and return the resulting DateTime
     * See {@link plus}
     * @param {Duration|number|object} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     @return {DateTime}
    */

  }, {
    key: 'minus',
    value: function minus(duration) {
      if (!this.isValid) return this;
      var dur = Util.friendlyDuration(duration).negate();
      return clone(this, adjustTime(this, dur));
    }

    /**
     * "Set" this DateTime to the beginning of a unit of time.
     * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'month', 'day', 'hour', 'minute', 'second', or 'millisecond'.
     * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
     * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
     * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
     * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
     * @return {DateTime}
     */

  }, {
    key: 'startOf',
    value: function startOf(unit) {
      if (!this.isValid) return this;
      var o = {},
          normalizedUnit = Duration.normalizeUnit(unit);
      switch (normalizedUnit) {
        case 'years':
          o.month = 1;
        // falls through
        case 'months':
          o.day = 1;
        // falls through
        case 'weeks':
        case 'days':
          o.hour = 0;
        // falls through
        case 'hours':
          o.minute = 0;
        // falls through
        case 'minutes':
          o.second = 0;
        // falls through
        case 'seconds':
          o.millisecond = 0;
          break;
        case 'milliseconds':
          break;
        default:
          throw new InvalidUnitError(unit);
      }

      if (normalizedUnit === 'weeks') {
        o.weekday = 1;
      }

      return this.set(o);
    }

    /**
     * "Set" this DateTime to the end (i.e. the last millisecond) of a unit of time
     * @param {string} unit - The unit to go to the end of. Can be 'year', 'month', 'day', 'hour', 'minute', 'second', or 'millisecond'.
     * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-03T00:00:00.000-05:00'
     * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
     * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
     * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
     * @return {DateTime}
     */

  }, {
    key: 'endOf',
    value: function endOf(unit) {
      return this.isValid ? this.startOf(unit).plus(defineProperty({}, unit, 1)).minus(1) : this;
    }

    // OUTPUT

    /**
     * Returns a string representation of this DateTime formatted according to the specified format string.
     * **You may not want this.** See {@link toLocaleString} for a more flexible formatting tool. See the documentation for the specific format tokens supported.
     * Defaults to en-US if no locale has been specified, regardless of the system's locale
     * @param {string} fmt - the format string
     * @param {object} opts - options
     * @param {boolean} opts.round - round numerical values
     * @example DateTime.local().toFormat('yyyy LLL dd') //=> '2017 avr. 22'
     * @example DateTime.local().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 Apr 22'
     * @example DateTime.local().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
     * @return {string}
     */

  }, {
    key: 'toFormat',
    value: function toFormat(fmt) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.isValid ? Formatter.create(this.loc.redefaultToEN(), opts).formatDateTimeFromString(this, fmt) : INVALID;
    }

    /**
     * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
     * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation.
     * of the DateTime in the assigned locale.
     * Defaults to the system's locale if no locale has been specified
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param opts {object} - Intl.DateTimeFormat constructor options
     * @example DateTime.local().toLocaleString(); //=> 4/20/2017
     * @example DateTime.local().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
     * @example DateTime.local().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
     * @example DateTime.local().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
     * @example DateTime.local().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
     * @example DateTime.local().toLocaleString({weekday: 'long', month: 'long', day: '2-digit'}); //=> 'Thu, Apr 20'
     * @example DateTime.local().toLocaleString({weekday: 'long', month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit'}); //=> 'Thu, Apr 20, 11:27'
     * @example DateTime.local().toLocaleString({hour: '2-digit', minute: '2-digit'}); //=> '11:32'
     * @return {string}
     */

  }, {
    key: 'toLocaleString',
    value: function toLocaleString() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Formats.DATE_SHORT;

      return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTime(this) : INVALID;
    }

    /**
     * Returns an array of format "parts", i.e. individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
     * Defaults to the system's locale if no locale has been specified
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
     * @param opts {object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
     * @example DateTime.local().toLocaleString(); //=> [
     *                                    //=>   { type: 'day', value: '25' },
     *                                    //=>   { type: 'literal', value: '/' },
     *                                    //=>   { type: 'month', value: '05' },
     *                                    //=>   { type: 'literal', value: '/' },
     *                                    //=>   { type: 'year', value: '1982' }
     *                                    //=> ]
     */

  }, {
    key: 'toLocaleParts',
    value: function toLocaleParts() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
    }

    /**
     * Returns an ISO 8601-compliant string representation of this DateTime
     * @param {object} opts - options
     * @param {boolean} opts.suppressMilliseconds - exclude milliseconds from the format if they're 0
     * @param {boolean} opts.supressSeconds - exclude seconds from the format if they're 0
     * @example DateTime.utc(1982, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
     * @example DateTime.local().toISO() //=> '2017-04-22T20:47:05.335-04:00'
     * @return {string}
     */

  }, {
    key: 'toISO',
    value: function toISO() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$suppressMillise = _ref3.suppressMilliseconds,
          suppressMilliseconds = _ref3$suppressMillise === undefined ? false : _ref3$suppressMillise,
          _ref3$suppressSeconds = _ref3.suppressSeconds,
          suppressSeconds = _ref3$suppressSeconds === undefined ? false : _ref3$suppressSeconds;

      var f = 'yyyy-MM-dd\'T\'' + isoTimeFormat(this, suppressSeconds, suppressMilliseconds);
      return techFormat(this, f);
    }

    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's date component
     * @example DateTime.utc(1982, 5, 25).toISODate() //=> '07:34:19.361Z'
     * @return {string}
     */

  }, {
    key: 'toISODate',
    value: function toISODate() {
      return techFormat(this, 'yyyy-MM-dd');
    }

    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's week date
     * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
     * @return {string}
     */

  }, {
    key: 'toISOWeekDate',
    value: function toISOWeekDate() {
      return techFormat(this, "kkkk-'W'WW-c");
    }

    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's time component
     * @param {object} opts - options
     * @param {boolean} opts.suppressMilliseconds - exclude milliseconds from the format if they're 0
     * @param {boolean} opts.supressSeconds - exclude seconds from the format if they're 0
     * @example DateTime.utc().hour(7).minute(34).toISOTime() //=> '07:34:19.361Z'
     * @example DateTime.utc().hour(7).minute(34).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
     * @return {string}
     */

  }, {
    key: 'toISOTime',
    value: function toISOTime() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$suppressMillise = _ref4.suppressMilliseconds,
          suppressMilliseconds = _ref4$suppressMillise === undefined ? false : _ref4$suppressMillise,
          _ref4$suppressSeconds = _ref4.suppressSeconds,
          suppressSeconds = _ref4$suppressSeconds === undefined ? false : _ref4$suppressSeconds;

      return techFormat(this, isoTimeFormat(this, suppressSeconds, suppressMilliseconds));
    }

    /**
     * Returns an RFC 2822-compatible string representation of this DateTime, always in UTC
     * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
     * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
     * @return {string}
     */

  }, {
    key: 'toRFC2822',
    value: function toRFC2822() {
      return techFormat(this, 'EEE, dd LLL yyyy hh:mm:ss ZZZ');
    }

    /**
     * Returns a string representation of this DateTime appropriate for use in HTTP headers.
     * Specifically, the string conforms to RFC 1123.
     * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
     * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
     * @return {string}
     */

  }, {
    key: 'toHTTP',
    value: function toHTTP() {
      return techFormat(this.toUTC(), "EEE, dd LLL yyyy hh:mm:ss 'GMT'");
    }

    /**
     * Returns a string representation of this DateTime appropriate for debugging
     * @return {string}
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this.isValid ? this.toISO() : INVALID;
    }

    /**
     * Returns the epoch milliseconds of this DateTime
     * @return {number}
     */

  }, {
    key: 'valueOf',
    value: function valueOf() {
      return this.isValid ? this.ts : NaN;
    }

    /**
     * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
     * @return {string}
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      return this.toISO();
    }

    /**
     * Returns a Javascript object with this DateTime's year, month, day, and so on.
     * @param opts - options for generating the object
     * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
     * @example DateTime.local().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
     * @return {object}
     */

  }, {
    key: 'toObject',
    value: function toObject() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.isValid) return {};

      var base = Object.assign({}, this.c);

      if (opts.includeConfig) {
        base.outputCalendar = this.outputCalendar;
        base.numberingSystem = this.loc.numberingSystem;
        base.locale = this.loc.locale;
      }
      return base;
    }

    /**
     * Returns a Javascript Date equivalent to this DateTime.
     * @return {object}
     */

  }, {
    key: 'toJSDate',
    value: function toJSDate() {
      return new Date(this.isValid ? this.ts : NaN);
    }

    // COMPARE

    /**
     * Return the difference between two DateTimes as a Duration.
     * @param {DateTime} otherDateTime - the DateTime to compare this one to
     * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
     * @param {Object} opts - options that affect the creation of the Duration
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @example
     * var i1 = DateTime.fromISO('1982-05-25T09:45'),
     *     i2 = DateTime.fromISO('1983-10-14T10:30');
     * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
     * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
     * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
     * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
     * @return {Duration}
     */

  }, {
    key: 'diff',
    value: function diff(otherDateTime) {
      var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'milliseconds';
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!this.isValid || !otherDateTime.isValid) return Duration.invalid(this.invalidReason || otherDateTime.invalidReason);

      var units = Util.maybeArray(unit).map(Duration.normalizeUnit);

      var flipped = otherDateTime.valueOf() > this.valueOf(),
          post = flipped ? otherDateTime : this,
          accum = {};

      var cursor = flipped ? this : otherDateTime,
          lowestOrder = null;

      if (units.indexOf('years') >= 0) {
        var dYear = post.year - cursor.year;

        cursor = cursor.set({ year: post.year });

        if (cursor > post) {
          cursor = cursor.minus({ years: 1 });
          dYear -= 1;
        }

        accum.years = dYear;
        lowestOrder = 'years';
      }

      if (units.indexOf('months') >= 0) {
        var _dYear = post.year - cursor.year;
        var dMonth = post.month - cursor.month + _dYear * 12;

        cursor = cursor.set({ year: post.year, month: post.month });

        if (cursor > post) {
          cursor = cursor.minus({ months: 1 });
          dMonth -= 1;
        }

        accum.months = dMonth;
        lowestOrder = 'months';
      }

      var computeDayDelta = function computeDayDelta() {
        var utcDayStart = function utcDayStart(dt) {
          return dt.toUTC(0, { keepCalendarTime: true }).startOf('day').valueOf();
        },
            ms = utcDayStart(post) - utcDayStart(cursor);
        return Math.floor(Duration.fromMillis(ms, opts).shiftTo('days').days);
      };

      if (units.indexOf('weeks') >= 0) {
        var days = computeDayDelta();
        var weeks = (days - days % 7) / 7;
        cursor = cursor.plus({ weeks: weeks });

        if (cursor > post) {
          cursor.minus({ weeks: 1 });
          weeks -= 1;
        }

        accum.weeks = weeks;
        lowestOrder = 'weeks';
      }

      if (units.indexOf('days') >= 0) {
        var _days = computeDayDelta();
        cursor = cursor.set({
          year: post.year,
          month: post.month,
          day: post.day
        });

        if (cursor > post) {
          cursor.minus({ days: 1 });
          _days -= 1;
        }

        accum.days = _days;
        lowestOrder = 'days';
      }

      var remaining = Duration.fromMillis(post - cursor, opts),
          moreUnits = units.filter(function (u) {
        return ['hours', 'minutes', 'seconds', 'milliseconds'].indexOf(u) >= 0;
      }),
          shiftTo = moreUnits.length > 0 ? moreUnits : [lowestOrder],
          shifted = remaining.shiftTo.apply(remaining, toConsumableArray(shiftTo)),
          merged = shifted.plus(Duration.fromObject(Object.assign(accum, opts)));

      return flipped ? merged.negate() : merged;
    }

    /**
     * Return the difference between this DateTime and right now.
     * See {@link diff}
     * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
     * @param {Object} opts - options that affect the creation of the Duration
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @return {Duration}
     */

  }, {
    key: 'diffNow',
    value: function diffNow() {
      var unit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'milliseconds';
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.diff(DateTime.local(), unit, opts);
    }

    /**
     * Return an Interval spanning between this DateTime and another DateTime
     * @param {DateTime} otherDateTime - the other end point of the Interval
     * @return {Duration}
     */

  }, {
    key: 'until',
    value: function until(otherDateTime) {
      return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
    }

    /**
     * Return whether this DateTime is in the same unit of time as another DateTime
     * @param {DateTime} otherDateTime - the other DateTime
     * @param {string} unit - the unit of time to check sameness on
     * @example DateTime.local().hasSame(otherDT, 'day'); //~> true if both the same calendar day
     * @return {boolean}
     */

  }, {
    key: 'hasSame',
    value: function hasSame(otherDateTime, unit) {
      if (!this.isValid) return false;
      if (unit === 'millisecond') {
        return this.valueOf() === otherDateTime.valueOf();
      } else {
        var inputMs = otherDateTime.valueOf();
        return this.startOf(unit) <= inputMs && inputMs <= this.endOf(unit);
      }
    }

    /**
     * Equality check
     * Two DateTimes are equal iff they represent the same millisecond
     * @param {DateTime} other - the other DateTime
     * @return {boolean}
     */

  }, {
    key: 'equals',
    value: function equals(other) {
      return this.isValid && other.isValid ? this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc) : false;
    }

    /**
     * Return the min of several date times
     * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
     * @return {DateTime}
     */

  }, {
    key: 'isValid',
    get: function get$$1() {
      return this.invalidReason === null;
    }

    /**
     * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
     * @return {string}
     */

  }, {
    key: 'invalidReason',
    get: function get$$1() {
      return this.invalidReason;
    }

    /**
     * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
     *
     * @return {string}
     */

  }, {
    key: 'locale',
    get: function get$$1() {
      return this.loc.locale;
    }

    /**
     * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
     *
     * @return {string}
     */

  }, {
    key: 'numberingSystem',
    get: function get$$1() {
      return this.loc.numberingSystem;
    }

    /**
     * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
     *
     * @return {string}
     */

  }, {
    key: 'outputCalendar',
    get: function get$$1() {
      return this.loc.outputCalendar;
    }

    /**
     * Get the name of the time zone.
     * @return {String}
     */

  }, {
    key: 'zoneName',
    get: function get$$1() {
      return this.zone.name;
    }

    /**
     * Get the year
     * @example DateTime.local(2017, 5, 25).year //=> 2017
     * @return {number}
     */

  }, {
    key: 'year',
    get: function get$$1() {
      return this.isValid ? this.c.year : NaN;
    }

    /**
     * Get the month (1-12).
     * @example DateTime.local(2017, 5, 25).month //=> 5
     * @return {number}
     */

  }, {
    key: 'month',
    get: function get$$1() {
      return this.isValid ? this.c.month : NaN;
    }

    /**
     * Get the day of the month (1-30ish).
     * @example DateTime.local(2017, 5, 25).day //=> 25
     * @return {number}
     */

  }, {
    key: 'day',
    get: function get$$1() {
      return this.isValid ? this.c.day : NaN;
    }

    /**
     * Get the hour of the day (0-23).
     * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
     * @return {number}
     */

  }, {
    key: 'hour',
    get: function get$$1() {
      return this.isValid ? this.c.hour : NaN;
    }

    /**
     * Get the minute of the hour (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
     * @return {number}
     */

  }, {
    key: 'minute',
    get: function get$$1() {
      return this.isValid ? this.c.minute : NaN;
    }

    /**
     * Get the second of the minute (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
     * @return {number}
     */

  }, {
    key: 'second',
    get: function get$$1() {
      return this.isValid ? this.c.second : NaN;
    }

    /**
     * Get the millisecond of the second (0-999).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
     * @return {number}
     */

  }, {
    key: 'millisecond',
    get: function get$$1() {
      return this.isValid ? this.c.millisecond : NaN;
    }

    /**
     * Get the week year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekYear //=> 2015
     * @return {number}
     */

  }, {
    key: 'weekYear',
    get: function get$$1() {
      return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
    }

    /**
     * Get the week number of the week year (1-52ish).
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
     * @return {number}
     */

  }, {
    key: 'weekNumber',
    get: function get$$1() {
      return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
    }

    /**
     * Get the day of the week.
     * 1 is Monday and 7 is Sunday
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekday //=> 4
     * @return {number}
     */

  }, {
    key: 'weekday',
    get: function get$$1() {
      return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
    }

    /**
     * Get the ordinal (i.e. the day of the year)
     * @example DateTime.local(2017, 5, 25).ordinal //=> 145
     * @return {number|DateTime}
     */

  }, {
    key: 'ordinal',
    get: function get$$1() {
      return this.isValid ? Conversions.gregorianToOrdinal(this.c).ordinal : NaN;
    }

    /**
     * Get the human readable short month name, such as 'Oct'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
     * @return {string}
     */

  }, {
    key: 'monthShort',
    get: function get$$1() {
      return this.isValid ? Info.months('short', { locale: this.locale })[this.month - 1] : null;
    }

    /**
     * Get the human readable long month name, such as 'October'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthLong //=> October
     * @return {string}
     */

  }, {
    key: 'monthLong',
    get: function get$$1() {
      return this.isValid ? Info.months('long', { locale: this.locale })[this.month - 1] : null;
    }

    /**
     * Get the human readable short weekday, such as 'Mon'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
     * @return {string}
     */

  }, {
    key: 'weekdayShort',
    get: function get$$1() {
      return this.isValid ? Info.weekdays('short', { locale: this.locale })[this.weekday - 1] : null;
    }

    /**
     * Get the human readable long weekday, such as 'Monday'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
     * @return {string}
     */

  }, {
    key: 'weekdayLong',
    get: function get$$1() {
      return this.isValid ? Info.weekdays('long', { locale: this.locale })[this.weekday - 1] : null;
    }

    /**
     * Get the UTC offset of this DateTime in minutes
     * @example DateTime.local().offset //=> -240
     * @example DateTime.utc().offset //=> 0
     * @return {number}
     */

  }, {
    key: 'offset',
    get: function get$$1() {
      return this.isValid ? this.zone.offset(this.ts) : NaN;
    }

    /**
     * Get the short human name for the zone's current offset, for example "EST" or "EDT".
     * Defaults to the system's locale if no locale has been specified
     * @return {String}
     */

  }, {
    key: 'offsetNameShort',
    get: function get$$1() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: 'short',
          locale: this.locale
        });
      } else {
        return null;
      }
    }

    /**
     * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
     * Defaults to the system's locale if no locale has been specified
     * @return {String}
     */

  }, {
    key: 'offsetNameLong',
    get: function get$$1() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: 'long',
          locale: this.locale
        });
      } else {
        return null;
      }
    }

    /**
     * Get whether this zone's offset ever changes, as in a DST.
     * @return {boolean}
     */

  }, {
    key: 'isOffsetFixed',
    get: function get$$1() {
      return this.zone.universal;
    }

    /**
     * Get whether the DateTime is in a DST.
     * @return {boolean}
     */

  }, {
    key: 'isInDST',
    get: function get$$1() {
      if (this.isOffsetFixed) {
        return false;
      } else {
        return this.offset > this.set({ month: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
      }
    }

    /**
     * Returns true if this DateTime is in a leap year, false otherwise
     * @example DateTime.local(2016).isInLeapYear //=> true
     * @example DateTime.local(2013).isInLeapYear //=> false
     * @return {boolean}
     */

  }, {
    key: 'isInLeapYear',
    get: function get$$1() {
      return Util.isLeapYear(this.year);
    }

    /**
     * Returns the number of days in this DateTime's month
     * @example DateTime.local(2016, 2).daysInMonth //=> 29
     * @example DateTime.local(2016, 3).days //=> 31
     * @return {number}
     */

  }, {
    key: 'daysInMonth',
    get: function get$$1() {
      return Util.daysInMonth(this.year, this.month);
    }

    /**
     * Returns the number of days in this DateTime's year
     * @example DateTime.local(2016).daysInYear //=> 366
     * @example DateTime.local(2013).daysInYear //=> 365
     * @return {number}
     */

  }, {
    key: 'daysInYear',
    get: function get$$1() {
      return this.isValid ? Util.daysInYear(this.year) : NaN;
    }
  }], [{
    key: 'local',
    value: function local(year, month, day, hour, minute, second, millisecond) {
      if (Util.isUndefined(year)) {
        return new DateTime({ ts: Settings.now() });
      } else {
        return DateTime.fromObject({
          year: year,
          month: month,
          day: day,
          hour: hour,
          minute: minute,
          second: second,
          millisecond: millisecond,
          zone: Settings.defaultZone
        });
      }
    }

    /**
     * Create a DateTime in UTC
     * @param {number} year - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
     * @param {number} [month=1] - The month, 1-indexed
     * @param {number} [day=1] - The day of the month
     * @param {number} [hour=0] - The hour of the day, in 24-hour time
     * @param {number} [minute=0] - The minute of the hour, i.e. a number between 0 and 59
     * @param {number} [second=0] - The second of the minute, i.e. a number between 0 and 59
     * @param {number} [millisecond=0] - The millisecond of the second, i.e. a number between 0 and 999
     * @example DateTime.utc()                            //~> now
     * @example DateTime.utc(2017)                        //~> 2017-01-01T00:00:00Z
     * @example DateTime.utc(2017, 3)                     //~> 2017-03-01T00:00:00Z
     * @example DateTime.utc(2017, 3, 12)                 //~> 2017-03-12T00:00:00Z
     * @example DateTime.utc(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00Z
     * @example DateTime.utc(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00Z
     * @example DateTime.utc(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10Z
     * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.675Z
     * @return {DateTime}
     */

  }, {
    key: 'utc',
    value: function utc(year, month, day, hour, minute, second, millisecond) {
      if (Util.isUndefined(year)) {
        return new DateTime({
          ts: Settings.now(),
          zone: FixedOffsetZone.utcInstance
        });
      } else {
        return DateTime.fromObject({
          year: year,
          month: month,
          day: day,
          hour: hour,
          minute: minute,
          second: second,
          millisecond: millisecond,
          zone: FixedOffsetZone.utcInstance
        });
      }
    }

    /**
     * Create an DateTime from a Javascript Date object. Uses the default zone.
     * @param {Date} date - a Javascript Date object
     * @param {Object} options - configuration options for the DateTime
     * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
     * @return {DateTime}
     */

  }, {
    key: 'fromJSDate',
    value: function fromJSDate(date) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return new DateTime({
        ts: Util.isDate(date) ? date.valueOf() : NaN,
        zone: Util.normalizeZone(options.zone),
        loc: Locale.fromObject(options)
      });
    }

    /**
     * Create an DateTime from a count of epoch milliseconds. Uses the default zone.
     * @param {number} milliseconds - a number of milliseconds since 1970 UTC
     * @param {Object} options - configuration options for the DateTime
     * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
     * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
     * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @return {DateTime}
     */

  }, {
    key: 'fromMillis',
    value: function fromMillis(milliseconds) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return new DateTime({
        ts: milliseconds,
        zone: Util.normalizeZone(options.zone),
        loc: Locale.fromObject(options)
      });
    }

    /**
     * Create an DateTime from a Javascript object with keys like 'year' and 'hour' with reasonable defaults.
     * @param {Object} obj - the object to create the DateTime from
     * @param {number} obj.year - a year, such as 1987
     * @param {number} obj.month - a month, 1-12
     * @param {number} obj.day - a day of the month, 1-31, depending on the month
     * @param {number} obj.ordinal - day of the year, 1-365 or 366
     * @param {number} obj.weekYear - an ISO week year
     * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
     * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
     * @param {number} obj.hour - hour of the day, 0-23
     * @param {number} obj.minute - minute of the hour, 0-59
     * @param {number} obj.second - second of the minute, 0-59
     * @param {number} obj.millisecond - millisecond of the second, 0-999
     * @param {string|Zone} [obj.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
     * @param {string} [obj.locale='en-US'] - a locale to set on the resulting DateTime instance
     * @param {string} obj.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} obj.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
     * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01T00'
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'utc' }),
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'local' })
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'America/New_York' })
     * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
     * @return {DateTime}
     */

  }, {
    key: 'fromObject',
    value: function fromObject(obj) {
      var zoneToUse = Util.normalizeZone(obj.zone);
      if (!zoneToUse.isValid) {
        return DateTime.invalid(UNSUPPORTED_ZONE);
      }

      var tsNow = Settings.now(),
          offsetProvis = zoneToUse.offset(tsNow),
          normalized = Util.normalizeObject(obj, normalizeUnit, true),
          containsOrdinal = !Util.isUndefined(normalized.ordinal),
          containsGregorYear = !Util.isUndefined(normalized.year),
          containsGregorMD = !Util.isUndefined(normalized.month) || !Util.isUndefined(normalized.day),
          containsGregor = containsGregorYear || containsGregorMD,
          definiteWeekDef = normalized.weekYear || normalized.weekNumber,
          loc = Locale.fromObject(obj);

      // cases:
      // just a weekday -> this week's instance of that weekday, no worries
      // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
      // (gregorian month or day) + ordinal -> error
      // otherwise just use weeks or ordinals or gregorian, depending on what's specified

      if ((containsGregor || containsOrdinal) && definiteWeekDef) {
        throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
      }

      if (containsGregorMD && containsOrdinal) {
        throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
      }

      var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor;

      // configure ourselves to deal with gregorian dates or week stuff
      var units = void 0,
          defaultValues = void 0,
          objNow = tsToObj(tsNow, offsetProvis);
      if (useWeekData) {
        units = orderedWeekUnits;
        defaultValues = defaultWeekUnitValues;
        objNow = Conversions.gregorianToWeek(objNow);
      } else if (containsOrdinal) {
        units = orderedOrdinalUnits;
        defaultValues = defaultOrdinalUnitValues;
        objNow = Conversions.gregorianToOrdinal(objNow);
      } else {
        units = orderedUnits;
        defaultValues = defaultUnitValues;
      }

      // set default values for missing stuff
      var foundFirst = false;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = units[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var u = _step.value;

          var v = normalized[u];
          if (!Util.isUndefined(v)) {
            foundFirst = true;
          } else if (foundFirst) {
            normalized[u] = defaultValues[u];
          } else {
            normalized[u] = objNow[u];
          }
        }

        // make sure the values we have are in range
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var higherOrderInvalid = useWeekData ? Conversions.hasInvalidWeekData(normalized) : containsOrdinal ? Conversions.hasInvalidOrdinalData(normalized) : Conversions.hasInvalidGregorianData(normalized),
          invalidReason = higherOrderInvalid || Conversions.hasInvalidTimeData(normalized);

      if (invalidReason) {
        return DateTime.invalid(invalidReason);
      }

      // compute the actual time
      var gregorian = useWeekData ? Conversions.weekToGregorian(normalized) : containsOrdinal ? Conversions.ordinalToGregorian(normalized) : normalized,
          _objToTS3 = objToTS(gregorian, offsetProvis, zoneToUse),
          _objToTS4 = slicedToArray(_objToTS3, 2),
          tsFinal = _objToTS4[0],
          offsetFinal = _objToTS4[1],
          inst = new DateTime({
        ts: tsFinal,
        zone: zoneToUse,
        o: offsetFinal,
        loc: loc
      });

      // gregorian data + weekday serves only to validate
      if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
        return DateTime.invalid('mismatched weekday');
      }

      return inst;
    }

    /**
     * Create a DateTime from an ISO 8601 string
     * @param {string} text - the ISO string
     * @param {Object} opts - options to affect the creation
     * @param {boolean} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
     * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='en-US'] - a locale to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @example DateTime.fromISO('2016-05-25T09:08:34.123')
     * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
     * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
     * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc')
     * @example DateTime.fromISO('2016-W05-4')
     * @return {DateTime}
     */

  }, {
    key: 'fromISO',
    value: function fromISO(text) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _RegexParser$parseISO = RegexParser.parseISODate(text),
          _RegexParser$parseISO2 = slicedToArray(_RegexParser$parseISO, 2),
          vals = _RegexParser$parseISO2[0],
          parsedZone = _RegexParser$parseISO2[1];

      return parseDataToDateTime(vals, parsedZone, opts);
    }

    /**
     * Create a DateTime from an RFC 2822 string
     * @param {string} text - the RFC 2822 string
     * @param {Object} opts - options to affect the creation
     * @param {boolean} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
     * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='en-US'] - a locale to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
     * @example DateTime.fromRFC2822('Tue, 25 Nov 2016 13:23:12 +0600')
     * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
     * @return {DateTime}
     */

  }, {
    key: 'fromRFC2822',
    value: function fromRFC2822(text) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _RegexParser$parseRFC = RegexParser.parseRFC2822Date(text),
          _RegexParser$parseRFC2 = slicedToArray(_RegexParser$parseRFC, 2),
          vals = _RegexParser$parseRFC2[0],
          parsedZone = _RegexParser$parseRFC2[1];

      return parseDataToDateTime(vals, parsedZone, opts);
    }

    /**
     * Create a DateTime from an HTTP header date
     * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
     * @param {string} text - the HTTP header date
     * @param {object} options - options to affect the creation
     * @param {boolean} [options.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
     * @param {boolean} [options.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
     * @param {string} [options.locale='en-US'] - a locale to set on the resulting DateTime instance
     * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
     * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
     * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
     * @return {DateTime}
     */

  }, {
    key: 'fromHTTP',
    value: function fromHTTP(text) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _RegexParser$parseHTT = RegexParser.parseHTTPDate(text),
          _RegexParser$parseHTT2 = slicedToArray(_RegexParser$parseHTT, 2),
          vals = _RegexParser$parseHTT2[0],
          parsedZone = _RegexParser$parseHTT2[1];

      return parseDataToDateTime(vals, parsedZone, options);
    }

    /**
     * Create a DateTime from an input string and format string
     * Defaults to en-US if no locale has been specified, regardless of the system's locale
     * @param {string} text - the string to parse
     * @param {string} fmt - the format the string is expected to be in (see description)
     * @param {Object} options - options to affect the creation
     * @param {boolean} [options.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
     * @param {boolean} [options.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
     * @param {string} [options.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
     * @param {string} options.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
     * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @return {DateTime}
     */

  }, {
    key: 'fromString',
    value: function fromString(text, fmt) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _options$locale = options.locale,
          locale = _options$locale === undefined ? null : _options$locale,
          _options$numberingSys = options.numberingSystem,
          numberingSystem = _options$numberingSys === undefined ? null : _options$numberingSys,
          parser = new TokenParser(Locale.fromOpts({ locale: locale, numberingSystem: numberingSystem, defaultToEN: true })),
          _parser$parseDateTime = parser.parseDateTime(text, fmt),
          _parser$parseDateTime2 = slicedToArray(_parser$parseDateTime, 3),
          vals = _parser$parseDateTime2[0],
          parsedZone = _parser$parseDateTime2[1],
          invalidReason = _parser$parseDateTime2[2];

      if (invalidReason) {
        return DateTime.invalid(invalidReason);
      } else {
        return parseDataToDateTime(vals, parsedZone, options);
      }
    }

    /**
     * Create an invalid DateTime.
     * @return {DateTime}
     */

  }, {
    key: 'invalid',
    value: function invalid(reason) {
      if (!reason) {
        throw new InvalidArgumentError('need to specify a reason the DateTime is invalid');
      }
      if (Settings.throwOnInvalid) {
        throw new InvalidDateTimeError(reason);
      } else {
        return new DateTime({ invalidReason: reason });
      }
    }
  }, {
    key: 'min',
    value: function min() {
      for (var _len = arguments.length, dateTimes = Array(_len), _key = 0; _key < _len; _key++) {
        dateTimes[_key] = arguments[_key];
      }

      return Util.bestBy(dateTimes, function (i) {
        return i.valueOf();
      }, Math.min);
    }

    /**
     * Return the max of several date times
     * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
     * @return {DateTime}
     */

  }, {
    key: 'max',
    value: function max() {
      for (var _len2 = arguments.length, dateTimes = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        dateTimes[_key2] = arguments[_key2];
      }

      return Util.bestBy(dateTimes, function (i) {
        return i.valueOf();
      }, Math.max);
    }

    // MISC

    /**
     * Explain how a string would be parsed by fromString()
     * @param {string} text - the string to parse
     * @param {string} fmt - the format the string is expected to be in (see description)
     * @param {object} options - options taken by fromString()
     * @return {object}
     */

  }, {
    key: 'fromStringExplain',
    value: function fromStringExplain(text, fmt) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var parser = new TokenParser(Locale.fromOpts(options));
      return parser.explainParse(text, fmt);
    }

    // FORMAT PRESETS

    /**
     * {@link toLocaleString} format like 10/14/1983
     */

  }, {
    key: 'DATE_SHORT',
    get: function get$$1() {
      return Formats.DATE_SHORT;
    }

    /**
     * {@link toLocaleString} format like 'Oct 14, 1983'
     */

  }, {
    key: 'DATE_MED',
    get: function get$$1() {
      return Formats.DATE_MED;
    }

    /**
     * {@link toLocaleString} format like 'October 14, 1983'
     */

  }, {
    key: 'DATE_FULL',
    get: function get$$1() {
      return Formats.DATE_FULL;
    }

    /**
     * {@link toLocaleString} format like 'Tuesday, October 14, 1983'
     */

  }, {
    key: 'DATE_HUGE',
    get: function get$$1() {
      return Formats.DATE_HUGE;
    }

    /**
     * {@link toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
     */

  }, {
    key: 'TIME_SIMPLE',
    get: function get$$1() {
      return Formats.TIME_SIMPLE;
    }

    /**
     * {@link toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
     */

  }, {
    key: 'TIME_WITH_SECONDS',
    get: function get$$1() {
      return Formats.TIME_WITH_SECONDS;
    }

    /**
     * {@link toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
     */

  }, {
    key: 'TIME_WITH_SHORT_OFFSET',
    get: function get$$1() {
      return Formats.TIME_WITH_SHORT_OFFSET;
    }

    /**
     * {@link toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     */

  }, {
    key: 'TIME_WITH_LONG_OFFSET',
    get: function get$$1() {
      return Formats.TIME_WITH_LONG_OFFSET;
    }

    /**
     * {@link toLocaleString} format like '09:30', always 24-hour.
     */

  }, {
    key: 'TIME_24_SIMPLE',
    get: function get$$1() {
      return Formats.TIME_24_SIMPLE;
    }

    /**
     * {@link toLocaleString} format like '09:30:23', always 24-hour.
     */

  }, {
    key: 'TIME_24_WITH_SECONDS',
    get: function get$$1() {
      return Formats.TIME_24_WITH_SECONDS;
    }

    /**
     * {@link toLocaleString} format like '09:30:23 EDT', always 24-hour.
     */

  }, {
    key: 'TIME_24_WITH_SHORT_OFFSET',
    get: function get$$1() {
      return Formats.TIME_24_WITH_SHORT_OFFSET;
    }

    /**
     * {@link toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
     */

  }, {
    key: 'TIME_24_WITH_LONG_OFFSET',
    get: function get$$1() {
      return Formats.TIME_24_WITH_LONG_OFFSET;
    }

    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
     */

  }, {
    key: 'DATETIME_SHORT',
    get: function get$$1() {
      return Formats.DATETIME_SHORT;
    }

    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
     */

  }, {
    key: 'DATETIME_SHORT_WITH_SECONDS',
    get: function get$$1() {
      return Formats.DATETIME_SHORT_WITH_SECONDS;
    }

    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
     */

  }, {
    key: 'DATETIME_MED',
    get: function get$$1() {
      return Formats.DATETIME_MED;
    }

    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
     */

  }, {
    key: 'DATETIME_MED_WITH_SECONDS',
    get: function get$$1() {
      return Formats.DATETIME_MED_WITH_SECONDS;
    }

    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
     */

  }, {
    key: 'DATETIME_FULL',
    get: function get$$1() {
      return Formats.DATETIME_FULL;
    }

    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:303 AM EDT'. Only 12-hour if the locale is.
     */

  }, {
    key: 'DATETIME_FULL_WITH_SECONDS',
    get: function get$$1() {
      return Formats.DATETIME_FULL_WITH_SECONDS;
    }

    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     */

  }, {
    key: 'DATETIME_HUGE',
    get: function get$$1() {
      return Formats.DATETIME_HUGE;
    }

    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     */

  }, {
    key: 'DATETIME_HUGE_WITH_SECONDS',
    get: function get$$1() {
      return Formats.DATETIME_HUGE_WITH_SECONDS;
    }
  }]);
  return DateTime;
}();

exports.DateTime = DateTime;
exports.Duration = Duration;
exports.Interval = Interval;
exports.Info = Info;
exports.Zone = Zone;
exports.Settings = Settings;
//# sourceMappingURL=luxon.js.map


/***/ })
/******/ ]);