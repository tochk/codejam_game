/**
 * Created by tochk on 17.12.2016.
 */


import * as Phaser from "phaser";

class Preload extends Phaser.State {

    preload() {
        this.game.load.tilemap('tree_map', 'assets/tree.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('treeSprite', 'assets/treeSprite.png', true);
    }

    create() {
        console.log("Loaded preload");
        this.game.state.start('Start');
    }

}

export default Preload;