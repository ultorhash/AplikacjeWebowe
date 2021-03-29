"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Snake_1 = require("./Snake");
const Horse_1 = require("./Horse");
const Board_1 = require("./Board");
let sam = new Snake_1.Snake("Sammy the python");
let tom = new Horse_1.Horse("Tommy the Palomino");
sam.move();
tom.move(34);
//   TIC TAC TOE   //
const board = new Board_1.Board();
board.createBoard(9);
//# sourceMappingURL=index.js.map