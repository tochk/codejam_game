/**
 * Created by tochk on 02.01.2017.
 */


function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}


class Start extends Phaser.State {

    create() {
        console.log("Loaded level selector");
        let width = this.game.width,
            height = this.game.height;

        this.stage.backgroundColor = "#27e8cb";
        this.game.add.sprite(0, 0, 'background');

        let minTextColor = "#ffffff",
            textColor = "#ff2154";

        this.toStartButton = this.createText(150, 30, " ← Return to menu", 30, "#ffffff");
        this.toStartButton.inputEnabled = true;
        this.toStartButton.input.useHandCursor = true;
        this.toStartButton.events.onInputDown.add(this.toStart, this);

        this.toLevel1 = this.createText(width/2, height/2 - 40, "Level 1", 80, minTextColor);
        this.toLevel1.inputEnabled = true;
        this.toLevel1.input.useHandCursor = true;
        this.toLevel1.events.onInputDown.add(this.goToLevel1, this);


        this.toLevel2 = this.createText(width/2, height/2 + 40, "Level 2", 80, minTextColor);
        this.toLevel2.inputEnabled = true;
        this.toLevel2.input.useHandCursor = true;
        this.toLevel2.events.onInputDown.add(this.goToLevel2, this);


    }

    toStart() {
        this.game.state.start("Start");
    }

    goToLevel1() {
        document.cookie = "level=1";
        this.game.state.start("MainGame");
    }

    goToLevel2() {
        document.cookie = "level=2";
        this.game.state.start("MainGame");
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