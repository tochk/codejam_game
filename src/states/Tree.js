/**
 * Created by tochk on 17.12.2016.
 */
import * as Phaser from "phaser";

class Tree extends Phaser.State {

    constructor() {
        super();

        this.map = {};
        this.layers = {};
    }


    create() {
        //buttons
        console.log("Loaded tree");
        this.stage.backgroundColor = "#4488AA";
        this.createMap();
        this.toStartButton = this.game.add.text(20, 20, " ← Return to menu", {font: "30px Arial", fill: "#ffffff", stroke: "#000000", strokeThickness: 15});
        this.toStartButton.inputEnabled = true;
        this.toStartButton.input.useHandCursor = true;
        this.toStartButton.events.onInputDown.add(this.toStart, this);
        //end buttons block
    }

    createMap() {
        this.map = this.game.add.tilemap('tree_map');
        this.map.addTilesetImage('treeSprite');
        this.layers.tree_back = this.map.createLayer('tree_base');
        //TODO checking for level
        this.layers.tree_third = this.map.createLayer('tree_third');
        for (let key of Object.keys(this.layers)) {
            this.layers[key].resizeWorld();
        }
    }

    toStart() {
        this.game.state.start("Start");
    }
}

export default Tree;