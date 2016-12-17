/**
 * Created by tochk on 17.12.2016.
 */
import * as Phaser from "phaser";

class Start extends Phaser.State {

    preload() {

    }

    create() {
        console.log("Loaded start");
        //this.game.state.start('Start');
    }

}

export default Start;