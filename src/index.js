import Boot from "./states/Boot";
import PreLoad from "./states/PreLoad";
import Start from "./states/Start";
import Tree from "./states/Tree";
import GameOver from "./states/GameOver";
import MainGame from "./states/MainGame";

class Game extends Phaser.Game {

    constructor() {
        super(800, 600, Phaser.AUTO);

        this.state.add('Boot', Boot, false);
        this.state.add('PreLoad', PreLoad, false);
        this.state.add('Start', Start, false);
        this.state.add('Tree', Tree, false);
        this.state.add('GameOver', GameOver, false);
        this.state.add('MainGame', MainGame, false);
        this.state.start('Boot');
    }
}

new Game();