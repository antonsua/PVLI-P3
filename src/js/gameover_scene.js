var GameOver = {
    create: function () {
        console.log("Game Over");
        var logo = this.game.add.sprite(0, 0, 'gameOver');
        var button = this.game.add.button(700, 500, 'button', this.actionOnClick, this, 2, 1, 0);
        button.anchor.set(0.5);
        var goText = this.game.add.text(400, 100, "GameOver");
        var text = this.game.add.text(0, 0, "Reset Game");
        text.anchor.set(0.5);
        goText.anchor.set(0.5);
        button.addChild(text);
        
        var returnButton = this.game.add.button(700, 400, 'button', this.goMenu, this, 2, 1, 0);
        returnButton.anchor.set(0.5);

        var returnMenuText = this.game.add.text(0, 0, 'Return Main Menu');
        returnMenuText.font = 'Sniglet';
        returnMenuText.anchor.set(0.5);
        returnButton.addChild(returnMenuText);
    },
    
    goMenu: function () {
        this.game.state.start('menu');
    },

    actionOnClick: function () {
        this.game.state.start('play');
    }
};

module.exports = GameOver;