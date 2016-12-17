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
        this.game.add.sprite(0, 0, 'background');
        this.createMap();

        this.toStartButton = this.createText(20, 20, " ← Return to menu", 30, "#ffffff");
        this.toStartButton.inputEnabled = true;
        this.toStartButton.input.useHandCursor = true;
        this.toStartButton.events.onInputDown.add(this.toStart, this);
        //end buttons block
        //achievements
        this.addAchiev();
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

    addAchiev() {
        let width = this.game.width,
            height = this.game.height;

        this.game.add.sprite(width / 2 - 65, height / 2 + 25, '1');
        this.game.add.sprite(width / 2, height / 2 + 50, '2');
        this.game.add.sprite(width / 2 - 65, height / 2 + 75, '3');
        this.game.add.sprite(width / 2, height / 2 + 100, '4');
        this.game.add.sprite(width / 2 - 25, height / 2 - 50, '5');
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