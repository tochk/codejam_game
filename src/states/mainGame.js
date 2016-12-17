/**
 * Created by tochk on 17.12.2016.
 */

class MainGame extends Phaser.State {

    constructor() {
        super();

        this.map = {};
        this.layers = {};
    }


    create() {
        console.log("Loaded maingame");

        this.game.stage.backgroundColor = '#addeff';
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.createMap();
        this.createPlayer();

        this.jumpTimer = 0;
        this.cursors =  this.game.input.keyboard.createCursorKeys();
        this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.game.camera.follow(this.player);
    }

    update() {
        this.game.physics.arcade.overlap(this.player, this.layers.end, this.end, null, this);
        this.game.physics.arcade.collide(this.player, this.layers.map);

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
            this.player.body.velocity.y = -550;
            this.jumpTimer = this.game.time.now + 750;
        }
    }

    createMap() {
        this.map = this.game.add.tilemap('tilemap');
        this.map.addTilesetImage('coin');
        this.map.addTilesetImage('tiles');
        this.map.addTilesetImage('snow_sprites');

        this.layers.map = this.map.createLayer('map');
        this.layers.trees = this.map.createLayer('trees');
        this.layers.coins = this.map.createLayer('coins');
        this.layers.end = this.map.createLayer('end');

        for (let key of Object.keys(this.layers)) {
            this.layers[key].resizeWorld();
        }

        // this.map.setCollisionBetween(0, 2, true, this.layers.box);
        // this.map.setCollision([85], true, this.layers.map);
        this.map.setCollisionBetween(0, 10, true, this.layers.map);
        this.map.setCollisionBetween(0, 10, true, this.layers.end);
    }

    createPlayer() {
        this.player = this.game.add.sprite(70, 70, 'player');
        this.player.anchor.setTo(0.5, 0.5);
        this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.player.body.collideWorldBounds = true;
        this.game.physics.arcade.gravity.y = 100;
    }

    end() {
        // this.game.state.start("MainGame", true, false, this.scores.score);
        // this.game.state.start("Start");
        console.log('end game');
    }
}

export default MainGame;