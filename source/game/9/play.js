var play_state = {

    create: function() {
        console.log('Play#create');

        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.backgroundColor = '#000000';
        //this.bg = this.game.add.tileSprite(0, 0, 800, 600, 'background');
        //this.bg.fixedToCamera = true;

        this.map = this.game.add.tilemap('World1');
        this.map.addTilesetImage('SuperMarioBros');
        this.map.setCollision([ 40, 14, 15, 16, 21, 22, 23, 24, 25, 27, 28 ]);
        this.layer = this.map.createLayer('World1');
        //this.layer.debug = true;
        this.layer.resizeWorld();

        this.game.physics.arcade.gravity.y = 800;

        this.player = game.add.sprite(16, 16, 'mario');
        this.facing = 'left';
        this.jumpTimer = 0;
        this.game.physics.enable(this.player, Phaser.Physics.ARCADE);

        this.player.body.bounce.y = 0;
        this.player.body.collideWorldBounds = true;
        this.player.body.setSize(16, 16);

        // add(name, frames, frameRate, loop, useNumericIndex)
        this.player.animations.add('left', [0, 1], 10, true);
        this.player.animations.add('turn', [0], 20, true);
        this.player.animations.add('right', [0, 1], 10, true);

        this.game.camera.follow(this.player);

        this.cursors = game.input.keyboard.createCursorKeys();
        this.jumpButton = this.game.input.pointer1;

        //this.bgm = this.game.add.audio('bgm', 1, true);
        //this.bgm.play('', 0, .5, true);

        this.jump_sound = this.game.add.audio('jump', 1, true);
    },

    update: function() {
        //console.log('Play#update');

        this.game.physics.arcade.collide(this.player, this.layer);

        this.player.body.velocity.x = 100; // Auto Mobe //0;

        if (this.cursors.left.isDown)
        {
            this.player.body.velocity.x = -150;

            if (this.facing != 'left')
            {
                this.player.animations.play('left');
                this.facing = 'left';
            }
        }
        else if (this.cursors.right.isDown)
        {
            this.player.body.velocity.x = 150;

            if (this.facing != 'right')
            {
                this.player.animations.play('right');
                this.facing = 'right';
            }
        }
        else
        {
            if (this.facing != 'idle')
            {
                this.player.animations.stop();

                if (this.facing == 'left')
                {
                    this.player.frame = 0;
                }
                else
                {
                    this.player.frame = 0;
                }

                this.facing = 'idle';
            }
        }
        
        if (this.jumpButton.isDown && this.player.body.onFloor() && this.game.time.now > this.jumpTimer)
        {
            this.player.body.velocity.y = -335;
            this.jump_sound.play('', 0, .5, false);
            this.jumpTimer = this.game.time.now + 750;
        }
    },
};
