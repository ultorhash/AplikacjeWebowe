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

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar http = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'http'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\nvar websocket = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'ws'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\nvar server = http.createServer();\r\nvar socket = new websocket.Server({ server: server });\r\nsocket.on('connection', function (ws) {\r\n    ws.on('message', function (msg) {\r\n        console.log('recivied ' + msg);\r\n        broadcast(msg.toString());\r\n    });\r\n    ws.send('connected');\r\n    console.log('new connection');\r\n});\r\nfunction broadcast(message) {\r\n    socket.clients.forEach(function (client) {\r\n        client.send(message);\r\n    });\r\n}\r\nserver.listen(8080);\r\n\n\n//# sourceURL=webpack:///./src/server.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.ts");
/******/ 	
/******/ })()
;