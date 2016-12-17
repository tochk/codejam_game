/**
 * Created by tochk on 17.12.2016.
 */


import * as Phaser from "phaser";

class Preload extends Phaser.State {

    preload() {

    }

    create() {
        console.log("Loaded preload");
        this.game.state.start('Start');
    }

}

export default Preload;