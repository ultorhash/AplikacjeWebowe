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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.TicTacToe = void 0;\r\nvar Board_1 = __webpack_require__(/*! ./tictactoe/Board */ \"./src/tictactoe/Board.ts\");\r\nvar TicTacToe = /** @class */ (function () {\r\n    function TicTacToe() {\r\n        this.gameContainer = this.getGameElement();\r\n        this.clearGameElement();\r\n        this.createGame();\r\n    }\r\n    TicTacToe.prototype.getGameElement = function () {\r\n        var Div = document.getElementById('gameContainer');\r\n        return Div;\r\n    };\r\n    TicTacToe.prototype.clearGameElement = function () {\r\n        for (var i = this.gameContainer.children.length - 1; i >= 0; i--) {\r\n            this.gameContainer.removeChild(this.gameContainer.lastChild);\r\n        }\r\n    };\r\n    TicTacToe.prototype.createGame = function () {\r\n        var board = new Board_1.Board();\r\n    };\r\n    return TicTacToe;\r\n}());\r\nexports.TicTacToe = TicTacToe;\r\n\n\n//# sourceURL=webpack:///./src/TicTacToe.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\n// TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum\r\n// zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą\r\n// samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer.\r\n// Aby wyświetlić menu należy napisać pętlę, któta przeiteruje po wszystkich wartościach enum'a\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Games_1 = __webpack_require__(/*! ./Games */ \"./src/Games.ts\");\r\nvar GameFactory_1 = __webpack_require__(/*! ./GameFactory */ \"./src/GameFactory.ts\");\r\nvar Factory = new GameFactory_1.GameFactory();\r\nvar GameListElement = document.getElementById('gameList');\r\nvar _loop_1 = function (game) {\r\n    var gameOnList = document.createElement('li');\r\n    var gameButton = document.createElement('button');\r\n    gameOnList.appendChild(gameButton);\r\n    gameButton.innerHTML = \"\" + game;\r\n    gameButton.addEventListener('click', function () { return Factory.createGame(game); });\r\n    GameListElement === null || GameListElement === void 0 ? void 0 : GameListElement.appendChild(gameOnList);\r\n};\r\nfor (var game in Games_1.Games) {\r\n    _loop_1(game);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

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