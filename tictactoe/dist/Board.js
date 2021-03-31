"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const Square_1 = require("./Square");
const Symbol_1 = require("./Symbol");
const PlayerColor_1 = require("./PlayerColor");
class Board {
    constructor(winCounter) {
        this.counter = 0;
        this.winLength = winCounter;
        this.board = document.getElementById("board");
        this.playerMove = document.getElementById("current__player__move");
        this.board.addEventListener('click', () => { this.counter++; this.playerMove.innerHTML = this.setSymbol(); });
        //this.newGame = document.getElementById("play__button")!.addEventListener('click', () => this.createBoard(5));
        this.winnerInfo = document.getElementById("winner__info");
        this.winnerInfoMessage = document.getElementById("winner__info__message");
        this.boardCoords = [];
    }
    createBoard(fieldCount) {
        while (this.board.hasChildNodes()) {
            this.board.removeChild(this.board.lastChild);
        }
        const boardX = this.board.clientWidth;
        const boardY = this.board.clientHeight;
        for (let i = 0; i < fieldCount; i++) {
            this.boardCoords[i] = [];
        }
        for (let i = 0; i < fieldCount * fieldCount; i++) {
            const square = new Square_1.Square(i % fieldCount, Math.floor(i / fieldCount));
            square.field.style.width = `${(boardX / fieldCount)}px`;
            square.field.style.height = `${(boardY / fieldCount)}px`;
            square.field.style.boxShadow = "0px 0px 0px 1px lightgray inset";
            this.board.appendChild(square.field);
            square.field.addEventListener('click', () => {
                square.fillField(this.setSymbol(), this.setColor());
                this.boardCoords[square.y][square.x] = square.value;
            });
            this.saveToBoardCoords(square);
            square.field.addEventListener('click', () => this.checkWin(square, fieldCount));
            square.field.addEventListener('click', () => this.checkDraw());
        }
    }
    saveToBoardCoords(field) {
        this.boardCoords[field.y][field.x] = field.value;
        this.winnerInfo.style.display = "none";
    }
    checkWin(field, boardLength) {
        const Up = () => {
            const CheckingValue = field.value;
            let win = "";
            let actual = "";
            for (let i = 0; i < this.winLength; i++)
                win += CheckingValue;
            for (let i = 0; i < this.winLength; i++) {
                if (field.y - i < 0)
                    break;
                else
                    actual += this.boardCoords[field.y - i][field.x];
                if (actual == win)
                    this.endGame(CheckingValue);
            }
        };
        const Down = () => {
            const CheckingValue = field.value;
            let win = "";
            let actual = "";
            for (let i = 0; i < this.winLength; i++)
                win += CheckingValue;
            for (let i = 0; i < this.winLength; i++) {
                if (field.y + i > boardLength - 1)
                    break;
                else
                    actual += this.boardCoords[field.y + i][field.x];
                if (actual == win)
                    this.endGame(CheckingValue);
            }
        };
        const Left = () => {
            const CheckingValue = field.value;
            let win = "";
            let actual = "";
            for (let i = 0; i < this.winLength; i++)
                win += CheckingValue;
            for (let i = 0; i < this.winLength; i++) {
                actual += this.boardCoords[field.y][field.x - i];
                if (actual == win)
                    this.endGame(CheckingValue);
            }
        };
        const Right = () => {
            const CheckingValue = field.value;
            let win = "";
            let actual = "";
            for (let i = 0; i < this.winLength; i++)
                win += CheckingValue;
            for (let i = 0; i < this.winLength; i++) {
                actual += this.boardCoords[field.y][field.x + i];
                if (actual == win)
                    this.endGame(CheckingValue);
            }
        };
        const LeftUp = () => {
            const CheckingValue = field.value;
            let win = "";
            let actual = "";
            for (let i = 0; i < this.winLength; i++)
                win += CheckingValue;
            for (let i = 0; i < this.winLength; i++) {
                if (field.y + i > boardLength - 1)
                    break;
                actual += this.boardCoords[field.y + i][field.x + i];
                if (actual == win)
                    this.endGame(CheckingValue);
            }
        };
        const LeftDown = () => {
            const CheckingValue = field.value;
            let win = "";
            let actual = "";
            for (let i = 0; i < this.winLength; i++)
                win += CheckingValue;
            for (let i = 0; i < this.winLength; i++) {
                if (field.y - i < 0)
                    break;
                actual += this.boardCoords[field.y - i][field.x + i];
                if (actual == win)
                    this.endGame(CheckingValue);
            }
        };
        const RightUp = () => {
            const CheckingValue = field.value;
            let win = "";
            let actual = "";
            for (let i = 0; i < this.winLength; i++)
                win += CheckingValue;
            for (let i = 0; i < this.winLength; i++) {
                if (field.y + i > boardLength - 1)
                    break;
                actual += this.boardCoords[field.y + i][field.x - i];
                if (actual == win)
                    this.endGame(CheckingValue);
            }
        };
        const RightDown = () => {
            const CheckingValue = field.value;
            let win = "";
            let actual = "";
            for (let i = 0; i < this.winLength; i++)
                win += CheckingValue;
            for (let i = 0; i < this.winLength; i++) {
                if (field.y + i < 0)
                    break;
                actual += this.boardCoords[field.y - i][field.x - i];
                if (actual == win)
                    this.endGame(CheckingValue);
            }
        };
        Up();
        Down();
        Left();
        Right();
        LeftUp();
        RightUp();
        LeftDown();
        RightDown();
    }
    endGame(winner) {
        this.winnerInfo.style.display = "block";
        this.winnerInfoMessage.innerHTML = winner == "" ? "Remis !" : `Wygrywa gracz ${winner} !`;
        this.board.remove();
    }
    checkDraw() {
        let isEnd = true;
        for (let i = 0; i < this.boardCoords.length; i++) {
            for (let j = 0; j < this.boardCoords[i].length; j++) {
                if (this.boardCoords[i][j] == "-")
                    isEnd = false;
            }
        }
        if (isEnd)
            this.endGame("");
    }
    setSymbol() {
        if (this.counter % 2 == 0)
            return Symbol_1.Symbol.player1;
        else
            return Symbol_1.Symbol.player2;
    }
    setColor() {
        if (this.counter % 2 == 0)
            return PlayerColor_1.PlayerColor.player1;
        else
            return PlayerColor_1.PlayerColor.player2;
    }
}
exports.Board = Board;
//# sourceMappingURL=Board.js.map