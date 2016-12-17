//import * as Phaser from "phaser";

class Boot extends Phaser.State {

    preload() {

    }

    create() {
        console.log("Loaded boot");
        this.game.state.start("PreLoad");
    }

}

export default Boot;