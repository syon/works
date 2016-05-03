var load_state = {
    preload: function() {
        console.log('Load#preload');

        this.game.stage.backgroundColor = '#71c5cf';
        this.game.load.audio('bgm', 'assets/bgm.wav');

        this.game.load.spritesheet('player', 'assets/carp.png', 32, 32);
    },

    create: function() {
        console.log('Load#create');

        // When all assets are loaded, go to the 'menu' state
        this.game.state.start('menu');
    }
};