import Pacman from "./pacman.js";
import Ball from "./ball.js";
import Wall from "./wall.js";
import Monster from "./monster.js";
import {
    checkMonster
} from "./collisionMonster.js";

export default class Game {
    constructor(gameWidth, gameHeight, position) {
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        // this.game = game;
        this.startTime = 0;
        this.finishTime;
        this.position = position;
        this.timeBoard = document.querySelector(".time");
        this.listWall = [];
        this.listBall = [];
        this.gameObjects = [];
        // this.timeStart()
    }

    startGame() {
        this.pacman = new Pacman(this);
        this.ball = new Ball(this);
        this.wall = new Wall(this);
        this.monster = new Monster(this);
        this.gameObjects = [this.monster, this.pacman];
        this.board = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1],
            [1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
            [1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ];

        this.board.forEach((row, index) => {
            row.forEach((col, index2) => {
                if (col === 1) {
                    let position = {
                        x: index2 * 40,
                        y: index * 40,
                    };
                    this.listWall.push(new Wall(this, position));
                } else {
                    let position = {
                        x: index2 * 40,
                        y: index * 40,
                    };
                    this.listBall.push(new Ball(this, position));
                }
            });
        });
    }

    draw(ctx) {
        this.listBall.forEach((object) => object.draw(ctx));
        this.listWall.forEach((object) => object.draw(ctx));
        this.gameObjects.forEach((object) => object.draw(ctx));
    }

    update() {
        this.listBall.forEach((object) => object.update());
        this.listWall.forEach((object) => object.update());
        this.gameObjects.forEach((object) => object.update());

        if (this.listBall.length === 0) {
            this.finishGame();
        }
        if (checkMonster(this.monster, this.pacman)) {
            this.finishGame();
            // return alert("---GAME OVER---")
        }
    }

    // timeStart() {
    //     this.startTime++
    //     this.timeBoard.textContent = this.startTime;
    //     let time = window.setInterval(this.timeBoard, 1000);

    //     // console.log(time)
    //     setTimeout("time", 1000);
    // }
    finishGame() {
        let timeToFinishGame = new Date().getTime() - this.startTime;
        alert(`Wygrałeś! Twój czas to ${timeToFinishGame.toFixed(1) * 0.001} s`);
        location.reload();
    }
}