/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (() => {

eval("var getNumbers = function () {\r\n    var leftNumber = parseFloat(document.getElementById('leftNumber').value);\r\n    var rightNumber = parseFloat(document.getElementById('rightNumber').value);\r\n    var numbers = [leftNumber, rightNumber];\r\n    return numbers;\r\n};\r\nvar add = function () {\r\n    var numbers = getNumbers();\r\n    var result = numbers[0] + numbers[1];\r\n    var resultNumber = document.getElementById('resultNumber').value = result.toString();\r\n};\r\nvar sub = function () {\r\n    var numbers = getNumbers();\r\n    var result = numbers[0] - numbers[1];\r\n    var resultNumber = document.getElementById('resultNumber').value = result.toString();\r\n};\r\nvar mul = function () {\r\n    var numbers = getNumbers();\r\n    var result = numbers[0] * numbers[1];\r\n    var resultNumber = document.getElementById('resultNumber').value = result.toString();\r\n};\r\nvar divide = function () {\r\n    var numbers = getNumbers();\r\n    var result = numbers[0] / numbers[1];\r\n    var resultNumber = document.getElementById('resultNumber').value = result.toString();\r\n};\r\nvar btnAdd = document.getElementById('btnAdd');\r\nvar btnSub = document.getElementById('btnSub');\r\nvar btnMul = document.getElementById('btnMul');\r\nvar btnDiv = document.getElementById('btnDiv');\r\nbtnAdd.addEventListener('click', add);\r\nbtnSub.addEventListener('click', sub);\r\nbtnMul.addEventListener('click', mul);\r\nbtnDiv.addEventListener('click', divide);\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.ts"]();
/******/ 	
/******/ })()
;