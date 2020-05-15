class Pacman {

    constructor(game) {

        this.image = document.querySelector('.pacman');
        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;
        this.game = game;
        this.position = {
            x: 241,
            y: 481
        }

        this.speed = {
            x: 0,
            y: 0
        };
        this.size = 38;
        document.querySelector('.btnStart').addEventListener('click', () => this.startMoveBall());


    }
    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size)
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
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

    }



}