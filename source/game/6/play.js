var play_state = {

    create: function() {
        console.log('Play#create');

        // audio(key, volume, loop, connect)
        this.bgm = this.game.add.audio('bgm', 1, true);
        // play(marker, position, volume, loop, forceRestart)
        this.bgm.play('', 0, .5, true);


        this.cursor = game.input.keyboard.createCursorKeys();

        this.player = game.add.sprite(350/2, 350/2, 'player');
        this.player.body.collideWorldBounds = true;
        this.player.animations.add('bottom', [0, 1, 2, 3], 10, true);
        this.player.animations.add('top', [12, 13, 14, 15], 10, true);
        this.player.animations.add('right', [8, 9, 10, 11], 10, true);
        this.player.animations.add('left', [4, 5, 6, 7], 10, true);
    },

    update: function() {
        console.log('Play#update');

        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;

        if (this.cursor.left.isDown) {
            this.player.body.velocity.x = -300;
            this.player.animations.play('left');
        } 
        else if (this.cursor.right.isDown) {
            this.player.body.velocity.x = 300;
            this.player.animations.play('right');
        }
        else if (this.cursor.up.isDown) {
            this.player.body.velocity.y = -300; 
            this.player.animations.play('top');
        }
        else if (this.cursor.down.isDown) {
            this.player.body.velocity.y = 300;
            this.player.animations.play('bottom');
        }
        else
            this.player.animations.stop();
    },
};