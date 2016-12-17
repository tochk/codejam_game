/**
 * Created by tochk on 17.12.2016.
 */


import * as Phaser from "phaser";

class Preload extends Phaser.State {

    preload() {
        this.game.load.tilemap('tilemap', 'data/map.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('map_level1', 'data/level1.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('map_level2', 'data/level2.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('coin', 'assets/coin.png', true);
        this.game.load.image('tiles', 'assets/tiles.png', true);
        this.game.load.image('snow_sprites', 'assets/snow_sprites.png', true);
        this.game.load.image('player', 'assets/player.png', true);
        this.game.load.tilemap('tree_map', 'assets/tree.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('treeSprite', 'assets/treeSprite.png', true);

        this.game.load.image('1', 'assets/achiev/1.png', true);
        this.game.load.image('2', 'assets/achiev/2.png', true);
        this.game.load.image('3', 'assets/achiev/3.png', true);
        this.game.load.image('4', 'assets/achiev/4.png', true);
        this.game.load.image('5', 'assets/achiev/5.png', true);

        this.game.load.image('background', 'assets/bg.png', true);
    }

    create() {
        console.log("Loaded preload");
        this.game.state.start('Start');
    }

}

export default Preload;