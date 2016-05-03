var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Flappy;
(function (Flappy) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
        }
        Boot.prototype.preload = function () {
            this.load.image('preloadBar', 'assets/loader.png');
        };
        Boot.prototype.create = function () {
            this.input.maxPointers = 1;
            this.stage.disableVisibilityChange = true;
            if (this.game.device.desktop) {
                this.scale.pageAlignHorizontally = true;
            }
            else {
                this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            }
            this.game.state.start('Preloader', true, false);
        };
        return Boot;
    })(Phaser.State);
    Flappy.Boot = Boot;
})(Flappy || (Flappy = {}));
var Flappy;
(function (Flappy) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            _super.apply(this, arguments);
        }
        Preloader.prototype.preload = function () {
            this.preloadBar = this.add.sprite(50, 125, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);
            var x = 60, y = this.world.height / 2;
            this.preloadBar.position.set(x, y);
            this.preloadBar.scale.set(0.5, 0.5);
            this.stage.backgroundColor = '#71c5cf';
            this.load.image('bird', 'assets/bird.png');
            this.load.image('pipe', 'assets/pipe.png');
            this.load.audio('jump', 'assets/jump.wav');
            this.load.audio('bgm', 'assets/bgm.wav');
        };
        Preloader.prototype.create = function () {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        };
        Preloader.prototype.startMainMenu = function () {
            this.game.state.start('Menu', true, false);
        };
        return Preloader;
    })(Phaser.State);
    Flappy.Preloader = Preloader;
})(Flappy || (Flappy = {}));
var Flappy;
(function (Flappy) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        function Menu() {
            _super.apply(this, arguments);
        }
        Menu.prototype.create = function () {
            var style = { font: "30px Arial", fill: "#ffffff" };
            var x = this.world.width / 2, y = this.world.height / 2;
            var text = this.add.text(x, y - 50, "Tap to start", style);
            text.anchor.set(0.5, 0.5);
            var space_key = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            space_key.onDown.addOnce(this.startGame, this);
            this.input.onDown.addOnce(this.startGame, this);
            if (Flappy.Game.score > 0) {
                var score_label = this.add.text(x, y + 50, "score: " + Flappy.Game.score, style);
                score_label.anchor.set(0.5, 0.5);
            }
        };
        Menu.prototype.startGame = function () {
            this.game.state.start('Level1', true, false);
        };
        return Menu;
    })(Phaser.State);
    Flappy.Menu = Menu;
})(Flappy || (Flappy = {}));
var Flappy;
(function (Flappy) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game, x, y) {
            _super.call(this, game, x, y, 'bird', 0);
            this.game.physics.arcade.enable(this);
            this.body.gravity.y = 1000;
            this.anchor.setTo(-0.2, 0.5);
            this.jump_sound = this.game.add.audio('jump');
            game.add.existing(this);
            var space_key = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            space_key.onDown.add(this.jump, this);
            game.input.onDown.add(this.jump, this);
        }
        Player.prototype.update = function () {
        };
        Player.prototype.jump = function () {
            if (this.alive == false)
                return;
            this.body.velocity.y = -310;
            this.game.add.tween(this).to({ angle: -20 }, 100).start();
            this.jump_sound.play();
        };
        return Player;
    })(Phaser.Sprite);
    Flappy.Player = Player;
})(Flappy || (Flappy = {}));
var Flappy;
(function (Flappy) {
    var Level1 = (function (_super) {
        __extends(Level1, _super);
        function Level1() {
            _super.apply(this, arguments);
        }
        Level1.prototype.create = function () {
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.bgm = this.add.audio('bgm', 1, true);
            this.bgm.play();
            this.bird = new Flappy.Player(this.game, 60, 245);
            this.pipes = this.add.group();
            this.pipes.createMultiple(20, 'pipe');
            this.timer = this.time.events.loop(1500, this.add_row_of_pipes, this);
            Flappy.Game.score = 0;
            var style = { font: "30px Arial", fill: "#ffffff" };
            this.label_score = this.add.text(20, 20, "0", style);
        };
        Level1.prototype.update = function () {
            if (this.bird.inWorld == false)
                this.restart_game();
            if (this.bird.angle < 20)
                this.bird.angle += 1;
            this.game.physics.arcade.collide(this.bird, this.pipes, this.hit_pipe, null, this);
        };
        Level1.prototype.hit_pipe = function () {
            if (this.bird.alive == false)
                return;
            this.bird.alive = false;
            this.time.events.remove(this.timer);
            this.pipes.forEachAlive(function (p) {
                p.body.velocity.x = 0;
            }, this);
        };
        Level1.prototype.restart_game = function () {
            this.game.time.events.remove(this.timer);
            this.bgm.stop();
            this.game.state.start('Menu');
        };
        Level1.prototype.add_one_pipe = function (x, y) {
            var pipe = this.pipes.getFirstDead();
            this.game.physics.arcade.enable(pipe);
            pipe.reset(x, y);
            pipe.body.velocity.x = -200;
            pipe.checkWorldBounds = true;
            pipe.outOfBoundsKill = true;
        };
        Level1.prototype.add_row_of_pipes = function () {
            var hole = Math.floor(Math.random() * 5) + 1;
            for (var i = 0; i < 8; i++)
                if (i != hole && i != hole + 1)
                    this.add_one_pipe(320, i * 60 + 10);
            Flappy.Game.score++;
            this.label_score.text = Flappy.Game.score.toString();
        };
        return Level1;
    })(Phaser.State);
    Flappy.Level1 = Level1;
})(Flappy || (Flappy = {}));
var Flappy;
(function (Flappy) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, 320, 450, Phaser.AUTO, 'content', null);
            this.state.add('Boot', Flappy.Boot, false);
            this.state.add('Preloader', Flappy.Preloader, false);
            this.state.add('Menu', Flappy.Menu, false);
            this.state.add('Level1', Flappy.Level1, false);
            this.state.start('Boot');
        }
        Game.score = 0;
        return Game;
    })(Phaser.Game);
    Flappy.Game = Game;
})(Flappy || (Flappy = {}));
window.onload = function () {
    var game = new Flappy.Game();
};
