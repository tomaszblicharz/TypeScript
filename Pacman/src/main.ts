import Game from "./game";

document.addEventListener("DOMContentLoaded", appStart);

const game_width: number = 560,
  game_height: number = 600;

let canvas, ctx, game: Game, position: number;

function appStart() {
  canvas = document.querySelector(".gameArea");
  ctx = canvas.getContext("2d");
  game = new Game(game_width, game_height, position);
  game.startGame();
  gameLoop();
}

function gameLoop() {
  ctx.clearRect(0, 0, game_width, game_height);
  game.update();
  game.draw(ctx);
  requestAnimationFrame(gameLoop);
}
