///<reference path="phaser.d.ts"/>
///<reference path="Boot.ts"/>
///<reference path="Preloader.ts"/>
///<reference path="Menu.ts"/>
///<reference path="Level1.ts"/>

module Flappy {

    export class Game extends Phaser.Game {
        
        static score: number = 0;

        constructor() {

            super(320, 450, Phaser.AUTO, 'content', null);

            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('Menu', Menu, false);
            this.state.add('Level1', Level1, false);

            this.state.start('Boot');
        }

    }

}