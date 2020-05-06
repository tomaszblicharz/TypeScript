class Pacman {

    constructor(game) {

        this.image = document.querySelector('.pacman');
        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;
        this.x = 10;
        this.y = 300;
        this.speed = {
            x: 0,
            y: 0
        };
        this.size = 30;
        this.gameloop;
        document.querySelector('.btnStart').addEventListener('click', () => this.startMoveBall());

        this.game = game;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.size, this.size)
    }
    startMoveBall() {
        document.addEventListener("keydown", e => {

            switch (e.keyCode) {
                case 37:
                    this.speed = {
                        x: -1.3,
                        y: 0
                    };
                    // console.log("lewo")
                    break;
                case 38:
                    this.speed = {
                        x: 0,
                        y: -1.3
                    };
                    // console.log("góra")
                    break;
                case 39:
                    this.speed = {
                        x: 1.3,
                        y: 0
                    };
                    // console.log("prawo")
                    break;
                case 40:
                    this.speed = {
                        x: 0,
                        y: 1.3
                    };
                    // console.log("dół")
                    break;

            }

            // console.log(e.keyCode)
        })
        document.addEventListener("keyup", e => {

            switch (e.keyCode) {
                case 37:
                    if (this.speed.x < 0)
                        this.stop()

                    break;
                case 38:
                    if (this.speed.y < 0)
                        this.stop()

                    break;
                case 39:
                    if (this.speed.x > 0)
                        this.stop()

                    break;
                case 40:
                    if (this.speed.y > 0)
                        this.stop()

                    break;

            }

            // console.log(e.keyCode)
        })

    }
    stop() {
        this.speed = {
            x: 0,
            y: 0
        };
    }

    update() {
        this.x += this.speed.x;
        this.y += this.speed.y;
        // wall on left or right
        if (this.x + this.size > this.gameWidth || this.x < 0) {
            this.speed.x = 0

        }
        //wall on Top or bottom
        if (this.y + this.size > this.gameHeight || this.y <= 0) {
            this.speed.y = 0
        }


        checkBallInHole(this, this.game.ball)



    }



}