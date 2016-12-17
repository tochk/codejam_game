/**
 * Created by tochk on 17.12.2016.
 */
import * as Phaser from "phaser";

class Tree extends Phaser.State {

    preload() {

    }

    create() {
        //buttons
        console.log("Loaded tree");
        this.stage.backgroundColor = "#4488AA";
        this.toStartButton = this.game.add.text(20, 20, " ← Return to menu", {font: "30px Arial", fill: "#ffffff", stroke: "#000000", strokeThickness: 15});
        this.toStartButton.inputEnabled = true;
        this.toStartButton.input.useHandCursor = true;
        this.toStartButton.events.onInputDown.add(this.toStart, this);
        //end buttons block

    }

    toStart() {
        this.game.state.start("Start");
    }
}

export default Tree;