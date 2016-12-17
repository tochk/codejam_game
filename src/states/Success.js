import * as Phaser from "phaser";

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}




class Success extends Phaser.State {

    preload() {

    }

    create() {
        console.log("Loaded success");
        this.stage.backgroundColor = "#27e8cb";

        let width = this.game.width,
            height = this.game.height;
        let textColor = "#ffffff";

        this.title = this.createText(width/2, height/2 - 150, "YOU WIN", 100, '#ff2154');
        this.toStartButton = this.createText(width/2, height/2 - 50, "To menu", 80, textColor);
        this.openTree = this.createText(width/2, height/2 + 50, "Open tree", 80, textColor);

        this.toStartButton.inputEnabled = true;
        this.toStartButton.input.useHandCursor = true;
        this.toStartButton.events.onInputDown.add(this.toStart, this);
        this.openTree.inputEnabled = true;
        this.openTree.input.useHandCursor = true;
        this.openTree.events.onInputDown.add(this.showTree, this);

        this.loadSavedData();
        if (this.level == 1) {
            document.cookie = "level=2";
            document.cookie = "achievement3=1";
        }
        if (this.level == 2) {
            document.cookie = "level=3";
            document.cookie = "achievement4=1";
            document.cookie = "achievement5=1";
        }
    }

    loadSavedData () {
        if (getCookie("data") == "ok") {
            this.level = parseInt(getCookie("level"));
            this.achievement1 = parseInt(getCookie("achievement1"));
            this.achievement2 = parseInt(getCookie("achievement2"));
            this.achievement3 = parseInt(getCookie("achievement3"));
            this.achievement4 = parseInt(getCookie("achievement4"));
            this.achievement5 = parseInt(getCookie("achievement5"));
        }
    }

    toStart() {
        this.game.state.start("Start");
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

export default Success;