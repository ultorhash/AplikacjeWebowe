import { Game } from './Game';
import { Board } from './tictactoe/Board';

export class TicTacToe implements Game
{
    gameContainer: HTMLElement;

    constructor()
    {
        this.gameContainer = this.getGameElement();
        this.clearGameElement();
        this.createGame();
    }

    getGameElement()
    {
        const Div = document.getElementById('gameContainer')!;
        return Div;
    }

    clearGameElement()
    {
        for (let i = this.gameContainer.children.length - 1; i >= 0; i--)
        {
            this.gameContainer.removeChild(this.gameContainer.lastChild!);
        }
    }

    createGame()
    {
        const board = new Board();
    }  
}