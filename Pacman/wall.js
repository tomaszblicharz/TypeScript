class Wall {

    constructor(game) {
        this.image = document.querySelector('.imgwall')
        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;
        this.game = game;
        this.size = 40;
        this.x = 100;
        this.y = 100;
        // this.createWall()
        this.walls = [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1],
            [1, 1, 1, 1, 1, 1, 1],

        ]
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.size, this.size)
    }
    // createWall() {
    //     for (let i = 1; i < this.walls.length; i++) {
    //         draw(ctx)
    //         console.log(this)

    //     }
    // }
}