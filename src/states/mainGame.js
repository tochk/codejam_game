/**
 * Created by tochk on 17.12.2016.
 */

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

class MainGame extends Phaser.State {

    constructor() {
        super();
        this.map = {};
        this.layers = {};
        this.loadSavedData();
    }


    create() {
        console.log("Loaded maingame");
        this.game.stage.backgroundColor = '#addeff';
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 200;
        this.createMap();
        this.createPlayer();
        this.jumpTimer = 0;
        this.cursors =  this.game.input.keyboard.createCursorKeys();
        this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.game.camera.follow(this.player);
    }

    update() {
        this.game.physics.arcade.collide(this.player, this.layers.map);
        this.game.physics.arcade.collide(this.player, this.layers.end, this.winGame, null, this);
        this.player.body.velocity.x = 0;
        if (this.cursors.left.isDown)
        {
            this.player.body.velocity.x = -500;
        }
        else if (this.cursors.right.isDown)
        {
            this.player.body.velocity.x = 500;
        }

        if (this.jumpButton.isDown && this.player.body.onFloor() && this.game.time.now > this.jumpTimer)
        {
            this.player.body.velocity.y = -350;
            this.jumpTimer = this.game.time.now + 350;
        }

        if (this.player.position.y == 610) {
            this.loseGame();
        }

        if (this.level == 2) {
            this.game.physics.arcade.collide(this.player, this.layers.block, this.loseGame, null, this);
        }
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

    createMap() {
        if (this.level == 1) {
            this.map = this.game.add.tilemap('map_level1');
            this.map.addTilesetImage('coin');
            this.map.addTilesetImage('tiles');
            this.map.addTilesetImage('snow_sprites');
            this.layers.map = this.map.createLayer('platforms');
            this.layers.end = this.map.createLayer('end');
            for (let key of Object.keys(this.layers)) {
                this.layers[key].resizeWorld();
            }
            this.map.setCollision([2, 3, 17, 18], true, this.layers.map);
            this.map.setCollision([24, 29], true, this.layers.end);
        } else if (this.level == 2) {
            /*this.map = this.game.add.tilemap('map_level2');
            this.map.addTilesetImage('tiles');
            this.map.addTilesetImage('snow_sprites');
            this.layers.map = this.map.createLayer('platforms');
            this.layers.block = this.map.createLayer('block');
            this.layers.end = this.map.createLayer('end');
            this.layers.map.resizeWorld();
            this.layers.block.resizeWorld();
            this.layers.end.resizeWorld();
            debugger;
            for (let key of Object.keys(this.layers)) {
                this.layers[key].resizeWorld();
            }
            this.map.setCollision([2, 3, 17, 18], true, this.layers.map);
            this.map.setCollision([71, 77, 81, 8876,  75, 72, 76, 74], true, this.layers.block);
            this.map.setCollision([24, 29], true, this.layers.end);*/
            this.map = this.game.add.tilemap('map_level1');
            this.map.addTilesetImage('coin');
            this.map.addTilesetImage('tiles');
            this.map.addTilesetImage('snow_sprites');
            this.layers.map = this.map.createLayer('platforms');
            this.layers.end = this.map.createLayer('end');
            for (let key of Object.keys(this.layers)) {
                this.layers[key].resizeWorld();
            }
            this.map.setCollision([2, 3, 17, 18], true, this.layers.map);
            this.map.setCollision([24, 29], true, this.layers.end);
        }
    }

    createPlayer() {
        this.player = this.game.add.sprite(70, 70, 'player');
        this.player.anchor.setTo(0.5, 0.5);
        this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.player.body.collideWorldBounds = true;
        this.game.physics.arcade.gravity.y = 300;
    }

    loseGame() {
        this.game.state.start("GameOver");
    }

    winGame() {
        this.game.state.start("Success");
    }

}

export default MainGame;