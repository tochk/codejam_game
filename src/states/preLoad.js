/**
 * Created by tochk on 17.12.2016.
 */


import * as Phaser from "phaser";

class Preload extends Phaser.State {

    preload() {
        //Загружаем нашу карту
        this.game.load.tilemap('tilemap', 'data/map.json', null, Phaser.Tilemap.TILED_JSON);

        //Загружаем наборы тайлов
        this.game.load.image('coin', 'assets/coin.png', true);
        this.game.load.image('tiles', 'assets/tiles.png', true);
        this.game.load.image('snow_sprites', 'assets/snow_sprites.png', true);

        this.game.load.image('player', 'assets/player.png', true);
    }

    create() {
        console.log("Loaded preload");
        this.game.state.start('MainGame');
    }

}

export default Preload;