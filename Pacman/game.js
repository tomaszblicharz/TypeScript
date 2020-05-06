class Game {
    constructor(gameWidth, gameHeight) {
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.game = game;
        this.startTime = 0;
        this.finishTime;
        this.endGame = false;
        this.timeBoard = document.querySelector('.time');
        this.listWall = [];
        this.listBall = [];
        // this.timeStart()
    }

    startGame() {
        // console.log(this)

        this.pacman = new Pacman(this);
        this.ball = new Ball(this);
        this.wall = new Wall(this)


        for (let i = 0; i < 15; i++) {
            this.listWall.push(new Wall(this, {
                x: i * 40,
                y: 0

            }))

        }
        for (let i = 0; i < 15; i++) {
            this.listBall.push(new Ball(this, {
                x: i * 40,
                y: 0

            }))

        }

    }

    draw(ctx) {

        this.pacman.draw(ctx)
        this.listBall.forEach(object => object.draw(ctx))
        this.listWall.forEach(object => object.draw(ctx))
        // this.wall.draw(ctx)
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
    // timeStart() {
    //     let time =  window.setInterval(this.timeBoard, 1000);
    //     this.timeBoard.textContent = this.startTime

    // }
    // timeStart() {


    //     this.timeBoard.innerHTML = this.startTime;
    //     this.startTime++
    //     // console.log(time)
    //     setTimeout("Time()", 1000);
    // }
    finishGame() {

        let timeToFinishGame = new Date().getTime() - this.startTime;
        alert(`Wygrałeś! Twój czas to ${timeToFinishGame.toFixed(1)* 0.001} s`)
        location.reload();
    }
}