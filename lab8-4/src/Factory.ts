import { Game } from './Game';

export interface Factory
{
    createGame(name: string): Game;
}