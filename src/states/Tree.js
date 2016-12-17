/**
 * Created by tochk on 17.12.2016.
 */
import * as Phaser from "phaser";

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

class Tree extends Phaser.State {

    constructor() {
        super();

        this.map = {};
        this.layers = {};
    }

    loadSavedData () {
        if (getCookie("data") == "ok") {
            console.log("Loaded saved data");
            this.level = parseInt(getCookie("level"));
            this.achievement1 = parseInt(getCookie("achievement1"));
            this.achievement2 = parseInt(getCookie("achievement2"));
            this.achievement3 = parseInt(getCookie("achievement3"));
            this.achievement4 = parseInt(getCookie("achievement4"));
            this.achievement5 = parseInt(getCookie("achievement5"));
        }
    }

    create() {
        //buttons
        this.loadSavedData();
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
        if (this.achievement1 == 1)
            this.game.add.sprite(width / 2 - 65, height / 2 + 25, '1');
        if (this.achievement2 == 1)
            this.game.add.sprite(width / 2, height / 2 + 50, '2');
        if (this.achievement3 == 1)
            this.game.add.sprite(width / 2 - 65, height / 2 + 75, '3');
        if (this.achievement4 == 1)
            this.game.add.sprite(width / 2, height / 2 + 100, '4');
        if (this.achievement5 == 1)
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