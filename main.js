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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    box-sizing: border-box;\\n    margin: 0;\\n    padding: 0;\\n    font-family: 'Monomaniac One', sans-serif;\\n}\\n\\n\\nbody {\\n    display: grid;\\n    grid-template-columns: 1fr 4fr;\\n    grid-template-rows: min-content 1fr;\\n    min-height: 100vh;\\n}\\n\\n/* HEADER----------------------------------------------------------- */\\n\\n.header {\\n    grid-column: 1/3;\\n    display: flex;\\n    background-color: #333;\\n    color: #fff;\\n    min-width: 300px;\\n}\\n\\n.header h1 {\\n    font-size: 3.5rem;\\n    padding: 20px 0px;\\n}\\n\\n/* NAV----------------------------------------------------------- */\\n.nav {\\n    grid-row: 2/3;\\n    background-color: #fff;\\n    padding: 10px;\\n    min-width: 300px;\\n}\\n\\n.nav h1 {\\n    padding: 5px 0px;\\n    border-bottom: 3px solid #333;\\n}\\n\\n.home-buttons button {\\n    display: block;\\n    border: none;\\n    background-color: #fff;\\n    width: 100%;\\n    font-size: 2rem;\\n    cursor: pointer;\\n    display: flex;\\n    align-items: center;\\n    padding: 10px 10px;\\n}\\n.home-buttons button:hover, .project-button:hover {\\n    color: white;\\n    background-color: #333;\\n}\\n\\n.project-button {\\n    display: block;\\n    border: none;\\n    background-color: #fff;\\n    width: 100%;\\n    min-width: 205px;\\n    font-size: 1.5rem;\\n    cursor: pointer;\\n    display: flex;\\n    align-items: center;\\n    padding: 5px 10px;\\n}\\n\\n.project-delete-btn {\\n    visibility: hidden;\\n    align-self: flex-end;\\n    margin-left: auto;\\n}\\n\\n.project-button:hover .project-delete-btn {\\n    visibility: visible;\\n} \\n\\n#add-project-btn {\\n    width: 100%;\\n    font-size: 1.5rem;\\n    border: none;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    background-color: #fff;\\n    cursor: pointer;\\n}\\n\\n#add-project-btn:hover {\\n    background-color: #333;\\n    color: white;\\n}\\n\\n.project-popup {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-rows: 1fr 1fr;\\n    row-gap: 5px;\\n    column-gap: 5px;\\n}\\n\\n.project-popup input {\\n    width: 100%;\\n    grid-column: 1/3;\\n    padding: 10px;\\n    border: 1px solid black;\\n    border-radius: 5px;\\n    margin-top: 5px;\\n}\\n\\n.project-popup button {\\n    padding: 5px;\\n    font-size: 1.2rem;\\n    border: 1px solid black;\\n    border-radius: 5px;\\n    color: white;\\n}\\n\\n.project-popup button:nth-child(2) {\\n    background-color: green;\\n}\\n\\n.project-popup button:nth-child(3) {\\n    background-color: red;\\n}\\n\\n/* CONTENT----------------------------------------------------------- */\\n\\n.content {\\n    grid-area: 2/2/3/3;\\n    background-color: #ddd;\\n    padding: 25px 100px;\\n}\\n\\n#content-title {\\n    font-size: 2.5rem;\\n}\\n\\n.task-item:nth-child(even) {\\n    background-color: white;\\n}\\n\\n.task-item {\\n    font-size: 1.2rem;\\n    display: flex;\\n    justify-content: flex-end;\\n    gap: 20px;\\n    padding: 10px;\\n    align-items: center;\\n}\\n\\n.complete-task-btn {\\n    cursor: pointer;\\n}\\n\\n.task {\\n    margin-right: auto;\\n}\\n\\n.add-task-btn {\\n    margin-top: 10px;\\n    width: 100%;\\n    font-size: 1.5rem;\\n    border: none;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    cursor: pointer;\\n    background-color: #ddd;\\n    border-radius: 20px;\\n}\\n\\n.add-task-btn:hover {\\n    background-color: #333;\\n    color: white;\\n}\\n\\n.input-due-date {\\n    border: none;\\n    background-color: inherit;\\n    font-size: 1.2rem;\\n}\\n\\n.task-popup {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-rows: 1fr 1fr;\\n    row-gap: 5px;\\n    column-gap: 5px;\\n}\\n\\n.task-popup input {\\n    width: 100%;\\n    grid-column: 1/3;\\n    padding: 10px;\\n    border: 1px solid black;\\n    border-radius: 5px;\\n    margin-top: 5px;\\n}\\n\\n.task-popup button {\\n    padding: 5px;\\n    font-size: 1.2rem;\\n    border: 1px solid black;\\n    border-radius: 5px;\\n    color: white;\\n}\\n\\n.task-popup button:nth-child(2) {\\n    background-color: green;\\n}\\n\\n.task-popup button:nth-child(3) {\\n    background-color: red;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectManager */ \"./src/projectManager.js\");\n\n\n\n\nconst addTaskButton = document.querySelector('.add-task-btn');\nconst addProjectButton = document.querySelector('#add-project-btn');\nlet content = document.querySelector('.content')\nlet contentTitle = document.querySelector('#content-title')\nlet projects = document.querySelector('.projects')\n\n// Tasks\nconst taskContainer = document.createElement('div')\nconst taskTextBox = document.createElement('input')\nconst addTaskBtn = document.createElement('button')\nconst closeTaskBtn = document.createElement('button')\nconst taskList = document.querySelector('.task-list')\n\n// Projects\nconst projectContainer = document.createElement('div')\nconst projectTextBox = document.createElement('input')\nconst addProjectBtn = document.createElement('button')\nconst closeProjectBtn = document.createElement('button')\nconst projectList = document.querySelector('.projects-list')\n\n// Home buttons\nconst inboxButton = document.querySelector('#inbox')\n\n// Default Project\nconst InboxProject = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Inbox')\n  \n// Close events\nfunction closeTaskEvent() {\n    taskTextBox.value = \"\"\n    taskContainer.style.display = 'none';\n    addTaskButton.style.display = 'flex'\n}\n\nfunction closeProjectEvent() {\n    projectTextBox.value = \"\"\n    projectContainer.style.display = 'none';\n    addProjectButton.style.display = 'flex'\n}\n// Add Events\nfunction addTaskEvent() {\n    const newTask = new _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"]() \n    newTask.setName(taskTextBox.value)\n    newTask.setPriority(\"High Priority\")\n    newTask.setParent(taskList)\n    InboxProject.addTask(newTask)\n    console.log(InboxProject)\n    closeTaskEvent(taskContainer)\n}\n\nfunction addProjectEvent() {\n    const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]() \n    newProject.setName(projectTextBox.value)\n    newProject.setParent(projectList)\n    closeProjectEvent(projectContainer)\n}\n\n// Create elements\nfunction createTaskElements() {\n    addTaskButton.style.display = 'none'\n    taskContainer.classList.add('task-popup')\n    taskContainer.style.display = 'grid';\n    taskTextBox.type = 'text'\n    taskTextBox.placeholder = 'add task'\n    addTaskBtn.textContent = 'Add'\n    closeTaskBtn.textContent = 'Close'\n    \n    content.appendChild(taskContainer)\n    taskContainer.appendChild(taskTextBox)\n    taskContainer.appendChild(addTaskBtn)\n    taskContainer.appendChild(closeTaskBtn)\n}\n\nfunction createProjectElements() {\n    addProjectButton.style.display = 'none'\n    projectContainer.classList.add('project-popup')\n    projectContainer.style.display = 'grid';\n    projectTextBox.type = 'text'\n    projectTextBox.placeholder = 'add project'\n    addProjectBtn.textContent = 'Add'\n    closeProjectBtn.textContent = 'Close'\n    \n    projects.appendChild(projectContainer)\n    projectContainer.appendChild(projectTextBox)\n    projectContainer.appendChild(addProjectBtn)\n    projectContainer.appendChild(closeProjectBtn)\n}\n// stuck appending array elements to dom\n// deleting tasks from array\n\nfunction createInboxElements() {\n    taskList.textContent = ''\n    contentTitle.textContent = 'Inbox'\n\n}\n\n// Close/Add events\ncloseTaskBtn.addEventListener('click', () => {\n    closeTaskEvent()\n})\n\ncloseProjectBtn.addEventListener('click', () => {\n    closeProjectEvent()\n})\n\naddTaskBtn.addEventListener('click', () => {\n     if (taskTextBox.value === '') {\n        alert('Task can not be empty')\n    } else {\n        addTaskEvent()\n     }\n})\n\naddProjectBtn.addEventListener('click', () => {\n     if (projectTextBox.value === '') {\n        alert('Project can not be empty')\n    } else {\n        addProjectEvent()\n     }\n})\n//Remove task items from task list\n/* document.addEventListener('click', (event) => {\n  if (event.target.classList.contains('complete-task-btn')) {\n    console.log('Task completed');\n    const taskItem = event.target.parentElement;\n    taskItem.remove();\n  }\n}); */\n\naddTaskButton.addEventListener('click', () => {\n    console.log('Added task')\n    createTaskElements()\n})\n\naddProjectButton.addEventListener('click', () => {\n    console.log('Added Project')\n    createProjectElements()\n})\n\ninboxButton.addEventListener('click', () => {\n    createInboxElements()\n})\n\n\n/* export default function CreateTaskEvent(){ \n    addTaskButton.addEventListener('click', () => {\n        console.log('Added task')\n        createTaskElements()\n    })\n}\n */\n\n\n//# sourceURL=webpack://todo-list/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\n\n\n\n//CreateTaskEvent()\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\nclass Project{\n    constructor(name) {\n        this.tasks = [];\n\n        this.logo = document.createElement('span')\n        this.logo.classList.add('material-symbols-outlined')\n        this.logo.textContent = 'summarize'\n        this.logo.style.fontSize = '2rem'\n\n        this.container = document.createElement('button')\n        this.container.classList.add(\"project-button\")\n\n        this.project = document.createElement('div')\n        this.project.classList.add(\"project-name\")\n        this.project.textContent = name\n\n        this.complete = document.createElement('span')\n        this.complete.classList.add('material-symbols-outlined')\n        this.complete.classList.add('project-delete-btn')\n        this.complete.textContent = 'close'\n        this.complete.style.fontSize = '2rem'\n        this.complete.addEventListener('click', () => {\n            this.container.remove();\n        })\n\n        this.container.appendChild(this.logo)\n        this.container.appendChild(this.project)\n        this.container.appendChild(this.complete)\n\n    }\n\n    setParent(parent) {\n        parent.appendChild(this.container)\n    }\n\n    setName(name) {\n        this.project.textContent = name\n    }\n\n    getName() {\n        return this.name\n    }\n\n    setTask(tasks) {\n        this.tasks = tasks\n    }\n\n    getTasks() {\n        return this.tasks\n    }\n\n    addTask(task) {\n        this.tasks.push(task)\n    }\n\n    removeTask(task) {\n        const index = this.tasks.indexOf(task)\n        if (index !== -1) {\n            this.tasks.splice(index, 1)\n        }\n    }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/projectManager.js":
/*!*******************************!*\
  !*** ./src/projectManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ projectManager)\n/* harmony export */ });\nclass projectManager {\n    constructor() {\n        this.list = []\n        this.index = new Project()\n    }\n\n    getIndex() {\n        return this.index\n    }\n\n    setIndex(project) {\n        this.index = project\n    }\n\n    addProject(project) {\n        this.list.push()\n    }\n\n    removeProject() {\n        const index = this.list.indexOf(project)\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/projectManager.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nclass Task {\n    constructor(name, priority, dueDate = 'No Date Added') {\n        this.container = document.createElement('div')\n        this.container.classList.add(\"task-item\")\n\n        this.complete = document.createElement('span')\n        this.complete.classList.add('material-symbols-outlined')\n        this.complete.classList.add('complete-task-btn')\n        this.complete.textContent = 'radio_button_unchecked'\n        this.complete.addEventListener('click', () => {\n            this.container.remove();\n        })\n\n        this.task = document.createElement('div')\n        this.task.classList.add(\"task\")\n        this.task.textContent = name\n\n        this.priority = document.createElement('div')\n        this.priority.classList.add('priority')\n        this.priority.textContent = priority\n\n        this.dueDate = document.createElement('input')\n        this.dueDate.type = 'date'\n        this.dueDate.classList.add('input-due-date')\n\n        this.container.appendChild(this.complete)\n        this.container.appendChild(this.task)\n        this.container.appendChild(this.priority)\n        this.container.appendChild(this.dueDate)\n        console.log(\"creating Task...\")\n    }\n\n    setParent(parent) {\n        parent.appendChild(this.container)\n    }\n\n    setName(name) {\n        this.task.textContent = name\n    }\n\n    getName() {\n        return this.task.textContent\n    }\n\n    setDate(dueDate) {\n        this.dueDate.textContent = dueDate\n    }\n\n    getDate() {\n        return this.dueDate.textContent\n    }\n\n    setPriority(priority) {\n        this.priority.textContent = priority\n    }\n\n    getPriority() {\n        return this.priority.textContent\n    }\n};\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

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