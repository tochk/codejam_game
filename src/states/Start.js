/**
 * Created by tochk on 17.12.2016.
 */
//import * as Phaser from "phaser";

class Start extends Phaser.State {

    create() {
        console.log("Loaded start");
        this.startButton = this.game.add.text(30, 200, "START GAME!", {font: "100px Arial", fill: "#000000", stroke: "#ffffff", strokeThickness: 15});
        this.openTree = this.game.add.text(230, 350, "Open tree", {font: "80px Arial", fill: "#000000", stroke: "#ffffff", strokeThickness: 15});
        this.startButton.inputEnabled = true;
        this.startButton.input.useHandCursor = true;
        this.startButton.events.onInputDown.add(this.startGame, this);
        this.openTree.inputEnabled = true;
        this.openTree.input.useHandCursor = true;
        this.openTree.events.onInputDown.add(this.showTree, this);
    }

    startGame() {
        this.game.state.start('MainGame');
    }

    showTree() {
        this.game.state.start("Tree");
    }

}

export default Start;