///<reference path="phaser.d.ts"/>

module Flappy {

    export class Player extends Phaser.Sprite {

        jump_sound: Phaser.Sound;
        
        constructor(game: Phaser.Game, x: number, y: number) {

            super(game, x, y, 'bird', 0);
            this.game.physics.arcade.enable(this);
            this.body.gravity.y = 1000;
            this.anchor.setTo(-0.2, 0.5);
            this.jump_sound = this.game.add.audio('jump');
            game.add.existing(this);

            // User Input
            var space_key = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            space_key.onDown.add(this.jump, this);
            game.input.onDown.add(this.jump, this);
        }

        update() {
        }

        jump() {
            if (this.alive == false)
                return;

            this.body.velocity.y = -310;
            this.game.add.tween(this).to({angle: -20}, 100).start();
            this.jump_sound.play();
        }

    }

}