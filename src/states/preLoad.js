/**
 * Created by tochk on 17.12.2016.
 */


import * as Phaser from "phaser";

class Preload extends Phaser.State {

    preload() {
        this.game.load.tilemap('tilemap', 'data/map.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('map_level1', 'data/level1.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('map_level2', 'data/map_level.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('coin', 'assets/coin.png', true);
        this.game.load.image('tiles', 'assets/tiles.png', true);
        this.game.load.image('snow_sprites', 'assets/snow_sprites.png', true);
        this.game.load.image('player', 'assets/player.png', true);
        this.game.load.tilemap('tree_map', 'assets/tree.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('treeSprite', 'assets/treeSprite.png', true);
    }

    create() {
        console.log("Loaded preload");
        this.game.state.start('Start');
    }

}

export default Preload;