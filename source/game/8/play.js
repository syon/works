var play_state = {

    create: function() {
        console.log('Play#create');

        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.backgroundColor = '#000000';
        this.bg = this.game.add.tileSprite(0, 0, 800, 600, 'background');
        this.bg.fixedToCamera = true;

        this.map = this.game.add.tilemap('level1');
        this.map.addTilesetImage('tiles-1');
        this.map.setCollisionByExclusion([ 13, 14, 15, 16, 46, 47, 48, 49, 50, 51 ]);
        this.layer = this.map.createLayer('Tile Layer 1');
        this.layer.debug = true;
        this.layer.resizeWorld();

        this.game.physics.arcade.gravity.y = 550;

        this.player = game.add.sprite(32, 32, 'dude');
        this.facing = 'left';
        this.jumpTimer = 0;
        this.game.physics.enable(this.player, Phaser.Physics.ARCADE);

        this.player.body.bounce.y = 0.2;
        this.player.body.collideWorldBounds = true;
        this.player.body.setSize(20, 32, 5, 16);

        this.player.animations.add('left', [0, 1, 2, 3], 10, true);
        this.player.animations.add('turn', [4], 20, true);
        this.player.animations.add('right', [5, 6, 7, 8], 10, true);

        this.game.camera.follow(this.player);

        this.cursors = game.input.keyboard.createCursorKeys();
        this.jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        this.bgm = this.game.add.audio('bgm', 1, true);
        this.bgm.play('', 0, .5, true);
    },

    update: function() {
        //console.log('Play#update');

        this.game.physics.arcade.collide(this.player, this.layer);

        this.player.body.velocity.x = 0;

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
        // Auto Move start ----
        else if (this.game.input.onDown)
        {
            var rnd = Math.floor(Math.random()*10/4);
            if (rnd == 0) {
                this.player.body.velocity.x = 150;
                if (this.facing != 'right')
                {
                    this.player.animations.play('right');
                    this.facing = 'right';
                }
            }
            else if (this.player.body.onFloor() && this.game.time.now > this.jumpTimer) {
                this.player.body.velocity.y = -350;
            }
        }
        // Auto Move end ----
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
                    this.player.frame = 5;
                }

                this.facing = 'idle';
            }
        }
        
        if (this.jumpButton.isDown && this.player.body.onFloor() && this.game.time.now > this.jumpTimer)
        {
            this.player.body.velocity.y = -350;
            this.jumpTimer = this.game.time.now + 750;
        }
    },
};
