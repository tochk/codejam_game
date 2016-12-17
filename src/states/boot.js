/**
 * Created by tochk on 17.12.2016.
 */


import * as Phaser from "phaser";

class Boot extends Phaser.State {

    preload() {

    }

    create() {
        console.log("Loaded boot");
        this.game.state.start("PreLoad");
    }

}

export default Boot;