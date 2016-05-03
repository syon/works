///<reference path="phaser.d.ts"/>
///<reference path="Player.ts"/>

module Flappy {

    export class Level1 extends Phaser.State {

        bgm: Phaser.Sound;
        bird: Flappy.Player;
        pipes: Phaser.Group;
        timer: Phaser.TimerEvent;
        label_score: Phaser.Text;

        create() {

            // Global Settings
            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            // BGM
            this.bgm = this.add.audio('bgm', 1, true);
            this.bgm.play();

            // Bird
            this.bird = new Player(this.game, 60, 245);
            
            // Pipes
            this.pipes = this.add.group();
            this.pipes.createMultiple(20, 'pipe');
            this.timer = this.time.events.loop(1500, this.add_row_of_pipes, this);

            // Score
            Game.score = 0;
            var style = { font: "30px Arial", fill: "#ffffff" };
            this.label_score = this.add.text(20, 20, "0", style);
        }
        
        update() {
            if (this.bird.inWorld == false)
                this.restart_game();

            if (this.bird.angle < 20)
                this.bird.angle += 1;

            this.game.physics.arcade.collide(this.bird, this.pipes, this.hit_pipe, null, this);
        }

        hit_pipe() {
            if (this.bird.alive == false)
                return;

            this.bird.alive = false;
            this.time.events.remove(this.timer);

            this.pipes.forEachAlive(function(p){
                p.body.velocity.x = 0;
            }, this);
        }

        restart_game() {
            this.game.time.events.remove(this.timer);

            this.bgm.stop();

            // This time we go back to the 'menu' state
            this.game.state.start('Menu');
        }

        add_one_pipe(x, y) {
            var pipe = this.pipes.getFirstDead();
            this.game.physics.arcade.enable(pipe);
            pipe.reset(x, y);
            pipe.body.velocity.x = -200;
            pipe.checkWorldBounds = true;
            pipe.outOfBoundsKill = true;
        }

        add_row_of_pipes() {
            var hole = Math.floor(Math.random()*5)+1;

            for (var i = 0; i < 8; i++)
                if (i != hole && i != hole +1)
                    this.add_one_pipe(320, i*60+10);

            // Not 'this.score', but just 'score'
            Game.score++;
            this.label_score.text = Game.score.toString();//'999';//this.castl.score.toString;
        }
    }

}