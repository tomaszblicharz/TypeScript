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
    update() {
        if (checkWall(this.game.pacman, this)) {
            this.game.pacman.position.x -= this.game.pacman.speed.x;
            this.game.pacman.position.y -= this.game.pacman.speed.y;
            this.game.pacman.speed.x = 0
            this.game.pacman.speed.y = 0
        }
        if (checkWall(this.game.monster, this)) {

            // this.game.monster.speed.x = -this.game.monster.speed.x
            // this.game.monster.speed.y = -this.game.monster.speed.y

            if (this.game.monster.position.x + this.game.monster.size > this.size || this.game.monster.position.x < 0) {

                this.game.monster.speed = {
                    x: 0.2,
                    y: 0
                }
                // } else if (this.game.monster.position.y + this.game.monster.size > this.size || this.game.monster.position.y < 0) {
                //     this.game.monster.speed = {
                //         x: 0,
                //         y: 0.2
                //     }
                // } else if (this.game.monster.position.y + this.game.monster.size > this.size || this.game.monster.position.x > 0) {
                //     this.game.monster.speed = {
                //         x: -0.2,
                //         y: 0
                //     }

            }
        }
    }
}