///<reference path="phaser.d.ts"/>

module Flappy {

    export class Boot extends Phaser.State {

        preload() {

            this.load.image('preloadBar', 'assets/loader.png');

        }

        create() {

            //  Unless you specifically need to support multitouch I would recommend setting this to 1
            this.input.maxPointers = 1;

            //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
            this.stage.disableVisibilityChange = true;

            if (this.game.device.desktop) {
                //  If you have any desktop specific settings, they can go in here
                this.scale.pageAlignHorizontally = true;
            }
            else {
                // Mobile settings
                this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                //this.scale.minWidth = 320;
                //this.scale.minHeight = 450;
                //this.scale.maxWidth = 640;
                //this.scale.maxHeight = 900;
                //this.scale.forceLandscape = true;
                //this.scale.pageAlignHorizontally = true;
                //this.scale.setScreenSize(true);

                // for Retina
                //this.scale.maxWidth  = Math.round(this.game.canvas.width  / this.game.device.pixelRatio);
                //this.scale.maxHeight = Math.round(this.game.canvas.height / this.game.device.pixelRatio);
                //this.scale.minWidth  = Math.round(this.game.canvas.width  / this.game.device.pixelRatio);
                //this.scale.minHeight = Math.round(this.game.canvas.height / this.game.device.pixelRatio);
                //this.scale.refresh();
            }

            this.game.state.start('Preloader', true, false);

        }

    }

}