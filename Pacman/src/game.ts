import Pacman from "./pacman";
import Ball from "./ball";
import Wall from "./wall";
import Monster from "./monster";
import { checkMonster } from "./collisionMonster";

let GAMESTATE = {
  GAMEOVER: false,
  WINNER: false,
  RUNNING: 2,
};

export default class Game {
  gameHeight: number;
  gameWidth: number;
  position: number;
  listWall: object[];
  listBall: object[];
  gameObjects: object[];
  pacman: Pacman;
  ball: Ball;
  wall: Wall;
  monster: Monster;
  board: object[];
  GAMESTATE: boolean;
  constructor(gameWidth, gameHeight, position) {
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    // this.game = game;
    this.position = position;
    this.listWall = [];
    this.listBall = [];
    this.gameObjects = [];
  }

  startGame() {
    // this.gamestate = GAMESTATE.RUNNING;

    this.pacman = new Pacman(this);
    this.ball = new Ball(this, this.position);
    this.wall = new Wall(this, this.position);
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
      [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
      [1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];

    this.board.forEach((row: any, index) => {
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
    this.listBall.forEach((object: any) => object.draw(ctx));
    this.listWall.forEach((object: any) => object.draw(ctx));
    this.gameObjects.forEach((object: any) => object.draw(ctx));

    if (GAMESTATE.GAMEOVER) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.font = "40px classic";
      ctx.textAlign = "center";
      ctx.fillStyle = "white";
      ctx.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2);
    }

    if (GAMESTATE.WINNER) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.font = "40px classic";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("WINNER", this.gameWidth / 2, this.gameHeight / 2);
    }
  }

  update() {
    this.listBall.forEach((object: any) => object.update());
    this.listWall.forEach((object: any) => object.update());
    this.gameObjects.forEach((object: any) => object.update());
    if (checkMonster(this.monster, this.pacman)) {
      GAMESTATE.GAMEOVER = true;
    }

    if (this.listBall.length === 0) {
      GAMESTATE.WINNER = true;
      console.log(GAMESTATE.WINNER);
    }
  }
}
