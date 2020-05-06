class Ball {

    constructor(game, position) {
        this.image = document.querySelector('.goldenHole');
        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;
        this.game = game;
        this.size = 20;
        this.position = position;
        this.position = {
            x: 40,
            y: 40
        }


    }
    draw(ctx) {

        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size)

    }



}