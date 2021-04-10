import { Battleship } from './Battleship';
import { Factory } from './Factory';
import { Game } from './Game';
import { GuessNumber } from './GuessNumber';
import { TicTacToe } from './TicTacToe';

export class GameFactory implements Factory
{
    createGame(name: string): Game
    {
        switch(name)
        {
            case "TicTacToe":
                return new TicTacToe();
            case "Battleship":
                return new Battleship;
            case "GuessNumber":
                return new GuessNumber();
            default:
                throw new Error();
        }
    } 
}