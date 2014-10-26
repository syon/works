///<reference path="phaser.d.ts"/>

module Flappy {

    export class Preloader extends Phaser.State {

        preloadBar: Phaser.Sprite;

        preload() {

            //  Set-up our preloader sprite
            this.preloadBar = this.add.sprite(50, 125, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);
            var x = 60, y = this.world.height/2;
            this.preloadBar.position.set(x,y);
            this.preloadBar.scale.set(0.5, 0.5);

            //  Load our actual games assets
            this.stage.backgroundColor = '#71c5cf';
            this.load.image('bird', 'assets/bird.png');
            this.load.image('pipe', 'assets/pipe.png');
            this.load.audio('jump', 'assets/jump.wav');
            this.load.audio('bgm', 'assets/bgm.wav');
        }

        create() {

            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);

        }

        startMainMenu() {

            this.game.state.start('Menu', true, false);

        }

    }

}