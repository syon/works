var load_state = {
    preload: function() {
        console.log('Load#preload');

        this.game.stage.backgroundColor = '#aaa';
        this.game.load.audio('bgm', 'assets/sousa_kaishi.wav');
        this.game.load.audio('tide', 'assets/tide.wav');

        this.game.load.spritesheet('player', 'assets/carp.png', 32, 32);
        this.game.load.spritesheet('tantei_frame', 'assets/tantei_frame.gif', 512, 512);
        this.game.load.spritesheet('tantei_photo', 'assets/tantei_photo.gif', 288, 224);
    },

    create: function() {
        console.log('Load#create');

        this.game.state.start('menu');
    }
};