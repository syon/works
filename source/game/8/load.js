var load_state = {
    preload: function() {
        console.log('Load#preload');

        this.game.load.tilemap('level1',    'assets/game/level1.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('tiles-1',     'assets/game/tiles-1.png');
        this.game.load.spritesheet('dude',  'assets/game/dude.png', 32, 48);
        this.game.load.spritesheet('droid', 'assets/game/droid.png', 32, 32);
        this.game.load.image('starSmall',   'assets/game/star.png');
        this.game.load.image('starBig',     'assets/game/star2.png');
        this.game.load.image('background',  'assets/game/background2.png');

        this.game.stage.backgroundColor = '#aaa';
        this.game.load.audio('bgm', 'assets/action_title.wav');
    },

    create: function() {
        console.log('Load#create');

        this.game.state.start('menu');
    }
};
