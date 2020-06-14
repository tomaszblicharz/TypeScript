import { checkBall } from "./collisionBall";
import Game from "./game";
interface test1 {
  x: number;
  y: number;
}

export default class Ball {
  image: HTMLElement;
  gameHeight: number;
  gameWidth: number;
  game: Game;
  size: number;
  position: test1;
  flagDeletion: boolean;

  constructor(game, position) {
    this.image = document.querySelector(".goldenHole");
    this.gameHeight = game.gameHeight;
    this.gameWidth = game.gameWidth;
    this.game = game;
    this.size = 40;
    this.position = position;
    this.flagDeletion = false;
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

  update() {
    if (checkBall(this.game.pacman, this)) {
      this.flagDeletion = true;
    }
    if (this.flagDeletion) {
      this.game.listBall = this.game.listBall.filter(
        (object: any) => !object.flagDeletion
      );
    }
  }
}
