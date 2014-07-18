var play_state = {

    create: function() {
        console.log('Play#create');

        this.bgm = this.game.add.audio('bgm', 1, true);
        this.bgm.play('', 0, .5, true);

        this.tantei = this.game.add.sprite(0, 0, 'tantei_frame');
        this.tantei = this.game.add.sprite(32, 48, 'tantei_photo');

        this.cursor = game.input.keyboard.createCursorKeys();

        var txt_style = { font: "16px Misaki", fill: "#ffffff" };
        var btm_txt_bd = "わたしが　ちょうど　うなかみの　がけの\n\nそばを　とおりかかったら　みちばたの\n\nくさむらに　きみが　たおれていた。";
        this.btm_txt = this.game.add.text(50, 320, btm_txt_bd, txt_style);
        var rgt_txt_bd = "＿＿＿＿＿＿\n\nなまえ\n\n＿＿＿＿＿＿";
        this.rgt_txt = this.game.add.text(370, 60, rgt_txt_bd, txt_style);
    },

    update: function() {
        console.log('Play#update');
    },
};
