/**
 * Created by tochk on 17.12.2016.
 */


function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}


class Start extends Phaser.State {

    create() {
        console.log("Loaded start");
        let width = this.game.width,
            height = this.game.height;

        this.stage.backgroundColor = "#27e8cb";
        this.game.add.sprite(0, 0, 'background');

        let minTextColor = "#ffffff",
            textColor = "#ff2154";
        this.title = this.createText(width/2, height/2 - 150, "-HNY-", 90, minTextColor);
        if (getCookie("level") == "1") {
            this.toStartButton = this.createText(width / 2, height / 2 - 50, "START GAME!", 100, textColor);
        } else if (getCookie("level") == "2") {
            this.toStartButton = this.createText(width / 2, height / 2 - 50, "Continue!", 100, textColor);
        } else {
            this.toStartButton = this.createText(width / 2, height / 2 - 50, "New game", 100, textColor);
        }
        this.toStartButton.inputEnabled = true;
        this.toStartButton.input.useHandCursor = true;
        this.toStartButton.events.onInputDown.add(this.startGame, this);

        this.openTree = this.createText(width/2, height/2 + 50, "Achievements tree", 80, minTextColor);
        this.openTree.inputEnabled = true;
        this.openTree.input.useHandCursor = true;
        this.openTree.events.onInputDown.add(this.showTree, this);

        if (getCookie("completed") == "1" || getCookie("level") == "3")
        {
            this.levelSelect = this.createText(width/2, height/2 + 130, "Select level", 80, minTextColor);
            this.levelSelect.inputEnabled = true;
            this.levelSelect.input.useHandCursor = true;
            this.levelSelect.events.onInputDown.add(this.selectLevel, this);
        }

        if (getCookie("data") != "ok") {
            this.writeDataToCookie();
        }
    }

    startGame() {
        this.game.state.start("MainGame");
    }

    restartGame() {
        this.game.state.start("RestartGame");
    }

    showTree() {
        this.game.state.start("Tree");
    }

    selectLevel() {
        this.game.state.start("LevelSelect");
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

    writeDataToCookie() {
        document.cookie = "data=ok";
        document.cookie = "level=1";
        document.cookie = "achievement1=1";
        document.cookie = "achievement2=0";
        document.cookie = "achievement3=0";
        document.cookie = "achievement4=0";
        document.cookie = "achievement5=0";
    }
}

export default Start;