/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    box-sizing: border-box;\\n    margin: 0;\\n    padding: 0;\\n    font-family: 'Monomaniac One', sans-serif;\\n}\\n\\n\\nbody {\\n    display: grid;\\n    grid-template-columns: 1fr 4fr;\\n    grid-template-rows: min-content 1fr;\\n    min-height: 100vh;\\n}\\n\\n/* HEADER----------------------------------------------------------- */\\n\\n.header {\\n    grid-column: 1/3;\\n    display: flex;\\n    background-color: #333;\\n    color: #fff;\\n    min-width: 300px;\\n}\\n\\n.header h1 {\\n    font-size: 3.5rem;\\n    padding: 20px 0px;\\n}\\n\\n/* NAV----------------------------------------------------------- */\\n.nav {\\n    grid-row: 2/3;\\n    background-color: #fff;\\n    padding: 10px;\\n    min-width: 300px;\\n}\\n\\n.nav h1 {\\n    padding: 5px 0px;\\n    border-bottom: 3px solid #333;\\n}\\n\\n.home-buttons button {\\n    display: block;\\n    border: none;\\n    background-color: #fff;\\n    width: 100%;\\n    font-size: 2rem;\\n    cursor: pointer;\\n    display: flex;\\n    align-items: center;\\n    padding: 10px 10px;\\n}\\n.home-buttons button:hover, .project-button:hover {\\n    color: white;\\n    background-color: #333;\\n}\\n\\n.project-button {\\n    display: block;\\n    border: none;\\n    background-color: #fff;\\n    width: 100%;\\n    min-width: 205px;\\n    font-size: 1.5rem;\\n    cursor: pointer;\\n    display: flex;\\n    align-items: center;\\n    padding: 5px 10px;\\n}\\n\\n.project-delete-btn {\\n    visibility: hidden;\\n    align-self: flex-end;\\n    margin-left: auto;\\n}\\n\\n.project-button:hover .project-delete-btn {\\n    visibility: visible;\\n} \\n\\n#add-project-btn {\\n    width: 100%;\\n    font-size: 1.5rem;\\n    border: none;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    background-color: #fff;\\n    cursor: pointer;\\n}\\n\\n#add-project-btn:hover {\\n    background-color: #333;\\n    color: white;\\n}\\n\\n.project-popup {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-rows: 1fr 1fr;\\n    row-gap: 5px;\\n    column-gap: 5px;\\n}\\n\\n.project-popup input {\\n    width: 100%;\\n    grid-column: 1/3;\\n    padding: 10px;\\n    border: 1px solid black;\\n    border-radius: 5px;\\n    margin-top: 5px;\\n}\\n\\n.project-popup button {\\n    padding: 5px;\\n    font-size: 1.2rem;\\n    border: 1px solid black;\\n    border-radius: 5px;\\n    color: white;\\n    cursor: pointer;\\n}\\n\\n.project-popup button:nth-child(2) {\\n    background-color: green;\\n}\\n\\n.project-popup button:nth-child(3) {\\n    background-color: red;\\n}\\n\\n/* CONTENT----------------------------------------------------------- */\\n\\n.content {\\n    grid-area: 2/2/3/3;\\n    background-color: #ddd;\\n    padding: 25px 100px;\\n}\\n\\n#content-title {\\n    font-size: 2.5rem;\\n}\\n\\n.task-item:nth-child(even) {\\n    background-color: white;\\n}\\n\\n.task-item {\\n    font-size: 1.2rem;\\n    display: flex;\\n    justify-content: flex-end;\\n    gap: 20px;\\n    padding: 10px;\\n    align-items: center;\\n}\\n\\n.complete-task-btn {\\n    cursor: pointer;\\n}\\n\\n.task {\\n    margin-right: auto;\\n}\\n\\n.add-task-btn {\\n    margin-top: 10px;\\n    width: 100%;\\n    font-size: 1.5rem;\\n    border: none;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    cursor: pointer;\\n    background-color: #ddd;\\n    border-radius: 20px;\\n}\\n\\n.add-task-btn:hover {\\n    background-color: #333;\\n    color: white;\\n}\\n\\n.input-due-date {\\n    border: none;\\n    min-width: 150px;\\n    background-color: inherit;\\n    font-size: 1.2rem;\\n}\\n\\n.task-popup {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-rows: 1fr 1fr;\\n    row-gap: 5px;\\n    column-gap: 5px;\\n}\\n\\n.task-popup input {\\n    width: 100%;\\n    grid-column: 1/3;\\n    padding: 10px;\\n    border: 1px solid black;\\n    border-radius: 5px;\\n    margin-top: 5px;\\n}\\n\\n.task-popup button {\\n    padding: 5px;\\n    font-size: 1.2rem;\\n    border: 1px solid black;\\n    border-radius: 5px;\\n    color: white;\\n    cursor: pointer;\\n}\\n\\n.task-popup button:nth-child(2) {\\n    background-color: green;\\n}\\n\\n.task-popup button:nth-child(3) {\\n    background-color: red;\\n}\\n\\n.task-item select {\\n    background-color: inherit;\\n    font-size: 1rem;\\n    border: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),\n/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)\n/* harmony export */ });\nvar defaultOptions = {};\nfunction getDefaultOptions() {\n  return defaultOptions;\n}\nfunction setDefaultOptions(newOptions) {\n  defaultOptions = newOptions;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/defaultOptions/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n  var number = Number(dirtyNumber);\n  if (isNaN(number)) {\n    return number;\n  }\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/getDate/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/getDate/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getDate)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name getDate\n * @category Day Helpers\n * @summary Get the day of the month of the given date.\n *\n * @description\n * Get the day of the month of the given date.\n *\n * @param {Date|Number} date - the given date\n * @returns {Number} the day of month\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Which day of the month is 29 February 2012?\n * const result = getDate(new Date(2012, 1, 29))\n * //=> 29\n */\nfunction getDate(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  var dayOfMonth = date.getDate();\n  return dayOfMonth;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/getDate/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/getMonth/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/getMonth/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getMonth)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name getMonth\n * @category Month Helpers\n * @summary Get the month of the given date.\n *\n * @description\n * Get the month of the given date.\n *\n * @param {Date|Number} date - the given date\n * @returns {Number} the month\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Which month is 29 February 2012?\n * const result = getMonth(new Date(2012, 1, 29))\n * //=> 1\n */\nfunction getMonth(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  var month = date.getMonth();\n  return month;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/getMonth/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/getYear/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/getYear/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getYear)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name getYear\n * @category Year Helpers\n * @summary Get the year of the given date.\n *\n * @description\n * Get the year of the given date.\n *\n * @param {Date|Number} date - the given date\n * @returns {Number} the year\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Which year is 2 July 2014?\n * const result = getYear(new Date(2014, 6, 2))\n * //=> 2014\n */\nfunction getYear(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate).getFullYear();\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/getYear/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isSameWeek)\n/* harmony export */ });\n/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ \"./node_modules/date-fns/esm/startOfWeek/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isSameWeek\n * @category Week Helpers\n * @summary Are the given dates in the same week (and month and year)?\n *\n * @description\n * Are the given dates in the same week (and month and year)?\n *\n * @param {Date|Number} dateLeft - the first date to check\n * @param {Date|Number} dateRight - the second date to check\n * @param {Object} [options] - an object with options.\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Boolean} the dates are in the same week (and month and year)\n * @throws {TypeError} 2 arguments required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // Are 31 August 2014 and 4 September 2014 in the same week?\n * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))\n * //=> true\n *\n * @example\n * // If week starts with Monday,\n * // are 31 August 2014 and 4 September 2014 in the same week?\n * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {\n *   weekStartsOn: 1\n * })\n * //=> false\n *\n * @example\n * // Are 1 January 2014 and 1 January 2015 in the same week?\n * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))\n * //=> false\n */\nfunction isSameWeek(dirtyDateLeft, dirtyDateRight, options) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft, options);\n  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight, options);\n  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isSameWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isThisWeek)\n/* harmony export */ });\n/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ \"./node_modules/date-fns/esm/isSameWeek/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isThisWeek\n * @category Week Helpers\n * @summary Is the given date in the same week as the current date?\n * @pure false\n *\n * @description\n * Is the given date in the same week as the current date?\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * @param {Date|Number} date - the date to check\n * @param {Object} [options] - the object with options\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Boolean} the date is in this week\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // If today is 25 September 2014, is 21 September 2014 in this week?\n * const result = isThisWeek(new Date(2014, 8, 21))\n * //=> true\n *\n * @example\n * // If today is 25 September 2014 and week starts with Monday\n * // is 21 September 2014 in this week?\n * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })\n * //=> false\n */\n\nfunction isThisWeek(dirtyDate, options) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate, Date.now(), options);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isThisWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name startOfDay\n * @category Day Helpers\n * @summary Return the start of a day for the given date.\n *\n * @description\n * Return the start of a day for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|Number} date - the original date\n * @returns {Date} the start of a day\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // The start of a day for 2 September 2014 11:55:00:\n * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 00:00:00\n */\nfunction startOfDay(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  date.setHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/startOfDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfToday/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfToday/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfToday)\n/* harmony export */ });\n/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../startOfDay/index.js */ \"./node_modules/date-fns/esm/startOfDay/index.js\");\n\n/**\n * @name startOfToday\n * @category Day Helpers\n * @summary Return the start of today.\n * @pure false\n *\n * @description\n * Return the start of today.\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * @returns {Date} the start of today\n *\n * @example\n * // If today is 6 October 2014:\n * const result = startOfToday()\n * //=> Mon Oct 6 2014 00:00:00\n */\nfunction startOfToday() {\n  return (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Date.now());\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/startOfToday/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfWeek)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ \"./node_modules/date-fns/esm/_lib/defaultOptions/index.js\");\n\n\n\n\n/**\n * @name startOfWeek\n * @category Week Helpers\n * @summary Return the start of a week for the given date.\n *\n * @description\n * Return the start of a week for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|Number} date - the original date\n * @param {Object} [options] - an object with options.\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Date} the start of a week\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // The start of a week for 2 September 2014 11:55:00:\n * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Sun Aug 31 2014 00:00:00\n *\n * @example\n * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:\n * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })\n * //=> Mon Sep 01 2014 00:00:00\n */\nfunction startOfWeek(dirtyDate, options) {\n  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();\n  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);\n\n  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN\n  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {\n    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');\n  }\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(dirtyDate);\n  var day = date.getDay();\n  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;\n  date.setDate(date.getDate() - diff);\n  date.setHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/startOfWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument);\n\n  // Clone the date\n  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(argument) === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\");\n      // eslint-disable-next-line no-console\n      console.warn(new Error().stack);\n    }\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectManager */ \"./src/projectManager.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\n\nconst addTaskButton = document.querySelector('.add-task-btn');\nconst addProjectButton = document.querySelector('#add-project-btn');\nlet content = document.querySelector('.content')\nlet contentTitle = document.querySelector('#content-title')\nlet projectsSection = document.querySelector('.projects')\n\n// Storage\nconst todoStorage = new _storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n\n// Tasks\nconst taskContainer = document.createElement('div')\nconst taskTextBox = document.createElement('input')\nconst addTaskBtn = document.createElement('button')\nconst closeTaskBtn = document.createElement('button')\nconst taskList = document.querySelector('.task-list')\n\n// Projects\nconst projectContainer = document.createElement('div')\nconst projectTextBox = document.createElement('input')\nconst addProjectBtn = document.createElement('button')\nconst closeProjectBtn = document.createElement('button')\nconst projectList = document.querySelector('.projects-list')\nconst projects = new _projectManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\n\n// Home buttons\nconst inboxButton = document.querySelector('#inbox')\nconst todayButton = document.querySelector('#today')\nconst thisWeekButton = document.querySelector('#this-week')\n\n// Default Projects\nconst inboxProject = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\nconst todayProject = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\nconst thisWeekProject = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\n\ninboxProject.setName('Inbox')\ntodayProject.setName('Today')\nthisWeekProject.setName('This Week')\n\nprojects.addProject(inboxProject)\nprojects.addProject(todayProject)\nprojects.addProject(thisWeekProject)\nconsole.log(projects.list)\n\n// Change tab events\nfunction changeToNewTab(tab) {\n    contentTitle.textContent = tab.getName()\n    projects.setIndex(tab)\n    projects.getIndex().createTaskElement(taskList)\n}\n\n// Load tasks and projects from storage\nfunction loadTasksAndProjects() {\n    const loadedProjects = todoStorage.getProjects();\n    loadedProjects.forEach(project => {\n        const newProject = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        newProject.setName(project.title);\n        newProject.setParent(projectList);\n        projects.addProject(newProject);\n\n        newProject.getContainer().addEventListener('mouseup', () => {\n            changeToNewTab(newProject);\n            addTaskButton.style.display = 'flex';\n        });\n\n        newProject.complete.addEventListener('click', () => {\n            newProject.deleteTaskElements(thisWeekProject, todayProject);\n            projects.removeProject(newProject);\n            newProject.container.remove();\n\n            changeToNewTab(inboxProject);\n\n            todoStorage.deleteProject(newProject.getName())\n         });\n    });\n\n    const loadedTasks = todoStorage.getTasks(projects.getIndex().getName());\n    loadedTasks.forEach(task => {\n        const newTask = _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadFromLocalStorage(task.title);\n        if(newTask) {\n            newTask.setName(task.title);\n            newTask.setParent(taskList);\n            newTask.checkDate(thisWeekProject, todayProject, newTask);\n\n            projects.getIndex().addTask(newTask);\n            newTask.setProjectOwner(projects.getIndex(), newTask, todoStorage);\n\n            //newTask.createTaskElement(taskList)\n        }\n    });\n}\n \n// Close events\nfunction closeTaskEvent() {\n    taskTextBox.value = \"\"\n    taskContainer.style.display = 'none';\n    addTaskButton.style.display = 'flex'\n}\n\nfunction closeProjectEvent() {\n    projectTextBox.value = \"\"\n    projectContainer.style.display = 'none';\n    addProjectButton.style.display = 'flex'\n}\n// Add Events\nfunction addTaskEvent() {\n    const newTask = new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"]() \n    newTask.setName(taskTextBox.value)\n    newTask.setParent(taskList)\n    newTask.checkDate(thisWeekProject, todayProject, newTask)\n    projects.getIndex().addTask(newTask)\n    newTask.setProjectOwner(projects.getIndex(), newTask, todoStorage)\n    \n    // Save the task to storage\n    newTask.saveToLocalStorage()\n    todoStorage.createTask(newTask.getName(), projects.getIndex().getName())\n    closeTaskEvent(taskContainer)\n}\n\nfunction addProjectEvent() {\n    const newProject = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"]() \n    newProject.setName(projectTextBox.value)\n    newProject.setParent(projectList)\n    projects.addProject(newProject)\n    \n    todoStorage.createProject(newProject.getName());\n\n    newProject.getContainer().addEventListener('mouseup', () => {\n        changeToNewTab(newProject)\n        addTaskButton.style.display = 'flex'\n    })\n\n    newProject.complete.addEventListener('click', () => {\n        newProject.deleteTaskElements(thisWeekProject, todayProject)\n        projects.removeProject(newProject)\n        newProject.container.remove()\n\n        todoStorage.deleteProject(newProject.getName());\n        changeToNewTab(inboxProject)\n    })\n    closeProjectEvent(projectContainer)\n}\n\n// Create elements\nfunction createTaskElements() {\n    addTaskButton.style.display = 'none'\n    taskContainer.classList.add('task-popup')\n    taskContainer.style.display = 'grid';\n    taskTextBox.type = 'text'\n    taskTextBox.placeholder = 'add task'\n    addTaskBtn.textContent = 'Add'\n    closeTaskBtn.textContent = 'Close'\n    \n    content.appendChild(taskContainer)\n    taskContainer.appendChild(taskTextBox)\n    taskContainer.appendChild(addTaskBtn)\n    taskContainer.appendChild(closeTaskBtn)\n}\n\nfunction createProjectElements() {\n    addProjectButton.style.display = 'none'\n    projectContainer.classList.add('project-popup')\n    projectContainer.style.display = 'grid';\n    projectTextBox.type = 'text'\n    projectTextBox.placeholder = 'add project'\n    addProjectBtn.textContent = 'Add'\n    closeProjectBtn.textContent = 'Close'\n    \n    projectsSection.appendChild(projectContainer)\n    projectContainer.appendChild(projectTextBox)\n    projectContainer.appendChild(addProjectBtn)\n    projectContainer.appendChild(closeProjectBtn)\n}\n\n// Close/Add events\ncloseTaskBtn.addEventListener('click', () => {\n    closeTaskEvent()\n})\n\ncloseProjectBtn.addEventListener('click', () => {\n    closeProjectEvent()\n})\n\naddTaskBtn.addEventListener('click', () => {\n     if (taskTextBox.value === '') {\n        alert('Task can not be empty')\n    } else {\n        addTaskEvent()\n    }\n})\n\naddProjectBtn.addEventListener('click', () => {\n     if (projectTextBox.value === '') {\n        alert('Project can not be empty')\n    } else {\n        addProjectEvent()\n     }\n})\n\naddTaskButton.addEventListener('click', () => {\n    console.log('Adding task')\n    closeProjectEvent()\n    createTaskElements()\n})\n\naddProjectButton.addEventListener('click', () => {\n    console.log('Adding Project')\n    closeTaskEvent()\n    createProjectElements()\n})\n\ninboxButton.addEventListener('click', () => {\n    console.log(inboxProject.tasks)\n    changeToNewTab(inboxProject)\n    addTaskButton.style.display = 'flex'\n})\n\ntodayButton.addEventListener('click', () => {\n    changeToNewTab(todayProject)\n    closeTaskEvent()\n    addTaskButton.style.display = 'none'\n})\n\nthisWeekButton.addEventListener('click', () => {\n    changeToNewTab(thisWeekProject)\n    closeTaskEvent()\n    addTaskButton.style.display = 'none'\n})\n\n\nprojects.loadProjects(todoStorage.getProjects())\n\n\nprojects.setIndex(inboxProject)\nprojects.getIndex().createTaskElement(taskList)\nloadTasksAndProjects()\n\n// Set the initial tab to Inbox and create the task elements\nchangeToNewTab(inboxProject)\n\n//todoStorage.clearTodoList()\n\n//# sourceURL=webpack://todo-list/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\n\n\n\n//CreateTaskEvent()\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectManager */ \"./src/projectManager.js\");\n\n\n\nclass Project {\n    constructor(name) {\n        this.title = name\n        this.tasks = [];\n\n        this.logo = document.createElement('span')\n        this.logo.classList.add('material-symbols-outlined')\n        this.logo.textContent = 'summarize'\n        this.logo.style.fontSize = '2rem'\n\n        this.container = document.createElement('button')\n        this.container.classList.add(\"project-button\")\n\n        this.project = document.createElement('div')\n        this.project.classList.add(\"project-name\")\n        this.project.textContent = name\n\n        this.complete = document.createElement('span')\n        this.complete.classList.add('material-symbols-outlined')\n        this.complete.classList.add('project-delete-btn')\n        this.complete.textContent = 'close'\n        this.complete.style.fontSize = '2rem'\n\n        this.container.appendChild(this.logo)\n        this.container.appendChild(this.project)\n        this.container.appendChild(this.complete)\n\n    }\n\n    getContainer() {\n        return this.container\n    }\n\n    setParent(parent) {\n        parent.appendChild(this.container)\n    }\n\n    setName(name) {\n        this.project.textContent = name\n    }\n\n    getName() {\n        return this.project.textContent\n    }\n\n    setTask(tasks) {\n        this.tasks = tasks\n    }\n\n    getTasks() {\n        return this.tasks\n    }\n\n    addTask(task) {\n        this.tasks.push(task)\n    }\n\n    removeTask(task) {\n        const index = this.tasks.indexOf(task)\n        if (index !== -1) {\n            this.tasks.splice(index, 1)\n        }\n    }\n\n    createTaskElement(list) {\n        if (this.tasks != null) {\n            list.textContent = ''\n            for (let task in this.tasks) {\n                list.appendChild(this.tasks[task].getContainer())\n            }\n        }     \n    }\n\n    deleteTaskElements(weekly, daily) {\n        this.week = weekly\n        this.today = daily\n\n        if (this.tasks != null) {\n            for (let task in this.tasks) {\n                this.week.removeTask(this.tasks[task])\n                this.today.removeTask(this.tasks[task])\n            }\n        }\n    }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/projectManager.js":
/*!*******************************!*\
  !*** ./src/projectManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ projectManager)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nclass projectManager {\n    constructor() {\n        this.list = []\n        this.index = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n    }\n\n    getIndex() {\n        return this.index\n    }\n\n    setIndex(project) {\n        this.index = project\n    }\n\n    addProject(project) {\n        this.list.push(project)\n    }\n\n    removeProject(project) {\n        const index = this.list.indexOf(project)\n        if(index !== -1) {\n            this.list.splice(index,1)\n        }\n    }\n\n    loadProjects(projectsData) {\n        this.list = projectsData.map(projectData => {\n            const project = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n            project.setName(projectData.title)\n            return project\n        })\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/projectManager.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\nclass Storage {\n    constructor() {\n        this.storage = { projects: [], tasks: [] };\n        this.loadTodoList()\n    }\n    \n    createProject(title) {\n        const project = { title, id: this.generateId() };\n        this.storage.projects.push(project);\n        this.saveTodoList();\n    }\n\n    createTask(title, projectId) {\n        const task = { title, projectId, id: this.generateId() };\n        this.storage.tasks.push(task);\n        this.saveTodoList();\n    }\n\n    getProjects() {\n        return this.storage.projects\n    }\n\n    getTasks(projectId) {\n        return this.storage.tasks.filter(task => task.projectId === projectId)\n    }\n\n    deleteProject(projectName) {\n        // Delete project from storage.projects\n        this.storage.projects = this.storage.projects.filter(\n            (project) => project.title !== projectName\n        )\n        \n        // Delete project from storage.tasks\n        this.storage.tasks = this.storage.tasks.filter(\n            (task) => task.title !== projectName\n        );\n\n        this.saveTodoList();\n    }\n\n    deleteTask(taskName) {\n    // Remove the task from storage.tasks\n    this.storage.tasks = this.storage.tasks.filter(\n      (task) => task.title !== taskName\n    );\n\n    this.saveTodoList();\n  }\n\n    saveTodoList() {\n        localStorage.setItem('storage', JSON.stringify(this.storage))\n        console.log('Saved data to local storage:', this.storage);\n    }\n\n    loadTodoList() {\n        const storedTodoList = localStorage.getItem('storage')\n        if (storedTodoList) {\n            this.storage = JSON.parse(storedTodoList)\n            console.log('Loaded data from local storage:', this.storage);\n        }\n    }\n\n    generateId() {\n        return Math.random().toString(36).substring(2, 9);\n    }\n\n    clearTodoList() {\n        localStorage.removeItem('storage');\n        this.storage = { projects: [], tasks: [] };\n    }\n};\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectManager */ \"./src/projectManager.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/startOfToday/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/getYear/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/getMonth/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/getDate/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/isThisWeek/index.js\");\n\n\n\n\nclass Task {\n    constructor(name, priorityValue, dueDateValue) {\n        this.title = name\n        this.priorityValue = priorityValue\n        this.dueDateValue = dueDateValue\n\n        this.container = document.createElement('div')\n        this.container.classList.add(\"task-item\")\n        \n        this.complete = document.createElement('span')\n        this.complete.classList.add('material-symbols-outlined')\n        this.complete.classList.add('complete-task-btn')\n        this.complete.textContent = 'radio_button_unchecked'\n\n        this.task = document.createElement('div')\n        this.task.classList.add(\"task\")\n        this.task.textContent = name\n\n        this.priority = document.createElement('select')\n        this.priority.classList.add('priority')\n        this.priority.value = priorityValue\n        this.priority.addEventListener('change', () => {\n            this.saveToLocalStorage()\n        })\n\n        this.lowPriority = document.createElement(\"option\")\n        this.mediumPriority = document.createElement(\"option\")\n        this.highPriority = document.createElement(\"option\")\n\n        this.lowPriority.value = 'Low Priority'\n        this.lowPriority.text = 'Low Priority'\n        this.mediumPriority.value = 'Medium priority'\n        this.mediumPriority.text = 'Medium Priority'\n        this.highPriority.value = 'High priority'\n        this.highPriority.text = 'High Priority'\n        \n\n        this.dueDate = document.createElement('input')\n        this.dueDate.type = 'date'\n        this.dueDate.classList.add('input-due-date')\n        this.dueDate.value = dueDateValue\n\n        this.container.appendChild(this.complete)\n        this.container.appendChild(this.task)\n        this.container.appendChild(this.priority)\n        this.container.appendChild(this.dueDate)\n        this.priority.appendChild(this.lowPriority)\n        this.priority.appendChild(this.mediumPriority)\n        this.priority.appendChild(this.highPriority)\n        console.log(\"created Task...\")\n    }\n\n    saveToLocalStorage() {\n        const taskData = {\n            name: this.title,\n            priorityValue: this.getPriority(),\n            dueDateValue: this.getDateValue()\n        };\n        localStorage.setItem(this.title, JSON.stringify(taskData))\n    }\n\n    static loadFromLocalStorage(name) {\n        const taskData = localStorage.getItem(name);\n        if (taskData) {\n            const { name, priorityValue, dueDateValue } = JSON.parse(taskData)\n            const task = new Task(name, priorityValue, dueDateValue)\n            task.setPriority(priorityValue)\n            return task\n        }\n        return null\n    }\n\n    getContainer() {\n        return this.container\n    }\n\n    setParent(parent) {\n        parent.appendChild(this.container)\n    }\n\n    setName(name) {\n        this.title = name\n        this.task.textContent = name\n    }\n\n    getName() {\n        return this.title\n    }\n\n    setPriority(priority) {\n        this.priority.value = priority;\n    }\n\n    getPriority() {\n        return this.priority.value\n    }\n\n    setDueDate(dueDate) {\n        this.dueDateValue = dueDate;\n        console.log(dueDate)\n    }\n\n    getDateValue() {\n        return this.dueDate.value\n    }\n\n    setProjectOwner(parent, task, storage) {\n        this.project = parent\n        this.task = task\n        this.storage = storage\n        this.complete.addEventListener('click', () =>{\n            console.log(this.task.getName())\n            this.project.removeTask(this.task)\n            this.container.remove()\n            this.storage.deleteTask(this.task.getName())\n        })\n    }\n    \n    makeDate(year, month, day) {\n        const yyyy = String(year)\n        const mm = (month < 10 ? '0' : '') + String(month + 1)\n        const dd = (day < 10 ? '0' : '') + String(day)\n        const dateString = yyyy + '-' + mm + '-' + dd\n        return dateString\n    }\n\n    getCurrentDate() {\n        return new Date(this.getDateValue())\n    }\n\n    getTodaysDate() {\n        const todaysDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n        return this.makeDate((0,date_fns__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(todaysDate), (0,date_fns__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(todaysDate), (0,date_fns__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(todaysDate))\n    }\n\n    checkDate(weekly, daily, item) {\n        this.week = weekly\n        this.today = daily\n        this.taskDate = item\n\n        this.dueDate.addEventListener('change', () => {\n            this.saveToLocalStorage()\n            this.setDueDate(this.dueDate.value)\n            if (this.dueDate.value === this.getTodaysDate()) {\n                this.today.addTask(this.taskDate) \n                this.dueDate.addEventListener('change', () => {\n                    if (this.dueDate.value !== this.getTodaysDate()) {\n                        this.today.removeTask(this.taskDate)  \n                    }   \n                })\n                this.complete.addEventListener('click', () =>{\n                    this.today.removeTask(this.taskDate)\n                    this.container.remove()\n                })\n            }\n            \n            if((0,date_fns__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this.getCurrentDate()) == true){\n                this.week.addTask(this.taskDate)\n                this.dueDate.addEventListener('change', () => {\n                    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this.getCurrentDate()) == false) {\n                        this.week.removeTask(this.taskDate) \n                    } \n                })\n                this.complete.addEventListener('click', () =>{\n                    this.week.removeTask(this.taskDate)\n                    this.container.remove()\n                })\n            }\n        })\n    }\n};\n\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;