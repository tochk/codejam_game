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
        this.stage.backgroundColor = "#27e8cb";
        this.createMap();

        this.toStartButton = this.createText(20, 20, " ← Return to menu", 30, "ffffff");
        this.toStartButton.inputEnabled = true;
        this.toStartButton.input.useHandCursor = true;
        this.toStartButton.events.onInputDown.add(this.toStart, this);
        //end buttons block
        //achievements
        this.graphic = this.add.graphics(20, 100);
        this.graphic.beginFill(0xb3b3b3, 1);
        this.graphic.lineStyle(2, 0xb3b3b3, 1);
        this.graphic.drawRect(0, 0, 100, 100);
        this.graphic.inputEnabled = true;
        //end achievements block
    }

    createMap() {
        this.map = this.game.add.tilemap('tree_map');
        this.map.addTilesetImage('treeSprite');
        this.layers.tree_back = this.map.createLayer('tree_base');
        //TODO checking for level
        this.layers.tree_third = this.map.createLayer('tree_third');
        for (let key of Object.keys(this.layers)) {
            this.layers[key].resizeWorld();
            this.layers[key].position.set(15, 10);
            this.layers[key].fixedToCamera = false;
        }
    }

    toStart() {
        this.game.state.start("Start");
    }

    createText(x, y, text, textSize, textColor) {
        let style = {
            fontSize: textSize,
            fontWeight: 'bold',
            font: 'Arial',
            fill: textColor
        };
        let button = this.game.add.text(x, y, text, style);
        button.fixedToCamera = true;
        return button;
    }
}

export default Tree;