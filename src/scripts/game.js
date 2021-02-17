import '../styles/index.scss';
import { Config } from './config';
import { Weapons } from './weapons';

export class Game {
    gameBoardElement;
    weapons;

    constructor(gameBoard) {
        this.gameBoardElement = gameBoard;
        this.environment = new Environment();
    }
    //environment object
    //an array of player and each instance will have its ouwn unique warrior and player create a player class/object
    //warrior object
    //weapon is going to be part of player

    run() {}
}
