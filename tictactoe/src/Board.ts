import { Square } from './Square';
import { Symbol } from './Symbol';
import { PlayerColor } from './PlayerColor';

export class Board
{
    private counter: number;
    private winLength: number;
    public board: HTMLElement;
    public playerMove: HTMLElement;
    public winnerInfo: HTMLElement;
    public winnerInfoMessage: HTMLElement;
    public restartGame: void;
    public boardCoords: string[][];
    constructor(winCounter: number)
    {
        this.counter = 0;
        this.winLength = winCounter;
        this.board = document.getElementById("board")!
        this.playerMove = document.getElementById("current__player__move")!;
        this.board.addEventListener('click', () => { this.counter++; this.playerMove.innerHTML = this.setSymbol() })
        this.restartGame = document.getElementById("reset__game__button")!.addEventListener('click', () => this.createBoard(10));
        this.winnerInfo = document.getElementById("winner__info")!;
        this.winnerInfoMessage = document.getElementById("winner__info__message")!;
        this.boardCoords = [];
    }

    createBoard(fieldCount: number)
    {
        while (this.board.hasChildNodes())
        {
            this.board.removeChild(this.board.lastChild!);
        }

        const boardX: number = this.board.clientWidth;
        const boardY: number = this.board.clientHeight;

        for (let i = 0; i < fieldCount; i++)
        {
            this.boardCoords[i] = [];
        }

        for (let i = 0; i < fieldCount * fieldCount; i++)
        {
            const square = new Square(i % fieldCount, Math.floor(i / fieldCount));
            square.field.style.width = `${(boardX / fieldCount)}px`;
            square.field.style.height = `${(boardY / fieldCount)}px`;
            square.field.style.boxShadow = "0px 0px 0px 1px lightgray inset";
            this.board.appendChild(square.field);

            square.field.addEventListener('click', () => {
                square.fillField(this.setSymbol(), this.setColor())
                this.boardCoords[square.y][square.x] = square.value;
            });
            
            this.saveToBoardCoords(square);
            square.field.addEventListener('click', () => this.checkWin(square, fieldCount))
        }
    }

    saveToBoardCoords(field: Square)
    {
        this.boardCoords[field.y][field.x] = field.value;
        this.winnerInfo.style.display = "none";
    }

    checkWin(field: Square, boardLenght: number)
    {
        const Up = () => 
        {
            const CheckingValue = field.value;
            let win: string = "";
            let actual: string = "";

            for (let i = 0; i < this.winLength; i++) win += CheckingValue;
            for (let i = 0; i < this.winLength; i++)
            {
                if (field.y - i < 0) break;
                else actual += this.boardCoords[field.y - i][field.x];
                
                if (actual == win) this.endGame(CheckingValue);
            }
        }

        const Down = () => 
        {
            const CheckingValue = field.value;
            let win: string = "";
            let actual: string = "";

            for (let i = 0; i < this.winLength; i++) win += CheckingValue;
            for (let i = 0; i < this.winLength; i++)
            {
                if (field.y + i > boardLenght - 1) break;
                else actual += this.boardCoords[field.y + i][field.x];
                
                if (actual == win) this.endGame(CheckingValue);
            }
        }

        const Left = () => 
        {
            const CheckingValue = field.value;
            let win: string = "";
            let actual: string = "";

            for (let i = 0; i < this.winLength; i++) win += CheckingValue;
            for (let i = 0; i < this.winLength; i++)
            {
                actual += this.boardCoords[field.y][field.x - i];              
                if (actual == win) this.endGame(CheckingValue);
            }
        }

        const Right = () => 
        {
            const CheckingValue = field.value;
            let win: string = "";
            let actual: string = "";

            for (let i = 0; i < this.winLength; i++) win += CheckingValue;
            for (let i = 0; i < this.winLength; i++)
            {
                actual += this.boardCoords[field.y][field.x + i];              
                if (actual == win) this.endGame(CheckingValue);
            }
        }

        Up(); Down(); Left(); Right();
    }

    endGame(winner: string)
    {
        this.winnerInfo.style.display = "block";
        this.winnerInfoMessage.innerHTML = `Wygrywa gracz ${winner} !`;
    }

    setSymbol(): Symbol
    {
        if (this.counter % 2 == 0) return Symbol.player1;
        else return Symbol.player2;
    }

    setColor(): PlayerColor
    {
        if (this.counter % 2 == 0) return PlayerColor.player1;
        else return PlayerColor.player2;
    }
}