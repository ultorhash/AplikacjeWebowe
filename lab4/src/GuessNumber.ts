import { Game } from './Game';

export class GuessNumber implements Game
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
        const NumerToGuess = Math.floor(Math.random() * 100);
        console.log(NumerToGuess);

        const TitleMessage = document.createElement('h1');
        let AnswerInput = document.createElement('input');
        const ButtonCheck = document.createElement('button');
        let answerInfo = document.createElement('p');

        TitleMessage.innerHTML = "Guess number from 0 to 100.";
        AnswerInput.setAttribute('type', 'number');
        ButtonCheck.innerHTML = "Check";
        ButtonCheck.style.padding = "20px";
        ButtonCheck.style.margin = "10px";

        ButtonCheck.addEventListener('click', (): void => {
            AnswerInput.value.toString() == NumerToGuess.toString() ?
            answerInfo.innerHTML = `Congratulations! You were looking for the number ${NumerToGuess}.` :
            answerInfo.innerHTML = "Wrong number, keep going!";
        })

        this.gameContainer.appendChild(TitleMessage);
        this.gameContainer.appendChild(AnswerInput);
        this.gameContainer.appendChild(ButtonCheck);
        this.gameContainer.appendChild(answerInfo);
    }
}