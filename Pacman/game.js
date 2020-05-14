class Game {
    constructor(gameWidth, gameHeight, position) {
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.game = game;
        this.startTime = 0;
        this.finishTime;
        this.position = position
        this.timeBoard = document.querySelector('.time');
        this.listWall = [];
        this.listBall = [];

        // this.timeStart()

    }

    startGame() {

        this.pacman = new Pacman(this);
        this.ball = new Ball(this);
        this.wall = new Wall(this)
        this.board = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

        ]

        this.board.forEach((row, index) => {
            row.forEach((col, index2) => {
                if (col === 1) {
                    let position = {
                        x: index2 * 40,
                        y: index * 40
                    };
                    this.listWall.push(new Wall(this, position));
                } else {
                    let position = {
                        x: index2 * 40,
                        y: index * 40
                    };
                    this.listBall.push(new Ball(this, position));
                }




            })
        })
        // console.log(this.listBall)

    }

    draw(ctx) {
        this.listBall.forEach(object => object.draw(ctx));
        this.pacman.draw(ctx);
        this.listWall.forEach(object => object.draw(ctx));

    }


    update() {
        this.listBall.forEach(object => object.update());
        this.listWall.forEach(object => object.update())
        this.pacman.update();



        if (this.listBall.length === 0) {
            this.finishGame()

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