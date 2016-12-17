/**
 * Created by tochk on 17.12.2016.
 */
//import * as Phaser from "phaser";

class Start extends Phaser.State {

    create() {
        console.log("Loaded start");
        let width = this.game.width,
            height = this.game.height;

        this.stage.backgroundColor = "#27e8cb";

        let minTextColor = "#ffffff",
            textColor = "#52a6f9";
        this.title = this.createText(width/2, height/2 - 150, "-GAME-", 90, minTextColor);
        this.toStartButton = this.createText(width/2, height/2 - 50, "START GAME!", 100, textColor);
        this.openTree = this.createText(width/2, height/2 + 50, "Achievements tree", 80, minTextColor);

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

    createText(x, y, text, textSize, textColor) {
        let style = {
            fontSize: textSize,
            fontWeight: 'bold',
            font: 'Arial',
            fill: textColor
        };
        let button = this.game.add.text(x, y, text, style);
        button.fixedToCamera = true;
        button.anchor.setTo(0.5, 0.5);
        button.align = 'center';
        return button;
    }
}

export default Start;