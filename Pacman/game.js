class Game {
    constructor(gameWidth, gameHeight) {
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.game = game;
        this.startTime = new Date().getTime();
        this.finishTime;
        this.endGame = false;
        this.timeBoard = document.querySelector('.time');
        // this.timeBoard.textContent = this.startTime
    }

    startGame() {
        // console.log(this)

        this.pacman = new Pacman(this);
        this.ball = new Ball(this);
        this.wall = new Wall(this);
    }

    draw(ctx) {

        this.pacman.draw(ctx)
        this.ball.draw(ctx)
        this.wall.draw(ctx)
    }


    update() {
        this.pacman.update()
        if (checkBallInHole(this.pacman, this.ball)) {

            if (!this.endGame) {
                this.finishGame()
                this.endGame = true;
            }
        }
    }

    finishGame() {
        let timeToFinishGame = new Date().getTime() - this.startTime;
        console.log(timeToFinishGame);
        alert(`Wygrałeś! Twój czas to ${timeToFinishGame.toFixed(1)* 0.001} s`)
        location.reload();
    }
}