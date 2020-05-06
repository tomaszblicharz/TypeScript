class Ball {

    constructor(game, position) {
        this.image = document.querySelector('.goldenHole');
        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;
        this.game = game;
        this.size = 20;
        this.position = position;



    }
    draw(ctx) {

        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size)

    }



}