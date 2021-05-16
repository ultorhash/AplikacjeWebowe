// TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum
// zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą
// samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer.
// Aby wyświetlić menu należy napisać pętlę, któta przeiteruje po wszystkich wartościach enum'a

import { Games } from './Games';
import { GameFactory } from './GameFactory';
import './styles/style.scss';

const Factory = new GameFactory();

const GameListElement = document.getElementById('gameList');
const ChangeStyle = document.getElementById('changeColors')?.addEventListener('click', () => alert("XD"));

for (let game in Games)
{
    let gameOnList = document.createElement('li');
    let gameButton = document.createElement('button');

    gameOnList.appendChild(gameButton);
    gameButton.innerHTML = `${game}`;
    gameButton.addEventListener('click', () => Factory.createGame(game));

    GameListElement?.appendChild(gameOnList);
}