"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
class Board {
    constructor() {
        this.board = document.getElementById("tictactoe");
    }
    createBoard(fieldCount) {
        const boardX = this.board.clientWidth;
        const boardY = this.board.clientHeight;
        for (let i = 0; i < fieldCount; i++) {
            const field = document.createElement('td');
            field.style.width = `${boardX / fieldCount}px`;
            field.style.height = `${boardY / fieldCount}px`;
            field.style.backgroundColor = "lightgray";
            field.style.border = "3px solid gray";
            this.board.appendChild(field);
        }
    }
}
exports.Board = Board;
//# sourceMappingURL=Board.js.map