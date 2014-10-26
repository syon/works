///<reference path="phaser.d.ts"/>

module Flappy {

    export class Menu extends Phaser.State {

        background: Phaser.Sprite;
        logo: Phaser.Sprite;

        create() {

            var style = { font: "30px Arial", fill: "#ffffff" };
            var x = this.world.width/2, y = this.world.height/2;
            var text = this.add.text(x, y-50, "Tap to start", style);
            text.anchor.set(0.5, 0.5);

            // Tap to start (Tap or Spacekey)
            var space_key = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            space_key.onDown.addOnce(this.startGame, this);
            this.input.onDown.addOnce(this.startGame, this);

            // Score
            if (Game.score > 0) {
                var score_label = this.add.text(x, y+50, "score: " + Game.score, style);
                score_label.anchor.set(0.5, 0.5);
            }
        }

        startGame() {

            this.game.state.start('Level1', true, false);

        }

    }

}