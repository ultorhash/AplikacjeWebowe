import { Square } from './Square';
import { Symbol } from './Symbol';
import { PlayerColor } from './PlayerColor';

export class Board
{
    private counter: number;
    private fieldCount: number = 3;
    private winLength: number = 3;
    private gameBoard: HTMLElement;
    public board: HTMLElement;
    public newGame: void;
    public boardCoords: string[][];
    constructor()
    {
        this.counter = 0;
        this.board = document.getElementById('gameContainer')!
        this.board.addEventListener('click', () => { this.counter++; })

        this.gameBoard = document.createElement('div');
        this.gameBoard.style.width = "300px";
        this.gameBoard.style.height = "300px";
        this.gameBoard.style.position = "relative";
        this.gameBoard.style.margin = "auto";
        this.gameBoard.style.display = "flex";
        this.gameBoard.style.flexWrap = "wrap";
        this.gameBoard.style.border = "2px solid black";

        this.boardCoords = [];
        this.board.appendChild(this.gameBoard);
        this.createBoard();
    }

    createBoard()
    {
        while (this.gameBoard.hasChildNodes())
        {
            this.board.removeChild(this.board.lastChild!);
        }

        const boardX: number = this.gameBoard.clientWidth;
        const boardY: number = this.gameBoard.clientHeight;

        for (let i = 0; i < this.fieldCount; i++)
        {
            this.boardCoords[i] = [];
        }

        for (let i = 0; i < this.fieldCount * this.fieldCount; i++)
        {
            const square = new Square(i % this.fieldCount, Math.floor(i / this.fieldCount));
            square.field.style.width = `${(boardX / this.fieldCount)}px`;
            square.field.style.height = `${(boardY / this.fieldCount)}px`;
            square.field.style.boxShadow = "0px 0px 0px 1px lightgray inset";
            this.gameBoard.appendChild(square.field);

            square.field.addEventListener('click', () => {
                square.fillField(this.setSymbol(), this.setColor())
                this.boardCoords[square.y][square.x] = square.value;
            });
            
            this.saveToBoardCoords(square);
            square.field.addEventListener('click', () => this.checkWin(square, this.fieldCount))
            square.field.addEventListener('click', () => this.checkDraw());
        }
    }

    saveToBoardCoords(field: Square)
    {
        this.boardCoords[field.y][field.x] = field.value;
    }

    checkWin(field: Square, boardLength: number)
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
                if (field.y + i > boardLength - 1) break;
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

        const LeftUp = () =>
        {
            const CheckingValue = field.value;
            let win: string = "";
            let actual: string = "";

            for (let i = 0; i < this.winLength; i++) win += CheckingValue;
            for (let i = 0; i < this.winLength; i++)
            {
                if (field.y + i > boardLength - 1) break;
                actual += this.boardCoords[field.y + i][field.x + i];              
                if (actual == win) this.endGame(CheckingValue);
            }
        }

        const LeftDown = () =>
        {
            const CheckingValue = field.value;
            let win: string = "";
            let actual: string = "";

            for (let i = 0; i < this.winLength; i++) win += CheckingValue;
            for (let i = 0; i < this.winLength; i++)
            {
                if (field.y - i < 0) break;
                actual += this.boardCoords[field.y - i][field.x + i];              
                if (actual == win) this.endGame(CheckingValue);
            }
        }

        const RightUp = () =>
        {
            const CheckingValue = field.value;
            let win: string = "";
            let actual: string = "";

            for (let i = 0; i < this.winLength; i++) win += CheckingValue;
            for (let i = 0; i < this.winLength; i++)
            {
                if (field.y + i > boardLength - 1) break;
                actual += this.boardCoords[field.y + i][field.x - i];              
                if (actual == win) this.endGame(CheckingValue);
            }
        }

        const RightDown = () =>
        {
            const CheckingValue = field.value;
            let win: string = "";
            let actual: string = "";

            for (let i = 0; i < this.winLength; i++) win += CheckingValue;
            for (let i = 0; i < this.winLength; i++)
            {
                if (field.y + i < 0) break;
                actual += this.boardCoords[field.y - i][field.x - i];              
                if (actual == win) this.endGame(CheckingValue);
            }
        }

        Up(); Down(); Left(); Right();
        LeftUp(); RightUp(); LeftDown(); RightDown();
    }

    endGame(winner: string)
    {
        alert("The " + winner + " wins!");
    }

    checkDraw()
    {
        let isEnd: boolean = true;
        for (let i = 0; i < this.boardCoords.length; i++)
        {
            for (let j = 0; j < this.boardCoords[i].length; j++)
            {
                if (this.boardCoords[i][j] == "-") isEnd = false;
            }
        }

        if (isEnd) this.endGame("");
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