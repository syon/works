var play_state = {

    create: function() {
        console.log('Play#create');

        var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space_key.onDown.add(this.tide, this);
        this.game.input.onDown.add(this.tide, this);

        this.bgm = this.game.add.audio('bgm', 1, true);
        this.bgm.play('', 0, .5, true);

        this.tide_sound = this.game.add.audio('tide');

        this.tantei = this.game.add.sprite(0, 0, 'tantei_frame');
        this.tantei = this.game.add.sprite(32, 48, 'tantei_photo');

        var txt_style = { font: "16px Misaki", fill: "#ffffff" };
        var btm_txt_bd = "\nわたしが　ちょうど　うなかみの　がけの\n\nそばを　とおりかかったら　みちばたの\n\nくさむらに　きみが　たおれていた。";
        this.btm_txt = this.game.add.text(50, 310, btm_txt_bd, txt_style);
        var rgt_txt_bd = "＿＿＿＿＿＿\n\nなまえ\n\n＿＿＿＿＿＿";
        this.rgt_txt = this.game.add.text(370, 60, rgt_txt_bd, txt_style);
    },

    update: function() {
        //console.log('Play#update');
    },

    tide: function() {
        this.tide_sound.play();
    },
};
