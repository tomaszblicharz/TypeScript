import Game from "./game";
import { checkBall } from "./collisionBall";

interface test1 {
  x: number;
  y: number;
}
let startMoveMonster = false;
export default class Monster {
  image: HTMLElement;
  gameHeight: number;
  gameWidth: number;
  game: Game;
  size: number;
  position: test1;
  speed: test1;
  collisionWithBall: boolean;
  constructor(game) {
    this.collisionWithBall = false;
    this.image = document.querySelector(".monster");
    this.gameHeight = game.gameHeight;
    this.gameWidth = game.gameWidth;
    this.game = game;
    this.position = {
      x: 241,
      y: 242,
    };
    this.speed = {
      x: 0.1,
      y: 0,
    };
    this.size = 30;
    // this.randomSpeed()
    document
      .querySelector(".btnStart")
      .addEventListener("click", () => (startMoveMonster = true));
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }
  randomSpeed() {
    if (startMoveMonster) {
      const speed = [
        {
          x: 0.4,
          y: 0,
        },
        {
          x: 0,
          y: 0.4,
        },
        {
          x: -0.4,
          y: 0,
        },
        {
          x: 0,
          y: -0.4,
        },
      ];
      this.speed = speed[Math.floor(Math.random() * speed.length)];
    }
  }
  clearSpeed() {
    this.speed = {
      x: 0,
      y: 0,
    };
    this.game.wall.collisionWithWall = true;
  }
  update() {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // if ((this.game.ball.collisionWithBall = true)) {
    //   this.randomSpeed();
    // } else if ((this.game.ball.collisionWithBall = false)) {
    //   this.speed = {
    //     x: 0,
    //     y: 0,
    //   };
    // }
    // this.game.monster.speed.x = -this.game.monster.speed.x
    // this.game.monster.speed.y = -this.game.monster.speed.y

    // if (this.position.x + this.size > this.game.wall.size || this.position.x < 0) {

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

//     }
// }
