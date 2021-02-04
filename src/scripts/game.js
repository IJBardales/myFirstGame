import '../styles/index.scss';
import { Config } from './config';
import { Weapons } from './weapons';

export class Game {
    gameBoardElement;
    weapons;

    constructor(gameBoard) {
        this.gameBoardElement = gameBoard;
        this.weapons = new Weapons();
    }

    run() {}
}
