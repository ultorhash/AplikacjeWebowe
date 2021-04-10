import { Game } from './Game';

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
        const p = document.createElement('p');
        p.innerHTML = "Tic tac toe!";
        this.gameContainer.appendChild(p);
    }  
}