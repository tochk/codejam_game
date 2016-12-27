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

    loadSavedData() {
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
            this.achievementSprite1 = this.game.add.sprite(width / 2 - 75, height / 2 + 25, '1');
        else
            this.achievementSprite1 = this.game.add.sprite(width / 2 - 75, height / 2 + 25, '1_gray');
        if (this.achievement2 == 1)
            this.achievementSprite2 = this.game.add.sprite(width / 2 + 20, height / 2 + 25, '2');
        else
            this.achievementSprite2 = this.game.add.sprite(width / 2 + 20, height / 2 + 25, '2_gray');
        if (this.achievement3 == 1)
            this.achievementSprite3 = this.game.add.sprite(width / 2 - 75, height / 2 + 80, '3');
        else
            this.achievementSprite3 = this.game.add.sprite(width / 2 - 75, height / 2 + 80, '3_gray');
        if (this.achievement4 == 1)
            this.achievementSprite4 = this.game.add.sprite(width / 2 + 20, height / 2 + 80, '4');
        else
            this.achievementSprite4 = this.game.add.sprite(width / 2 + 20, height / 2 + 80, '4_gray');
        if (this.achievement5 == 1)
            this.achievementSprite5 = this.game.add.sprite(width / 2 - 25, height / 2 - 50, '5');
        else
            this.achievementSprite5 = this.game.add.sprite(width / 2 - 25, height / 2 - 50, '5_gray');
        this.achievementSprite1.inputEnabled = true;
        this.achievementSprite2.inputEnabled = true;
        this.achievementSprite3.inputEnabled = true;
        this.achievementSprite4.inputEnabled = true;
        this.achievementSprite5.inputEnabled = true;
        this.achievementTextBox1 = this.game.add.text(width / 2 - 350, height / 2 + 35, "");
        this.achievementTextBox2 = this.game.add.text(width / 2 + 100, height / 2 + 35, "");
        this.achievementTextBox3 = this.game.add.text(width / 2 - 350, height / 2 + 90, "");
        this.achievementTextBox4 = this.game.add.text(width / 2 + 100, height / 2 + 90, "");
        this.achievementTextBox5 = this.game.add.text(width / 2 - 110, height / 2 - 120, "");
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


    update() {
        let width = this.game.width,
            height = this.game.height;
        if (this.achievementSprite1.input.pointerOver()) {
            this.achievementSprite1.alpha = 0.9;
            this.achievementTextBox1.setText("You launched game");
        }
        else {
            this.achievementSprite1.alpha = 1;
            this.achievementTextBox1.setText("");
        }
        if (this.achievementSprite2.input.pointerOver()) {
            this.achievementSprite2.alpha = 0.9;
            this.achievementTextBox2.setText("You death");
        }
        else {
            this.achievementSprite2.alpha = 1;
            this.achievementTextBox2.setText("");
        }
        if (this.achievementSprite3.input.pointerOver()) {
            this.achievementSprite3.alpha = 0.9;
            this.achievementTextBox3.setText("1st level completed");
        }
        else {
            this.achievementSprite3.alpha = 1;
            this.achievementTextBox3.setText("");
        }
        if (this.achievementSprite4.input.pointerOver()) {
            this.achievementSprite4.alpha = 0.9;
            this.achievementTextBox4.setText("2nd level completed");
        }
        else {
            this.achievementSprite4.alpha = 1;
            this.achievementTextBox4.setText("");
        }
        if (this.achievementSprite5.input.pointerOver()) {
            this.achievementSprite5.alpha = 0.9;
            this.achievementTextBox5.setText("Game completed");
        }
        else {
            this.achievementSprite5.alpha = 1;
            this.achievementTextBox5.setText("");
        }
    }
}

export default Tree;