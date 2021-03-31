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

/***/ "./src/Board.ts":
/*!**********************!*\
  !*** ./src/Board.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Board = void 0;\r\nconst Square_1 = __webpack_require__(/*! ./Square */ \"./src/Square.ts\");\r\nconst Symbol_1 = __webpack_require__(/*! ./Symbol */ \"./src/Symbol.ts\");\r\nconst PlayerColor_1 = __webpack_require__(/*! ./PlayerColor */ \"./src/PlayerColor.ts\");\r\nclass Board {\r\n    constructor() {\r\n        this.fieldCount = 3;\r\n        this.winLength = 3;\r\n        this.counter = 0;\r\n        this.board = document.getElementById(\"board\");\r\n        this.playerMove = document.getElementById(\"current__player__move\");\r\n        this.board.addEventListener('click', () => { this.counter++; this.playerMove.innerHTML = this.setSymbol(); });\r\n        this.newGame = document.getElementById(\"play__button\").addEventListener('click', () => this.createBoard());\r\n        this.mainMenu = document.getElementById(\"main__menu\");\r\n        this.gameResult = document.getElementById(\"game__result\");\r\n        this.winner = document.getElementById(\"game__winner\");\r\n        this.timer = document.getElementById(\"return__timer\");\r\n        this.boardCoords = [];\r\n        this.playerMove.innerHTML = `${this.setSymbol()}`;\r\n    }\r\n    createBoard() {\r\n        this.fieldCount = +document.getElementById(\"input__board__length\").value;\r\n        this.winLength = +document.getElementById(\"input__win__length\").value;\r\n        this.mainMenu.style.display = \"none\";\r\n        while (this.board.hasChildNodes()) {\r\n            this.board.removeChild(this.board.lastChild);\r\n        }\r\n        const boardX = this.board.clientWidth;\r\n        const boardY = this.board.clientHeight;\r\n        for (let i = 0; i < this.fieldCount; i++) {\r\n            this.boardCoords[i] = [];\r\n        }\r\n        for (let i = 0; i < this.fieldCount * this.fieldCount; i++) {\r\n            const square = new Square_1.Square(i % this.fieldCount, Math.floor(i / this.fieldCount));\r\n            square.field.style.width = `${(boardX / this.fieldCount)}px`;\r\n            square.field.style.height = `${(boardY / this.fieldCount)}px`;\r\n            square.field.style.boxShadow = \"0px 0px 0px 1px lightgray inset\";\r\n            this.board.appendChild(square.field);\r\n            square.field.addEventListener('click', () => {\r\n                square.fillField(this.setSymbol(), this.setColor());\r\n                this.boardCoords[square.y][square.x] = square.value;\r\n            });\r\n            this.saveToBoardCoords(square);\r\n            square.field.addEventListener('click', () => this.checkWin(square, this.fieldCount));\r\n            square.field.addEventListener('click', () => this.checkDraw());\r\n        }\r\n    }\r\n    saveToBoardCoords(field) {\r\n        this.boardCoords[field.y][field.x] = field.value;\r\n    }\r\n    checkWin(field, boardLength) {\r\n        const Up = () => {\r\n            const CheckingValue = field.value;\r\n            let win = \"\";\r\n            let actual = \"\";\r\n            for (let i = 0; i < this.winLength; i++)\r\n                win += CheckingValue;\r\n            for (let i = 0; i < this.winLength; i++) {\r\n                if (field.y - i < 0)\r\n                    break;\r\n                else\r\n                    actual += this.boardCoords[field.y - i][field.x];\r\n                if (actual == win)\r\n                    this.endGame(CheckingValue);\r\n            }\r\n        };\r\n        const Down = () => {\r\n            const CheckingValue = field.value;\r\n            let win = \"\";\r\n            let actual = \"\";\r\n            for (let i = 0; i < this.winLength; i++)\r\n                win += CheckingValue;\r\n            for (let i = 0; i < this.winLength; i++) {\r\n                if (field.y + i > boardLength - 1)\r\n                    break;\r\n                else\r\n                    actual += this.boardCoords[field.y + i][field.x];\r\n                if (actual == win)\r\n                    this.endGame(CheckingValue);\r\n            }\r\n        };\r\n        const Left = () => {\r\n            const CheckingValue = field.value;\r\n            let win = \"\";\r\n            let actual = \"\";\r\n            for (let i = 0; i < this.winLength; i++)\r\n                win += CheckingValue;\r\n            for (let i = 0; i < this.winLength; i++) {\r\n                actual += this.boardCoords[field.y][field.x - i];\r\n                if (actual == win)\r\n                    this.endGame(CheckingValue);\r\n            }\r\n        };\r\n        const Right = () => {\r\n            const CheckingValue = field.value;\r\n            let win = \"\";\r\n            let actual = \"\";\r\n            for (let i = 0; i < this.winLength; i++)\r\n                win += CheckingValue;\r\n            for (let i = 0; i < this.winLength; i++) {\r\n                actual += this.boardCoords[field.y][field.x + i];\r\n                if (actual == win)\r\n                    this.endGame(CheckingValue);\r\n            }\r\n        };\r\n        const LeftUp = () => {\r\n            const CheckingValue = field.value;\r\n            let win = \"\";\r\n            let actual = \"\";\r\n            for (let i = 0; i < this.winLength; i++)\r\n                win += CheckingValue;\r\n            for (let i = 0; i < this.winLength; i++) {\r\n                if (field.y + i > boardLength - 1)\r\n                    break;\r\n                actual += this.boardCoords[field.y + i][field.x + i];\r\n                if (actual == win)\r\n                    this.endGame(CheckingValue);\r\n            }\r\n        };\r\n        const LeftDown = () => {\r\n            const CheckingValue = field.value;\r\n            let win = \"\";\r\n            let actual = \"\";\r\n            for (let i = 0; i < this.winLength; i++)\r\n                win += CheckingValue;\r\n            for (let i = 0; i < this.winLength; i++) {\r\n                if (field.y - i < 0)\r\n                    break;\r\n                actual += this.boardCoords[field.y - i][field.x + i];\r\n                if (actual == win)\r\n                    this.endGame(CheckingValue);\r\n            }\r\n        };\r\n        const RightUp = () => {\r\n            const CheckingValue = field.value;\r\n            let win = \"\";\r\n            let actual = \"\";\r\n            for (let i = 0; i < this.winLength; i++)\r\n                win += CheckingValue;\r\n            for (let i = 0; i < this.winLength; i++) {\r\n                if (field.y + i > boardLength - 1)\r\n                    break;\r\n                actual += this.boardCoords[field.y + i][field.x - i];\r\n                if (actual == win)\r\n                    this.endGame(CheckingValue);\r\n            }\r\n        };\r\n        const RightDown = () => {\r\n            const CheckingValue = field.value;\r\n            let win = \"\";\r\n            let actual = \"\";\r\n            for (let i = 0; i < this.winLength; i++)\r\n                win += CheckingValue;\r\n            for (let i = 0; i < this.winLength; i++) {\r\n                if (field.y + i < 0)\r\n                    break;\r\n                actual += this.boardCoords[field.y - i][field.x - i];\r\n                if (actual == win)\r\n                    this.endGame(CheckingValue);\r\n            }\r\n        };\r\n        Up();\r\n        Down();\r\n        Left();\r\n        Right();\r\n        LeftUp();\r\n        RightUp();\r\n        LeftDown();\r\n        RightDown();\r\n    }\r\n    endGame(winner) {\r\n        let counter = 3;\r\n        this.gameResult.style.display = \"flex\";\r\n        this.winner.innerHTML = winner != \"\" ? `Player ${winner} wins!` : \"remis\";\r\n        this.timer.innerHTML = `Exit in ${counter}`;\r\n        let interval = setInterval(() => {\r\n            counter--;\r\n            this.timer.innerHTML = `Exit in ${counter}`;\r\n        }, 1000);\r\n        setTimeout(() => {\r\n            clearInterval(interval);\r\n            while (this.board.hasChildNodes()) {\r\n                this.board.removeChild(this.board.lastChild);\r\n            }\r\n            this.gameResult.style.display = \"none\";\r\n            this.mainMenu.style.display = \"flex\";\r\n        }, 3000);\r\n    }\r\n    checkDraw() {\r\n        let isEnd = true;\r\n        for (let i = 0; i < this.boardCoords.length; i++) {\r\n            for (let j = 0; j < this.boardCoords[i].length; j++) {\r\n                if (this.boardCoords[i][j] == \"-\")\r\n                    isEnd = false;\r\n            }\r\n        }\r\n        if (isEnd)\r\n            this.endGame(\"\");\r\n    }\r\n    setSymbol() {\r\n        if (this.counter % 2 == 0)\r\n            return Symbol_1.Symbol.player1;\r\n        else\r\n            return Symbol_1.Symbol.player2;\r\n    }\r\n    setColor() {\r\n        if (this.counter % 2 == 0)\r\n            return PlayerColor_1.PlayerColor.player1;\r\n        else\r\n            return PlayerColor_1.PlayerColor.player2;\r\n    }\r\n}\r\nexports.Board = Board;\r\n\n\n//# sourceURL=webpack://lab2.1/./src/Board.ts?");

/***/ }),

/***/ "./src/PlayerColor.ts":
/*!****************************!*\
  !*** ./src/PlayerColor.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.PlayerColor = void 0;\r\nvar PlayerColor;\r\n(function (PlayerColor) {\r\n    PlayerColor[\"player1\"] = \"red\";\r\n    PlayerColor[\"player2\"] = \"blue\";\r\n})(PlayerColor = exports.PlayerColor || (exports.PlayerColor = {}));\r\n\n\n//# sourceURL=webpack://lab2.1/./src/PlayerColor.ts?");

/***/ }),

/***/ "./src/Square.ts":
/*!***********************!*\
  !*** ./src/Square.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Square = void 0;\r\nclass Square {\r\n    constructor(x, y) {\r\n        this.isChecked = false;\r\n        this.x = x;\r\n        this.y = y;\r\n        this.value = '-';\r\n        this.field = document.createElement('div');\r\n        this.field.style.display = \"flex\";\r\n        this.field.style.justifyContent = \"center\";\r\n        this.field.style.alignItems = \"center\";\r\n        this.field.style.backgroundColor = \"white\";\r\n        this.mark = document.createElement('p');\r\n        this.mark.style.fontSize = \"20px\";\r\n        this.mark.style.fontWeight = \"bold\";\r\n        this.field.appendChild(this.mark);\r\n    }\r\n    fillField(symbol, color) {\r\n        if (!this.isChecked) {\r\n            this.mark.innerHTML = `${symbol}`;\r\n            this.value = `${symbol}`;\r\n            this.isChecked = true;\r\n            this.field.style.fontSize = \"bold\";\r\n            this.field.style.color = `${color}`;\r\n        }\r\n    }\r\n}\r\nexports.Square = Square;\r\n\n\n//# sourceURL=webpack://lab2.1/./src/Square.ts?");

/***/ }),

/***/ "./src/Symbol.ts":
/*!***********************!*\
  !*** ./src/Symbol.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Symbol = void 0;\r\nvar Symbol;\r\n(function (Symbol) {\r\n    Symbol[\"player1\"] = \"X\";\r\n    Symbol[\"player2\"] = \"O\";\r\n})(Symbol = exports.Symbol || (exports.Symbol = {}));\r\n\n\n//# sourceURL=webpack://lab2.1/./src/Symbol.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst Board_1 = __webpack_require__(/*! ./Board */ \"./src/Board.ts\");\r\nconst board = new Board_1.Board();\r\n\n\n//# sourceURL=webpack://lab2.1/./src/index.ts?");

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