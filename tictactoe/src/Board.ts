import { Square } from './Square';
import { Symbol } from './Symbol';
import { PlayerColor } from './PlayerColor';

export class Board
{
    private counter: number;
    private fieldCount: number = 3;
    private winLength: number = 3;
    public board: HTMLElement;
    public playerMove: HTMLElement;
    public mainMenu: HTMLElement;
    public gameResult: HTMLElement;
    public winner: HTMLElement;
    public timer: HTMLElement;
    public newGame: void;
    public boardCoords: string[][];
    constructor()
    {
        this.counter = 0;
        this.board = document.getElementById("board")!
        this.playerMove = document.getElementById("current__player__move")!;
        this.board.addEventListener('click', () => { this.counter++; this.playerMove.innerHTML = this.setSymbol() })

        this.newGame = document.getElementById("play__button")!.addEventListener('click', () => this.createBoard());

        this.mainMenu = document.getElementById("main__menu")!;
        this.gameResult = document.getElementById("game__result")!;
        this.winner = document.getElementById("game__winner")!;
        this.timer = document.getElementById("return__timer")!;
        this.boardCoords = [];
        this.playerMove.innerHTML = `${this.setSymbol()}`;
    }

    createBoard()
    {
        this.fieldCount = +(<HTMLInputElement>document.getElementById("input__board__length")!).value;
        this.winLength = +(<HTMLInputElement>document.getElementById("input__win__length")!).value;
        this.mainMenu.style.display = "none";

        while (this.board.hasChildNodes())
        {
            this.board.removeChild(this.board.lastChild!);
        }

        const boardX: number = this.board.clientWidth;
        const boardY: number = this.board.clientHeight;

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
            this.board.appendChild(square.field);

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
        let counter = 3;
        this.gameResult.style.display = "flex";
        this.winner.innerHTML = winner != "" ? `Player ${winner} wins!` : "remis";
        this.timer.innerHTML = `Exit in ${counter}`;

        let interval = setInterval(() => {
            counter--;
            this.timer.innerHTML = `Exit in ${counter}`;
        }, 1000);

        setTimeout(() => {
            clearInterval(interval);
            while (this.board.hasChildNodes())
            {
                this.board.removeChild(this.board.lastChild!);
            }
            this.gameResult.style.display = "none";
            this.mainMenu.style.display = "flex";
        }, 3000);
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