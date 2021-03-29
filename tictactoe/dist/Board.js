"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
class Board {
    constructor() {
        this.board = document.getElementById("board");
    }
    createBoard(fieldCount) {
        const boardX = this.board.clientWidth;
        const boardY = this.board.clientHeight;
        for (let i = 0; i < fieldCount * fieldCount; i++) {
            const field = document.createElement('div');
            field.style.width = `${(boardX / fieldCount) - fieldCount / 2}px`;
            field.style.height = `${(boardY / fieldCount) - fieldCount / 2}px`;
            field.style.backgroundColor = "lightgray";
            field.style.border = "1px solid gray";
            this.board.appendChild(field);
        }
    }
}
exports.Board = Board;
//# sourceMappingURL=Board.js.map