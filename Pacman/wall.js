class Wall {

    constructor(game, position) {
        this.image = document.querySelector('.imgwall')
        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;
        this.game = game;
        this.position = position;
        this.size = 40;

    }
    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size)
    }

}