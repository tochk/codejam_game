/**
 * Created by tochk on 17.12.2016.
 */
import * as Phaser from "phaser";

class Tree extends Phaser.State {

    preload() {

    }

    create() {
        console.log("Loaded gameover");
        this.stage.backgroundColor = "#4488AA";
        this.toStartButton = this.game.add.text(50, 200, "To menu", {font: "100px Arial", fill: "#ffffff", stroke: "#000000", strokeThickness: 15});
        this.openTree = this.game.add.text(200, 350, "Open tree", {font: "80px Arial", fill: "#ffffff", stroke: "#000000", strokeThickness: 15});
        this.toStartButton.inputEnabled = true;
        this.toStartButton.input.useHandCursor = true;
        this.toStartButton.events.onInputDown.add(this.toStart, this);
        this.openTree.inputEnabled = true;
        this.openTree.input.useHandCursor = true;
        this.openTree.events.onInputDown.add(this.showTree, this);
    }

    toStart() {
        this.game.state.start("Start");
    }

    showTree() {
        this.game.state.start("Tree");
    }

}

export default Tree;