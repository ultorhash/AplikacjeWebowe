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
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.TicTacToe = void 0;\r\nvar TicTacToe = /** @class */ (function () {\r\n    function TicTacToe() {\r\n        this.gameContainer = this.getGameElement();\r\n        this.clearGameElement();\r\n        this.createGame();\r\n    }\r\n    TicTacToe.prototype.getGameElement = function () {\r\n        var Div = document.getElementById('gameContainer');\r\n        return Div;\r\n    };\r\n    TicTacToe.prototype.clearGameElement = function () {\r\n        for (var i = this.gameContainer.children.length - 1; i >= 0; i--) {\r\n            this.gameContainer.removeChild(this.gameContainer.lastChild);\r\n        }\r\n    };\r\n    TicTacToe.prototype.createGame = function () {\r\n        var p = document.createElement('p');\r\n        p.innerHTML = \"Tic tac toe!\";\r\n        this.gameContainer.appendChild(p);\r\n    };\r\n    return TicTacToe;\r\n}());\r\nexports.TicTacToe = TicTacToe;\r\n\n\n//# sourceURL=webpack:///./src/TicTacToe.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\n// TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum\r\n// zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą\r\n// samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer.\r\n// Aby wyświetlić menu należy napisać pętlę, któta przeiteruje po wszystkich wartościach enum'a\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Games_1 = __webpack_require__(/*! ./Games */ \"./src/Games.ts\");\r\nvar GameFactory_1 = __webpack_require__(/*! ./GameFactory */ \"./src/GameFactory.ts\");\r\nvar Factory = new GameFactory_1.GameFactory();\r\nvar GameListElement = document.getElementById('gameList');\r\nvar _loop_1 = function (game) {\r\n    var gameOnList = document.createElement('li');\r\n    var gameButton = document.createElement('button');\r\n    gameOnList.appendChild(gameButton);\r\n    gameButton.innerHTML = \"\" + game;\r\n    gameButton.addEventListener('click', function () { return Factory.createGame(game); });\r\n    GameListElement === null || GameListElement === void 0 ? void 0 : GameListElement.appendChild(gameOnList);\r\n};\r\nfor (var game in Games_1.Games) {\r\n    _loop_1(game);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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