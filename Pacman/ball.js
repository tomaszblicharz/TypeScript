class Ball {

    constructor(game) {
        this.image = document.querySelector('.goldenHole');
        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;
        this.game = game;
        this.size = 40;
        this.x = 300;
        this.y = 300;


    }
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.size, this.size)
        // for (let i = 0; i < 10; i++) {
        //     walls.push(new Wall(this, {
        //         x: 1 * 24,
        //         y: 23
        //     }))
        // }
    }


}