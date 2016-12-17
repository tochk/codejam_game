/**
 * Created by tochk on 17.12.2016.
 */
//import * as Phaser from "phaser";

class Start extends Phaser.State {

    create() {
        console.log("Loaded start");
        this.stage.backgroundColor = "#4488AA";
        this.toStartButton = this.game.add.text(50, 200, "START GAME!", {font: "100px Arial", fill: "#ffffff", stroke: "#000000", strokeThickness: 15});
        this.openTree = this.game.add.text(200, 350, "Open tree", {font: "80px Arial", fill: "#ffffff", stroke: "#000000", strokeThickness: 15});
        this.toStartButton.inputEnabled = true;
        this.toStartButton.input.useHandCursor = true;
        this.toStartButton.events.onInputDown.add(this.startGame, this);
        this.openTree.inputEnabled = true;
        this.openTree.input.useHandCursor = true;
        this.openTree.events.onInputDown.add(this.showTree, this);
    }

    startGame() {
        this.game.state.start("MainGame");
    }

    showTree() {
        this.game.state.start("Tree");
    }

}

export default Start;