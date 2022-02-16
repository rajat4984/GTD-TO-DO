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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/check-circle.svg */ \"./src/img/check-circle.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  font-family: \\\"Noto Sans\\\", sans-serif;\\r\\n}\\r\\n\\r\\n:root {\\r\\n  --myBlack: #18191a;\\r\\n  --myLightBlack: #242526;\\r\\n  --myGrey: #3a3b3c;\\r\\n  --myWhite: #e4e6eb;\\r\\n  --myLightGrey: #b0b3b8;\\r\\n  --myGreen: #27ae60;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: var(--myBlack);\\r\\n  color: var(--myWhite);\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  color: var(--myWhite);\\r\\n}\\r\\n\\r\\n/* -----------------------------SCROLL-BAR--------------------------------- */\\r\\n/* width */\\r\\n::-webkit-scrollbar {\\r\\n  width: 10px;\\r\\n}\\r\\n\\r\\n/* Handle */\\r\\n::-webkit-scrollbar-thumb {\\r\\n  background: var(--myGrey);\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n/* ------------NAVBAR--------------------------- */\\r\\n\\r\\n.navbar {\\r\\n  background-color: var(--myLightBlack);\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 1em;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n.brand,\\r\\n.nav-links {\\r\\n  cursor: pointer;\\r\\n  transition: 0.3s;\\r\\n}\\r\\n\\r\\n.brand-span {\\r\\n  transition: 0.3s;\\r\\n  color: var(--myGreen);\\r\\n}\\r\\n\\r\\n.brand:hover {\\r\\n  color: var(--myGreen);\\r\\n}\\r\\n\\r\\n.brand:hover .brand-span {\\r\\n  color: var(--myWhite);\\r\\n}\\r\\n\\r\\n.nav-span {\\r\\n  color: var(--myGreen);\\r\\n  transition: 0.3s;\\r\\n}\\r\\n\\r\\n.nav-link-item {\\r\\n  transition: 0.3s;\\r\\n  color: var(--myWhite);\\r\\n}\\r\\n\\r\\n.nav-link-item:hover {\\r\\n  color: var(--myGreen);\\r\\n}\\r\\n\\r\\n.nav-link-item:hover > .nav-span {\\r\\n  color: var(--myWhite);\\r\\n}\\r\\n\\r\\n/* --------------------------APP-CONTENT----------------------------- */\\r\\n\\r\\n.app-content {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 3fr;\\r\\n  justify-content: space-between;\\r\\n  padding: 3em 3em 10em 3em;\\r\\n  max-width: 85%;\\r\\n  grid-column-gap: 3em;\\r\\n}\\r\\n\\r\\n.todo-sub-section,\\r\\n.project-sub-section {\\r\\n  padding: 2em;\\r\\n}\\r\\n\\r\\n.todo-heading,\\r\\n.project-heading {\\r\\n  font-size: 1.7rem;\\r\\n  padding-bottom: 0.7em;\\r\\n  border-bottom: 1px solid rgb(107, 106, 106);\\r\\n  border-width: thin;\\r\\n}\\r\\n\\r\\n.todo-heading-date {\\r\\n  font-size: 0.7rem;\\r\\n  font-weight: lighter;\\r\\n  color: var(--myLightGrey);\\r\\n}\\r\\n\\r\\n/* -----------------------------------PROJECT-SECTION--------------------------------------- */\\r\\n.project-section,\\r\\n.todo-section {\\r\\n  background-color: var(--myLightBlack);\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.project-section {\\r\\n  max-height: 500px;\\r\\n}\\r\\n.project-sub-section {\\r\\n  padding: 2em 1em;\\r\\n}\\r\\n\\r\\n.project-name {\\r\\n  padding: 0.5em 0;\\r\\n  transition: 0.2s;\\r\\n  cursor: pointer;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.project-name:nth-child(2n + 3) > span {\\r\\n  color: var(--myGreen);\\r\\n}\\r\\n\\r\\n.project-name-btn {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.project-name:hover .project-name-btn {\\r\\n  display: inline;\\r\\n}\\r\\n\\r\\n.project-name-btn:hover {\\r\\n  background-color: rgba(110, 110, 110, 0.384);\\r\\n  padding: 0.2em;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.project-list {\\r\\n  padding: 2em 0 1em 0;\\r\\n}\\r\\n\\r\\n.new-project-btn{\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.new-project-btn,\\r\\n.project-name-btn,                                /*Icons*/\\r\\n.modal-cross-icon,\\r\\n.edit-modal-cross-icon {\\r\\n  opacity: 0.5;\\r\\n  transition: 0.2s;\\r\\n  cursor: pointer;\\r\\n  float: right;\\r\\n}\\r\\n\\r\\n.new-project-btn:hover {\\r\\n  opacity: 1;\\r\\n}\\r\\n\\r\\n/* -----------------------------------------TODO-SECTION--------------------------- */\\r\\n.todo-list {\\r\\n  padding: 2em;\\r\\n}\\r\\n\\r\\n.todo-item {\\r\\n  padding: 1.5em 0 0.9em 0;\\r\\n  border-bottom: 1px solid rgb(107, 106, 106);\\r\\n  border-width: thin;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n.todo-list:first-child {\\r\\n  padding-top: 0;\\r\\n}\\r\\n\\r\\n.todo-title {\\r\\n  font-size: 1rem;\\r\\n  padding-bottom: 0.2em;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\ninput[type=\\\"checkbox\\\"] {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.todo-label {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.todo-label::before {\\r\\n  content: \\\"\\\";\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-position: center;\\r\\n  background-size: contain;\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n  position: absolute;\\r\\n  left: -25px;\\r\\n  transform: scale(0) rotateZ(180deg);\\r\\n  transition: all 0.3s cubic-bezier(0.54, 0.01, 0, 1.49);\\r\\n}\\r\\n\\r\\n.todo-label::after {\\r\\n  content: \\\"\\\";\\r\\n  border: 2px solid #27ae60;\\r\\n  width: 14px;\\r\\n  height: 14px;\\r\\n  position: absolute;\\r\\n  left: -24px;\\r\\n  border-radius: 50%;\\r\\n}\\r\\n\\r\\ninput[type=\\\"checkbox\\\"]:checked + .todo-label::before {\\r\\n  transform: scale(1) rotateZ(0deg);\\r\\n}\\r\\n\\r\\n.todo-desc {\\r\\n  font-size: 0.8rem;\\r\\n  font-weight: lighter;\\r\\n  color: var(--myLightGrey);\\r\\n}\\r\\n\\r\\n.todo-icon-item {\\r\\n  /* display: none; */\\r\\n  padding: 0 0.3em;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.todo-item:hover .todo-icon-item {\\r\\n  display: inline;\\r\\n}\\r\\n\\r\\n.todo-icon-item:hover {\\r\\n  background-color: rgba(110, 110, 110, 0.384);\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.new-todo-btn,.modal-todo-btn>button,.edit-modal-todo-btn > button{\\r\\n  background-color: var(--myGreen);\\r\\n  color: var(--myWhite);\\r\\n  font-size: 1rem;\\r\\n  padding: 0.5em;\\r\\n  text-align: center;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  border-radius: 5px;\\r\\n  opacity: 1;\\r\\n  cursor: pointer;\\r\\n  transition: 0.2s;\\r\\n  border: 1px solid var(--myLightBlack);\\r\\n}\\r\\n\\r\\n.new-todo-btn:hover,.modal-todo-btn>button:hover,.edit-modal-todo-btn > button:hover {\\r\\n  background-color: var(--myLightBlack);\\r\\n  border: 1px solid var(--myGreen);\\r\\n  color: var(--myGreen);\\r\\n}\\r\\n\\r\\n/* -------------------------------------FOOTER-------------------------- */\\r\\n\\r\\n.footer {\\r\\n  position: sticky;\\r\\n  padding: 1.3em;\\r\\n  top: 100%;\\r\\n  background-color: var(--myLightBlack);\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n/* -------------------------ADD NEW TODO MODAL----------------------------------------- */\\r\\n\\r\\n.modal-content,.edit-modal-content {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  background-color: rgba(0,0,0,0.5);\\r\\n  display: none;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.modal,.edit-modal {\\r\\n  background-color: var(--myGrey);\\r\\n  width: 20%;\\r\\n  height: 50%;\\r\\n  padding: 1em;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.modal-heading,.edit-modal-heading{\\r\\n  border-bottom: 1px solid var(--myWhite);\\r\\n  padding-bottom: 1em;\\r\\n}\\r\\n\\r\\n.modal-todo-info,.edit-modal-todo-info{\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n  flex-direction: column;\\r\\n} \\r\\n\\r\\n.modal-todo-info >label,i,.edit-modal-todo-info >label,i{\\r\\n  padding: 1em 0;\\r\\n}\\r\\n\\r\\n.modal-desc-input,.modal-title-input,.edit-modal-desc-input,.edit-modal-title-input{\\r\\n  padding: .5em;\\r\\n  width: 80%;\\r\\n  background-color: var(--myGrey);\\r\\n  border: 1px solid var(--myGreen);\\r\\n  border-radius: 5px;\\r\\n  outline: none;\\r\\n  color: var(--myWhite);\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n\\r\\n.modal-cross-icon:hover,.edit-cross-icon:hover{\\r\\n  opacity: 1;\\r\\n}\\r\\n\\r\\n.modal-todo-btn > button,.edit-modal-todo-btn > button{\\r\\n  width: 30%;\\r\\n}\\r\\n\\r\\n.modal-date-icon,.edit-modal-date-icon{\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://gtd-to-do/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://gtd-to-do/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://gtd-to-do/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://gtd-to-do/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://gtd-to-do/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://gtd-to-do/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://gtd-to-do/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://gtd-to-do/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://gtd-to-do/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://gtd-to-do/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://gtd-to-do/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_showTodoModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/showTodoModal */ \"./src/modules/showTodoModal.js\");\n/* harmony import */ var _modules_deleteTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/deleteTodo */ \"./src/modules/deleteTodo.js\");\n/* harmony import */ var _modules_ShowEditModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/ShowEditModal */ \"./src/modules/ShowEditModal.js\");\n\r\n\r\n\r\n\r\n\r\nconst todayArray = [\r\n  { title: \"Make Cake\", desc: \"I will make cake on sunday\", id: 0 },\r\n  { title: \"complete project\", desc: \"I will complete the project\", id: 1 },\r\n  { title: \"Read books\", desc: \"Reading the book \", id: 2 },\r\n];\r\n\r\nconst newTodoBtn = document.querySelector(\".new-todo-btn\");\r\nconst projectNameText = document.querySelectorAll(\".project-name-text\");\r\n\r\n// -------------------------------NORMAL FUNCTIONS------------------------------\r\nconst showTodayTodo = () => {\r\n  for (let i = 0; i < todayArray.length; i++) {\r\n    const todoList = document.querySelector(\".todo-list\");\r\n    todoList.innerHTML += ` <div class=\"todo-item\">\r\n        <div class=\"todo-info\">\r\n          <div class=\"todo-title\">\r\n            <input class=\"todo-checkbox\" type=\"checkbox\" id=${todayArray[i].id} />\r\n            <label class=\"todo-label\" for=${todayArray[i].id}> ${todayArray[i].title}</label>\r\n          </div>\r\n          <div class=\"todo-desc\">${todayArray[i].desc}</div>\r\n        </div>\r\n        <div class=\"todo-icons\">\r\n          <i class=\"bi bi-pencil todo-icon-item\"></i>\r\n          <i class=\"bi bi-calendar-check todo-icon-item\"></i>\r\n          <i class=\"bi bi-trash todo-icon-item\"></i>\r\n        </div>\r\n      </div>`;\r\n  }\r\n  \r\n  const deleteTodoIcon = document.querySelectorAll(\".todo-icons > .bi-trash\");\r\n  const editTodoIcon = document.querySelectorAll(\".todo-icons > .bi-pencil\");\r\n  (0,_modules_deleteTodo__WEBPACK_IMPORTED_MODULE_2__.deleteTodo)(deleteTodoIcon, todayArray);\r\n  (0,_modules_ShowEditModal__WEBPACK_IMPORTED_MODULE_3__.showEditModal)(editTodoIcon, todayArray);\r\n};\r\nshowTodayTodo();\r\n\r\n// ---------------------HANDLER FUNCTIONS---------------------------------\r\n\r\nconst handleProjectName = (e) => {\r\n  console.log(`${e.target.innerText}Array`);\r\n};\r\n\r\nconst handleMakeTodo = () => {\r\n  (0,_modules_showTodoModal__WEBPACK_IMPORTED_MODULE_1__.showTodoModal)(todayArray);\r\n};\r\n\r\n// --------------------------------EVENT LISTENERS----------------------------------\r\n\r\nnewTodoBtn.addEventListener(\"click\", handleMakeTodo);\r\nprojectNameText.forEach((item) => {\r\n  item.addEventListener(\"click\", handleProjectName);\r\n});\r\n\n\n//# sourceURL=webpack://gtd-to-do/./src/index.js?");

/***/ }),

/***/ "./src/modules/MakeTodo.js":
/*!*********************************!*\
  !*** ./src/modules/MakeTodo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeTodo\": () => (/* binding */ makeTodo)\n/* harmony export */ });\nclass makeTodo {\r\n  static myId = 0;\r\n  constructor(title, desc = \"\") {\r\n    makeTodo.myId += 1;\r\n    this.title = title;\r\n    this.desc = desc;\r\n    this.id = makeTodo.myId;\r\n  }\r\n\r\n  static makeTodo = 0\r\n\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://gtd-to-do/./src/modules/MakeTodo.js?");

/***/ }),

/***/ "./src/modules/ShowEditModal.js":
/*!**************************************!*\
  !*** ./src/modules/ShowEditModal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showEditModal\": () => (/* binding */ showEditModal)\n/* harmony export */ });\nfunction showEditModal(editTodoIcon, arr) {\r\n  const editModal = document.querySelector(\".edit-modal-content\");\r\n  const editModalTitleInput = document.querySelector(\".edit-modal-title-input\");\r\n  const editModalDescInput = document.querySelector(\".edit-modal-desc-input\");\r\n  const editTodoBtn = document.querySelector(\".edit-modal-todo-btn > button\");\r\n  const editModalCrossIcon = document.querySelector(\".edit-modal-cross-icon\");\r\n  const titleLabel = document.querySelectorAll(\".todo-label\");\r\n  const descLabel = document.querySelectorAll(\".todo-desc\");\r\n\r\n  const handleEditIcon = (e) => {\r\n    editModal.style.display = \"flex\";\r\n    let elementId =\r\n      e.target.parentNode.previousElementSibling.children[0].children[0].getAttribute(\r\n        \"id\"\r\n      );\r\n    editModalTitleInput.value = arr[elementId].title;\r\n    editModalDescInput.value = arr[elementId].desc;\r\n\r\n\r\n    const handleEditTodo = () => {\r\n      editModal.style.display = \"none\";\r\n      arr[elementId].title = editModalTitleInput.value;\r\n      arr[elementId].desc = editModalDescInput.value;\r\n      titleLabel[elementId].textContent = editModalTitleInput.value;\r\n      descLabel[elementId].textContent = editModalDescInput.value;\r\n      editTodoBtn.removeEventListener(\"click\", handleEditTodo);\r\n      console.log(arr);\r\n    };\r\n    editTodoBtn.addEventListener(\"click\", handleEditTodo);\r\n    const handleCrossIcon = () => {\r\n      editModal.style.display = \"none\";\r\n      editTodoBtn.removeEventListener(\"click\", handleEditTodo);\r\n    };\r\n\r\n    editModalCrossIcon.addEventListener(\"click\", handleCrossIcon);\r\n  };\r\n\r\n  editTodoIcon.forEach((icon) => {\r\n    icon.addEventListener(\"click\", handleEditIcon);\r\n  });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://gtd-to-do/./src/modules/ShowEditModal.js?");

/***/ }),

/***/ "./src/modules/deleteTodo.js":
/*!***********************************!*\
  !*** ./src/modules/deleteTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteTodo\": () => (/* binding */ deleteTodo)\n/* harmony export */ });\nfunction deleteTodo(deleteTodoIcon,arr) {\r\n  const handleDeleteIcon = (e) => {\r\n    let elementId =\r\n      e.target.parentNode.previousElementSibling.children[0].children[0].getAttribute(\r\n        \"id\"\r\n      ); //gives id of clicked todo\r\n\r\n      arr.splice(elementId)\r\n      e.target.parentNode.previousElementSibling.parentNode.remove()\r\n  };\r\n\r\n\r\n  deleteTodoIcon.forEach((item) => {\r\n    item.addEventListener(\"click\", handleDeleteIcon);\r\n  });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://gtd-to-do/./src/modules/deleteTodo.js?");

/***/ }),

/***/ "./src/modules/insertNewTodo.js":
/*!**************************************!*\
  !*** ./src/modules/insertNewTodo.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"insertNewTodo\": () => (/* binding */ insertNewTodo)\n/* harmony export */ });\n/* harmony import */ var _deleteTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteTodo */ \"./src/modules/deleteTodo.js\");\n/* harmony import */ var _ShowEditModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowEditModal */ \"./src/modules/ShowEditModal.js\");\n\r\n\r\nfunction insertNewTodo(arr) {\r\n  const todoList = document.querySelector(\".todo-list\");\r\n  const el = arr[arr.length - 1];\r\n  todoList.innerHTML += ` <div class=\"todo-item\">\r\n      <div class=\"todo-info\">\r\n        <div class=\"todo-title\">\r\n          <input class=\"todo-checkbox\" type=\"checkbox\" id=${arr.length - 1} />\r\n          <label class=\"todo-label\" for=${arr.length - 1}> ${el.title}</label>\r\n        </div>\r\n        <div class=\"todo-desc\">${el.desc}</div>\r\n      </div>\r\n      <div class=\"todo-icons\">\r\n        <i class=\"bi bi-pencil todo-icon-item\"></i>\r\n        <i class=\"bi bi-calendar-check todo-icon-item\"></i>\r\n        <i class=\"bi bi-trash todo-icon-item\"></i>\r\n      </div>\r\n    </div>`;\r\n\r\n  const deleteTodoIcon = document.querySelectorAll(\".todo-icons > .bi-trash\");\r\n  const editTodoIcon = document.querySelectorAll(\".todo-icons > .bi-pencil\");\r\n  (0,_deleteTodo__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)(deleteTodoIcon, arr);\r\n  (0,_ShowEditModal__WEBPACK_IMPORTED_MODULE_1__.showEditModal)(editTodoIcon, arr);\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://gtd-to-do/./src/modules/insertNewTodo.js?");

/***/ }),

/***/ "./src/modules/showTodoModal.js":
/*!**************************************!*\
  !*** ./src/modules/showTodoModal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showTodoModal\": () => (/* binding */ showTodoModal)\n/* harmony export */ });\n/* harmony import */ var _MakeTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MakeTodo */ \"./src/modules/MakeTodo.js\");\n/* harmony import */ var _insertNewTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insertNewTodo */ \"./src/modules/insertNewTodo.js\");\n\r\n\r\nfunction showTodoModal(arr) {\r\n  const modalContent = document.querySelector(\".modal-content\");\r\n  const modalTitleInput = document.querySelector(\".modal-title-input\");\r\n  const modalDescInput = document.querySelector(\".modal-desc-input\");\r\n  const modalAddTodoBtn = document.querySelector(\".modal-todo-btn > button\");\r\n  const modalCrossIcon = document.querySelector(\".modal-cross-icon\");\r\n  modalContent.style.display = \"flex\";\r\n\r\n  const handleAddTodo = () => {\r\n    let newTodo = new _MakeTodo__WEBPACK_IMPORTED_MODULE_0__.makeTodo(modalTitleInput.value, modalDescInput.value);\r\n    arr.push(newTodo);\r\n    (0,_insertNewTodo__WEBPACK_IMPORTED_MODULE_1__.insertNewTodo)(arr);\r\n    modalTitleInput.value = \"\";\r\n    modalDescInput.value = \"\";\r\n  };\r\n\r\n  const handleCrossIcon = () => {\r\n    modalContent.style.display = \"none\";\r\n    modalAddTodoBtn.removeEventListener(\"click\", handleAddTodo);\r\n  };\r\n\r\n  modalAddTodoBtn.addEventListener(\"click\", handleAddTodo);\r\n  modalCrossIcon.addEventListener(\"click\", handleCrossIcon);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://gtd-to-do/./src/modules/showTodoModal.js?");

/***/ }),

/***/ "./src/img/check-circle.svg":
/*!**********************************!*\
  !*** ./src/img/check-circle.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"943261aeb00e109c8976.svg\";\n\n//# sourceURL=webpack://gtd-to-do/./src/img/check-circle.svg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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