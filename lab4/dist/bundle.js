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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nhtml, body {\\n  height: 100%;\\n  font-family: \\\"Courier New\\\", Courier, monospace;\\n  background-color: lightslategray;\\n}\\n\\nheader {\\n  background-color: dodgerblue;\\n}\\nheader h1 {\\n  text-align: center;\\n  padding: 20px;\\n}\\nheader nav {\\n  height: 100%;\\n  padding: 2%;\\n}\\nheader nav ul {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  list-style: none;\\n}\\nheader nav ul li {\\n  padding: 0 2%;\\n}\\nheader nav ul button {\\n  min-width: 200px;\\n  padding: 5% 0;\\n  border-radius: 10px;\\n  border: 3px solid gray;\\n  color: white;\\n  font-weight: bold;\\n  letter-spacing: 1px;\\n  background-color: dodgerblue;\\n  font-family: \\\"Gill Sans\\\", \\\"Gill Sans MT\\\", Calibri, \\\"Trebuchet MS\\\", sans-serif;\\n  box-shadow: inset 0 0 1em white, 0 0 1em gray;\\n}\\nheader nav ul button:hover {\\n  cursor: pointer;\\n}\\n\\nsection {\\n  padding: 2%;\\n}\\n\\n#gameContainer {\\n  height: 100%;\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n#changeColors {\\n  border-radius: 10px;\\n  position: absolute;\\n  top: 10px;\\n  right: 10px;\\n  width: 50px;\\n  height: 30px;\\n  box-shadow: inset 0 0 1em white, 0 0 1em gray;\\n  font-family: monospace;\\n  font-size: 12px;\\n  font-weight: bold;\\n}\\n\\n#changeColors:hover {\\n  cursor: pointer;\\n  background-color: hotpink;\\n  color: white;\\n}\\n\\nfooter {\\n  background-color: black;\\n  position: fixed;\\n  left: 0;\\n  bottom: 0;\\n  width: 100%;\\n  text-align: center;\\n  padding: 2%;\\n}\\nfooter p {\\n  color: white;\\n}\\nfooter a {\\n  text-decoration: none;\\n  color: dodgerblue;\\n  font-weight: bold;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack:///./src/styles/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/Battleship.ts":
/*!***************************!*\
  !*** ./src/Battleship.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Battleship = void 0;\r\nvar Battleship = /** @class */ (function () {\r\n    function Battleship() {\r\n        this.gameContainer = this.getGameElement();\r\n        this.clearGameElement();\r\n        this.createGame();\r\n    }\r\n    Battleship.prototype.getGameElement = function () {\r\n        var Div = document.getElementById('gameContainer');\r\n        return Div;\r\n    };\r\n    Battleship.prototype.clearGameElement = function () {\r\n        for (var i = this.gameContainer.children.length - 1; i >= 0; i--) {\r\n            this.gameContainer.removeChild(this.gameContainer.lastChild);\r\n        }\r\n    };\r\n    Battleship.prototype.createGame = function () {\r\n        var p = document.createElement('p');\r\n        p.innerHTML = \"Battleships!\";\r\n        this.gameContainer.appendChild(p);\r\n    };\r\n    return Battleship;\r\n}());\r\nexports.Battleship = Battleship;\r\n\n\n//# sourceURL=webpack:///./src/Battleship.ts?");

/***/ }),

/***/ "./src/GameFactory.ts":
/*!****************************!*\
  !*** ./src/GameFactory.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.GameFactory = void 0;\r\nvar Battleship_1 = __webpack_require__(/*! ./Battleship */ \"./src/Battleship.ts\");\r\nvar GuessNumber_1 = __webpack_require__(/*! ./GuessNumber */ \"./src/GuessNumber.ts\");\r\nvar TicTacToe_1 = __webpack_require__(/*! ./TicTacToe */ \"./src/TicTacToe.ts\");\r\nvar GameFactory = /** @class */ (function () {\r\n    function GameFactory() {\r\n    }\r\n    GameFactory.prototype.createGame = function (name) {\r\n        switch (name) {\r\n            case \"TicTacToe\":\r\n                return new TicTacToe_1.TicTacToe();\r\n            case \"Battleship\":\r\n                return new Battleship_1.Battleship;\r\n            case \"GuessNumber\":\r\n                return new GuessNumber_1.GuessNumber();\r\n            default:\r\n                throw new Error();\r\n        }\r\n    };\r\n    return GameFactory;\r\n}());\r\nexports.GameFactory = GameFactory;\r\n\n\n//# sourceURL=webpack:///./src/GameFactory.ts?");

/***/ }),

/***/ "./src/Games.ts":
/*!**********************!*\
  !*** ./src/Games.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Games = void 0;\r\nvar Games;\r\n(function (Games) {\r\n    Games[\"TicTacToe\"] = \"TicTacToe\";\r\n    Games[\"Battleship\"] = \"Battleship\";\r\n    Games[\"GuessNumber\"] = \"GuessNumber\";\r\n})(Games = exports.Games || (exports.Games = {}));\r\n\n\n//# sourceURL=webpack:///./src/Games.ts?");

/***/ }),

/***/ "./src/GuessNumber.ts":
/*!****************************!*\
  !*** ./src/GuessNumber.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.GuessNumber = void 0;\r\nvar GuessNumber = /** @class */ (function () {\r\n    function GuessNumber() {\r\n        this.gameContainer = this.getGameElement();\r\n        this.clearGameElement();\r\n        this.createGame();\r\n    }\r\n    GuessNumber.prototype.getGameElement = function () {\r\n        var Div = document.getElementById('gameContainer');\r\n        return Div;\r\n    };\r\n    GuessNumber.prototype.clearGameElement = function () {\r\n        for (var i = this.gameContainer.children.length - 1; i >= 0; i--) {\r\n            this.gameContainer.removeChild(this.gameContainer.lastChild);\r\n        }\r\n    };\r\n    GuessNumber.prototype.createGame = function () {\r\n        var NumerToGuess = Math.floor(Math.random() * 100);\r\n        console.log(NumerToGuess);\r\n        var TitleMessage = document.createElement('h1');\r\n        var AnswerInput = document.createElement('input');\r\n        var ButtonCheck = document.createElement('button');\r\n        var answerInfo = document.createElement('p');\r\n        TitleMessage.innerHTML = \"Guess number from 0 to 100.\";\r\n        AnswerInput.setAttribute('type', 'number');\r\n        ButtonCheck.innerHTML = \"Check\";\r\n        ButtonCheck.style.padding = \"20px\";\r\n        ButtonCheck.style.margin = \"10px\";\r\n        ButtonCheck.addEventListener('click', function () {\r\n            AnswerInput.value.toString() == NumerToGuess.toString() ?\r\n                answerInfo.innerHTML = \"Congratulations! You were looking for the number \" + NumerToGuess + \".\" :\r\n                answerInfo.innerHTML = \"Wrong number, keep going!\";\r\n        });\r\n        this.gameContainer.appendChild(TitleMessage);\r\n        this.gameContainer.appendChild(AnswerInput);\r\n        this.gameContainer.appendChild(ButtonCheck);\r\n        this.gameContainer.appendChild(answerInfo);\r\n    };\r\n    return GuessNumber;\r\n}());\r\nexports.GuessNumber = GuessNumber;\r\n\n\n//# sourceURL=webpack:///./src/GuessNumber.ts?");

/***/ }),

/***/ "./src/TicTacToe.ts":
/*!**************************!*\
  !*** ./src/TicTacToe.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.TicTacToe = void 0;\r\nvar Board_1 = __webpack_require__(/*! ./tictactoe/Board */ \"./src/tictactoe/Board.ts\");\r\nvar TicTacToe = /** @class */ (function () {\r\n    function TicTacToe() {\r\n        this.gameContainer = this.getGameElement();\r\n        this.clearGameElement();\r\n        this.createGame();\r\n    }\r\n    TicTacToe.prototype.getGameElement = function () {\r\n        var Div = document.getElementById('gameContainer');\r\n        return Div;\r\n    };\r\n    TicTacToe.prototype.clearGameElement = function () {\r\n        for (var i = this.gameContainer.children.length - 1; i >= 0; i--) {\r\n            this.gameContainer.removeChild(this.gameContainer.lastChild);\r\n        }\r\n    };\r\n    TicTacToe.prototype.createGame = function () {\r\n        var board = new Board_1.Board();\r\n    };\r\n    return TicTacToe;\r\n}());\r\nexports.TicTacToe = TicTacToe;\r\n\n\n//# sourceURL=webpack:///./src/TicTacToe.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\n// TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum\r\n// zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą\r\n// samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer.\r\n// Aby wyświetlić menu należy napisać pętlę, któta przeiteruje po wszystkich wartościach enum'a\r\nvar _a;\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Games_1 = __webpack_require__(/*! ./Games */ \"./src/Games.ts\");\r\nvar GameFactory_1 = __webpack_require__(/*! ./GameFactory */ \"./src/GameFactory.ts\");\r\n__webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\r\nvar Factory = new GameFactory_1.GameFactory();\r\nvar GameListElement = document.getElementById('gameList');\r\nvar ChangeStyle = (_a = document.getElementById('changeColors')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { return alert(\"XD\"); });\r\nvar _loop_1 = function (game) {\r\n    var gameOnList = document.createElement('li');\r\n    var gameButton = document.createElement('button');\r\n    gameOnList.appendChild(gameButton);\r\n    gameButton.innerHTML = \"\" + game;\r\n    gameButton.addEventListener('click', function () { return Factory.createGame(game); });\r\n    GameListElement === null || GameListElement === void 0 ? void 0 : GameListElement.appendChild(gameOnList);\r\n};\r\nfor (var game in Games_1.Games) {\r\n    _loop_1(game);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/tictactoe/Board.ts":
/*!********************************!*\
  !*** ./src/tictactoe/Board.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Board = void 0;\r\nvar Square_1 = __webpack_require__(/*! ./Square */ \"./src/tictactoe/Square.ts\");\r\nvar Symbol_1 = __webpack_require__(/*! ./Symbol */ \"./src/tictactoe/Symbol.ts\");\r\nvar PlayerColor_1 = __webpack_require__(/*! ./PlayerColor */ \"./src/tictactoe/PlayerColor.ts\");\r\nvar Board = /** @class */ (function () {\r\n    function Board() {\r\n        var _this = this;\r\n        this.fieldCount = 3;\r\n        this.winLength = 3;\r\n        this.counter = 0;\r\n        this.board = document.getElementById('gameContainer');\r\n        this.board.addEventListener('click', function () { _this.counter++; });\r\n        this.gameBoard = document.createElement('div');\r\n        this.gameBoard.style.width = \"300px\";\r\n        this.gameBoard.style.height = \"300px\";\r\n        this.gameBoard.style.position = \"relative\";\r\n        this.gameBoard.style.margin = \"auto\";\r\n        this.gameBoard.style.display = \"flex\";\r\n        this.gameBoard.style.flexWrap = \"wrap\";\r\n        this.gameBoard.style.border = \"2px solid black\";\r\n        this.boardCoords = [];\r\n        this.board.appendChild(this.gameBoard);\r\n        this.createBoard();\r\n    }\r\n    Board.prototype.createBoard = function () {\r\n        var _this = this;\r\n        while (this.gameBoard.hasChildNodes()) {\r\n            this.board.removeChild(this.board.lastChild);\r\n        }\r\n        var boardX = this.gameBoard.clientWidth;\r\n        var boardY = this.gameBoard.clientHeight;\r\n        for (var i = 0; i < this.fieldCount; i++) {\r\n            this.boardCoords[i] = [];\r\n        }\r\n        var _loop_1 = function (i) {\r\n            var square = new Square_1.Square(i % this_1.fieldCount, Math.floor(i / this_1.fieldCount));\r\n            square.field.style.width = (boardX / this_1.fieldCount) + \"px\";\r\n            square.field.style.height = (boardY / this_1.fieldCount) + \"px\";\r\n            square.field.style.boxShadow = \"0px 0px 0px 1px lightgray inset\";\r\n            this_1.gameBoard.appendChild(square.field);\r\n            square.field.addEventListener('click', function () {\r\n                square.fillField(_this.setSymbol(), _this.setColor());\r\n                _this.boardCoords[square.y][square.x] = square.value;\r\n            });\r\n            this_1.saveToBoardCoords(square);\r\n            square.field.addEventListener('click', function () { return _this.checkWin(square, _this.fieldCount); });\r\n            square.field.addEventListener('click', function () { return _this.checkDraw(); });\r\n        };\r\n        var this_1 = this;\r\n        for (var i = 0; i < this.fieldCount * this.fieldCount; i++) {\r\n            _loop_1(i);\r\n        }\r\n    };\r\n    Board.prototype.saveToBoardCoords = function (field) {\r\n        this.boardCoords[field.y][field.x] = field.value;\r\n    };\r\n    Board.prototype.checkWin = function (field, boardLength) {\r\n        var _this = this;\r\n        var Up = function () {\r\n            var CheckingValue = field.value;\r\n            var win = \"\";\r\n            var actual = \"\";\r\n            for (var i = 0; i < _this.winLength; i++)\r\n                win += CheckingValue;\r\n            for (var i = 0; i < _this.winLength; i++) {\r\n                if (field.y - i < 0)\r\n                    break;\r\n                else\r\n                    actual += _this.boardCoords[field.y - i][field.x];\r\n                if (actual == win)\r\n                    _this.endGame(CheckingValue);\r\n            }\r\n        };\r\n        var Down = function () {\r\n            var CheckingValue = field.value;\r\n            var win = \"\";\r\n            var actual = \"\";\r\n            for (var i = 0; i < _this.winLength; i++)\r\n                win += CheckingValue;\r\n            for (var i = 0; i < _this.winLength; i++) {\r\n                if (field.y + i > boardLength - 1)\r\n                    break;\r\n                else\r\n                    actual += _this.boardCoords[field.y + i][field.x];\r\n                if (actual == win)\r\n                    _this.endGame(CheckingValue);\r\n            }\r\n        };\r\n        var Left = function () {\r\n            var CheckingValue = field.value;\r\n            var win = \"\";\r\n            var actual = \"\";\r\n            for (var i = 0; i < _this.winLength; i++)\r\n                win += CheckingValue;\r\n            for (var i = 0; i < _this.winLength; i++) {\r\n                actual += _this.boardCoords[field.y][field.x - i];\r\n                if (actual == win)\r\n                    _this.endGame(CheckingValue);\r\n            }\r\n        };\r\n        var Right = function () {\r\n            var CheckingValue = field.value;\r\n            var win = \"\";\r\n            var actual = \"\";\r\n            for (var i = 0; i < _this.winLength; i++)\r\n                win += CheckingValue;\r\n            for (var i = 0; i < _this.winLength; i++) {\r\n                actual += _this.boardCoords[field.y][field.x + i];\r\n                if (actual == win)\r\n                    _this.endGame(CheckingValue);\r\n            }\r\n        };\r\n        var LeftUp = function () {\r\n            var CheckingValue = field.value;\r\n            var win = \"\";\r\n            var actual = \"\";\r\n            for (var i = 0; i < _this.winLength; i++)\r\n                win += CheckingValue;\r\n            for (var i = 0; i < _this.winLength; i++) {\r\n                if (field.y + i > boardLength - 1)\r\n                    break;\r\n                actual += _this.boardCoords[field.y + i][field.x + i];\r\n                if (actual == win)\r\n                    _this.endGame(CheckingValue);\r\n            }\r\n        };\r\n        var LeftDown = function () {\r\n            var CheckingValue = field.value;\r\n            var win = \"\";\r\n            var actual = \"\";\r\n            for (var i = 0; i < _this.winLength; i++)\r\n                win += CheckingValue;\r\n            for (var i = 0; i < _this.winLength; i++) {\r\n                if (field.y - i < 0)\r\n                    break;\r\n                actual += _this.boardCoords[field.y - i][field.x + i];\r\n                if (actual == win)\r\n                    _this.endGame(CheckingValue);\r\n            }\r\n        };\r\n        var RightUp = function () {\r\n            var CheckingValue = field.value;\r\n            var win = \"\";\r\n            var actual = \"\";\r\n            for (var i = 0; i < _this.winLength; i++)\r\n                win += CheckingValue;\r\n            for (var i = 0; i < _this.winLength; i++) {\r\n                if (field.y + i > boardLength - 1)\r\n                    break;\r\n                actual += _this.boardCoords[field.y + i][field.x - i];\r\n                if (actual == win)\r\n                    _this.endGame(CheckingValue);\r\n            }\r\n        };\r\n        var RightDown = function () {\r\n            var CheckingValue = field.value;\r\n            var win = \"\";\r\n            var actual = \"\";\r\n            for (var i = 0; i < _this.winLength; i++)\r\n                win += CheckingValue;\r\n            for (var i = 0; i < _this.winLength; i++) {\r\n                if (field.y + i < 0)\r\n                    break;\r\n                actual += _this.boardCoords[field.y - i][field.x - i];\r\n                if (actual == win)\r\n                    _this.endGame(CheckingValue);\r\n            }\r\n        };\r\n        Up();\r\n        Down();\r\n        Left();\r\n        Right();\r\n        LeftUp();\r\n        RightUp();\r\n        LeftDown();\r\n        RightDown();\r\n    };\r\n    Board.prototype.endGame = function (winner) {\r\n        alert(\"The \" + winner + \" wins!\");\r\n    };\r\n    Board.prototype.checkDraw = function () {\r\n        var isEnd = true;\r\n        for (var i = 0; i < this.boardCoords.length; i++) {\r\n            for (var j = 0; j < this.boardCoords[i].length; j++) {\r\n                if (this.boardCoords[i][j] == \"-\")\r\n                    isEnd = false;\r\n            }\r\n        }\r\n        if (isEnd)\r\n            this.endGame(\"\");\r\n    };\r\n    Board.prototype.setSymbol = function () {\r\n        if (this.counter % 2 == 0)\r\n            return Symbol_1.Symbol.player1;\r\n        else\r\n            return Symbol_1.Symbol.player2;\r\n    };\r\n    Board.prototype.setColor = function () {\r\n        if (this.counter % 2 == 0)\r\n            return PlayerColor_1.PlayerColor.player1;\r\n        else\r\n            return PlayerColor_1.PlayerColor.player2;\r\n    };\r\n    return Board;\r\n}());\r\nexports.Board = Board;\r\n\n\n//# sourceURL=webpack:///./src/tictactoe/Board.ts?");

/***/ }),

/***/ "./src/tictactoe/PlayerColor.ts":
/*!**************************************!*\
  !*** ./src/tictactoe/PlayerColor.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.PlayerColor = void 0;\r\nvar PlayerColor;\r\n(function (PlayerColor) {\r\n    PlayerColor[\"player1\"] = \"red\";\r\n    PlayerColor[\"player2\"] = \"blue\";\r\n})(PlayerColor = exports.PlayerColor || (exports.PlayerColor = {}));\r\n\n\n//# sourceURL=webpack:///./src/tictactoe/PlayerColor.ts?");

/***/ }),

/***/ "./src/tictactoe/Square.ts":
/*!*********************************!*\
  !*** ./src/tictactoe/Square.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Square = void 0;\r\nvar Square = /** @class */ (function () {\r\n    function Square(x, y) {\r\n        this.isChecked = false;\r\n        this.x = x;\r\n        this.y = y;\r\n        this.value = '-';\r\n        this.field = document.createElement('div');\r\n        this.field.style.display = \"flex\";\r\n        this.field.style.justifyContent = \"center\";\r\n        this.field.style.alignItems = \"center\";\r\n        this.field.style.backgroundColor = \"white\";\r\n        this.mark = document.createElement('p');\r\n        this.mark.style.fontSize = \"20px\";\r\n        this.mark.style.fontWeight = \"bold\";\r\n        this.field.appendChild(this.mark);\r\n    }\r\n    Square.prototype.fillField = function (symbol, color) {\r\n        if (!this.isChecked) {\r\n            this.mark.innerHTML = \"\" + symbol;\r\n            this.value = \"\" + symbol;\r\n            this.isChecked = true;\r\n            this.field.style.fontSize = \"bold\";\r\n            this.field.style.color = \"\" + color;\r\n        }\r\n    };\r\n    return Square;\r\n}());\r\nexports.Square = Square;\r\n\n\n//# sourceURL=webpack:///./src/tictactoe/Square.ts?");

/***/ }),

/***/ "./src/tictactoe/Symbol.ts":
/*!*********************************!*\
  !*** ./src/tictactoe/Symbol.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Symbol = void 0;\r\nvar Symbol;\r\n(function (Symbol) {\r\n    Symbol[\"player1\"] = \"X\";\r\n    Symbol[\"player2\"] = \"O\";\r\n})(Symbol = exports.Symbol || (exports.Symbol = {}));\r\n\n\n//# sourceURL=webpack:///./src/tictactoe/Symbol.ts?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;