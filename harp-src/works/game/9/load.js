var load_state = {
    preload: function() {
        console.log('Load#preload');

        this.game.load.tilemap('World1', 'assets/super_mario.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('SuperMarioBros', 'assets/super_mario.png');
        this.game.load.spritesheet('mario', 'assets/mario.png', 16, 16);
        this.game.load.audio('jump', 'assets/smb_jump-small.wav');

        this.game.stage.backgroundColor = '#6888fe';

        //this.game.load.audio('bgm', 'assets/action_title.wav');
    },

    create: function() {
        console.log('Load#create');

        //this.game.state.start('menu');
        this.game.state.start('play');
    }
};
