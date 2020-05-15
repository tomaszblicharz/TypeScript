class Monster {

    constructor(game) {

        this.image = document.querySelector('.monster');
        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;
        this.game = game;
        this.position = {
            x: 241,
            y: 242
        }

        this.speed = {
            x: 0,
            y: 0
        };
        this.size = 36;

        document.querySelector('.btnStart').addEventListener('click', () => this.startMoveMonster());
    }

    startMoveMonster() {
        console.log("dziala")


    }
    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size)
    }

    update() {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if (checkWall(this.game.monster, this)) {

            // this.game.monster.speed.x = -this.game.monster.speed.x
            // this.game.monster.speed.y = -this.game.monster.speed.y
            // if (this.speed.x <= 0 || this.speed.y <= 0)
            //     this.speed = {
            //         x: -0.2,
            //         y: 0
            //     }
            // if (this.speed.x <= 0 || this.speed.y <= 0) {
            //     this.speed = {
            //         x: 0.2,
            //         y: 0
            //     }
            //     if (this.speed.x <= 0 || this.speed.y <= 0) {
            //         this.speed = {
            //             x: 0,
            //             y: 0.2
            //         }
            if (this.speed.x <= 0 || this.speed.y <= 0) {
                this.speed = {
                    x: 0,
                    y: -0.2
                }

                // if (this.game.monster.position.x + this.game.monster.size > this.size || this.game.monster.position.x < 0) {
                //     this.game.monster.speed.x = 0

                // }
                // //wall on Top or bottom
                // if (this.game.monster.position.y + this.game.monster.size > this.size || this.game.monster.position.y < 0) {
                //     this.game.monster.speed.y = 0
                // }
                // switch (checkWall) {
                //     case 37:

                //         // console.log("lewo")
                //         break;
                //     case 38:
                //         this.speed = {
                //             x: 0,
                //             y: -1.3
                //         };
                //         // console.log("góra")
                //         break;
                //     case 39:
                //         this.speed = {
                //             x: 1.3,
                //             y: 0
                //         };
                //         // console.log("prawo")
                //         break;
                //     case 40:
                //         this.speed = {
                //             x: 0,
                //             y: 1.3
                //         };
                //         // console.log("dół")
                //         break;

            }
        }

    }
}
//     }
// }