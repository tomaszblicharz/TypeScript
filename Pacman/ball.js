class Ball {

    constructor(game, position) {
        this.image = document.querySelector('.goldenHole');
        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;
        this.game = game;
        this.size = 50;
        this.position = position;
        // this.position = {
        //     x: 120,
        //     y: 120
        // };
        this.flagDeletion = false;

    }
    draw(ctx) {

        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size)

    }


    update() {
        if (checkBall(this.game.pacman, this.game.listBall)) {
            this.flagDeletion = true;
        }
    }

}